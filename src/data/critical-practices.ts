import { Concept } from '../types';

// ==============================================================================
// PRATIQUES CRITIQUES POUR L'EXAMEN - 15 pratiques sur 34 testées
// ==============================================================================

// PRATIQUES DE GESTION DE SERVICE (Service Management)
export const serviceManagementPractices: Concept[] = [
  {
    id: 'incident-management',
    title: '🚨 Gestion des Incidents (Incident Management)',
    definition: 'Minimiser l\'impact négatif des incidents en restaurant le service normal aussi rapidement que possible.',
    keyPoints: [
      'OBJECTIF: Restauration RAPIDE du service (pas l\'analyse)',
      'INCIDENT = Interruption ou réduction de qualité NON PLANIFIÉE',
      'Focus sur le RÉTABLISSEMENT, pas sur la cause racine',
      'Escalade basée sur IMPACT + URGENCE = PRIORITÉ',
      'Communication proactive aux utilisateurs affectés',
      'Documentation pour analyse ultérieure (par Problem Management)',
      'Workarounds temporaires acceptables pour restaurer le service'
    ],
    examTip: 'PIÈGE MAJEUR: Incident = RESTAURER rapidement | Problème = ANALYSER la cause. Ne jamais confondre!',
    category: 'practices'
  },
  {
    id: 'problem-management',
    title: '🔍 Gestion des Problèmes (Problem Management)',
    definition: 'Réduire la probabilité et l\'impact des incidents en identifiant les causes racines et en gérant les workarounds.',
    keyPoints: [
      'OBJECTIF: Trouver et éliminer les CAUSES RACINES',
      'PROBLÈME = Cause d\'UN ou PLUSIEURS incidents',
      '3 PHASES: Identification → Investigation → Contrôle',
      'PROACTIVE (anticiper) + RÉACTIVE (après incidents)',
      'Gère les erreurs connues et workarounds',
      'Analyse des tendances et patterns d\'incidents',
      'Solutions définitives vs solutions de contournement'
    ],
    examTip: 'Question type: "Même serveur tombe en panne 3 fois ce mois" = PROBLÈME (pattern répétitif)',
    category: 'practices'
  },
  {
    id: 'service-request-management',
    title: '📝 Gestion des Demandes de Service (Service Request Management)',
    definition: 'Supporter la qualité convenue d\'un service en gérant toutes les demandes de service pré-définies de manière efficace et conviviale.',
    keyPoints: [
      'Demandes PRÉ-APPROUVÉES et standardisées',
      'Workflow prédéfini avec délais convenus',
      'Catalogue de services accessible aux utilisateurs',
      'Souvent automatisable via self-service',
      'Pas d\'évaluation de risque requise (déjà fait)',
      'SLA spécifiques par type de demande',
      'Exemples: Accès applications, réinitialisation mot de passe'
    ],
    examTip: 'Demande accès application STANDARD = Service Request | Demande nouveau type d\'accès = Change',
    category: 'practices'
  },
  {
    id: 'change-enablement',
    title: '🔄 Gestion des Changements (Change Enablement)',
    definition: 'Maximiser le nombre de changements IT réussis en évaluant les risques, en autorisant les changements et en gérant le planning des changements.',
    keyPoints: [
      'OBJECTIF: Maximiser les changements RÉUSSIS',
      'CHANGEMENT = Addition, modification ou suppression pouvant affecter les services',
      '3 TYPES: STANDARD (pré-autorisé), NORMAL (évaluation), URGENCE (crise)',
      'Change Advisory Board (CAB) pour changements complexes',
      'Évaluation OBLIGATOIRE: Impact, Risque, Ressources, Planning',
      'Post Implementation Review (PIR) = évaluation après changement'
    ],
    examTip: 'Changement STANDARD = Pré-autorisé, faible risque, procédure établie (ex: mise à jour antivirus mensuelle)',
    category: 'practices'
  },
  {
    id: 'service-level-management',
    title: '📊 Gestion des Niveaux de Service (Service Level Management)',
    definition: 'Établir des objectifs clairs basés sur les besoins métier pour la performance des services et s\'assurer qu\'ils sont atteints.',
    keyPoints: [
      'Négociation et accord sur les niveaux de service',
      'SLA = Service Level Agreement (avec client externe)',
      'OLA = Operational Level Agreement (équipes internes)',
      'UC = Underpinning Contract (avec fournisseurs)',
      'Monitoring continu de la performance',
      'Reporting régulier aux parties prenantes',
      'Amélioration continue des niveaux de service'
    ],
    examTip: 'SLA = Client externe | OLA = Équipes internes | UC = Fournisseurs externes',
    category: 'practices'
  },
  {
    id: 'availability-management',
    title: '⚡ Gestion de la Disponibilité (Availability Management)',
    definition: 'Assurer que les services atteignent les niveaux de disponibilité convenus pour satisfaire les besoins actuels et futurs.',
    keyPoints: [
      'DISPONIBILITÉ = Capacité d\'un service à remplir sa fonction quand requis',
      'Mesures: MTBF (Mean Time Between Failures)',
      'MTTR (Mean Time To Restore/Repair)',
      'Availability % = (Agreed Service Time - Downtime) / Agreed Service Time',
      'Proactive: Design for availability',
      'Réactive: Amélioration après incidents'
    ],
    examTip: 'Disponibilité = Temps de fonctionnement / Temps total convenu (en %)',
    category: 'practices'
  },
  {
    id: 'capacity-performance-management',
    title: '📈 Gestion de la Capacité et Performance',
    definition: 'Assurer que les services et l\'infrastructure peuvent gérer les niveaux convenus de capacité et performance de manière rentable.',
    keyPoints: [
      'CAPACITÉ = Maximum throughput qu\'un service peut gérer',
      'PERFORMANCE = Mesure de la rapidité/efficacité',
      '3 Sous-activités: Business, Service, Component Capacity Management',
      'Planning de capacité proactif',
      'Monitoring continu de l\'utilisation',
      'Optimisation coûts vs performance'
    ],
    examTip: 'Capacité = "Combien" (volume) | Performance = "À quelle vitesse" (rapidité)',
    category: 'practices'
  }
];

// PRATIQUES DE GESTION GÉNÉRALE (General Management)
export const generalManagementPractices: Concept[] = [
  {
    id: 'service-desk',
    title: '📞 Centre de Services (Service Desk)',
    definition: 'Point de contact unique entre le fournisseur de services et les utilisateurs. Gestion typique des incidents et demandes de service.',
    keyPoints: [
      'Point de contact UNIQUE et centralisé',
      'Premier niveau de support utilisateur',
      'Capture et catégorisation des incidents/demandes',
      'Escalade vers équipes spécialisées si nécessaire',
      'Communication proactive avec les utilisateurs',
      'Collecte de données pour amélioration continue',
      'Interface entre utilisateurs et équipes IT'
    ],
    examTip: 'Service Desk ≠ Support technique. C\'est un POINT DE CONTACT qui coordonne, pas forcément qui résout.',
    category: 'practices'
  },
  {
    id: 'continual-improvement-practice',
    title: '📊 Amélioration Continue (Continual Improvement)',
    definition: 'Aligner les pratiques et services de l\'organisation avec les besoins métier changeants grâce à l\'identification et amélioration continue.',
    keyPoints: [
      'Culture d\'amélioration à TOUS les niveaux',
      'Utilisation du modèle d\'amélioration en 7 étapes',
      'Basé sur des DONNÉES et mesures objectives',
      'Amélioration des services, pratiques ET capacités organisationnelles',
      'Intégré dans toutes les activités quotidiennes',
      'Focus sur la création de valeur'
    ],
    examTip: 'Amélioration Continue = CULTURE et APPROCHE systématique, pas juste des projets ponctuels',
    category: 'practices'
  },
  {
    id: 'supplier-management',
    title: '🤝 Gestion des Fournisseurs (Supplier Management)',
    definition: 'Assurer que les fournisseurs et leur performance sont gérés de manière appropriée pour supporter la fourniture de services de qualité.',
    keyPoints: [
      'Évaluation et sélection des fournisseurs',
      'Négociation et gestion des contrats',
      'Monitoring de la performance fournisseur',
      'Gestion des relations fournisseurs',
      'Gestion des risques liés aux fournisseurs',
      'Amélioration continue des services fournisseurs'
    ],
    examTip: 'Inclut fournisseurs internes (autres départements) ET externes (sociétés tierces)',
    category: 'practices'
  }
];

// PRATIQUES TECHNIQUES (Technical Management)
export const technicalManagementPractices: Concept[] = [
  {
    id: 'monitoring-event-management',
    title: '👁 Surveillance et Gestion des Événements (Monitoring and Event Management)',
    definition: 'Observer systématiquement les services et composants, enregistrer et rapporter les changements d\'état identifiés comme événements.',
    keyPoints: [
      'ÉVÉNEMENT = Changement d\'état significatif pour un CI',
      'Types: Informatif, Alerte (Warning), Exception (Critique)',
      'Monitoring continu et automatisé',
      'Seuils et alertes configurables',
      'Déclenchement automatique d\'actions',
      'Base pour autres pratiques (Incident, Problem)',
      'Dashboard et reporting en temps réel'
    ],
    examTip: 'Événement ≠ Incident. Événement = changement d\'état | Incident = interruption de service',
    category: 'practices'
  },
  {
    id: 'release-management',
    title: '🚀 Gestion des Livraisons (Release Management)',
    definition: 'Rendre les services nouveaux et modifiés disponibles pour utilisation.',
    keyPoints: [
      'LIVRAISON (Release) = Ensemble de changements autorisés déployés ensemble',
      'Planning et coordination des déploiements',
      'Tests d\'acceptation utilisateur',
      'Formation et documentation utilisateur',
      'Rollback plans en cas de problème',
      'Communication des nouvelles fonctionnalités'
    ],
    examTip: 'Release Management = Déployer les changements approuvés | Change Management = Approuver les changements',
    category: 'practices'
  },
  {
    id: 'deployment-management',
    title: '⚙️ Gestion du Déploiement (Deployment Management)',
    definition: 'Déplacer le matériel, logiciel, documentation, processus ou autre composant vers l\'environnement en direct.',
    keyPoints: [
      'Exécution technique des déploiements',
      'Vérification post-déploiement',
      'Coordination avec Release Management',
      'Automatisation des déploiements quand possible',
      'Procédures de rollback',
      'Validation de l\'environnement cible'
    ],
    examTip: 'Deployment = Exécution technique | Release = Coordination globale du déploiement',
    category: 'practices'
  },
  {
    id: 'service-configuration-management',
    title: '📋 Gestion de Configuration des Services (Service Configuration Management)',
    definition: 'Assurer que des informations précises et fiables sur la configuration des services sont disponibles quand et où elles sont nécessaires.',
    keyPoints: [
      'CMDB = Configuration Management Database',
      'CI = Configuration Item (élément de configuration)',
      'Relations et dépendances entre CIs',
      'Contrôle des changements de configuration',
      'Audits et vérifications de configuration',
      'Support pour autres pratiques (Change, Incident, Problem)'
    ],
    examTip: 'CMDB contient les CIs et leurs RELATIONS. Essentiel pour Impact Assessment des changements.',
    category: 'practices'
  }
];

// PRATIQUES ADDITIONNELLES IMPORTANTES
export const additionalPractices: Concept[] = [
  {
    id: 'it-asset-management',
    title: '💼 Gestion des Actifs IT (IT Asset Management)',
    definition: 'Planifier et gérer le cycle de vie complet de tous les actifs IT pour maximiser la valeur, contrôler les coûts et gérer les risques.',
    keyPoints: [
      'ACTIF = Ressource financièrement valorisable',
      'Cycle de vie: Planification → Acquisition → Déploiement → Maintenance → Retrait',
      'Optimisation des coûts et licences',
      'Compliance et audit',
      'Relation avec Service Configuration Management',
      'Gestion des contrats et garanties'
    ],
    examTip: 'Actif IT = Valeur financière | CI = Élément de configuration (peut être gratuit)',
    category: 'practices'
  }
];

// Combinaison de toutes les pratiques critiques
export const allCriticalPractices = [
  ...serviceManagementPractices,
  ...generalManagementPractices,
  ...technicalManagementPractices,
  ...additionalPractices
];