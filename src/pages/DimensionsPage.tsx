import React from 'react'
import { Users, Settings, Info, Workflow } from 'lucide-react'

const DimensionsPage: React.FC = () => {
  const dimensions = [
    {
      id: 1,
      titre: "Organisations et Personnes",
      icon: Users,
      description: "Les structures organisationnelles, les rôles, les responsabilités et les systèmes d'autorité.",
      elements: [
        "Structure organisationnelle formelle avec rôles définis",
        "Culture, compétences et compétences du personnel",
        "Styles de gestion et de leadership",
        "Communication et méthodes de collaboration"
      ],
      considerations: [
        "Comment le travail est divisé entre les équipes",
        "Les compétences nécessaires pour délivrer les services",
        "La culture organisationnelle et ses valeurs",
        "Les relations avec les parties prenantes externes"
      ]
    },
    {
      id: 2,
      titre: "Information et Technologie",
      icon: Info,
      description: "Les informations et connaissances, ainsi que les technologies nécessaires à la gestion des services.",
      elements: [
        "Systèmes d'information et bases de données",
        "Technologies de communication",
        "Intelligence artificielle et automatisation",
        "Gestion des connaissances"
      ],
      considerations: [
        "Quelles informations sont nécessaires pour les services",
        "Comment l'information est gérée et protégée",
        "Technologies compatibles avec la stratégie",
        "Innovations technologiques disponibles"
      ]
    },
    {
      id: 3,
      titre: "Partenaires et Fournisseurs",
      icon: Settings,
      description: "Les relations avec d'autres organisations impliquées dans la conception, le déploiement et la fourniture de services.",
      elements: [
        "Contrats et accords de niveau de service",
        "Gestion des relations avec les fournisseurs",
        "Intégration et collaboration",
        "Partage des risques et des bénéfices"
      ],
      considerations: [
        "Stratégie de sourcing (interne vs externe)",
        "Dépendances envers les fournisseurs",
        "Coûts et risques associés",
        "Culture et façons de travailler compatibles"
      ]
    },
    {
      id: 4,
      titre: "Flux de Valeur et Processus",
      icon: Workflow,
      description: "La façon dont les différentes parties de l'organisation travaillent ensemble pour créer de la valeur.",
      elements: [
        "Activités de la chaîne de valeur des services",
        "Processus et procédures",
        "Flux de travail intégrés",
        "Optimisation continue"
      ],
      considerations: [
        "Comment la valeur est créée et livrée",
        "Transformation des demandes en services",
        "Efficacité et efficience des processus",
        "Points d'intégration et de transfert"
      ]
    }
  ]

  const facteursCles = [
    {
      titre: "Contraintes Externes",
      exemples: ["Réglementations", "Standards industriels", "Codes de conduite", "Conditions économiques"]
    },
    {
      titre: "Facteurs Internes",
      exemples: ["Culture organisationnelle", "Politiques internes", "Ressources disponibles", "Architecture existante"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Les 4 Dimensions de la Gestion des Services</h1>
        <p className="text-gray-600">
          Les quatre dimensions représentent des perspectives critiques pertinentes pour l'ensemble 
          du système de valeur des services. Elles doivent toutes être prises en compte pour une 
          gestion efficace des services.
        </p>
      </div>

      <div className="grid gap-6 mb-8">
        {dimensions.map((dimension) => (
          <div key={dimension.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <dimension.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dimension.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">{dimension.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Éléments clés :</h4>
                      <ul className="space-y-1">
                        {dimension.elements.map((element, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Considérations :</h4>
                      <ul className="space-y-1">
                        {dimension.considerations.map((consideration, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Approche Holistique</h3>
        <p className="text-blue-800 mb-4">
          Les quatre dimensions ne fonctionnent pas isolément. Elles sont interconnectées et 
          doivent être équilibrées. Se concentrer sur une seule dimension tout en négligeant 
          les autres peut conduire à l'échec du service.
        </p>
        <p className="text-blue-800">
          Un changement dans une dimension affectera probablement les autres dimensions. 
          Par exemple, l'introduction d'une nouvelle technologie (dimension Information et Technologie) 
          nécessitera probablement de nouvelles compétences (dimension Organisations et Personnes).
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Facteurs Externes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {facteursCles.map((facteur, index) => (
            <div key={index}>
              <h4 className="font-medium text-gray-800 mb-2">{facteur.titre}</h4>
              <div className="flex flex-wrap gap-2">
                {facteur.exemples.map((exemple, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
                    {exemple}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DimensionsPage