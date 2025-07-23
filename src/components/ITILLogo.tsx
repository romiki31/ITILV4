import React from 'react'

interface ITILLogoProps {
  size?: number
  className?: string
}

const ITILLogo: React.FC<ITILLogoProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id={`gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <circle 
        cx="16" 
        cy="16" 
        r="15" 
        fill={`url(#gradient-${size})`} 
        stroke="currentColor" 
        strokeWidth="1"
        className="text-primary-600 dark:text-primary-400"
      />
      
      {/* ITIL text */}
      <text 
        x="16" 
        y="20" 
        textAnchor="middle" 
        fill="white" 
        fontFamily="Arial, Helvetica, sans-serif" 
        fontSize="10" 
        fontWeight="bold"
      >
        ITIL
      </text>
      
      {/* v4 indicator */}
      <text 
        x="16" 
        y="9" 
        textAnchor="middle" 
        fill="#FCD34D" 
        fontFamily="Arial, Helvetica, sans-serif" 
        fontSize="5" 
        fontWeight="bold"
      >
        v4
      </text>
      
      {/* Service management symbols */}
      <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="26" cy="6" r="1.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="26" cy="26" r="1.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="6" cy="26" r="1.5" fill="rgba(255,255,255,0.4)"/>
      
      {/* Central connection lines */}
      <line x1="6" y1="6" x2="16" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="26" y1="6" x2="16" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="26" y1="26" x2="16" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="6" y1="26" x2="16" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    </svg>
  )
}

export default ITILLogo