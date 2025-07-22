import type { QuizQuestion } from '@/types'

export const examQuestions: QuizQuestion[] = [
  // ========== DÉFINITIONS ET CONCEPTS CLÉS (20 questions) ==========
  {
    id: 'def-1',
    question: "Selon ITIL 4, qu'est-ce que la valeur ?",
    options: [
      "Un bénéfice quantifiable uniquement en termes financiers",
      "La perception des bénéfices, de l'utilité et de l'importance par les parties prenantes",
      "Le prix qu'un client est prêt à payer pour un service",
      "La différence entre les coûts et les revenus d'un service"
    ],
    correctAnswer: 1,
    explanation: "La valeur selon ITIL 4 est la perception des bénéfices, de l'utilité et de l'importance par les parties prenantes. Elle est TOUJOURS co-créée entre le fournisseur et le consommateur.",
    difficulty: 'easy',
    category: 'concepts-fondamentaux',
    examTip: "⚠️ PIÈGE: La valeur n'est jamais créée unilatéralement par le fournisseur seul, elle est TOUJOURS co-créée."
  },
  {
    id: 'def-2',
    question: "Quelle est la différence principale entre un SERVICE et un PRODUIT selon ITIL 4 ?",
    options: [
      "Un service est intangible, un produit est tangible",
      "Un service est un moyen de co-créer de la valeur, un produit est une configuration de ressources",
      "Un service est gratuit, un produit est payant",
      "Il n'y a pas de différence, les termes sont interchangeables"
    ],
    correctAnswer: 1,
    explanation: "Un SERVICE est un moyen de co-créer de la valeur en facilitant les résultats que les clients veulent obtenir. Un PRODUIT est une configuration de ressources conçue pour offrir de la valeur. Un service utilise généralement un ou plusieurs produits.",
    difficulty: 'medium',
    category: 'concepts-fondamentaux',
    examTip: "💡 Exemple: Office 365 (produit) fait partie du service de productivité bureautique."
  },
  {
    id: 'def-3',
    question: "Qu'est-ce que l'UTILITÉ d'un service ?",
    options: [
      "La disponibilité et la fiabilité du service",
      "L'adaptation à l'usage - ce que fait le service",
      "Le coût total de possession du service",
      "La facilité d'utilisation du service"
    ],
    correctAnswer: 1,
    explanation: "L'UTILITÉ est l'adaptation à l'usage (fit for purpose) - ce que fait le service. La GARANTIE est l'adaptation à l'utilisation (fit for use) - comment il le fait (disponibilité, capacité, sécurité, continuité).",
    difficulty: 'medium',
    category: 'concepts-fondamentaux',
    examTip: "📧 Exemple email: Utilité = envoyer/recevoir des messages, Garantie = disponible 99.9%, sécurisé, rapide"
  },
  {
    id: 'def-4',
    question: "Quelle est la différence entre OUTPUT et OUTCOME ?",
    options: [
      "Output est le résultat pour le client, outcome est ce qui est produit",
      "Output est tangible, outcome est intangible",
      "Output est ce qui est produit/livré, outcome est le résultat obtenu par le client",
      "Il n'y a pas de différence significative"
    ],
    correctAnswer: 2,
    explanation: "OUTPUT est ce qui est produit ou livré (tangible). OUTCOME est le résultat obtenu par le client (la valeur). ITIL 4 se concentre sur les outcomes, pas seulement les outputs.",
    difficulty: 'hard',
    category: 'concepts-fondamentaux',
    examTip: "🎯 Exemple: Output = rapport de 100 pages, Outcome = décision stratégique éclairée"
  },
  {
    id: 'def-5',
    question: "Qu'est-ce qu'un CONSOMMATEUR de services selon ITIL 4 ?",
    options: [
      "Une personne qui utilise le service au quotidien",
      "Une personne qui paie pour le service",
      "Un rôle générique couvrant client, utilisateur et sponsor",
      "Une organisation qui fournit le service"
    ],
    correctAnswer: 2,
    explanation: "Le CONSOMMATEUR est un terme générique qui englobe les rôles de client (définit les exigences et paie), utilisateur (utilise le service) et sponsor (autorise le budget).",
    difficulty: 'medium',
    category: 'concepts-fondamentaux'
  },
  {
    id: 'def-6',
    question: "Qu'est-ce qu'une PRATIQUE selon ITIL 4 ?",
    options: [
      "Une procédure documentée à suivre",
      "Un ensemble de ressources organisationnelles pour effectuer un travail",
      "Une activité de la chaîne de valeur",
      "Un principe directeur à appliquer"
    ],
    correctAnswer: 1,
    explanation: "Une pratique est un ensemble de ressources organisationnelles conçues pour effectuer un travail ou accomplir un objectif. Elle inclut des personnes, processus, outils et connaissances.",
    difficulty: 'easy',
    category: 'concepts-fondamentaux'
  },
  {
    id: 'def-7',
    question: "Qu'est-ce que la GARANTIE d'un service ?",
    options: [
      "Une promesse légale de remboursement",
      "L'assurance que le service répondra aux niveaux convenus",
      "Un document contractuel avec le client",
      "La certification qualité du fournisseur"
    ],
    correctAnswer: 1,
    explanation: "La GARANTIE est l'assurance qu'un service répondra aux exigences convenues (adaptation à l'utilisation). Elle couvre la disponibilité, capacité, sécurité et continuité.",
    difficulty: 'medium',
    category: 'concepts-fondamentaux',
    examTip: "⚠️ Utilité ET Garantie sont TOUTES DEUX nécessaires pour créer de la valeur"
  },
  {
    id: 'def-8',
    question: "Comment la valeur est-elle créée selon ITIL 4 ?",
    options: [
      "Uniquement par le fournisseur de services",
      "Uniquement par le client",
      "Par co-création entre le fournisseur et le consommateur",
      "Par les processus automatisés"
    ],
    correctAnswer: 2,
    explanation: "La valeur est TOUJOURS co-créée par la collaboration entre le fournisseur de services et le consommateur. C'est un concept fondamental d'ITIL 4.",
    difficulty: 'easy',
    category: 'concepts-fondamentaux',
    examTip: "🎯 Question piège fréquente: la valeur n'est JAMAIS créée unilatéralement"
  },
  {
    id: 'def-9',
    question: "Qu'est-ce qu'un SERVICE RELATIONSHIP selon ITIL 4 ?",
    options: [
      "Un contrat entre le fournisseur et le client",
      "Une coopération entre organisations pour co-créer de la valeur",
      "La relation entre différents services IT",
      "Le lien entre les incidents et les problèmes"
    ],
    correctAnswer: 1,
    explanation: "Une service relationship est une coopération entre un fournisseur de services et un consommateur de services, incluant la gestion des services, la fourniture de services et la consommation de services.",
    difficulty: 'medium',
    category: 'concepts-fondamentaux'
  },
  {
    id: 'def-10',
    question: "Que signifie 'Résultat' (Result) dans le contexte ITIL 4 ?",
    options: [
      "Uniquement les outcomes positifs",
      "Les outputs et outcomes pour les parties prenantes",
      "Les indicateurs de performance uniquement",
      "Les livrables du projet"
    ],
    correctAnswer: 1,
    explanation: "Un résultat (result) peut être un output (livrable) ou un outcome (conséquence) pour une partie prenante. Les résultats peuvent être positifs ou négatifs.",
    difficulty: 'hard',
    category: 'concepts-fondamentaux'
  },

  // ========== 7 PRINCIPES DIRECTEURS (25 questions) ==========
  {
    id: 'prin-1',
    question: "Quel principe directeur recommande d'évaluer ce qui existe déjà avant de créer quelque chose de nouveau ?",
    options: [
      "Se concentrer sur la valeur",
      "Commencer là où on se trouve",
      "Progresser de manière itérative avec des retours",
      "Penser et travailler de manière holistique"
    ],
    correctAnswer: 1,
    explanation: "Le principe 'Commencer là où on se trouve' recommande d'évaluer l'état actuel, d'observer directement, et de réutiliser ce qui fonctionne déjà avant de reconstruire.",
    difficulty: 'easy',
    category: 'principes-directeurs',
    examTip: "⚠️ Ne pas confondre avec 'Opter pour la simplicité' qui concerne la réduction de la complexité"
  },
  {
    id: 'prin-2',
    question: "Dans quel ordre les 7 principes directeurs doivent-ils être appliqués ?",
    options: [
      "Dans l'ordre où ils sont listés dans le syllabus",
      "Du plus simple au plus complexe",
      "Aucun ordre spécifique - ils s'appliquent selon le contexte",
      "En commençant toujours par 'Se concentrer sur la valeur'"
    ],
    correctAnswer: 2,
    explanation: "Les 7 principes directeurs n'ont PAS d'ordre d'application spécifique. Ils sont TOUS pertinents, TOUJOURS, mais leur application est adaptée au contexte.",
    difficulty: 'medium',
    category: 'principes-directeurs',
    examTip: "🎯 PIÈGE: Les principes s'appliquent TOUS mais de manière flexible selon la situation"
  },
  {
    id: 'prin-3',
    question: "Quel principe directeur recommande d'utiliser le minimum d'étapes nécessaires pour atteindre un objectif ?",
    options: [
      "Progresser de manière itérative avec des retours",
      "Collaborer et promouvoir la visibilité",
      "Opter pour la simplicité et rester pratique",
      "Optimiser et automatiser"
    ],
    correctAnswer: 2,
    explanation: "Le principe 'Opter pour la simplicité et rester pratique' recommande d'éliminer ce qui n'apporte pas de valeur et d'utiliser le minimum d'étapes nécessaires.",
    difficulty: 'easy',
    category: 'principes-directeurs'
  },
  {
    id: 'prin-4',
    question: "Le principe 'Optimiser et automatiser' recommande quel ordre d'action ?",
    options: [
      "Automatiser d'abord, puis optimiser si nécessaire",
      "Optimiser d'abord, puis automatiser",
      "Les deux simultanément pour gagner du temps",
      "L'ordre n'a pas d'importance"
    ],
    correctAnswer: 1,
    explanation: "L'ordre est IMPÉRATIF : 1) OPTIMISER d'abord pour éliminer les inefficacités, 2) AUTOMATISER ensuite. L'automatisation d'un processus défaillant amplifie les problèmes.",
    difficulty: 'medium',
    category: 'principes-directeurs',
    examTip: "⚠️ PIÈGE MAJEUR: 'Automatiser pour améliorer' est TOUJOURS faux - optimisez d'abord!"
  },
  {
    id: 'prin-5',
    question: "Quel principe directeur insiste sur l'importance de la transparence et de la communication ouverte ?",
    options: [
      "Se concentrer sur la valeur",
      "Collaborer et promouvoir la visibilité",
      "Penser et travailler de manière holistique",
      "Progresser de manière itérative avec des retours"
    ],
    correctAnswer: 1,
    explanation: "Le principe 'Collaborer et promouvoir la visibilité' encourage la transparence, la communication ouverte, l'implication des bonnes personnes et l'évitement des silos.",
    difficulty: 'easy',
    category: 'principes-directeurs',
    examTip: "💡 Collaboration ≠ Consensus (tout le monde décide)"
  },
  {
    id: 'prin-6',
    question: "Qu'est-ce que le principe 'Penser et travailler de manière holistique' recommande ?",
    options: [
      "Se concentrer uniquement sur son domaine d'expertise",
      "Comprendre comment toutes les parties du système fonctionnent ensemble",
      "Diviser le travail en silos spécialisés",
      "Automatiser tous les processus possibles"
    ],
    correctAnswer: 1,
    explanation: "Ce principe recommande de comprendre comment toutes les parties d'un système travaillent ensemble pour délivrer de la valeur, en évitant de travailler en silos.",
    difficulty: 'medium',
    category: 'principes-directeurs'
  },
  {
    id: 'prin-7',
    question: "Pourquoi le principe 'Progresser de manière itérative avec des retours' est-il important ?",
    options: [
      "Il permet de tout livrer en une seule fois",
      "Il réduit les risques et permet l'apprentissage continu",
      "Il élimine le besoin de planification",
      "Il accélère toujours la livraison"
    ],
    correctAnswer: 1,
    explanation: "Ce principe permet de réduire les risques, d'obtenir des retours fréquents, d'apprendre et de s'adapter continuellement, plutôt que de tout livrer en une seule grande livraison risquée.",
    difficulty: 'medium',
    category: 'principes-directeurs'
  },
  {
    id: 'prin-8',
    question: "Les principes directeurs ITIL 4 sont-ils obligatoires ou facultatifs ?",
    options: [
      "Obligatoires dans toutes les situations",
      "Facultatifs selon l'organisation",
      "Universellement applicables mais adaptables au contexte",
      "Obligatoires uniquement pour les certifications"
    ],
    correctAnswer: 2,
    explanation: "Les principes directeurs sont universellement applicables et recommandés dans toutes les situations, mais leur application doit être adaptée au contexte spécifique.",
    difficulty: 'hard',
    category: 'principes-directeurs',
    examTip: "🎯 Les principes sont TOUJOURS pertinents mais JAMAIS rigides"
  },
  {
    id: 'prin-9',
    question: "Quel principe directeur est le plus important selon ITIL 4 ?",
    options: [
      "Se concentrer sur la valeur",
      "Optimiser et automatiser",
      "Aucun - ils sont tous également importants",
      "Cela dépend de l'organisation"
    ],
    correctAnswer: 2,
    explanation: "AUCUN principe n'est plus important qu'un autre. Les 7 principes directeurs sont complémentaires et doivent être considérés ensemble selon le contexte.",
    difficulty: 'medium',
    category: 'principes-directeurs',
    examTip: "⚠️ PIÈGE: Ne jamais hiérarchiser les principes entre eux"
  },
  {
    id: 'prin-10',
    question: "Comment le principe 'Se concentrer sur la valeur' s'applique-t-il ?",
    options: [
      "Uniquement aux activités génératrices de revenus",
      "À toutes les activités et décisions de l'organisation",
      "Seulement lors de la conception de nouveaux services",
      "Principalement pour les interactions avec les clients"
    ],
    correctAnswer: 1,
    explanation: "Le principe 'Se concentrer sur la valeur' s'applique à TOUTES les activités et décisions. Tout ce que fait l'organisation doit mapper directement ou indirectement à la valeur pour les parties prenantes.",
    difficulty: 'easy',
    category: 'principes-directeurs'
  },

  // ========== 4 DIMENSIONS + PESTLE (15 questions) ==========
  {
    id: 'dim-1',
    question: "Quelles sont les 4 dimensions de la gestion des services selon ITIL 4 ?",
    options: [
      "Personnes, Processus, Produits, Partenaires",
      "Organisations et personnes, Information et technologie, Partenaires et fournisseurs, Flux de valeur et processus",
      "Stratégie, Conception, Transition, Exploitation",
      "Planifier, Faire, Vérifier, Agir"
    ],
    correctAnswer: 1,
    explanation: "Les 4 dimensions sont : 1) Organisations et personnes, 2) Information et technologie, 3) Partenaires et fournisseurs, 4) Flux de valeur et processus. Elles doivent TOUTES être considérées.",
    difficulty: 'easy',
    category: 'dimensions',
    examTip: "🎯 Mnémotechnique : OIPF (Organisation, Information, Partenaires, Flux)"
  },
  {
    id: 'dim-2',
    question: "Que représente PESTLE dans le contexte des 4 dimensions ?",
    options: [
      "Une 5ème dimension de la gestion des services",
      "Les facteurs externes qui influencent les 4 dimensions",
      "Une méthode de gestion de projet",
      "Les types de parties prenantes"
    ],
    correctAnswer: 1,
    explanation: "PESTLE représente les facteurs externes (Politique, Économique, Social, Technologique, Légal, Environnemental) qui influencent et contraignent les 4 dimensions.",
    difficulty: 'medium',
    category: 'dimensions',
    examTip: "⚠️ PESTLE n'est PAS une 5ème dimension, ce sont des facteurs EXTERNES"
  },
  {
    id: 'dim-3',
    question: "Quelle dimension est principalement concernée par les compétences, rôles et responsabilités ?",
    options: [
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Organisations et personnes",
      "Flux de valeur et processus"
    ],
    correctAnswer: 2,
    explanation: "La dimension 'Organisations et personnes' couvre la structure organisationnelle, la culture, les compétences, les rôles et responsabilités, ainsi que les systèmes de management.",
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'dim-4',
    question: "Les 4 dimensions doivent-elles TOUTES être considérées pour chaque service ?",
    options: [
      "Non, seulement celles qui sont pertinentes",
      "Oui, absolument toutes sans exception",
      "Seulement pour les services critiques",
      "Cela dépend de la taille de l'organisation"
    ],
    correctAnswer: 1,
    explanation: "Les 4 dimensions doivent TOUTES être considérées pour CHAQUE produit et service. Négliger une dimension garantit presque l'échec.",
    difficulty: 'medium',
    category: 'dimensions',
    examTip: "🎯 PIÈGE FRÉQUENT: Les 4 dimensions sont TOUJOURS toutes pertinentes"
  },
  {
    id: 'dim-5',
    question: "Quelle dimension inclut les contrats et accords avec les fournisseurs externes ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctAnswer: 2,
    explanation: "La dimension 'Partenaires et fournisseurs' couvre toutes les relations avec d'autres organisations, incluant contrats, accords, et gestion des fournisseurs.",
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'dim-6',
    question: "Comment les facteurs PESTLE interagissent-ils avec les 4 dimensions ?",
    options: [
      "Ils remplacent les dimensions dans certains contextes",
      "Ils constituent une dimension supplémentaire",
      "Ils influencent et contraignent toutes les dimensions",
      "Ils s'appliquent uniquement à la dimension Partenaires"
    ],
    correctAnswer: 2,
    explanation: "Les facteurs PESTLE sont des influences externes qui affectent et contraignent TOUTES les 4 dimensions. Ils créent le contexte dans lequel les services opèrent.",
    difficulty: 'hard',
    category: 'dimensions'
  },
  {
    id: 'dim-7',
    question: "Quelle dimension couvre les informations et connaissances nécessaires à la gestion des services ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctAnswer: 1,
    explanation: "La dimension 'Information et technologie' inclut les informations et connaissances, ainsi que les technologies nécessaires à la gestion et fourniture des services.",
    difficulty: 'easy',
    category: 'dimensions'
  },
  {
    id: 'dim-8',
    question: "Pourquoi est-il important de considérer toutes les dimensions ensemble ?",
    options: [
      "Pour la conformité réglementaire uniquement",
      "Parce qu'elles sont interdépendantes et s'influencent mutuellement",
      "Pour réduire les coûts",
      "C'est une exigence de certification"
    ],
    correctAnswer: 1,
    explanation: "Les 4 dimensions sont interdépendantes. Un changement dans une dimension affecte les autres. Les considérer ensemble assure une approche holistique.",
    difficulty: 'medium',
    category: 'dimensions'
  },

  // ========== SVS ET CHAÎNE DE VALEUR (20 questions) ==========
  {
    id: 'svs-1',
    question: "Quels sont les composants du Système de Valeur des Services (SVS) ?",
    options: [
      "Chaîne de valeur, Pratiques, Gouvernance uniquement",
      "Chaîne de valeur, Pratiques, Principes directeurs, Gouvernance, Amélioration continue",
      "Uniquement la chaîne de valeur et les pratiques",
      "Les 4 dimensions et PESTLE"
    ],
    correctAnswer: 1,
    explanation: "Le SVS comprend : 1) Chaîne de valeur des services (6 activités), 2) Pratiques ITIL (34 au total), 3) Principes directeurs (7), 4) Gouvernance, 5) Amélioration continue.",
    difficulty: 'medium',
    category: 'systeme-valeur',
    examTip: "💡 Le SVS transforme la DEMANDE en VALEUR"
  },
  {
    id: 'svs-2',
    question: "Les activités de la chaîne de valeur doivent-elles être exécutées dans un ordre fixe ?",
    options: [
      "Oui, toujours dans l'ordre : Planifier → Améliorer → Engager → etc.",
      "Non, elles sont flexibles et peuvent être combinées selon les besoins",
      "Oui, mais seulement pour les services critiques",
      "L'ordre dépend du type de service"
    ],
    correctAnswer: 1,
    explanation: "La chaîne de valeur est FLEXIBLE et NON-SÉQUENTIELLE. Les activités peuvent être combinées dans n'importe quel ordre, exécutées simultanément, ou répétées selon les besoins.",
    difficulty: 'hard',
    category: 'systeme-valeur',
    examTip: "⚠️ PIÈGE FRÉQUENT: La CVS n'est PAS un processus linéaire!"
  },
  {
    id: 'svs-3',
    question: "Quelle activité de la chaîne de valeur est présente dans TOUS les flux de valeur ?",
    options: [
      "Planifier",
      "Engager",
      "Améliorer",
      "Concevoir et faire la transition"
    ],
    correctAnswer: 2,
    explanation: "L'activité 'Améliorer' est présente dans TOUS les flux de valeur car l'amélioration continue est intégrée dans tout ce que fait l'organisation.",
    difficulty: 'medium',
    category: 'systeme-valeur',
    examTip: "🎯 AMÉLIORER est la seule activité TOUJOURS présente"
  },
  {
    id: 'svs-4',
    question: "Quelle activité de la chaîne de valeur assure que les parties prenantes comprennent la vision de l'organisation ?",
    options: [
      "Engager",
      "Planifier", 
      "Concevoir et faire la transition",
      "Améliorer"
    ],
    correctAnswer: 1,
    explanation: "L'activité 'Planifier' assure une compréhension partagée de la vision, du statut actuel et de la direction pour tous les produits et services.",
    difficulty: 'medium',
    category: 'systeme-valeur'
  },
  {
    id: 'svs-5',
    question: "Quel est le rôle principal de l'activité 'Engager' ?",
    options: [
      "Concevoir de nouveaux services",
      "Fournir un point de contact et comprendre les besoins des parties prenantes",
      "Résoudre les incidents",
      "Planifier les changements"
    ],
    correctAnswer: 1,
    explanation: "L'activité 'Engager' fournit une bonne compréhension des besoins des parties prenantes, maintient des relations continues, et sert de point de contact principal.",
    difficulty: 'easy',
    category: 'systeme-valeur',
    examTip: "💡 Le Service Desk opère principalement dans cette activité"
  },
  {
    id: 'svs-6',
    question: "Que fait l'activité 'Obtenir/Construire' de la chaîne de valeur ?",
    options: [
      "Acquiert uniquement des logiciels commerciaux",
      "S'assure que les composants de service sont disponibles selon les spécifications",
      "Construit uniquement des solutions internes",
      "Gère les relations avec les fournisseurs"
    ],
    correctAnswer: 1,
    explanation: "L'activité 'Obtenir/Construire' s'assure que les composants de service sont disponibles quand et où ils sont nécessaires, et qu'ils répondent aux spécifications convenues.",
    difficulty: 'medium',
    category: 'systeme-valeur'
  },
  {
    id: 'svs-7',
    question: "Comment les pratiques ITIL interagissent-elles avec la chaîne de valeur ?",
    options: [
      "Chaque pratique appartient à une seule activité spécifique",
      "Les pratiques peuvent contribuer à plusieurs activités de la chaîne",
      "Les pratiques sont indépendantes de la chaîne de valeur",
      "Seules certaines pratiques utilisent la chaîne de valeur"
    ],
    correctAnswer: 1,
    explanation: "Les pratiques ITIL peuvent contribuer à PLUSIEURS activités de la chaîne de valeur. Par exemple, la gestion des incidents peut impliquer Engager, Livrer et supporter, et Améliorer.",
    difficulty: 'hard',
    category: 'systeme-valeur',
    examTip: "⚠️ Une pratique n'est PAS limitée à une seule activité"
  },
  {
    id: 'svs-8',
    question: "Quel est le but principal du Système de Valeur des Services (SVS) ?",
    options: [
      "Réduire les coûts IT",
      "Permettre la co-création de valeur",
      "Automatiser tous les processus",
      "Éliminer les risques"
    ],
    correctAnswer: 1,
    explanation: "Le SVS permet la co-création de valeur en transformant la demande et les opportunités en valeur pour les clients et autres parties prenantes.",
    difficulty: 'easy',
    category: 'systeme-valeur'
  },
  {
    id: 'svs-9',
    question: "Que représente un 'flux de valeur' (value stream) ?",
    options: [
      "Un processus documenté fixe",
      "Une série d'étapes pour créer et livrer des produits et services",
      "Un diagramme organisationnel",
      "Un flux financier"
    ],
    correctAnswer: 1,
    explanation: "Un flux de valeur est une série d'étapes qu'une organisation entreprend pour créer et livrer des produits et services aux consommateurs.",
    difficulty: 'medium',
    category: 'systeme-valeur'
  },
  {
    id: 'svs-10',
    question: "L'activité 'Livrer et supporter' de la chaîne de valeur fait quoi principalement ?",
    options: [
      "Planifie la stratégie de livraison",
      "Assure que les services sont livrés et supportés selon les spécifications",
      "Conçoit de nouveaux services",
      "Gère les changements majeurs"
    ],
    correctAnswer: 1,
    explanation: "L'activité 'Livrer et supporter' assure que les services sont livrés et supportés selon les niveaux convenus et les attentes des parties prenantes.",
    difficulty: 'easy',
    category: 'systeme-valeur'
  },

  // ========== 15 PRATIQUES ITIL FOUNDATION (30 questions) ==========
  {
    id: 'prat-1',
    question: "Quelle est la différence principale entre un incident et un problème ?",
    options: [
      "Un incident est planifié, un problème ne l'est pas",
      "Un incident est une interruption de service, un problème est la cause d'un ou plusieurs incidents",
      "Il n'y a pas de différence significative",
      "Un problème est plus urgent qu'un incident"
    ],
    correctAnswer: 1,
    explanation: "Un INCIDENT est une interruption non planifiée ou une dégradation de service (symptôme). Un PROBLÈME est la cause sous-jacente d'un ou plusieurs incidents.",
    difficulty: 'medium',
    category: 'pratiques',
    examTip: "🚨 Exemple: 'Je ne peux pas imprimer' = incident, 'Le driver d'impression est corrompu' = problème"
  },
  {
    id: 'prat-2',
    question: "Le CAB (Change Advisory Board) a-t-il l'autorité d'approuver les changements ?",
    options: [
      "Oui, le CAB approuve tous les changements",
      "Non, le CAB conseille mais n'approuve pas",
      "Seulement pour les changements urgents",
      "Seulement pour les changements standards"
    ],
    correctAnswer: 1,
    explanation: "Le CAB CONSEILLE (Advisory) mais n'APPROUVE PAS les changements. L'approbation est donnée par l'autorité de changement désignée.",
    difficulty: 'hard',
    category: 'pratiques',
    examTip: "⚠️ PIÈGE MAJEUR: CAB = Change ADVISORY Board, pas Approval Board!"
  },
  {
    id: 'prat-3',
    question: "Un utilisateur demande la réinitialisation de son mot de passe. C'est :",
    options: [
      "Un incident car il ne peut pas travailler",
      "Un problème car cela arrive souvent",
      "Une demande de service",
      "Un changement standard"
    ],
    correctAnswer: 2,
    explanation: "La réinitialisation de mot de passe est une DEMANDE DE SERVICE car c'est une demande standard prévue dans le catalogue, pas une interruption de service non planifiée.",
    difficulty: 'hard',
    category: 'pratiques',
    examTip: "🎯 PIÈGE CLASSIQUE: Reset password = demande de service, PAS un incident!"
  },
  {
    id: 'prat-4',
    question: "Quelle est la différence entre SLA et OLA ?",
    options: [
      "SLA est pour les services internes, OLA pour les externes",
      "SLA est avec le client externe, OLA est un accord interne",
      "Il n'y a pas de différence réelle",
      "OLA est plus détaillé que SLA"
    ],
    correctAnswer: 1,
    explanation: "SLA (Service Level Agreement) est un accord avec le CLIENT externe. OLA (Operational Level Agreement) est un accord INTERNE entre équipes du fournisseur.",
    difficulty: 'medium',
    category: 'pratiques',
    examTip: "📄 SLA = Externe (client), OLA = Interne (équipes)"
  },
  {
    id: 'prat-5',
    question: "Quel est le rôle principal du service desk ?",
    options: [
      "Résoudre tous les problèmes techniques",
      "Être le point de contact unique (SPOC) entre le fournisseur et les utilisateurs",
      "Approuver les changements",
      "Développer de nouveaux services"
    ],
    correctAnswer: 1,
    explanation: "Le service desk est le Single Point Of Contact (SPOC) entre le fournisseur de services et les utilisateurs. Il capture la demande pour la résolution d'incidents et les demandes de service.",
    difficulty: 'easy',
    category: 'pratiques',
    examTip: "☎️ SPOC = Single Point Of Contact"
  },
  {
    id: 'prat-6',
    question: "Comment calcule-t-on la priorité d'un incident ?",
    options: [
      "Priorité = Impact + Urgence",
      "Priorité = Impact × Urgence",
      "Priorité = Urgence - Impact",
      "La priorité est fixée par l'utilisateur"
    ],
    correctAnswer: 1,
    explanation: "La priorité d'un incident est calculée en combinant l'IMPACT (nombre d'utilisateurs affectés) et l'URGENCE (rapidité de résolution requise), généralement via une matrice.",
    difficulty: 'easy',
    category: 'pratiques',
    examTip: "📊 C'est une combinaison (souvent multiplication), pas une addition!"
  },
  {
    id: 'prat-7',
    question: "Qu'est-ce qu'un changement standard ?",
    options: [
      "Un changement simple à implémenter",
      "Un changement à faible risque, pré-autorisé et bien compris",
      "Tout changement approuvé par le CAB",
      "Un changement effectué régulièrement"
    ],
    correctAnswer: 1,
    explanation: "Un changement standard est à faible risque, pré-autorisé, bien compris et documenté. Il suit une procédure établie sans passer par le processus d'approbation normal.",
    difficulty: 'medium',
    category: 'pratiques',
    examTip: "✅ Les changements standards sont PRÉ-AUTORISÉS"
  },
  {
    id: 'prat-8',
    question: "TOUS les changements doivent-ils passer par le CAB ?",
    options: [
      "Oui, sans exception",
      "Non, les changements standards et urgents ont des processus différents",
      "Seulement les changements majeurs",
      "C'est l'organisation qui décide"
    ],
    correctAnswer: 1,
    explanation: "NON. Les changements STANDARDS sont pré-autorisés, les changements URGENTS suivent un processus accéléré (ECAB possible). Seuls certains changements normaux passent par le CAB.",
    difficulty: 'hard',
    category: 'pratiques',
    examTip: "⚠️ PIÈGE: Tous les changements ne passent PAS par le CAB!"
  },
  {
    id: 'prat-9',
    question: "Peut-on fermer un problème sans le résoudre complètement ?",
    options: [
      "Non, jamais",
      "Oui, si le risque est acceptable et documenté",
      "Seulement pour les problèmes mineurs",
      "Seulement avec l'accord du client"
    ],
    correctAnswer: 1,
    explanation: "OUI, un problème peut être fermé sans résolution complète si le risque est jugé acceptable (coût trop élevé, service en fin de vie, workaround efficace). La décision doit être documentée.",
    difficulty: 'hard',
    category: 'pratiques',
    examTip: "🎯 Contre-intuitif mais vrai: on peut fermer sans résoudre!"
  },
  {
    id: 'prat-10',
    question: "Quelle pratique gère le cycle de vie complet de toutes les demandes de service ?",
    options: [
      "Gestion des incidents",
      "Service desk",
      "Gestion des demandes de service",
      "Gestion des niveaux de service"
    ],
    correctAnswer: 2,
    explanation: "La pratique 'Gestion des demandes de service' gère le cycle de vie complet de toutes les demandes de service des utilisateurs.",
    difficulty: 'easy',
    category: 'pratiques'
  },
  {
    id: 'prat-11',
    question: "Qu'est-ce que la CMDB dans la pratique de gestion des actifs de service et des configurations ?",
    options: [
      "Change Management Database",
      "Configuration Management Database",
      "Customer Management Database",
      "Capacity Management Database"
    ],
    correctAnswer: 1,
    explanation: "CMDB signifie Configuration Management Database. C'est une base de données utilisée pour stocker les enregistrements de configuration (CI) et leurs relations.",
    difficulty: 'medium',
    category: 'pratiques'
  },
  {
    id: 'prat-12',
    question: "Quel est l'objectif principal de la pratique d'amélioration continue ?",
    options: [
      "Corriger les incidents majeurs uniquement",
      "Aligner les pratiques et services avec les besoins business changeants",
      "Réduire les coûts IT",
      "Automatiser tous les processus"
    ],
    correctAnswer: 1,
    explanation: "L'amélioration continue vise à aligner continuellement les produits, services et pratiques de l'organisation avec les besoins business changeants.",
    difficulty: 'medium',
    category: 'pratiques',
    examTip: "📈 L'amélioration est CONTINUE, pas seulement après les incidents"
  },
  {
    id: 'prat-13',
    question: "Quelle est la différence entre le catalogue de services et le portefeuille de services ?",
    options: [
      "Aucune différence, ce sont des synonymes",
      "Le catalogue contient tous les services, le portefeuille seulement les actifs",
      "Le catalogue contient les services actifs, le portefeuille contient TOUS les services",
      "Le portefeuille est pour les clients, le catalogue pour l'interne"
    ],
    correctAnswer: 2,
    explanation: "Le CATALOGUE contient uniquement les services ACTIFS disponibles. Le PORTEFEUILLE contient TOUS les services : pipeline (futurs), catalogue (actifs), et retirés.",
    difficulty: 'medium',
    category: 'pratiques',
    examTip: "📚 Catalogue ⊂ Portefeuille"
  },
  {
    id: 'prat-14',
    question: "Qu'est-ce qu'un 'Known Error' (erreur connue) ?",
    options: [
      "Un incident qui se produit fréquemment",
      "Un problème dont la cause racine est identifiée mais pas encore résolue",
      "Une erreur dans la documentation",
      "Un bug logiciel reporté au fournisseur"
    ],
    correctAnswer: 1,
    explanation: "Une erreur connue est un problème dont la cause racine a été identifiée et pour lequel un workaround existe, mais qui n'a pas encore été résolu définitivement.",
    difficulty: 'hard',
    category: 'pratiques'
  },
  {
    id: 'prat-15',
    question: "L'amélioration continue se fait-elle uniquement après des incidents majeurs ?",
    options: [
      "Oui, c'est le déclencheur principal",
      "Non, elle est permanente et proactive",
      "Seulement après les problèmes",
      "Selon la politique de l'organisation"
    ],
    correctAnswer: 1,
    explanation: "NON! L'amélioration continue est PERMANENTE et PROACTIVE. Elle utilise de multiples sources : métriques, feedback, benchmarks, idées, pas seulement les incidents.",
    difficulty: 'medium',
    category: 'pratiques',
    examTip: "⚠️ PIÈGE: L'amélioration n'est PAS seulement réactive!"
  },

  // ========== QUESTIONS PIÈGES SPÉCIFIQUES (10 questions) ==========
  {
    id: 'piege-1',
    question: "TOUTES les organisations doivent-elles appliquer TOUS les principes directeurs ITIL 4 ?",
    options: [
      "Non, elles choisissent ceux qui conviennent",
      "Oui, mais adaptés à leur contexte",
      "Seulement les grandes organisations",
      "Non, c'est optionnel"
    ],
    correctAnswer: 1,
    explanation: "Les 7 principes directeurs sont TOUJOURS pertinents pour TOUTES les organisations, mais leur APPLICATION doit être adaptée au contexte spécifique.",
    difficulty: 'hard',
    category: 'pieges',
    examTip: "🎯 Mot-clé 'TOUTES' + contexte = généralement vrai pour les principes"
  },
  {
    id: 'piege-2',
    question: "Un service peut-il créer de la valeur sans la participation du consommateur ?",
    options: [
      "Oui, si le service est bien conçu",
      "Jamais, la valeur est toujours co-créée",
      "Seulement pour les services automatisés",
      "Oui, pour les services d'infrastructure"
    ],
    correctAnswer: 1,
    explanation: "JAMAIS. La valeur est TOUJOURS co-créée entre le fournisseur et le consommateur. C'est un principe fondamental d'ITIL 4.",
    difficulty: 'medium',
    category: 'pieges',
    examTip: "⚠️ 'JAMAIS' + valeur co-créée = toujours vrai"
  },
  {
    id: 'piege-3',
    question: "Toutes les activités de la chaîne de valeur doivent-elles être utilisées dans chaque flux de valeur ?",
    options: [
      "Oui, les 6 activités sont obligatoires",
      "Non, sauf l'activité Améliorer qui est toujours présente",
      "Oui, mais dans un ordre flexible",
      "Non, aucune n'est obligatoire"
    ],
    correctAnswer: 1,
    explanation: "Seule l'activité 'Améliorer' est présente dans TOUS les flux de valeur. Les autres activités sont utilisées selon les besoins.",
    difficulty: 'hard',
    category: 'pieges',
    examTip: "🎯 SAUF Améliorer = indice d'une exception importante"
  },
  {
    id: 'piege-4',
    question: "Faut-il TOUJOURS optimiser avant d'automatiser ?",
    options: [
      "Non, l'automatisation peut améliorer les processus",
      "Oui, absolument toujours sans exception",
      "Seulement pour les processus complexes",
      "C'est recommandé mais pas obligatoire"
    ],
    correctAnswer: 1,
    explanation: "OUI, TOUJOURS optimiser avant d'automatiser. L'automatisation d'un processus inefficace amplifie ses défauts. C'est un principe clé d'ITIL 4.",
    difficulty: 'medium',
    category: 'pieges',
    examTip: "⚠️ TOUJOURS + optimiser/automatiser = vrai (ordre impératif)"
  },
  {
    id: 'piege-5',
    question: "AUCUN changement ne peut bypasser le processus de gestion des changements ?",
    options: [
      "Vrai, tous doivent suivre le processus",
      "Faux, les changements d'urgence peuvent suivre un processus accéléré",
      "Faux, seulement les changements majeurs",
      "Vrai, c'est une règle absolue"
    ],
    correctAnswer: 1,
    explanation: "FAUX. Les changements d'urgence peuvent suivre un processus accéléré pour résoudre rapidement des incidents majeurs ou appliquer des patchs de sécurité critiques.",
    difficulty: 'hard',
    category: 'pieges',
    examTip: "🎯 AUCUN + processus = souvent faux (exceptions existent)"
  },
  {
    id: 'piege-6',
    question: "Que devez-vous faire en PREMIER quand vous appliquez le principe 'Commencer là où on se trouve' ?",
    options: [
      "Documenter tous les processus existants",
      "Observer directement l'état actuel",
      "Identifier ce qui doit être changé",
      "Planifier les améliorations"
    ],
    correctAnswer: 1,
    explanation: "Observer DIRECTEMENT l'état actuel est la première étape. Ne pas se fier uniquement à la documentation ou aux suppositions, mais voir la réalité.",
    difficulty: 'medium',
    category: 'pieges',
    examTip: "💡 'PREMIER' + observation directe = approche ITIL 4"
  },
  {
    id: 'piege-7',
    question: "Les 4 dimensions s'appliquent-elles à TOUS les services sans exception ?",
    options: [
      "Non, seulement aux services critiques",
      "Oui, à tous les services et produits",
      "Seulement aux nouveaux services",
      "Cela dépend de la taille du service"
    ],
    correctAnswer: 1,
    explanation: "OUI, les 4 dimensions s'appliquent à TOUS les services et produits sans exception. Ignorer une dimension garantit pratiquement l'échec.",
    difficulty: 'easy',
    category: 'pieges',
    examTip: "⚠️ TOUS + 4 dimensions = toujours vrai"
  },
  {
    id: 'piege-8',
    question: "Une pratique ITIL peut-elle contribuer à plusieurs activités de la chaîne de valeur ?",
    options: [
      "Non, chaque pratique appartient à une seule activité",
      "Oui, les pratiques peuvent contribuer à plusieurs activités",
      "Seulement certaines pratiques spécifiques",
      "Non, c'est un principe d'organisation"
    ],
    correctAnswer: 1,
    explanation: "OUI, une pratique peut et doit souvent contribuer à PLUSIEURS activités de la chaîne de valeur. Par exemple, la gestion des incidents touche Engager, Livrer et Améliorer.",
    difficulty: 'hard',
    category: 'pieges',
    examTip: "🎯 Pratiques ↔ Activités = relation plusieurs-à-plusieurs"
  },
  {
    id: 'piege-9',
    question: "Faut-il résoudre TOUS les problèmes identifiés ?",
    options: [
      "Oui, c'est l'objectif de la gestion des problèmes",
      "Non, certains peuvent être fermés si le risque est acceptable",
      "Oui, mais on peut prendre son temps",
      "Non, seulement les problèmes critiques"
    ],
    correctAnswer: 1,
    explanation: "NON, tous les problèmes ne doivent pas nécessairement être résolus. Si le coût de résolution dépasse le bénéfice ou si le risque est acceptable, un problème peut être fermé sans résolution.",
    difficulty: 'hard',
    category: 'pieges',
    examTip: "⚠️ TOUS + résoudre problèmes = faux (pragmatisme ITIL)"
  },
  {
    id: 'piege-10',
    question: "L'automatisation améliore-t-elle TOUJOURS l'efficacité des processus ?",
    options: [
      "Oui, c'est son objectif principal",
      "Non, seulement si le processus est d'abord optimisé",
      "Oui, surtout pour les processus complexes",
      "Cela dépend de la technologie utilisée"
    ],
    correctAnswer: 1,
    explanation: "NON. L'automatisation d'un processus inefficace ou défaillant amplifie ses problèmes. Il faut TOUJOURS optimiser avant d'automatiser.",
    difficulty: 'medium',
    category: 'pieges',
    examTip: "🎯 TOUJOURS + automatisation = faux (optimiser d'abord!)"
  }
]

// Fonction helper pour obtenir des questions par catégorie
export function getQuestionsByCategory(category: string): QuizQuestion[] {
  return examQuestions.filter(q => q.category === category)
}

// Fonction helper pour obtenir des questions par difficulté
export function getQuestionsByDifficulty(difficulty: string): QuizQuestion[] {
  return examQuestions.filter(q => q.difficulty === difficulty)
}

// Fonction helper pour obtenir des questions pièges
export function getTrapQuestions(): QuizQuestion[] {
  return examQuestions.filter(q => 
    q.category === 'pieges' || 
    q.examTip?.toLowerCase().includes('piège') ||
    q.question.includes('TOUJOURS') ||
    q.question.includes('JAMAIS') ||
    q.question.includes('TOUS') ||
    q.question.includes('AUCUN')
  )
}

// Fonction helper pour obtenir des questions aléatoires
export function getRandomQuestions(count: number, category?: string): QuizQuestion[] {
  let pool = category ? getQuestionsByCategory(category) : examQuestions
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Fonction helper pour une simulation d'examen (40 questions selon la répartition officielle)
export function getExamSimulationQuestions(): QuizQuestion[] {
  const distribution = {
    'concepts-fondamentaux': 7,
    'principes-directeurs': 8,
    'dimensions': 4,
    'systeme-valeur': 12, // SVS + CVS combinés
    'pratiques': 9
  }
  
  let examQuestions: QuizQuestion[] = []
  
  for (const [category, count] of Object.entries(distribution)) {
    const questions = getRandomQuestions(count, category)
    examQuestions = [...examQuestions, ...questions]
  }
  
  // Mélanger toutes les questions
  return examQuestions.sort(() => Math.random() - 0.5)
}