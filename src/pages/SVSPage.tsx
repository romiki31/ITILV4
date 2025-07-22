import React, { useState } from 'react'
import { GitBranch, Package, Truck, Settings, ShieldCheck, Wrench, RefreshCw, ArrowRight, AlertCircle, Target } from 'lucide-react'

const SVSPage: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null)

  const activitesCVS = [
    {
      id: 1,
      nom: "Planifier",
      icon: Package,
      couleur: "blue",
      description: "Créer une vision partagée et aligner les parties prenantes",
      objectifPrincipal: "S'assurer que tout le monde comprend la direction et les priorités",
      entreesCles: [
        "Stratégies et politiques d'entreprise",
        "Feedback des parties prenantes",
        "Rapports de performance"
      ],
      sortiesCles: [
        "Plans stratégiques, tactiques et opérationnels",
        "Décisions d'investissement",
        "Architectures et roadmaps"
      ],
      questionsExamen: [
        "Quelle activité crée la vision partagée ? → Planifier",
        "D'où viennent les architectures ? → Planifier"
      ],
      piege: "Planifier ne fait PAS que la planification stratégique, elle couvre TOUS les niveaux"
    },
    {
      id: 2,
      nom: "Améliorer",
      icon: RefreshCw,
      couleur: "green",
      description: "Amélioration continue à tous les niveaux",
      objectifPrincipal: "S'assurer que les services et pratiques s'améliorent constamment",
      entreesCles: [
        "Métriques de performance",
        "Feedback clients et utilisateurs",  
        "Idées d'amélioration de toutes sources"
      ],
      sortiesCles: [
        "Initiatives d'amélioration",
        "Rapports d'amélioration",
        "Changements approuvés pour amélioration"
      ],
      questionsExamen: [
        "Quelle activité est présente dans TOUS les flux de valeur ? → Améliorer",
        "Qui gère le registre d'amélioration continue (CIR) ? → Améliorer"
      ],
      piege: "Améliorer n'est PAS qu'après incident - c'est une activité permanente"
    },
    {
      id: 3,
      nom: "Engager",
      icon: Settings,
      couleur: "purple",
      description: "Point de contact avec les parties prenantes",
      objectifPrincipal: "Comprendre les besoins et gérer les relations",
      entreesCles: [
        "Demandes de services nouveaux ou modifiés",
        "Feedback sur les services existants",
        "Incidents et requêtes"
      ],
      sortiesCles: [
        "Requirements détaillés et validés",
        "Décisions go/no-go",
        "Contrats et accords de service"
      ],
      questionsExamen: [
        "Où les besoins clients sont-ils capturés ? → Engager",
        "Quelle activité gère la relation continue ? → Engager"
      ],
      piege: "Engager ne fait PAS que capturer la demande initiale - c'est une relation continue"
    },
    {
      id: 4,
      nom: "Concevoir et faire la transition",
      icon: Wrench,
      couleur: "orange",
      description: "Créer ou modifier les services et les mettre en production",
      objectifPrincipal: "S'assurer que les services répondent aux attentes avant et après déploiement",
      entreesCles: [
        "Requirements validés",
        "Contraintes et politiques",
        "Ressources disponibles"
      ],
      sortiesCles: [
        "Conceptions de services approuvées",
        "Services testés et validés",
        "Documentation et knowledge"
      ],
      questionsExamen: [
        "Où les services sont-ils conçus ET déployés ? → Concevoir et faire la transition",
        "Qui valide que le service répond aux besoins ? → Concevoir et faire la transition"
      ],
      piege: "Cette activité fait BOTH design ET transition - pas juste l'un ou l'autre"
    },
    {
      id: 5,
      nom: "Obtenir/Construire",
      icon: ShieldCheck,
      couleur: "indigo",
      description: "Acquérir ou développer les composants nécessaires",
      objectifPrincipal: "S'assurer que tous les composants sont disponibles selon les spécifications",
      entreesCles: [
        "Spécifications détaillées",
        "Contrats fournisseurs",
        "Standards et contraintes"
      ],
      sortiesCles: [
        "Composants de service prêts",
        "Documentation technique",
        "Ressources configurées"
      ],
      questionsExamen: [
        "Où décide-t-on make vs buy ? → Obtenir/Construire",
        "Qui gère les relations fournisseurs pour les composants ? → Obtenir/Construire"
      ],
      piege: "Obtenir/Construire gère AUSSI les ressources humaines, pas que la technologie"
    },
    {
      id: 6,
      nom: "Fournir",
      icon: Truck,
      couleur: "red",
      description: "Livrer et supporter les services au quotidien",
      objectifPrincipal: "S'assurer que les services sont fournis selon les niveaux convenus",
      entreesCles: [
        "Services en production",
        "Demandes utilisateurs",
        "Incidents"
      ],
      sortiesCles: [
        "Services délivrés",
        "Incidents résolus",
        "Rapports de performance"
      ],
      questionsExamen: [
        "Où le service desk opère-t-il principalement ? → Fournir",
        "Quelle activité gère les opérations quotidiennes ? → Fournir"
      ],
      piege: "Fournir ne fait PAS que réagir - inclut aussi la maintenance proactive"
    }
  ]

  const fluxValeurExemples = [
    {
      scenario: "Nouveau service cloud demandé par le business",
      flux: ["Engager", "Planifier", "Concevoir et faire la transition", "Obtenir/Construire", "Fournir"],
      explication: "Flux typique pour un nouveau service"
    },
    {
      scenario: "Incident majeur en production",
      flux: ["Fournir", "Engager", "Améliorer"],
      explication: "Résolution puis amélioration pour éviter la récurrence"
    },
    {
      scenario: "Optimisation des coûts IT",
      flux: ["Planifier", "Améliorer", "Obtenir/Construire"],
      explication: "Analyse stratégique puis optimisation des ressources"
    }
  ]

  const composantsSVS = [
    {
      nom: "Chaîne de Valeur des Services",
      description: "Les 6 activités interconnectées que nous venons de voir",
      role: "Transformer les demandes en valeur"
    },
    {
      nom: "Pratiques ITIL",
      description: "34 pratiques organisées en 3 catégories",
      role: "Fournir les capacités pour exécuter les activités"
    },
    {
      nom: "Principes Directeurs",
      description: "Les 7 principes universels",
      role: "Guider les décisions et comportements"
    },
    {
      nom: "Gouvernance",
      description: "Direction, contrôle et évaluation",
      role: "S'assurer que l'organisation atteint ses objectifs"
    },
    {
      nom: "Amélioration Continue",
      description: "Modèle en 7 étapes",
      role: "Améliorer constamment tous les aspects"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Système de Valeur des Services (SVS)</h1>
        <p className="text-gray-600">
          Le SVS est le modèle opérationnel d'ITIL 4. Comprendre comment ses composants interagissent 
          est essentiel pour l'examen (environ 30% des questions).
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
          <GitBranch className="h-6 w-6 mr-2" />
          Vue d'ensemble du SVS
        </h2>
        <p className="text-blue-800 mb-4">
          Le SVS permet à une organisation de créer de la valeur pour ses parties prenantes. 
          Il est composé de plusieurs éléments interconnectés qui travaillent ensemble de manière flexible.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {composantsSVS.map((composant, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-blue-200">
              <h4 className="font-semibold text-gray-900 text-sm">{composant.nom}</h4>
              <p className="text-xs text-gray-600 mt-1">{composant.description}</p>
              <p className="text-xs text-blue-600 mt-1 font-medium">→ {composant.role}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">La Chaîne de Valeur des Services (CVS)</h2>
      
      <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-800 font-medium">Point crucial pour l'examen :</p>
            <p className="text-sm text-yellow-700">
              La CVS n'est PAS linéaire ! Les activités peuvent être combinées dans n'importe quel ordre 
              pour créer des flux de valeur adaptés à chaque situation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {activitesCVS.map((activite) => (
          <div 
            key={activite.id} 
            className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer ${
              selectedActivity === activite.id 
                ? `border-${activite.couleur}-400 shadow-md` 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedActivity(selectedActivity === activite.id ? null : activite.id)}
          >
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`bg-${activite.couleur}-100 p-3 rounded-lg`}>
                    <activite.icon className={`h-6 w-6 text-${activite.couleur}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{activite.nom}</h3>
                    <p className="text-gray-600 mt-1">{activite.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      <Target className="inline h-4 w-4 mr-1" />
                      {activite.objectifPrincipal}
                    </p>
                  </div>
                </div>
                <ArrowRight className={`h-5 w-5 text-gray-400 transform transition-transform ${
                  selectedActivity === activite.id ? 'rotate-90' : ''
                }`} />
              </div>

              {selectedActivity === activite.id && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Entrées principales
                      </h4>
                      <ul className="space-y-2">
                        {activite.entreesCles.map((entree, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <ArrowRight className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {entree}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Sorties principales
                      </h4>
                      <ul className="space-y-2">
                        {activite.sortiesCles.map((sortie, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {sortie}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-2">Questions types d'examen :</h4>
                    <ul className="space-y-1">
                      {activite.questionsExamen.map((question, index) => (
                        <li key={index} className="text-sm text-purple-700">• {question}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 bg-red-50 rounded-lg p-3">
                    <p className="text-sm text-red-700">
                      <AlertCircle className="inline h-4 w-4 mr-1" />
                      <strong>Piège fréquent :</strong> {activite.piege}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Exemples de Flux de Valeur</h3>
        <p className="text-gray-600 mb-4">
          Voici comment les activités se combinent dans des situations réelles :
        </p>
        <div className="space-y-4">
          {fluxValeurExemples.map((exemple, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">{exemple.scenario}</h4>
              <div className="flex items-center space-x-2 mb-2">
                {exemple.flux.map((activite, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {activite}
                    </span>
                    {idx < exemple.flux.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic">{exemple.explication}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Points clés pour l'examen</h3>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">La CVS est flexible et non-séquentielle</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">"Améliorer" est présente dans TOUS les flux de valeur</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">"Concevoir et faire la transition" est UNE seule activité</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">Les pratiques ITIL supportent les activités de la CVS</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default SVSPage