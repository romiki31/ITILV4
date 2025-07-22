import React from 'react'
import { ArrowRight, Package, Truck, Settings, ShieldCheck, Wrench, RefreshCw } from 'lucide-react'

const ChaineValeurPage: React.FC = () => {
  const activites = [
    {
      id: 1,
      nom: "Planifier",
      icon: Package,
      description: "Créer une compréhension partagée de la vision, de l'état actuel et de la direction d'amélioration.",
      objectif: "Assurer une compréhension commune des objectifs et de la direction",
      entrees: [
        "Politiques et exigences",
        "Demandes de parties prenantes",
        "Opportunités d'amélioration"
      ],
      sorties: [
        "Plans stratégiques et tactiques",
        "Portefeuilles de services",
        "Architectures et politiques"
      ]
    },
    {
      id: 2,
      nom: "Améliorer",
      icon: RefreshCw,
      description: "Assurer l'amélioration continue des produits, services et pratiques.",
      objectif: "Améliorer continuellement les produits, services et pratiques",
      entrees: [
        "Informations de performance",
        "Opportunités d'amélioration",
        "Connaissances et retours"
      ],
      sorties: [
        "Initiatives d'amélioration",
        "Plans d'amélioration",
        "Rapports de valeur"
      ]
    },
    {
      id: 3,
      nom: "Engager",
      icon: Settings,
      description: "Fournir une bonne compréhension des besoins des parties prenantes.",
      objectif: "Établir de bonnes relations avec toutes les parties prenantes",
      entrees: [
        "Demandes de services",
        "Retours des clients",
        "Informations du marché"
      ],
      sorties: [
        "Exigences convenues",
        "Contrats et accords",
        "Information pour la conception"
      ]
    },
    {
      id: 4,
      nom: "Concevoir et faire la transition",
      icon: Wrench,
      description: "Garantir que les produits et services répondent continuellement aux attentes.",
      objectif: "Créer ou modifier des produits et services",
      entrees: [
        "Architectures et politiques",
        "Exigences convenues",
        "Décisions de conception"
      ],
      sorties: [
        "Services nouveaux ou modifiés",
        "Connaissances sur les services",
        "Composants de services prêts"
      ]
    },
    {
      id: 5,
      nom: "Obtenir/Construire",
      icon: ShieldCheck,
      description: "S'assurer que les composants de service sont disponibles quand et où ils sont nécessaires.",
      objectif: "Obtenir ou développer les composants nécessaires",
      entrees: [
        "Architectures approuvées",
        "Contrats et accords",
        "Spécifications de conception"
      ],
      sorties: [
        "Composants de services",
        "Informations d'approvisionnement",
        "Contrats avec fournisseurs"
      ]
    },
    {
      id: 6,
      nom: "Fournir",
      icon: Truck,
      description: "Assurer que les services sont fournis et supportés selon les spécifications convenues.",
      objectif: "Livrer les services aux utilisateurs",
      entrees: [
        "Services nouveaux ou modifiés",
        "Demandes de services",
        "Incidents et problèmes"
      ],
      sorties: [
        "Services fournis",
        "Informations de performance",
        "Réalisation des exigences"
      ]
    }
  ]

  const principesFlux = [
    {
      titre: "Flux de valeur orienté client",
      description: "Chaque flux de valeur doit être conçu pour répondre aux besoins spécifiques des consommateurs"
    },
    {
      titre: "Combinaison d'activités",
      description: "Les flux de valeur combinent différentes activités de la chaîne selon les besoins"
    },
    {
      titre: "Pas de séquence fixe",
      description: "Les activités peuvent être exécutées simultanément ou dans différents ordres"
    },
    {
      titre: "Amélioration continue",
      description: "Les flux de valeur doivent être continuellement optimisés"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">La Chaîne de Valeur des Services</h1>
        <p className="text-gray-600">
          La chaîne de valeur des services (CVS) est un modèle opérationnel qui définit 
          les activités clés nécessaires pour répondre à la demande et faciliter la réalisation de valeur.
        </p>
      </div>

      <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Concept Clé</h3>
        <p className="text-yellow-800">
          La CVS est flexible et non linéaire. Les activités interagissent entre elles 
          et peuvent être combinées de nombreuses façons pour créer des flux de valeur 
          adaptés à des scénarios spécifiques.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Les 6 Activités de la Chaîne de Valeur</h2>
      
      <div className="grid gap-6 mb-8">
        {activites.map((activite) => (
          <div key={activite.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <activite.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activite.nom}
                  </h3>
                  <p className="text-gray-600 mb-2">{activite.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Objectif :</strong> {activite.objectif}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                        <ArrowRight className="h-4 w-4 mr-1 text-green-600" />
                        Entrées typiques
                      </h4>
                      <ul className="space-y-1">
                        {activite.entrees.map((entree, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {entree}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                        <ArrowRight className="h-4 w-4 mr-1 text-blue-600" />
                        Sorties typiques
                      </h4>
                      <ul className="space-y-1">
                        {activite.sorties.map((sortie, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {sortie}
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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Principes des Flux de Valeur</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {principesFlux.map((principe, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-1">{principe.titre}</h4>
              <p className="text-sm text-gray-600">{principe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChaineValeurPage