// Types pour le contenu ITIL v4 Foundation

export interface Concept {
  id: string
  title: string
  definition: string
  keyPoints: string[]
  examples: string[]
  examTips: string[]
  category: 'concepts-fondamentaux' | 'principes-directeurs' | 'dimensions' | 'systeme-valeur' | 'pratiques'
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  examTip?: string
  timeLimit?: number
}

export interface Flashcard {
  id: string
  front: string
  back: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  masteryLevel?: 'not-started' | 'learning' | 'reviewing' | 'mastered'
  examTip?: boolean
}

export interface StudySession {
  id: string
  type: 'quiz' | 'flashcards' | 'concepts'
  startTime: Date
  endTime?: Date
  score?: number
  totalQuestions?: number
  correctAnswers?: number
  timeSpent: number
  categories: string[]
  difficulty: string[]
}

export interface UserProgress {
  conceptsCompleted: string[]
  quizzesTaken: StudySession[]
  flashcardsReviewed: string[]
  achievements: Achievement[]
  overallProgress: number
  categoryProgress: Record<string, number>
  weakAreas: string[]
  strongAreas: string[]
  studyStreak: number
  lastStudyDate: Date
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: Date
  category: 'quiz' | 'flashcards' | 'concepts' | 'time' | 'streak'
}

export interface QuizConfig {
  mode: 'category' | 'difficulty' | 'exam-simulation' | 'custom'
  categories: string[]
  difficulty: string[]
  timeLimit?: number
  questionCount: number
  randomOrder: boolean
}

export interface StudyPlan {
  id: string
  title: string
  description: string
  duration: number // en jours
  dailyGoals: DailyGoal[]
  targetExamDate?: Date
  isActive: boolean
}

export interface DailyGoal {
  day: number
  concepts: string[]
  quizQuestions: number
  flashcards: number
  estimatedTime: number // en minutes
  completed: boolean
}

export interface Navigation {
  label: string
  href: string
  icon: string
  children?: Navigation[]
}

// Enums pour les constantes
export enum Category {
  CONCEPTS_FONDAMENTAUX = 'concepts-fondamentaux',
  PRINCIPES_DIRECTEURS = 'principes-directeurs',
  DIMENSIONS = 'dimensions',
  SYSTEME_VALEUR = 'systeme-valeur',
  PRATIQUES = 'pratiques'
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum QuizMode {
  CATEGORY = 'category',
  DIFFICULTY = 'difficulty',
  EXAM_SIMULATION = 'exam-simulation',
  CUSTOM = 'custom'
}

export enum MasteryLevel {
  NOT_STARTED = 'not-started',
  LEARNING = 'learning',
  REVIEWING = 'reviewing',
  MASTERED = 'mastered'
}

// Types spécifiques pour le mode d'examen pratique
export interface ExamPracticeQuestion {
  id: number
  examId: string
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
  simplifiedExplanation: string
  relatedCourseSection?: string
}

export interface ExamPracticeSession {
  id: string
  startTime: Date
  endTime?: Date
  questionsRequested: number
  questionsAnswered: number
  correctAnswers: number
  answers: ExamPracticeAnswer[]
  score: number // pourcentage
}

export interface ExamPracticeAnswer {
  questionId: number
  selectedAnswer: 'A' | 'B' | 'C' | 'D'
  isCorrect: boolean
  timeSpent: number // en secondes
  viewedExplanation: boolean
}

export interface ExamPracticeProgress {
  questionsAnswered: Set<number>
  sessionsCompleted: ExamPracticeSession[]
  totalQuestionsAnswered: number
  averageScore: number
  weakQuestions: number[]
  strongQuestions: number[]
  lastSessionDate: Date
}

// Types pour le suivi des examens blancs
export interface ExamWhiteSession {
  id: string
  startTime: Date
  endTime?: Date
  mode: 'exam-simulation' | 'exam-difficult'
  questionsTotal: number
  questionsAnswered: number
  correctAnswers: number
  score: number // pourcentage
  timeSpent: number // en secondes
  answers: ExamWhiteAnswer[]
}

export interface ExamWhiteAnswer {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number // en secondes
}

export interface ExamWhiteProgress {
  questionsAnswered: Set<string>
  sessionsCompleted: ExamWhiteSession[]
  totalQuestionsAnswered: number
  averageScore: number
  lastSessionDate: Date
}