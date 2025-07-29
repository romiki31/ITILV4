import React from 'react'
import { CheckCircle, X, Target } from 'lucide-react'
import type { ExamPracticeCurrentStats } from '@/types'

interface StatsDisplayProps {
  stats: ExamPracticeCurrentStats
  className?: string
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, className = '' }) => {
  return (
    <div className={`flex flex-wrap sm:items-center gap-1 sm:gap-2 ${className}`}>
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
          <CheckCircle size={12} className="text-green-600 dark:text-green-400 sm:size-4" />
          <span className="font-medium text-green-700 dark:text-green-300 min-w-0">
            {stats.correctAnswers}
          </span>
        </div>
        <div className="flex items-center space-x-1 bg-red-100 dark:bg-red-900/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
          <X size={12} className="text-red-600 dark:text-red-400 sm:size-4" />
          <span className="font-medium text-red-700 dark:text-red-300 min-w-0">
            {stats.incorrectAnswers}
          </span>
        </div>
      </div>
      
      {stats.totalAnswered > 0 && (
        <div className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
          <Target size={12} className="text-blue-600 dark:text-blue-400 sm:size-4" />
          <span className="font-medium text-blue-700 dark:text-blue-300 min-w-0">
            {stats.currentScore}%
          </span>
        </div>
      )}
    </div>
  )
}

export default StatsDisplay