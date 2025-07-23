import { useState, useEffect, useCallback } from 'react'
import type { 
  ExamWhiteSession, 
  ExamWhiteProgress,
  QuizQuestion 
} from '@/types'

const STORAGE_KEYS = {
  ANSWERED_QUESTIONS: 'examWhiteAnswered',
  SESSIONS: 'examWhiteSessions',
  PROGRESS: 'examWhiteProgress'
}

export const useExamWhiteProgress = () => {
  const [progress, setProgress] = useState<ExamWhiteProgress | null>(null)
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
        ? sessions.reduce((sum: number, session: ExamWhiteSession) => sum + session.score, 0) / sessions.length
        : 0

      const lastSessionDate = sessions.length > 0 
        ? new Date(Math.max(...sessions.map((s: ExamWhiteSession) => new Date(s.startTime).getTime())))
        : new Date()

      const newProgress: ExamWhiteProgress = {
        questionsAnswered: new Set(answeredQuestions),
        sessionsCompleted: sessions,
        totalQuestionsAnswered,
        averageScore: Math.round(averageScore),
        lastSessionDate
      }

      setProgress(newProgress)
      
      // Sauvegarder la progression calculée
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify({
        ...newProgress,
        questionsAnswered: answeredQuestions // Convertir Set en Array pour JSON
      }))

    } catch (error) {
      console.error('Erreur lors du chargement de la progression exam blanc:', error)
      setProgress({
        questionsAnswered: new Set(),
        sessionsCompleted: [],
        totalQuestionsAnswered: 0,
        averageScore: 0,
        lastSessionDate: new Date()
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Ajouter une question répondue
  const addAnsweredQuestion = useCallback((questionId: string) => {
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
  const saveSession = useCallback((session: ExamWhiteSession) => {
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

  // Obtenir des questions non répondues pour éviter les répétitions
  const getUnseenQuestions = useCallback((
    allQuestions: QuizQuestion[]
  ): QuizQuestion[] => {
    if (!progress) return allQuestions

    const answeredSet = progress.questionsAnswered
    return allQuestions.filter(q => !answeredSet.has(q.id))
  }, [progress])

  // Obtenir des statistiques de progression détaillées
  const getProgressStats = useCallback((totalQuestions: number) => {
    if (!progress) return null

    const progressPercentage = Math.round((progress.totalQuestionsAnswered / totalQuestions) * 100)
    
    const recentSessions = progress.sessionsCompleted
      .slice(-5) // Dernières 5 sessions
      .map(session => ({
        date: new Date(session.startTime),
        score: session.score,
        questionsCount: session.questionsAnswered,
        mode: session.mode
      }))

    return {
      totalQuestions,
      questionsAnswered: progress.totalQuestionsAnswered,
      questionsRemaining: totalQuestions - progress.totalQuestionsAnswered,
      progressPercentage,
      averageScore: progress.averageScore,
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
    getUnseenQuestions,
    getProgressStats,
    loadProgress
  }
}