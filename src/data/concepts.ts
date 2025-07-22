import { Concept } from '../types';

export const concepts: Concept[] = [
  {
    id: 'value',
    title: '🎯 Valeur',
    definition: 'Le bénéfice, l\'utilité et l\'importance d\'un élément tel qu\'il est perçu.',
    keyPoints: [
      'La valeur est SUBJECTIVE',
      'Elle est co-créée entre fournisseur et consommateur',
      'Elle varie selon les parties prenantes',
      'Elle est perçue différemment par chaque acteur'
    ],
    examTip: 'Ne jamais oublier l\'aspect "co-création" - la valeur n\'est jamais créée unilatéralement',
    category: 'fundamentals'
  },
  {
    id: 'service',
    title: '⚙️ Service',
    definition: 'Un moyen de permettre la co-création de valeur en facilitant des résultats que les clients veulent atteindre, sans qu\'ils aient à gérer les coûts et risques spécifiques.',
    keyPoints: [
      'Service = MOYEN (pas un objet)',
      'Facilite l\'atteinte d\'objectifs client',
      'Transfère les coûts et risques au fournisseur',
      'Permet la co-création de valeur'
    ],
    examTip: 'Formule mnémotechnique : Service = MOYEN de faciliter',
    category: 'fundamentals'
  },
  {
    id: 'product',
    title: '📦 Produit',
    definition: 'Configuration des ressources d\'une organisation conçue pour offrir de la valeur à un consommateur.',
    keyPoints: [
      'Produit = CONFIGURATION de ressources',
      'Différent du service (configuration vs moyen)',
      'Peut être tangible ou intangible',
      'Conçu pour créer de la valeur'
    ],
    examTip: 'Distinction clé : Produit = ce qui est configuré, Service = comment c\'est livré',
    category: 'fundamentals'
  },
  {
    id: 'utility-warranty',
    title: '🎯 Utilité vs Garantie',
    definition: 'Deux aspects complémentaires de la valeur d\'un service.',
    keyPoints: [
      'Utilité = "Fit for purpose" - CE QUE fait le service',
      'Garantie = "Fit for use" - COMMENT le service performe',
      'Les deux sont nécessaires pour créer de la valeur',
      'Utilité sans garantie = inutile, Garantie sans utilité = sans valeur'
    ],
    examTip: 'Piège fréquent dans l\'examen - bien distinguer "quoi" vs "comment"',
    category: 'fundamentals'
  },
  {
    id: 'consumer-roles',
    title: '👥 Rôles de Consommation',
    definition: 'Les différents rôles que peuvent jouer les parties prenantes dans la consommation d\'un service.',
    keyPoints: [
      'Client : Définit les besoins et exigences',
      'Utilisateur : Utilise concrètement les services',
      'Sponsor : Autorise le budget pour les services',
      'Une personne peut avoir plusieurs rôles simultanément'
    ],
    examTip: 'Leurs attentes peuvent être contradictoires - source de conflits à gérer',
    category: 'fundamentals'
  }
];

export const principles: Concept[] = [
  {
    id: 'focus-value',
    title: '1️⃣ Privilégier la valeur',
    definition: 'Toujours comprendre et se focaliser sur ce qui a de la valeur pour le consommateur.',
    keyPoints: [
      'Identifier les parties prenantes et leurs attentes',
      'Comprendre l\'expérience client (CX/UX)',
      'Cartographier la valeur selon chaque perspective',
      'Mesurer et optimiser la perception de valeur'
    ],
    examTip: 'Question type : "Avant d\'améliorer un service, que faut-il faire ?" → Comprendre ce qui a de la valeur',
    category: 'principles'
  },
  {
    id: 'start-where-you-are',
    title: '2️⃣ Commencer là où vous êtes',
    definition: 'Ne pas repartir de zéro, évaluer et utiliser l\'existant comme base.',
    keyPoints: [
      'Éviter la tentation de tout remplacer',
      'Évaluer objectivement l\'état actuel',
      'Identifier ce qui fonctionne déjà',
      'Construire sur les fondations existantes'
    ],
    examTip: 'Réponse incorrecte typique : "Remplacer le système actuel"',
    category: 'principles'
  },
  {
    id: 'progress-iteratively',
    title: '3️⃣ Avancer par itération',
    definition: 'Approche progressive avec feedback régulier plutôt que transformation massive.',
    keyPoints: [
      'Diviser en étapes gérables',
      'Collecter des retours à chaque étape',
      'Ajuster la direction selon l\'apprentissage',
      'Livrer de la valeur de façon continue'
    ],
    examTip: 'Éviter : "Déployer partout d\'un coup" → Préférer : "Pilote puis extension"',
    category: 'principles'
  },
  {
    id: 'collaborate-visibility',
    title: '4️⃣ Collaborer et promouvoir la visibilité',
    definition: 'Transparence et implication des bonnes personnes au bon moment.',
    keyPoints: [
      'Partager l\'information pertinente',
      'Impliquer les parties prenantes dans les décisions',
      'Créer une compréhension commune',
      'Favoriser la collaboration inter-équipes'
    ],
    examTip: 'Résultat attendu : meilleure adhésion et succès à long terme',
    category: 'principles'
  },
  {
    id: 'think-holistically',
    title: '5️⃣ Penser holistique',
    definition: 'Vision d\'ensemble considérant toutes les dimensions et interconnexions.',
    keyPoints: [
      'Considérer les 4 dimensions simultanément',
      'Éviter les solutions en silos',
      'Comprendre les impacts systémiques',
      'Intégrer toutes les perspectives'
    ],
    examTip: 'Éviter les réponses qui ne considèrent qu\'une seule dimension',
    category: 'principles'
  },
  {
    id: 'keep-simple-practical',
    title: '6️⃣ Simplicité et praticité',
    definition: 'Solutions simples qui fonctionnent dans la réalité opérationnelle.',
    keyPoints: [
      'Éliminer ce qui n\'apporte pas de valeur',
      'Préférer la simplicité à la complexité',
      'Assurer la faisabilité pratique',
      'Faciliter l\'adoption par les utilisateurs'
    ],
    examTip: 'Si hésitation entre 2 réponses, choisir la plus simple et pratique',
    category: 'principles'
  },
  {
    id: 'optimize-automate',
    title: '7️⃣ Optimiser et automatiser',
    definition: 'Améliorer avant d\'automatiser, dans cet ordre précis.',
    keyPoints: [
      'OPTIMISER d\'abord le processus',
      'AUTOMATISER ensuite seulement',
      'Ne jamais automatiser un processus défaillant',
      'L\'automatisation sans optimisation amplifie les problèmes'
    ],
    examTip: 'PIÈGE MAJEUR : jamais automatiser avant d\'optimiser !',
    category: 'principles'
  }
];

export const dimensions: Concept[] = [
  {
    id: 'organizations-people',
    title: '👥 Organisations et personnes',
    definition: 'La dimension humaine et organisationnelle de la gestion des services.',
    keyPoints: [
      'Structure organisationnelle et culture',
      'Rôles et responsabilités clairement définis',
      'Compétences et plans de formation',
      'Communication et leadership efficaces',
      'Gestion du changement organisationnel'
    ],
    examTip: 'Souvent négligée mais critique pour le succès des initiatives',
    category: 'dimensions'
  },
  {
    id: 'information-technology',
    title: '💻 Information et technologie',
    definition: 'Les informations, connaissances et technologies nécessaires à la gestion des services.',
    keyPoints: [
      'Information et gestion des connaissances',
      'Technologies et outils de support',
      'Relations et dépendances entre composants',
      'Architecture et standards techniques',
      'Sécurité et protection des données'
    ],
    examTip: 'Ne pas confondre avec "seulement la technologie"',
    category: 'dimensions'
  },
  {
    id: 'partners-suppliers',
    title: '🤝 Partenaires et fournisseurs',
    definition: 'Les relations avec les organisations externes qui contribuent à la valeur.',
    keyPoints: [
      'Relations avec autres organisations',
      'Contrats et accords de service',
      'Gouvernance des relations externes',
      'Intégration et coordination externe',
      'Gestion des risques fournisseurs'
    ],
    examTip: 'Include les partenaires internes d\'autres départements',
    category: 'dimensions'
  },
  {
    id: 'value-streams-processes',
    title: '🔄 Flux de valeur et processus',
    definition: 'L\'articulation et coordination des éléments pour créer de la valeur.',
    keyPoints: [
      'Définition des flux de valeur bout en bout',
      'Processus et procédures standardisés',
      'Contrôles et métriques de performance',
      'Workflow et automatisation',
      'Amélioration continue des flux'
    ],
    examTip: 'Focus sur l\'articulation entre les éléments, pas seulement les processus isolés',
    category: 'dimensions'
  }
];

export const chainActivities: Concept[] = [
  {
    id: 'plan',
    title: '📋 PLANIFIER',
    definition: 'Assurer une compréhension commune de la vision, de l\'état actuel et de la direction d\'amélioration.',
    keyPoints: [
      'Développer la stratégie et les politiques',
      'Évaluer la position actuelle de l\'organisation',
      'Coordonner les activités d\'amélioration',
      'Maintenir l\'alignement stratégique',
      'Gérer les portefeuilles et programmes'
    ],
    examTip: 'Question type : "Développer une stratégie IT sur 5 ans" → Planifier',
    category: 'chain'
  },
  {
    id: 'improve',
    title: '📈 AMÉLIORER',
    definition: 'Assurer l\'amélioration continue de tous les produits, services et pratiques.',
    keyPoints: [
      'Analyser les métriques et KPI',
      'Identifier les opportunités d\'amélioration',
      'Prioriser les initiatives d\'amélioration',
      'Suivre les progrès et résultats',
      'Intégrer l\'amélioration dans toutes les activités'
    ],
    examTip: 'Exemple : "30% des changements échouent, analyser les causes" → Améliorer',
    category: 'chain'
  },
  {
    id: 'engage',
    title: '🤝 IMPLIQUER',
    definition: 'Assurer une bonne compréhension des besoins des parties prenantes et de la transparence.',
    keyPoints: [
      'Collecter les retours des parties prenantes',
      'Maintenir les relations avec les clients',
      'Gérer les attentes et communications',
      'Promouvoir la transparence',
      'Faciliter la collaboration'
    ],
    examTip: 'Activité transversale qui soutient toutes les autres',
    category: 'chain'
  },
  {
    id: 'design-transition',
    title: '🔧 CONCEPTION ET TRANSITION',
    definition: 'Assurer que les produits et services répondent aux attentes en termes de qualité, coûts et délais.',
    keyPoints: [
      'Concevoir et développer les services',
      'Tester et valider les solutions',
      'Gérer les transitions vers la production',
      'Assurer la qualité et conformité',
      'Transférer vers les équipes opérationnelles'
    ],
    examTip: 'Inclut tout le cycle de développement jusqu\'à la mise en production',
    category: 'chain'
  },
  {
    id: 'obtain-build',
    title: '🛒 OBTENIR/CONSTRUIRE',
    definition: 'Assurer que les composants de services sont disponibles selon les spécifications.',
    keyPoints: [
      'Acheter ou développer les composants',
      'Gérer les fournisseurs et contrats',
      'Assurer la qualité des livrables',
      'Maintenir les relations fournisseurs',
      'Optimiser les coûts d\'acquisition'
    ],
    examTip: 'Décision "Make or Buy" selon le contexte',
    category: 'chain'
  },
  {
    id: 'deliver-support',
    title: '🚀 FOURNIR ET SOUTENIR',
    definition: 'Assurer que les services sont fournis et supportés selon les attentes convenues.',
    keyPoints: [
      'Gérer les opérations quotidiennes',
      'Traiter les incidents et demandes',
      'Monitorer la performance des services',
      'Maintenir la disponibilité',
      'Assurer le support utilisateur'
    ],
    examTip: 'Exemple : "Gestion quotidienne des incidents" → Fournir et soutenir',
    category: 'chain'
  }
];

export const practices: Concept[] = [
  {
    id: 'incident-management',
    title: '🚨 Gestion des Incidents',
    definition: 'Minimiser l\'impact négatif des incidents en restaurant le service normal aussi rapidement que possible.',
    keyPoints: [
      'Focus sur la RESTAURATION rapide du service',
      'Ne pas chercher la cause racine (c\'est pour les problèmes)',
      'Escalade selon l\'impact et l\'urgence',
      'Communication proactive aux utilisateurs',
      'Documentation pour analyse ultérieure'
    ],
    examTip: 'Incident = Restaurer rapidement, Problème = Analyser la cause',
    category: 'practices'
  },
  {
    id: 'problem-management',
    title: '🔍 Gestion des Problèmes',
    definition: 'Réduire la probabilité et l\'impact des incidents en identifiant et gérant leurs causes racines.',
    keyPoints: [
      'Focus sur la CAUSE RACINE et la prévention',
      'Analyse proactive et réactive',
      'Solutions de contournement temporaires',
      'Élimination définitive des causes',
      'Amélioration continue de la stabilité'
    ],
    examTip: 'Plusieurs pannes similaires = Problème à traiter',
    category: 'practices'
  },
  {
    id: 'service-request-management',
    title: '📝 Gestion des Demandes de Service',
    definition: 'Supporter la qualité convenue d\'un service en gérant toutes les demandes de service pré-définies.',
    keyPoints: [
      'Demandes pré-approuvées et standardisées',
      'Catalogue de services accessible',
      'Workflow automatisé quand possible',
      'SLA spécifiques aux types de demandes',
      'Libre-service pour demandes courantes'
    ],
    examTip: 'Demande d\'accès standard ≠ changement (pas d\'évaluation de risque)',
    category: 'practices'
  },
  {
    id: 'change-management',
    title: '🔄 Gestion des Changements',
    definition: 'Maximiser le nombre de changements IT réussis en minimisant les risques.',
    keyPoints: [
      'Évaluation et autorisation des changements',
      'Types : Standard, Normal, Urgence',
      'Changement Advisory Board (CAB)',
      'Planification et coordination',
      'Suivi post-implémentation'
    ],
    examTip: 'Focus sur l\'autorisation et le contrôle des risques',
    category: 'practices'
  },
  {
    id: 'service-desk',
    title: '📞 Centre de Services',
    definition: 'Point de contact unique entre le fournisseur de services et les utilisateurs.',
    keyPoints: [
      'Premier niveau de support utilisateur',
      'Gestion centralisée des incidents et demandes',
      'Escalade vers les équipes spécialisées',
      'Information et communication aux utilisateurs',
      'Collecte de données pour amélioration'
    ],
    examTip: 'Différent du support technique - c\'est un point de contact',
    category: 'practices'
  },
  {
    id: 'continual-improvement',
    title: '📈 Amélioration Continue',
    definition: 'Aligner les pratiques et services de l\'organisation avec les besoins métier changeants.',
    keyPoints: [
      'Activité récurrente à tous les niveaux',
      'Modèle d\'amélioration à 7 étapes',
      'Mesure et analyse de la performance',
      'Priorisation des améliorations',
      'Culture d\'amélioration continue'
    ],
    examTip: 'Principe transversal qui s\'applique partout',
    category: 'practices'
  }
];

export const allConcepts = [
  ...concepts,
  ...principles,
  ...dimensions,
  ...chainActivities,
  ...practices
];