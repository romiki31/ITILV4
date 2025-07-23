import React, { useState, useEffect } from 'react'
import { 
  Clock, 
  Target, 
  BookOpen, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  Calculator,
  Building,
  ShoppingCart,
  Cloud,
  Heart,
  Rocket,
  Lightbulb,
  Users,
  Settings,
  ChevronDown,
  ChevronUp,
  FileText,
  Filter,
  Search,
  Star,
  Calendar,
  BarChart3,
  Zap,
  Shield,
  Database,
  Monitor,
  Factory
} from 'lucide-react'
import { useAutoScroll } from '../hooks/useAutoScroll'

interface CaseStudy {
  id: string
  title: string
  company: string
  sector: string
  icon: React.FC<any>
  color: string
  difficulty: 'facile' | 'moyen' | 'difficile'
  duration: string
  context: string
  challenge: string
  itilConcepts: string[]
  timeline: {
    step: string
    time: string
    description: string
    status: 'completed' | 'current' | 'upcoming'
  }[]
  solution: {
    title: string
    description: string
    keyActions: string[]
    metrics: {
      label: string
      before: string
      after: string
      improvement: string
    }[]
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
  const [selectedCase, setSelectedCase] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [filterSector, setFilterSector] = useState<string>('all')
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { scrollToElement, scrollToTop } = useAutoScroll({ offset: 100, delay: 200 })

  useEffect(() => {
    scrollToTop()
  }, [])

  useEffect(() => {
    if (selectedCase) {
      scrollToElement(`case-${selectedCase}`)
    }
  }, [selectedCase, scrollToElement])

  const caseStudies: CaseStudy[] = [
    {
      id: 'bank-digital',
      title: 'Transformation digitale d\'une banque traditionnelle',
      company: 'BankCorp International',
      sector: 'Finance',
      icon: Building,
      color: 'bg-blue-500',
      difficulty: 'difficile',
      duration: '18 mois',
      context: 'BankCorp, une banque traditionnelle avec 150 ans d\'histoire, fait face à la concurrence des néo-banques. Avec 5000 employés et 2 millions de clients, elle doit moderniser ses services tout en maintenant la confiance et la sécurité.',
      challenge: 'Comment transformer les services bancaires traditionnels en services digitaux tout en assurant la continuité, la sécurité et la satisfaction client ?',
      itilConcepts: ['SVS', '4 Dimensions', 'Principes directeurs', 'Gestion des changements', 'Amélioration continue'],
      timeline: [
        { step: 'Audit existant', time: 'Mois 1-2', description: 'Évaluation complète des systèmes et processus', status: 'completed' },
        { step: 'Conception', time: 'Mois 3-6', description: 'Design des nouveaux services digitaux', status: 'completed' },
        { step: 'Pilote', time: 'Mois 7-12', description: 'Déploiement sur 10% des clients', status: 'completed' },
        { step: 'Déploiement', time: 'Mois 13-18', description: 'Généralisation progressive', status: 'current' }
      ],
      solution: {
        title: 'Application du SVS pour la transformation',
        description: 'Utilisation du Système de Valeur des Services pour orchestrer la transformation digitale',
        keyActions: [
          'Analyse des 4 dimensions : révision complète de l\'organisation, modernisation technologique, nouveaux partenariats fintech, refonte des processus',
          'Application du principe "Commencer là où on se trouve" : audit des systèmes existants, identification des éléments réutilisables',
          'Chaîne de valeur : Planifier (vision digitale) → Concevoir (nouvelle app mobile) → Obtenir/Construire (partenariat fintech) → Livrer (déploiement progressif)',
          'Amélioration continue intégrée : feedback loops avec les clients, métriques de satisfaction, ajustements itératifs'
        ],
        metrics: [
          { label: 'Adoption services digitaux', before: '25%', after: '65%', improvement: '+160%' },
          { label: 'Temps traitement demandes', before: '72h', after: '2h', improvement: '-97%' },
          { label: 'Satisfaction client', before: '3.2/5', after: '4.5/5', improvement: '+41%' },
          { label: 'Coût par transaction', before: '2.50€', after: '0.80€', improvement: '-68%' }
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
        }
      ],
      keyTakeaways: [
        'La transformation digitale nécessite une approche holistique (toutes les dimensions)',
        'Commencer par évaluer l\'existant évite les coûts et risques inutiles',
        'L\'amélioration continue doit être intégrée dès le début, pas ajoutée après',
        'Les métriques sont essentielles pour mesurer le succès de la transformation'
      ]
    },
    {
      id: 'ecommerce-incident',
      title: 'Gestion d\'un incident majeur Black Friday',
      company: 'MegaShop Online',
      sector: 'E-commerce',
      icon: ShoppingCart,
      color: 'bg-red-500',
      difficulty: 'moyen',
      duration: '2 heures critiques',
      context: 'MegaShop, leader du e-commerce avec 50M€ de CA annuel, subit une panne majeure le Black Friday à 10h du matin. Le site est inaccessible, les clients ne peuvent pas passer commande, et c\'est le jour le plus important de l\'année (30% du CA annuel).',
      challenge: 'Comment gérer efficacement cet incident critique tout en préparant la résolution du problème sous-jacent et en communiquant avec les parties prenantes ?',
      itilConcepts: ['Gestion des incidents', 'Gestion des problèmes', 'Gestion des changements d\'urgence', 'Service Desk', 'Communication'],
      timeline: [
        { step: 'Détection', time: '10h00', description: 'Alertes automatiques - site inaccessible', status: 'completed' },
        { step: 'Mobilisation', time: '10h05', description: 'Incident Manager désigné - équipes alertées', status: 'completed' },
        { step: 'Diagnostic', time: '10h15', description: 'Identification : saturation base de données', status: 'completed' },
        { step: 'Résolution', time: '12h00', description: 'Service restauré - bascule sur serveur secours', status: 'completed' }
      ],
      solution: {
        title: 'Activation du processus de gestion d\'incident majeur',
        description: 'Mobilisation immédiate selon les pratiques ITIL avec focus sur la restauration rapide',
        keyActions: [
          'Service Desk comme SPOC : centralisation de toutes les communications clients, 500 appels/heure gérés',
          'Incident Manager désigné : coordination de toutes les équipes techniques, communication toutes les 30 minutes',
          'Diagnostic rapide : serveur de base de données saturé, solution temporaire = bascule sur serveur de secours',
          'Changement d\'urgence approuvé par l\'ECAB en 15 minutes pour augmenter la capacité',
          'Enregistrement comme Problème pour analyse root cause ultérieure'
        ],
        metrics: [
          { label: 'Temps de résolution', before: '8h habituel', after: '2h réel', improvement: '-75%' },
          { label: 'Perte financière', before: '15M€ potentiel', after: '2M€ réel', improvement: '-87%' },
          { label: 'Appels clients gérés', before: '0 structure', after: '500/h', improvement: '+∞' },
          { label: 'Communication parties prenantes', before: 'Ad-hoc', after: 'Toutes les 30min', improvement: 'Structurée' }
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
        }
      ],
      keyTakeaways: [
        'La priorité en incident majeur est TOUJOURS la restauration du service',
        'Le Service Desk reste le point de contact unique même en crise',
        'Les changements d\'urgence suivent un processus accéléré mais contrôlé',
        'Incident ≠ Problème : on peut fermer l\'incident sans résoudre le problème',
        'La communication régulière évite la panique et maintient la confiance'
      ]
    },
    {
      id: 'hospital-support',
      title: 'Refonte du support IT d\'un hôpital',
      company: 'Centre Hospitalier Régional',
      sector: 'Santé',
      icon: Heart,
      color: 'bg-purple-500',
      difficulty: 'moyen',
      duration: '12 mois',
      context: 'Hôpital de 1000 lits, 3000 employés, équipements médicaux critiques connectés. Le support IT actuel est débordé : 500 tickets/jour, temps de résolution moyen de 48h, frustration du personnel médical qui perd du temps précieux.',
      challenge: 'Comment restructurer le support IT pour répondre efficacement aux besoins critiques d\'un environnement hospitalier ?',
      itilConcepts: ['Service Desk', 'Gestion des demandes de service', 'Catalogue de services', 'SLA/OLA', 'Priorisation'],
      timeline: [
        { step: 'Analyse besoins', time: 'Mois 1-2', description: 'Audit du support existant et besoins métier', status: 'completed' },
        { step: 'Design nouveau modèle', time: 'Mois 3-4', description: 'Conception Service Desk et catalogue', status: 'completed' },
        { step: 'Formation équipes', time: 'Mois 5-6', description: 'Formation personnels et mise en place outils', status: 'completed' },
        { step: 'Déploiement', time: 'Mois 7-12', description: 'Mise en service progressive par service', status: 'current' }
      ],
      solution: {
        title: 'Transformation du Service Desk en véritable SPOC',
        description: 'Restructuration complète basée sur les pratiques ITIL avec focus sur la criticité médicale',
        keyActions: [
          'Mise en place d\'un vrai Service Desk SPOC avec numéro unique et portail self-service',
          'Création d\'un catalogue de services : 50 demandes standards (reset password, accès applications, etc.)',
          'Matrice de priorité spécifique : Impact (nombre de patients affectés) × Urgence (criticité médicale)',
          'SLA différenciés : Urgences/Réa = 15 min, Services critiques = 2h, Administratif = 24h',
          'OLA avec équipes spécialisées : réseau, applications médicales, postes de travail'
        ],
        metrics: [
          { label: 'Temps résolution critique', before: '48h', after: '30min', improvement: '-99%' },
          { label: 'Tickets via self-service', before: '0%', after: '70%', improvement: '+70pp' },
          { label: 'Satisfaction personnel médical', before: '2/5', after: '4.5/5', improvement: '+125%' },
          { label: 'Résolution premier contact', before: '20%', after: '85%', improvement: '+325%' }
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
          question: 'Comment calculer la priorité d\'un scanner en panne aux urgences ?',
          answer: 'Impact (élevé - affecte les urgences) × Urgence (critique - vies en jeu) = Priorité maximale',
          piege: 'La priorité combine TOUJOURS impact ET urgence'
        }
      ],
      keyTakeaways: [
        'Le Service Desk est LE point de contact unique, même en environnement critique',
        'Un catalogue de services bien défini réduit drastiquement la charge',
        'Les demandes de service ≠ incidents, même quand c\'est urgent',
        'La priorisation doit être adaptée au contexte métier (ici médical)',
        'Le self-service libère du temps pour les cas complexes'
      ]
    },
    {
      id: 'saas-scaling',
      title: 'Mise à l\'échelle d\'une plateforme SaaS',
      company: 'CloudTech Solutions',
      sector: 'SaaS/Tech',
      icon: Cloud,
      color: 'bg-indigo-500',
      difficulty: 'difficile',
      duration: '24 mois',
      context: 'Startup SaaS de 150 employés, croissance explosive : 500% d\'utilisateurs en 18 mois (de 10K à 60K clients). Infrastructure qui craque, incidents quotidiens, équipe dev/ops débordée, churn qui augmente à cause des problèmes de performance.',
      challenge: 'Comment industrialiser les opérations IT et mettre en place les pratiques ITIL pour soutenir une croissance rapide tout en maintenant la qualité de service ?',
      itilConcepts: ['Amélioration continue', 'Gestion des changements', 'Surveillance', 'Gestion des incidents', 'DevOps integration'],
      timeline: [
        { step: 'Stabilisation urgente', time: 'Mois 1-3', description: 'Arrêt de l\'hémorragie - incidents critiques', status: 'completed' },
        { step: 'Mise en place monitoring', time: 'Mois 4-8', description: 'Observabilité complète de la plateforme', status: 'completed' },
        { step: 'Industrialisation CI/CD', time: 'Mois 9-16', description: 'Pipeline automatisés et gestion changements', status: 'current' },
        { step: 'Optimisation continue', time: 'Mois 17-24', description: 'Culture d\'amélioration continue', status: 'upcoming' }
      ],
      solution: {
        title: 'Implémentation progressive des pratiques ITIL dans un contexte agile',
        description: 'Adaptation des pratiques ITIL pour un environnement DevOps avec déploiements fréquents',
        keyActions: [
          'Surveillance et gestion des événements : monitoring 360°, alerting intelligent, dashboards temps réel',
          'Gestion des changements adaptée : changements standards pour les déploiements, pipeline automatisé avec validations',
          'Amélioration continue intégrée : post-mortems systématiques, métriques DORA, retrospectives d\'équipe',
          'Service Desk internalisé : support technique L1/L2 intégré au produit, feedback client direct aux équipes dev'
        ],
        metrics: [
          { label: 'MTTR (Mean Time To Recovery)', before: '4h', after: '15min', improvement: '-94%' },
          { label: 'Taux de déploiements réussis', before: '70%', after: '99.5%', improvement: '+42%' },
          { label: 'Incidents critiques/mois', before: '25', after: '2', improvement: '-92%' },
          { label: 'Time to market nouvelles features', before: '6 semaines', after: '1 semaine', improvement: '-83%' }
        ]
      },
      results: [
        'Réduction de 94% du MTTR grâce au monitoring proactif',
        'Taux de réussite des déploiements passé de 70% à 99.5%',
        'Churn client réduit de 15% à 3% grâce à la stabilité',
        'Vélocité équipe développement doublée'
      ],
      examQuestions: [
        {
          question: 'Dans un contexte DevOps, comment adapter la gestion des changements ITIL ?',
          answer: 'Changements standards pour les déploiements automatisés, mais gardée pour les changements d\'infrastructure',
          piege: 'ITIL s\'adapte aux contextes agiles, elle ne les bloque pas'
        },
        {
          question: 'Quelle pratique ITIL est la plus critique pour une plateforme SaaS ?',
          answer: 'Surveillance et gestion des événements - pour détecter les problèmes avant les clients',
          piege: 'En SaaS, la proactivité est vitale car les clients peuvent partir facilement'
        }
      ],
      keyTakeaways: [
        'ITIL s\'adapte aux contextes modernes (DevOps, Agile, Cloud)',
        'La surveillance proactive est vitale en environnement SaaS',
        'L\'amélioration continue doit être culturelle, pas juste processuelle',
        'Les métriques DORA complètent parfaitement les KPIs ITIL traditionnels',
        'La collaboration dev/ops est renforcée par les pratiques ITIL bien implémentées'
      ]
    },
    {
      id: 'manufacturing-iot',
      title: 'Digitalisation d\'une usine de production',
      company: 'ManufactTech Industries',
      sector: 'Industrie',
      icon: Factory,
      color: 'bg-orange-500',
      difficulty: 'difficile',
      duration: '30 mois',
      context: 'Groupe industriel de 10 000 employés, 15 usines en Europe. Pression concurrentielle forte, nécessité d\'optimiser la production via l\'IoT et l\'IA. Environnement IT/OT complexe, contraintes de sécurité et de disponibilité extrêmes (arrêt = 50K€/heure).',
      challenge: 'Comment intégrer les technologies digitales (IoT, IA) dans un environnement industriel critique tout en maintenant la production et la sécurité ?',
      itilConcepts: ['Gestion des actifs', 'Sécurité information', 'Gestion des changements', 'Gestion des déploiements', 'Architecture de service'],
      timeline: [
        { step: 'Pilote Usine 1', time: 'Mois 1-8', description: 'Capteurs IoT et analytics sur 1 ligne', status: 'completed' },
        { step: 'Déploiement Usine 1', time: 'Mois 9-14', description: 'Généralisation à toute l\'usine pilote', status: 'completed' },
        { step: 'Réplication 5 usines', time: 'Mois 15-24', description: 'Déploiement sur 5 sites similaires', status: 'current' },
        { step: 'Finalisation groupe', time: 'Mois 25-30', description: '15 usines connectées et optimisées', status: 'upcoming' }
      ],
      solution: {
        title: 'Transformation digitale industrielle avec approche ITIL',
        description: 'Déploiement sécurisé et contrôlé de l\'IoT industriel avec maintien de la disponibilité',
        keyActions: [
          'Gestion des actifs IT/OT : inventaire complet, cartographie des dépendances, lifecycle management',
          'Sécurité renforcée : segmentation réseau, authentification, monitoring sécurité 24/7',
          'Gestion des changements stricte : fenêtres de maintenance, rollback procedures, tests exhaustifs',
          'Déploiement par phases : pilote → validation → réplication contrôlée',
          'Formation opérateurs : nouvelles compétences, procédures hybrides IT/OT'
        ],
        metrics: [
          { label: 'OEE (Overall Equipment Effectiveness)', before: '65%', after: '85%', improvement: '+31%' },
          { label: 'Temps d\'arrêt non planifié', before: '120h/an', after: '25h/an', improvement: '-79%' },
          { label: 'Coûts de maintenance', before: '2.5M€/an', after: '1.8M€/an', improvement: '-28%' },
          { label: 'Incidents sécurité IT/OT', before: '12/an', after: '1/an', improvement: '-92%' }
        ]
      },
      results: [
        'OEE (Overall Equipment Effectiveness) amélioré de 65% à 85%',
        'Réduction de 79% des temps d\'arrêt non planifiés',
        'Économies de 700K€/an sur la maintenance prédictive',
        'Zero incident de sécurité OT depuis 18 mois'
      ],
      examQuestions: [
        {
          question: 'Pourquoi la gestion des actifs est-elle critique en environnement industriel IoT ?',
          answer: 'Car chaque capteur/actuateur peut impacter la production, il faut tracer leur lifecycle complet',
          piege: 'En industrie, les actifs incluent aussi les équipements de production, pas que l\'IT'
        },
        {
          question: 'Comment appliquer la gestion des changements sur une ligne de production ?',
          answer: 'Fenêtres de maintenance planifiées, tests sur environnement identique, procédures de rollback',
          piege: 'En production, on ne peut pas se permettre d\'essayer, il faut être sûr à 100%'
        }
      ],
      keyTakeaways: [
        'La convergence IT/OT nécessite une approche ITIL adaptée',
        'La gestion des actifs devient critique avec l\'IoT industriel',
        'La sécurité doit être pensée dès la conception (Security by Design)',
        'Les changements en production nécessitent une rigueur absolue',
        'La formation des équipes opérationnelles est clé du succès'
      ]
    }
  ]

  const sectors = ['all', ...Array.from(new Set(caseStudies.map(c => c.sector)))]
  const difficulties = ['all', 'facile', 'moyen', 'difficile']

  const filteredCases = caseStudies.filter(caseStudy => {
    const matchesSector = filterSector === 'all' || caseStudy.sector === filterSector
    const matchesDifficulty = filterDifficulty === 'all' || caseStudy.difficulty === filterDifficulty
    const matchesSearch = searchTerm === '' || 
      caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseStudy.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseStudy.itilConcepts.some(concept => concept.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesSector && matchesDifficulty && matchesSearch
  })

  const toggleSection = (caseId: string, section: string) => {
    const key = `${caseId}-${section}`
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'moyen': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'difficile': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const sectionKey = (caseId: string, section: string) => `${caseId}-${section}`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Cas Pratiques ITIL 4
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Découvrez comment les concepts ITIL 4 s'appliquent dans des situations réelles d'entreprise. 
          Chaque cas d'étude est analysé en détail avec questions d'examen et points clés à retenir.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par titre, entreprise ou concept ITIL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Sector Filter */}
          <div>
            <select
              value={filterSector}
              onChange={(e) => setFilterSector(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>
                  {sector === 'all' ? 'Tous les secteurs' : sector}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'Toutes difficultés' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {filteredCases.length} cas pratique{filteredCases.length > 1 ? 's' : ''} trouvé{filteredCases.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-8">
        {filteredCases.map((caseStudy) => (
          <div
            key={caseStudy.id}
            id={`case-${caseStudy.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Case Header */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`${caseStudy.color} p-3 rounded-xl`}>
                    <caseStudy.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {caseStudy.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(caseStudy.difficulty)}`}>
                        {caseStudy.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Building size={16} />
                        {caseStudy.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target size={16} />
                        {caseStudy.sector}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {caseStudy.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {caseStudy.context}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                  className="ml-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                >
                  {selectedCase === caseStudy.id ? 'Fermer' : 'Analyser'}
                </button>
              </div>

              {/* ITIL Concepts Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.itilConcepts.map((concept, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 rounded-full text-sm font-medium"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Details - Expandable */}
            {selectedCase === caseStudy.id && (
              <div className="border-t border-gray-200 dark:border-gray-700">
                {/* Challenge */}
                <div className="p-6 bg-orange-50 dark:bg-orange-900/10 border-b border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                    Défi à résoudre
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 font-medium">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Timeline */}
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                    Timeline du projet
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.timeline.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 mr-4 ${
                          step.status === 'completed' ? 'bg-green-500' :
                          step.status === 'current' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">{step.step}</h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400">({step.time})</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div className="p-6">
                  <button
                    onClick={() => toggleSection(caseStudy.id, 'solution')}
                    className="w-full flex items-center justify-between text-left mb-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      Solution ITIL mise en œuvre
                    </h3>
                    {expandedSections[sectionKey(caseStudy.id, 'solution')] ? 
                      <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    }
                  </button>
                  
                  {expandedSections[sectionKey(caseStudy.id, 'solution')] && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.solution.description}</p>
                        
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Actions clés mises en place :</h4>
                        <div className="space-y-3">
                          {caseStudy.solution.keyActions.map((action, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 dark:text-gray-300">{action}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                          <BarChart3 className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                          Métriques et résultats
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {caseStudy.solution.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">{metric.label}</h5>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-red-600 dark:text-red-400">Avant: {metric.before}</span>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                <span className="text-green-600 dark:text-green-400">Après: {metric.after}</span>
                              </div>
                              <div className="mt-2 text-center">
                                <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-full text-xs font-medium">
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                  {metric.improvement}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Exam Questions */}
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50">
                  <button
                    onClick={() => toggleSection(caseStudy.id, 'questions')}
                    className="w-full flex items-center justify-between text-left mb-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      <Brain className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      Questions d'examen sur ce cas
                    </h3>
                    {expandedSections[sectionKey(caseStudy.id, 'questions')] ? 
                      <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    }
                  </button>

                  {expandedSections[sectionKey(caseStudy.id, 'questions')] && (
                    <div className="space-y-4">
                      {caseStudy.examQuestions.map((qa, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                          <div className="mb-3">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Question {idx + 1} :</h4>
                            <p className="text-gray-700 dark:text-gray-300">{qa.question}</p>
                          </div>
                          <div className="mb-3 p-3 bg-green-50 dark:bg-green-900/10 rounded border-l-4 border-green-400">
                            <p className="text-sm text-green-800 dark:text-green-200">
                              <strong>Réponse :</strong> {qa.answer}
                            </p>
                          </div>
                          {qa.piege && (
                            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded border-l-4 border-red-400">
                              <p className="text-sm text-red-800 dark:text-red-200">
                                <strong>⚠️ Piège fréquent :</strong> {qa.piege}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key Takeaways */}
                <div className="p-6 bg-purple-50 dark:bg-purple-900/10 border-t border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                    Points clés à retenir
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-purple-800 dark:text-purple-200">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Card */}
      <div className="mt-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-xl p-8 border border-primary-200 dark:border-primary-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Conseils pour l'analyse de cas pratiques à l'examen
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Identifiez les concepts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Repérez quelles pratiques ITIL sont applicables au contexte donné
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Focalisez sur l'objectif</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprenez quel résultat business la solution ITIL vise à atteindre
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Évitez les pièges</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Attention aux distinctions subtiles : incident vs problème, demande vs incident
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPage