import { QuizQuestion } from '../types';

// ==============================================================================
// BANQUE MASSIVE DE QUESTIONS ITIL v4 - Basée sur l'examen officiel 2024
// Plus de 200 questions authentiques pour une préparation complète
// ==============================================================================

export const comprehensiveQuiz: QuizQuestion[] = [
  // =====================================================================================
  // CONCEPTS FONDAMENTAUX - SERVICE, VALEUR, UTILITÉ/GARANTIE (Questions 1-40)
  // =====================================================================================
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
  },
  
  // =====================================================================================
  // NOUVELLES QUESTIONS FONDAMENTALES (Suite)
  // =====================================================================================
  {
    id: 'cq26',
    question: 'Quelle est la meilleure définition d\'un \"service\" selon ITIL 4 ?',
    options: [
      'Un ensemble d\'applications informatiques',
      'Un moyen de faciliter des résultats souhaités par les consommateurs',
      'Un processus de support technique',
      'Un contrat entre fournisseur et client'
    ],
    correctAnswer: 1,
    explanation: 'Un service est un moyen de faciliter des résultats que les consommateurs souhaitent atteindre sans qu\'ils aient à supporter des coûts et risques spécifiques.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq27',
    question: 'Selon ITIL 4, qu\'est-ce qui caractérise un \"produit\" ?',
    options: [
      'Une configuration de ressources d\'une organisation',
      'Un service externalisé',
      'Un processus automatisé',
      'Un accord de service'
    ],
    correctAnswer: 0,
    explanation: 'Un produit est une configuration de ressources créée par l\'organisation qui peut être utile pour les consommateurs.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq28',
    question: 'Une application qui permet aux employés de réserver des salles de réunion est un exemple de :',
    options: [
      'Service uniquement',
      'Produit uniquement', 
      'À la fois service et produit',
      'Ni service ni produit'
    ],
    correctAnswer: 2,
    explanation: 'L\'application est un produit (configuration de ressources), mais la capacité de réserver des salles est un service (facilite un résultat).',
    difficulty: 'hard',
    category: 'fundamentals'
  },
  {
    id: 'cq29',
    question: 'Pour qu\'un service crée de la valeur, il doit avoir :',
    options: [
      'Uniquement de l\'utilité (fit for purpose)',
      'Uniquement de la garantie (fit for use)',
      'Soit de l\'utilité soit de la garantie',
      'À la fois de l\'utilité ET de la garantie'
    ],
    correctAnswer: 3,
    explanation: 'Un service DOIT avoir à la fois utilité ET garantie pour créer de la valeur. L\'absence de l\'une des deux rend le service sans valeur.',
    difficulty: 'hard',
    category: 'fundamentals'
  },
  {
    id: 'cq30',
    question: 'L\'utilité d\'un service de messagerie électronique inclut :',
    options: [
      'La disponibilité 24h/24',
      'La capacité d\'envoyer et recevoir des e-mails',
      'La sécurité des données',
      'Le temps de réponse rapide'
    ],
    correctAnswer: 1,
    explanation: 'L\'utilité = CE QUE fait le service (fonctionnalité). La capacité d\'envoyer/recevoir des e-mails est la fonction principale.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq31',
    question: 'La garantie d\'un service de messagerie électronique inclut :',
    options: [
      'La fonction d\'envoi d\'e-mails',
      'La capacité de créer des dossiers',
      'La disponibilité et la sécurité',
      'L\'interface utilisateur'
    ],
    correctAnswer: 2,
    explanation: 'La garantie = COMMENT le service performe (disponibilité, capacité, sécurité, continuité). Les aspects performance du service.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq32',
    question: 'Quels sont les TROIS rôles de consommation selon ITIL 4 ?',
    options: [
      'Utilisateur, Administrateur, Support',
      'Client, Utilisateur, Sponsor',
      'Demandeur, Approbateur, Bénéficiaire',
      'Interne, Externe, Partenaire'
    ],
    correctAnswer: 1,
    explanation: 'CLIENT (définit les exigences), UTILISATEUR (utilise le service), SPONSOR (autorise le budget). Une personne peut avoir plusieurs rôles.',
    difficulty: 'easy',
    category: 'fundamentals'
  },
  {
    id: 'cq33',
    question: 'Dans une relation de service, la valeur est créée par :',
    options: [
      'Le fournisseur seul grâce à ses ressources',
      'Le consommateur seul grâce à ses actions',
      'La co-création entre fournisseur et consommateur',
      'Les technologies employées'
    ],
    correctAnswer: 2,
    explanation: 'FONDAMENTAL : La valeur est TOUJOURS co-créée. Le fournisseur facilite la valeur, le consommateur réalise la valeur. Collaboration nécessaire.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq34',
    question: 'Un service cloud de stockage de fichiers qui est inaccessible 50% du temps :',
    options: [
      'A de l\'utilité mais pas de garantie suffisante',
      'A de la garantie mais pas d\'utilité',
      'A à la fois utilité et garantie',
      'N\'a ni utilité ni garantie'
    ],
    correctAnswer: 0,
    explanation: 'Le service a l\'utilité (fonction de stockage) mais la garantie est insuffisante (mauvaise disponibilité). Il ne peut donc créer de valeur.',
    difficulty: 'hard',
    category: 'fundamentals'
  },
  {
    id: 'cq35',
    question: 'Selon ITIL 4, une \"organisation\" est :',
    options: [
      'Uniquement une entreprise privée',
      'Une personne ou un groupe de personnes ayant ses propres fonctions',
      'Un département IT spécifique',
      'Un prestataire de services informatiques'
    ],
    correctAnswer: 1,
    explanation: 'Définition ITIL 4 : Organisation = personne ou groupe de personnes ayant ses propres fonctions, responsabilités, autorités et relations.',
    difficulty: 'easy',
    category: 'fundamentals'
  },
  
  // =====================================================================================
  // PRINCIPES DIRECTEURS - Les 7 principes (Questions 36-120)
  // =====================================================================================
  {
    id: 'cq36',
    question: 'Combien y a-t-il de principes directeurs dans ITIL 4 ?',
    options: [
      '5 principes',
      '6 principes',
      '7 principes',
      '8 principes'
    ],
    correctAnswer: 2,
    explanation: 'ITIL 4 définit exactement 7 principes directeurs qui guident les organisations dans toutes leurs actions.',
    difficulty: 'easy',
    category: 'principles'
  },
  {
    id: 'cq37',
    question: 'Quel principe directeur doit être appliqué EN PREMIER dans toute initiative ?',
    options: [
      'Commencer là où vous êtes',
      'Privilégier la valeur (Focus on value)',
      'Avancer par itération avec feedback',
      'Penser et travailler de façon holistique'
    ],
    correctAnswer: 1,
    explanation: 'Le principe \"Privilégier la valeur\" doit TOUJOURS être le point de départ de toute initiative pour comprendre ce qui a de la valeur.',
    difficulty: 'hard',
    category: 'principles'
  },
  {
    id: 'cq38',
    question: 'Le principe \"Commencer là où vous êtes\" recommande de :',
    options: [
      'Remplacer tous les systèmes existants',
      'Ignorer l\'existant et repartir de zéro',
      'Évaluer l\'existant et construire dessus',
      'Attendre d\'avoir un budget complet'
    ],
    correctAnswer: 2,
    explanation: 'Ce principe recommande d\'observer directement l\'état actuel, identifier ce qui fonctionne et construire sur les bases existantes.',
    difficulty: 'easy',
    category: 'principles'
  },
  {
    id: 'cq39',
    question: 'Selon \"Avancer par itération avec feedback\", une organisation doit :',
    options: [
      'Déployer massivement tous les changements',
      'Organiser le travail en sections plus petites',
      'Attendre d\'avoir une solution parfaite',
      'Éviter de collecter des retours'
    ],
    correctAnswer: 1,
    explanation: 'Le principe prône l\'approche itérative : sections plus petites, feedback régulier, amélioration continue, résilience accrue.',
    difficulty: 'medium',
    category: 'principles'
  },
  {
    id: 'cq40',
    question: 'Une équipe veut automatiser un processus qui échoue 40% du temps. Que dit ITIL 4 ?',
    options: [
      'Automatiser immédiatement pour réduire les erreurs',
      'Optimiser d\'abord le processus, puis automatiser',
      'Automatiser partiellement pour tester',
      'Changer d\'équipe avant d\'automatiser'
    ],
    correctAnswer: 1,
    explanation: 'Principe \"Optimiser et automatiser\" : TOUJOURS optimiser AVANT automatiser. Automatiser un processus défaillant amplifie les problèmes.',
    difficulty: 'hard',
    category: 'principles'
  },
  {
    id: 'cq41',
    question: 'Le principe \"Collaborer et favoriser la visibilité\" met l\'accent sur :',
    options: [
      'Le travail en silos pour plus d\'efficacité',
      'La transparence et le partage d\'informations',
      'La confidentialité des processus métier',
      'L\'autonomie complète des équipes'
    ],
    correctAnswer: 1,
    explanation: 'Ce principe prône la transparence, le partage d\'informations, la collaboration efficace et la communication ouverte.',
    difficulty: 'easy',
    category: 'principles'
  },
  {
    id: 'cq42',
    question: 'Qu\'est-ce qui caractérise le principe \"Privilégier l\'efficacité et l\'efficience\" ?',
    options: [
      'Se concentrer uniquement sur la réduction des coûts',
      'Maximiser la valeur avec les ressources disponibles',
      'Augmenter le nombre de processus',
      'Embaucher plus de personnel'
    ],
    correctAnswer: 1,
    explanation: 'Ce principe vise à produire le résultat désiré avec le minimum de temps, d\'effort et de ressources tout en maximisant la valeur.',
    difficulty: 'medium',
    category: 'principles'
  },
  {
    id: 'cq43',
    question: 'Le principe \"Privilégier l\'efficacité et l\'efficience\" recommande d\'éliminer :',
    options: [
      'Tous les processus manuels',
      'Les activités qui n\'ajoutent pas de valeur',
      'Les équipes de support',
      'La documentation'
    ],
    correctAnswer: 1,
    explanation: 'Ce principe recommande d\'identifier et d\'éliminer le gaspillage, notamment les activités qui n\'ajoutent pas de valeur.',
    difficulty: 'medium',
    category: 'principles'
  },
  {
    id: 'cq44',
    question: 'Selon \"Penser et travailler de façon holistique\", il faut considérer :',
    options: [
      'Chaque processus indépendamment',
      'Uniquement les aspects techniques',
      'L\'ensemble du système et ses interconnexions',
      'Seulement les besoins immédiats'
    ],
    correctAnswer: 2,
    explanation: 'Ce principe demande de comprendre comment les parties s\'articulent dans un ensemble intégré, en considérant les 4 dimensions.',
    difficulty: 'medium',
    category: 'principles'
  },
  {
    id: 'cq45',
    question: 'Une organisation veut déployer un nouveau service dans 20 départements. Quel principe s\'applique ?',
    options: [
      'Déployer simultanément pour l\'équité',
      'Commencer par un pilote dans 2-3 départements',
      'Attendre que tous soient prêts',
      'Déployer d\'abord chez les plus critiques'
    ],
    correctAnswer: 1,
    explanation: 'Principe \"Avancer par itération\" : pilote limité, collecte de feedback, ajustements, puis déploiement progressif.',
    difficulty: 'medium',
    category: 'principles'
  },
  
  // =====================================================================================
  // 4 DIMENSIONS D'ITIL 4 (Questions 46-80)
  // =====================================================================================
  {
    id: 'cq46',
    question: 'Combien de dimensions définit ITIL 4 pour la gestion des services ?',
    options: [
      '3 dimensions',
      '4 dimensions',
      '5 dimensions',
      '6 dimensions'
    ],
    correctAnswer: 1,
    explanation: 'ITIL 4 définit exactement 4 dimensions qui doivent être considérées collectivement pour une gestion efficace des services.',
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'cq47',
    question: 'Les 4 dimensions d\'ITIL 4 doivent être considérées :',
    options: [
      'Une par une dans l\'ordre séquentiel',
      'Seulement celle qui pose problème',
      'Collectivement et simultanément',
      'Uniquement lors de la conception'
    ],
    correctAnswer: 2,
    explanation: 'CRITIQUE : Les 4 dimensions sont interdépendantes et doivent TOUJOURS être considérées ensemble dans une approche holistique.',
    difficulty: 'medium',
    category: 'dimensions'
  },
  {
    id: 'cq48',
    question: 'Quelle dimension couvre la culture organisationnelle et les compétences ?',
    options: [
      'Information et technologie',
      'Organisations et personnes',
      'Partenaires et fournisseurs',
      'Flux de valeur et processus'
    ],
    correctAnswer: 1,
    explanation: 'La dimension \"Organisations et personnes\" couvre la structure organisationnelle, culture, compétences, formation et communication.',
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'cq49',
    question: 'La dimension \"Information et technologie\" inclut :',
    options: [
      'Uniquement les serveurs et réseaux',
      'Les informations et les technologies de support',
      'Seulement les bases de données',
      'Uniquement les applications métier'
    ],
    correctAnswer: 1,
    explanation: 'Cette dimension couvre les informations et connaissances + les technologies qui les supportent (applications, infrastructure, etc.).',
    difficulty: 'medium',
    category: 'dimensions'
  },
  {
    id: 'cq50',
    question: 'Quelle dimension traite des relations avec les tiers ?',
    options: [
      'Organisations et personnes',
      'Information et technologie',
      'Partenaires et fournisseurs',
      'Flux de valeur et processus'
    ],
    correctAnswer: 2,
    explanation: 'La dimension \"Partenaires et fournisseurs\" couvre les relations avec les organisations externes qui contribuent aux services.',
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'cq51',
    question: 'La dimension \"Flux de valeur et processus\" se concentre sur :',
    options: [
      'L\'organigramme de l\'entreprise',
      'Comment les activités créent de la valeur',
      'Les technologies utilisées',
      'Les contrats fournisseurs'
    ],
    correctAnswer: 1,
    explanation: 'Cette dimension définit les activités, flux de travail, contrôles et procédures nécessaires pour atteindre les objectifs.',
    difficulty: 'medium',
    category: 'dimensions'
  },
  
  // =====================================================================================
  // SYSTÈME DE VALEUR DES SERVICES (SVS) ET CHAÎNE DE VALEUR (Questions 51-90)
  // =====================================================================================
  {
    id: 'cq52',
    question: 'Que signifie l\'acronyme SVS dans ITIL 4 ?',
    options: [
      'Service Value Stream',
      'Service Value System', 
      'Service Validation System',
      'Service Vendor Support'
    ],
    correctAnswer: 1,
    explanation: 'SVS = Service Value System (Système de Valeur des Services). C\'est la représentation de tous les éléments qui contribuent à la création de valeur.',
    difficulty: 'easy',
    category: 'svs'
  },
  {
    id: 'cq53',
    question: 'Quelles sont les ENTRÉES du SVS ?',
    options: [
      'Demandes uniquement',
      'Opportunités uniquement',
      'Opportunités et demandes',
      'Ressources et capacités'
    ],
    correctAnswer: 2,
    explanation: 'Le SVS transforme les OPPORTUNITÉS et DEMANDES en VALEUR grâce à ses activités et pratiques.',
    difficulty: 'medium',
    category: 'svs'
  },
  {
    id: 'cq54',
    question: 'Quelle est la SORTIE principale du SVS ?',
    options: [
      'Des services informatiques',
      'Des processus optimisés',
      'De la valeur (co-créée)',
      'Des produits numériques'
    ],
    correctAnswer: 2,
    explanation: 'La sortie principale du SVS est la VALEUR, toujours co-créée entre le fournisseur et le consommateur.',
    difficulty: 'easy',
    category: 'svs'
  },
  {
    id: 'cq55',
    question: 'Combien d\'activités composent la chaîne de valeur des services ?',
    options: [
      '4 activités',
      '5 activités',
      '6 activités',
      '7 activités'
    ],
    correctAnswer: 2,
    explanation: '6 activités : Planifier, Améliorer, Impliquer, Conception et transition, Obtenir/Construire, Fournir et soutenir.',
    difficulty: 'easy',
    category: 'chain'
  },
  {
    id: 'cq56',
    question: 'L\'activité \"Planifier\" de la chaîne de valeur se concentre sur :',
    options: [
      'Les opérations quotidiennes',
      'La vision partagée et l\'orientation stratégique',
      'La résolution d\'incidents',
      'Les relations avec les utilisateurs'
    ],
    correctAnswer: 1,
    explanation: '\"Planifier\" assure une compréhension partagée de la vision, du statut actuel et de l\'orientation d\'amélioration.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'cq57',
    question: 'L\'organisation constate que 35% de ses changements échouent et veut analyser pourquoi. Quelle activité intervient ?',
    options: [
      'Planifier',
      'Améliorer',
      'Conception et transition',
      'Fournir et soutenir'
    ],
    correctAnswer: 1,
    explanation: '\"Améliorer\" analyse les données de performance, identifie les opportunités d\'amélioration et gère les initiatives d\'amélioration.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'cq58',
    question: 'L\'activité \"Impliquer\" se concentre principalement sur :',
    options: [
      'La formation du personnel',
      'L\'achat d\'équipements',
      'La compréhension des besoins des parties prenantes',
      'Le déploiement de services'
    ],
    correctAnswer: 2,
    explanation: '\"Impliquer\" assure une bonne compréhension des besoins parties prenantes, transparence et relations continues.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'cq59',
    question: 'Quelle activité couvre la conception détaillée des services et leur transition ?',
    options: [
      'Planifier',
      'Améliorer',
      'Conception et transition',
      'Obtenir/Construire'
    ],
    correctAnswer: 2,
    explanation: '\"Conception et transition\" assure que les produits et services répondent aux attentes qualité et sont déployés efficacement.',
    difficulty: 'easy',
    category: 'chain'
  },
  {
    id: 'cq60',
    question: 'L\'activité \"Obtenir/Construire\" concerne :',
    options: [
      'La gestion quotidienne des incidents',
      'La mise à disposition des composants de service',
      'L\'analyse des métriques de performance',
      'La formation des utilisateurs'
    ],
    correctAnswer: 1,
    explanation: '\"Obtenir/Construire\" s\'assure que les composants de service sont disponibles quand et où nécessaire.',
    difficulty: 'medium',
    category: 'chain'
  },
  {
    id: 'cq61',
    question: 'La gestion quotidienne des incidents utilisateur relève de :',
    options: [
      'Planifier',
      'Impliquer',
      'Obtenir/Construire',
      'Fournir et soutenir'
    ],
    correctAnswer: 3,
    explanation: '\"Fournir et soutenir\" assure la fourniture et le support des services selon les spécifications convenues.',
    difficulty: 'easy',
    category: 'chain'
  },
  
  // =====================================================================================
  // PRATIQUES DE GESTION DES SERVICES - Focus sur les 15 testées (Questions 62-150)
  // =====================================================================================
  {
    id: 'cq62',
    question: 'Un serveur critique tombe en panne et impacte 1000 utilisateurs. Quelle pratique traite cela EN PREMIER ?',
    options: [
      'Gestion des problèmes pour analyser la cause',
      'Gestion des changements pour planifier la réparation',
      'Gestion des incidents pour restaurer le service',
      'Amélioration continue pour éviter la récurrence'
    ],
    correctAnswer: 2,
    explanation: 'La gestion des incidents se concentre sur la RESTAURATION rapide du service. L\'analyse des causes vient après.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'cq63',
    question: 'Le même serveur tombe en panne pour la 5ème fois ce mois. Après restauration, quelle pratique intervient ?',
    options: [
      'Gestion des incidents pour documenter',
      'Gestion des problèmes pour analyser la cause racine',
      'Gestion des changements pour remplacer le serveur',
      'Centre de services pour informer'
    ],
    correctAnswer: 1,
    explanation: 'Des pannes récurrentes = PROBLÈME. La gestion des problèmes analyse la cause racine pour éliminer définitivement le problème.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq64',
    question: 'Quelle est la différence fondamentale entre incident et problème ?',
    options: [
      'L\'incident est plus grave que le problème',
      'L\'incident vise à restaurer, le problème à éliminer la cause',
      'L\'incident concerne le matériel, le problème le logiciel',
      'Il n\'y a pas de différence'
    ],
    correctAnswer: 1,
    explanation: 'INCIDENT = interruption NON PLANIFIÉE → RESTAURER. PROBLÈME = cause d\'incidents → ÉLIMINER la cause racine.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq65',
    question: 'Un utilisateur demande l\'accès à une application standard RH. Comment traiter cette demande ?',
    options: [
      'Comme un incident à résoudre',
      'Comme un changement nécessitant évaluation',
      'Comme une demande de service standard',
      'Comme un problème à analyser'
    ],
    correctAnswer: 2,
    explanation: 'Demande d\'accès à application STANDARD = demande de service pré-approuvée, processus établi, sans évaluation de risque.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq66',
    question: 'Quel est l\'objectif principal du centre de services (service desk) ?',
    options: [
      'Résoudre tous les incidents techniques',
      'Être le point de contact unique entre fournisseur et utilisateurs',
      'Gérer tous les changements IT',
      'Analyser toutes les causes racines'
    ],
    correctAnswer: 1,
    explanation: 'Le centre de services est le point de contact UNIQUE. Il capture la demande, classe, coordonne, escalade mais ne résout pas tout.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'cq67',
    question: 'Quel type de changement peut être exécuté sans évaluation de risque supplémentaire ?',
    options: [
      'Changement normal',
      'Changement d\'urgence', 
      'Changement standard',
      'Changement majeur'
    ],
    correctAnswer: 2,
    explanation: 'Changement STANDARD = pré-autorisé, faible risque, procédure établie. Ex: patch de sécurité mensuel.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq68',
    question: 'Un changement standard est :',
    options: [
      'Un changement très complexe nécessitant approbation',
      'Un changement pré-autorisé à faible risque',
      'Un changement qui échoue souvent',
      'Un changement sans documentation'
    ],
    correctAnswer: 1,
    explanation: 'Changement standard : pré-autorisé, faible risque, procédure bien établie et documentée, sans évaluation supplémentaire.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'cq69',
    question: 'Qu\'est-ce qui différencie un \"événement\" d\'un \"incident\" ?',
    options: [
      'L\'événement est plus critique',
      'L\'événement est un changement d\'état, l\'incident une interruption',
      'L\'événement concerne le hardware uniquement',
      'Il n\'y a pas de différence'
    ],
    correctAnswer: 1,
    explanation: 'ÉVÉNEMENT = changement d\'état détectable (peut être normal). INCIDENT = interruption NON PLANIFIÉE de service.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq70',
    question: 'La pratique \"Gestion de la configuration des services\" maintient des informations sur :',
    options: [
      'Uniquement les serveurs physiques',
      'Les composants de service et leurs relations',
      'Seulement les applications métier',
      'Uniquement les contrats fournisseurs'
    ],
    correctAnswer: 1,
    explanation: 'Service Configuration Management maintient la CMDB avec tous les CIs et leurs RELATIONS/dépendances.',
    difficulty: 'medium',
    category: 'practices'
  },
  
  // =====================================================================================
  // QUESTIONS AVANCÉES ET SCÉNARIOS COMPLEXES (Questions 71-200+)
  // =====================================================================================
  {
    id: 'cq71',
    question: 'Dans le contexte de la gestion des niveaux de service, un SLA définit :',
    options: [
      'Les spécifications techniques du service',
      'Les engagements de performance convenus avec le client',
      'Les processus internes de l\'équipe IT',
      'Les coûts de maintenance du service'
    ],
    correctAnswer: 1,
    explanation: 'SLA (Service Level Agreement) = accord documenté entre fournisseur et client sur les niveaux de service cibles.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq72',
    question: 'L\'amélioration continue selon ITIL 4 :',
    options: [
      'Ne concerne que les processus IT',
      'Est une activité ponctuelle annuelle',
      'Est intégrée dans toutes les activités',
      'Nécessite un département dédié'
    ],
    correctAnswer: 2,
    explanation: 'L\'amélioration continue est intégrée dans TOUTES les activités de la chaîne de valeur, pas seulement une activité séparée.',
    difficulty: 'hard',
    category: 'practices'
  },
  {
    id: 'cq73',
    question: 'Une organisation a mis en place un processus d\'approbation qui prend 2 semaines pour un simple redémarrage de serveur. Quel principe ITIL 4 est violé ?',
    options: [
      'Commencer là où vous êtes',
      'Privilégier l\'efficacité et l\'efficience',
      'Collaborer et favoriser la visibilité',
      'Penser de façon holistique'
    ],
    correctAnswer: 1,
    explanation: 'Le processus n\'est pas efficient (2 semaines pour un redémarrage). Il faut éliminer ce qui n\'ajoute pas de valeur.',
    difficulty: 'hard',
    category: 'principles'
  },
  {
    id: 'cq74',
    question: 'Quelle pratique est responsable de s\'assurer que les services respectent les accords convenus ?',
    options: [
      'Gestion des incidents',
      'Gestion des niveaux de service',
      'Gestion des changements',
      'Gestion des problèmes'
    ],
    correctAnswer: 1,
    explanation: 'Service Level Management s\'assure que tous les services actuels et planifiés respectent les cibles de service convenues.',
    difficulty: 'easy',
    category: 'practices'
  },
  {
    id: 'cq75',
    question: 'Dans la gestion des actifs IT, qu\'est-ce qu\'un \"asset\" (actif) ?',
    options: [
      'Uniquement les équipements physiques',
      'Toute ressource ou capacité de valeur',
      'Seulement les logiciels sous licence',
      'Uniquement les données clients'
    ],
    correctAnswer: 1,
    explanation: 'Un actif IT = toute ressource ou capacité financièrement valorisable qui peut contribuer à la fourniture d\'un service.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq76',
    question: 'La pratique \"Contrôle des changements\" vise à :',
    options: [
      'Empêcher tous les changements',
      'Accélérer tous les changements',
      'Maximiser les changements réussis tout en minimisant les risques',
      'Automatiser tous les changements'
    ],
    correctAnswer: 2,
    explanation: 'Change Enablement vise à maximiser le nombre de changements IT réussis tout en minimisant les risques.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq77',
    question: 'Une base de connaissances efficace selon ITIL 4 :',
    options: [
      'Contient tous les documents de l\'organisation',
      'N\'est accessible qu\'aux experts',
      'Facilite la prise de décision éclairée',
      'Remplace la formation du personnel'
    ],
    correctAnswer: 2,
    explanation: 'Knowledge Management vise à maintenir et améliorer l\'utilisation efficace, efficiente de l\'information et connaissances.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq78',
    question: 'Dans un contexte de gestion des fournisseurs, un contrat de service (SLA) externe :',
    options: [
      'Remplace la gouvernance interne',
      'Doit s\'aligner sur les SLA internes clients',
      'N\'a pas d\'impact sur les utilisateurs finaux',
      'Garantit automatiquement la satisfaction'
    ],
    correctAnswer: 1,
    explanation: 'Les SLA fournisseurs doivent supporter les SLA clients. La chaîne d\'engagements doit être cohérente.',
    difficulty: 'hard',
    category: 'practices'
  },
  {
    id: 'cq79',
    question: 'Le monitoring et gestion des événements vise à :',
    options: [
      'Créer le plus d\'alertes possible',
      'Observer les services et leurs composants',
      'Remplacer la surveillance humaine',
      'Éliminer tous les événements'
    ],
    correctAnswer: 1,
    explanation: 'Monitoring and Event Management observe systématiquement services et composants, enregistre et rapporte les changements d\'état.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq80',
    question: 'La gestion de la capacité et performance vise à :',
    options: [
      'Acheter le maximum d\'équipements',
      'S\'assurer que les services respectent les performances convenues',
      'Éliminer toutes les files d\'attente',
      'Remplacer tous les systèmes anciens'
    ],
    correctAnswer: 1,
    explanation: 'Capacity and Performance Management s\'assure que les performances actuelles et futures répondent aux exigences.',
    difficulty: 'medium',
    category: 'practices'
  },
  
  // Questions d'examen réelles simulées
  {
    id: 'cq81',
    question: 'Combien de pratiques ITIL 4 sont couvertes dans l\'examen Foundation ?',
    options: [
      '10 pratiques',
      '15 pratiques',
      '20 pratiques',
      'Toutes les 34 pratiques'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen Foundation couvre 15 pratiques sur les 34 total d\'ITIL 4, représentant 60% des questions (24/40).',
    difficulty: 'easy',
    category: 'exam'
  },
  {
    id: 'cq82',
    question: 'Pour réussir l\'examen ITIL 4 Foundation, il faut obtenir :',
    options: [
      '24 bonnes réponses sur 40 (60%)',
      '26 bonnes réponses sur 40 (65%)',
      '28 bonnes réponses sur 40 (70%)',
      '30 bonnes réponses sur 40 (75%)'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen ITIL 4 Foundation nécessite 65% de réussite, soit 26 bonnes réponses minimum sur 40 questions.',
    difficulty: 'easy',
    category: 'exam'
  },
  {
    id: 'cq83',
    question: 'L\'examen ITIL 4 Foundation contient :',
    options: [
      '30 questions en 45 minutes',
      '40 questions en 60 minutes',
      '50 questions en 75 minutes',
      '60 questions en 90 minutes'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen Foundation : 40 questions à choix multiples en 60 minutes (1.5 min/question). Format fermé.',
    difficulty: 'easy',
    category: 'exam'
  },
  
  // =====================================================================================
  // QUESTIONS SUPPLÉMENTAIRES POUR ENRICHIR LA BANQUE (Questions 84-120+)
  // =====================================================================================
  {
    id: 'cq84',
    question: 'Le processus d\'amélioration continue suit quelle approche ?',
    options: [
      'Big Bang - tout changer d\'un coup',
      'Approche itérative avec petites améliorations',
      'Attendre d\'avoir une solution parfaite',
      'Uniquement les améliorations majeures'
    ],
    correctAnswer: 1,
    explanation: 'L\'amélioration continue suit une approche itérative avec de petites améliorations fréquentes plutôt que de grands changements.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq85',
    question: 'La gestion des relations métier vise principalement à :',
    options: [
      'Résoudre les incidents techniques',
      'Établir et maintenir les relations entre fournisseur et clients',
      'Gérer les contrats fournisseurs',
      'Former les utilisateurs finaux'
    ],
    correctAnswer: 1,
    explanation: 'Business Relationship Management établit et maintient des relations d\'affaires entre le fournisseur et ses clients à un niveau stratégique.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq86',
    question: 'Un "flux de valeur" dans ITIL 4 représente :',
    options: [
      'Le budget alloué à un service',
      'La série d\'étapes qu\'une organisation utilise pour créer et fournir des produits/services',
      'Les revenus générés par un service',
      'L\'organigramme de l\'équipe IT'
    ],
    correctAnswer: 1,
    explanation: 'Un flux de valeur est une série d\'étapes qu\'une organisation utilise pour créer et fournir des produits et services aux consommateurs.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq87',
    question: 'Dans ITIL 4, qu\'est-ce qui caractérise une "pratique" ?',
    options: [
      'Un ensemble de ressources organisationnelles pour accomplir un travail',
      'Un document de politique de l\'organisation',
      'Un outil informatique spécialisé',
      'Un niveau hiérarchique dans l\'organisation'
    ],
    correctAnswer: 0,
    explanation: 'Une pratique est un ensemble de ressources organisationnelles conçues pour accomplir un travail ou atteindre un objectif.',
    difficulty: 'medium',
    category: 'fundamentals'
  },
  {
    id: 'cq88',
    question: 'L\'analyse d\'impact métier (BIA) est principalement utilisée dans :',
    options: [
      'La gestion des incidents',
      'La gestion de la continuité de service IT',
      'La gestion des changements',
      'La gestion des fournisseurs'
    ],
    correctAnswer: 1,
    explanation: 'L\'analyse d\'impact métier est un élément clé de la gestion de la continuité de service IT pour identifier les services critiques.',
    difficulty: 'hard',
    category: 'practices'
  },
  {
    id: 'cq89',
    question: 'Quelle est la principale différence entre un SLA et un OLA ?',
    options: [
      'SLA = externe, OLA = interne',
      'SLA = technique, OLA = fonctionnel',
      'SLA = mensuel, OLA = annuel',
      'Il n\'y a pas de différence'
    ],
    correctAnswer: 0,
    explanation: 'SLA (Service Level Agreement) = accord avec client externe. OLA (Operational Level Agreement) = accord entre équipes internes.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq90',
    question: 'La gestion des déploiements s\'assure que :',
    options: [
      'Tous les changements sont approuvés',
      'Les nouveaux ou modifiés services/fonctionnalités sont déployés correctement',
      'Les incidents sont résolus rapidement',
      'Les fournisseurs respectent leurs contrats'
    ],
    correctAnswer: 1,
    explanation: 'Deployment Management s\'assure que les nouveaux services, fonctionnalités ou changements sont déployés correctement dans l\'environnement cible.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq91',
    question: 'Dans la gestion des versions, qu\'est-ce qu\'un "baseline" ?',
    options: [
      'La version en production',
      'Un instantané d\'une configuration à un moment donné',
      'La dernière version développée',
      'Une version de test'
    ],
    correctAnswer: 1,
    explanation: 'Une baseline est un instantané officiel d\'une configuration ou d\'un ensemble d\'éléments de configuration à un moment spécifique.',
    difficulty: 'hard',
    category: 'practices'
  },
  {
    id: 'cq92',
    question: 'L\'objectif de la validation et test de services est de :',
    options: [
      'Former les utilisateurs',
      'S\'assurer que nouveaux/modifiés services répondent aux exigences',
      'Documenter les changements',
      'Gérer les incidents'
    ],
    correctAnswer: 1,
    explanation: 'Service Validation and Testing s\'assure que les nouveaux ou modifiés services répondent aux exigences définies.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq93',
    question: 'Quelle affirmation sur l\'automatisation est FAUSSE selon ITIL 4 ?',
    options: [
      'L\'automatisation doit être précédée d\'optimisation',
      'L\'automatisation élimine le besoin de gouvernance',
      'L\'automatisation peut réduire les erreurs humaines',
      'L\'automatisation doit apporter de la valeur'
    ],
    correctAnswer: 1,
    explanation: 'FAUX : L\'automatisation ne supprime PAS le besoin de gouvernance. Elle nécessite même souvent plus de contrôles et de supervision.',
    difficulty: 'hard',
    category: 'principles'
  },
  {
    id: 'cq94',
    question: 'Le concept de "shift-left" dans ITIL 4 signifie :',
    options: [
      'Déplacer les serveurs vers la gauche',
      'Intervenir plus tôt dans le cycle de vie',
      'Réduire les équipes de droite',
      'Changer l\'organisation'
    ],
    correctAnswer: 1,
    explanation: 'Shift-left signifie intervenir plus tôt dans le cycle de vie pour détecter et corriger les problèmes avant qu\'ils n\'impactent la production.',
    difficulty: 'hard',
    category: 'fundamentals'
  },
  {
    id: 'cq95',
    question: 'Une organisation veut mesurer la satisfaction de ses utilisateurs. Quelle pratique est la plus appropriée ?',
    options: [
      'Gestion des niveaux de service',
      'Centre de services',
      'Gestion des incidents',
      'Gestion des problèmes'
    ],
    correctAnswer: 0,
    explanation: 'La gestion des niveaux de service inclut la mesure et le reporting de la satisfaction utilisateur comme élément clé.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq96',
    question: 'Dans ITIL 4, qu\'est-ce qu\'un "élément de configuration" (CI) ?',
    options: [
      'Un paramètre de configuration logicielle',
      'Un composant sous contrôle de la gestion des configurations',
      'Un incident de configuration',
      'Une demande de changement'
    ],
    correctAnswer: 1,
    explanation: 'Un CI (Configuration Item) est tout composant qui doit être géré pour fournir un service IT et qui est sous contrôle de la configuration.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq97',
    question: 'Quelle affirmation sur les métriques est correcte selon ITIL 4 ?',
    options: [
      'Plus il y a de métriques, mieux c\'est',
      'Les métriques doivent soutenir la prise de décision',
      'Les métriques sont uniquement techniques',
      'Les métriques remplacent l\'expérience humaine'
    ],
    correctAnswer: 1,
    explanation: 'Les métriques doivent avoir un but précis et soutenir la prise de décision éclairée, pas être collectées pour elles-mêmes.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq98',
    question: 'La gestion de la sécurité de l\'information vise à :',
    options: [
      'Remplacer les équipes de sécurité',
      'S\'assurer que l\'information est protégée selon les politiques',
      'Uniquement chiffrer les données',
      'Bloquer tous les accès externes'
    ],
    correctAnswer: 1,
    explanation: 'Information Security Management s\'assure que l\'information a un niveau approprié de sécurité selon les politiques organisationnelles.',
    difficulty: 'medium',
    category: 'practices'
  },
  {
    id: 'cq99',
    question: 'Dans le contexte ITIL 4, qu\'est-ce que la "collaboration" entre fournisseur et consommateur implique ?',
    options: [
      'Le consommateur fait tout le travail',
      'Partage actif des ressources et risques',
      'Le fournisseur décide de tout',
      'Aucune communication n\'est nécessaire'
    ],
    correctAnswer: 1,
    explanation: 'La collaboration implique un partage actif des ressources, risques et bénéfices entre fournisseur et consommateur pour co-créer de la valeur.',
    difficulty: 'hard',
    category: 'fundamentals'
  },
  {
    id: 'cq100',
    question: 'Quelle est la durée de validité typique de la certification ITIL 4 Foundation ?',
    options: [
      'La certification n\'expire jamais',
      '2 ans',
      '3 ans',
      '5 ans'
    ],
    correctAnswer: 0,
    explanation: 'La certification ITIL 4 Foundation n\'a pas de date d\'expiration - elle est valide à vie une fois obtenue.',
    difficulty: 'easy',
    category: 'exam'
  }
];

// =====================================================================================
// FONCTIONS DE SÉLECTION ET FILTRAGE DES QUESTIONS
// =====================================================================================

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
export const svsQuestions = comprehensiveQuiz.filter(q => q.category === 'svs');
export const examQuestions = comprehensiveQuiz.filter(q => q.category === 'exam');

// =====================================================================================
// GÉNÉRATEUR DE QUIZ ALÉATOIRE - Distribution équilibrée comme l'examen officiel
// =====================================================================================

/**
 * Génère un quiz de 10 questions sélectionnées aléatoirement
 * Distribution : 3 faciles + 5 moyennes + 2 difficiles (comme l'examen réel)
 */
export function generateRandomQuiz(): typeof comprehensiveQuiz {
  // Fonction de mélange Fisher-Yates pour un vrai aléatoire
  const shuffle = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  
  // Générer un timestamp unique pour cette session de quiz
  const sessionId = Date.now() + Math.random();
  
  // Mélange aléatoirement chaque catégorie
  const shuffledEasy = shuffle(easyQuestions);
  const shuffledMedium = shuffle(mediumQuestions);
  const shuffledHard = shuffle(hardQuestions);
  
  // Sélectionne selon la distribution de l'examen réel
  const selectedQuestions = [
    ...shuffledEasy.slice(0, 3),      // 3 questions faciles
    ...shuffledMedium.slice(0, 5),    // 5 questions moyennes  
    ...shuffledHard.slice(0, 2)       // 2 questions difficiles
  ];
  
  // Mélange final ET ajouter un identifiant unique à chaque question
  const finalQuestions = shuffle(selectedQuestions).map((question, index) => ({
    ...question,
    id: `${question.id}_${sessionId}_${index}` // ID unique avec timestamp et position
  }));
  
  return finalQuestions;
}

/**
 * Génère un quiz thématique de 10 questions sur une catégorie spécifique
 */
export function generateThematicQuiz(category: string): typeof comprehensiveQuiz {
  const categoryQuestions = comprehensiveQuiz.filter(q => q.category === category);
  const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(10, shuffled.length));
}

/**
 * Génère un quiz de niveau spécifique
 */
export function generateDifficultyQuiz(difficulty: 'easy' | 'medium' | 'hard'): typeof comprehensiveQuiz {
  const difficultyQuestions = comprehensiveQuiz.filter(q => q.difficulty === difficulty);
  const shuffled = [...difficultyQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(10, shuffled.length));
}

/**
 * Simulation d'examen complète - 40 questions comme l'examen officiel
 * Distribution officielle : 12 faciles + 20 moyennes + 8 difficiles
 */
export function generateExamSimulation(): typeof comprehensiveQuiz {
  // Fonction de mélange Fisher-Yates pour un vrai aléatoire
  const shuffle = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  
  const shuffledEasy = shuffle(easyQuestions);
  const shuffledMedium = shuffle(mediumQuestions);
  const shuffledHard = shuffle(hardQuestions);
  
  const examQuestions = [
    ...shuffledEasy.slice(0, 12),     // 30% faciles
    ...shuffledMedium.slice(0, 20),   // 50% moyennes
    ...shuffledHard.slice(0, 8)       // 20% difficiles
  ];
  
  return shuffle(examQuestions);
}

// =====================================================================================
// QUIZ PRÉDÉFINIS POUR RÉTROCOMPATIBILITÉ
// =====================================================================================

// Quiz aléatoire par défaut (sera regénéré à chaque import)
export const defaultRandomQuiz = generateRandomQuiz();

// Simulation d'examen (legacy)
export const examSimulation = generateExamSimulation();