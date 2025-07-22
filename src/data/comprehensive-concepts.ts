import { Concept } from '../types';

// ==============================================================================
// CONCEPTS FONDAMENTAUX - Base critique pour l'examen
// ==============================================================================

export const fundamentalConcepts: Concept[] = [
  {
    id: 'value-definition',
    title: '🎯 Valeur (Value)',
    definition: 'Le bénéfice, l\'utilité et l\'importance d\'un élément tel qu\'il est perçu par une partie prenante.',
    keyPoints: [
      'La valeur est TOUJOURS subjective et perçue',
      'Elle varie selon chaque partie prenante',
      'La valeur est CO-CRÉÉE entre fournisseur et consommateur',
      'Elle ne peut jamais être créée unilatéralement',
      'La perception de valeur change dans le temps'
    ],
    examTip: 'PIÈGE CRITIQUE: Toute réponse qui suggère que la valeur est créée "par le fournisseur seul" ou "par le client seul" est FAUSSE. Toujours co-création!',
    category: 'fundamentals'
  },
  {
    id: 'service-definition',
    title: '⚙️ Service',
    definition: 'Un moyen de permettre la co-création de valeur en facilitant des résultats que les clients veulent atteindre, sans qu\'ils aient à gérer les coûts et risques spécifiques.',
    keyPoints: [
      'Un service = un MOYEN (pas un produit physique)',
      'Facilite l\'atteinte des résultats désirés par le client',
      'Transfère les coûts et risques du client vers le fournisseur',
      'Permet la co-création de valeur',
      'Doit fournir à la fois utilité ET garantie'
    ],
    examTip: 'Formule mnémotechnique: Service = MOYEN de faciliter + Transfert des risques',
    category: 'fundamentals'
  },
  {
    id: 'product-definition',
    title: '📦 Produit (Product)',
    definition: 'Configuration des ressources d\'une organisation conçue pour offrir de la valeur à un consommateur.',
    keyPoints: [
      'Un produit = une CONFIGURATION de ressources',
      'Peut être tangible ou intangible',
      'Différent du service (configuration vs moyen)',
      'Conçu pour créer de la valeur spécifique',
      'Peut inclure des biens, des accès ou des actions de service'
    ],
    examTip: 'DISTINCTION CRUCIALE: Produit = CE QUI est configuré | Service = COMMENT c\'est livré',
    category: 'fundamentals'
  },
  {
    id: 'utility-warranty',
    title: '🎯 Utilité vs Garantie',
    definition: 'Deux aspects complémentaires OBLIGATOIRES de la valeur d\'un service.',
    keyPoints: [
      'UTILITÉ = "Fit for purpose" = CE QUE fait le service',
      'GARANTIE = "Fit for use" = COMMENT le service performe',
      'Les DEUX sont nécessaires pour créer de la valeur',
      'Utilité sans garantie = Service inutilisable',
      'Garantie sans utilité = Service sans valeur',
      'Exemple: Utilité = "envoyer emails" | Garantie = "disponible 99.9%"'
    ],
    examTip: 'PIÈGE MAJEUR: Confondre "quoi" (utilité) et "comment" (garantie). Utilité = Fonctionnalité, Garantie = Performance',
    category: 'fundamentals'
  },
  {
    id: 'outcomes-outputs',
    title: '🎯 Résultats vs Sorties',
    definition: 'Distinction critique entre ce qui est livré et ce qui est atteint.',
    keyPoints: [
      'SORTIE (Output) = Livrable tangible d\'une activité',
      'RÉSULTAT (Outcome) = Conséquence d\'influence ou de changement',
      'Les résultats sont ce que veulent vraiment les clients',
      'Les sorties sont des moyens d\'atteindre les résultats',
      'Un service doit faciliter des résultats, pas seulement produire des sorties'
    ],
    examTip: 'Exemple: Sortie = "Rapport mensuel" | Résultat = "Amélioration des décisions managériales"',
    category: 'fundamentals'
  },
  {
    id: 'consumer-roles',
    title: '👥 Rôles de Consommation',
    definition: 'Les différents rôles joués par les parties prenantes dans la consommation d\'un service.',
    keyPoints: [
      'CLIENT = Définit les besoins et autorise le budget pour les services',
      'UTILISATEUR = Utilise directement les services au quotidien',
      'SPONSOR = Autorise le budget et prend les décisions financières',
      'Une même PERSONNE peut avoir PLUSIEURS rôles simultanément',
      'Leurs attentes peuvent être CONTRADICTOIRES',
      'Important de comprendre chaque perspective'
    ],
    examTip: 'ATTENTION: Dans l\'examen, bien identifier QUEL rôle est concerné par la question (budget=sponsor, utilisation=utilisateur, besoins=client)',
    category: 'fundamentals'
  }
];

// ==============================================================================
// PRINCIPES DIRECTEURS - 7 principes avec pièges d'examen
// ==============================================================================

export const guidingPrinciples: Concept[] = [
  {
    id: 'focus-on-value',
    title: '1️⃣ Privilégier la Valeur (Focus on Value)',
    definition: 'Tout ce que fait l\'organisation doit être lié, directement ou indirectement, à la valeur pour les parties prenantes.',
    keyPoints: [
      'TOUJOURS comprendre qui sont les parties prenantes',
      'Cartographier la valeur selon chaque perspective',
      'Se concentrer sur l\'expérience client (Customer Experience)',
      'Mesurer et optimiser la perception de valeur',
      'Éviter les activités qui n\'apportent pas de valeur'
    ],
    examTip: 'Question type: "Avant d\'améliorer un processus, que faut-il faire EN PREMIER?" → Réponse: Comprendre la valeur pour les parties prenantes',
    category: 'principles'
  },
  {
    id: 'start-where-you-are',
    title: '2️⃣ Commencer Là Où Vous Êtes (Start Where You Are)',
    definition: 'Ne pas repartir de zéro. Regarder ce qui existe déjà et peut être réutilisé.',
    keyPoints: [
      'ÉVITER la tentation de tout remplacer ("Big Bang")',
      'Évaluer objectivement l\'état actuel',
      'Identifier ce qui fonctionne déjà bien',
      'Construire sur les fondations existantes',
      'Respecter les investissements déjà faits'
    ],
    examTip: 'PIÈGE: Réponses qui suggèrent de "tout remplacer" ou "tout recommencer" sont généralement FAUSSES',
    category: 'principles'
  },
  {
    id: 'progress-iteratively',
    title: '3️⃣ Avancer par Itération avec Feedback (Progress Iteratively with Feedback)',
    definition: 'Organiser le travail en sections plus petites et gérables avec feedback régulier.',
    keyPoints: [
      'Diviser les grands projets en étapes gérables',
      'Collecter des retours à CHAQUE étape',
      'Ajuster la direction selon l\'apprentissage',
      'Livrer de la valeur de façon CONTINUE',
      'Éviter les approches "tout ou rien"'
    ],
    examTip: 'Question type: "Comment déployer dans 10 départements?" → Réponse: Pilote dans 1-2 départements, feedback, puis extension progressive',
    category: 'principles'
  },
  {
    id: 'collaborate-promote-visibility',
    title: '4️⃣ Collaborer et Promouvoir la Visibilité (Collaborate and Promote Visibility)',
    definition: 'Travailler ensemble de manière transparente avec toutes les parties prenantes pertinentes.',
    keyPoints: [
      'Impliquer les bonnes personnes au bon moment',
      'Partager les informations pertinentes',
      'Créer une compréhension commune des objectifs',
      'Favoriser la collaboration inter-équipes',
      'Maintenir la transparence sur l\'avancement'
    ],
    examTip: 'Résultat attendu: Meilleure adhésion et succès à long terme des initiatives',
    category: 'principles'
  },
  {
    id: 'think-work-holistically',
    title: '5️⃣ Penser et Travailler de Manière Holistique (Think and Work Holistically)',
    definition: 'Aucun service ou élément ne fonctionne de manière isolée. Considérer l\'ensemble.',
    keyPoints: [
      'Considérer les 4 dimensions simultanément',
      'Éviter les solutions en silos',
      'Comprendre les impacts systémiques',
      'Intégrer toutes les perspectives pertinentes',
      'Voir les connexions et dépendances'
    ],
    examTip: 'PIÈGE: Réponses qui ne considèrent qu\'une seule dimension sont souvent FAUSSES',
    category: 'principles'
  },
  {
    id: 'keep-it-simple-practical',
    title: '6️⃣ Rester Simple et Pratique (Keep It Simple and Practical)',
    definition: 'Utiliser le minimum d\'étapes nécessaires pour atteindre l\'objectif. Éliminer la complexité inutile.',
    keyPoints: [
      'Éliminer ce qui n\'apporte PAS de valeur',
      'Préférer la simplicité à la complexité',
      'S\'assurer de la faisabilité pratique',
      'Faciliter l\'adoption par les utilisateurs',
      'Éviter la sur-ingénierie'
    ],
    examTip: 'En cas d\'hésitation entre 2 réponses plausibles, choisir la plus SIMPLE et PRATIQUE',
    category: 'principles'
  },
  {
    id: 'optimize-automate',
    title: '7️⃣ Optimiser et Automatiser (Optimize and Automate)',
    definition: 'Optimiser d\'abord, puis automatiser. Dans cet ordre précis et pas l\'inverse.',
    keyPoints: [
      'ÉTAPE 1: OPTIMISER le processus d\'abord',
      'ÉTAPE 2: AUTOMATISER seulement après optimisation',
      'JAMAIS automatiser un processus défaillant',
      'L\'automatisation amplifie les problèmes existants',
      'L\'optimisation avant tout permet de maximiser l\'efficacité'
    ],
    examTip: 'PIÈGE MAJEUR D\'EXAMEN: TOUJOURS optimiser AVANT automatiser. Toute réponse inversant cet ordre est FAUSSE!',
    category: 'principles'
  }
];

// ==============================================================================
// 4 DIMENSIONS - Framework holistique
// ==============================================================================

export const fourDimensions: Concept[] = [
  {
    id: 'organizations-people',
    title: '👥 Organisations et Personnes (Organizations and People)',
    definition: 'Les rôles, responsabilités, structure organisationnelle, culture et personnel requis.',
    keyPoints: [
      'Structure organisationnelle et hiérarchies',
      'Culture d\'entreprise et mentalités',
      'Compétences et plans de formation',
      'Communication et styles de leadership',
      'Gestion du changement et adoption',
      'Responsabilités et accountabilités'
    ],
    examTip: 'Dimension souvent négligée mais CRITIQUE pour le succès. Questions sur formation, culture, résistance au changement.',
    category: 'dimensions'
  },
  {
    id: 'information-technology',
    title: '💻 Information et Technologie (Information and Technology)',
    definition: 'Les informations, connaissances et technologies nécessaires à la gestion et livraison des services.',
    keyPoints: [
      'Information et gestion des connaissances',
      'Technologies et outils de support',
      'Architecture et standards techniques',
      'Relations et dépendances entre composants',
      'Sécurité et protection des données',
      'Plateformes et infrastructures'
    ],
    examTip: 'NE PAS confondre avec "seulement la technologie" - inclut aussi l\'INFORMATION et la connaissance',
    category: 'dimensions'
  },
  {
    id: 'partners-suppliers',
    title: '🤝 Partenaires et Fournisseurs (Partners and Suppliers)',
    definition: 'Les relations avec autres organisations qui contribuent à la conception, développement, déploiement et livraison des services.',
    keyPoints: [
      'Relations avec organisations externes',
      'Contrats et accords de service (SLAs, OLAs)',
      'Gouvernance des relations externes',
      'Intégration et coordination externe',
      'Gestion des risques fournisseurs',
      'Partenaires internes (autres départements)'
    ],
    examTip: 'INCLUT aussi les partenaires INTERNES d\'autres départements, pas seulement les externes',
    category: 'dimensions'
  },
  {
    id: 'value-streams-processes',
    title: '🔄 Flux de Valeur et Processus (Value Streams and Processes)',
    definition: 'Comment les différents éléments de l\'organisation s\'articulent pour créer de la valeur.',
    keyPoints: [
      'Définition des flux de valeur bout en bout',
      'Processus et procédures standardisés',
      'Contrôles et métriques de performance',
      'Workflows et automatisation',
      'Amélioration continue des flux',
      'Coordination entre les activités'
    ],
    examTip: 'Focus sur l\'ARTICULATION entre les éléments, pas seulement sur les processus isolés',
    category: 'dimensions'
  }
];

// Combinaison de tous les concepts
export const allComprehensiveConcepts = [
  ...fundamentalConcepts,
  ...guidingPrinciples,
  ...fourDimensions
];

export default allComprehensiveConcepts;