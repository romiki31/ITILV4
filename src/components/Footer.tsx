import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <div>
            <p className="text-sm text-gray-400">
              ITIL v4 Foundation - Guide de révision
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Support de cours pour la classe
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <div className="text-xs text-gray-500 space-y-2 max-w-4xl mx-auto">
              <p className="font-medium text-gray-400">Mentions légales et avertissement</p>
              <p>
                <strong>ITIL®</strong> est une marque déposée d'AXELOS Limited, utilisée sous licence de PeopleCert. 
                Ce site constitue un support pédagogique indépendant pour la préparation à la certification ITIL v4 Foundation.
              </p>
              <p>
                <strong>Avertissement :</strong> Les contenus présents sur ce site sont fournis à des fins éducatives uniquement. 
                Bien que nous nous efforcions d'assurer l'exactitude des informations, nous ne garantissons pas leur exhaustivité 
                ou leur mise à jour. Les utilisateurs sont encouragés à consulter la documentation officielle ITIL pour une 
                préparation complète à l'examen.
              </p>
              <p>
                <strong>Propriété intellectuelle :</strong> Les questions d'examen, études de cas et contenus pédagogiques 
                présents sur ce site sont créés de manière indépendante et ne reproduisent pas les questions officielles 
                des examens ITIL. Toute reproduction ou distribution non autorisée est interdite.
              </p>
              <p className="pt-2">
                © {new Date().getFullYear()} - Support de formation ITIL v4. 
                Tous droits réservés. Usage strictement pédagogique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer