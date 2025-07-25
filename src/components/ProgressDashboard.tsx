import React, { useEffect, useState } from 'react'
import { 
  Trophy, 
  Target, 
  RotateCcw, 
  TrendingUp, 
  Award,
  Zap,
  Calendar,
  CheckCircle
} from 'lucide-react'
import type { ExamPracticeProgress } from '@/types'
import { EXAM_PRACTICE_STATS } from '@/data/examPracticeQuestions'
import '../styles/animations.css'

interface ProgressDashboardProps {
  answeredCount: number
  remainingQuestions: number
  progress: ExamPracticeProgress | null
  isResetting: boolean
  onReset: () => void
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  answeredCount,
  remainingQuestions,
  progress,
  isResetting,
  onReset
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [animateProgress, setAnimateProgress] = useState(false)
  
  const gamification = progress?.gamification
  const level = gamification?.level
  const progressPercentage = Math.round((answeredCount / EXAM_PRACTICE_STATS.totalQuestions) * 100)
  
  // Calculer la progression vers le niveau suivant
  const nextLevelProgress = level ? 
    Math.round(((gamification.xp - level.minXp) / (level.maxXp - level.minXp)) * 100) : 0

  // Déclencher les animations au montage
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setAnimateProgress(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Animer les changements de progression
  useEffect(() => {
    if (isLoaded) {
      setAnimateProgress(false)
      const timer = setTimeout(() => setAnimateProgress(true), 50)
      return () => clearTimeout(timer)
    }
  }, [answeredCount, isLoaded])

  // Couleurs basées sur le niveau
  const getLevelColors = (color: string) => {
    const colorMap = {
      gray: { bg: 'bg-gray-500', light: 'bg-gray-100 dark:bg-gray-900/20', text: 'text-gray-700 dark:text-gray-300' },
      green: { bg: 'bg-green-500', light: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-700 dark:text-green-300' },
      blue: { bg: 'bg-blue-500', light: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-300' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-100 dark:bg-purple-900/20', text: 'text-purple-700 dark:text-purple-300' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-100 dark:bg-orange-900/20', text: 'text-orange-700 dark:text-orange-300' },
      red: { bg: 'bg-red-500', light: 'bg-red-100 dark:bg-red-900/20', text: 'text-red-700 dark:text-red-300' }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.gray
  }

  const levelColors = getLevelColors(level?.color || 'gray')

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6 mb-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
      {/* Header avec niveau et titre */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`${levelColors.light} p-3 rounded-full`}>
            <span className="text-2xl">{level?.icon || '🌱'}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {level?.name || 'Débutant'} ITIL v4
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Votre progression dans l'apprentissage
            </p>
          </div>
        </div>
        
        {answeredCount > 0 && (
          <button
            onClick={onReset}
            disabled={isResetting}
            className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors disabled:opacity-50 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm hover:shadow-md card-hover"
            title="Réinitialiser toutes les questions vues"
          >
            <RotateCcw size={16} className={isResetting ? 'animate-spin' : 'rotate-on-hover'} />
            <span>{isResetting ? 'Réinitialisation...' : 'Réinitialiser'}</span>
          </button>
        )}
      </div>

      {/* Barre de progression principale */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progression générale
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
            {progressPercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className={`progress-gradient h-3 rounded-full transition-all duration-1000 ease-out ${animateProgress ? 'animate-progress' : ''}`}
            style={{ width: `${animateProgress ? progressPercentage : 0}%` }}
          />
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Questions totales */}
        <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm card-hover ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
              <Target size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {EXAM_PRACTICE_STATS.totalQuestions}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Questions totales</div>
            </div>
          </div>
        </div>

        {/* Questions vues */}
        <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm card-hover ${isLoaded ? 'animate-fadeInUp-delay' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
              <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 animate-countUp">
                {answeredCount}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Questions vues</div>
            </div>
          </div>
        </div>

        {/* Score moyen */}
        <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm card-hover ${isLoaded ? 'animate-fadeInUp-delay2' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 dark:bg-yellow-900/50 p-2 rounded-lg">
              <TrendingUp size={20} className="text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 animate-countUp">
                {progress?.averageScore || 0}%
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Score moyen</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProgressDashboard