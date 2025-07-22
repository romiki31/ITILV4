import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Qu\'est-ce qui définit le mieux la "valeur" en ITIL v4 ?',
    options: [
      'Le coût d\'un service pour l\'organisation',
      'Le bénéfice, l\'utilité et l\'importance d\'un élément tel qu\'il est perçu',
      'La satisfaction client uniquement',
      'Le profit généré par un service'
    ],
    correctAnswer: 1,
    explanation: 'La valeur est subjective et correspond à la perception du consommateur. Elle est co-créée entre fournisseur et consommateur.',
    difficulty: 'easy',
    category: 'fundamentals'
  },
  {
    id: 'q2',
    question: 'Quelle est la différence entre "utilité" et "garantie" ?',
    options: [
      'Utilité = coût, Garantie = bénéfice',
      'Utilité = "fit for purpose", Garantie = "fit for use"',
      'Utilité = interne, Garantie = externe',
      'Il n\'y a pas de différence significative'
    ],
    correctAnswer: 1,
    explanation: 'Utilité = ce que fait le service (fonctionnalité - fit for purpose), Garantie = comment il le fait (performance - fit for use).',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'q3',
    question: 'Selon le principe "Optimiser et automatiser", que faut-il faire avant d\'automatiser un processus ?',
    options: [
      'Former tous les utilisateurs',
      'Acheter le meilleur outil disponible',
      'Optimiser d\'abord le processus',
      'Consulter tous les fournisseurs'
    ],
    correctAnswer: 2,
    explanation: 'Le principe stipule clairement : OPTIMISER d\'abord, AUTOMATISER ensuite. Ne jamais automatiser un processus défaillant.',
    difficulty: 'easy',
    category: 'principles'
  },
  {
    id: 'q4',
    question: 'Un serveur critique tombe en panne et impacte 500 utilisateurs. Quelle pratique traite cela EN PREMIER ?',
    options: [
      'Gestion des problèmes pour analyser la cause',
      'Gestion des changements pour planifier la réparation',
      'Gestion des incidents pour restaurer le service',
      'Amélioration continue pour éviter la récurrence'
    ],
    correctAnswer: 2,
    explanation: 'La gestion des incidents se concentre sur la restauration rapide du service. L\'analyse des causes viendra après avec la gestion des problèmes.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'q5',
    question: 'Dans une relation de service ITIL v4, la valeur est créée par :',
    options: [
      'Le fournisseur de service uniquement',
      'Le consommateur de service uniquement',
      'La co-création entre fournisseur et consommateur',
      'Les outils et technologies utilisés'
    ],
    correctAnswer: 2,
    explanation: 'Concept fondamental d\'ITIL v4 : la valeur est TOUJOURS co-créée entre le fournisseur et le consommateur.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'q6',
    question: 'Quel principe directeur recommande de ne pas repartir de zéro ?',
    options: [
      'Privilégier la valeur',
      'Commencer là où vous êtes',
      'Avancer par itération',
      'Penser holistique'
    ],
    correctAnswer: 1,
    explanation: 'Le principe "Commencer là où vous êtes" recommande d\'évaluer l\'existant et de construire dessus plutôt que de tout remplacer.',
    difficulty: 'easy',
    category: 'principles'
  },
  {
    id: 'q7',
    question: 'Combien y a-t-il d\'activités dans la chaîne de valeur des services (SVS) ?',
    options: [
      '4 activités',
      '5 activités',
      '6 activités',
      '7 activités'
    ],
    correctAnswer: 2,
    explanation: 'La chaîne de valeur comprend 6 activités : Planifier, Améliorer, Impliquer, Conception et transition, Obtenir/Construire, Fournir et soutenir.',
    difficulty: 'easy',
    category: 'chain'
  },
  {
    id: 'q8',
    question: 'Une organisation veut analyser pourquoi 30% de ses changements échouent. Quelle activité de la chaîne de valeur est principalement concernée ?',
    options: [
      'Planifier',
      'Améliorer',
      'Conception et transition',
      'Fournir et soutenir'
    ],
    correctAnswer: 1,
    explanation: 'L\'activité "Améliorer" analyse les métriques, identifie les causes d\'échec et propose des améliorations.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'q9',
    question: 'Quelle dimension d\'ITIL v4 couvre la culture organisationnelle et les compétences ?',
    options: [
      'Information et technologie',
      'Organisations et personnes',
      'Partenaires et fournisseurs',
      'Flux de valeur et processus'
    ],
    correctAnswer: 1,
    explanation: 'La dimension "Organisations et personnes" couvre la structure, la culture, les rôles, compétences et formation.',
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'q10',
    question: 'Un utilisateur demande l\'accès à une application standard de l\'entreprise. Comment cela doit-il être traité ?',
    options: [
      'Comme un incident à résoudre rapidement',
      'Comme un changement nécessitant une évaluation',
      'Comme une demande de service standard',
      'Comme un problème récurrent'
    ],
    correctAnswer: 2,
    explanation: 'Une demande d\'accès à une application standard est une demande de service pré-approuvée, gérée par la pratique de gestion des demandes de service.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'q11',
    question: 'Le même serveur tombe en panne pour la troisième fois ce mois. Après avoir restauré le service, que faut-il faire ?',
    options: [
      'Attendre la prochaine panne pour agir',
      'Lancer une gestion des problèmes pour analyser la cause racine',
      'Remplacer immédiatement le serveur',
      'Former les utilisateurs à gérer la panne'
    ],
    correctAnswer: 1,
    explanation: 'Des pannes récurrentes indiquent un problème sous-jacent. La gestion des problèmes doit analyser et éliminer la cause racine.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'q12',
    question: 'Quel est le pourcentage minimum requis pour réussir l\'examen ITIL v4 Foundation ?',
    options: [
      '60%',
      '65%',
      '70%',
      '75%'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen ITIL v4 Foundation requiert 65% de bonnes réponses (26 questions correctes sur 40) pour être réussi.',
    difficulty: 'easy',
    category: 'exam'
  },
  {
    id: 'q13',
    question: 'Combien de temps avez-vous pour l\'examen ITIL v4 Foundation ?',
    options: [
      '45 minutes',
      '60 minutes',
      '75 minutes',
      '90 minutes'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen dure 60 minutes pour 40 questions, soit environ 1,5 minute par question.',
    difficulty: 'easy',
    category: 'exam'
  },
  {
    id: 'q14',
    question: 'Quelle pratique a pour objectif principal d\'être le point de contact unique entre le fournisseur et les utilisateurs ?',
    options: [
      'Gestion des incidents',
      'Gestion des demandes de service',
      'Centre de services',
      'Gestion des relations métier'
    ],
    correctAnswer: 2,
    explanation: 'Le centre de services (service desk) est défini comme le point de contact unique entre le fournisseur et les utilisateurs.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'q15',
    question: 'Une équipe veut améliorer un processus qui fonctionne mal. Quel principe directeur s\'applique le mieux ?',
    options: [
      'Commencer là où vous êtes',
      'Simplicité et praticité',
      'Optimiser et automatiser',
      'Tous les principes ci-dessus'
    ],
    correctAnswer: 3,
    explanation: 'Les principes directeurs fonctionnent ensemble : commencer par l\'existant, l\'optimiser simplement, puis automatiser si nécessaire.',
    difficulty: 'hard',
    category: 'principles'
  },
  {
    id: 'q16',
    question: 'Qu\'est-ce qui différencie un "service" d\'un "produit" en ITIL v4 ?',
    options: [
      'Le service est tangible, le produit est intangible',
      'Le service est un moyen, le produit est une configuration',
      'Le service coûte plus cher que le produit',
      'Il n\'y a pas de différence significative'
    ],
    correctAnswer: 1,
    explanation: 'Service = moyen de faciliter des résultats, Produit = configuration de ressources. Distinction fondamentale d\'ITIL v4.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'q17',
    question: 'L\'activité "Impliquer" de la chaîne de valeur se concentre principalement sur :',
    options: [
      'La gestion des fournisseurs externes',
      'La formation du personnel interne',
      'La compréhension des besoins des parties prenantes',
      'L\'amélioration des processus'
    ],
    correctAnswer: 2,
    explanation: 'Impliquer assure une bonne compréhension des besoins des parties prenantes et maintient la transparence.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'q18',
    question: 'Les 4 dimensions d\'ITIL v4 doivent être considérées :',
    options: [
      'Une par une, dans l\'ordre',
      'Seulement celle qui pose problème',
      'Collectivement et simultanément',
      'Seulement lors de la conception'
    ],
    correctAnswer: 2,
    explanation: 'Les 4 dimensions sont interdépendantes et doivent être considérées collectivement pour une gestion efficace.',
    difficulty: 'medium',
    category: 'dimensions'
  },
  {
    id: 'q19',
    question: 'Quel type de changement peut être pré-autorisé et exécuté sans évaluation de risque supplémentaire ?',
    options: [
      'Changement normal',
      'Changement d\'urgence',
      'Changement standard',
      'Changement majeur'
    ],
    correctAnswer: 2,
    explanation: 'Un changement standard est pré-autorisé, à faible risque et suit une procédure établie.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'q20',
    question: 'Dans le contexte ITIL v4, qui sont les trois rôles de consommation ?',
    options: [
      'Utilisateur, Administrateur, Gestionnaire',
      'Client, Utilisateur, Sponsor',
      'Demandeur, Approbateur, Implémenteur',
      'Interne, Externe, Partenaire'
    ],
    correctAnswer: 1,
    explanation: 'Les trois rôles sont : Client (définit besoins), Utilisateur (utilise), Sponsor (autorise budget).',
    difficulty: 'easy',
    category: 'fundamentals'
  }
];

export const examSimulationQuestions = quizQuestions.filter(q => 
  q.difficulty === 'medium' || q.difficulty === 'hard'
).slice(0, 40);

export const flashcards = [
  {
    id: 'f1',
    front: 'Qu\'est-ce que la VALEUR en ITIL v4 ?',
    back: 'Le bénéfice, l\'utilité et l\'importance perçus (SUBJECTIF)',
    category: 'fundamentals'
  },
  {
    id: 'f2',
    front: 'Service vs Produit ?',
    back: 'Service = MOYEN<br>Produit = CONFIGURATION',
    category: 'fundamentals'
  },
  {
    id: 'f3',
    front: 'Utilité vs Garantie ?',
    back: 'Utilité = Fit for PURPOSE<br>Garantie = Fit for USE',
    category: 'fundamentals'
  },
  {
    id: 'f4',
    front: 'Incident vs Problème ?',
    back: 'Incident = RESTAURER<br>Problème = CAUSE RACINE',
    category: 'practices'
  },
  {
    id: 'f5',
    front: 'Ordre du Principe 7 ?',
    back: 'OPTIMISER d\'abord<br>AUTOMATISER ensuite',
    category: 'principles'
  },
  {
    id: 'f6',
    front: '3 rôles de consommation ?',
    back: 'CLIENT = besoins<br>UTILISATEUR = utilise<br>SPONSOR = budget',
    category: 'fundamentals'
  },
  {
    id: 'f7',
    front: 'Activité PLANIFIER = ?',
    back: 'Vision, stratégie,<br>coordination long terme',
    category: 'chain'
  },
  {
    id: 'f8',
    front: 'FOURNIR ET SOUTENIR = ?',
    back: 'Opérations quotidiennes,<br>incidents, monitoring',
    category: 'chain'
  },
  {
    id: 'f9',
    front: 'SVS entrées ?',
    back: 'OPPORTUNITÉ<br>+ DEMANDE',
    category: 'fundamentals'
  },
  {
    id: 'f10',
    front: 'SVS sortie ?',
    back: 'VALEUR<br>(co-créée)',
    category: 'fundamentals'
  },
  {
    id: 'f11',
    front: 'Combien de principes directeurs ?',
    back: '7 PRINCIPES<br>directeurs',
    category: 'principles'
  },
  {
    id: 'f12',
    front: 'Combien de dimensions ?',
    back: '4 DIMENSIONS<br>(à considérer ensemble)',
    category: 'dimensions'
  },
  {
    id: 'f13',
    front: 'Format examen Foundation ?',
    back: '40 questions<br>60 minutes<br>65% requis',
    category: 'exam'
  },
  {
    id: 'f14',
    front: 'Centre de services = ?',
    back: 'Point de contact UNIQUE<br>entre fournisseur et utilisateurs',
    category: 'practices'
  },
  {
    id: 'f15',
    front: 'Amélioration continue ?',
    back: 'Activité RÉCURRENTE<br>à tous les niveaux',
    category: 'practices'
  }
];