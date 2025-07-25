import React from 'react'

interface ITILLogoProps {
  size?: number
  className?: string
}

const ITILLogo: React.FC<ITILLogoProps> = ({ size = 24, className = "" }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400 dark:border-blue-500 rounded-lg shadow-sm ${className}`} 
      style={{ width: size, height: size }}
      title="ITIL® est une marque déposée d'AXELOS Limited"
    >
      <span 
        className="font-bold text-white text-shadow-sm"
        style={{ fontSize: Math.max(6, size * 0.25) }}
      >
        ITIL®
      </span>
    </div>
  )
}

export default ITILLogo