import React, { useState } from 'react'
import { Shield, AlertCircle, GitBranch, Zap, Package, Users, Settings, FileText, TrendingUp, CheckCircle, Activity, Database, Wrench, ChevronRight, BookOpen, AlertTriangle } from 'lucide-react'

const PratiquesPage: React.FC = () => {
  const [selectedPratique, setSelectedPratique] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'examinables' | 'objectif'>('examinables')

  // Pratiques examinables en détail (7) - À connaître en profondeur pour l'examen
  const pratiquesExaminablesDetail = [
    {
      id: 1,
      nom: "Gestion des incidents",
      icon: AlertCircle,
      categorie: "Pratique de service",
      objectif: "Minimiser l'impact négatif des incidents en restaurant le service normal ASAP",
      activitesCVS: ["Fournir", "Engager"],
      conceptsCles: [
        "Incident = interruption non planifiée",
        "Priorité = Impact x Urgence",
        "Incident majeur nécessite procédure spéciale"
      ],
      questionsExamen: [
        "Qu'est-ce qu'un incident ? → Interruption non planifiée ou dégradation",
        "Comment calculer la priorité ? → Impact x Urgence",
        "Qui peut enregistrer un incident ? → N'importe qui"
      ],
      piege: "Un incident n'est PAS la cause racine - c'est le symptôme"
    },
    {
      id: 2,
      nom: "Gestion des problèmes",
      icon: Shield,
      categorie: "Pratique de service",
      objectif: "Réduire la probabilité et l'impact des incidents en identifiant les causes",
      activitesCVS: ["Améliorer", "Fournir"],
      conceptsCles: [
        "Problème = cause d'un ou plusieurs incidents",
        "Error connue = problème avec cause identifiée",
        "Workaround = solution temporaire"
      ],
      questionsExamen: [
        "Différence incident/problème ? → Incident = symptôme, Problème = cause",
        "Qu'est-ce qu'une erreur connue ? → Problème avec cause racine identifiée",
        "Peut-on fermer un problème sans le résoudre ? → Oui, si risque acceptable"
      ],
      piege: "On peut avoir un problème SANS incident (proactif)"
    },
    {
      id: 3,
      nom: "Gestion des demandes de service",
      icon: Package,
      categorie: "Pratique de service",
      objectif: "Gérer le cycle de vie de toutes les demandes de service des utilisateurs",
      activitesCVS: ["Engager", "Fournir", "Concevoir et faire la transition"],
      conceptsCles: [
        "Demande de service ≠ Incident",
        "Catalogue de services pour les demandes standard",
        "Approbation selon le type de demande"
      ],
      questionsExamen: [
        "Qu'est-ce qu'une demande de service ? → Demande d'info ou d'accès standard",
        "Où trouve-t-on les services disponibles ? → Catalogue de services",
        "Différence avec incident ? → Planifié vs non-planifié"
      ],
      piege: "Reset de mot de passe = demande de service, PAS un incident"
    },
    {
      id: 4,
      nom: "Gestion des niveaux de service",
      icon: Activity,
      categorie: "Pratique de service",
      objectif: "Définir des cibles claires pour les niveaux de service et s'assurer qu'ils sont atteints",
      activitesCVS: ["Concevoir et faire la transition", "Engager", "Améliorer"],
      conceptsCles: [
        "SLA - Service Level Agreement",
        "SLR - Service Level Requirement", 
        "OLA - Operational Level Agreement"
      ],
      questionsExamen: [
        "Qu'est-ce qu'un SLA ? → Accord documenté entre fournisseur et client",
        "Différence SLA/OLA ? → SLA externe, OLA interne",
        "Qui définit les SLR ? → Le client"
      ],
      piege: "SLA est avec le CLIENT, OLA est INTERNE"
    },
    {
      id: 5,
      nom: "Habilitation des changements",
      icon: GitBranch,
      categorie: "Pratique de service",
      objectif: "Maximiser le nombre de changements réussis tout en minimisant les risques",
      activitesCVS: ["Concevoir et faire la transition", "Fournir"],
      conceptsCles: [
        "Types de changements : Standard, Normal, Urgence",
        "Comité consultatif des changements (CAB)",
        "Autorité de changement"
      ],
      questionsExamen: [
        "Qui autorise un changement standard ? → Pré-autorisé",
        "Qui autorise un changement d'urgence ? → Autorité de changement d'urgence",
        "Quel est le rôle du CAB ? → Conseiller, PAS autoriser"
      ],
      piege: "Le CAB conseille mais n'autorise PAS - c'est l'autorité de changement qui autorise"
    },
    {
      id: 6,
      nom: "Centre de services (Service Desk)",
      icon: Users,
      categorie: "Pratique de service",
      objectif: "Point de contact unique entre le fournisseur de services et les utilisateurs",
      activitesCVS: ["Engager", "Fournir"],
      conceptsCles: [
        "SPOC - Single Point of Contact",
        "Types : Local, Centralisé, Virtuel, Follow the sun",
        "Omnichannel : téléphone, email, chat, portail"
      ],
      questionsExamen: [
        "Quel est le rôle principal ? → Point de contact unique (SPOC)",
        "Avec qui communique le service desk ? → Utilisateurs (pas clients)",
        "Quelle activité CVS principale ? → Engager"
      ],
      piege: "Service desk n'est PAS que pour les incidents - aussi demandes de service"
    },
    {
      id: 7,
      nom: "Amélioration continue",
      icon: TrendingUp,
      categorie: "Pratique générale",
      objectif: "Aligner les pratiques et services avec les besoins business changeants",
      activitesCVS: ["Améliorer (principale)", "Toutes les autres"],
      conceptsCles: [
        "Registre d'amélioration continue (CIR)",
        "Modèle d'amélioration en 7 étapes",
        "Métriques et KPIs"
      ],
      questionsExamen: [
        "Quel est l'objectif du CIR ? → Capturer et prioriser les idées d'amélioration",
        "Qui peut soumettre des idées ? → Tout le monde",
        "Quelle activité CVS ? → Améliorer (mais présente partout)"
      ],
      piege: "L'amélioration continue n'est PAS seulement après incidents - c'est permanent"
    }
  ]

  // Pratiques à connaître au niveau de l'énoncé de l'objectif (8)
  const pratiquesObjectif = [
    {
      id: 8,
      nom: "Gestion des actifs informatiques",
      icon: Database,
      categorie: "Pratique générale",
      objectif: "Planifier et gérer le cycle de vie complet de tous les actifs IT",
      importance: "Optimisation des coûts et des risques liés aux actifs"
    },
    {
      id: 9,
      nom: "Gestion de la sécurité de l'information",
      icon: Shield,
      categorie: "Pratique générale",
      objectif: "Protéger l'information nécessaire à l'organisation pour mener ses activités",
      importance: "Protection de la confidentialité, intégrité et disponibilité (CIA)"
    },
    {
      id: 10,
      nom: "Gestion des déploiements",
      icon: Package,
      categorie: "Pratique technique",
      objectif: "Déplacer du matériel, logiciel, documentation et autres composants vers les environnements cibles",
      importance: "Assurer que les composants sont déployés de manière contrôlée"
    },
    {
      id: 11,
      nom: "Gestion des mises en production",
      icon: GitBranch,
      categorie: "Pratique technique",
      objectif: "Rendre disponibles de nouveaux services et fonctionnalités ou modifiés pour utilisation",
      importance: "Coordination entre développement et opérations"
    },
    {
      id: 12,
      nom: "Gestion des fournisseurs",
      icon: Users,
      categorie: "Pratique générale",
      objectif: "S'assurer que les fournisseurs et leurs performances sont gérés de manière appropriée",
      importance: "Obtenir de la valeur des fournisseurs tout en gérant les risques"
    },
    {
      id: 13,
      nom: "Gestion des relations",
      icon: Users,
      categorie: "Pratique générale",
      objectif: "Établir et entretenir des liens entre l'organisation et ses parties prenantes",
      importance: "Comprendre les besoins et maintenir la satisfaction"
    },
    {
      id: 14,
      nom: "Gestion de la configuration des services",
      icon: Settings,
      categorie: "Pratique de service",
      objectif: "S'assurer que des informations précises et fiables sur la configuration des services sont disponibles",
      importance: "Base de données de gestion de configuration (CMDB)"
    },
    {
      id: 15,
      nom: "Surveillance et gestion des événements",
      icon: Activity,
      categorie: "Pratique technique",
      objectif: "Observer systématiquement les services et leurs composants",
      importance: "Détection précoce des incidents et problèmes potentiels"
    }
  ]

  const pratiqueDetails = (pratique: any) => (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Activités CVS associées</h4>
          <div className="flex flex-wrap gap-2">
            {pratique.activitesCVS.map((activite: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-pratiques-100 text-pratiques-700 dark:bg-pratiques-900/20 dark:text-pratiques-400 rounded-full text-sm">
                {activite}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Concepts clés</h4>
          <ul className="space-y-2">
            {pratique.conceptsCles.map((concept: string, index: number) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <CheckCircle className="h-4 w-4 text-pratiques-500 mr-2 mt-0.5 flex-shrink-0" />
                {concept}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {pratique.questionsExamen && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Questions d'examen fréquentes</h4>
          <div className="space-y-2">
            {pratique.questionsExamen.map((question: string, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-3 text-sm">
                <p className="text-gray-700 dark:text-gray-300">{question}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {pratique.piege && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-700 dark:text-red-400">
            <AlertTriangle className="inline h-4 w-4 mr-1" />
            <strong>Piège fréquent :</strong> {pratique.piege}
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Pratiques ITIL 4</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Les pratiques ITIL 4 représentent les capacités organisationnelles pour gérer les services.
        </p>
      </div>

      {/* Tabs pour les deux catégories */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setActiveTab('examinables')}
            className={`flex-1 px-4 py-3 rounded-md font-medium transition-colors ${
              activeTab === 'examinables'
                ? 'bg-white dark:bg-gray-900 text-pratiques-600 dark:text-pratiques-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>Pratiques examinables en détail (7)</span>
            </div>
            <p className="text-xs mt-1 font-normal">À connaître en profondeur pour l'examen</p>
          </button>
          <button
            onClick={() => setActiveTab('objectif')}
            className={`flex-1 px-4 py-3 rounded-md font-medium transition-colors ${
              activeTab === 'objectif'
                ? 'bg-white dark:bg-gray-900 text-pratiques-600 dark:text-pratiques-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <span>Pratiques niveau objectif (8)</span>
            </div>
            <p className="text-xs mt-1 font-normal">À reconnaître et comprendre dans leur finalité</p>
          </button>
        </div>
      </div>

      {/* Contenu selon l'onglet actif */}
      <div className="space-y-4">
        {activeTab === 'examinables' ? (
          <>
            <div className="mb-4 p-4 bg-pratiques-50 dark:bg-pratiques-900/10 border border-pratiques-200 dark:border-pratiques-800 rounded-lg">
              <p className="text-sm text-pratiques-700 dark:text-pratiques-400">
                <strong>Important :</strong> Ces 7 pratiques doivent être connues en profondeur pour l'examen. 
                Vous devez comprendre leurs objectifs, activités, concepts clés et interactions.
              </p>
            </div>
            
            {pratiquesExaminablesDetail.map((pratique) => (
              <div key={pratique.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div 
                  onClick={() => setSelectedPratique(selectedPratique === pratique.id ? null : pratique.id)}
                  className="cursor-pointer p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pratiques-100 dark:bg-pratiques-900/20 p-3 rounded-lg">
                        <pratique.icon className="h-6 w-6 text-pratiques-600 dark:text-pratiques-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{pratique.nom}</h3>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            {pratique.categorie}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{pratique.objectif}</p>
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-pratiques-500 transform transition-transform duration-200 ${
                      selectedPratique === pratique.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>

                {selectedPratique === pratique.id && pratiqueDetails(pratique)}
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                <strong>Note :</strong> Ces 8 pratiques doivent être reconnues et comprises dans leur finalité, 
                sans détail opérationnel. Concentrez-vous sur leur objectif principal et leur importance.
              </p>
            </div>
            
            <div className="grid gap-4">
              {pratiquesObjectif.map((pratique) => (
                <div key={pratique.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                      <pratique.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{pratique.nom}</h3>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          {pratique.categorie}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{pratique.objectif}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Importance :</strong> {pratique.importance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-8 bg-gradient-to-r from-pratiques-50 to-purple-50 dark:from-pratiques-900/10 dark:to-purple-900/10 rounded-lg p-6 border border-pratiques-200 dark:border-pratiques-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Conseils pour l'examen</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Distinctions importantes</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Incident (symptôme) vs Problème (cause)</li>
              <li>• Service desk (opérationnel) vs Relationship management (stratégique)</li>
              <li>• Changement (autorisation) vs Release (packaging)</li>
              <li>• SLA (externe) vs OLA (interne)</li>
              <li>• Catalogue (actifs) vs Portefeuille (tous)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Mnémotechniques</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• CIA = Confidentialité, Intégrité, Disponibilité</li>
              <li>• Priorité = Impact × Urgence</li>
              <li>• RTO = Recovery Time Objective (interruption)</li>
              <li>• RPO = Recovery Point Objective (données)</li>
              <li>• SPOC = Single Point of Contact (service desk)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PratiquesPage