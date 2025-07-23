import React, { useState } from 'react'
import { FileText, ChevronDown, ChevronUp, Building, Users, TrendingUp, AlertCircle } from 'lucide-react'

const EtudeCasPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const etudeCas = [
    {
      id: 1,
      titre: "Transformation digitale d'une banque",
      icon: Building,
      contexte: "Une grande banque traditionnelle souhaite moderniser ses services IT pour répondre aux attentes des clients digitaux.",
      defis: [
        "Infrastructure legacy complexe",
        "Résistance au changement du personnel",
        "Exigences réglementaires strictes",
        "Concurrence des fintechs"
      ],
      solution: {
        principes: ["Commencer là où on se trouve", "Progresser de manière itérative", "Se concentrer sur la valeur"],
        pratiques: ["Gestion du changement organisationnel", "Amélioration continue", "Gestion des risques"],
        resultats: [
          "Réduction de 40% du temps de mise sur le marché",
          "Amélioration de 35% de la satisfaction client",
          "Diminution de 25% des incidents"
        ]
      }
    },
    {
      id: 2,
      titre: "Migration cloud d'une entreprise retail",
      icon: TrendingUp,
      contexte: "Une chaîne de magasins veut migrer son infrastructure vers le cloud pour améliorer sa scalabilité.",
      defis: [
        "Données sensibles des clients",
        "Intégration avec les systèmes existants",
        "Formation du personnel",
        "Gestion des coûts cloud"
      ],
      solution: {
        principes: ["Penser et travailler de manière holistique", "Optimiser et automatiser", "Collaborer et promouvoir la visibilité"],
        pratiques: ["Gestion de la capacité et performance", "Gestion de la sécurité de l'information", "Gestion financière des services"],
        resultats: [
          "Économies de 30% sur l'infrastructure",
          "Disponibilité améliorée à 99.9%",
          "Déploiements 5x plus rapides"
        ]
      }
    },
    {
      id: 3,
      titre: "Amélioration du service desk d'une université",
      icon: Users,
      contexte: "Une université avec 50,000 étudiants veut améliorer son support IT face à l'augmentation des demandes.",
      defis: [
        "Volume élevé de demandes répétitives",
        "Temps de résolution longs",
        "Satisfaction utilisateur faible",
        "Manque de visibilité sur les performances"
      ],
      solution: {
        principes: ["Opter pour la simplicité et être pratique", "Se concentrer sur la valeur", "Progresser de manière itérative"],
        pratiques: ["Service desk", "Gestion des incidents", "Gestion des connaissances", "Mesure et rapports"],
        resultats: [
          "Réduction de 60% des tickets répétitifs via self-service",
          "Temps de résolution moyen réduit de 45%",
          "Satisfaction utilisateur passée de 2.5/5 à 4.2/5"
        ]
      }
    },
    {
      id: 4,
      titre: "Gestion d'incident majeur dans le e-commerce",
      icon: AlertCircle,
      contexte: "Un site e-commerce majeur subit une panne pendant le Black Friday, affectant des millions de clients.",
      defis: [
        "Perte de revenus importante",
        "Impact sur la réputation",
        "Pression des parties prenantes",
        "Complexité technique du problème"
      ],
      solution: {
        principes: ["Collaborer et promouvoir la visibilité", "Se concentrer sur la valeur", "Améliorer continuellement"],
        pratiques: ["Gestion des incidents", "Gestion des problèmes", "Gestion de la continuité des services", "Amélioration continue"],
        resultats: [
          "Restauration du service en 2h au lieu de 8h habituelles",
          "Communication proactive réduisant les plaintes de 70%",
          "Plan d'amélioration empêchant la récurrence"
        ]
      }
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Études de Cas ITIL 4</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Découvrez comment les concepts ITIL s'appliquent dans des situations réelles. 
          Chaque cas inclut des questions types d'examen et les pièges à éviter.
        </p>
      </div>

      <div className="grid gap-6">
        {etudeCas.map((cas) => (
          <div key={cas.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setSelectedCase(selectedCase === cas.id ? null : cas.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/20 p-3 rounded-lg">
                    <cas.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{cas.titre}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{cas.contexte}</p>
                  </div>
                </div>
                {selectedCase === cas.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                )}
              </div>
            </div>

            {selectedCase === cas.id && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" />
                      Défis rencontrés
                    </h4>
                    <ul className="space-y-2">
                      {cas.defis.map((defi, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {defi}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <FileText className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                      Solution ITIL 4
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Principes appliqués :</h5>
                        <ul className="space-y-1">
                          {cas.solution.principes.map((principe, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-400">• {principe}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pratiques utilisées :</h5>
                        <ul className="space-y-1">
                          {cas.solution.pratiques.map((pratique, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-400">• {pratique}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                      Résultats obtenus
                    </h4>
                    <ul className="space-y-2">
                      {cas.solution.resultats.map((resultat, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {resultat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Leçon clé</h5>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    L'application cohérente des principes ITIL 4, combinée aux pratiques appropriées, 
                    permet de transformer les défis en opportunités d'amélioration et de création de valeur.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EtudeCasPage