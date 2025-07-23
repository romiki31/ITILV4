export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  examTip?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ========== CONCEPTS FONDAMENTAUX (15 questions) ==========
  {
    id: 'CF001',
    question: 'Selon ITIL 4, comment la valeur est-elle créée ?',
    options: [
      'Par le fournisseur de services uniquement',
      'Par le client uniquement',
      'Par la co-création entre le fournisseur et le consommateur',
      'Par les utilisateurs finaux uniquement'
    ],
    correctAnswer: 2,
    explanation: 'La valeur est TOUJOURS co-créée à travers des relations actives de collaboration entre fournisseurs et consommateurs. Elle n\'est jamais créée unilatéralement.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux',
    examTip: 'PIÈGE CRITIQUE : Toute réponse suggérant création par "le fournisseur seul" ou "le client seul" est FAUSSE.'
  },
  {
    id: 'CF002',
    question: 'Qu\'est-ce qu\'un service selon ITIL 4 ?',
    options: [
      'Un produit livré au client',
      'Un moyen de permettre la co-création de valeur en facilitant les résultats que les clients veulent atteindre',
      'Une application informatique',
      'Un processus technique'
    ],
    correctAnswer: 1,
    explanation: 'Un service est un MOYEN de faciliter les résultats désirés par le client, impliquant un transfert de certains risques et coûts du consommateur vers le fournisseur.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF003',
    question: 'Quelle affirmation décrit le mieux la relation entre utilité et garantie ?',
    options: [
      'L\'utilité est plus importante que la garantie',
      'La garantie peut compenser un manque d\'utilité',
      'Les deux sont obligatoires pour créer de la valeur',
      'L\'utilité et la garantie sont optionnelles selon le service'
    ],
    correctAnswer: 2,
    explanation: 'L\'utilité (fit for purpose) ET la garantie (fit for use) sont TOUTES DEUX obligatoires pour créer de la valeur. Un service avec excellente utilité mais mauvaise garantie ne crée pas de valeur.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF004',
    question: 'Une entreprise livre un rapport mensuel de 100 pages sur les performances IT. Les dirigeants veulent réduire les incidents de 30%. Quelle est la différence clé ici ?',
    options: [
      'Le rapport est un résultat, la réduction des incidents est une sortie',
      'Le rapport est une sortie, la réduction des incidents est un résultat',
      'Les deux sont des résultats',
      'Les deux sont des sorties'
    ],
    correctAnswer: 1,
    explanation: 'Une sortie (output) est un livrable tangible comme un rapport. Un résultat (outcome) est un changement d\'état qui apporte de la valeur, comme la réduction des incidents.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux',
    examTip: 'Les clients PAIENT pour des résultats business, pas pour des livrables techniques.'
  },
  {
    id: 'CF005',
    question: 'Qui autorise le budget pour un service selon ITIL 4 ?',
    options: [
      'Le client',
      'L\'utilisateur',
      'Le sponsor',
      'Le fournisseur de services'
    ],
    correctAnswer: 2,
    explanation: 'Le SPONSOR est le rôle qui autorise le budget et représente les intérêts de l\'organisation. Le client définit les exigences et l\'utilisateur utilise le service au quotidien.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF006',
    question: 'Un service de messagerie cloud transfère plusieurs responsabilités du client vers le fournisseur. Lesquelles ?',
    options: [
      'La définition des besoins métier uniquement',
      'Les risques de panne matérielle, la maintenance des serveurs et la sécurité physique',
      'L\'utilisation correcte du service uniquement',
      'La satisfaction des utilisateurs finaux'
    ],
    correctAnswer: 1,
    explanation: 'Un service efficace transfère des risques et coûts spécifiques du consommateur vers le fournisseur, comme la gestion de l\'infrastructure, permettant au client de se concentrer sur ses résultats business.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF007',
    question: 'Qu\'est-ce qu\'un produit dans le contexte ITIL 4 ?',
    options: [
      'Un bien physique uniquement',
      'Un service packagé pour la vente',
      'Une configuration de ressources conçue pour offrir de la valeur',
      'Un logiciel développé en interne'
    ],
    correctAnswer: 2,
    explanation: 'Un produit est une configuration de ressources tangibles et/ou intangibles conçue pour répondre à des besoins identifiés. Un produit peut supporter plusieurs services différents.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF008',
    question: 'Une application bancaire mobile fonctionne parfaitement mais n\'est disponible que 50% du temps. Quel est le problème ?',
    options: [
      'Manque d\'utilité',
      'Manque de garantie',
      'Manque de valeur client',
      'Manque de fonctionnalités'
    ],
    correctAnswer: 1,
    explanation: 'L\'application a une bonne UTILITÉ (fonctionnalités correctes) mais une GARANTIE insuffisante (disponibilité faible). Les deux sont nécessaires pour créer de la valeur.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux',
    examTip: 'Utilité = CE QUE fait le service | Garantie = COMMENT il performe'
  },
  {
    id: 'CF009',
    question: 'Dans une PME, le directeur général définit les besoins IT, approuve les budgets et utilise les services. Quels rôles cumule-t-il ?',
    options: [
      'Client et utilisateur uniquement',
      'Sponsor et utilisateur uniquement',
      'Client, sponsor et utilisateur',
      'Fournisseur et client'
    ],
    correctAnswer: 2,
    explanation: 'Une même personne peut cumuler plusieurs rôles. Ici : CLIENT (définit besoins), SPONSOR (approuve budget) et UTILISATEUR (utilise les services).',
    difficulty: 'hard',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF010',
    question: 'Quelle affirmation sur les parties prenantes est correcte ?',
    options: [
      'Seuls les clients externes sont des parties prenantes',
      'Les parties prenantes incluent toute personne ou organisation pouvant affecter ou être affectée par les services',
      'Les employés IT ne sont pas des parties prenantes',
      'Les fournisseurs ne sont pas considérés comme des parties prenantes'
    ],
    correctAnswer: 1,
    explanation: 'Les parties prenantes incluent TOUTES les personnes ou organisations concernées : clients, utilisateurs, employés, fournisseurs, régulateurs, actionnaires, etc.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF011',
    question: 'Une entreprise développe une nouvelle fonctionnalité. L\'équipe livre le code testé (livrable A) qui permet d\'augmenter les ventes de 20% (livrable B). Quelle est la classification correcte ?',
    options: [
      'A est une sortie, B est un résultat',
      'A est un résultat, B est une sortie',
      'Les deux sont des résultats',
      'Les deux sont des sorties'
    ],
    correctAnswer: 0,
    explanation: 'Le code testé est une SORTIE (output) - livrable tangible. L\'augmentation des ventes est un RÉSULTAT (outcome) - changement créant de la valeur business.',
    difficulty: 'hard',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF012',
    question: 'Qu\'est-ce que la "perception de valeur" implique pour la gestion des services ?',
    options: [
      'La valeur est fixe une fois définie',
      'La valeur est objective et mesurable',
      'La valeur évolue dans le temps et selon le contexte',
      'La valeur est déterminée uniquement par le fournisseur'
    ],
    correctAnswer: 2,
    explanation: 'La valeur est subjective et contextuelle. Elle évolue selon les circonstances, les besoins changeants et les perspectives des différentes parties prenantes.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF013',
    question: 'Un service de sauvegarde offre une protection des données (fonction) avec une garantie de restauration en moins de 4 heures. Comment classifier ces éléments ?',
    options: [
      'Protection = garantie, Temps de restauration = utilité',
      'Protection = utilité, Temps de restauration = garantie',
      'Les deux sont de l\'utilité',
      'Les deux sont de la garantie'
    ],
    correctAnswer: 1,
    explanation: 'La protection des données est l\'UTILITÉ (ce que fait le service). Le temps de restauration garanti est la GARANTIE (niveau de performance promis).',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF014',
    question: 'Pourquoi les services visent-ils à transférer certains risques du consommateur vers le fournisseur ?',
    options: [
      'Pour augmenter les prix des services',
      'Pour permettre au consommateur de se concentrer sur ses activités cœur de métier',
      'Pour éliminer tous les risques',
      'Pour complexifier la relation contractuelle'
    ],
    correctAnswer: 1,
    explanation: 'Le transfert de risques permet au consommateur de se concentrer sur ses objectifs business sans gérer les complexités techniques, tout en acceptant que de nouveaux risques peuvent apparaître.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'CF015',
    question: 'Dans le contexte de la co-création de valeur, quel est le rôle du consommateur ?',
    options: [
      'Recevoir passivement les services',
      'Contribuer activement à la définition et réalisation de la valeur',
      'Uniquement payer pour les services',
      'Superviser le fournisseur'
    ],
    correctAnswer: 1,
    explanation: 'La co-création implique que les consommateurs contribuent ACTIVEMENT à définir ce qu\'ils valorisent et participent à la réalisation de cette valeur avec le fournisseur.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },

  // ========== PRINCIPES DIRECTEURS (20 questions) ==========
  {
    id: 'PD001',
    question: 'Lors du lancement d\'un projet de transformation IT, quelle devrait être la première action selon le principe "Privilégier la valeur" ?',
    options: [
      'Définir l\'architecture technique détaillée',
      'Identifier qui sont les parties prenantes et ce qu\'elles valorisent',
      'Établir le budget du projet',
      'Sélectionner les technologies à utiliser'
    ],
    correctAnswer: 1,
    explanation: 'Le principe "Privilégier la valeur" exige de TOUJOURS commencer par comprendre QUI sont les parties prenantes et CE QU\'ELLES valorisent réellement.',
    difficulty: 'easy',
    category: 'Principes directeurs',
    examTip: 'Questions sur "première étape" → TOUJOURS comprendre la valeur pour les parties prenantes'
  },
  {
    id: 'PD002',
    question: 'Une entreprise veut remplacer son système ERP vieillissant. Selon le principe "Commencer là où vous êtes", quelle approche est recommandée ?',
    options: [
      'Remplacer immédiatement tout le système',
      'Évaluer objectivement ce qui fonctionne bien et peut être préservé',
      'Ignorer le système actuel et partir de zéro',
      'Copier exactement ce que font les concurrents'
    ],
    correctAnswer: 1,
    explanation: 'Il faut évaluer OBJECTIVEMENT l\'état actuel, identifier ce qui fonctionne bien et doit être préservé, et comprendre ce qui ne fonctionne pas et POURQUOI.',
    difficulty: 'easy',
    category: 'Principes directeurs',
    examTip: 'PIÈGE : "Remplacer entièrement" = généralement FAUX. Préférer l\'évolution à la révolution.'
  },
  {
    id: 'PD003',
    question: 'Comment implémenter un nouveau processus ITSM dans 100 agences selon le principe "Progresser de manière itérative avec feedback" ?',
    options: [
      'Déployer dans toutes les agences simultanément',
      'Attendre que le processus soit parfait avant de déployer',
      'Pilote sur 3 agences, collecter feedback, ajuster, puis déployer par vagues',
      'Laisser chaque agence décider de sa méthode'
    ],
    correctAnswer: 2,
    explanation: 'L\'approche itérative implique : pilote limité → feedback → ajustements → extension progressive. Cela réduit les risques et permet l\'apprentissage continu.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD004',
    question: 'Une équipe IT travaille en silo et les incidents majeurs ne sont pas communiqués au business. Quel principe n\'est pas respecté ?',
    options: [
      'Optimiser et automatiser',
      'Collaborer et promouvoir la visibilité',
      'Rester simple et pratique',
      'Privilégier la valeur'
    ],
    correctAnswer: 1,
    explanation: 'Le principe "Collaborer et promouvoir la visibilité" exige de partager l\'information de manière transparente et de briser les silos organisationnels.',
    difficulty: 'easy',
    category: 'Principes directeurs'
  },
  {
    id: 'PD005',
    question: 'L\'équipe IT optimise les performances du réseau local, ce qui dégrade la performance des applications cloud critiques. Quel principe est violé ?',
    options: [
      'Commencer là où vous êtes',
      'Penser et travailler de manière holistique',
      'Rester simple et pratique',
      'Progresser de manière itérative'
    ],
    correctAnswer: 1,
    explanation: 'Optimiser localement sans considérer l\'impact global viole le principe holistique. Il faut considérer les interdépendances et l\'impact systémique.',
    difficulty: 'medium',
    category: 'Principes directeurs',
    examTip: 'Optimisation locale qui dégrade le global = violation du principe holistique'
  },
  {
    id: 'PD006',
    question: 'Un processus d\'approbation des changements comporte 15 étapes dont 10 sont redondantes. Quel principe devrait guider l\'amélioration ?',
    options: [
      'Privilégier la valeur',
      'Optimiser et automatiser',
      'Rester simple et pratique',
      'Collaborer et promouvoir la visibilité'
    ],
    correctAnswer: 2,
    explanation: 'Le principe "Rester simple et pratique" guide l\'élimination des activités sans valeur ajoutée. Utiliser le MINIMUM d\'étapes nécessaires pour atteindre l\'objectif.',
    difficulty: 'easy',
    category: 'Principes directeurs'
  },
  {
    id: 'PD007',
    question: 'Une entreprise veut automatiser son processus de gestion des incidents qui est actuellement inefficace et complexe. Quelle est la bonne approche ?',
    options: [
      'Automatiser immédiatement le processus actuel',
      'Optimiser et simplifier le processus, puis l\'automatiser',
      'Remplacer le processus par une solution du marché',
      'Former plus de personnel sur le processus actuel'
    ],
    correctAnswer: 1,
    explanation: 'Le principe "Optimiser et automatiser" impose un ordre OBLIGATOIRE : 1) OPTIMISER d\'abord 2) AUTOMATISER ensuite. Ne JAMAIS automatiser un processus défaillant.',
    difficulty: 'medium',
    category: 'Principes directeurs',
    examTip: 'PIÈGE MAJEUR : Automatiser pour améliorer = TOUJOURS FAUX. Optimiser PUIS automatiser.'
  },
  {
    id: 'PD008',
    question: 'Lors d\'une transformation digitale, pourquoi est-il important d\'impliquer les utilisateurs finaux dès le début ?',
    options: [
      'Pour réduire les coûts du projet',
      'Pour accélérer le développement technique',
      'Pour assurer que la solution réponde aux besoins réels et faciliter l\'adoption',
      'Pour éviter les audits'
    ],
    correctAnswer: 2,
    explanation: 'Selon "Collaborer et promouvoir la visibilité", impliquer les bonnes personnes au bon moment produit une meilleure adhésion et assure la pertinence de la solution.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD009',
    question: 'Comment les 7 principes directeurs d\'ITIL 4 doivent-ils être appliqués ?',
    options: [
      'Un seul principe à la fois',
      'Dans l\'ordre numérique strict',
      'De manière interconnectée et complémentaire',
      'Uniquement ceux pertinents pour l\'organisation'
    ],
    correctAnswer: 2,
    explanation: 'Les 7 principes sont universels, interconnectés et complémentaires. Ils doivent être considérés ensemble, pas isolément.',
    difficulty: 'easy',
    category: 'Principes directeurs'
  },
  {
    id: 'PD010',
    question: 'Une entreprise analyse ses 200 applications. Selon "Privilégier la valeur", sur quoi devrait-elle se concentrer d\'abord ?',
    options: [
      'Les applications les plus anciennes',
      'Les applications les plus coûteuses',
      'Les applications qui supportent les services générant le plus de valeur business',
      'Les applications avec le plus d\'utilisateurs'
    ],
    correctAnswer: 2,
    explanation: 'Toute action doit être liée à la valeur. Prioriser les applications supportant les services qui génèrent le plus de valeur pour l\'organisation et ses parties prenantes.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD011',
    question: 'Un nouveau CIO veut transformer l\'IT. Selon "Commencer là où vous êtes", quelle erreur doit-il éviter ?',
    options: [
      'Faire un audit de l\'existant',
      'Consulter les équipes en place',
      'Supposer que tout est mauvais et doit changer',
      'Analyser les performances actuelles'
    ],
    correctAnswer: 2,
    explanation: 'L\'erreur est de partir avec des préjugés négatifs. Il faut évaluer objectivement, respecter l\'expérience accumulée et capitaliser sur les investissements existants.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD012',
    question: 'Une équipe développe une nouvelle application. Quand devrait-elle solliciter le feedback des utilisateurs selon ITIL 4 ?',
    options: [
      'Uniquement à la fin du développement',
      'Une fois par trimestre',
      'À chaque itération tout au long du développement',
      'Seulement si des problèmes surviennent'
    ],
    correctAnswer: 2,
    explanation: 'Le principe itératif exige de solliciter et intégrer le feedback À CHAQUE itération, pas seulement à la fin. Cela permet d\'ajuster continuellement.',
    difficulty: 'easy',
    category: 'Principes directeurs'
  },
  {
    id: 'PD013',
    question: 'Le service desk reçoit des plaintes car les utilisateurs ne sont pas informés du statut de leurs incidents. Quelle action prioritaire ?',
    options: [
      'Acheter un nouvel outil ITSM',
      'Former le personnel sur la communication',
      'Créer des canaux de communication transparents et des mises à jour automatiques',
      'Réduire le nombre d\'incidents'
    ],
    correctAnswer: 2,
    explanation: 'Selon "Collaborer et promouvoir la visibilité", il faut rendre visibles les informations pertinentes. La transparence réduit la frustration et améliore la collaboration.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD014',
    question: 'Une organisation implémente une solution technique parfaite pour un département, mais cela crée des problèmes pour trois autres. Quelle leçon ?',
    options: [
      'La solution technique était inadéquate',
      'Il fallait une solution plus simple',
      'Une approche holistique aurait identifié les impacts cross-départements',
      'Il fallait plus de budget'
    ],
    correctAnswer: 2,
    explanation: 'Penser de manière holistique signifie considérer TOUS les impacts et interdépendances, pas seulement l\'optimisation locale d\'un département.',
    difficulty: 'hard',
    category: 'Principes directeurs'
  },
  {
    id: 'PD015',
    question: 'Entre une solution complexe techniquement impressionnante et une solution simple qui répond au besoin, ITIL 4 recommande :',
    options: [
      'La solution la plus innovante',
      'La solution la moins chère',
      'La solution simple et pratique',
      'La solution préférée par l\'IT'
    ],
    correctAnswer: 2,
    explanation: 'Le principe "Rester simple et pratique" privilégie TOUJOURS l\'efficacité pratique à la complexité technique. Utiliser le minimum nécessaire pour atteindre l\'objectif.',
    difficulty: 'easy',
    category: 'Principes directeurs',
    examTip: 'Entre deux solutions correctes, TOUJOURS choisir la plus SIMPLE et PRATIQUE'
  },
  {
    id: 'PD016',
    question: 'Une entreprise a un processus manuel de 3 étapes simples et efficaces. Quelle approche pour l\'améliorer ?',
    options: [
      'L\'automatiser immédiatement',
      'Ajouter des étapes de contrôle',
      'Vérifier s\'il peut être encore optimisé avant d\'envisager l\'automatisation',
      'Le remplacer par un processus standard du marché'
    ],
    correctAnswer: 2,
    explanation: 'Même un processus simple doit être optimisé avant automatisation. L\'ordre est toujours : optimiser (même si déjà efficace) PUIS automatiser si pertinent.',
    difficulty: 'hard',
    category: 'Principes directeurs'
  },
  {
    id: 'PD017',
    question: 'Quelle affirmation sur la visibilité dans ITIL 4 est correcte ?',
    options: [
      'La visibilité équivaut à la surveillance intrusive',
      'Seuls les managers ont besoin de visibilité',
      'La visibilité crée la transparence nécessaire pour améliorer la collaboration',
      'Trop de visibilité nuit à la productivité'
    ],
    correctAnswer: 2,
    explanation: 'La visibilité n\'est pas de la surveillance mais de la transparence qui permet une meilleure collaboration, compréhension mutuelle et prise de décision éclairée.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD018',
    question: 'Un projet échoue car chaque département a optimisé sa partie sans coordination. Quel principe aurait évité cela ?',
    options: [
      'Privilégier la valeur',
      'Penser et travailler de manière holistique',
      'Rester simple et pratique',
      'Optimiser et automatiser'
    ],
    correctAnswer: 1,
    explanation: 'Le travail en silo et l\'optimisation locale sans vision globale violent le principe holistique. Il faut une vue end-to-end et une coordination entre toutes les parties.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD019',
    question: 'Lors de l\'analyse d\'un processus pour amélioration, on découvre que 60% des activités n\'ajoutent aucune valeur. Que faire ?',
    options: [
      'Automatiser toutes les activités pour gagner du temps',
      'Former plus de personnes sur le processus complet',
      'Éliminer les activités sans valeur ajoutée avant toute autre action',
      'Documenter toutes les activités en détail'
    ],
    correctAnswer: 2,
    explanation: 'Selon "Rester simple et pratique", il faut éliminer impitoyablement les activités sans valeur ajoutée. C\'est la première étape avant toute optimisation ou automatisation.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'PD020',
    question: 'Comment le principe "Privilégier la valeur" influence-t-il la mesure de performance ?',
    options: [
      'Mesurer uniquement les métriques techniques',
      'Mesurer ce qui est facile à collecter',
      'Aligner les métriques sur ce que les parties prenantes valorisent',
      'Mesurer le maximum d\'indicateurs possible'
    ],
    correctAnswer: 2,
    explanation: 'Les métriques doivent refléter ce que les parties prenantes valorisent réellement, pas seulement la performance technique. L\'alignement sur la valeur guide le choix des KPIs.',
    difficulty: 'hard',
    category: 'Principes directeurs'
  },

  // ========== 4 DIMENSIONS (10 questions) ==========
  {
    id: '4D001',
    question: 'Une entreprise migre vers le cloud mais néglige la formation des équipes. Quelle dimension est ignorée ?',
    options: [
      'Information et Technologie',
      'Organisations et Personnes',
      'Partenaires et Fournisseurs',
      'Flux de Valeur et Processus'
    ],
    correctAnswer: 1,
    explanation: 'La dimension "Organisations et Personnes" inclut les compétences, connaissances et culture. Négliger la formation compromet le succès de la transformation.',
    difficulty: 'easy',
    category: '4 Dimensions'
  },
  {
    id: '4D002',
    question: 'Qu\'est-ce qui N\'EST PAS inclus dans la dimension "Information et Technologie" ?',
    options: [
      'Les bases de données et leur contenu',
      'Les relations avec les fournisseurs cloud',
      'Les outils d\'automatisation et d\'IA',
      'La propriété intellectuelle'
    ],
    correctAnswer: 1,
    explanation: 'Les relations avec les fournisseurs relèvent de la dimension "Partenaires et Fournisseurs". Information et Technologie couvre les données, connaissances et outils techniques.',
    difficulty: 'medium',
    category: '4 Dimensions',
    examTip: 'Ne pas confondre les outils techniques (Information et Technologie) avec les relations fournisseurs'
  },
  {
    id: '4D003',
    question: 'Une entreprise considère ses départements RH, Finance et Marketing dans sa stratégie de service. À quelle dimension appartiennent-ils ?',
    options: [
      'Organisations et Personnes uniquement',
      'Partenaires et Fournisseurs car ce sont des partenaires internes',
      'Flux de Valeur et Processus',
      'Ils ne font pas partie des 4 dimensions'
    ],
    correctAnswer: 1,
    explanation: 'La dimension "Partenaires et Fournisseurs" inclut AUSSI tous les départements internes qui participent à la fourniture de services, pas seulement les entités externes.',
    difficulty: 'hard',
    category: '4 Dimensions',
    examTip: 'PIÈGE : "Partenaires" inclut les départements internes, pas seulement les fournisseurs externes'
  },
  {
    id: '4D004',
    question: 'Quel est l\'objectif principal de la dimension "Flux de Valeur et Processus" ?',
    options: [
      'Optimiser chaque processus individuellement',
      'Documenter toutes les procédures en détail',
      'Assurer l\'intégration et coordination pour créer de la valeur',
      'Automatiser le maximum de processus'
    ],
    correctAnswer: 2,
    explanation: 'Cette dimension se concentre sur comment les parties travaillent ensemble de manière INTÉGRÉE et COORDONNÉE pour créer de la valeur, pas sur l\'optimisation isolée.',
    difficulty: 'medium',
    category: '4 Dimensions'
  },
  {
    id: '4D005',
    question: 'Le RGPD impose de nouvelles contraintes sur la gestion des données personnelles. Comment cela affecte-t-il les 4 dimensions ?',
    options: [
      'Impact uniquement sur Information et Technologie',
      'Impact uniquement sur Organisations et Personnes',
      'Impact sur toutes les 4 dimensions simultanément',
      'Ce n\'est pas lié aux 4 dimensions'
    ],
    correctAnswer: 2,
    explanation: 'Les facteurs externes comme le RGPD influencent TOUTES les dimensions : processus de consentement, formation du personnel, outils de conformité, contrats fournisseurs.',
    difficulty: 'hard',
    category: '4 Dimensions',
    examTip: 'Les facteurs externes impactent TOUJOURS les 4 dimensions, pas une seule'
  },
  {
    id: '4D006',
    question: 'Une entreprise utilise 3 fournisseurs cloud différents pour optimiser coûts et performances. Cela illustre quel aspect ?',
    options: [
      'Mauvaise gestion de l\'Information et Technologie',
      'Stratégie multi-sourcing dans Partenaires et Fournisseurs',
      'Complexité inutile des Flux de Valeur',
      'Problème d\'organisation'
    ],
    correctAnswer: 1,
    explanation: 'Le multi-sourcing est une stratégie légitime de la dimension "Partenaires et Fournisseurs" pour optimiser valeur, réduire risques et éviter la dépendance.',
    difficulty: 'medium',
    category: '4 Dimensions'
  },
  {
    id: '4D007',
    question: 'Pourquoi faut-il considérer les 4 dimensions ensemble plutôt que séparément ?',
    options: [
      'Pour réduire les coûts',
      'Car elles sont interdépendantes et s\'influencent mutuellement',
      'Pour simplifier la gestion',
      'C\'est une recommandation, pas une obligation'
    ],
    correctAnswer: 1,
    explanation: 'Les 4 dimensions sont interdépendantes. Négliger une dimension ou optimiser isolément compromet la création de valeur globale. L\'approche doit être holistique.',
    difficulty: 'easy',
    category: '4 Dimensions'
  },
  {
    id: '4D008',
    question: 'Dans un projet de transformation digitale, quelle dimension concerne la culture d\'entreprise et la résistance au changement ?',
    options: [
      'Flux de Valeur et Processus',
      'Information et Technologie',
      'Organisations et Personnes',
      'Partenaires et Fournisseurs'
    ],
    correctAnswer: 2,
    explanation: 'La culture, le leadership, la gestion du changement et les résistances relèvent de "Organisations et Personnes". C\'est souvent la dimension la plus critique mais sous-estimée.',
    difficulty: 'easy',
    category: '4 Dimensions'
  },
  {
    id: '4D009',
    question: 'Une entreprise implémente l\'IA pour automatiser certaines tâches. Quelles dimensions sont principalement concernées ?',
    options: [
      'Seulement Information et Technologie',
      'Information et Technologie + Organisations et Personnes',
      'Toutes les 4 dimensions',
      'Aucune, l\'IA n\'est pas couverte'
    ],
    correctAnswer: 2,
    explanation: 'L\'IA impacte TOUTES les dimensions : technologie (outils IA), personnes (nouvelles compétences), processus (refonte), fournisseurs (vendors IA).',
    difficulty: 'medium',
    category: '4 Dimensions'
  },
  {
    id: '4D010',
    question: 'Qu\'est-ce qu\'un "flux de valeur" dans la dimension correspondante ?',
    options: [
      'Un processus technique isolé',
      'Un diagramme de workflow',
      'Une séquence d\'activités créant de la valeur de bout en bout',
      'Une procédure documentée'
    ],
    correctAnswer: 2,
    explanation: 'Un flux de valeur est une séquence end-to-end d\'activités qui, ensemble, créent de la valeur pour le consommateur. C\'est plus large qu\'un simple processus.',
    difficulty: 'medium',
    category: '4 Dimensions'
  },

  // ========== SYSTÈME DE VALEUR DES SERVICES (15 questions) ==========
  {
    id: 'SVS001',
    question: 'Qu\'est-ce que le Système de Valeur des Services (SVS) dans ITIL 4 ?',
    options: [
      'Un processus linéaire de fourniture de services',
      'Une description holistique de comment tous les composants travaillent ensemble pour créer de la valeur',
      'Un outil de mesure de la performance',
      'Une méthodologie de gestion de projet'
    ],
    correctAnswer: 1,
    explanation: 'Le SVS est le framework central d\'ITIL 4 qui décrit comment tous les composants et activités de l\'organisation travaillent en synergie pour faciliter la création de valeur.',
    difficulty: 'easy',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS002',
    question: 'Combien d\'activités composent la chaîne de valeur des services ITIL 4 ?',
    options: [
      '4 activités',
      '5 activités',
      '6 activités',
      '7 activités'
    ],
    correctAnswer: 2,
    explanation: 'La chaîne de valeur comprend 6 activités flexibles : Planifier, Améliorer, Impliquer, Conception et Transition, Obtenir/Construire, Fournir et Supporter.',
    difficulty: 'easy',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS003',
    question: 'Quelle est la différence majeure entre la chaîne de valeur ITIL 4 et le cycle de vie ITIL v3 ?',
    options: [
      'ITIL 4 a plus d\'étapes',
      'ITIL 4 est flexible et non-séquentiel, v3 était rigide et linéaire',
      'Il n\'y a pas de différence significative',
      'ITIL v3 était plus flexible'
    ],
    correctAnswer: 1,
    explanation: 'La chaîne de valeur ITIL 4 est flexible, permettant multiples flux adaptés au contexte, contrairement au cycle de vie rigide et séquentiel d\'ITIL v3.',
    difficulty: 'medium',
    category: 'Système de valeur des services',
    examTip: 'ITIL 4 = Flexibilité et adaptation | ITIL v3 = Rigidité et séquence'
  },
  {
    id: 'SVS004',
    question: 'L\'activité "PLANIFIER" de la chaîne de valeur se concentre sur :',
    options: [
      'La planification détaillée des tâches quotidiennes',
      'La vision, stratégie et allocation des ressources',
      'La planification des changements uniquement',
      'L\'ordonnancement des incidents'
    ],
    correctAnswer: 1,
    explanation: 'PLANIFIER concerne la vision stratégique, la direction d\'amélioration, l\'allocation des ressources et les décisions d\'investissement, pas la planification opérationnelle.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS005',
    question: 'Quelle activité de la chaîne de valeur est présente dans TOUTES les autres activités ?',
    options: [
      'Planifier',
      'Améliorer',
      'Impliquer',
      'Fournir et Supporter'
    ],
    correctAnswer: 1,
    explanation: 'AMÉLIORER est omniprésente - l\'amélioration continue doit être intégrée dans toutes les activités de la chaîne de valeur, pas isolée.',
    difficulty: 'medium',
    category: 'Système de valeur des services',
    examTip: 'Amélioration = responsabilité partagée dans TOUTES les activités'
  },
  {
    id: 'SVS006',
    question: 'L\'activité "IMPLIQUER" vise principalement à :',
    options: [
      'Impliquer uniquement les clients dans les décisions',
      'Créer de bonnes relations avec toutes les parties prenantes',
      'Gérer les fournisseurs externes',
      'Former les utilisateurs'
    ],
    correctAnswer: 1,
    explanation: 'IMPLIQUER concerne la compréhension des besoins, la transparence et les bonnes relations avec TOUTES les parties prenantes (internes et externes).',
    difficulty: 'easy',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS007',
    question: 'Quelle est la différence entre "Conception et Transition" dans ITIL 4 et les phases séparées d\'ITIL v3 ?',
    options: [
      'Il n\'y a pas de différence',
      'ITIL 4 les combine en une activité intégrée et itérative',
      'ITIL 4 les a supprimées',
      'ITIL 4 les a rendues plus séquentielles'
    ],
    correctAnswer: 1,
    explanation: 'ITIL 4 combine conception et transition en une activité intégrée supportant les approches modernes (Agile, DevOps) où design et déploiement sont itératifs.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS008',
    question: 'L\'activité "OBTENIR/CONSTRUIRE" concerne :',
    options: [
      'Uniquement le développement interne',
      'Uniquement les achats externes',
      'La décision make vs buy et l\'acquisition des composants nécessaires',
      'La construction des infrastructures'
    ],
    correctAnswer: 2,
    explanation: 'OBTENIR/CONSTRUIRE couvre l\'analyse make vs buy, l\'acquisition (interne ou externe) et la disponibilité des composants de service selon les spécifications.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS009',
    question: 'Que représentent les entrées du SVS ?',
    options: [
      'Les incidents et problèmes',
      'Les opportunités et demandes des parties prenantes',
      'Les ressources financières uniquement',
      'Les exigences techniques'
    ],
    correctAnswer: 1,
    explanation: 'Les entrées du SVS sont les opportunités et demandes provenant des parties prenantes, qui déclenchent les activités de création de valeur.',
    difficulty: 'easy',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS010',
    question: 'Comment les pratiques ITIL s\'intègrent-elles dans le SVS ?',
    options: [
      'Elles remplacent la chaîne de valeur',
      'Elles fonctionnent indépendamment du SVS',
      'Elles sont des ressources utilisées par les activités de la chaîne de valeur',
      'Elles ne sont pas liées au SVS'
    ],
    correctAnswer: 2,
    explanation: 'Les 34 pratiques ITIL sont des ensembles de ressources organisationnelles utilisées par les activités de la chaîne de valeur pour créer de la valeur.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS011',
    question: 'L\'activité "FOURNIR ET SUPPORTER" se concentre sur :',
    options: [
      'Le développement de nouveaux services',
      'Les opérations quotidiennes et le support utilisateur',
      'La planification stratégique',
      'La gestion des fournisseurs'
    ],
    correctAnswer: 1,
    explanation: 'FOURNIR ET SUPPORTER assure la livraison opérationnelle des services selon les SLA, incluant le support réactif et proactif aux utilisateurs.',
    difficulty: 'easy',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS012',
    question: 'Quel rôle joue la gouvernance dans le SVS ?',
    options: [
      'Elle remplace le management',
      'Elle fournit direction, contrôle et évaluation',
      'Elle gère les incidents',
      'Elle n\'est pas nécessaire dans ITIL 4'
    ],
    correctAnswer: 1,
    explanation: 'La gouvernance dans le SVS fournit les moyens de direction, contrôle et évaluation de l\'organisation, assurant l\'alignement avec les objectifs.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS013',
    question: 'Un client demande une nouvelle fonctionnalité. Quelles activités de la chaîne de valeur seront probablement impliquées ?',
    options: [
      'Seulement Conception et Transition',
      'Toutes les activités de manière flexible selon le contexte',
      'Uniquement Planifier et Fournir',
      'Seulement Obtenir/Construire'
    ],
    correctAnswer: 1,
    explanation: 'La flexibilité de la chaîne de valeur signifie que toute combinaison d\'activités peut être utilisée selon le contexte. Une demande peut impliquer toutes les activités.',
    difficulty: 'hard',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS014',
    question: 'Quelle est la sortie finale du SVS ?',
    options: [
      'Des services livrés',
      'De la valeur pour les parties prenantes',
      'Des rapports de performance',
      'Des processus optimisés'
    ],
    correctAnswer: 1,
    explanation: 'La sortie du SVS est la VALEUR - les résultats désirés par les parties prenantes, pas simplement des services ou des livrables.',
    difficulty: 'easy',
    category: 'Système de valeur des services'
  },
  {
    id: 'SVS015',
    question: 'Comment le SVS d\'ITIL 4 supporte-t-il les approches Agile et DevOps ?',
    options: [
      'Il ne les supporte pas',
      'Par sa flexibilité permettant des flux de valeur adaptés et itératifs',
      'En les remplaçant par des processus ITIL',
      'En imposant des contrôles stricts'
    ],
    correctAnswer: 1,
    explanation: 'Le SVS est conçu pour être flexible et supporter diverses approches incluant Agile, DevOps, Lean, etc. Il ne prescrit pas de chemin unique.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },

  // ========== PRATIQUES ITIL (40 questions) ==========
  // Pratiques détaillées (28 questions)
  {
    id: 'PR001',
    question: 'Quel est l\'objectif principal de la gestion des incidents ?',
    options: [
      'Identifier la cause racine des interruptions',
      'Minimiser l\'impact négatif en restaurant le service normal rapidement',
      'Prévenir la récurrence des incidents',
      'Documenter tous les problèmes techniques'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif de la gestion des incidents est de RESTAURER le service normal aussi RAPIDEMENT que possible, minimisant l\'impact sur le business.',
    difficulty: 'easy',
    category: 'Pratiques ITIL',
    examTip: 'Incident = VITESSE de restauration, pas analyse approfondie'
  },
  {
    id: 'PR002',
    question: 'Quelle est la formule pour calculer la priorité d\'un incident ?',
    options: [
      'Urgence + Impact = Priorité',
      'Impact × Urgence = Priorité',
      'Impact - Urgence = Priorité',
      'Urgence / Impact = Priorité'
    ],
    correctAnswer: 1,
    explanation: 'La priorité d\'un incident est déterminée en multipliant l\'Impact par l\'Urgence selon une matrice prédéfinie (ex: Impact élevé × Urgence élevée = Priorité 1).',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR003',
    question: 'Quelle est la différence fondamentale entre un incident et un problème ?',
    options: [
      'Les incidents sont plus graves que les problèmes',
      'Un incident est une interruption, un problème est la cause sous-jacente',
      'Il n\'y a pas de différence',
      'Les problèmes sont toujours connus, pas les incidents'
    ],
    correctAnswer: 1,
    explanation: 'Un incident est une interruption de service à restaurer rapidement. Un problème est la cause d\'un ou plusieurs incidents qu\'il faut analyser et éliminer.',
    difficulty: 'medium',
    category: 'Pratiques ITIL',
    examTip: 'Incident = Restaurer vite | Problème = Analyser et prévenir'
  },
  {
    id: 'PR004',
    question: 'Un utilisateur demande l\'accès à une application via le portail self-service. C\'est :',
    options: [
      'Un incident',
      'Un changement',
      'Une demande de service',
      'Un problème'
    ],
    correctAnswer: 2,
    explanation: 'L\'accès à une application est une demande de service - pré-approuvée, procédure standard, faible risque. Ce n\'est ni un incident ni un changement.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR005',
    question: 'Qu\'est-ce qu\'un changement standard selon ITIL 4 ?',
    options: [
      'Un changement normal simplifié',
      'Un changement d\'urgence planifié',
      'Un changement pré-autorisé avec procédure documentée et risque faible',
      'Tout changement approuvé par le CAB'
    ],
    correctAnswer: 2,
    explanation: 'Un changement standard est pré-autorisé, avec risque faible et bien compris, procédure documentée et testée. Il ne nécessite pas d\'évaluation individuelle.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR006',
    question: 'Dans quel cas utilise-t-on un changement d\'urgence ?',
    options: [
      'Pour tout changement demandé par la direction',
      'Pour résoudre un incident majeur ou un risque imminent',
      'Pour les changements du week-end',
      'Pour éviter le processus normal'
    ],
    correctAnswer: 1,
    explanation: 'Les changements d\'urgence sont réservés à la résolution d\'incidents majeurs ou de risques imminents. Ils suivent un processus accéléré mais documenté.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR007',
    question: 'Quel est le concept fondamental du Service Desk ?',
    options: [
      'Résolution technique de tous les incidents',
      'Single Point of Contact (SPOC) entre IT et utilisateurs',
      'Gestion des changements',
      'Formation des utilisateurs'
    ],
    correctAnswer: 1,
    explanation: 'Le Service Desk est le point de contact UNIQUE (SPOC) entre l\'IT et tous les utilisateurs. Il coordonne même s\'il ne résout pas techniquement.',
    difficulty: 'easy',
    category: 'Pratiques ITIL',
    examTip: 'Service Desk = COORDINATEUR et point de contact, pas forcément expert technique'
  },
  {
    id: 'PR008',
    question: 'Quel pourcentage de résolution au premier contact vise généralement un Service Desk mature ?',
    options: [
      '30-40%',
      '50-60%',
      '70-80%',
      '90-100%'
    ],
    correctAnswer: 2,
    explanation: 'Un Service Desk mature vise 70-80% de résolution au premier contact grâce aux scripts, procédures, accès knowledge base et formation adéquate.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR009',
    question: 'Qu\'est-ce qu\'une erreur connue dans la gestion des problèmes ?',
    options: [
      'Un bug dans une application',
      'Un problème avec cause racine documentée et workaround identifié',
      'Une erreur de l\'utilisateur',
      'Un incident non résolu'
    ],
    correctAnswer: 1,
    explanation: 'Une erreur connue est un problème dont la cause racine est documentée et pour lequel un workaround (solution temporaire) a été identifié.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR010',
    question: 'Quelle est la différence entre SLA, OLA et UC ?',
    options: [
      'Il n\'y a pas de différence significative',
      'SLA=interne, OLA=externe, UC=fournisseur',
      'SLA=client externe, OLA=équipes internes, UC=contrat fournisseur',
      'Tous concernent uniquement les clients externes'
    ],
    correctAnswer: 2,
    explanation: 'SLA = accord avec client EXTERNE | OLA = accord entre équipes INTERNES | UC = contrat avec FOURNISSEUR externe supportant la livraison.',
    difficulty: 'medium',
    category: 'Pratiques ITIL',
    examTip: 'Toujours distinguer : externe (SLA), interne (OLA), fournisseur (UC)'
  },
  {
    id: 'PR011',
    question: 'Un serveur critique tombe en panne tous les lundis matin. Quelle pratique doit analyser cette situation ?',
    options: [
      'Gestion des incidents (pour restaurer rapidement)',
      'Gestion des problèmes (pour trouver la cause racine)',
      'Gestion des changements (pour modifier le serveur)',
      'Gestion des événements (pour détecter plus tôt)'
    ],
    correctAnswer: 1,
    explanation: 'La récurrence indique un problème sous-jacent. La gestion des problèmes doit analyser la cause racine (ex: job de backup concurrent) et proposer une solution permanente.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR012',
    question: 'Quel modèle d\'amélioration continue utilise ITIL 4 ?',
    options: [
      'Modèle en 5 étapes',
      'Modèle en 6 étapes',
      'Modèle en 7 étapes',
      'Modèle en 8 étapes'
    ],
    correctAnswer: 2,
    explanation: 'ITIL 4 utilise un modèle d\'amélioration continue en 7 étapes : Vision → État actuel → État désiré → Plan → Action → Vérification → Maintien.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR013',
    question: 'Qu\'est-ce que le Registre d\'Amélioration Continue (CIR) ?',
    options: [
      'Un log des incidents résolus',
      'Un repository centralisé de toutes les idées et opportunités d\'amélioration',
      'Un rapport mensuel de performance',
      'Une base de données des changements'
    ],
    correctAnswer: 1,
    explanation: 'Le CIR centralise TOUTES les idées et opportunités d\'amélioration, permet l\'évaluation valeur/effort, suit le pipeline d\'initiatives et mesure les bénéfices.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR014',
    question: 'Que signifie "shift-left" dans le contexte du Service Desk moderne ?',
    options: [
      'Déplacer le personnel vers la gauche du bâtiment',
      'Transférer plus de responsabilités aux utilisateurs via self-service',
      'Escalader plus rapidement vers le niveau 2',
      'Réduire les heures d\'ouverture'
    ],
    correctAnswer: 1,
    explanation: 'Shift-left signifie donner plus d\'autonomie aux utilisateurs via self-service et automatisation, réduisant la charge du Service Desk pour les tâches simples.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR015',
    question: 'Quelle métrique N\'EST PAS appropriée pour mesurer la performance des incidents ?',
    options: [
      'MTTR (Mean Time To Resolve)',
      'Taux de résolution au premier contact',
      'Nombre d\'incidents créés par technicien',
      'Satisfaction utilisateur (CSAT)'
    ],
    correctAnswer: 2,
    explanation: 'Mesurer les incidents créés par technicien peut encourager la sous-déclaration. Les bonnes métriques mesurent l\'efficacité de résolution, pas le volume.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR016',
    question: 'Un changement normal suit quel processus ?',
    options: [
      'Approbation automatique → Implémentation',
      'RFC → Évaluation → Autorisation → Planification → Implémentation → Review',
      'Urgence → Documentation post-implémentation',
      'Self-service → Validation automatique'
    ],
    correctAnswer: 1,
    explanation: 'Un changement normal suit le processus complet : création RFC, évaluation des risques, autorisation appropriée, planification, implémentation contrôlée et review.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR017',
    question: 'Qu\'est-ce que le Change Advisory Board (CAB) ?',
    options: [
      'L\'autorité finale qui approuve tous les changements',
      'Un groupe qui évalue et recommande sur les changements complexes',
      'L\'équipe qui implémente les changements',
      'Le comité de gestion des incidents'
    ],
    correctAnswer: 1,
    explanation: 'Le CAB est un groupe à composition variable qui évalue et RECOMMANDE sur les changements. L\'autorité de changement prend la décision finale.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR018',
    question: 'Pourquoi effectue-t-on un Post Implementation Review (PIR) ?',
    options: [
      'Pour punir les erreurs',
      'Pour documenter les succès et apprendre des échecs',
      'Uniquement si le changement a échoué',
      'Pour ralentir le processus'
    ],
    correctAnswer: 1,
    explanation: 'Le PIR permet d\'évaluer si les objectifs ont été atteints, d\'identifier les leçons apprises et d\'améliorer le processus. C\'est une opportunité d\'apprentissage.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR019',
    question: 'Une banque veut mesurer la disponibilité de son service critique. Quelle formule utiliser ?',
    options: [
      'Temps total - Temps de maintenance / Temps total × 100',
      '(Temps convenu - Downtime) / Temps convenu × 100',
      'Uptime / Temps total × 100',
      'Incidents résolus / Incidents totaux × 100'
    ],
    correctAnswer: 1,
    explanation: 'La disponibilité = (Temps de service convenu - Temps d\'indisponibilité) / Temps de service convenu × 100. Seul le downtime pendant les heures convenues compte.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR020',
    question: 'Que signifie 99.9% de disponibilité en temps d\'indisponibilité mensuel ?',
    options: [
      '4.38 heures',
      '43.8 minutes',
      '438 minutes',
      '4.38 minutes'
    ],
    correctAnswer: 1,
    explanation: '99.9% de disponibilité = 0.1% d\'indisponibilité. Sur 30 jours (43,200 minutes), cela représente 43.2 minutes, soit environ 43.8 minutes par mois.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR021',
    question: 'Quelle approche recommande ITIL 4 pour la gestion proactive des problèmes ?',
    options: [
      'Attendre que les incidents se produisent',
      'Analyser les tendances et anticiper les problèmes futurs',
      'Augmenter le personnel du Service Desk',
      'Automatiser tous les processus'
    ],
    correctAnswer: 1,
    explanation: 'La gestion proactive des problèmes analyse les tendances, patterns et données pour anticiper et prévenir les problèmes avant qu\'ils causent des incidents.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR022',
    question: 'Un utilisateur soumet 5 demandes identiques d\'accès. Quelle est la meilleure approche ?',
    options: [
      'Traiter chaque demande séparément',
      'Rejeter les demandes dupliquées',
      'Investiguer pourquoi l\'utilisateur soumet plusieurs fois et résoudre la cause',
      'Escalader au management'
    ],
    correctAnswer: 2,
    explanation: 'Les demandes multiples indiquent souvent un problème sous-jacent (processus peu clair, délais trop longs, manque de feedback). Il faut traiter la cause, pas les symptômes.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR023',
    question: 'Quel est l\'objectif de la séparation entre incident et problem management ?',
    options: [
      'Créer plus d\'emplois',
      'Permettre la restauration rapide ET l\'analyse approfondie sans conflit',
      'Complexifier les processus',
      'Satisfaire les auditeurs'
    ],
    correctAnswer: 1,
    explanation: 'La séparation permet à l\'incident management de se concentrer sur la VITESSE de restauration tandis que problem management fait l\'analyse APPROFONDIE sans pression temps.',
    difficulty: 'medium',
    category: 'Pratiques ITIL',
    examTip: 'Separation of concerns : rapidité (incident) vs prévention (problème)'
  },
  {
    id: 'PR024',
    question: 'Dans quel cas un workaround est-il acceptable en gestion des incidents ?',
    options: [
      'Jamais, il faut toujours une solution permanente',
      'Uniquement pour les incidents de priorité basse',
      'Quand il restaure rapidement le service en attendant la solution permanente',
      'Seulement si approuvé par le CAB'
    ],
    correctAnswer: 2,
    explanation: 'Les workarounds sont parfaitement acceptables en gestion des incidents car l\'objectif est la restauration RAPIDE du service. La solution permanente viendra du problem management.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR025',
    question: 'Qu\'est-ce qui caractérise le mieux l\'amélioration continue selon ITIL 4 ?',
    options: [
      'Un projet annuel d\'amélioration',
      'Une responsabilité de l\'équipe qualité uniquement',
      'Une activité intégrée dans toutes les pratiques et rôles',
      'Un processus optionnel selon les ressources'
    ],
    correctAnswer: 2,
    explanation: 'L\'amélioration continue est l\'affaire de TOUS, intégrée dans TOUTES les activités. Ce n\'est pas un projet ponctuel mais une culture permanente.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR026',
    question: 'Comment prioriser les idées dans le Registre d\'Amélioration Continue ?',
    options: [
      'Premier arrivé, premier servi',
      'Évaluation valeur/effort pour maximiser le ROI',
      'Uniquement les idées du management',
      'Par ordre alphabétique'
    ],
    correctAnswer: 1,
    explanation: 'Les idées sont priorisées selon leur rapport valeur/effort. Les quick wins (haute valeur, faible effort) sont généralement implémentés en premier pour créer momentum.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR027',
    question: 'Quelle affirmation sur les changements standard est correcte ?',
    options: [
      'Ils représentent généralement 5-10% du volume',
      'Ils devraient représenter 60-80% du volume total',
      'Ils nécessitent toujours une approbation CAB',
      'Ils sont plus risqués que les changements normaux'
    ],
    correctAnswer: 1,
    explanation: 'Dans une organisation mature, 60-80% des changements devraient être standard (pré-approuvés, faible risque). Cela libère du temps pour les changements complexes.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR028',
    question: 'Un SLA stipule 99% de disponibilité mais les utilisateurs se plaignent. Quelle peut être la cause ?',
    options: [
      'Le SLA est trop strict',
      'Les utilisateurs sont trop exigeants',
      'Le SLA mesure la mauvaise chose ou aux mauvais moments',
      'Il faut former les utilisateurs'
    ],
    correctAnswer: 2,
    explanation: 'Un SLA peut être respecté techniquement mais ne pas refléter l\'expérience utilisateur. Il faut aligner les métriques sur ce que les utilisateurs valorisent vraiment.',
    difficulty: 'hard',
    category: 'Pratiques ITIL',
    examTip: 'Les métriques doivent refléter la VALEUR perçue, pas seulement la performance technique'
  },

  // Pratiques avec objectif seulement (8 questions)
  {
    id: 'PR029',
    question: 'Quel est l\'objectif de la gestion de la sécurité de l\'information ?',
    options: [
      'Éliminer tous les risques de sécurité',
      'Protéger les informations nécessaires à l\'organisation pour conduire ses activités',
      'Implémenter le maximum de contrôles',
      'Empêcher tout accès externe'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif est de protéger les informations nécessaires selon la triade CIA (Confidentialité, Intégrité, Disponibilité) tout en permettant le business.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR030',
    question: 'Quel est l\'objectif de la gestion des relations ?',
    options: [
      'Gérer uniquement les relations avec les clients',
      'Établir et entretenir les liens entre l\'organisation et ses parties prenantes',
      'Organiser des événements sociaux',
      'Négocier les contrats'
    ],
    correctAnswer: 1,
    explanation: 'La gestion des relations vise à établir et maintenir des liens stratégiques et tactiques avec toutes les parties prenantes pour faciliter la co-création de valeur.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR031',
    question: 'Quel est l\'objectif de la gestion des fournisseurs ?',
    options: [
      'Réduire le nombre de fournisseurs',
      'S\'assurer que les fournisseurs et leur performance sont gérés appropriément',
      'Négocier les prix les plus bas',
      'Externaliser le maximum d\'activités'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif est d\'assurer que les fournisseurs et leur performance supportent effectivement la fourniture de services de qualité, pas juste de réduire les coûts.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR032',
    question: 'Quel est l\'objectif de la gestion des actifs IT ?',
    options: [
      'Acheter le maximum d\'équipements',
      'Planifier et gérer le cycle de vie complet de tous les actifs IT',
      'Faire l\'inventaire annuel',
      'Réduire les coûts d\'achat'
    ],
    correctAnswer: 1,
    explanation: 'La gestion des actifs IT vise à maximiser la valeur tout au long du cycle de vie complet des actifs, de l\'acquisition à la disposition.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR033',
    question: 'Quel est l\'objectif de la surveillance et gestion des événements ?',
    options: [
      'Créer le maximum d\'alertes',
      'Observer systématiquement et enregistrer les changements d\'état significatifs',
      'Remplacer le monitoring manuel',
      'Générer des rapports'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif est d\'observer systématiquement les services et composants pour détecter et enregistrer les événements significatifs permettant une action proactive.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR034',
    question: 'Quel est l\'objectif de la gestion des mises en production ?',
    options: [
      'Accélérer tous les déploiements',
      'Rendre disponibles des services nouveaux et modifiés pour utilisation',
      'Tester les applications',
      'Documenter les changements'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif est de rendre disponibles les services et fonctionnalités de manière contrôlée et coordonnée, en planifiant et packageant les changements.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR035',
    question: 'Quel est l\'objectif de la gestion de la configuration des services ?',
    options: [
      'Configurer tous les serveurs',
      'S\'assurer que des informations précises sur la configuration sont disponibles',
      'Standardiser les configurations',
      'Réduire le nombre de configurations'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif est d\'assurer que des informations précises et fiables sur la configuration des services et CIs sont disponibles quand et où nécessaire.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR036',
    question: 'Quel est l\'objectif de la gestion des déploiements ?',
    options: [
      'Développer de nouvelles applications',
      'Déplacer les composants nouveaux ou modifiés vers les environnements live',
      'Former les utilisateurs',
      'Planifier les projets'
    ],
    correctAnswer: 1,
    explanation: 'L\'objectif est l\'exécution technique contrôlée du déplacement de composants vers la production selon les plans approuvés.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },

  // Pratiques additionnelles et questions mixtes (4 questions)
  {
    id: 'PR037',
    question: 'Comment ITIL 4 positionne-t-il la gestion des connaissances ?',
    options: [
      'Comme une pratique isolée',
      'Intégrée dans toutes les pratiques pour partager et réutiliser l\'information',
      'Uniquement pour la documentation technique',
      'Remplacée par l\'IA'
    ],
    correctAnswer: 1,
    explanation: 'La gestion des connaissances est transversale, permettant de capturer, partager et réutiliser l\'information à travers toutes les pratiques et activités.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR038',
    question: 'Quelle pratique ITIL est la plus alignée avec les approches DevOps ?',
    options: [
      'Gestion des incidents uniquement',
      'Gestion des changements adaptée pour supporter l\'intégration continue',
      'Gestion des problèmes traditionnelle',
      'Service Desk classique'
    ],
    correctAnswer: 1,
    explanation: 'La gestion des changements ITIL 4 s\'adapte au DevOps avec plus de changements standard automatisés, supportant les déploiements fréquents et l\'intégration continue.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR039',
    question: 'Qu\'est-ce qui différencie les pratiques ITIL 4 des processus ITIL v3 ?',
    options: [
      'Il n\'y a pas de différence',
      'Les pratiques sont plus flexibles et incluent culture, technologie et compétences',
      'Les pratiques sont plus rigides',
      'Les pratiques remplacent complètement les processus'
    ],
    correctAnswer: 1,
    explanation: 'Les pratiques ITIL 4 sont plus holistiques que les processus v3, incluant non seulement les activités mais aussi la culture, les compétences, les outils et les ressources.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'PR040',
    question: 'Une organisation veut implémenter ITIL 4. Par où commencer selon les bonnes pratiques ?',
    options: [
      'Implémenter toutes les 34 pratiques simultanément',
      'Commencer par les pratiques créant le plus de valeur pour l\'organisation',
      'Suivre l\'ordre alphabétique des pratiques',
      'Commencer uniquement par les pratiques techniques'
    ],
    correctAnswer: 1,
    explanation: 'ITIL 4 recommande de commencer par les pratiques qui apportent le plus de valeur à l\'organisation spécifique, pas d\'implémenter tout le framework d\'un coup.',
    difficulty: 'medium',
    category: 'Pratiques ITIL',
    examTip: 'ITIL 4 = Adoption adaptée au contexte, pas implementation "big bang"'
  },

  // ========== NOUVELLES QUESTIONS EXAM (34 questions) ==========
  // Questions additionnelles pour renforcer la difficulté
  {
    id: 'EX001',
    question: 'Quelle pratique est responsable du déplacement des composants vers les environnements de production ?',
    options: [
      'L\'habilitation des changements',
      'La gestion des mises en production',
      'La gestion des actifs informatiques',
      'La gestion des déploiements'
    ],
    correctAnswer: 3,
    explanation: 'La gestion des déploiements est responsable du déplacement technique des composants nouveaux ou modifiés vers les environnements de production.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX002',
    question: 'Quelle pratique inclut la classification et la propriété des questions et des demandes des utilisateurs ?',
    options: [
      'Le centre de services',
      'La gestion des incidents',
      'L\'habilitation des changements',
      'La gestion des niveaux de service'
    ],
    correctAnswer: 0,
    explanation: 'Le centre de services est responsable de la classification initiale, de l\'attribution de la propriété et du routage des questions et demandes des utilisateurs.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX003',
    question: 'Quelle pratique identifie les métriques qui reflètent l\'expérience d\'un service pour le client ?',
    options: [
      'L\'amélioration continue',
      'Le centre de services',
      'La gestion des niveaux de service',
      'La gestion des problèmes'
    ],
    correctAnswer: 2,
    explanation: 'La gestion des niveaux de service identifie et définit les métriques qui reflètent vraiment l\'expérience client, pas seulement la performance technique.',
    difficulty: 'hard',
    category: 'Pratiques ITIL',
    examTip: 'Les métriques doivent refléter la PERCEPTION de valeur du client'
  },
  {
    id: 'EX004',
    question: 'Quelle est l\'utilisation PRINCIPALE d\'un calendrier des changements ?',
    options: [
      'Pour supporter la gestion des incidents et la planification d\'améliorations',
      'Pour gérer les changements urgents',
      'Pour planifier les changements et éviter les conflits',
      'Pour gérer les changements standard'
    ],
    correctAnswer: 2,
    explanation: 'Le calendrier des changements sert principalement à planifier et coordonner les changements pour éviter les conflits et optimiser les ressources.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX005',
    question: 'Quelle dimension de la gestion des services est axée sur les activités et la façon dont elles sont coordonnées ?',
    options: [
      'Organisations et personnes',
      'Information et technologie',
      'Partenaires et fournisseurs',
      'Flux de valeur et processus'
    ],
    correctAnswer: 3,
    explanation: 'La dimension "Flux de valeur et processus" se concentre sur la coordination et l\'intégration des activités pour créer de la valeur.',
    difficulty: 'easy',
    category: '4 Dimensions'
  },
  {
    id: 'EX006',
    question: 'De quelle façon la catégorisation des incidents assiste-t-elle la pratique de gestion des incidents ?',
    options: [
      'Elle permet de diriger l\'incident vers la zone de support appropriée',
      'Elle détermine la priorité assignée à l\'incident',
      'Elle s\'assure que les incidents sont résolus dans les délais convenus',
      'Elle détermine la façon dont le fournisseur de services est perçu'
    ],
    correctAnswer: 0,
    explanation: 'La catégorisation permet d\'acheminer efficacement l\'incident vers l\'équipe ou l\'expert approprié pour une résolution plus rapide.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX007',
    question: 'Identifiez le ou les mots manquants : Un service est un moyen qui permet la co-création de valeur en facilitant [?] que les clients veulent atteindre.',
    options: [
      'la garantie',
      'les résultats',
      'l\'utilité',
      'les livrables'
    ],
    correctAnswer: 1,
    explanation: 'Un service facilite les RÉSULTATS (outcomes) que les clients veulent atteindre, pas juste des livrables ou des outputs.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'EX008',
    question: 'Laquelle des options suivantes est une recommandation de la pratique d\'amélioration continue ?',
    options: [
      'Il devrait y avoir au moins une petite équipe qui se consacre à la conduite des efforts d\'amélioration continue',
      'Toutes les améliorations doivent être gérées comme des projets à phases multiples',
      'L\'amélioration continue doit être isolée des autres pratiques',
      'Les fournisseurs externes doivent être exclus des initiatives d\'amélioration'
    ],
    correctAnswer: 0,
    explanation: 'Avoir une équipe dédiée (même petite) permet de maintenir le focus et la momentum de l\'amélioration continue.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX009',
    question: 'Quel est un bénéfice potentiel de l\'utilisation d\'un outil de gestion des services pour supporter la gestion des incidents ?',
    options: [
      'Il peut s\'assurer que la cause des incidents est identifiée dans les délais convenus',
      'Il peut fournir un appariement automatisé des incidents aux problèmes ou aux erreurs connues',
      'Il peut s\'assurer que les contrats des fournisseurs sont alignés sur les besoins',
      'Il peut permettre la résolution et la clôture automatisées d\'incidents complexes'
    ],
    correctAnswer: 1,
    explanation: 'Les outils ITSM peuvent automatiquement associer les incidents aux problèmes connus et suggérer des solutions de contournement.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX010',
    question: 'Quel rôle soumet des demandes de services ?',
    options: [
      'L\'utilisateur ou son représentant autorisé',
      'Le client ou son représentant autorisé',
      'Le sponsor ou son représentant autorisé',
      'Le fournisseur ou son représentant autorisé'
    ],
    correctAnswer: 0,
    explanation: 'Les demandes de services sont soumises par les UTILISATEURS (ou leurs représentants), qui sont ceux qui utilisent le service au quotidien.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'EX011',
    question: 'Quel principe directeur recommande de prendre en considération les quatre dimensions de la gestion des services ?',
    options: [
      'Penser et travailler de façon holistique',
      'Avancer par itérations avec des retours',
      'Privilégier la valeur',
      'Opter pour la simplicité et rester pratique'
    ],
    correctAnswer: 0,
    explanation: 'Le principe "Penser et travailler de façon holistique" exige de considérer toutes les dimensions et leurs interdépendances.',
    difficulty: 'easy',
    category: 'Principes directeurs'
  },
  {
    id: 'EX012',
    question: 'Quelle option est supportée par la pratique de gestion des demandes de services ?',
    options: [
      'Une demande d\'autorisation d\'un changement qui pourrait avoir un impact',
      'Une demande d\'un utilisateur concernant quelque chose qui fait partie de la fourniture normale',
      'Une demande de restauration du service après une interruption',
      'Une demande d\'investigation sur la cause de plusieurs incidents'
    ],
    correctAnswer: 1,
    explanation: 'La gestion des demandes de services traite les demandes pré-approuvées faisant partie de la fourniture normale de services.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX013',
    question: 'Quel principe directeur recommande de collecter les données avant de déterminer ce qui peut être réutilisé ?',
    options: [
      'Privilégier la valeur',
      'Commencer là où vous êtes',
      'Opter pour la simplicité et rester pratique',
      'Avancer par itérations avec des retours'
    ],
    correctAnswer: 1,
    explanation: 'Le principe "Commencer là où vous êtes" exige une évaluation objective de l\'existant avant de décider quoi conserver ou changer.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'EX014',
    question: 'Laquelle des options N\'est habituellement PAS incluse dans la gestion des incidents ?',
    options: [
      'Des scripts pour recueillir des informations initiales',
      'Des procédures formalisées pour enregistrer les incidents',
      'Des procédures détaillées pour diagnostiquer les incidents',
      'Le recours à des connaissances spécialisées pour les incidents compliqués'
    ],
    correctAnswer: 2,
    explanation: 'La gestion des incidents vise la restauration rapide, pas le diagnostic détaillé qui relève de la gestion des problèmes.',
    difficulty: 'hard',
    category: 'Pratiques ITIL',
    examTip: 'Diagnostic approfondi = gestion des problèmes, PAS incidents'
  },
  {
    id: 'EX015',
    question: 'Laquelle des options décrit le mieux la nature des principes directeurs ?',
    options: [
      'Les principes directeurs peuvent guider une organisation en toutes circonstances',
      'Chaque principe directeur impose des actions et des décisions spécifiques',
      'Une organisation choisit et adopte un seul des sept principes directeurs',
      'Les principes directeurs décrivent les processus que toutes les organisations doivent adopter'
    ],
    correctAnswer: 0,
    explanation: 'Les principes directeurs sont universels et peuvent guider toute organisation dans toute circonstance, mais leur application est flexible.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'EX016',
    question: 'Quel énoncé sur l\'autorité de changement est CORRECT ?',
    options: [
      'Une seule autorité doit être assignée pour autoriser tous les types de changements',
      'Une autorité de changement doit être assignée pour chaque type et modèle',
      'Les changements normaux sont pré-autorisés et ne requièrent pas d\'autorité',
      'Les changements urgents peuvent être implémentés sans autorisation'
    ],
    correctAnswer: 1,
    explanation: 'Différents types de changements peuvent avoir différentes autorités appropriées selon leur risque et complexité.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX017',
    question: 'Quelle activité de la chaîne de valeur permet de s\'assurer que les personnes comprennent la vision de l\'organisation ?',
    options: [
      'Améliorer',
      'Planifier',
      'Fournir et soutenir',
      'Obtenir/construire'
    ],
    correctAnswer: 1,
    explanation: 'L\'activité "Planifier" inclut la communication de la vision, de la stratégie et de la direction de l\'organisation.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'EX018',
    question: 'Quel énoncé sur les activités de la chaîne de valeur est CORRECT ?',
    options: [
      'Chaque pratique appartient à une activité spécifique',
      'Une combinaison d\'activités et de pratiques constitue une relation de service',
      'Les activités constituent un flux de travail unique pour créer de la valeur',
      'Chaque activité transforme des entrées spécifiques en livrables'
    ],
    correctAnswer: 3,
    explanation: 'Chaque activité de la chaîne de valeur transforme des entrées spécifiques en sorties/livrables qui créent de la valeur.',
    difficulty: 'hard',
    category: 'Système de valeur des services'
  },
  {
    id: 'EX019',
    question: 'Quel est le but de la pratique de gestion des fournisseurs ?',
    options: [
      'S\'assurer que les fournisseurs et leurs performances sont gérés de manière appropriée',
      'Aligner les pratiques et services sur les besoins business évolutifs',
      'S\'assurer des performances aux niveaux stratégiques et tactiques',
      'S\'assurer que des informations exactes sur la configuration sont disponibles'
    ],
    correctAnswer: 0,
    explanation: 'La gestion des fournisseurs vise à gérer appropriément les fournisseurs et leurs performances pour supporter la fourniture de services.',
    difficulty: 'easy',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX020',
    question: 'Quels sont les deux types de coûts que le consommateur d\'un service doit évaluer ?',
    options: [
      'Le prix du service et le coût de la création du service',
      'Les coûts supprimés par le service et les coûts imposés par le service',
      'Le coût de la fourniture et le coût de l\'amélioration',
      'Le coût du logiciel et le coût du matériel'
    ],
    correctAnswer: 1,
    explanation: 'Les consommateurs évaluent les coûts SUPPRIMÉS (ce qu\'ils n\'ont plus à gérer) versus les coûts IMPOSÉS (prix, formation, etc.).',
    difficulty: 'hard',
    category: 'Concepts fondamentaux',
    examTip: 'PIÈGE : Focus sur la perspective du CONSOMMATEUR, pas du fournisseur'
  },
  {
    id: 'EX021',
    question: 'Quel est un but de la pratique du centre de services ?',
    options: [
      'Réduire la probabilité et l\'impact des incidents',
      'Maximiser le nombre de changements IT réussis',
      'Capturer la demande de résolution d\'incidents et les demandes de services',
      'Définir des cibles claires basées sur le business'
    ],
    correctAnswer: 2,
    explanation: 'Le centre de services capture et enregistre toutes les demandes (incidents, demandes de service, questions) comme point d\'entrée unique.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX022',
    question: 'Comment une organisation doit-elle adopter des méthodes d\'amélioration continue ?',
    options: [
      'En utilisant une nouvelle méthode pour chaque amélioration',
      'En choisissant quelques méthodes clés pour les types d\'améliorations gérées',
      'En renforçant l\'aptitude à utiliser autant de méthodes que possible',
      'En choisissant une seule méthode pour toutes les améliorations'
    ],
    correctAnswer: 1,
    explanation: 'Il faut sélectionner quelques méthodes appropriées et les maîtriser plutôt que d\'essayer toutes les méthodes possibles.',
    difficulty: 'medium',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX023',
    question: 'Quel concept ITIL décrit la gouvernance ?',
    options: [
      'Les sept principes directeurs',
      'Les quatre dimensions de la gestion des services',
      'La chaîne de valeur des services',
      'Le système de valeur des services'
    ],
    correctAnswer: 3,
    explanation: 'La gouvernance est un composant du Système de Valeur des Services (SVS), fournissant direction et contrôle.',
    difficulty: 'medium',
    category: 'Système de valeur des services'
  },
  {
    id: 'EX024',
    question: 'Laquelle est une recommandation de la pratique du centre de services ?',
    options: [
      'Les centres de services doivent éviter de recourir à l\'automatisation',
      'Les centres de services doivent être très techniques',
      'Les centres de services doivent comprendre l\'organisation dans son ensemble',
      'Les centres de services doivent être une équipe physique dans un même endroit'
    ],
    correctAnswer: 2,
    explanation: 'Le centre de services doit avoir une compréhension holistique de l\'organisation pour mieux servir les utilisateurs.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX025',
    question: 'Quel principe directeur recommande d\'organiser le travail en parties plus petites et gérables ?',
    options: [
      'Privilégier la valeur',
      'Commencer là où vous êtes',
      'Avancer par itération avec des retours',
      'Collaborer et promouvoir la visibilité'
    ],
    correctAnswer: 2,
    explanation: 'Le principe "Avancer par itération avec des retours" recommande de diviser le travail en petites parties pour obtenir du feedback rapidement.',
    difficulty: 'easy',
    category: 'Principes directeurs'
  },
  {
    id: 'EX026',
    question: 'Que se passe-t-il lorsqu\'une solution de contournement devient permanente pour un problème non résolvable de façon rentable ?',
    options: [
      'Une demande de changement est soumise au contrôle des changements',
      'La gestion des problèmes restaure le service dès que possible',
      'Le problème conserve l\'état d\'erreur connue',
      'L\'enregistrement du problème est supprimé'
    ],
    correctAnswer: 2,
    explanation: 'Si un problème ne peut être résolu de façon rentable, il reste documenté comme erreur connue avec son workaround permanent.',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX027',
    question: 'Quelle est la définition d\'un changement ?',
    options: [
      'Ajouter, modifier ou supprimer tout ce qui pourrait avoir un effet sur les services',
      'S\'assurer que des informations exactes sur la configuration sont disponibles',
      'Mettre à disposition des fonctionnalités nouvelles ou modifiées',
      'Déplacer du matériel ou logiciels vers des environnements de production'
    ],
    correctAnswer: 0,
    explanation: 'Un changement est l\'ajout, la modification ou la suppression de tout ce qui pourrait avoir un effet direct ou indirect sur les services.',
    difficulty: 'easy',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'EX028',
    question: 'Quelle est la définition d\'un événement ?',
    options: [
      'Tout changement d\'état significatif pour la gestion d\'un service ou CI',
      'Tout composant qui doit être géré pour fournir un service',
      'L\'interruption non planifiée d\'un service',
      'Tout composant avec valeur financière contribuant aux services'
    ],
    correctAnswer: 0,
    explanation: 'Un événement est tout changement d\'état significatif pour la gestion d\'un service ou d\'un élément de configuration (CI).',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'EX029',
    question: 'Quelle option décrit des résultats (outcomes) ?',
    options: [
      'Éléments livrables tangibles ou intangibles',
      'Fonctionnalité offerte par un produit ou service',
      'Résultats souhaités par une partie prenante',
      'Configuration des ressources d\'une organisation'
    ],
    correctAnswer: 2,
    explanation: 'Les résultats (outcomes) sont ce que les parties prenantes veulent vraiment atteindre, pas juste des livrables ou des outputs.',
    difficulty: 'hard',
    category: 'Concepts fondamentaux'
  },
  {
    id: 'EX030',
    question: 'Laquelle N\'EST PAS un élément clé de la dimension "information et technologie" ?',
    options: [
      'Sécurité et conformité',
      'Systèmes de communication et bases de connaissances',
      'Systèmes de gestion du flux de travaux',
      'Rôles et responsabilités'
    ],
    correctAnswer: 3,
    explanation: 'Les rôles et responsabilités relèvent de la dimension "Organisations et personnes", pas "Information et technologie".',
    difficulty: 'medium',
    category: '4 Dimensions'
  },
  {
    id: 'EX031',
    question: 'Quelles pratiques sont généralement impliquées dans l\'implémentation de la résolution d\'un problème ?',
    options: [
      'L\'amélioration continue et la gestion des demandes de services',
      'La gestion des demandes de services et la gestion des niveaux de service',
      'La gestion des niveaux de service et l\'habilitation des changements',
      'L\'amélioration continue et l\'habilitation des changements'
    ],
    correctAnswer: 3,
    explanation: 'La résolution d\'un problème implique généralement l\'amélioration continue (pour l\'analyse) et l\'habilitation des changements (pour implémenter la solution).',
    difficulty: 'hard',
    category: 'Pratiques ITIL'
  },
  {
    id: 'EX032',
    question: 'Quel est un élément clé du principe directeur "opter pour la simplicité et rester pratique" ?',
    options: [
      'Essayer de créer une solution pour chaque exception',
      'Comprendre comment chaque élément contribue à la création de valeur',
      'Ignorer les objectifs contradictoires des parties prenantes',
      'Commencer par une solution complexe, puis simplifier'
    ],
    correctAnswer: 1,
    explanation: 'Ce principe exige de comprendre la valeur de chaque élément pour éliminer ce qui n\'apporte pas de valeur.',
    difficulty: 'hard',
    category: 'Principes directeurs'
  },
  {
    id: 'EX033',
    question: 'Que faut-il faire en premier lorsqu\'on applique le principe "privilégier la valeur" ?',
    options: [
      'Identifier les résultats facilités par le service',
      'Identifier tous les fournisseurs et partenaires impliqués',
      'Déterminer qui est le consommateur du service dans chaque situation',
      'Déterminer le coût de la fourniture du service'
    ],
    correctAnswer: 2,
    explanation: 'Il faut d\'abord identifier QUI sont les consommateurs/parties prenantes avant de pouvoir comprendre ce qu\'ils valorisent.',
    difficulty: 'medium',
    category: 'Principes directeurs'
  },
  {
    id: 'EX034',
    question: 'Un fournisseur décrit un package incluant laptop, logiciels, licences et support. C\'est un exemple de ?',
    options: [
      'Valeur',
      'Résultat',
      'Garantie',
      'Offre de service'
    ],
    correctAnswer: 3,
    explanation: 'Une offre de service est une description formelle d\'un ou plusieurs services, conçue pour répondre aux besoins d\'un groupe de consommateurs.',
    difficulty: 'medium',
    category: 'Concepts fondamentaux'
  }
];

// Validation des données
console.log(`Total questions: ${quizQuestions.length}`);
console.log(`Questions par catégorie:`);
console.log(`- Concepts fondamentaux: ${quizQuestions.filter(q => q.category === 'Concepts fondamentaux').length}`);
console.log(`- Principes directeurs: ${quizQuestions.filter(q => q.category === 'Principes directeurs').length}`);
console.log(`- 4 Dimensions: ${quizQuestions.filter(q => q.category === '4 Dimensions').length}`);
console.log(`- Système de valeur des services: ${quizQuestions.filter(q => q.category === 'Système de valeur des services').length}`);
console.log(`- Pratiques ITIL: ${quizQuestions.filter(q => q.category === 'Pratiques ITIL').length}`);

console.log(`\nQuestions par difficulté:`);
console.log(`- Facile: ${quizQuestions.filter(q => q.difficulty === 'easy').length}`);
console.log(`- Moyen: ${quizQuestions.filter(q => q.difficulty === 'medium').length}`);
console.log(`- Difficile: ${quizQuestions.filter(q => q.difficulty === 'hard').length}`);