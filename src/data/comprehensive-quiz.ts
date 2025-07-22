import { QuizQuestion } from '../types';

// ==============================================================================
// QUIZ COMPLET - Questions basées sur l'examen officiel 2024
// ==============================================================================

export const comprehensiveQuiz: QuizQuestion[] = [
  // CONCEPTS FONDAMENTAUX
  {
    id: 'cq1',
    question: 'Qu\'est-ce qui définit le mieux la "valeur" selon ITIL 4 ?',
    options: [
      'Le coût total de possession d\'un service',
      'Les bénéfices perçus par une partie prenante',
      'Le retour sur investissement mesuré',
      'La satisfaction client uniquement'
    ],
    correctAnswer: 1,
    explanation: 'La valeur est définie comme les bénéfices, utilité et importance perçus par une partie prenante. Elle est toujours subjective et varie selon chaque partie prenante.',
    difficulty: 'easy',
    category: 'fundamentals'
  },
  {
    id: 'cq2',
    question: 'Dans ITIL 4, la valeur est créée par :',
    options: [
      'Le fournisseur de service seul',
      'Le consommateur de service seul',
      'La co-création entre fournisseur et consommateur',
      'Les outils et technologies utilisés'
    ],
    correctAnswer: 2,
    explanation: 'CRITIQUE: La valeur est TOUJOURS co-créée entre le fournisseur et le consommateur. Elle ne peut jamais être créée unilatéralement par l\'une des parties.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq3',
    question: 'Quelle est la différence entre "utilité" et "garantie" ?',
    options: [
      'Utilité = coût du service, Garantie = valeur du service',
      'Utilité = "fit for purpose", Garantie = "fit for use"',
      'Utilité = fonctions internes, Garantie = fonctions externes',
      'Il n\'y a pas de différence significative'
    ],
    correctAnswer: 1,
    explanation: 'Utilité = ce QUE fait le service (fit for purpose - fonctionnalité). Garantie = COMMENT le service performe (fit for use - performance, disponibilité, sécurité).',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq4',
    question: 'Un service peut créer de la valeur avec :',
    options: [
      'L\'utilité seulement',
      'La garantie seulement',
      'Soit l\'utilité, soit la garantie',
      'L\'utilité ET la garantie ensemble'
    ],
    correctAnswer: 3,
    explanation: 'Un service DOIT avoir à la fois utilité ET garantie pour créer de la valeur. L\'une sans l\'autre rend le service inutile.',
    difficulty: 'hard',
    category: 'fundamentals'
  },
  {
    id: 'cq5',
    question: 'Qu\'est-ce qui différencie un "service" d\'un "produit" en ITIL 4 ?',
    options: [
      'Le service est tangible, le produit est intangible',
      'Le service est un moyen, le produit est une configuration',
      'Le service coûte plus cher que le produit',
      'Il n\'y a pas de différence'
    ],
    correctAnswer: 1,
    explanation: 'Service = MOYEN de faciliter des résultats. Produit = CONFIGURATION de ressources. Un service utilise souvent des produits pour faciliter la co-création de valeur.',
    difficulty: 'medium',
    category: 'fundamentals'
  },

  // PRINCIPES DIRECTEURS
  {
    id: 'cq6',
    question: 'Avant d\'améliorer un processus existant, quel principe directeur s\'applique EN PREMIER ?',
    options: [
      'Avancer par itération avec feedback',
      'Commencer là où vous êtes',
      'Optimiser et automatiser',
      'Privilégier la valeur'
    ],
    correctAnswer: 3,
    explanation: 'Le principe "Privilégier la valeur" doit toujours être appliqué EN PREMIER pour comprendre ce qui a de la valeur pour les parties prenantes avant toute amélioration.',
    difficulty: 'hard',
    category: 'principles'
  },
  {
    id: 'cq7',
    question: 'Selon le principe "Optimiser et automatiser", quel est le BON ordre ?',
    options: [
      'Automatiser d\'abord, puis optimiser',
      'Optimiser d\'abord, puis automatiser',
      'Faire les deux en même temps',
      'L\'ordre n\'a pas d\'importance'
    ],
    correctAnswer: 1,
    explanation: 'PIÈGE MAJEUR: TOUJOURS optimiser AVANT automatiser. Automatiser un processus défaillant amplifie les problèmes existants.',
    difficulty: 'easy',
    category: 'principles'
  },
  {
    id: 'cq8',
    question: 'Une organisation veut déployer un nouveau service dans 15 départements. Quel principe s\'applique ?',
    options: [
      'Déployer partout simultanément pour l\'efficacité',
      'Commencer par un pilote dans 1-2 départements',
      'Attendre d\'avoir tous les départements prêts',
      'Déployer d\'abord dans les départements les plus importants'
    ],
    correctAnswer: 1,
    explanation: 'Principe "Avancer par itération avec feedback": pilote dans quelques départements, collecter feedback, ajuster, puis étendre progressivement.',
    difficulty: 'medium',
    category: 'principles'
  },

  // 4 DIMENSIONS
  {
    id: 'cq9',
    question: 'Les 4 dimensions d\'ITIL 4 doivent être considérées :',
    options: [
      'Une par une, dans l\'ordre séquentiel',
      'Seulement celle qui pose le plus de problèmes',
      'Collectivement et simultanément',
      'Seulement lors de la conception de nouveaux services'
    ],
    correctAnswer: 2,
    explanation: 'Les 4 dimensions sont interdépendantes et doivent TOUJOURS être considérées ensemble pour une approche holistique.',
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'cq10',
    question: 'Quelle dimension couvre la culture organisationnelle et les compétences ?',
    options: [
      'Information et technologie',
      'Organisations et personnes',
      'Partenaires et fournisseurs',
      'Flux de valeur et processus'
    ],
    correctAnswer: 1,
    explanation: 'La dimension "Organisations et personnes" couvre la culture, structure organisationnelle, compétences, formation et communication.',
    difficulty: 'easy',
    category: 'dimensions'
  },

  // CHAÎNE DE VALEUR
  {
    id: 'cq11',
    question: 'Combien d\'activités composent la chaîne de valeur des services ITIL 4 ?',
    options: [
      '4 activités',
      '5 activités', 
      '6 activités',
      '7 activités'
    ],
    correctAnswer: 2,
    explanation: '6 activités: Planifier, Améliorer, Impliquer, Conception et transition, Obtenir/Construire, Fournir et soutenir.',
    difficulty: 'easy',
    category: 'chain'
  },
  {
    id: 'cq12',
    question: 'L\'organisation constate que 30% de ses changements échouent et veut analyser les causes. Quelle activité de la chaîne de valeur est principalement concernée ?',
    options: [
      'Planifier',
      'Améliorer',
      'Conception et transition',
      'Fournir et soutenir'
    ],
    correctAnswer: 1,
    explanation: 'L\'activité "Améliorer" analyse les métriques de performance, identifie les causes des échecs et propose des améliorations.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'cq13',
    question: 'La gestion quotidienne des incidents utilisateur relève de quelle activité ?',
    options: [
      'Planifier',
      'Impliquer',
      'Conception et transition',
      'Fournir et soutenir'
    ],
    correctAnswer: 3,
    explanation: '"Fournir et soutenir" couvre les opérations quotidiennes, incidents, monitoring et support utilisateur.',
    difficulty: 'easy',
    category: 'chain'
  },

  // PRATIQUES CRITIQUES
  {
    id: 'cq14',
    question: 'Un serveur critique tombe en panne et impacte 500 utilisateurs. Quelle pratique traite cela EN PREMIER ?',
    options: [
      'Gestion des problèmes pour analyser la cause',
      'Gestion des changements pour planifier la réparation',
      'Gestion des incidents pour restaurer le service',
      'Amélioration continue pour éviter la récurrence'
    ],
    correctAnswer: 2,
    explanation: 'Gestion des incidents se concentre sur la RESTAURATION rapide du service. L\'analyse des causes vient après avec la gestion des problèmes.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'cq15',
    question: 'Le même serveur tombe en panne pour la 4ème fois ce mois. Après restauration, quelle pratique doit intervenir ?',
    options: [
      'Gestion des incidents pour documenter',
      'Gestion des problèmes pour analyser la cause racine',
      'Gestion des changements pour remplacer le serveur',
      'Centre de services pour informer les utilisateurs'
    ],
    correctAnswer: 1,
    explanation: 'Des pannes récurrentes = PROBLÈME. La gestion des problèmes doit analyser la cause racine pour éliminer définitivement le problème.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq16',
    question: 'Un utilisateur demande l\'accès à une application standard de l\'entreprise. Comment traiter cette demande ?',
    options: [
      'Comme un incident à résoudre rapidement',
      'Comme un changement nécessitant une évaluation complète',
      'Comme une demande de service standard',
      'Comme un problème à analyser'
    ],
    correctAnswer: 2,
    explanation: 'Demande d\'accès à une application STANDARD = demande de service pré-approuvée, sans évaluation de risque requise.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq17',
    question: 'Quel est l\'objectif principal du centre de services (service desk) ?',
    options: [
      'Résoudre tous les incidents techniques',
      'Être le point de contact unique entre fournisseur et utilisateurs',
      'Gérer tous les changements IT',
      'Analyser les causes racines des problèmes'
    ],
    correctAnswer: 1,
    explanation: 'Le centre de services est défini comme le point de contact UNIQUE. Il coordonne et escalade, mais ne résout pas forcément tout lui-même.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'cq18',
    question: 'Quel type de changement peut être exécuté sans évaluation de risque supplémentaire ?',
    options: [
      'Changement normal',
      'Changement d\'urgence',
      'Changement standard',
      'Changement majeur'
    ],
    correctAnswer: 2,
    explanation: 'Changement STANDARD = pré-autorisé, faible risque, procédure établie. Ex: mise à jour antivirus mensuelle.',
    difficulty: 'medium',
    category: 'practices'
  },

  // QUESTIONS AVANCÉES ET PIÈGES
  {
    id: 'cq19',
    question: 'Dans le contexte ITIL 4, les trois rôles de consommation sont :',
    options: [
      'Utilisateur, Administrateur, Gestionnaire',
      'Client, Utilisateur, Sponsor',
      'Interne, Externe, Partenaire',
      'Demandeur, Approbateur, Implémenteur'
    ],
    correctAnswer: 1,
    explanation: 'CLIENT (définit besoins), UTILISATEUR (utilise services), SPONSOR (autorise budget). Une personne peut avoir plusieurs rôles.',
    difficulty: 'easy',
    category: 'fundamentals'
  },
  {
    id: 'cq20',
    question: 'Une organisation veut automatiser son processus de déploiement qui a un taux d\'échec de 40%. Que recommande ITIL 4 ?',
    options: [
      'Automatiser immédiatement pour réduire les erreurs humaines',
      'Optimiser d\'abord le processus, puis automatiser',
      'Changer d\'équipe avant d\'automatiser',
      'Automatiser partiellement pour tester'
    ],
    correctAnswer: 1,
    explanation: 'Principe "Optimiser et automatiser": JAMAIS automatiser un processus défaillant. Optimiser d\'abord pour corriger les 40% d\'échecs.',
    difficulty: 'hard',
    category: 'principles'
  },

  // QUESTIONS DE SCENARIO AVANCÉ
  {
    id: 'cq21',
    question: 'Quelle pratique est responsable de maintenir des informations précises sur les relations entre les composants IT ?',
    options: [
      'Gestion des actifs IT',
      'Gestion de la configuration des services',
      'Gestion des changements',
      'Monitoring et gestion des événements'
    ],
    correctAnswer: 1,
    explanation: 'Service Configuration Management maintient la CMDB avec les CIs et leurs RELATIONS/dépendances.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq22',
    question: 'Qu\'est-ce qui différencie un "événement" d\'un "incident" ?',
    options: [
      'L\'événement est plus grave que l\'incident',
      'L\'événement est un changement d\'état, l\'incident est une interruption de service',
      'L\'événement concerne le matériel, l\'incident concerne le logiciel',
      'Il n\'y a pas de différence'
    ],
    correctAnswer: 1,
    explanation: 'ÉVÉNEMENT = changement d\'état significatif (peut être normal). INCIDENT = interruption NON PLANIFIÉE ou réduction de qualité.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq23',
    question: 'Combien de pratiques ITIL 4 sont testées à l\'examen Foundation sur le total de 34 ?',
    options: [
      '10 pratiques',
      '15 pratiques',
      '20 pratiques',
      'Toutes les 34 pratiques'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen Foundation teste 15 pratiques sur les 34 total. Ces 15 pratiques représentent 24 questions sur 40 (60% de l\'examen).',
    difficulty: 'easy',
    category: 'exam'
  },
  {
    id: 'cq24',
    question: 'Pour réussir l\'examen ITIL 4 Foundation, il faut obtenir :',
    options: [
      '24 bonnes réponses sur 40 (60%)',
      '26 bonnes réponses sur 40 (65%)',
      '28 bonnes réponses sur 40 (70%)',
      '30 bonnes réponses sur 40 (75%)'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen ITIL 4 Foundation requiert 65% soit 26 bonnes réponses sur 40 questions.',
    difficulty: 'easy',
    category: 'exam'
  },
  {
    id: 'cq25',
    question: 'Combien de temps est alloué pour l\'examen ITIL 4 Foundation ?',
    options: [
      '45 minutes',
      '60 minutes', 
      '75 minutes',
      '90 minutes'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen dure 60 minutes pour 40 questions (1.5 min/question). +25% de temps pour non-anglophones.',
    difficulty: 'easy',
    category: 'exam'
  }
];

// Questions par niveau de difficulté
export const easyQuestions = comprehensiveQuiz.filter(q => q.difficulty === 'easy');
export const mediumQuestions = comprehensiveQuiz.filter(q => q.difficulty === 'medium');
export const hardQuestions = comprehensiveQuiz.filter(q => q.difficulty === 'hard');

// Questions par catégorie
export const fundamentalQuestions = comprehensiveQuiz.filter(q => q.category === 'fundamentals');
export const principleQuestions = comprehensiveQuiz.filter(q => q.category === 'principles');
export const dimensionQuestions = comprehensiveQuiz.filter(q => q.category === 'dimensions');
export const chainQuestions = comprehensiveQuiz.filter(q => q.category === 'chain');
export const practiceQuestions = comprehensiveQuiz.filter(q => q.category === 'practices');

// Simulation d'examen (questions difficiles et moyennes)
export const examSimulation = [
  ...mediumQuestions.slice(0, 25),
  ...hardQuestions.slice(0, 10),
  ...easyQuestions.slice(0, 5)
].sort(() => Math.random() - 0.5); // Mélange aléatoire