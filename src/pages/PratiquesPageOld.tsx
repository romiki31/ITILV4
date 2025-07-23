import React, { useState } from 'react'
import { Shield, AlertCircle, GitBranch, Zap, Package, Users, Settings, FileText, TrendingUp, CheckCircle, Activity, Database, Wrench, ChevronRight } from 'lucide-react'

const PratiquesPage: React.FC = () => {
  const [selectedPratique, setSelectedPratique] = useState<number | null>(null)

  const pratiquesFoundation = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      nom: "Service desk",
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
      id: 5,
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
      id: 6,
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
      id: 7,
      nom: "Gestion du catalogue de services",
      icon: FileText,
      categorie: "Pratique de service",
      objectif: "Fournir une source unique d'information sur tous les services",
      activitesCVS: ["Concevoir et faire la transition", "Engager"],
      conceptsCles: [
        "Vue client vs vue technique",
        "Services actifs uniquement",
        "Lien avec le portefeuille de services"
      ],
      questionsExamen: [
        "Que contient le catalogue ? → Services actifs disponibles aux clients",
        "Différence catalogue/portefeuille ? → Actifs vs tous les services",
        "Qui voit le catalogue ? → Clients et utilisateurs"
      ],
      piege: "Le catalogue ne contient QUE les services actifs, pas retraités ou pipeline"
    },
    {
      id: 8,
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
      id: 9,
      nom: "Gestion de la configuration des services",
      icon: Database,
      categorie: "Pratique de service",
      objectif: "S'assurer que des informations précises sur la configuration sont disponibles",
      activitesCVS: ["Toutes les activités"],
      conceptsCles: [
        "CI - Configuration Item",
        "CMDB - Configuration Management Database",
        "Relations et dépendances"
      ],
      questionsExamen: [
        "Qu'est-ce qu'un CI ? → Tout composant à gérer pour fournir un service",
        "Où stocke-t-on les infos ? → CMDB",
        "Pourquoi c'est important ? → Évaluer l'impact des changements"
      ],
      piege: "La CMDB n'est PAS qu'une base technique - inclut docs, SLA, etc."
    },
    {
      id: 10,
      nom: "Surveillance et gestion des événements",
      icon: Activity,
      categorie: "Pratique technique",
      objectif: "Observer systématiquement les services et détecter les événements significatifs",
      activitesCVS: ["Fournir"],
      conceptsCles: [
        "Événement = changement d'état significatif",
        "Types : Info, Warning, Exception",
        "Corrélation et filtrage"
      ],
      questionsExamen: [
        "Qu'est-ce qu'un événement ? → Changement d'état significatif",
        "Tous les événements deviennent-ils des incidents ? → Non",
        "Quel est le but ? → Détection précoce et automatisation"
      ],
      piege: "Événement ≠ Incident - beaucoup d'événements sont informatifs"
    },
    {
      id: 11,
      nom: "Gestion des actifs IT",
      icon: Package,
      categorie: "Pratique générale",
      objectif: "Planifier et gérer le cycle de vie complet de tous les actifs IT",
      activitesCVS: ["Obtenir/Construire", "Fournir"],
      conceptsCles: [
        "Actif = a de la valeur financière",
        "Cycle de vie complet : acquisition à élimination",
        "Optimisation des coûts"
      ],
      questionsExamen: [
        "Différence actif/CI ? → Actif a une valeur financière",
        "Quel est le focus ? → Valeur financière et conformité",
        "Quand commence la gestion ? → Avant l'acquisition"
      ],
      piege: "Tous les actifs sont des CI, mais pas tous les CI sont des actifs"
    },
    {
      id: 12,
      nom: "Gestion des mises en production",
      icon: Zap,
      categorie: "Pratique technique",
      objectif: "Rendre disponibles des services nouveaux ou modifiés pour utilisation",
      activitesCVS: ["Concevoir et faire la transition", "Fournir"],
      conceptsCles: [
        "Release = version déployable",
        "Package de release",
        "Environnements : Dev, Test, Prod"
      ],
      questionsExamen: [
        "Qu'est-ce qu'une release ? → Version d'un service/composant",
        "Relation avec les changements ? → Une release peut contenir plusieurs changements",
        "Qui approuve ? → Selon la politique de release"
      ],
      piege: "Release management ne fait PAS le déploiement - c'est deployment management"
    },
    {
      id: 13,
      nom: "Gestion de la continuité des services",
      icon: Shield,
      categorie: "Pratique de service",
      objectif: "S'assurer que les services peuvent continuer à un niveau acceptable en cas de désastre",
      activitesCVS: ["Concevoir et faire la transition", "Améliorer"],
      conceptsCles: [
        "BIA - Business Impact Analysis",
        "RTO/RPO - Recovery Time/Point Objective",
        "Plans de continuité et tests"
      ],
      questionsExamen: [
        "Qu'est-ce que le RTO ? → Temps max acceptable d'interruption",
        "Qu'est-ce que le RPO ? → Perte de données max acceptable",
        "Quand tester ? → Régulièrement, pas juste après création"
      ],
      piege: "ITSCM supporte la BCM business, ne la remplace pas"
    },
    {
      id: 14,
      nom: "Gestion des relations",
      icon: Users,
      categorie: "Pratique générale",
      objectif: "Établir et entretenir les liens entre l'organisation et ses parties prenantes",
      activitesCVS: ["Engager"],
      conceptsCles: [
        "Identification des parties prenantes",
        "Analyse des besoins et attentes",
        "Communication bidirectionnelle"
      ],
      questionsExamen: [
        "Avec qui ? → Toutes les parties prenantes, pas que clients",
        "Différence avec SLM ? → Plus large que juste les niveaux de service",
        "Objectif principal ? → Comprendre et aligner les attentes"
      ],
      piege: "Relationship management est stratégique, service desk est opérationnel"
    },
    {
      id: 15,
      nom: "Gestion de la sécurité de l'information",
      icon: Shield,
      categorie: "Pratique générale",
      objectif: "Protéger les informations nécessaires à l'organisation",
      activitesCVS: ["Toutes les activités"],
      conceptsCles: [
        "CIA - Confidentialité, Intégrité, Disponibilité",
        "Politique de sécurité",
        "Gestion des risques de sécurité"
      ],
      questionsExamen: [
        "Qu'est-ce que CIA ? → Confidentialité, Intégrité, Disponibilité",
        "Qui est responsable ? → Tout le monde",
        "Relation avec availability management ? → Disponibilité fait partie de la sécurité"
      ],
      piege: "La sécurité n'est PAS que technique - inclut processus et personnes"
    }
  ]

  const pratiqueDetails = (pratique: any) => {
    return (
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Activités CVS associées</h4>
            <div className="flex flex-wrap gap-2">
              {pratique.activitesCVS.map((activite: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {activite}
                </span>
              ))}
            </div>

            <h4 className="font-semibold text-gray-800 mt-4 mb-3">Concepts clés</h4>
            <ul className="space-y-2">
              {pratique.conceptsCles.map((concept: string, index: number) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {concept}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Questions types d'examen</h4>
            <ul className="space-y-2">
              {pratique.questionsExamen.map((question: string, index: number) => (
                <li key={index} className="text-sm text-purple-700 bg-purple-50 rounded p-2">
                  {question}
                </li>
              ))}
            </ul>

            {pratique.piege && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-700">
                  <AlertCircle className="inline h-4 w-4 mr-1" />
                  <strong>Piège fréquent :</strong> {pratique.piege}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Les 15 Pratiques ITIL 4 Foundation</h1>
        <p className="text-gray-600">
          Ces 15 pratiques représentent environ 30% de l'examen. Focus sur l'objectif, 
          les relations avec la CVS et les distinctions clés.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-800 font-medium">Stratégie d'apprentissage :</p>
            <p className="text-sm text-yellow-700">
              Ne mémorisez pas tout ! Concentrez-vous sur : 1) L'objectif principal, 
              2) Les différences entre pratiques similaires, 3) Les pièges courants
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {pratiquesFoundation.map((pratique) => (
          <div 
            key={pratique.id}
            className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer ${
              selectedPratique === pratique.id 
                ? 'border-primary-400 shadow-md' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedPratique(selectedPratique === pratique.id ? null : pratique.id)}
          >
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <pratique.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{pratique.nom}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {pratique.categorie}
                      </span>
                    </div>
                    <p className="text-gray-600">{pratique.objectif}</p>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 text-pratiques-500 transform transition-transform duration-200 ${
                  selectedPratique === pratique.id ? 'rotate-90' : ''
                }`} />
              </div>

              {selectedPratique === pratique.id && pratiqueDetails(pratique)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conseils pour l'examen</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Distinctions importantes</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Incident (symptôme) vs Problème (cause)</li>
              <li>• Service desk (opérationnel) vs Relationship management (stratégique)</li>
              <li>• Changement (autorisation) vs Release (packaging)</li>
              <li>• SLA (externe) vs OLA (interne)</li>
              <li>• Catalogue (actifs) vs Portefeuille (tous)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Mnémotechniques</h4>
            <ul className="space-y-1 text-sm text-gray-700">
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