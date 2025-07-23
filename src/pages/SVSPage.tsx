import React, { useState } from 'react'
import { GitBranch, Package, Truck, Settings, ShieldCheck, Wrench, RefreshCw, ArrowRight, ChevronRight, AlertCircle, Target } from 'lucide-react'

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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Système de Valeur des Services (SVS)</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Le SVS est le modèle opérationnel d'ITIL 4. Comprendre comment ses composants interagissent 
          est essentiel pour l'examen (environ 30% des questions).
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
          <GitBranch className="h-6 w-6 mr-2" />
          Vue d'ensemble du SVS
        </h2>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          Le SVS permet à une organisation de créer de la valeur pour ses parties prenantes. 
          Il est composé de plusieurs éléments interconnectés qui travaillent ensemble de manière flexible.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {composantsSVS.map((composant, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{composant.nom}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{composant.description}</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">→ {composant.role}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">La Chaîne de Valeur des Services (CVS)</h2>
      
      <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">Point crucial pour l'examen :</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
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
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 transition-all cursor-pointer ${
              selectedActivity === activite.id 
                ? `border-${activite.couleur}-400 shadow-md` 
                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{activite.nom}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{activite.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      <Target className="inline h-4 w-4 mr-1" />
                      {activite.objectifPrincipal}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 text-svs-500 transform transition-transform duration-200 ${
                  selectedActivity === activite.id ? 'rotate-90' : ''
                }`} />
              </div>

              {selectedActivity === activite.id && (
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Entrées principales
                      </h4>
                      <ul className="space-y-2">
                        {activite.entreesCles.map((entree, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <ArrowRight className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {entree}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Sorties principales
                      </h4>
                      <ul className="space-y-2">
                        {activite.sortiesCles.map((sortie, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {sortie}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Questions types d'examen :</h4>
                    <ul className="space-y-1">
                      {activite.questionsExamen.map((question, index) => (
                        <li key={index} className="text-sm text-purple-700 dark:text-purple-300">• {question}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                    <p className="text-sm text-red-700 dark:text-red-300">
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

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Exemples de Flux de Valeur</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Voici comment les activités se combinent dans des situations réelles :
        </p>
        <div className="space-y-4">
          {fluxValeurExemples.map((exemple, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{exemple.scenario}</h4>
              <div className="flex items-center space-x-2 mb-2">
                {exemple.flux.map((activite, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {activite}
                    </span>
                    {idx < exemple.flux.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{exemple.explication}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Points clés pour l'examen</h3>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">La CVS est flexible et non-séquentielle</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">"Améliorer" est présente dans TOUS les flux de valeur</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">"Concevoir et faire la transition" est UNE seule activité</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Les pratiques ITIL supportent les activités de la CVS</span>
          </li>
        </ul>
      </div>

      {/* Section Gouvernance - Ajoutée pour couverture complète examen */}
      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gouvernance du SVS</h2>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
            <div className="text-sm text-red-800 dark:text-red-200">
              <strong>🎯 Crucial pour l'examen :</strong> La gouvernance est testée dans les questions sur le SVS. 
              Comprendre son rôle de direction et de contrôle, distincte de la gestion opérationnelle.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <ShieldCheck className="h-5 w-5 text-blue-600 mr-2" />
              Définition de la Gouvernance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Les moyens par lesquels une organisation est dirigée et contrôlée.</strong> 
              Elle évalue, dirige et surveille les activités de l'organisation.
            </p>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Composants clés :</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400"><strong>Évaluer :</strong> Performance, conformité, satisfaction des parties prenantes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400"><strong>Diriger :</strong> Stratégies, politiques, plans de l'organisation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400"><strong>Surveiller :</strong> Performance, risques, conformité</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <Target className="h-5 w-5 text-green-600 mr-2" />
              Questions d'examen typiques
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                  Q: Différence gouvernance vs gestion ? → R: Gouvernance DIRIGE, gestion EXÉCUTE
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                  Q: Que fait la gouvernance ? → R: Évalue, dirige, surveille
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                  Q: Qui est responsable de la gouvernance ? → R: Conseil d'administration/direction
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
              <p className="text-sm text-red-800 dark:text-red-200">
                <strong>⚠️ Piège :</strong> Gouvernance ≠ Gestion. Gouvernance = direction stratégique, Gestion = exécution opérationnelle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Amélioration Continue - Modèle 7 étapes */}
      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Amélioration Continue - Modèle 7 Étapes</h2>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5" />
            <div className="text-sm text-orange-800 dark:text-orange-200">
              <strong>📝 Important pour l'examen :</strong> Le modèle 7 étapes de l'amélioration continue est 
              fréquemment testé. Connaître l'ordre des étapes et leur objectif spécifique.
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          L'amélioration continue suit un modèle structuré en 7 étapes pour identifier, 
          prioriser et implémenter les améliorations de manière systématique.
        </p>

        <div className="grid gap-4">
          {[
            {
              etape: 1,
              titre: "Quelle est la vision ?",
              description: "Définir la vision d'amélioration et aligner avec la stratégie business",
              details: "Comprendre où l'organisation veut aller et pourquoi",
              couleur: "bg-red-500"
            },
            {
              etape: 2,
              titre: "Où sommes-nous maintenant ?",
              description: "Évaluer la situation actuelle et établir une baseline",
              details: "Mesurer la performance actuelle avec des métriques objectives",
              couleur: "bg-orange-500"
            },
            {
              etape: 3,
              titre: "Où voulons-nous être ?",
              description: "Définir les objectifs d'amélioration mesurables",
              details: "Établir des cibles SMART et des métriques de succès",
              couleur: "bg-yellow-500"
            },
            {
              etape: 4,
              titre: "Comment y arrivons-nous ?",
              description: "Planifier les actions d'amélioration et les ressources",
              details: "Développer un plan détaillé avec timeline et responsabilités",
              couleur: "bg-green-500"
            },
            {
              etape: 5,
              titre: "Agir",
              description: "Implémenter les actions d'amélioration planifiées",
              details: "Exécuter le plan avec suivi régulier et ajustements",
              couleur: "bg-blue-500"
            },
            {
              etape: 6,
              titre: "Avons-nous atteint nos objectifs ?",
              description: "Mesurer les résultats et évaluer le succès",
              details: "Comparer performance actuelle vs objectifs définis",
              couleur: "bg-indigo-500"
            },
            {
              etape: 7,
              titre: "Comment maintenir l'élan ?",
              description: "Consolider les gains et identifier nouvelles opportunités",
              details: "Intégrer les améliorations et relancer le cycle",
              couleur: "bg-purple-500"
            }
          ].map((etape) => (
            <div key={etape.etape} className="card">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${etape.couleur} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">{etape.etape}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {etape.titre}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{etape.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 italic">{etape.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
            Questions d'examen sur le modèle 7 étapes
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
                <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                  Q: Première étape d'amélioration ? → R: "Quelle est la vision ?"
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
                <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                  Q: Étape de mesure baseline ? → R: "Où sommes-nous maintenant ?"
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
                <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                  Q: Étape d'implémentation ? → R: "Agir" (étape 5)
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
                <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                  Q: Dernière étape du modèle ? → R: "Comment maintenir l'élan ?"
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
                <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                  Q: Étape de définition des objectifs ? → R: "Où voulons-nous être ?"
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
                <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                  Q: Le modèle est-il cyclique ? → R: Oui, étape 7 relance le cycle
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>💡 Astuce d'examen :</strong> Les 7 étapes suivent une logique : 
              VISION → ÉTAT ACTUEL → OBJECTIFS → PLAN → ACTION → MESURE → CONSOLIDATION. 
              Retenir cette séquence logique aide à mémoriser l'ordre.
            </p>
          </div>
        </div>

        {/* Registre d'Amélioration Continue (CIR) */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <RefreshCw className="h-5 w-5 text-blue-600 mr-2" />
            Registre d'Amélioration Continue (CIR)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Définition et rôle</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Le <strong>Continual Improvement Register (CIR)</strong> est un référentiel centralisé 
                qui capture et gère toutes les initiatives d'amélioration de l'organisation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Enregistre toutes les idées d'amélioration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Priorise selon valeur et faisabilité</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Suit le statut de chaque initiative</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Mesure l'impact des améliorations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Questions d'examen CIR</h4>
              <div className="space-y-2">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                    Q: Qu'est-ce que le CIR ? → R: Registre centralisé des améliorations
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                    Q: Qui gère le CIR ? → R: Activité "Améliorer" de la CVS
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                    Q: Contenu du CIR ? → R: Idées, priorités, statuts, impacts des améliorations
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>💡 Retenir :</strong> CIR = mémoire organisationnelle de l'amélioration continue
                </p>
              </div>
            </div>
          </div>
        </div>
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