import React, { useState } from 'react'
import { BookOpen, Target, Users, Package, Shield, TrendingUp, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'

const FondamentauxPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = [
    {
      id: 'concepts-cles',
      title: 'Concepts Clés ITIL 4',
      icon: BookOpen,
      color: 'blue',
      content: {
        intro: "Ces concepts constituent la base de compréhension d'ITIL 4. Maîtrisez-les parfaitement.",
        items: [
          {
            term: "Valeur",
            definition: "Bénéfice, utilité ou importance perçue de quelque chose",
            exemple: "Un service de helpdesk qui résout rapidement les problèmes crée de la valeur en minimisant les interruptions de travail",
            piege: "La valeur est co-créée avec le client, elle n'est pas uniquement définie par le fournisseur"
          },
          {
            term: "Service",
            definition: "Moyen de permettre la co-création de valeur en facilitant les résultats que les clients veulent obtenir",
            exemple: "Un service cloud qui permet aux clients de stocker et accéder à leurs données de n'importe où",
            piege: "Un service n'est PAS un produit - c'est une combinaison de produits et d'activités"
          },
          {
            term: "Produit",
            definition: "Configuration de ressources conçue pour offrir de la valeur",
            exemple: "Microsoft Office 365 est un produit qui fait partie du service de productivité bureautique",
            piege: "Les produits peuvent être tangibles (serveur) ou intangibles (licence logicielle)"
          },
          {
            term: "Utilité et Garantie",
            definition: "Utilité = adaptation à l'usage (fonctionnalité). Garantie = adaptation à l'utilisation (disponibilité, capacité, sécurité)",
            exemple: "Email : Utilité = envoyer des messages. Garantie = disponible 99.9%, sécurisé, rapide",
            piege: "Les DEUX sont nécessaires pour créer de la valeur - l'un sans l'autre est insuffisant"
          }
        ],
        examTip: "À l'examen, distinguez bien Service vs Produit, et rappelez-vous que Utilité + Garantie = Valeur"
      }
    },
    {
      id: 'principes',
      title: 'Les 7 Principes Directeurs',
      icon: Target,
      color: 'green',
      content: {
        intro: "Les principes directeurs sont universels et doivent être appliqués à TOUTE initiative.",
        items: [
          {
            principe: "Se concentrer sur la valeur",
            application: "Toujours se demander : 'Cela apporte-t-il de la valeur au client ?'",
            exemple: "Avant d'ajouter une fonctionnalité, vérifier qu'elle répond à un besoin client réel",
            motsClés: ["valeur", "client", "parties prenantes", "résultat"]
          },
          {
            principe: "Commencer là où on se trouve",
            application: "Évaluer l'existant avant de tout reconstruire",
            exemple: "Auditer les processus actuels avant d'implémenter un nouveau système",
            motsClés: ["existant", "réutiliser", "observer", "évaluer"]
          },
          {
            principe: "Progresser de manière itérative avec des retours",
            application: "Avancer par petites étapes avec validation à chaque fois",
            exemple: "Déployer une nouvelle fonctionnalité d'abord en pilote avant le déploiement général",
            motsClés: ["itératif", "feedback", "petites étapes", "MVP"]
          },
          {
            principe: "Collaborer et promouvoir la visibilité",
            application: "Impliquer les bonnes personnes et communiquer ouvertement",
            exemple: "Organiser des stand-ups quotidiens pour partager l'avancement",
            motsClés: ["collaboration", "transparence", "communication", "confiance"]
          },
          {
            principe: "Penser et travailler de manière holistique",
            application: "Considérer le système dans son ensemble, pas juste les parties",
            exemple: "Évaluer l'impact d'un changement sur tous les services liés",
            motsClés: ["holistique", "système", "intégration", "bout-en-bout"]
          },
          {
            principe: "Opter pour la simplicité et être pratique",
            application: "Faire simple et efficace, éliminer le superflu",
            exemple: "Utiliser un outil existant plutôt que développer une solution complexe",
            motsClés: ["simplicité", "pratique", "efficace", "minimum viable"]
          },
          {
            principe: "Optimiser et automatiser",
            application: "D'abord optimiser, puis automatiser les tâches répétitives",
            exemple: "Standardiser le processus de création de compte avant de l'automatiser",
            motsClés: ["optimisation", "automatisation", "efficience", "technologie"]
          }
        ],
        examTip: "Mémorisez l'ordre avec SCPC-PSO : Se concentrer, Commencer, Progresser, Collaborer, Penser holistique, Simplicité, Optimiser"
      }
    },
    {
      id: 'dimensions',
      title: 'Les 4 Dimensions',
      icon: Package,
      color: 'purple',
      content: {
        intro: "Les 4 dimensions doivent TOUTES être considérées pour chaque service. Elles sont entourées par les facteurs externes (PESTLE).",
        dimensions: [
          {
            nom: "Organisations et Personnes",
            focus: "Structure, culture, rôles, compétences",
            questions: [
              "Qui fait quoi ?",
              "Quelles compétences sont nécessaires ?",
              "Quelle est la culture organisationnelle ?"
            ],
            exemple: "Former les équipes support aux nouvelles technologies cloud"
          },
          {
            nom: "Information et Technologie",
            focus: "Données, connaissances, outils IT",
            questions: [
              "Quelles informations sont nécessaires ?",
              "Quelles technologies utiliser ?",
              "Comment gérer les données ?"
            ],
            exemple: "Choisir entre solution on-premise ou cloud selon les besoins de sécurité"
          },
          {
            nom: "Partenaires et Fournisseurs",
            focus: "Relations externes, contrats, intégrations",
            questions: [
              "Que faire en interne vs externe ?",
              "Comment gérer les fournisseurs ?",
              "Quels sont les risques de dépendance ?"
            ],
            exemple: "Négocier des SLA avec le fournisseur cloud"
          },
          {
            nom: "Flux de Valeur et Processus",
            focus: "Comment le travail circule pour créer de la valeur",
            questions: [
              "Comment optimiser le flux de travail ?",
              "Où sont les goulots d'étranglement ?",
              "Comment mesurer la performance ?"
            ],
            exemple: "Réduire les étapes d'approbation pour accélérer les déploiements"
          }
        ],
        facteurs: "PESTLE : Politique, Économique, Social, Technologique, Légal, Environnemental",
        examTip: "Retenez OIPF (Organisation, Information, Partenaires, Flux) et n'oubliez pas les facteurs externes !"
      }
    },
    {
      id: 'gestion-services',
      title: 'Gestion des Services',
      icon: Shield,
      color: 'red',
      content: {
        intro: "Comprendre les composants essentiels de la gestion des services IT.",
        elements: [
          {
            concept: "Parties Prenantes",
            types: [
              "Consommateur : Qui reçoit le service",
              "Client : Qui définit les exigences et paie",
              "Utilisateur : Qui utilise le service au quotidien",
              "Sponsor : Qui autorise le budget"
            ],
            piege: "Une même personne peut avoir plusieurs rôles"
          },
          {
            concept: "Outcome vs Output",
            definition: "Output = ce qui est livré. Outcome = résultat obtenu par le client",
            exemple: "Output : rapport de 100 pages. Outcome : décision éclairée prise grâce au rapport",
            importance: "ITIL 4 se concentre sur les outcomes, pas juste les outputs"
          },
          {
            concept: "Coûts et Risques",
            principe: "Le fournisseur de services doit réduire les coûts et risques pour le client",
            exemples: [
              "Coût : investissement initial, maintenance, formation",
              "Risque : indisponibilité, violation de sécurité, obsolescence"
            ]
          }
        ],
        examTip: "Distinguez bien : Output (livrable) vs Outcome (résultat business)"
      }
    }
  ]

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fondamentaux ITIL 4</h1>
        <p className="text-gray-600">
          Maîtrisez les concepts essentiels pour réussir l'examen. Ces fondamentaux représentent 
          environ 40% des questions de l'examen.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <strong>Conseil d'apprentissage :</strong> Concentrez-vous sur la compréhension, pas sur la mémorisation. 
            ITIL 4 teste votre capacité à appliquer les concepts dans des situations pratiques.
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                activeSection === section.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${section.color}-100`}>
                  <section.icon className={`h-5 w-5 text-${section.color}-600`} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
              </div>
              {activeSection === section.id ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {activeSection === section.id && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <p className="text-gray-600 mb-4">{section.content.intro}</p>

            {section.id === 'concepts-cles' && (
              <div className="space-y-4">
                {section.content.items?.map((item, index) =>
                  'term' in item ? (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.term}</h3>
                      <p className="text-gray-700 mb-2">{item.definition}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <span className="text-green-600 font-medium">Exemple :</span>
                          <span className="text-gray-600">{item.exemple}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-red-600 font-medium">Attention :</span>
                          <span className="text-gray-600">{item.piege}</span>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )}

            {section.id === 'principes' && (
              <div className="space-y-3">
                {section.content.items?.map((item, index) =>
                  'principe' in item ? (
                    <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                      <h3 className="font-semibold text-gray-900">{index + 1}. {item.principe}</h3>
                      <p className="text-gray-700 text-sm mt-1">{item.application}</p>
                      <p className="text-gray-600 text-sm mt-1 italic">Ex: {item.exemple}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.motsClés.map((mot: string, idx: number) => (
                          <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                            {mot}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )}

                  {section.id === 'dimensions' && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.content.dimensions?.map((dim, index) => (
                          <div key={index} className="bg-purple-50 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-900 mb-2">{dim.nom}</h3>
                            <p className="text-purple-700 text-sm mb-2">{dim.focus}</p>
                            <div className="space-y-1">
                              {dim.questions.map((q, idx) => (
                                <p key={idx} className="text-purple-600 text-xs">• {q}</p>
                              ))}
                            </div>
                            <p className="text-purple-800 text-sm mt-2 font-medium">
                              Exemple : {dim.exemple}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 mt-4">
                        <p className="text-sm text-gray-700">
                          <strong>Facteurs externes :</strong> {section.content.facteurs}
                        </p>
                      </div>
                    </div>
                  )}

                  {section.id === 'gestion-services' && (
                    <div className="space-y-4">
                      {section.content.elements?.map((element, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{element.concept}</h3>
                          {element.types && (
                            <ul className="space-y-1 mb-2">
                              {element.types.map((type, idx) => (
                                <li key={idx} className="text-sm text-gray-700">• {type}</li>
                              ))}
                            </ul>
                          )}
                          {element.definition && (
                            <p className="text-gray-700 text-sm mb-2">{element.definition}</p>
                          )}
                          {element.exemple && (
                            <p className="text-gray-600 text-sm italic">Exemple : {element.exemple}</p>
                          )}
                          {element.piege && (
                            <p className="text-red-600 text-sm mt-2">⚠️ {element.piege}</p>
                          )}
                          {element.principe && (
                            <p className="text-gray-700 text-sm">{element.principe}</p>
                          )}
                          {element.exemples && (
                            <ul className="mt-2 space-y-1">
                              {element.exemples.map((ex, idx) => (
                                <li key={idx} className="text-sm text-gray-600">• {ex}</li>
                              ))}
                            </ul>
                          )}
                          {element.importance && (
                            <p className="text-blue-600 text-sm mt-2 font-medium">💡 {element.importance}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.content.examTip && (
                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        <TrendingUp className="inline h-4 w-4 mr-1" />
                        <strong>Conseil examen :</strong> {section.content.examTip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Points clés pour l'examen</h3>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">Les 7 principes s'appliquent à TOUTES les situations</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">Les 4 dimensions doivent TOUTES être considérées</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">La valeur est toujours co-créée avec le client</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-gray-700">Focus sur les outcomes (résultats) pas juste les outputs (livrables)</span>
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

export default FondamentauxPage