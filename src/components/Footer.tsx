import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center space-y-3">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ITIL v4 Foundation - Guide de révision
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Outil d'aide à la préparation ITIL v4
            </p>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
            <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1 max-w-4xl mx-auto">
              <p className="font-medium text-gray-600 dark:text-gray-400">Mentions légales et avertissement</p>
              <p>
                <strong>ITIL®</strong> est une marque déposée d'AXELOS Limited. Ce site est un support pédagogique indépendant 
                non affilié aux organismes officiels. Contenu fourni à des fins éducatives uniquement, sans garantie d'exactitude. 
                Consultez la documentation officielle pour une préparation complète.
              </p>
              <p>
                <strong>Propriété intellectuelle :</strong> Contenus créés indépendamment. Site fourni "en l'état". 
                L'auteur décline toute responsabilité. Utilisation aux risques de l'utilisateur.
              </p>
              <p className="pt-1">
                © {new Date().getFullYear()} - Développé par Romain Danielant. Code source sous licence MIT.
              </p>
              <p className="text-xs">
                Pour plus d'informations officielles sur ITIL®, consultez : 
                <a href="https://www.axelos.com/certifications/itil-service-management" 
                   target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  AXELOS ITIL®
                </a> et 
                <a href="https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1" 
                   target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  PeopleCert ITIL®
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer