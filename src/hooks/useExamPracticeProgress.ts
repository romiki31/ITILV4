import { useState, useEffect, useCallback } from 'react'
import type { 
  ExamPracticeSession, 
  ExamPracticeProgress,
  ExamPracticeQuestion 
} from '@/types'
import { EXAM_PRACTICE_STATS } from '@/data/examPracticeQuestions'

const STORAGE_KEYS = {
  ANSWERED_QUESTIONS: 'examPracticeAnswered',
  SESSIONS: 'examPracticeSessions',
  PROGRESS: 'examPracticeProgress'
}

export const useExamPracticeProgress = () => {
  const [progress, setProgress] = useState<ExamPracticeProgress | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Charger la progression depuis localStorage
  const loadProgress = useCallback(() => {
    try {
      const answeredQuestions = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.ANSWERED_QUESTIONS) || '[]'
      )
      const sessions = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.SESSIONS) || '[]'
      )

      // Calculer les statistiques
      const totalQuestionsAnswered = answeredQuestions.length
      const averageScore = sessions.length > 0 
        ? sessions.reduce((sum: number, session: ExamPracticeSession) => sum + session.score, 0) / sessions.length
        : 0

      // Identifier les questions faibles/fortes basées sur les sessions
      const questionStats: Record<number, { correct: number; total: number }> = {}
      
      sessions.forEach((session: ExamPracticeSession) => {
        session.answers.forEach(answer => {
          if (!questionStats[answer.questionId]) {
            questionStats[answer.questionId] = { correct: 0, total: 0 }
          }
          questionStats[answer.questionId].total++
          if (answer.isCorrect) {
            questionStats[answer.questionId].correct++
          }
        })
      })

      const weakQuestions = Object.entries(questionStats)
        .filter(([_, stats]) => stats.total >= 2 && (stats.correct / stats.total) < 0.6)
        .map(([id, _]) => parseInt(id))

      const strongQuestions = Object.entries(questionStats)
        .filter(([_, stats]) => stats.total >= 2 && (stats.correct / stats.total) >= 0.8)
        .map(([id, _]) => parseInt(id))

      const lastSessionDate = sessions.length > 0 
        ? new Date(Math.max(...sessions.map((s: ExamPracticeSession) => new Date(s.startTime).getTime())))
        : new Date()

      const newProgress: ExamPracticeProgress = {
        questionsAnswered: new Set(answeredQuestions),
        sessionsCompleted: sessions,
        totalQuestionsAnswered,
        averageScore: Math.round(averageScore),
        weakQuestions,
        strongQuestions,
        lastSessionDate
      }

      setProgress(newProgress)
      
      // Sauvegarder la progression calculée
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify({
        ...newProgress,
        questionsAnswered: answeredQuestions // Convertir Set en Array pour JSON
      }))

    } catch (error) {
      console.error('Erreur lors du chargement de la progression:', error)
      setProgress({
        questionsAnswered: new Set(),
        sessionsCompleted: [],
        totalQuestionsAnswered: 0,
        averageScore: 0,
        weakQuestions: [],
        strongQuestions: [],
        lastSessionDate: new Date()
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Ajouter une question répondue
  const addAnsweredQuestion = useCallback((questionId: number) => {
    const current = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.ANSWERED_QUESTIONS) || '[]'
    )
    
    if (!current.includes(questionId)) {
      const updated = [...current, questionId]
      localStorage.setItem(STORAGE_KEYS.ANSWERED_QUESTIONS, JSON.stringify(updated))
      loadProgress() // Recharger la progression
    }
  }, [loadProgress])

  // Sauvegarder une session terminée
  const saveSession = useCallback((session: ExamPracticeSession) => {
    const current = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.SESSIONS) || '[]'
    )
    
    const updated = [...current, session]
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(updated))
    
    // Ajouter les questions de cette session aux questions répondues
    session.answers.forEach(answer => {
      addAnsweredQuestion(answer.questionId)
    })
    
    loadProgress() // Recharger la progression
  }, [addAnsweredQuestion, loadProgress])

  // Réinitialiser la progression
  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.ANSWERED_QUESTIONS)
    localStorage.removeItem(STORAGE_KEYS.SESSIONS)
    localStorage.removeItem(STORAGE_KEYS.PROGRESS)
    loadProgress()
  }, [loadProgress])

  // Obtenir des questions recommandées (prioriser les questions faibles)
  const getRecommendedQuestions = useCallback((
    count: number,
    allQuestions: ExamPracticeQuestion[]
  ): ExamPracticeQuestion[] => {
    if (!progress) return []

    // Séparer les questions par catégorie
    const weakQuestionSet = new Set(progress.weakQuestions)
    const answeredSet = progress.questionsAnswered
    
    const weakQuestions = allQuestions.filter(q => 
      weakQuestionSet.has(q.id) && !answeredSet.has(q.id)
    )
    
    const unansweredQuestions = allQuestions.filter(q => 
      !answeredSet.has(q.id) && !weakQuestionSet.has(q.id)
    )

    // Prioriser les questions faibles, puis les nouvelles
    const recommended = []
    
    // Ajouter jusqu'à 50% de questions faibles
    const maxWeak = Math.floor(count * 0.5)
    recommended.push(...weakQuestions.slice(0, maxWeak))
    
    // Compléter avec des questions non répondues
    const remaining = count - recommended.length
    recommended.push(...unansweredQuestions.slice(0, remaining))
    
    // Mélanger pour éviter les patterns
    return recommended.sort(() => Math.random() - 0.5)
  }, [progress])

  // Obtenir des statistiques de progression détaillées
  const getProgressStats = useCallback(() => {
    if (!progress) return null

    const totalQuestions = EXAM_PRACTICE_STATS.totalQuestions
    const progressPercentage = Math.round((progress.totalQuestionsAnswered / totalQuestions) * 100)
    
    const recentSessions = progress.sessionsCompleted
      .slice(-5) // Dernières 5 sessions
      .map(session => ({
        date: new Date(session.startTime),
        score: session.score,
        questionsCount: session.questionsAnswered
      }))

    return {
      totalQuestions,
      questionsAnswered: progress.totalQuestionsAnswered,
      questionsRemaining: totalQuestions - progress.totalQuestionsAnswered,
      progressPercentage,
      averageScore: progress.averageScore,
      weakQuestionsCount: progress.weakQuestions.length,
      strongQuestionsCount: progress.strongQuestions.length,
      sessionsCompleted: progress.sessionsCompleted.length,
      recentSessions,
      lastStudyDate: progress.lastSessionDate
    }
  }, [progress])

  useEffect(() => {
    loadProgress()
  }, [loadProgress])

  return {
    progress,
    isLoading,
    addAnsweredQuestion,
    saveSession,
    resetProgress,
    getRecommendedQuestions,
    getProgressStats,
    loadProgress
  }
}