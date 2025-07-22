import type { Concept } from '@/types'

export const concepts: Concept[] = [
  // CONCEPTS FONDAMENTAUX
  {
    id: 'value',
    title: 'Valeur (Value)',
    definition: 'La perception des bénéfices, de l\'utilité et de l\'importance de quelque chose. Elle est définie par les parties prenantes selon leurs propres perspectives, besoins et préférences.',
    keyPoints: [
      'La valeur est TOUJOURS subjective et contextuelle',
      'Elle est CO-CRÉÉE à travers des relations actives de collaboration entre fournisseurs et consommateurs',
      'La perception de valeur évolue dans le temps et selon les circonstances',
      'Les fournisseurs doivent comprendre ce que les consommateurs valorisent',
      'Les consommateurs contribuent activement à la définition et à la réalisation de la valeur'
    ],
    examples: [
      'Service de messagerie : Valeur pour le commercial = mobilité et réactivité | Valeur pour la conformité = traçabilité et archivage',
      'Mise à jour système : Valeur pour la sécurité = protection contre les menaces | Valeur pour l\'utilisateur = stabilité et nouvelles fonctionnalités'
    ],
    examTips: [
      'PIÈGE CRITIQUE : La valeur n\'est JAMAIS créée unilatéralement. Toute réponse suggérant création par "le fournisseur seul" ou "le client seul" est FAUSSE. C\'est toujours une CO-CRÉATION.'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'easy',
    tags: ['fondamental', 'co-création', 'parties-prenantes']
  },
  {
    id: 'service',
    title: 'Service',
    definition: 'Un moyen de permettre la co-création de valeur en facilitant les résultats que les clients veulent atteindre, sans que le client ait à gérer des coûts et des risques spécifiques.',
    keyPoints: [
      'Un service est un MOYEN, pas une fin en soi',
      'Facilite l\'atteinte des résultats désirés par le client',
      'Implique un transfert de certains risques du consommateur vers le fournisseur',
      'Doit fournir à la fois utilité (fonctionnalité) ET garantie (performance)',
      'Les services sont basés sur un ou plusieurs produits configurés spécifiquement'
    ],
    examples: [
      'Service de cloud computing : Le client obtient de la capacité de stockage et de calcul (résultat) sans gérer les serveurs physiques, la climatisation du datacenter, les sauvegardes ou la sécurité physique (risques et coûts transférés au fournisseur).'
    ],
    examTips: [
      'Service = MOYEN de faciliter des résultats + Transfert des risques et coûts. Un service sans transfert de risque n\'est pas un vrai service selon ITIL.'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['service', 'résultats', 'risques']
  },
  {
    id: 'product',
    title: 'Produit (Product)',
    definition: 'Une configuration de ressources d\'une organisation conçue pour offrir de la valeur à un consommateur.',
    keyPoints: [
      'Configuration de ressources tangibles et/ou intangibles',
      'Peut inclure : droits d\'accès, biens physiques, actions de service, licences',
      'Conçu et configuré spécifiquement pour répondre à des besoins identifiés',
      'Un produit peut supporter plusieurs services différents',
      'La complexité technique du produit est généralement masquée au consommateur'
    ],
    examples: [
      'Produit : Suite Microsoft 365 (applications + stockage cloud + support)',
      'Services associés : Collaboration en temps réel, messagerie d\'entreprise, stockage sécurisé',
      'Le consommateur utilise les services sans se préoccuper de l\'infrastructure sous-jacente'
    ],
    examTips: [
      'DISTINCTION CRUCIALE : Produit = CONFIGURATION statique de ressources | Service = LIVRAISON dynamique de valeur via cette configuration'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['produit', 'configuration', 'ressources']
  },
  {
    id: 'utility-warranty',
    title: 'Utilité et Garantie (Utility and Warranty)',
    definition: 'Deux composantes essentielles et indissociables de la valeur d\'un service. Les deux DOIVENT être présentes pour créer de la valeur.',
    keyPoints: [
      'UTILITÉ = "Fit for purpose" = Fonctionnalité qui répond aux besoins du consommateur',
      'GARANTIE = "Fit for use" = Assurance que le service fonctionnera comme convenu',
      'Les DEUX sont OBLIGATOIRES pour créer de la valeur',
      'Utilité sans garantie = Service théoriquement utile mais pratiquement inutilisable',
      'Garantie sans utilité = Service fiable mais qui ne répond pas aux besoins réels'
    ],
    examples: [
      'Service email : Utilité = envoyer/recevoir des messages | Garantie = disponible 99.9%, sécurisé, temps de réponse < 1s',
      'Application de gestion RH : Utilité = gérer congés et paie | Garantie = accessible 24/7, conforme RGPD, sauvegarde quotidienne'
    ],
    examTips: [
      'Question type : "Service avec excellentes fonctionnalités mais disponible seulement 50% du temps" = Bonne UTILITÉ mais GARANTIE insuffisante = Pas de valeur créée'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'hard',
    tags: ['utilité', 'garantie', 'valeur']
  },
  {
    id: 'outcome-output',
    title: 'Résultat (Outcome) vs Sortie (Output)',
    definition: 'Un résultat est un changement d\'état qui apporte de la valeur pour une partie prenante. Une sortie est un livrable tangible d\'une activité.',
    keyPoints: [
      'SORTIE (Output) = Livrable tangible et mesurable d\'une activité',
      'RÉSULTAT (Outcome) = Changement qui permet d\'atteindre les objectifs business',
      'Les clients veulent et paient pour des RÉSULTATS, pas des sorties',
      'Une sortie peut contribuer à un résultat mais n\'est pas suffisante en elle-même',
      'Les services doivent être conçus en pensant aux résultats désirés'
    ],
    examples: [
      'Sortie : Rapport d\'incidents mensuel de 50 pages détaillées',
      'Résultat : Réduction de 30% du temps de résolution des incidents critiques',
      'Sortie : Formation de 3 jours sur un nouvel outil CRM',
      'Résultat : Augmentation de 40% du taux de conversion des prospects'
    ],
    examTips: [
      'Les clients PAIENT pour des résultats business, pas pour des livrables techniques. Toujours penser impact et changement positif.'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['résultat', 'sortie', 'valeur-business']
  },
  {
    id: 'cost-risk',
    title: 'Coût (Cost) et Risque (Risk)',
    definition: 'Les coûts sont les dépenses engagées par un consommateur pour obtenir un service. Les risques sont les incertitudes pouvant affecter l\'atteinte des résultats.',
    keyPoints: [
      'COÛTS : Peuvent être transférés du consommateur au fournisseur via le service',
      'Types de coûts : acquisition initiale, opération continue, retrait/décommissionnement',
      'RISQUES : Effet potentiel d\'incertitude sur l\'atteinte des objectifs',
      'Les services visent à réduire certains risques pour le consommateur',
      'De nouveaux risques peuvent être introduits (ex: dépendance fournisseur)'
    ],
    examples: [
      'Migration vers le cloud :',
      'Risques transférés : panne matérielle, obsolescence technique, sécurité physique',
      'Nouveaux risques : dépendance fournisseur, connectivité internet, conformité données'
    ],
    examTips: [
      'Un service efficace TRANSFÈRE les risques et coûts appropriés du consommateur vers le fournisseur.'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'medium',
    tags: ['coût', 'risque', 'transfert']
  },
  {
    id: 'stakeholders-roles',
    title: 'Parties Prenantes et Rôles (Stakeholders and Roles)',
    definition: 'Les parties prenantes sont toutes les personnes ou organisations qui peuvent affecter ou être affectées par les services. Trois rôles clés de consommation de service sont définis.',
    keyPoints: [
      'CLIENT = Définit les exigences du service et les besoins à satisfaire',
      'UTILISATEUR = Utilise les services au quotidien pour accomplir son travail',
      'SPONSOR = Autorise le budget et représente les intérêts de l\'organisation',
      'Une même personne peut cumuler plusieurs rôles simultanément',
      'Les attentes peuvent être contradictoires entre les différents rôles',
      'Autres parties prenantes importantes : fournisseurs, employés IT, actionnaires, régulateurs'
    ],
    examples: [
      'PME : Le PDG peut être Client (définit besoins) + Sponsor (approuve budget) + Utilisateur (utilise les services)',
      'Grande entreprise : Direction métier = Client | Employés = Utilisateurs | Direction financière = Sponsor'
    ],
    examTips: [
      'Questions sur "qui décide du budget?" = SPONSOR | "qui définit les exigences fonctionnelles?" = CLIENT | "qui utilise au quotidien?" = UTILISATEUR'
    ],
    category: 'concepts-fondamentaux',
    difficulty: 'easy',
    tags: ['parties-prenantes', 'rôles', 'client', 'utilisateur', 'sponsor']
  },

  // PRINCIPES DIRECTEURS
  {
    id: 'focus-on-value',
    title: 'Privilégier la Valeur (Focus on Value)',
    definition: 'Tout ce que fait l\'organisation doit être lié, directement ou indirectement, à la valeur pour elle-même et ses parties prenantes.',
    keyPoints: [
      'TOUJOURS commencer par comprendre QUI sont les parties prenantes',
      'Identifier CE QU\'ELLES valorisent réellement (pas ce qu\'on pense qu\'elles valorisent)',
      'Cartographier comment chaque activité contribue à créer cette valeur',
      'Éliminer impitoyablement les activités sans valeur ajoutée',
      'Mesurer et optimiser continuellement l\'expérience client/utilisateur',
      'La perception de valeur évolue : réévaluer régulièrement'
    ],
    examples: [
      'Avant d\'automatiser : "Quelle valeur ce processus apporte-t-il actuellement?"',
      'Nouveau projet : Créer une matrice valeur/partie prenante avant de commencer',
      'Réduction budgétaire : Préserver en priorité les activités à haute valeur perçue'
    ],
    examTips: [
      'Question type : "Première étape d\'une transformation IT?" → TOUJOURS comprendre la valeur actuelle et la valeur désirée pour chaque partie prenante'
    ],
    category: 'principes-directeurs',
    difficulty: 'medium',
    tags: ['valeur', 'parties-prenantes', 'optimisation']
  },
  {
    id: 'start-where-you-are',
    title: 'Commencer Là Où Vous Êtes (Start Where You Are)',
    definition: 'Ne pas partir de zéro sans d\'abord observer et évaluer objectivement ce qui existe déjà. Il y a toujours des éléments réutilisables.',
    keyPoints: [
      'Évaluer OBJECTIVEMENT l\'état actuel sans jugement prématuré',
      'Identifier ce qui fonctionne bien et doit être préservé',
      'Comprendre ce qui ne fonctionne pas et POURQUOI (analyse des causes)',
      'Éviter l\'approche "table rase" coûteuse, risquée et démotivante',
      'Capitaliser sur les investissements et connaissances existants',
      'Respecter l\'expérience et le savoir-faire accumulés'
    ],
    examples: [
      'Migration ERP : Documenter et préserver les processus métier efficaces actuels',
      'Nouvelle équipe : Observer pendant 30 jours avant de proposer des changements',
      'Amélioration service : Établir une baseline précise des performances actuelles'
    ],
    examTips: [
      'PIÈGE : "Remplacer entièrement le système legacy" = généralement FAUSSE. Préférer l\'évolution progressive à la révolution brutale.'
    ],
    category: 'principes-directeurs',
    difficulty: 'medium',
    tags: ['existant', 'évaluation', 'progression']
  },
  {
    id: 'progress-iteratively',
    title: 'Progresser de Manière Itérative avec du Feedback (Progress Iteratively with Feedback)',
    definition: 'Organiser le travail en sections plus petites et gérables qui peuvent être exécutées et complétées en temps opportun, avec évaluation et ajustement fréquents.',
    keyPoints: [
      'Diviser les grandes initiatives en itérations de 2-4 semaines maximum',
      'Définir ce qui constitue "trop gros" selon le contexte organisationnel',
      'Solliciter et intégrer le feedback À CHAQUE itération, pas à la fin',
      'Ajuster la trajectoire selon les apprentissages (fail fast, learn fast)',
      'Livrer de la valeur incrémentale continuellement, pas tout à la fin',
      'Réduire les risques par l\'apprentissage et l\'adaptation progressifs'
    ],
    examples: [
      'Déploiement ERP : Pilote finance → Ajustements → RH → Ajustements → Production',
      'Nouveau service : MVP interne → Beta avec 10 clients → Ajustements → Lancement général',
      'Process change : Test avec une équipe volontaire → Mesure impact → Extension progressive'
    ],
    examTips: [
      '"Comment implémenter dans 100 agences?" → Pilote sur 3 agences types, collecter feedback, ajuster, puis vagues progressives de 10-20 agences'
    ],
    category: 'principes-directeurs',
    difficulty: 'medium',
    tags: ['itératif', 'feedback', 'apprentissage']
  },
  {
    id: 'collaborate-visibility',
    title: 'Collaborer et Promouvoir la Visibilité (Collaborate and Promote Visibility)',
    definition: 'Travailler ensemble au-delà des frontières organisationnelles produit une meilleure adhésion, plus de pertinence et une plus grande probabilité de succès à long terme.',
    keyPoints: [
      'Impliquer les bonnes personnes au bon moment, ni trop tôt ni trop tard',
      'Partager l\'information de manière transparente et accessible',
      'Créer une compréhension commune et partagée des objectifs',
      'Activement briser les silos organisationnels et culturels',
      'Communication bidirectionnelle (écouter autant que parler)',
      'Rendre visibles les décisions, actions, progrès et obstacles'
    ],
    examples: [
      'Dashboard temps réel des incidents majeurs accessible à tous (IT et métiers)',
      'War room virtuelle permanente pour les changements critiques',
      'Wiki collaboratif pour la documentation des processus et décisions'
    ],
    examTips: [
      'Visibilité ≠ Surveillance intrusive. C\'est créer la transparence nécessaire pour améliorer la collaboration et la confiance.'
    ],
    category: 'principes-directeurs',
    difficulty: 'easy',
    tags: ['collaboration', 'visibilité', 'transparence']
  },
  {
    id: 'think-work-holistically',
    title: 'Penser et Travailler de Manière Holistique (Think and Work Holistically)',
    definition: 'Aucun service, pratique, processus, département ou fournisseur ne fonctionne seul. Les résultats souffrent quand on travaille en silo.',
    keyPoints: [
      'TOUJOURS considérer les 4 dimensions dans toute décision ou initiative',
      'Comprendre et mapper les interdépendances et impacts systémiques',
      'Éviter l\'optimisation locale qui dégrade la performance globale',
      'Intégrer la complexité sans la simplifier à l\'excès',
      'Adopter une vue de bout en bout (end-to-end) des services',
      'Anticiper les effets domino et conséquences non intentionnelles'
    ],
    examples: [
      'Upgrade technique : Analyser impact sur formation (personnes), processus, contrats fournisseurs',
      'Cost cutting IT : Modéliser l\'impact sur productivité business et satisfaction client',
      'Nouveau fournisseur cloud : Évaluer intégration avec écosystème existant et exit strategy'
    ],
    examTips: [
      'Solutions considérant qu\'UNE dimension = généralement FAUSSES. Toujours penser système global et interdépendances.'
    ],
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['holistique', '4-dimensions', 'système']
  },
  {
    id: 'keep-it-simple',
    title: 'Rester Simple et Pratique (Keep It Simple and Practical)',
    definition: 'Si un processus, service, action ou métrique n\'apporte pas de valeur ou ne produit pas de résultat utile, éliminez-le. Utilisez le minimum nécessaire.',
    keyPoints: [
      'Utiliser le nombre MINIMUM d\'étapes pour atteindre l\'objectif',
      'Éliminer sans pitié les activités sans valeur ajoutée claire',
      'Comprendre avant de simplifier (éviter la sur-simplification)',
      'S\'assurer que les solutions sont réalisables et facilement adoptables',
      'Éviter la complexité technique pour impressionner',
      'Privilégier l\'efficacité pratique à la perfection théorique'
    ],
    examples: [
      'Processus d\'approbation : 3 niveaux pertinents vs 7 niveaux bureaucratiques',
      'Documentation : Guide visuel d\'une page vs manuel technique de 200 pages',
      'Formulaire incident : 5 champs obligatoires essentiels vs 50 champs "au cas où"'
    ],
    examTips: [
      'Entre deux solutions techniquement correctes, TOUJOURS choisir la plus SIMPLE et PRATIQUE à implémenter et maintenir.'
    ],
    category: 'principes-directeurs',
    difficulty: 'easy',
    tags: ['simplicité', 'pratique', 'efficacité']
  },
  {
    id: 'optimize-automate',
    title: 'Optimiser et Automatiser (Optimize and Automate)',
    definition: 'Les ressources de tous types doivent être utilisées de manière optimale. Éliminer le gaspillage PUIS utiliser la technologie pour améliorer l\'efficacité.',
    keyPoints: [
      'ORDRE IMPÉRATIF : 1) OPTIMISER d\'abord 2) AUTOMATISER ensuite',
      'JAMAIS automatiser un processus défaillant, inefficace ou mal conçu',
      'L\'automatisation amplifie exponentiellement les défauts existants',
      'Optimiser = éliminer gaspillages, simplifier, standardiser, clarifier',
      'Automatiser = seulement après optimisation complète, pour l\'efficacité',
      'L\'humain reste essentiel pour jugement, créativité et exceptions'
    ],
    examples: [
      '❌ Mauvais : Automatiser un workflow d\'approbation à 15 étapes redondantes',
      '✅ Bon : Réduire à 3 étapes essentielles, standardiser, PUIS automatiser',
      'Reset password : Simplifier procédure (3 clics max) PUIS proposer self-service'
    ],
    examTips: [
      'PIÈGE MAJEUR : "Automatiser pour améliorer l\'efficacité" = TOUJOURS FAUX. La séquence correcte est TOUJOURS "Optimiser PUIS automatiser".'
    ],
    category: 'principes-directeurs',
    difficulty: 'hard',
    tags: ['optimisation', 'automatisation', 'ordre']
  },

  // 4 DIMENSIONS
  {
    id: 'organizations-people',
    title: 'Organisations et Personnes (Organizations and People)',
    definition: 'S\'assurer qu\'une organisation est structurée et dotée de manière appropriée, avec des rôles, responsabilités et systèmes d\'autorité clairement définis et acceptés.',
    keyPoints: [
      'Structure organisationnelle : hiérarchies, mécanismes de coordination, niveaux d\'autonomie',
      'Culture et leadership : valeurs partagées, comportements encouragés, styles de management',
      'Compétences et connaissances : techniques (hard skills), relationnelles (soft skills), formations continues',
      'Rôles et responsabilités : matrices RACI claires, descriptions de poste à jour, délégations explicites',
      'Communication : canaux formels/informels, fréquence, transparence, feedback loops',
      'Gestion du changement : accompagnement structuré, gestion des résistances, célébration des succès'
    ],
    examples: [
      'Transformation DevOps : Changement culturel profond (collaboration) + acquisition nouvelles compétences + restructuration équipes',
      'Migration Agile : Nouveaux rôles (Scrum Master, Product Owner) + formation + coaching + changement mindset',
      'Adoption ITIL : Formation certifiante + ambassadeurs internes + changement progressif de culture'
    ],
    examTips: [
      'Dimension souvent sous-estimée mais CRITIQUE. Sans les bonnes personnes, la bonne culture et l\'organisation appropriée, l\'échec est garanti.'
    ],
    category: 'dimensions',
    difficulty: 'medium',
    tags: ['organisation', 'personnes', 'culture', 'compétences']
  },
  {
    id: 'information-technology',
    title: 'Information et Technologie (Information and Technology)',
    definition: 'L\'information et les connaissances nécessaires, ainsi que les technologies requises pour la gestion des services et la création de valeur.',
    keyPoints: [
      'Information : données structurées/non structurées, connaissances tacites/explicites, propriété intellectuelle',
      'Gestion de l\'information : cycle de vie complet (création, stockage, utilisation, partage, archivage, destruction)',
      'Technologies : infrastructure (serveurs, réseau), applications, plateformes, outils',
      'Architecture : conception cohérente, standards d\'entreprise, capacité d\'intégration',
      'Innovation technologique : IA/ML, automatisation intelligente, cloud, IoT, blockchain',
      'Sécurité et conformité : protection multicouche, confidentialité, intégrité, réglementations (RGPD, etc.)'
    ],
    examples: [
      'CMDB moderne : Information (CIs et relations dynamiques) + Technologie (discovery automatique, visualisation)',
      'Knowledge Management : Articles structurés (information) + Plateforme collaborative avec IA (technologie)',
      'Monitoring intelligent : Métriques temps réel (information) + Outils prédictifs avec ML (technologie)'
    ],
    examTips: [
      'Ne PAS réduire cette dimension à "juste la technologie". L\'INFORMATION et sa gestion sont aussi importantes que les outils techniques.'
    ],
    category: 'dimensions',
    difficulty: 'medium',
    tags: ['information', 'technologie', 'données', 'architecture']
  },
  {
    id: 'partners-suppliers',
    title: 'Partenaires et Fournisseurs (Partners and Suppliers)',
    definition: 'Les relations d\'une organisation avec d\'autres organisations impliquées dans la conception, développement, déploiement et livraison des services.',
    keyPoints: [
      'Types de relations : fournisseurs stratégiques, partenaires, commodités, clients internes',
      'Stratégie de sourcing : make vs buy, insourcing/outsourcing, multi-sourcing, cloud strategy',
      'Gestion contractuelle : SLA/OLA/UC, mécanismes de pénalités/bonus, clauses de sortie',
      'Intégration des services : SIAM (Service Integration and Management), orchestration, gouvernance multi-fournisseurs',
      'Gestion des risques : analyse des dépendances, plans de continuité, stratégies de sortie',
      'Collaboration : gouvernance partagée, innovation conjointe, amélioration continue collaborative'
    ],
    examples: [
      'Stratégie multi-cloud : AWS (IaaS) + Microsoft 365 (SaaS) + Datacenter on-premise (services critiques)',
      'Service Desk étendu : Équipe interne L1 + Partenaire nearshore L2 + Experts vendor L3',
      'Écosystème développement : Équipe produit interne + Intégrateur + Freelances spécialisés'
    ],
    examTips: [
      '"Partenaires" inclut AUSSI tous les départements internes (RH, Finance, Marketing, etc.), pas uniquement les fournisseurs externes.'
    ],
    category: 'dimensions',
    difficulty: 'medium',
    tags: ['partenaires', 'fournisseurs', 'sourcing', 'relations']
  },
  {
    id: 'value-streams-processes',
    title: 'Flux de Valeur et Processus (Value Streams and Processes)',
    definition: 'Comment les différentes parties de l\'organisation travaillent ensemble de manière intégrée et coordonnée pour permettre la création de valeur.',
    keyPoints: [
      'Flux de valeur : séquence end-to-end d\'activités créant de la valeur pour le consommateur',
      'Processus : ensemble structuré d\'activités transformant des entrées en sorties',
      'Procédures : instructions détaillées et pas-à-pas pour exécuter une activité',
      'Optimisation : élimination des gaspillages (Lean), réduction des variations (Six Sigma)',
      'Mesure et contrôle : KPIs alignés sur la valeur, métriques de flux, tableaux de bord temps réel',
      'Amélioration continue : analyse des goulots d\'étranglement, identification des quick wins'
    ],
    examples: [
      'Flux "Demande au Déploiement" : Besoin client → Analyse → Design → Build → Test → Deploy → Support',
      'Optimisation incident : Réduire les transferts entre équipes de 7 à 3 = résolution 50% plus rapide',
      'Value Stream Mapping : Identifier et éliminer 40% d\'activités sans valeur ajoutée'
    ],
    examTips: [
      'Focus sur l\'INTÉGRATION et COORDINATION entre activités, pas sur l\'optimisation de processus isolés.'
    ],
    category: 'dimensions',
    difficulty: 'hard',
    tags: ['flux-de-valeur', 'processus', 'coordination', 'optimisation']
  },

  // Plus de concepts seront ajoutés selon les spécifications du CLAUDE.md...
]