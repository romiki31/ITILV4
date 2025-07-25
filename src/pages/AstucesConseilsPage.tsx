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
  Lightbulb,
  FileText,
  ChevronDown,
  Users,
  Zap,
  Shield,
  Navigation,
  ExternalLink,
  PlayCircle,
  BarChart3,
  HelpCircle
} from 'lucide-react'
import { useAutoScroll } from '../hooks/useAutoScroll'
import { Link } from 'react-router-dom'


const AstucesConseilsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null)
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)
  const { scrollToTop, scrollToElement } = useAutoScroll({ delay: 150, offset: 100 })

  useEffect(() => {
    scrollToTop()
  }, [])

  // Navigation interne réorganisée par ordre d'importance
  const sections = [
    { id: 'concepts-difficiles', title: 'Concepts difficiles', icon: Brain, description: 'Maîtriser les distinctions clés', color: 'indigo' },
    { id: 'pieges-erreurs', title: 'Pièges fréquents', icon: AlertTriangle, description: 'Éviter les erreurs classiques', color: 'red' },
    { id: 'roles-responsabilites', title: 'Rôles & Pouvoirs', icon: Users, description: 'Qui fait quoi dans ITIL', color: 'purple' },
    { id: 'chaine-valeur', title: 'Chaîne de Valeur', icon: ArrowRight, description: 'CVS flexible et dynamique', color: 'emerald' },
    { id: 'preparation', title: 'Préparation examen', icon: Award, description: 'Stratégies et format officiel', color: 'blue' },
    { id: 'questions-simulations', title: 'Questions types', icon: HelpCircle, description: 'Simulations d\'examen', color: 'amber' },
    { id: 'ressources-outils', title: 'Ressources', icon: BookOpen, description: 'Outils de préparation', color: 'gray' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    scrollToElement(sectionId)
  }

  // Concepts théoriques difficiles avec scénarios pédagogiques
  const conceptsDifficiles = [
    {
      id: 'incident-probleme-demande',
      title: 'Incident vs Problème vs Demande de service',
      category: 'distinctions-cles',
      difficulty: 'hard',
      icon: AlertTriangle,
      description: 'La distinction la plus piégeuse à l\'examen - savoir classifier correctement',
      pourquoiDifficile: 'Situations ambiguës fréquentes, urgence qui peut tromper, causes vs symptômes',
      scenarios: [
        {
          id: 's1',
          situation: '"Mon mot de passe ne fonctionne plus depuis la mise à jour de ce matin"',
          contexte: 'Un seul utilisateur affecté, pas d\'autres signalements',
          question: 'Incident, Problème ou Demande de service ?',
          reponseCorrecte: 'Demande de service',
          analyse: 'Reset de mot de passe = demande standard du catalogue, même si lié à une mise à jour',
          piege: 'L\'urgence ou le lien avec la mise à jour ne change pas la classification',
          autresReponses: [
            { option: 'Incident', pourquoiFaux: 'Un seul user affecté, pas d\'interruption de service généralisée' },
            { option: 'Problème', pourquoiFaux: 'On ne recherche pas une cause, juste un reset standard' }
          ]
        },
        {
          id: 's2',
          situation: '"Depuis 2h, 50% des utilisateurs ne peuvent plus se connecter à l\'application CRM"',
          contexte: 'Problème généralisé, impact business majeur, cause inconnue',
          question: 'Incident, Problème ou les deux ?',
          reponseCorrecte: 'Incident (immédiat) + Problème (parallèle)',
          analyse: 'INCIDENT pour restaurer le service rapidement. PROBLÈME pour éviter la récurrence.',
          piege: 'Il faut traiter les deux simultanément, pas l\'un après l\'autre',
          autresReponses: [
            { option: 'Seulement incident', pourquoiFaux: 'Sans problème, ça va se reproduire' },
            { option: 'Seulement problème', pourquoiFaux: 'Les users attendent pas l\'analyse root cause' }
          ]
        },
        {
          id: 's3',
          situation: '"Il faut installer Office sur le poste du nouveau stagiaire"',
          contexte: 'Demande RH standard, logiciel disponible, procédure définie',
          question: 'Classification et traitement ?',
          reponseCorrecte: 'Demande de service standard',
          analyse: 'Installation logiciel = demande catalogue avec workflow d\'approbation automatique',
          piege: 'Même si c\'est "urgent" pour le manager, ça reste une demande standard',
          autresReponses: [
            { option: 'Incident', pourquoiFaux: 'Aucune interruption de service existant' },
            { option: 'Changement', pourquoiFaux: 'Installation standard ≠ changement d\'infrastructure' }
          ]
        }
      ],
      exercicePratique: {
        titre: 'Quiz rapide : 5 situations à classifier',
        situations: [
          { description: 'Serveur mail en panne - 200 users affectés', reponse: 'Incident' },
          { description: 'Demande création compte utilisateur', reponse: 'Demande de service' },
          { description: '3ème panne réseau cette semaine - même cause probable', reponse: 'Incident + Problème' },
          { description: 'Reset password directeur (URGENT)', reponse: 'Demande de service' },
          { description: 'Analyse pourquoi les sauvegardes échouent', reponse: 'Problème' }
        ]
      },
      reglesMemorisation: [
        'INCIDENT = "C\'est cassé maintenant" → Restaurer vite',
        'PROBLÈME = "Pourquoi ça casse ?" → Analyser cause',
        'DEMANDE = "Je veux quelque chose" → Fournir selon catalogue',
        'URGENCE ne change JAMAIS la classification de base'
      ]
    },
    {
      id: 'utilite-garantie',
      title: 'Utilité vs Garantie',
      category: 'concepts-fondamentaux',
      difficulty: 'medium',
      icon: Target,
      description: 'Fit for purpose vs Fit for use - les deux faces de la valeur service',
      pourquoiDifficile: 'Concepts abstraits, interactions complexes, exemples pas toujours évidents',
      scenarios: [
        {
          id: 'u1',
          situation: 'Service de sauvegarde automatique des données',
          contexte: 'Fonctionnalité : sauvegarde quotidienne à 2h du matin',
          question: 'Quels sont l\'utilité et la garantie ?',
          reponseCorrecte: 'Utilité: Protéger les données | Garantie: Disponible 99.9%, sauvegarde en 2h max',
          analyse: 'UTILITÉ = ce que ça fait (protection). GARANTIE = comment ça le fait (perfs, dispo)',
          piege: 'Les deux sont indispensables - l\'un sans l\'autre = pas de valeur',
          exemplesConcrets: [
            'Utilité seule: Sauvegarde qui marche parfois → Pas de valeur (pas fiable)',
            'Garantie seule: Service ultra-rapide qui ne sauvegarde rien → Pas de valeur (inutile)',
            'Les deux: Service qui sauvegarde ET qu\'on peut compter dessus → VALEUR'
          ]
        },
        {
          id: 'u2',
          situation: 'Application mobile de commande restaurant',
          contexte: 'App qui permet de commander et payer en ligne',
          question: 'Analyser utilité/garantie et identifier les manques',
          scenarios: [
            {
              cas: 'App avec toutes les fonctions mais plante souvent',
              analyse: 'Utilité OK, Garantie défaillante → Clients partent vers la concurrence',
              solution: 'Améliorer la stabilité et performances'
            },
            {
              cas: 'App ultra-stable mais on ne peut pas personnaliser sa commande',
              analyse: 'Garantie OK, Utilité limitée → Frustration utilisateur',
              solution: 'Ajouter fonctionnalités de personnalisation'
            },
            {
              cas: 'App complète et stable, temps de livraison respecté',
              analyse: 'Utilité ET Garantie optimales → Maximum de valeur pour le client',
              result: 'Service qui génère de la satisfaction et de la fidélité'
            }
          ]
        }
      ],
      exercicePratique: {
        titre: 'Décomposer utilité/garantie',
        services: [
          {
            service: 'WiFi bureaux',
            utilite: 'Connexion internet mobile',
            garantie: 'Couverture 100%, débit min 50Mbps, dispo 99%'
          },
          {
            service: 'Support technique',
            utilite: 'Résoudre problèmes IT',
            garantie: 'Réponse <2h, résolution 95% en 24h, disponible 8h-18h'
          }
        ]
      },
      reglesMemorisation: [
        'UTILITÉ = "Qu\'est-ce que ça fait ?" (fonctionnalité)',
        'GARANTIE = "Comment bien ça le fait ?" (qualité)',
        'Les deux indispensables pour créer de la VALEUR',
        'Fit for PURPOSE (utilité) + Fit for USE (garantie) = Service complet'
      ]
    },
    {
      id: 'sla-ola-uc',
      title: 'SLA vs OLA vs Contrat fournisseur',
      category: 'accords-service',
      difficulty: 'hard',
      icon: FileText,
      description: 'Les 3 types d\'accords - qui engage qui et pour quoi',
      pourquoiDifficile: 'Interactions complexes, responsabilités croisées, hiérarchie pas évidente',
      scenarios: [
        {
          id: 'sla1',
          situation: 'Panne du service email - SLA client = résolution en 4h',
          contexte: 'Problème chez le fournisseur cloud externe, OLA équipe réseau = 2h',
          question: 'Qui est responsable si le SLA n\'est pas tenu ?',
          analyse: 'L\'organisation IT reste responsable envers le CLIENT même si la cause est externe',
          consequence: 'Pénalités SLA + négociation avec fournisseur cloud sur base du contrat',
          piege: 'On ne peut pas "reporter" la faute sur le fournisseur externe vis-à-vis du client'
        }
      ],
      chaineDependances: {
        title: 'Comment ça s\'articule',
        exemple: 'Service de messagerie',
        niveaux: [
          {
            accord: 'SLA',
            entre: 'IT ↔ Client Business',
            engagement: 'Email disponible 99.5%, résolution pannes <4h',
            responsable: 'Service Manager IT'
          },
          {
            accord: 'OLA',
            entre: 'Service Manager ↔ Équipe réseau interne',
            engagement: 'Résolution problèmes réseau <2h, monitoring 24/7',
            responsable: 'Manager équipe réseau'
          },
          {
            accord: 'Contrat fournisseur',
            entre: 'Organisation ↔ Fournisseur cloud',
            engagement: 'Uptime 99.9%, support 24/7, résolution critique <1h',
            responsable: 'Procurement/Purchasing'
          }
        ]
      },
      exercicePratique: {
        titre: 'Définir les bons accords',
        scenario: 'Mise en place service de vidéoconférence',
        etapes: [
          'SLA avec utilisateurs : disponibilité, qualité vidéo, support',
          'OLA avec équipe réseau : bande passante, priorité trafic',
          'Contrat avec éditeur logiciel : licences, mises à jour, support'
        ]
      },
      reglesMemorisation: [
        'SLA = EXTERNE (avec clients/users)',
        'OLA = INTERNE (entre équipes IT)',
        'UC/Contrat = FOURNISSEUR (avec externes)',
        'SLA dépend des OLA qui dépendent des contrats = cascade'
      ]
    }
  ]

  // Note: expandedConcept déjà déclaré plus haut

  const toggleConcept = (conceptId: string) => {
    setExpandedConcept(expandedConcept === conceptId ? null : conceptId)
    if (conceptId !== expandedConcept) {
      setTimeout(() => scrollToElement(`concept-${conceptId}`), 100)
    }
  }

  const toggleScenario = (scenarioId: string) => {
    setSelectedScenario(selectedScenario === scenarioId ? null : scenarioId)
  }

  // Design system cohérent
  const designSystem = {
    colors: {
      primary: 'bg-indigo-50 dark:bg-indigo-900/15 border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-100',
      success: 'bg-emerald-50 dark:bg-emerald-900/15 border-emerald-200 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100',
      warning: 'bg-amber-50 dark:bg-amber-900/15 border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-100',
      danger: 'bg-red-50 dark:bg-red-900/15 border-red-200 dark:border-red-700 text-red-900 dark:text-red-100'
    },
    gradients: {
      primary: 'bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-indigo-900/10 dark:via-blue-900/10 dark:to-cyan-900/10',
      success: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/10 dark:via-green-900/10 dark:to-teal-900/10',
      warning: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10',
      danger: 'bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-900/10 dark:via-rose-900/10 dark:to-pink-900/10'
    },
    text: {
      primary: 'text-gray-800 dark:text-gray-200',
      secondary: 'text-gray-700 dark:text-gray-300',
      muted: 'text-gray-600 dark:text-gray-400'
    },
    spacing: {
      section: 'mb-8',
      subsection: 'mb-6',
      element: 'mb-4'
    }
  }

  // Données des conseils d'examen
  const formatExamen = {
    duree: "60 minutes",
    questions: "40 questions à choix multiple",
    scoreMin: "26/40 (65%)",
    langue: "Français ou Anglais",
    format: "Livre fermé - aucune documentation",
    type: "Une seule réponse correcte par question"
  }

  const repartitionQuestions = [
    { domaine: "Concepts clés et définitions", nombre: 7, pourcentage: 18, conseil: "Mémoriser les définitions officielles" },
    { domaine: "Les 7 principes directeurs", nombre: 8, pourcentage: 20, conseil: "Comprendre l'application pratique" },
    { domaine: "Les 4 dimensions", nombre: 4, pourcentage: 10, conseil: "Savoir les identifier dans un contexte" },
    { domaine: "Système de Valeur (SVS)", nombre: 6, pourcentage: 15, conseil: "Focus sur les interactions" },
    { domaine: "Chaîne de valeur (CVS)", nombre: 6, pourcentage: 15, conseil: "Comprendre la flexibilité du modèle" },
    { domaine: "15 pratiques ITIL", nombre: 9, pourcentage: 22, conseil: "Objectif et distinctions clés" }
  ]

  // Stratégies d'examen unifiées (fusion des doublons)
  const strategiesExamen = [
    {
      icon: Target,
      titre: "Lecture Stratégique",
      color: 'primary',
      techniques: [
        "Lisez chaque question DEUX fois avant de répondre",
        "Repérez les mots-pièges : TOUJOURS, JAMAIS, SAUF, TOUS, AUCUN",
        "Attention aux négations : 'Lequel N'EST PAS...', 'SAUF'"
      ]
    },
    {
      icon: Brain,
      titre: "Méthode d'Élimination",
      color: 'success',
      techniques: [
        "Éliminez d'abord les réponses évidemment fausses",
        "Entre 2 réponses correctes, choisissez la PLUS précise",
        "Méfiez-vous des réponses trop détaillées (souvent fausses)"
      ]
    },
    {
      icon: Clock,
      titre: "Maîtrise du Temps",
      color: 'warning',
      techniques: [
        "90 secondes maximum par question (40 questions = 60 minutes)",
        "Marquez les questions difficiles, passez à la suivante",
        "Réservez 8-10 minutes pour la révision finale"
      ]
    },
    {
      icon: CheckCircle,
      titre: "Validation Finale",
      color: 'primary',
      techniques: [
        "Vérifiez que toutes les questions ont une réponse",
        "Relisez les questions marquées avec du temps restant",
        "Faites confiance à votre première intuition (ne changez que si sûr)"
      ]
    }
  ]

  // Pièges organisés par thèmes logiques (sans doublons)
  const piegesParThemes = [
    {
      theme: "Distinctions Conceptuelles Critiques",
      icon: AlertTriangle,
      color: 'danger',
      description: "Les confusions les plus fréquentes qui coûtent des points",
      pieges: [
        {
          concept: "Incident vs Problème vs Demande",
          piege: "Classifier selon l'urgence plutôt que la nature",
          realite: "Incident = interruption à résoudre, Problème = cause à analyser, Demande = service à fournir",
          astuce: "Urgence ≠ Classification ! Un reset de mot de passe URGENT reste une demande"
        },
        {
          concept: "Output vs Outcome",
          piege: "Confondre ce qui est produit avec le résultat obtenu",
          realite: "Output = livrable concret, Outcome = valeur/bénéfice pour le client",
          astuce: "Un rapport de 100 pages (output) ≠ une décision éclairée (outcome)"
        },
        {
          concept: "Utilité vs Garantie",
          piege: "Penser qu'un seul aspect suffit pour créer de la valeur",
          realite: "Utilité = fonctionnalité (fit for purpose), Garantie = qualité (fit for use)",
          astuce: "Les DEUX sont obligatoires : service qui marche parfois = 0 valeur"
        }
      ]
    },
    {
      theme: "Mots-Pièges et Absolutismes",
      icon: Shield,
      color: 'warning',
      description: "ITIL 4 est flexible ! Méfiez-vous des mots absolus",
      pieges: [
        {
          concept: "TOUJOURS / JAMAIS / TOUS / AUCUN",
          piege: "Prendre ces mots au pied de la lettre",
          realite: "ITIL 4 prône l'adaptation au contexte, pas l'application aveugle",
          astuce: "Si vous voyez ces mots, c'est souvent un piège ! Pensez aux exceptions"
        },
        {
          concept: "Processus rigides (comme ITIL v3)",
          piege: "Appliquer ITIL 4 comme ITIL v3 avec des étapes fixées",
          realite: "ITIL 4 = pratiques flexibles, adaptées au contexte organisationnel",
          astuce: "CVS = activités combinables librement, pas un processus séquentiel"
        }
      ]
    }
  ]

  // Données séparées pour Rôles et Responsabilités
  const rolesResponsabilites = [
    {
      concept: "CAB vs Autorité de changement",
      description: "La distinction fondamentale entre conseil et autorisation",
      piege: "Croire que le CAB autorise les changements",
      realite: "CAB = CONSEIL seulement. L'Autorité de changement AUTORISE",
      astuce: "CAB = Change Advisory Board = il conseille, il n'ordonne pas",
      exemple: "Le CAB évalue les risques d'un changement, mais c'est le Change Manager ou sponsor qui décide"
    },
    {
      concept: "Service Desk vs Support technique",
      description: "Point de contact unique ≠ Résolution technique",
      piege: "Penser que le service desk résout tout techniquement",
      realite: "Service Desk = point de contact. Support = résolution technique (niveau 2+)",
      astuce: "SPOC (Single Point of Contact) ≠ Single Point of Resolution",
      exemple: "Le Service Desk enregistre un incident réseau, mais l'équipe infrastructure le résout"
    },
    {
      concept: "Product Owner vs Service Owner",
      description: "Vision produit vs Responsabilité service end-to-end",
      piege: "Confondre la responsabilité produit avec la gestion de service",
      realite: "Product Owner = roadmap produit, Service Owner = performance service client",
      astuce: "Un produit peut alimenter plusieurs services, un service peut utiliser plusieurs produits",
      exemple: "Product Owner d'une API vs Service Owner du service e-commerce qui l'utilise"
    }
  ]

  // Données séparées pour Chaîne de Valeur
  const chaineValeurFlux = [
    {
      concept: "Flexibilité de la CVS",
      description: "Les 6 activités ne sont PAS séquentielles",
      piege: "Penser que les 6 activités suivent un ordre fixe",
      realite: "CVS = modèle FLEXIBLE, activités combinables selon les besoins",
      astuce: "Une demande peut aller directement d'Engager à Fournir, sans Concevoir",
      exemple: "Demande de reset mot de passe : Engager → Obtenir/Construire → Fournir (pas de Planifier/Concevoir)"
    },
    {
      concept: "Amélioration continue",
      description: "L'amélioration n'est pas réactive mais permanente",
      piege: "Croire qu'on améliore seulement après les problèmes",
      realite: "Amélioration = activité PERMANENTE et PROACTIVE de la CVS",
      astuce: "Seule activité présente dans TOUS les flux de valeur",
      exemple: "Même lors d'un flux de demande standard, on cherche à optimiser le processus"
    },
    {
      concept: "Flux de valeur vs Processus",
      description: "Vision end-to-end vs étapes définies",
      piege: "Confondre flux de valeur avec un processus linéaire",
      realite: "Flux de valeur = séquence spécifique d'activités pour créer de la valeur",
      astuce: "Chaque demande peut avoir son flux unique selon le contexte",
      exemple: "Nouveau service IT : Planifier→Concevoir→Obtenir→Fournir vs Bug critique : Engager→Obtenir→Fournir"
    }
  ]

  // Questions types et simulations
  const questionsExamples = [
    {
      id: 'q1',
      category: 'Principes directeurs',
      question: "Quel principe directeur recommande d'évaluer ce qui existe déjà avant de créer quelque chose de nouveau ?",
      options: [
        "Se concentrer sur la valeur",
        "Commencer là où on se trouve",
        "Progresser de manière itérative",
        "Penser et travailler de manière holistique"
      ],
      reponse: 1,
      explication: "Le principe 'Commencer là où on se trouve' évite de repartir de zéro et recommande d'évaluer l'existant.",
      piege: "Ne pas confondre avec 'Progresser de manière itérative' qui concerne l'approche progressive."
    },
    {
      id: 'q2',
      category: 'Chaîne de valeur',
      question: "Laquelle de ces affirmations concernant la chaîne de valeur des services est CORRECTE ?",
      options: [
        "Les activités doivent être exécutées dans un ordre fixe",
        "L'activité 'Améliorer' est optionnelle dans certains flux",
        "Les activités peuvent être combinées de manière flexible",
        "Chaque flux de valeur utilise toutes les 6 activités"
      ],
      reponse: 2,
      explication: "La CVS est flexible et non-séquentielle. Les activités peuvent être combinées selon les besoins spécifiques.",
      piege: "GROS piège : croire que la CVS est séquentielle comme les anciens processus ITIL v3."
    },
    {
      id: 'q3',
      category: 'Pratiques',
      question: "Quelle pratique ITIL a pour objectif principal d'être le point de contact unique ?",
      options: [
        "Gestion des incidents",
        "Service desk",
        "Gestion des relations",
        "Gestion des niveaux de service"
      ],
      reponse: 1,
      explication: "Le service desk est le SPOC (Single Point of Contact) pour les utilisateurs.",
      piege: "Ne pas confondre avec 'Gestion des incidents' qui traite les interruptions de service."
    },
    {
      id: 'q4',
      category: 'Concepts',
      question: "Un utilisateur dit : 'Mon mot de passe ne fonctionne plus'. Il s'agit d'un :",
      options: [
        "Incident (interruption de service)",
        "Problème (cause racine à analyser)",
        "Demande de service (reset standard)",
        "Changement d'urgence"
      ],
      reponse: 2,
      explication: "Reset de mot de passe = demande de service standard du catalogue, même si exprimée comme un problème.",
      piege: "Piège classique ! L'urgence ou la formulation ne change pas la classification de base."
    }
  ]

  // Outils et ressources
  const outilsRessources = [
    {
      type: 'Pratique',
      titre: 'Quiz interactifs',
      description: '100+ questions avec explications détaillées',
      lien: '/quiz',
      icon: PlayCircle,
      badge: 'Recommandé'
    },
    {
      type: 'Mémorisation',
      titre: 'Flashcards',
      description: 'Cartes mémoire avec focus sur les pièges',
      lien: '/flashcards',
      icon: Brain,
      badge: 'Pièges'
    },
    {
      type: 'Application',
      titre: 'Cas pratiques sectoriels',
      description: 'Exemples concrets par industrie',
      lien: '/case-studies',
      icon: FileText,
      badge: 'Nouveau'
    },
    {
      type: 'Théorie',
      titre: 'Hub d\'apprentissage',
      description: 'Parcours structuré par concepts',
      lien: '/learn',
      icon: BookOpen,
      badge: null
    }
  ]


  return (
    <div className="w-full overflow-x-hidden">
      <div className="container-responsive max-w-5xl">
      {/* En-tête amélioré */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight max-w-4xl mx-auto break-words">
            🏆 Guide Complet : Réussir l'Examen ITIL 4
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-prose mx-auto leading-relaxed break-words">
            Tout ce qu'il faut savoir pour réussir l'examen et maîtriser les concepts ITIL 4 : 
            préparation, concepts difficiles, pièges fréquents et outils pratiques.
          </p>
        </div>

        {/* Navigation modernisée en cards */}
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 ${designSystem.spacing.subsection}`}>
          <div className={`flex items-center justify-center ${designSystem.spacing.element}`}>
            <Navigation className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className={`text-lg font-semibold ${designSystem.text.primary}`}>Navigation Rapide</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id
              const colorClasses = {
                indigo: isActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10',
                red: isActive ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-red-200 dark:border-red-800 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/10',
                purple: isActive ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-purple-200 dark:border-purple-800 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10',
                emerald: isActive ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10',
                blue: isActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-blue-200 dark:border-blue-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10',
                amber: isActive ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' : 'border-amber-200 dark:border-amber-800 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/10',
                gray: isActive ? 'border-gray-500 bg-gray-50 dark:bg-gray-700' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }
              const iconColors = {
                indigo: isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-500 dark:text-indigo-500',
                red: isActive ? 'text-red-600 dark:text-red-400' : 'text-red-500 dark:text-red-500',
                purple: isActive ? 'text-purple-600 dark:text-purple-400' : 'text-purple-500 dark:text-purple-500',
                emerald: isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-emerald-500 dark:text-emerald-500',
                blue: isActive ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500 dark:text-blue-500',
                amber: isActive ? 'text-amber-600 dark:text-amber-400' : 'text-amber-500 dark:text-amber-500',
                gray: isActive ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-500'
              }
              
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-5 border-2 transition-all duration-300 hover:shadow-md min-h-0 h-auto flex flex-col items-center justify-center text-center touch-target ${
                    colorClasses[section.color as keyof typeof colorClasses]
                  } ${isActive ? 'shadow-lg' : 'hover:shadow-md'}`}
                >
                  <Icon className={`h-8 w-8 mb-2 flex-shrink-0 transition-colors ${
                    iconColors[section.color as keyof typeof iconColors]
                  }`} />
                  <h3 className={`text-xs sm:text-sm font-semibold mb-2 transition-colors leading-tight max-w-full break-words text-center ${
                    isActive ? designSystem.text.primary : designSystem.text.secondary
                  }`}>
                    {section.title}
                  </h3>
                  <p className={`text-xs leading-tight transition-colors max-w-full break-words text-center ${
                    isActive ? designSystem.text.secondary : designSystem.text.muted
                  }`}>
                    {section.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Section 1: Concepts difficiles */}
      <section id="concepts-difficiles" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Maîtrise des Concepts Difficiles
          </h2>
        </div>

        {/* Introduction des concepts difficiles */}
        <div className="bg-indigo-50 dark:bg-indigo-900/15 rounded-xl p-6 border border-indigo-200 dark:border-indigo-700 mb-6">
          <div className="flex items-start space-x-3">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2 flex-shrink-0">
              <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                🧠 Maîtrise des Concepts ITIL 4 les Plus Difficiles
              </h3>
              <p className="text-indigo-800 dark:text-indigo-200 text-sm sm:text-base max-w-prose break-words leading-relaxed">
                Cette section se concentre sur les concepts théoriques les plus piégeants à l'examen. 
                Chaque concept difficile est décomposé avec des scénarios concrets, des analyses guidées et des exercices pratiques.
              </p>
            </div>
          </div>
        </div>


        {/* Concepts difficiles */}
        {conceptsDifficiles.map((concept) => {
            const isExpanded = expandedConcept === concept.id
            const getDifficultyColor = (difficulty: string) => {
              switch (difficulty) {
                case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                default: return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
              }
            }

            return (
              <div key={concept.id} id={`concept-${concept.id}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden max-w-full">
                <div 
                  className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors touch-target"
                  onClick={() => toggleConcept(concept.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                        <concept.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{concept.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(concept.difficulty)}`}>
                            {concept.difficulty === 'medium' && '●● Moyen'}
                            {concept.difficulty === 'hard' && '●●● Difficile'}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-full break-words leading-relaxed">{concept.description}</p>
                        <p className="text-sm text-red-600 dark:text-red-400 max-w-full break-words">
                          <AlertTriangle className="inline h-4 w-4 mr-1 flex-shrink-0" />
                          <strong>Pourquoi c'est difficile :</strong> {concept.pourquoiDifficile}
                        </p>
                      </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-gray-700">
                    {/* Scénarios pédagogiques */}
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        📚 Scénarios pédagogiques
                      </h4>
                      
                      {concept.scenarios?.map((scenario, idx) => (
                        <div key={scenario.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                              Situation {idx + 1} : {scenario.situation}
                            </h5>
                            {scenario.contexte && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                <strong>Contexte :</strong> {scenario.contexte}
                              </p>
                            )}
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                              ❓ {scenario.question}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {'reponseCorrecte' in scenario && (
                              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3">
                                <p className="text-sm">
                                  <strong className="text-green-800 dark:text-green-200">✅ Réponse correcte :</strong> 
                                  <span className="text-green-700 dark:text-green-300 ml-1">{scenario.reponseCorrecte}</span>
                                </p>
                              </div>
                            )}

                            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-3">
                              <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>💡 Analyse :</strong> {scenario.analyse}
                              </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-3">
                              <p className="text-sm text-orange-800 dark:text-orange-200">
                                <strong>⚠️ Piège fréquent :</strong> {scenario.piege}
                              </p>
                            </div>

                            {'autresReponses' in scenario && scenario.autresReponses && (
                              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-3">
                                <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">❌ Pourquoi les autres réponses sont fausses :</p>
                                <ul className="space-y-1">
                                  {scenario.autresReponses.map((autre: any, i: number) => (
                                    <li key={i} className="text-sm text-red-700 dark:text-red-300">
                                      • <strong>{autre.option} :</strong> {autre.pourquoiFaux}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Exercice pratique */}
                      {concept.exercicePratique && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                          <h5 className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">
                            🎯 {concept.exercicePratique.titre}
                          </h5>
                          {concept.exercicePratique.situations && (
                            <div className="space-y-2">
                              {concept.exercicePratique.situations.map((sit, i) => (
                                <div key={i} className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{sit.description}</span>
                                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                                    {sit.reponse}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Règles de mémorisation */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg p-4 border border-green-200 dark:border-green-800">
                        <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                          🧠 Règles de mémorisation
                        </h5>
                        <ul className="space-y-1">
                          {concept.reglesMemorisation?.map((regle, i) => (
                            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {regle}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
        })}

        {/* Conseil final méthodologique */}
        <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
          <div className="flex items-start space-x-3">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2 flex-shrink-0">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                💡 Conseil Final : Comment Aborder ces Concepts à l'Examen
              </h3>
              <div className="space-y-3 text-indigo-800 dark:text-indigo-200">
                <p className="text-base">
                  <strong>1. Lisez deux fois :</strong> Ces concepts sont piégeux par nature. Une lecture rapide mène souvent à l'erreur.
                </p>
                <p className="text-base">
                  <strong>2. Identifiez le contexte :</strong> ITIL 4 privilégie l'adaptation contextuelle. Demandez-vous toujours "dans quelle situation ?"
                </p>
                <p className="text-base">
                  <strong>3. Éliminez les absolus :</strong> Si vous voyez "toujours", "jamais", "tous" dans une réponse → soyez très vigilant !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pièges et erreurs fréquentes */}
      <section id="pieges-erreurs" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Pièges et Erreurs Fréquentes
          </h2>
        </div>

        {/* Conseil anti-piège amélioré */}
        <div className={`${designSystem.gradients.warning} rounded-xl p-6 border ${designSystem.colors.warning.split(' ').find(c => c.includes('border'))} ${designSystem.spacing.subsection}`}>
          <div className="flex items-start space-x-3">
            <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-2 flex-shrink-0">
              <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold ${designSystem.text.primary} mb-4">
                🚨 Stratégie Anti-Piège Universelle
              </h3>
              <div className="space-y-4">
                <p className={`${designSystem.text.primary} text-base font-medium`}>
                  <strong>Règle d'or :</strong> Méfiez-vous des mots absolus !
                </p>
                <p className={`${designSystem.text.secondary} max-w-full break-words leading-relaxed`}>
                  Quand vous voyez ces mots dans une question, soyez ULTRA vigilant ! ITIL 4 prône la flexibilité et l'adaptation contextuelle.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-200 dark:bg-amber-800 px-3 py-2 rounded-lg text-sm font-bold text-amber-900 dark:text-amber-100">TOUJOURS</span>
                  <span className="bg-amber-200 dark:bg-amber-800 px-3 py-2 rounded-lg text-sm font-bold text-amber-900 dark:text-amber-100">JAMAIS</span>
                  <span className="bg-amber-200 dark:bg-amber-800 px-3 py-2 rounded-lg text-sm font-bold text-amber-900 dark:text-amber-100">TOUS</span>
                  <span className="bg-amber-200 dark:bg-amber-800 px-3 py-2 rounded-lg text-sm font-bold text-amber-900 dark:text-amber-100">AUCUN</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-amber-300 dark:border-amber-600">
                  <p className={`${designSystem.text.secondary} text-sm`}>
                    💡 <strong>Astuce :</strong> Dans 80% des cas, une affirmation avec un mot absolu est un piège.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des pièges par thèmes */}
        <div className="space-y-6">
          {piegesParThemes.map((theme, index) => {
            const Icon = theme.icon
            const colorClass = designSystem.colors[theme.color as keyof typeof designSystem.colors]
            const gradientClass = designSystem.gradients[theme.color as keyof typeof designSystem.gradients]
            
            return (
              <div key={index} className={`${gradientClass} rounded-xl border p-6 ${colorClass.split(' ')[2]} ${colorClass.split(' ')[3]}`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${theme.color === 'danger' ? 'bg-red-100 dark:bg-red-900/30' : theme.color === 'warning' ? 'bg-amber-100 dark:bg-amber-900/30' : theme.color === 'primary' ? 'bg-indigo-100 dark:bg-indigo-900/30' : 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full p-3 flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${theme.color === 'danger' ? 'text-red-600 dark:text-red-400' : theme.color === 'warning' ? 'text-amber-600 dark:text-amber-400' : theme.color === 'primary' ? 'text-indigo-600 dark:text-indigo-400' : 'text-emerald-600 dark:text-emerald-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${designSystem.text.primary} mb-3`}>
                      {theme.theme}
                    </h3>
                    <p className={`${designSystem.text.secondary} text-base`}>
                      {theme.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-full">
                  {theme.pieges.map((piege, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className={`text-base font-bold ${designSystem.text.primary} flex-1`}>
                            {piege.concept}
                          </h4>
                          <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ml-2">
                            PIÈGE
                          </span>
                        </div>
                        <p className={`${designSystem.text.secondary} mb-3 italic`}>
                          ⚠️ {piege.piege}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className={`${designSystem.colors.success} rounded-lg p-4 border`}>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">✅ Réalité</p>
                              <p className="text-sm text-emerald-700 dark:text-emerald-300">{piege.realite}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`${designSystem.colors.primary} rounded-lg p-4 border`}>
                          <div className="flex items-start space-x-2">
                            <Lightbulb className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">💡 Astuce mémorisation</p>
                              <p className="text-sm text-indigo-700 dark:text-indigo-300">{piege.astuce}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Section 5: Préparation à l'examen */}
      <section id="preparation" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Préparation à l'Examen
          </h2>
        </div>

        {/* Format de l'examen */}
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${designSystem.spacing.subsection}`}>
          <h3 className={`text-xl font-semibold ${designSystem.text.primary} mb-6 flex items-center`}>
            <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            Format Officiel de l'Examen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Object.entries(formatExamen).map(([key, value]) => (
              <div key={key} className={`${designSystem.gradients.primary} rounded-lg p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-md transition-shadow`}>
                <dt className={`text-sm font-medium text-indigo-700 dark:text-indigo-300 capitalize mb-2`}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </dt>
                <dd className={`text-lg font-bold ${designSystem.text.primary}`}>{value}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* Répartition des questions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 text-primary-600 mr-2" />
            Répartition Stratégique des Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {repartitionQuestions.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{item.domaine}</h4>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">{item.nombre}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">questions</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong className="text-green-700 dark:text-green-400">✓ Conseil :</strong> {item.conseil}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all"
                    style={{ width: `${item.pourcentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">{item.pourcentage}% de l'examen</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stratégies d'examen unifiées */}
        <div className={`${designSystem.spacing.subsection}`}>
          <h3 className={`text-xl font-bold ${designSystem.text.primary} mb-6 text-center`}>
            🎯 Stratégies d'Examen Gagnantes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {strategiesExamen.map((strategie, index) => {
              const Icon = strategie.icon
              const colorClass = designSystem.colors[strategie.color as keyof typeof designSystem.colors]
              const gradientClass = designSystem.gradients[strategie.color as keyof typeof designSystem.gradients]
              
              return (
                <div key={index} className={`${gradientClass} rounded-xl border p-6 hover:shadow-lg transition-all duration-300 ${colorClass.split(' ')[2]} ${colorClass.split(' ')[3]}`}>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className={`${strategie.color === 'primary' ? 'bg-indigo-100 dark:bg-indigo-900/30' : strategie.color === 'success' ? 'bg-emerald-100 dark:bg-emerald-900/30' : strategie.color === 'warning' ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-red-100 dark:bg-red-900/30'} rounded-full p-2 flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${strategie.color === 'primary' ? 'text-indigo-600 dark:text-indigo-400' : strategie.color === 'success' ? 'text-emerald-600 dark:text-emerald-400' : strategie.color === 'warning' ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${designSystem.text.primary} flex-1`}>{strategie.titre}</h4>
                  </div>
                  <ul className="space-y-3">
                    {strategie.techniques.map((technique, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className={`h-4 w-4 ${strategie.color === 'primary' ? 'text-indigo-600 dark:text-indigo-400' : strategie.color === 'success' ? 'text-emerald-600 dark:text-emerald-400' : strategie.color === 'warning' ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'} mt-1 flex-shrink-0`} />
                        <span className={`${designSystem.text.secondary} text-sm`}>{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>


      </section>


      {/* Section 3: Rôles et Responsabilités */}
      <section id="roles-responsabilites" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <Users className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Rôles et Responsabilités ITIL 4
          </h2>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/15 rounded-xl p-6 border border-purple-200 dark:border-purple-700 mb-6">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 flex-shrink-0">
              <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-4">
                🎭 Qui fait quoi ? Les malentendus sur les rôles et pouvoirs
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-base">
                <strong>Erreur classique :</strong> Confondre les rôles de conseil avec les rôles d'autorisation, 
                ou mélanger les responsabilités techniques avec les responsabilités de contact client.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {rolesResponsabilites.map((role, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex-1">
                    {role.concept}
                  </h4>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ml-2">
                    RÔLE CLÉ
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {role.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-200 mb-1">⚠️ Piège fréquent</p>
                      <p className="text-sm text-red-700 dark:text-red-300">{role.piege}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-200 mb-1">✅ Réalité</p>
                      <p className="text-sm text-green-700 dark:text-green-300">{role.realite}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">💡 Astuce mémorisation</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">{role.astuce}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">🎯 Exemple concret</p>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">{role.exemple}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Chaîne de Valeur et Flux */}
      <section id="chaine-valeur" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <ArrowRight className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Chaîne de Valeur des Services (CVS)
          </h2>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/15 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700 mb-6">
          <div className="flex items-start space-x-3">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 flex-shrink-0">
              <ArrowRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-4">
                🔄 La flexibilité de la CVS, source de nombreuses erreurs
              </h3>
              <p className="text-emerald-800 dark:text-emerald-200 text-base">
                <strong>Erreur classique :</strong> Appliquer la CVS comme un processus séquentiel rigide, 
                alors qu'elle est conçue pour être flexible et adaptative selon le contexte.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {chaineValeurFlux.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex-1">
                    {concept.concept}
                  </h4>
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ml-2">
                    CVS
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {concept.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-200 mb-1">⚠️ Piège classique</p>
                      <p className="text-sm text-red-700 dark:text-red-300">{concept.piege}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-200 mb-1">✅ Réalité ITIL 4</p>
                      <p className="text-sm text-green-700 dark:text-green-300">{concept.realite}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">💡 Astuce d'examen</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">{concept.astuce}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">🎯 Exemple pratique</p>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">{concept.exemple}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Section 6: Questions et simulations */}
      <section id="questions-simulations" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <HelpCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Questions Types et Simulations
          </h2>
        </div>

        <div className={`${designSystem.gradients.primary} rounded-xl p-6 border border-indigo-200 dark:border-indigo-700 ${designSystem.spacing.subsection}`}>
          <div className={`flex items-center justify-center ${designSystem.spacing.element}`}>
            <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h3 className={`text-xl font-bold ${designSystem.text.primary}`}>
              ⏱️ Défi : Répondez en moins de 90 secondes !
            </h3>
          </div>
          <p className={`text-center ${designSystem.text.secondary} text-base max-w-4xl mx-auto`}>
            Testez vos connaissances avec ces questions types d'examen. Chaque question inclut l'analyse détaillée 
            et les pièges spécifiques à éviter.
          </p>
        </div>

        <div className="space-y-6">
          {questionsExamples.map((q, index) => (
            <div key={q.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/15 dark:to-blue-900/15 p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                    {q.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Question {index + 1}/4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{q.question}</h3>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="space-y-4 mb-6">
                  {q.options.map((option, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 sm:p-4 rounded-lg border transition-all touch-target ${
                        idx === q.reponse 
                          ? 'border-green-400 dark:border-green-400 bg-green-50 dark:bg-green-900/30 shadow-sm' 
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 flex-1 leading-relaxed">{option}</span>
                        {idx === q.reponse && (
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-200 mb-1">Explication</p>
                        <p className="text-sm text-green-700 dark:text-green-300">{q.explication}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-r-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Piège à éviter</p>
                        <p className="text-sm text-orange-700 dark:text-orange-300">{q.piege}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Ressources et outils */}
      <section id="ressources-outils" className={designSystem.spacing.section}>
        <div className={`flex items-center ${designSystem.spacing.element}`}>
          <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${designSystem.text.primary} max-w-full break-words`}>
            Ressources et Outils de Préparation
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full ${designSystem.spacing.subsection}`}>
          {outilsRessources.map((outil, index) => {
            const Icon = outil.icon
            const colors = [
              { bg: 'from-indigo-500 to-blue-500', badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200' },
              { bg: 'from-emerald-500 to-green-500', badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200' },
              { bg: 'from-amber-500 to-orange-500', badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200' },
              { bg: 'from-red-500 to-pink-500', badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' }
            ]
            const color = colors[index % colors.length]
            
            return (
              <Link key={index} to={outil.lien} className="group">
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full min-h-0 flex flex-col touch-target max-w-full overflow-hidden`}>
                  <div className={`bg-gradient-to-r ${color.bg} rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-sm font-medium ${designSystem.text.muted}`}>{outil.type}</span>
                    {outil.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${color.badge} shadow-sm`}>
                        {outil.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`text-base sm:text-lg font-bold ${designSystem.text.primary} mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors max-w-full break-words leading-tight`}>
                    {outil.titre}
                  </h3>
                  <p className={`${designSystem.text.secondary} mb-6 flex-1 text-sm max-w-full break-words leading-relaxed`}>{outil.description}</p>
                  
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-base font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                    <span>Explorer maintenant</span>
                    <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Progression recommandée */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
            🎆 Progression Recommandée pour la Réussite
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { num: '1', title: 'Étude', desc: 'Hub d\'apprentissage complet', time: '2-3 semaines' },
              { num: '2', title: 'Mémorisation', desc: 'Flashcards quotidiennes', time: '15 min/jour' },
              { num: '3', title: 'Pratique', desc: 'Quiz thématiques', time: '1 semaine' },
              { num: '4', title: 'Simulation', desc: 'Examens blancs', time: '2-3 jours' }
            ].map((etape, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{etape.num}</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{etape.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{etape.desc}</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{etape.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Checklist finale améliorée */}
      <div className={`${designSystem.gradients.success} rounded-xl p-6 border border-emerald-200 dark:border-emerald-700 ${designSystem.spacing.section}`}>
        <div className="text-center mb-8">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
            <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className={`text-2xl font-bold ${designSystem.text.primary} mb-4`}>
            ✅ Checklist Finale de Réussite
          </h3>
          <p className={`${designSystem.text.secondary} text-sm sm:text-base max-w-prose mx-auto break-words leading-relaxed`}>
            Vérifiez que vous maîtrisez tous ces éléments avant de passer l'examen officiel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2 mr-3">
                <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className={`text-lg font-bold ${designSystem.text.primary}`}>
                📚 Maîtrise Théorique
              </h4>
            </div>
            <div className="space-y-4">
              {[
                "7 principes directeurs : application contextuelle maîtrisée",
                "4 dimensions + PESTLE : identification et interactions",
                "SVS complet : composants et relations dynamiques",
                "CVS flexible : 6 activités combinables librement",
                "15 pratiques : objectifs et distinctions clés"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2 p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <span className={`${designSystem.text.secondary} text-sm font-medium`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-2 mr-3">
                <Target className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h4 className={`text-lg font-bold ${designSystem.text.primary}`}>
                🎯 Préparation Pratique
              </h4>
            </div>
            <div className="space-y-4">
              {[
                "Pièges d'examen : 20+ pièges identifiés et évités",
                "Distinctions critiques : Incident/Problème/Demande",
                "Questions d'entraînement : 40+ validées à 80%+",
                "Simulation d'examen : 1 réussie à 70%+ minimum",
                "Stratégies d'examen : 4 techniques maîtrisées"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2 p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-200 dark:border-amber-800">
                  <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <span className={`${designSystem.text.secondary} text-sm font-medium`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Message final motivant */}
        <div className="text-center mt-8 lg:mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-md border border-gray-200 dark:border-gray-700">
            <h5 className={`text-2xl lg:text-3xl font-bold ${designSystem.text.primary} mb-4`}>
              🎆 Vous êtes Prêt(e) pour la Réussite !
            </h5>
            <p className={`${designSystem.text.secondary} text-sm sm:text-base lg:text-lg max-w-prose mx-auto break-words leading-relaxed`}>
              Avec cette préparation complète, vous avez toutes les clés pour obtenir votre certification ITIL 4 Foundation. 
              <strong className={designSystem.text.primary}>Faites-vous confiance et montrez votre expertise !</strong>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AstucesConseilsPage