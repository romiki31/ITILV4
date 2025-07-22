import type { Flashcard } from '@/types'

export const flashcards: Flashcard[] = [
  // CONCEPTS FONDAMENTAUX
  {
    id: 'fc-value-1',
    front: 'Qu\'est-ce que la VALEUR selon ITIL 4 ?',
    back: 'La perception des bénéfices, utilité et importance par les parties prenantes. TOUJOURS co-créée entre fournisseur et consommateur, jamais unilatéralement.',
    category: 'concepts-fondamentaux',
    difficulty: 'easy',
    tags: ['valeur', 'co-création'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-service-vs-product',
    front: 'Quelle est la différence entre SERVICE et PRODUIT ?',
    back: 'SERVICE = MOYEN de faciliter des résultats en transférant risques/coûts | PRODUIT = CONFIGURATION de ressources organisationnelles',
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['service', 'produit'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-utility-warranty',
    front: 'Que signifient UTILITÉ et GARANTIE ?',
    back: 'UTILITÉ = Fit for purpose (ce que le service fait - fonctionnalité) | GARANTIE = Fit for use (comment il performe - fiabilité). Les DEUX sont obligatoires pour créer de la valeur.',
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['utilité', 'garantie'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-outcome-output',
    front: 'Différence entre RÉSULTAT (Outcome) et SORTIE (Output) ?',
    back: 'SORTIE = Livrable tangible d\'une activité | RÉSULTAT = Changement qui apporte de la valeur. Les clients veulent et paient pour des résultats, pas des sorties.',
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['résultat', 'sortie'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-roles',
    front: 'Quels sont les 3 rôles clés de consommation de service ?',
    back: 'CLIENT (définit les exigences) | UTILISATEUR (utilise le service) | SPONSOR (autorise le budget). Une personne peut cumuler plusieurs rôles.',
    category: 'concepts-fondamentaux',
    difficulty: 'easy',
    tags: ['client', 'utilisateur', 'sponsor'],
    masteryLevel: 'not-started'
  },

  // PRINCIPES DIRECTEURS
  {
    id: 'fc-principles-count',
    front: 'Combien de principes directeurs dans ITIL 4 ?',
    back: '7 principes directeurs universels, interconnectés et complémentaires qui guident toute décision et action.',
    category: 'principes-directeurs',
    difficulty: 'easy',
    tags: ['principes', 'nombre'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-optimize-automate',
    front: 'Quel est l\'ordre OBLIGATOIRE du principe "Optimiser et Automatiser" ?',
    back: '1) OPTIMISER d\'abord 2) AUTOMATISER ensuite. JAMAIS l\'inverse ! L\'automatisation amplifie les problèmes existants.',
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['optimisation', 'automatisation'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-start-where-you-are',
    front: 'Que signifie "Commencer là où vous êtes" ?',
    back: 'Évaluer objectivement l\'existant avant de changer. Ne pas faire table rase mais construire sur les fondations existantes.',
    category: 'principes-directeurs',
    difficulty: 'medium',
    tags: ['existant', 'évaluation'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-iterate-feedback',
    front: 'Comment "Progresser de manière itérative avec feedback" ?',
    back: 'Diviser en petites parties gérables, obtenir du feedback à CHAQUE itération, ajuster la trajectoire, livrer de la valeur continuellement.',
    category: 'principes-directeurs',
    difficulty: 'medium',
    tags: ['itératif', 'feedback'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-holistic-thinking',
    front: 'Pourquoi "Penser et travailler de manière holistique" ?',
    back: 'Aucun élément ne fonctionne isolément. Considérer les 4 dimensions et les interdépendances pour éviter l\'optimisation locale.',
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['holistique', '4-dimensions'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-focus-value',
    front: 'Que signifie "Privilégier la valeur" ?',
    back: 'Tout ce que fait l\'organisation doit être lié, directement ou indirectement, à la valeur pour elle-même et ses parties prenantes.',
    category: 'principes-directeurs',
    difficulty: 'easy',
    tags: ['valeur', 'parties-prenantes'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-keep-simple',
    front: 'Principe "Rester simple et pratique" ?',
    back: 'Si un processus, service, action ou métrique n\'apporte pas de valeur ou ne produit pas de résultat utile, éliminez-le. Utilisez le minimum nécessaire.',
    category: 'principes-directeurs',
    difficulty: 'easy',
    tags: ['simplicité', 'pratique'],
    masteryLevel: 'not-started'
  },

  // 4 DIMENSIONS
  {
    id: 'fc-four-dimensions',
    front: 'Quelles sont les 4 dimensions de la gestion des services ?',
    back: '1) Organisations et Personnes 2) Information et Technologie 3) Partenaires et Fournisseurs 4) Flux de Valeur et Processus',
    category: 'dimensions',
    difficulty: 'easy',
    tags: ['4-dimensions'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-organizations-people',
    front: 'Dimension "Organisations et Personnes" ?',
    back: 'Structure organisationnelle, culture, compétences, rôles, responsabilités, communication et gestion du changement.',
    category: 'dimensions',
    difficulty: 'medium',
    tags: ['organisation', 'personnes'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-information-technology',
    front: 'Dimension "Information et Technologie" ?',
    back: 'Information (données, connaissances) ET technologies (infrastructure, applications) nécessaires pour la gestion des services.',
    category: 'dimensions',
    difficulty: 'medium',
    tags: ['information', 'technologie'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-partners-suppliers',
    front: 'Dimension "Partenaires et Fournisseurs" ?',
    back: 'Relations avec d\'autres organisations (externes ET internes) impliquées dans la conception, développement et livraison des services.',
    category: 'dimensions',
    difficulty: 'medium',
    tags: ['partenaires', 'fournisseurs'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-value-streams',
    front: 'Dimension "Flux de Valeur et Processus" ?',
    back: 'Comment les différentes parties travaillent ensemble de manière intégrée et coordonnée pour permettre la création de valeur.',
    category: 'dimensions',
    difficulty: 'hard',
    tags: ['flux-de-valeur', 'processus'],
    masteryLevel: 'not-started'
  },

  // SYSTÈME DE VALEUR DES SERVICES
  {
    id: 'fc-svs-definition',
    front: 'Qu\'est-ce que le Service Value System (SVS) ?',
    back: 'Framework décrivant comment tous les composants et activités travaillent ensemble pour créer de la valeur. Cœur d\'ITIL 4.',
    category: 'systeme-valeur',
    difficulty: 'easy',
    tags: ['svs', 'framework'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-svs-components',
    front: 'Quels sont les composants du SVS ?',
    back: 'Opportunité/Demande → Principes directeurs + Gouvernance + Chaîne de valeur + Pratiques + Amélioration continue → Valeur',
    category: 'systeme-valeur',
    difficulty: 'medium',
    tags: ['svs', 'composants'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-value-chain-activities',
    front: 'Combien d\'activités dans la chaîne de valeur des services ?',
    back: '6 activités flexibles : Planifier | Améliorer | Impliquer | Conception et Transition | Obtenir/Construire | Fournir et Supporter',
    category: 'systeme-valeur',
    difficulty: 'medium',
    tags: ['chaîne-de-valeur', 'activités'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-plan-activity',
    front: 'Activité PLANIFIER de la chaîne de valeur ?',
    back: 'S\'assurer d\'une compréhension partagée de la vision, du statut actuel et de la direction d\'amélioration pour toutes les dimensions.',
    category: 'systeme-valeur',
    difficulty: 'medium',
    tags: ['planifier', 'vision'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-improve-activity',
    front: 'Activité AMÉLIORER de la chaîne de valeur ?',
    back: 'S\'assurer de l\'amélioration continue des produits, services et pratiques à travers toutes les activités et les quatre dimensions.',
    category: 'systeme-valeur',
    difficulty: 'easy',
    tags: ['améliorer', 'continue'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-engage-activity',
    front: 'Activité IMPLIQUER de la chaîne de valeur ?',
    back: 'Fournir une bonne compréhension des besoins des parties prenantes, transparence continue et bonnes relations avec toutes les parties prenantes.',
    category: 'systeme-valeur',
    difficulty: 'medium',
    tags: ['impliquer', 'parties-prenantes'],
    masteryLevel: 'not-started'
  },

  // PRATIQUES ITIL - 7 Pratiques détaillées
  {
    id: 'fc-incident-problem',
    front: 'Différence fondamentale entre INCIDENT et PROBLÈME ?',
    back: 'INCIDENT = Interruption à restaurer RAPIDEMENT | PROBLÈME = Cause racine à analyser et ÉLIMINER',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['incident', 'problème'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-change-types',
    front: 'Quels sont les 3 types de changements ?',
    back: 'STANDARD (pré-autorisé, faible risque) | NORMAL (évaluation complète) | URGENCE (procédure accélérée)',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['changement', 'types'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-service-request',
    front: 'Qu\'est-ce qui caractérise une demande de service ?',
    back: 'PRÉ-APPROUVÉE, procédure standardisée, faible risque, fréquente. Si évaluation de risque nécessaire = changement.',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['demande-service', 'pré-approuvé'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-service-desk',
    front: 'Quel est le concept clé du Service Desk ?',
    back: 'Single Point of Contact (SPOC) - Point de contact UNIQUE entre IT et TOUS les utilisateurs. Coordonne même s\'il ne résout pas.',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['service-desk', 'spoc'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-incident-priority',
    front: 'Quelle est la formule de priorisation des incidents ?',
    back: 'Impact × Urgence = Priorité (matrice prédéfinie)',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['incident', 'priorité'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-sla-ola-uc',
    front: 'Différence entre SLA, OLA et UC ?',
    back: 'SLA = accord client EXTERNE | OLA = accord équipes INTERNES | UC = contrat FOURNISSEUR externe',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['sla', 'ola', 'uc'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-continual-improvement',
    front: 'Quel est le focus de l\'amélioration continue ?',
    back: 'Culture d\'amélioration à TOUS les niveaux, pas un projet ponctuel. Utilise le modèle en 7 étapes.',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['amélioration-continue', 'culture'],
    masteryLevel: 'not-started'
  },

  // PRATIQUES - 8 Pratiques avec objectif seulement
  {
    id: 'fc-info-security',
    front: 'Objectif de la Gestion de la Sécurité de l\'Information ?',
    back: 'Protéger les informations nécessaires à l\'organisation pour conduire ses activités. Concept clé : La triade CIA - Confidentialité, Intégrité, Disponibilité',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['sécurité', 'information', 'cia'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-relationship-mgmt',
    front: 'Objectif de la Gestion des Relations ?',
    back: 'Établir et entretenir les liens entre l\'organisation et ses parties prenantes aux niveaux stratégiques et tactiques.',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['relations', 'parties-prenantes'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-supplier-mgmt',
    front: 'Objectif de la Gestion des Fournisseurs ?',
    back: 'S\'assurer que les fournisseurs de l\'organisation et leur performance sont gérés de manière appropriée pour supporter la fourniture de produits et services de qualité.',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['fournisseurs', 'performance'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-it-asset-mgmt',
    front: 'Objectif de la Gestion des Actifs Informatiques ?',
    back: 'Planifier et gérer le cycle de vie complet de tous les actifs IT. Concept clé : Maximisation de la valeur tout au long du cycle de vie',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['actifs', 'cycle-de-vie'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-monitoring-events',
    front: 'Objectif de la Surveillance et Gestion des Événements ?',
    back: 'Observer systématiquement les services et composants, et enregistrer et rapporter des changements d\'état sélectionnés identifiés comme événements.',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['surveillance', 'événements'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-release-mgmt',
    front: 'Objectif de la Gestion des Mises en Production ?',
    back: 'Rendre disponibles des services et fonctionnalités nouveaux et modifiés pour utilisation. Concept clé : Planification et packaging cohérents des changements',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['release', 'mise-en-production'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-config-mgmt',
    front: 'Objectif de la Gestion de la Configuration des Services ?',
    back: 'S\'assurer que des informations précises et fiables sur la configuration des services, et les CIs qui les supportent, sont disponibles quand et où nécessaire.',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['configuration', 'cmdb'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-deployment-mgmt',
    front: 'Objectif de la Gestion des Déploiements ?',
    back: 'Déplacer du matériel, logiciel, documentation, processus ou tout autre composant nouveau ou modifié vers les environnements live.',
    category: 'pratiques',
    difficulty: 'easy',
    tags: ['déploiement', 'live'],
    masteryLevel: 'not-started'
  },

  // FLASHCARDS AVANCÉES - Pièges d'examen
  {
    id: 'fc-trap-value-creation',
    front: 'PIÈGE : "La valeur est créée par le fournisseur pour le client"',
    back: '❌ FAUX ! La valeur est TOUJOURS co-créée entre fournisseur ET consommateur. Jamais unilatéralement.',
    category: 'concepts-fondamentaux',
    difficulty: 'hard',
    tags: ['piège', 'valeur', 'co-création'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-trap-automation',
    front: 'PIÈGE : "Automatiser les processus pour les améliorer"',
    back: '❌ FAUX ! OPTIMISER d\'abord, PUIS automatiser. L\'automatisation amplifie les défauts existants.',
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['piège', 'optimisation', 'automatisation'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-trap-incident-analysis',
    front: 'PIÈGE : "L\'incident management analyse les causes racines"',
    back: '❌ FAUX ! Incident = restaurer rapidement | Problem = analyser causes racines',
    category: 'pratiques',
    difficulty: 'hard',
    tags: ['piège', 'incident', 'problème'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-trap-legacy-replacement',
    front: 'PIÈGE : "Remplacer complètement le système legacy"',
    back: '❌ FAUX ! Commencer là où vous êtes - évaluer et réutiliser l\'existant. Évolution progressive.',
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['piège', 'legacy', 'évolution'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-trap-technology-focus',
    front: 'PIÈGE : "Focus sur la dimension technologique"',
    back: '❌ FAUX ! Considérer les 4 dimensions de manière holistique. Aucune dimension n\'est plus importante.',
    category: 'dimensions',
    difficulty: 'hard',
    tags: ['piège', '4-dimensions', 'holistique'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-trap-service-desk-technical',
    front: 'PIÈGE : "Le Service Desk résout tous les incidents techniques"',
    back: '❌ FAUX ! Service Desk = coordinateur et point de contact (SPOC). Peut escalader sans résoudre techniquement.',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['piège', 'service-desk', 'coordination'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-trap-big-bang',
    front: 'PIÈGE : "Implémenter dans toute l\'organisation en une fois"',
    back: '❌ FAUX ! Progresser par itération avec feedback - pilote puis extension progressive.',
    category: 'principes-directeurs',
    difficulty: 'medium',
    tags: ['piège', 'itération', 'big-bang'],
    masteryLevel: 'not-started'
  },

  // SCÉNARIOS PRATIQUES
  {
    id: 'fc-scenario-bank-transform',
    front: 'SCÉNARIO : Une banque veut moderniser ses services IT. Quelle est la PREMIÈRE étape selon ITIL 4 ?',
    back: 'Comprendre la VALEUR actuelle et désirée pour chaque partie prenante (clients, employés, régulateur, actionnaires) avant tout changement.',
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['scénario', 'valeur', 'transformation'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-scenario-hospital-incident',
    front: 'SCÉNARIO : 3h du matin, système hospitalier en panne. Priorité IMMEDIATE ?',
    back: 'RESTAURER le service rapidement (Incident Management). L\'analyse des causes viendra après avec Problem Management.',
    category: 'pratiques',
    difficulty: 'medium',
    tags: ['scénario', 'incident', 'urgence'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-scenario-retail-automation',
    front: 'SCÉNARIO : Retail veut automatiser ses demandes IT répétitives. Ordre des étapes ?',
    back: '1) Analyser et OPTIMISER les processus actuels 2) Éliminer les étapes sans valeur 3) Standardiser 4) PUIS automatiser',
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['scénario', 'optimisation', 'automatisation'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-scenario-manufacturing-devops',
    front: 'SCÉNARIO : Manufacturing adopte DevOps. Selon ITIL 4, approche recommandée ?',
    back: 'Approche HOLISTIQUE : considérer les 4 dimensions simultanément (Personnes+Culture, Processus, Technologie, Partenaires).',
    category: 'dimensions',
    difficulty: 'hard',
    tags: ['scénario', 'devops', 'holistique'],
    masteryLevel: 'not-started'
  },

  // CONSEILS D'EXAMEN STRATÉGIQUES
  {
    id: 'fc-exam-strategy-absolutes',
    front: 'CONSEIL EXAMEN : Méfiance des mots absolus',
    back: 'Méfiez-vous de "Toujours", "Jamais", "Tous", "Aucun". ITIL 4 privilégie la flexibilité et l\'adaptation au contexte.',
    category: 'conseils-examen',
    difficulty: 'medium',
    tags: ['conseil', 'absolus', 'flexibilité'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-exam-strategy-simplicity',
    front: 'CONSEIL EXAMEN : Principe de simplicité',
    back: 'Entre deux solutions techniquement correctes, TOUJOURS choisir la plus SIMPLE et PRATIQUE à implémenter et maintenir.',
    category: 'conseils-examen',
    difficulty: 'easy',
    tags: ['conseil', 'simplicité', 'pratique'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-exam-strategy-time',
    front: 'CONSEIL EXAMEN : Gestion du temps',
    back: '1.5 minute par question en moyenne. Questions faciles : 30s. Complexes : 2-3 min max. Garder 10 min pour révision finale.',
    category: 'conseils-examen',
    difficulty: 'easy',
    tags: ['conseil', 'temps', 'stratégie'],
    masteryLevel: 'not-started'
  },
  {
    id: 'fc-exam-strategy-keywords',
    front: 'CONSEIL EXAMEN : Mots-clés importants',
    back: 'Budget→Sponsor | Rapidement→Incident | Cause racine→Problem | Pré-approuvé→Service Request | Standard→Change',
    category: 'conseils-examen',
    difficulty: 'medium',
    tags: ['conseil', 'mots-clés', 'identification'],
    masteryLevel: 'not-started'
  }
]

// Validation des totaux
export const flashcardStats = {
  total: flashcards.length,
  byCategory: {
    'concepts-fondamentaux': flashcards.filter(f => f.category === 'concepts-fondamentaux').length,
    'principes-directeurs': flashcards.filter(f => f.category === 'principes-directeurs').length,
    'dimensions': flashcards.filter(f => f.category === 'dimensions').length,
    'systeme-valeur': flashcards.filter(f => f.category === 'systeme-valeur').length,
    'pratiques': flashcards.filter(f => f.category === 'pratiques').length,
    'conseils-examen': flashcards.filter(f => f.category === 'conseils-examen').length
  },
  byDifficulty: {
    easy: flashcards.filter(f => f.difficulty === 'easy').length,
    medium: flashcards.filter(f => f.difficulty === 'medium').length,
    hard: flashcards.filter(f => f.difficulty === 'hard').length
  }
}