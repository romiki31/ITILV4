import React, { useState } from 'react'
import { 
  Building,
  ShoppingCart,
  Cloud,
  Heart,
  Rocket,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Settings,
  ChevronDown,
  ChevronUp,
  BookOpen
} from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  company: string
  sector: string
  icon: React.FC<any>
  color: string
  context: string
  challenge: string
  itilConcepts: string[]
  solution: {
    title: string
    description: string
    keyActions: string[]
  }
  results: string[]
  examQuestions: {
    question: string
    answer: string
    piege?: string
  }[]
  keyTakeaways: string[]
}

const CaseStudiesPage: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null)
  const [expandedSection, setExpandedSection] = useState<{ [key: string]: boolean }>({})

  const caseStudies: CaseStudy[] = [
    {
      id: 'bank-digital',
      title: 'Transformation digitale d\'une banque traditionnelle',
      company: 'BankCorp International',
      sector: 'Services financiers',
      icon: Building,
      color: 'bg-blue-500',
      context: 'BankCorp, une banque traditionnelle avec 150 ans d\'histoire, fait face à la concurrence des néo-banques. Avec 5000 employés et 2 millions de clients, elle doit moderniser ses services tout en maintenant la confiance et la sécurité.',
      challenge: 'Comment transformer les services bancaires traditionnels en services digitaux tout en assurant la continuité, la sécurité et la satisfaction client ?',
      itilConcepts: ['SVS', '4 Dimensions', 'Principes directeurs', 'Gestion des changements', 'Amélioration continue'],
      solution: {
        title: 'Application du SVS pour la transformation',
        description: 'Utilisation du Système de Valeur des Services pour orchestrer la transformation digitale',
        keyActions: [
          'Analyse des 4 dimensions : révision complète de l\'organisation, modernisation technologique, nouveaux partenariats fintech, refonte des processus',
          'Application du principe "Commencer là où on se trouve" : audit des systèmes existants, identification des éléments réutilisables',
          'Chaîne de valeur : Planifier (vision digitale) → Concevoir (nouvelle app mobile) → Obtenir/Construire (partenariat fintech) → Livrer (déploiement progressif)',
          'Amélioration continue intégrée : feedback loops avec les clients, métriques de satisfaction, ajustements itératifs'
        ]
      },
      results: [
        'Augmentation de 40% de l\'utilisation des services digitaux en 6 mois',
        'Réduction de 30% des visites en agence',
        'Score de satisfaction client passé de 3.2 à 4.5/5',
        'Temps de traitement des demandes réduit de 72h à 2h'
      ],
      examQuestions: [
        {
          question: 'Quel principe directeur a guidé l\'approche de BankCorp pour sa transformation ?',
          answer: 'Commencer là où on se trouve - en évaluant et réutilisant les systèmes existants avant de tout reconstruire',
          piege: 'Ne pas confondre avec "Progresser de manière itérative" qui concerne le mode de déploiement'
        },
        {
          question: 'Pourquoi les 4 dimensions étaient-elles TOUTES pertinentes dans ce cas ?',
          answer: 'Car négliger une dimension (ex: ne pas former le personnel ou ignorer les aspects légaux) aurait fait échouer la transformation',
          piege: 'Les 4 dimensions sont TOUJOURS toutes pertinentes, sans exception'
        },
        {
          question: 'Comment l\'activité "Améliorer" de la CVS a-t-elle été utilisée ?',
          answer: 'De manière continue à travers des feedback loops, pas seulement après des incidents',
          piege: 'L\'amélioration n\'est PAS seulement réactive, elle est permanente'
        }
      ],
      keyTakeaways: [
        'La transformation digitale nécessite une approche holistique (toutes les dimensions)',
        'Commencer par évaluer l\'existant évite les coûts et risques inutiles',
        'L\'amélioration continue doit être intégrée dès le début, pas ajoutée après'
      ]
    },
    {
      id: 'ecommerce-incident',
      title: 'Gestion d\'un incident majeur Black Friday',
      company: 'MegaShop Online',
      sector: 'E-commerce',
      icon: ShoppingCart,
      color: 'bg-red-500',
      context: 'MegaShop, leader du e-commerce avec 50M€ de CA annuel, subit une panne majeure le Black Friday à 10h du matin. Le site est inaccessible, les clients ne peuvent pas passer commande, et c\'est le jour le plus important de l\'année (30% du CA annuel).',
      challenge: 'Comment gérer efficacement cet incident critique tout en préparant la résolution du problème sous-jacent et en communiquant avec les parties prenantes ?',
      itilConcepts: ['Gestion des incidents', 'Gestion des problèmes', 'Gestion des changements d\'urgence', 'Service Desk', 'Communication'],
      solution: {
        title: 'Activation du processus de gestion d\'incident majeur',
        description: 'Mobilisation immédiate selon les pratiques ITIL avec focus sur la restauration rapide',
        keyActions: [
          'Service Desk comme SPOC : centralisation de toutes les communications clients, 500 appels/heure gérés',
          'Incident Manager désigné : coordination de toutes les équipes techniques, communication toutes les 30 minutes',
          'Diagnostic rapide : serveur de base de données saturé, solution temporaire = bascule sur serveur de secours',
          'Changement d\'urgence approuvé par l\'ECAB en 15 minutes pour augmenter la capacité',
          'Enregistrement comme Problème pour analyse root cause ultérieure'
        ]
      },
      results: [
        'Service restauré en 2h au lieu des 8h habituelles pour ce type d\'incident',
        'Perte limitée à 2M€ au lieu des 15M€ potentiels',
        'Communication proactive ayant limité l\'impact sur la réputation',
        'Plan d\'action défini pour éviter la récurrence l\'année suivante'
      ],
      examQuestions: [
        {
          question: 'Quelle est la différence entre l\'incident et le problème dans ce cas ?',
          answer: 'Incident = site inaccessible (symptôme), Problème = saturation du serveur de base de données (cause racine)',
          piege: 'Un incident est l\'interruption, un problème est la cause sous-jacente'
        },
        {
          question: 'Pourquoi utiliser l\'ECAB plutôt que le CAB normal ?',
          answer: 'Situation d\'urgence critique nécessitant une décision rapide, l\'ECAB (Emergency CAB) est conçu pour cela',
          piege: 'Le CAB normal serait trop lent pour une urgence Black Friday'
        },
        {
          question: 'Le problème doit-il être résolu immédiatement ?',
          answer: 'Non, la priorité est de restaurer le service (incident). L\'analyse et résolution du problème peuvent attendre',
          piege: 'Gestion des incidents = restauration rapide, pas résolution complète'
        }
      ],
      keyTakeaways: [
        'La priorité en incident majeur est TOUJOURS la restauration du service',
        'Le Service Desk reste le point de contact unique même en crise',
        'Les changements d\'urgence suivent un processus accéléré mais contrôlé',
        'Incident ≠ Problème : on peut fermer l\'incident sans résoudre le problème'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Migration cloud d\'une PME manufacturière',
      company: 'TechManuf Solutions',
      sector: 'Industrie',
      icon: Cloud,
      color: 'bg-green-500',
      context: 'TechManuf, PME de 200 employés spécialisée dans la fabrication de composants électroniques, doit migrer ses systèmes vieillissants vers le cloud pour rester compétitive. Budget limité, expertise IT réduite (5 personnes), et production 24/7 qui ne peut s\'arrêter.',
      challenge: 'Comment planifier et exécuter une migration cloud avec des ressources limitées tout en assurant la continuité de production ?',
      itilConcepts: ['Gestion des changements', 'Gestion des risques', 'Planification', 'Partenaires et fournisseurs', 'Amélioration continue'],
      solution: {
        title: 'Approche itérative avec focus sur la gestion des risques',
        description: 'Migration progressive guidée par les principes ITIL et la gestion des changements',
        keyActions: [
          'Application du principe "Progresser de manière itérative" : migration par phases sur 12 mois',
          'Dimension Partenaires : sélection d\'un partenaire cloud avec SLA adapté aux besoins 24/7',
          'Gestion des changements : tous les changements passent par le CAB, planning coordonné avec la production',
          'Identification des risques : plan de rollback pour chaque phase, environnement de test parallèle',
          'Formation progressive du personnel IT et des utilisateurs clés'
        ]
      },
      results: [
        'Migration complétée sans interruption de production',
        'Réduction de 40% des coûts d\'infrastructure',
        'Amélioration de la disponibilité de 95% à 99.5%',
        'Équipe IT montée en compétences sur le cloud'
      ],
      examQuestions: [
        {
          question: 'Tous les changements de migration doivent-ils passer par le CAB ?',
          answer: 'Les changements normaux oui, mais des changements standards peuvent être pré-autorisés après les premières migrations réussies',
          piege: 'Pas TOUS les changements passent par le CAB, certains peuvent devenir standards'
        },
        {
          question: 'Quel est le rôle du SLA avec le fournisseur cloud ?',
          answer: 'Définir les niveaux de service convenus avec le CLIENT (TechManuf), pas entre équipes internes',
          piege: 'SLA = accord externe avec client, OLA = accord interne entre équipes'
        },
        {
          question: 'Comment l\'amélioration continue s\'applique-t-elle ici ?',
          answer: 'À chaque phase de migration, les leçons apprises sont utilisées pour améliorer la phase suivante',
          piege: 'L\'amélioration n\'attend pas la fin du projet, elle est continue'
        }
      ],
      keyTakeaways: [
        'L\'approche itérative réduit les risques dans les projets complexes',
        'La dimension Partenaires est cruciale pour les PME avec ressources limitées',
        'Les changements répétitifs réussis peuvent devenir des changements standards',
        'Le CAB adapte ses décisions au contexte et aux risques'
      ]
    },
    {
      id: 'hospital-support',
      title: 'Refonte du support IT d\'un hôpital',
      company: 'Centre Hospitalier Régional',
      sector: 'Santé',
      icon: Heart,
      color: 'bg-purple-500',
      context: 'Hôpital de 1000 lits, 3000 employés, équipements médicaux critiques connectés. Le support IT actuel est débordé : 500 tickets/jour, temps de résolution moyen de 48h, frustration du personnel médical qui perd du temps précieux.',
      challenge: 'Comment restructurer le support IT pour répondre efficacement aux besoins critiques d\'un environnement hospitalier ?',
      itilConcepts: ['Service Desk', 'Gestion des demandes de service', 'Catalogue de services', 'SLA/OLA', 'Priorisation'],
      solution: {
        title: 'Transformation du Service Desk en véritable SPOC',
        description: 'Restructuration complète basée sur les pratiques ITIL avec focus sur la criticité médicale',
        keyActions: [
          'Mise en place d\'un vrai Service Desk SPOC avec numéro unique et portail self-service',
          'Création d\'un catalogue de services : 50 demandes standards (reset password, accès applications, etc.)',
          'Matrice de priorité spécifique : Impact (nombre de patients affectés) × Urgence (criticité médicale)',
          'SLA différenciés : Urgences/Réa = 15 min, Services critiques = 2h, Administratif = 24h',
          'OLA avec équipes spécialisées : réseau, applications médicales, postes de travail'
        ]
      },
      results: [
        '70% de réduction des appels grâce au self-service',
        'Temps de résolution moyen : critique 30 min, normal 4h',
        'Satisfaction du personnel médical de 2/5 à 4.5/5',
        '90% des demandes standards traitées en moins de 30 min'
      ],
      examQuestions: [
        {
          question: 'Reset de mot de passe pour un médecin : incident ou demande de service ?',
          answer: 'Demande de service - c\'est une demande standard du catalogue, pas une interruption non planifiée',
          piege: 'Même urgent, un reset password reste une demande de service'
        },
        {
          question: 'Quelle est la différence entre les SLA et OLA dans ce contexte ?',
          answer: 'SLA = engagement envers l\'hôpital (client), OLA = accords entre équipes IT internes',
          piege: 'Les deux sont importants mais ont des périmètres différents'
        },
        {
          question: 'Comment calculer la priorité d\'un scanner en panne aux urgences ?',
          answer: 'Impact (élevé - affecte les urgences) × Urgence (critique - vies en jeu) = Priorité maximale',
          piege: 'La priorité combine TOUJOURS impact ET urgence'
        }
      ],
      keyTakeaways: [
        'Le Service Desk est LE point de contact unique, même en environnement critique',
        'Un catalogue de services bien défini réduit drastiquement la charge',
        'Les demandes de service ≠ incidents, même quand c\'est urgent',
        'La priorisation doit être adaptée au contexte métier (ici médical)'
      ]
    },
    {
      id: 'startup-growth',
      title: 'Structuration IT d\'une startup en hypercroissance',
      company: 'RocketTech AI',
      sector: 'Tech/SaaS',
      icon: Rocket,
      color: 'bg-orange-500',
      context: 'Startup passée de 10 à 150 employés en 18 mois, levée de fonds de 50M€. L\'IT artisanal (« on se débrouille ») ne fonctionne plus : pannes fréquentes, pas de documentation, onboarding chaotique, données clients à risque.',
      challenge: 'Comment introduire les bonnes pratiques ITIL sans tuer l\'agilité et la culture startup ?',
      itilConcepts: ['Tous les principes directeurs', 'Pratiques essentielles', 'Valeur', 'Agilité', 'Culture'],
      solution: {
        title: 'ITIL « light » adapté au contexte startup',
        description: 'Implémentation pragmatique des pratiques essentielles sans bureaucratie',
        keyActions: [
          'Principe "Opter pour la simplicité" : processus minimaux mais efficaces, outils SaaS simples',
          'Focus sur la valeur : chaque pratique doit démontrer sa valeur business rapidement',
          'Service Desk simplifié : Slack + ticketing léger, mais SPOC respecté',
          'Gestion des changements agile : CAB hebdo de 30 min, changements standards pour les déploiements',
          'Documentation minimale mais cruciale : runbooks, contacts clés, architectures',
          'Amélioration continue via retrospectives bi-mensuelles'
        ]
      },
      results: [
        'Réduction de 80% des incidents liés à l\'onboarding',
        'Temps de déploiement réduit de 4h à 30 min grâce aux changements standards',
        'Conformité RGPD atteinte en 3 mois',
        'Culture startup préservée avec processes adaptés'
      ],
      examQuestions: [
        {
          question: 'Peut-on adapter ITIL au contexte startup ou faut-il l\'appliquer intégralement ?',
          answer: 'ITIL est un framework flexible - on l\'adapte au contexte en gardant les principes',
          piege: 'ITIL n\'est PAS prescriptif, c\'est un guide adaptable'
        },
        {
          question: 'Comment la valeur est-elle co-créée dans ce contexte ?',
          answer: 'Entre l\'IT et les équipes business qui définissent ensemble les priorités et solutions',
          piege: 'La valeur n\'est JAMAIS créée par l\'IT seul'
        },
        {
          question: 'Les 7 principes directeurs sont-ils tous applicables en startup ?',
          answer: 'OUI, tous sont pertinents mais leur application est adaptée (simplicité prioritaire)',
          piege: 'Les principes sont TOUJOURS tous applicables'
        }
      ],
      keyTakeaways: [
        'ITIL s\'adapte à tous les contextes, ce n\'est pas du "tout ou rien"',
        'En startup, privilégier la simplicité et la valeur immédiate',
        'Les pratiques peuvent être "light" tant que les principes sont respectés',
        'L\'amélioration continue permet d\'ajuster progressivement'
      ]
    }
  ]

  const toggleCase = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId)
  }

  const toggleSection = (caseId: string, section: string) => {
    const key = `${caseId}-${section}`
    setExpandedSection(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Études de Cas ITIL v4</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez comment les concepts ITIL s'appliquent dans des situations réelles. 
          Chaque cas inclut des questions types d'examen et les pièges à éviter.
        </p>
      </div>

      {/* Alerte */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-2">
          <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
          <p className="text-sm text-blue-800">
            <strong>Conseil :</strong> Ces études de cas illustrent l'application pratique des concepts ITIL. 
            À l'examen, on vous demandera d'identifier quelle pratique ou principe s'applique dans une situation donnée.
          </p>
        </div>
      </div>

      {/* Cases Studies */}
      <div className="space-y-6">
        {caseStudies.map((caseStudy) => {
          const isExpanded = expandedCase === caseStudy.id
          const sectionKey = (section: string) => `${caseStudy.id}-${section}`
          
          return (
            <div key={caseStudy.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Header du cas */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCase(caseStudy.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${caseStudy.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <caseStudy.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{caseStudy.title}</h3>
                      <p className="text-gray-600">{caseStudy.company} • {caseStudy.sector}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {caseStudy.itilConcepts.map((concept, idx) => (
                          <span key={idx} className="badge badge-primary text-xs">
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Contenu détaillé */}
              {isExpanded && (
                <div className="border-t border-gray-200">
                  {/* Contexte */}
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-3">Contexte</h4>
                    <p className="text-gray-700">{caseStudy.context}</p>
                    <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Défi :</strong> {caseStudy.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Solution ITIL */}
                  <div className="p-6">
                    <div 
                      className="flex items-center justify-between cursor-pointer mb-4"
                      onClick={() => toggleSection(caseStudy.id, 'solution')}
                    >
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-gray-600" />
                        {caseStudy.solution.title}
                      </h4>
                      {expandedSection[sectionKey('solution')] ? (
                        <ChevronUp className="h-4 w-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    
                    {expandedSection[sectionKey('solution')] && (
                      <div className="space-y-3 mb-6">
                        <p className="text-gray-700 mb-4">{caseStudy.solution.description}</p>
                        <div className="space-y-2">
                          {caseStudy.solution.keyActions.map((action, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Résultats */}
                  <div className="p-6 bg-green-50">
                    <div 
                      className="flex items-center justify-between cursor-pointer mb-4"
                      onClick={() => toggleSection(caseStudy.id, 'results')}
                    >
                      <h4 className="font-semibold text-green-900 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Résultats obtenus
                      </h4>
                      {expandedSection[sectionKey('results')] ? (
                        <ChevronUp className="h-4 w-4 text-green-700" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-green-700" />
                      )}
                    </div>
                    
                    {expandedSection[sectionKey('results')] && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex items-start">
                            <Target className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-800">{result}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Questions d'examen */}
                  <div className="p-6">
                    <div 
                      className="flex items-center justify-between cursor-pointer mb-4"
                      onClick={() => toggleSection(caseStudy.id, 'questions')}
                    >
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
                        Questions types d'examen
                      </h4>
                      {expandedSection[sectionKey('questions')] ? (
                        <ChevronUp className="h-4 w-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    
                    {expandedSection[sectionKey('questions')] && (
                      <div className="space-y-4">
                        {caseStudy.examQuestions.map((q, idx) => (
                          <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <p className="font-medium text-blue-900 mb-2">
                              Q{idx + 1}: {q.question}
                            </p>
                            <p className="text-blue-800 text-sm mb-2">
                              <strong>Réponse :</strong> {q.answer}
                            </p>
                            {q.piege && (
                              <p className="text-orange-700 text-sm bg-orange-50 rounded p-2 border border-orange-200">
                                <AlertTriangle className="inline h-4 w-4 mr-1" />
                                <strong>Piège :</strong> {q.piege}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Points clés */}
                  <div className="p-6 bg-primary-50 border-t border-primary-200">
                    <h4 className="font-semibold text-primary-900 mb-3 flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2" />
                      Points clés à retenir
                    </h4>
                    <div className="space-y-2">
                      {caseStudy.keyTakeaways.map((takeaway, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-primary-800">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Conseils finaux */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Comment utiliser ces études de cas pour l'examen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">À l'examen, on vous demandera :</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Quel principe directeur s'applique dans cette situation ?
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Quelle pratique ITIL est illustrée ici ?
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Quelle dimension a été négligée/appliquée ?
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Comment la valeur est-elle créée/mesurée ?
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Méthode pour répondre :</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <Target className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                Identifiez les mots-clés du scénario
              </li>
              <li className="flex items-start">
                <Target className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                Reliez-les aux concepts ITIL appropriés
              </li>
              <li className="flex items-start">
                <Target className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                Méfiez-vous des distracteurs et pièges
              </li>
              <li className="flex items-start">
                <Target className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                Choisissez la réponse la plus spécifique
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPage