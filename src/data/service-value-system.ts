import { Concept } from '../types';

// ==============================================================================
// SYSTÈME DE VALEUR DES SERVICES (SVS) - Cœur d'ITIL 4
// ==============================================================================

export const serviceValueSystem: Concept[] = [
  {
    id: 'svs-overview',
    title: '🏗 Système de Valeur des Services (SVS)',
    definition: 'Framework qui décrit comment tous les composants et activités de l\'organisation travaillent ensemble pour faciliter la création de valeur.',
    keyPoints: [
      'Remplace le Service Lifecycle d\'ITIL v3',
      'Approche plus flexible et adaptable',
      'Intègre les principes directeurs, gouvernance, chaîne de valeur, pratiques et amélioration continue',
      'Permet la co-création de valeur',
      'S\'adapte aux approches Agile, Lean et DevOps'
    ],
    examTip: 'Le SVS est le framework PRINCIPAL d\'ITIL 4. Toutes les autres composantes s\'y intègrent.',
    category: 'chain'
  }
];

// ==============================================================================
// CHAÎNE DE VALEUR DES SERVICES - 6 Activités Clés
// ==============================================================================

export const serviceValueChain: Concept[] = [
  {
    id: 'plan-activity',
    title: '📋 PLANIFIER (Plan)',
    definition: 'Assurer une compréhension commune de la vision, de l\'état actuel et de la direction d\'amélioration pour toutes les 4 dimensions et tous les services.',
    keyPoints: [
      'Créer une vision partagée et claire',
      'Définir la stratégie et les politiques',
      'Allouer les ressources pour l\'amélioration',
      'Évaluer la position actuelle de l\'organisation',
      'Coordonner les activités d\'amélioration',
      'Assurer l\'alignement architectural'
    ],
    examTip: 'Question type: "Développer une stratégie IT sur 5 ans" = PLANIFIER | "Évaluer la maturité actuelle" = PLANIFIER',
    category: 'chain'
  },
  {
    id: 'improve-activity',
    title: '📈 AMÉLIORER (Improve)',
    definition: 'Assurer l\'amélioration continue des produits, services, pratiques et tous les éléments impliqués dans la gestion des services.',
    keyPoints: [
      'Encourager l\'amélioration continue à tous les niveaux',
      'Analyser les données de performance et métriques',
      'Identifier et prioriser les opportunités d\'amélioration',
      'Sécuriser le temps et budget pour l\'amélioration',
      'Assurer que les améliorations sont mesurées et validées'
    ],
    examTip: 'Question type: "30% des changements échouent, analyser les causes" = AMÉLIORER | "Identifier pourquoi les incidents augmentent" = AMÉLIORER',
    category: 'chain'
  },
  {
    id: 'engage-activity',
    title: '🤝 IMPLIQUER (Engage)',
    definition: 'Fournir une bonne compréhension des besoins des parties prenantes, transparence et bonnes relations avec toutes les parties prenantes.',
    keyPoints: [
      'Comprendre et collecter les besoins des parties prenantes',
      'Assurer la transparence et communication continue',
      'Maintenir de bonnes relations avec toutes les parties prenantes',
      'Collecter et analyser le feedback des consommateurs',
      'Assurer que l\'impact des nouvelles fonctionnalités est compris'
    ],
    examTip: 'Activité TRANSVERSALE qui soutient toutes les autres. Focus sur relations et communication.',
    category: 'chain'
  },
  {
    id: 'design-transition-activity',
    title: '🔧 CONCEPTION ET TRANSITION (Design and Transition)',
    definition: 'Assurer que les produits et services répondent continuellement aux attentes des parties prenantes pour la qualité, les coûts et le délai de mise sur le marché.',
    keyPoints: [
      'Concevoir de nouveaux produits et services',
      'Assurer que tous les éléments de conception sont appropriés',
      'Développer et tester les solutions',
      'Gérer le déploiement et la livraison de nouvelles fonctionnalités',
      'Transférer les nouveaux services vers BAU (Business as Usual)'
    ],
    examTip: 'Inclut TOUT le cycle de développement jusqu\'à la mise en production. De l\'idée jusqu\'au service opérationnel.',
    category: 'chain'
  },
  {
    id: 'obtain-build-activity',
    title: '🛒 OBTENIR/CONSTRUIRE (Obtain/Build)',
    definition: 'Assurer que les composants de service sont disponibles quand et où ils sont nécessaires, et qu\'ils respectent les spécifications convenues.',
    keyPoints: [
      'Décision "Make or Buy" (construire ou acheter)',
      'Acheter les composants de service auprès de fournisseurs',
      'Construire les nouveaux composants et applications en interne',
      'Assurer que les composants respectent les spécifications',
      'Maintenir les relations avec les fournisseurs internes et externes'
    ],
    examTip: 'Focus sur l\'ACQUISITION des composants nécessaires, qu\'ils soient achetés ou construits en interne.',
    category: 'chain'
  },
  {
    id: 'deliver-support-activity',
    title: '🚀 FOURNIR ET SOUTENIR (Deliver and Support)',
    definition: 'Assurer que les services sont livrés et soutenus selon les spécifications et attentes des parties prenantes.',
    keyPoints: [
      'Livrer les services aux consommateurs',
      'Assurer que la performance des services respecte les attentes',
      'Traiter les interruptions de service',
      'Collecter et traiter les demandes des utilisateurs',
      'Résoudre les questions des services'
    ],
    examTip: 'Question type: "Gestion quotidienne des incidents" = FOURNIR ET SOUTENIR | "Support utilisateur jour après jour" = FOURNIR ET SOUTENIR',
    category: 'chain'
  }
];

// ==============================================================================
// AMÉLIORATION CONTINUE - Principe transversal
// ==============================================================================

export const continualImprovement: Concept[] = [
  {
    id: 'continual-improvement-model',
    title: '🔄 Modèle d\'Amélioration Continue',
    definition: 'Approche pratique pour améliorer de manière itérative la gestion des services, services et pratiques.',
    keyPoints: [
      'Modèle en 7 étapes pour structurer l\'amélioration',
      'S\'applique à TOUS les niveaux de l\'organisation',
      'Intégré dans toutes les activités de la chaîne de valeur',
      'Focus sur la création de valeur pour les parties prenantes',
      'Approche basée sur les données et mesures'
    ],
    examTip: 'L\'amélioration continue n\'est PAS juste une pratique - c\'est un principe qui traverse TOUT ITIL 4',
    category: 'chain'
  },
  {
    id: 'continual-improvement-steps',
    title: '📊 7 Étapes de l\'Amélioration Continue',
    definition: 'Méthodologie structurée pour guider les initiatives d\'amélioration.',
    keyPoints: [
      '1. Quelle est la vision? (définir la vision et la stratégie)',
      '2. Où sommes-nous maintenant? (évaluer l\'état actuel)',
      '3. Où voulons-nous être? (définir les objectifs)',
      '4. Comment y arriverons-nous? (planifier l\'amélioration)',
      '5. Prenez des mesures (exécuter le plan)',
      '6. Sommes-nous arrivés? (évaluer les résultats)',
      '7. Comment maintenir l\'élan? (intégrer les améliorations)'
    ],
    examTip: 'Les 7 étapes forment un cycle continu. Après l\'étape 7, on recommence à l\'étape 1 avec une nouvelle vision.',
    category: 'chain'
  }
];

// Combinaison de tous les éléments de la chaîne de valeur
export const allServiceValueConcepts = [
  ...serviceValueSystem,
  ...serviceValueChain,
  ...continualImprovement
];