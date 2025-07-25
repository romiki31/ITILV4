import { useState, useEffect, useCallback } from 'react'
import type { 
  ExamPracticeSession, 
  ExamPracticeProgress,
  ExamPracticeQuestion,
  ExamPracticeAnswer,
  ExamPracticeCurrentStats,
  ExamPracticeGamification,
  ProgressLevel,
  ProgressBadge
} from '@/types'
import { EXAM_PRACTICE_STATS } from '@/data/examPracticeQuestions'

const STORAGE_KEYS = {
  ANSWERED_QUESTIONS: 'examPracticeAnswered',
  SESSIONS: 'examPracticeSessions',
  PROGRESS: 'examPracticeProgress'
}

// Configuration des niveaux de progression
const PROGRESS_LEVELS: ProgressLevel[] = [
  { id: 1, name: 'Débutant', minXp: 0, maxXp: 100, color: 'gray', icon: '🌱' },
  { id: 2, name: 'Apprenti', minXp: 100, maxXp: 300, color: 'green', icon: '📚' },
  { id: 3, name: 'Intermédiaire', minXp: 300, maxXp: 600, color: 'blue', icon: '⚡' },
  { id: 4, name: 'Avancé', minXp: 600, maxXp: 1000, color: 'purple', icon: '🎯' },
  { id: 5, name: 'Expert', minXp: 1000, maxXp: 1500, color: 'orange', icon: '🏆' },
  { id: 6, name: 'Maître ITIL', minXp: 1500, maxXp: 9999, color: 'red', icon: '👑' }
]

// Configuration des badges
const AVAILABLE_BADGES: Omit<ProgressBadge, 'unlockedAt'>[] = [
  { id: 'first_question', name: 'Premier Pas', description: 'Première question répondue', icon: '🎯', rarity: 'common' },
  { id: 'perfect_score', name: 'Score Parfait', description: '100% dans une session', icon: '💯', rarity: 'rare' },
  { id: 'streak_5', name: 'En Série', description: '5 bonnes réponses consécutives', icon: '🔥', rarity: 'common' },
  { id: 'streak_10', name: 'Expert en Série', description: '10 bonnes réponses consécutives', icon: '⚡', rarity: 'rare' },
  { id: 'speed_demon', name: 'Rapidité', description: 'Session terminée en moins de 5 min', icon: '💨', rarity: 'epic' },
  { id: 'marathon', name: 'Marathon', description: '40 questions en une session', icon: '🏃', rarity: 'epic' },
  { id: 'consistent', name: 'Régularité', description: '7 jours d\'étude consécutifs', icon: '📅', rarity: 'legendary' },
  { id: 'master', name: 'Maître ITIL', description: 'Toutes les questions maîtrisées', icon: '👑', rarity: 'legendary' }
]

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

      // Récupérer la gamification existante depuis localStorage
      const storedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS)
      const existingGamification = storedProgress ? JSON.parse(storedProgress).gamification : undefined
      
      const gamification = calculateGamification(sessions, totalQuestionsAnswered, existingGamification)

      const newProgress: ExamPracticeProgress = {
        questionsAnswered: new Set(answeredQuestions),
        sessionsCompleted: sessions,
        totalQuestionsAnswered,
        averageScore: Math.round(averageScore),
        weakQuestions,
        strongQuestions,
        lastSessionDate,
        gamification
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

  // Calculer les statistiques temps réel d'une session en cours
  const calculateCurrentStats = useCallback((
    answers: ExamPracticeAnswer[],
    totalQuestions: number
  ): ExamPracticeCurrentStats => {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length
    const incorrectAnswers = answers.length - correctAnswers
    const totalAnswered = answers.length
    const currentScore = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0
    const progressPercentage = Math.round((totalAnswered / totalQuestions) * 100)

    return {
      correctAnswers,
      incorrectAnswers,
      totalAnswered,
      currentScore,
      progressPercentage
    }
  }, [])

  // Calculer l'XP basé sur les performances
  const calculateXP = useCallback((sessions: ExamPracticeSession[]): number => {
    return sessions.reduce((total, session) => {
      let sessionXP = session.correctAnswers * 2 // 2 XP par bonne réponse
      
      // Bonus pour les scores élevés
      if (session.score >= 100) sessionXP += 50
      else if (session.score >= 90) sessionXP += 30
      else if (session.score >= 80) sessionXP += 20
      else if (session.score >= 70) sessionXP += 10
      
      // Bonus pour les sessions longues
      if (session.questionsAnswered >= 40) sessionXP += 25
      else if (session.questionsAnswered >= 20) sessionXP += 10
      
      return total + sessionXP
    }, 0)
  }, [])

  // Déterminer le niveau actuel basé sur l'XP
  const getCurrentLevel = useCallback((xp: number): ProgressLevel => {
    return PROGRESS_LEVELS.find(level => xp >= level.minXp && xp < level.maxXp) || PROGRESS_LEVELS[0]
  }, [])

  // Vérifier quels badges sont débloqués
  const checkUnlockedBadges = useCallback((
    sessions: ExamPracticeSession[],
    totalQuestions: number,
    existingBadges: ProgressBadge[]
  ): ProgressBadge[] => {
    const newBadges: ProgressBadge[] = []
    const existingBadgeIds = new Set(existingBadges.map(b => b.id))

    // Premier Pas
    if (sessions.length > 0 && !existingBadgeIds.has('first_question')) {
      newBadges.push({ ...AVAILABLE_BADGES.find(b => b.id === 'first_question')!, unlockedAt: new Date() })
    }

    // Score Parfait
    if (sessions.some(s => s.score === 100) && !existingBadgeIds.has('perfect_score')) {
      newBadges.push({ ...AVAILABLE_BADGES.find(b => b.id === 'perfect_score')!, unlockedAt: new Date() })
    }

    // Marathon
    if (sessions.some(s => s.questionsAnswered >= 40) && !existingBadgeIds.has('marathon')) {
      newBadges.push({ ...AVAILABLE_BADGES.find(b => b.id === 'marathon')!, unlockedAt: new Date() })
    }

    // Maître ITIL
    if (totalQuestions === EXAM_PRACTICE_STATS.totalQuestions && !existingBadgeIds.has('master')) {
      newBadges.push({ ...AVAILABLE_BADGES.find(b => b.id === 'master')!, unlockedAt: new Date() })
    }

    return newBadges
  }, [])

  // Calculer la gamification complète
  const calculateGamification = useCallback((
    sessions: ExamPracticeSession[],
    totalQuestions: number,
    existingGamification?: ExamPracticeGamification
  ): ExamPracticeGamification => {
    const xp = calculateXP(sessions)
    const level = getCurrentLevel(xp)
    
    const existingBadges = existingGamification?.badges || []
    const newBadges = checkUnlockedBadges(sessions, totalQuestions, existingBadges)
    const allBadges = [...existingBadges, ...newBadges]

    // Calculer le streak (simplifié pour l'exemple)
    const streak = existingGamification?.streak || 0
    const maxStreak = Math.max(streak, existingGamification?.maxStreak || 0)

    return {
      level,
      xp,
      badges: allBadges,
      streak,
      maxStreak,
      studyDays: existingGamification?.studyDays || 1,
      weeklyGoal: 20, // 20 questions par semaine
      weeklyProgress: Math.min(totalQuestions % 20, 20)
    }
  }, [calculateXP, getCurrentLevel, checkUnlockedBadges])

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
    calculateCurrentStats,
    calculateGamification,
    getCurrentLevel,
    loadProgress
  }
}