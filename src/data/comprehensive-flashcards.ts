import { Flashcard } from '../types';

// ==============================================================================
// FLASHCARDS COMPLÈTES - Mémorisation optimisée pour l'examen
// ==============================================================================

export const comprehensiveFlashcards: Flashcard[] = [
  // CONCEPTS FONDAMENTAUX
  {
    id: 'fc1',
    front: 'Qu\'est-ce que la VALEUR en ITIL 4 ?',
    back: 'Les <strong>bénéfices, utilité et importance</strong> d\'un élément<br><strong>tel qu\'ils sont PERÇUS</strong><br>par une partie prenante<br><em>(Toujours SUBJECTIF)</em>',
    category: 'fundamentals'
  },
  {
    id: 'fc2', 
    front: 'Comment est créée la valeur ?',
    back: '<strong>CO-CRÉATION</strong><br>entre fournisseur<br>et consommateur<br><em>⚠️ JAMAIS unilatéralement !</em>',
    category: 'fundamentals'
  },
  {
    id: 'fc3',
    front: 'Service vs Produit ?',
    back: '<strong>SERVICE</strong> = MOYEN<br>de faciliter des résultats<br><br><strong>PRODUIT</strong> = CONFIGURATION<br>de ressources',
    category: 'fundamentals'
  },
  {
    id: 'fc4',
    front: 'Utilité vs Garantie ?',
    back: '<strong>UTILITÉ</strong> = Fit for PURPOSE<br><em>CE QUE fait le service</em><br><br><strong>GARANTIE</strong> = Fit for USE<br><em>COMMENT il performe</em>',
    category: 'fundamentals'
  },
  {
    id: 'fc5',
    front: 'Les 3 rôles de consommation ?',
    back: '<strong>CLIENT</strong> = définit besoins<br><strong>UTILISATEUR</strong> = utilise<br><strong>SPONSOR</strong> = autorise budget<br><em>(Une personne = plusieurs rôles)</em>',
    category: 'fundamentals'
  },
  {
    id: 'fc6',
    front: 'Résultat vs Sortie ?',
    back: '<strong>RÉSULTAT (Outcome)</strong><br>= conséquence souhaitée<br><br><strong>SORTIE (Output)</strong><br>= livrable tangible<br><em>Les clients veulent des résultats !</em>',
    category: 'fundamentals'
  },

  // PRINCIPES DIRECTEURS
  {
    id: 'fc7',
    front: 'Combien de principes directeurs ?',
    back: '<strong>7 PRINCIPES</strong><br>directeurs ITIL 4<br><em>Tous interconnectés</em>',
    category: 'principles'
  },
  {
    id: 'fc8',
    front: 'Ordre du principe 7 ?',
    back: '<strong>1. OPTIMISER</strong> d\'abord<br><strong>2. AUTOMATISER</strong> ensuite<br><br>⚠️ <em>PIÈGE MAJEUR d\'examen !<br>JAMAIS dans l\'autre sens !</em>',
    category: 'principles'
  },
  {
    id: 'fc9',
    front: 'Principe pour éviter "Big Bang" ?',
    back: '<strong>COMMENCER LÀ OÙ VOUS ÊTES</strong><br><br>• Évaluer l\'existant<br>• Construire dessus<br>• Éviter de tout remplacer',
    category: 'principles'
  },
  {
    id: 'fc10',
    front: 'Principe pour déploiements ?',
    back: '<strong>AVANCER PAR ITÉRATION</strong><br>avec feedback<br><br>• Pilote d\'abord<br>• Feedback<br>• Extension progressive',
    category: 'principles'
  },
  {
    id: 'fc11',
    front: 'Premier principe à appliquer ?',
    back: '<strong>PRIVILÉGIER LA VALEUR</strong><br><br>Toujours comprendre<br>la valeur pour les<br>parties prenantes<br>AVANT tout le reste',
    category: 'principles'
  },

  // 4 DIMENSIONS
  {
    id: 'fc12',
    front: 'Combien de dimensions ?',
    back: '<strong>4 DIMENSIONS</strong><br>à considérer<br><strong>SIMULTANÉMENT</strong><br><em>(Approche holistique)</em>',
    category: 'dimensions'
  },
  {
    id: 'fc13',
    front: 'Dimension "culture et compétences" ?',
    back: '<strong>ORGANISATIONS<br>ET PERSONNES</strong><br><br>• Culture<br>• Compétences<br>• Structure<br>• Communication',
    category: 'dimensions'
  },
  {
    id: 'fc14',
    front: 'Dimension technique ?',
    back: '<strong>INFORMATION<br>ET TECHNOLOGIE</strong><br><br>• Données<br>• Connaissances<br>• Technologies<br>• Architecture',
    category: 'dimensions'
  },

  // CHAÎNE DE VALEUR
  {
    id: 'fc15',
    front: 'Combien d\'activités chaîne de valeur ?',
    back: '<strong>6 ACTIVITÉS</strong><br>dans la Service<br>Value Chain<br><em>Interconnectées et flexibles</em>',
    category: 'chain'
  },
  {
    id: 'fc16',
    front: 'Activité PLANIFIER = ?',
    back: '<strong>Vision partagée</strong><br>Stratégie et direction<br>Coordination long terme<br><br><em>Ex: Stratégie IT 5 ans</em>',
    category: 'chain'
  },
  {
    id: 'fc17',
    front: 'Activité AMÉLIORER = ?',
    back: '<strong>Amélioration continue</strong><br>Analyse des métriques<br>Identification des causes<br><br><em>Ex: "30% changements échouent"</em>',
    category: 'chain'
  },
  {
    id: 'fc18',
    front: 'FOURNIR ET SOUTENIR = ?',
    back: '<strong>Opérations quotidiennes</strong><br>• Incidents<br>• Monitoring<br>• Support utilisateur<br><br><em>Le "Business as Usual"</em>',
    category: 'chain'
  },

  // PRATIQUES CRITIQUES
  {
    id: 'fc19',
    front: 'Incident vs Problème ?',
    back: '<strong>INCIDENT</strong> = RESTAURER<br>le service rapidement<br><br><strong>PROBLÈME</strong> = ANALYSER<br>la cause racine<br><br>⚠️ <em>Ne jamais confondre !</em>',
    category: 'practices'
  },
  {
    id: 'fc20',
    front: 'Centre de services = ?',
    back: '<strong>Point de contact UNIQUE</strong><br>entre fournisseur<br>et utilisateurs<br><br><em>Coordonne, n\'résout pas tout</em>',
    category: 'practices'
  },
  {
    id: 'fc21',
    front: 'Types de changements ?',
    back: '<strong>STANDARD</strong> = pré-autorisé<br><strong>NORMAL</strong> = évaluation<br><strong>URGENCE</strong> = crise<br><br><em>Standard = faible risque</em>',
    category: 'practices'
  },
  {
    id: 'fc22',
    front: 'Demande service standard ?',
    back: '<strong>Pré-approuvée</strong><br>Workflow défini<br>Pas d\'éval. risque<br><br><em>Ex: Accès app standard</em>',
    category: 'practices'
  },
  {
    id: 'fc23',
    front: 'Événement vs Incident ?',
    back: '<strong>ÉVÉNEMENT</strong><br>= changement d\'état<br>(peut être normal)<br><br><strong>INCIDENT</strong><br>= interruption service<br>(toujours problématique)',
    category: 'practices'
  },
  {
    id: 'fc24',
    front: 'CMDB contient quoi ?',
    back: '<strong>Configuration Items (CIs)</strong><br>et leurs <strong>RELATIONS</strong><br><br>Essentiel pour<br>évaluer impacts<br>des changements',
    category: 'practices'
  },

  // AMÉLIORATION CONTINUE
  {
    id: 'fc25',
    front: 'Amélioration continue = ?',
    back: 'Activité <strong>RÉCURRENTE</strong><br>à <strong>TOUS</strong> les niveaux<br><br>Culture d\'amélioration<br>basée sur les données',
    category: 'practices'
  },
  {
    id: 'fc26',
    front: 'Modèle amélioration continue ?',
    back: '<strong>7 ÉTAPES</strong><br>1. Vision?<br>2. Où maintenant?<br>3. Où aller?<br>4. Comment?<br>5. Action<br>6. Arrivés?<br>7. Maintenir élan',
    category: 'chain'
  },

  // EXAMEN 
  {
    id: 'fc27',
    front: 'Format examen Foundation ?',
    back: '<strong>40 questions</strong><br><strong>60 minutes</strong><br><strong>65% requis</strong><br>(26 bonnes réponses)<br><br><em>+25% temps non-anglophones</em>',
    category: 'exam'
  },
  {
    id: 'fc28',
    front: 'Pratiques testées examen ?',
    back: '<strong>15 pratiques</strong><br>sur 34 total<br><br>Représentent<br><strong>24 questions / 40</strong><br>(60% de l\'examen)',
    category: 'exam'
  },
  {
    id: 'fc29',
    front: 'SVS = ?',
    back: '<strong>Service Value System</strong><br><br>Framework principal<br>d\'ITIL 4 qui intègre :<br>• Principes<br>• Gouvernance<br>• Chaîne de valeur<br>• Pratiques<br>• Amélioration',
    category: 'chain'
  },
  {
    id: 'fc30',
    front: 'Entrées et sorties SVS ?',
    back: '<strong>ENTRÉES :</strong><br>Opportunité + Demande<br><br><strong>SORTIE :</strong><br>VALEUR<br>(co-créée)<br><br><em>Transformation demande → valeur</em>',
    category: 'fundamentals'
  },

  // PIÈGES D'EXAMEN
  {
    id: 'fc31',
    front: 'Mots absolus dans examen ?',
    back: 'Méfiance avec :<br><strong>"TOUJOURS"</strong><br><strong>"JAMAIS"</strong><br><strong>"TOUS"</strong><br><strong>"AUCUN"</strong><br><br><em>Souvent réponses fausses</em>',
    category: 'exam'
  },
  {
    id: 'fc32',
    front: 'Stratégie réponse examen ?',
    back: '1. <strong>Lire 2 fois</strong><br>2. <strong>Éliminer 2 fausses</strong><br>3. <strong>Appliquer principe</strong><br>4. <strong>Choisir + simple</strong><br><br><em>Si doute = + pratique</em>',
    category: 'exam'
  }
];

// Flashcards par catégorie
export const fundamentalFlashcards = comprehensiveFlashcards.filter(fc => fc.category === 'fundamentals');
export const principleFlashcards = comprehensiveFlashcards.filter(fc => fc.category === 'principles');  
export const dimensionFlashcards = comprehensiveFlashcards.filter(fc => fc.category === 'dimensions');
export const chainFlashcards = comprehensiveFlashcards.filter(fc => fc.category === 'chain');
export const practiceFlashcards = comprehensiveFlashcards.filter(fc => fc.category === 'practices');
export const examFlashcards = comprehensiveFlashcards.filter(fc => fc.category === 'exam');

// Sets thématiques pour révision ciblée
export const criticalFlashcards = [
  ...comprehensiveFlashcards.filter(fc => ['fc2', 'fc8', 'fc19', 'fc27'].includes(fc.id)), // Pièges majeurs
];

export const quickReviewFlashcards = [
  ...comprehensiveFlashcards.filter(fc => ['fc1', 'fc3', 'fc4', 'fc7', 'fc12', 'fc15', 'fc19', 'fc27'].includes(fc.id)), // Essentiel
];

export default comprehensiveFlashcards;