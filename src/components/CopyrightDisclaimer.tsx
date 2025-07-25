import React from 'react'
import { AlertTriangle } from 'lucide-react'

interface CopyrightDisclaimerProps {
  className?: string
}

const CopyrightDisclaimer: React.FC<CopyrightDisclaimerProps> = ({ className = "" }) => {
  return (
    <div className={`bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 ${className}`}>
      <div className="flex items-start space-x-2">
        <AlertTriangle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-xs text-blue-800 dark:text-blue-200">
          <strong>Disclaimer :</strong> ITIL® est une marque déposée d'AXELOS Limited, utilisée sous licence de PeopleCert.
          Ce contenu éducatif est créé de manière indépendante à des fins pédagogiques uniquement et ne constitue pas 
          une reproduction du matériel officiel ITIL®. Nous ne sommes pas affiliés à AXELOS Limited ou PeopleCert.
        </div>
      </div>
    </div>
  )
}

export default CopyrightDisclaimer