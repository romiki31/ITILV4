import React from 'react'
import { CheckCircle, X, Target } from 'lucide-react'
import type { ExamPracticeCurrentStats } from '@/types'

interface StatsDisplayProps {
  stats: ExamPracticeCurrentStats
  className?: string
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-lg">
          <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            {stats.correctAnswers}
          </span>
        </div>
        <div className="flex items-center space-x-1 bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded-lg">
          <X size={16} className="text-red-600 dark:text-red-400" />
          <span className="text-sm font-medium text-red-700 dark:text-red-300">
            {stats.incorrectAnswers}
          </span>
        </div>
      </div>
      
      {stats.totalAnswered > 0 && (
        <div className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded-lg">
          <Target size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            {stats.currentScore}%
          </span>
        </div>
      )}
    </div>
  )
}

export default StatsDisplay