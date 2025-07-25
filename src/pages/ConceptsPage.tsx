import React, { useState, useEffect } from 'react'
import { 
  Search, 
  BookOpen, 
  Target, 
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Database,
  Settings,
  Users,
  FileText,
  Zap,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import LearningNavigation from '../components/LearningNavigation'
import { useAutoScroll } from '../hooks/useAutoScroll'

const ConceptsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null)
  const { scrollToElement } = useAutoScroll({ offset: 100, delay: 200 })

  const categories = [
    { id: 'all', label: 'Tous', count: 42 },
    { id: 'concepts-fondamentaux', label: 'Fondamentaux', count: 15 },
    { id: 'definitions-cles', label: 'Définitions', count: 12 },
    { id: 'systemes-donnees', label: 'Systèmes', count: 8 },
    { id: 'roles-responsabilites', label: 'Rôles', count: 5 },
    { id: 'metriques-mesures', label: 'Métriques', count: 2 }
  ]

  const difficulties = [
    { id: 'all', label: 'Toutes difficultés' },
    { id: 'easy', label: '● Facile', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
    { id: 'medium', label: '●● Moyen', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' },
    { id: 'hard', label: '●●● Difficile', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' }
  ]

  // Concepts ITIL v4 Foundation complets basés sur l'analyse des questions d'examen
  const concepts = [
    // ========== CONCEPTS FONDAMENTAUX ==========
    {
      id: 'valeur',
      title: 'Valeur (Value)',
      category: 'concepts-fondamentaux',
      difficulty: 'easy',
      icon: Target,
      definition: 'La perception des bénéfices, utilité et importance par les parties prenantes.',
      keyPoints: [
        'TOUJOURS co-créée entre fournisseur et consommateur',
        'Subjective et contextuelle pour chaque partie prenante',
        'Évolue dans le temps selon le contexte',
        'Comprend l\'utilité ET la garantie'
      ],
      questionsExamen: [
        'Q : Comment la valeur est-elle créée selon ITIL 4 ?→ R : TOUJOURS co-créée',
        'Q : Qui détermine la valeur d\'un service ?→ R : Les parties prenantes',
        'Q : La valeur peut-elle changer ?→ R : Oui, selon contexte et temps'
      ],
      piege: 'PIÈGE: La valeur n\'est JAMAIS créée unilatéralement par le fournisseur seul',
      examTip: 'Retenir: Co-création OBLIGATOIRE, sinon c\'est une ressource pas un service'
    },
    {
      id: 'service-vs-produit',
      title: 'Service vs Produit',
      category: 'concepts-fondamentaux',
      difficulty: 'medium',
      icon: BookOpen,
      definition: 'SERVICE = Moyen de faciliter des résultats | PRODUIT = Configuration de ressources',
      keyPoints: [
        'Service: facilite les résultats sans en prendre possession',
        'Service: transfert des risques vers le fournisseur',
        'Produit: configuration de ressources pour offrir de la valeur',
        'Un service utilise généralement un ou plusieurs produits'
      ],
      questionsExamen: [
        'Q : Différence principale service/produit ?→ R : Service facilite, produit configure',
        'Q : Qui possède les risques dans un service ?→ R : Le fournisseur',
        'Q : Un service peut-il utiliser des produits ?→ R : Oui, généralement'
      ],
      piege: 'PIÈGE: Un produit peut être vendu seul, un service transfère TOUJOURS des risques',
      examTip: 'Exemple: Office 365 (produit) dans service de productivité (service)'    },
    {
      id: 'utilite-garantie',
      title: 'Utilité vs Garantie',
      category: 'concepts-fondamentaux',
      difficulty: 'medium',
      icon: CheckCircle,
      definition: 'UTILITÉ = Ce que fait le service (fit for purpose) | GARANTIE = Comment il le fait (fit for use)',
      keyPoints: [
        'Utilité: fonctionnalité du service (ce qu\'il permet)',
        'Garantie: performance du service (disponibilité, capacité, sécurité)',
        'Les DEUX sont nécessaires pour créer de la valeur',
        'Garantie inclut: disponibilité, capacité, sécurité, continuité'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce que l\'utilité ?→ R : Ce que fait le service (fit for purpose)',
        'Q : Qu\'est-ce que la garantie ?→ R : Comment le service le fait (fit for use)',
        'Q : Peut-on avoir de la valeur sans garantie ?→ R : Non, les deux sont nécessaires'
      ],
      piege: 'PIÈGE: Utilité SANS garantie = PAS de valeur (ex: email qui marche 10% du temps)',
      examTip: 'Email: Utilité=envoyer messages, Garantie=99.9% dispo, sécurisé, rapide'    },
    {
      id: 'outcome-vs-output',
      title: 'Outcome vs Output',
      category: 'concepts-fondamentaux',
      difficulty: 'hard',
      icon: Target,
      definition: 'OUTCOME = Résultat pour les parties prenantes | OUTPUT = Livrable du service',
      keyPoints: [
        'Outcome: ce que les parties prenantes obtiennent réellement',
        'Output: ce que le service produit directement',
        'Outcome dépend de comment l\'output est utilisé',
        'Focus ITIL 4: outcomes plutôt qu\'outputs'
      ],
      questionsExamen: [
        'Q : Différence outcome/output ?→ R : Outcome=résultat final, Output=livrable',
        'Q : Sur quoi ITIL 4 se concentre-t-il ?→ R : Outcomes (résultats)',
        'Q : Un output garantit-il un outcome ?→ R : Non, dépend de l\'utilisation'
      ],
      piege: 'PIÈGE: Livrer un service (output) ≠ obtenir le résultat voulu (outcome)',
      examTip: 'Exemple: Backup (output) vs Restauration réussie (outcome)'    },
    {
      id: 'parties-prenantes',
      title: 'Parties prenantes',
      category: 'concepts-fondamentaux',
      difficulty: 'easy',
      icon: Users,
      definition: 'Personnes, équipes et organisations qui ont un intérêt dans une organisation',
      keyPoints: [
        'Incluent: clients, utilisateurs, sponsors, fournisseurs',
        'Chacune a une perception différente de la valeur',
        'Leurs besoins peuvent être conflictuels',
        'Doivent être identifiées et comprises'
      ],
      questionsExamen: [
        'Q : Qui sont les parties prenantes ?→ R : Tous ceux qui ont un intérêt',
        'Q : Ont-elles la même vision de la valeur ?→ R : Non, chacune sa perception',
        'Q : Peut-il y avoir des conflits ?→ R : Oui, besoins parfois opposés'
      ],
      piege: 'PIÈGE: Ne pas oublier les parties prenantes internes (équipes IT)',
      examTip: 'Inclure: utilisateurs finaux, management, équipes techniques, fournisseurs'    },

    // ========== DÉFINITIONS CLÉS ==========
    {
      id: 'incident-definition',
      title: 'Incident',
      category: 'definitions-cles',
      difficulty: 'easy',
      icon: AlertTriangle,
      definition: 'Interruption non planifiée d\'un service ou réduction de la qualité d\'un service',
      keyPoints: [
        'NON PLANIFIÉE = caractéristique clé',
        'Peut être une interruption totale ou partielle',
        'Peut être une dégradation de qualité',
        'N\'importe qui peut signaler un incident'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce qu\'un incident ?→ R : Interruption non planifiée ou dégradation',
        'Q : Caractéristique principale ?→ R : Non planifiée',
        'Q : Qui peut signaler un incident ?→ R : N\'importe qui'
      ],
      piege: 'PIÈGE: Incident = SYMPTÔME, pas la cause (c\'est le problème)',
      examTip: 'Retenir: NON PLANIFIÉE + impact sur service = incident',
      timeToRead: 4
    },
    {
      id: 'probleme-definition',
      title: 'Problème',
      category: 'definitions-cles',
      difficulty: 'medium',
      icon: Shield,
      definition: 'Cause ou cause potentielle d\'un ou plusieurs incidents',
      keyPoints: [
        'Cause racine des incidents',
        'Peut exister SANS incident (problème proactif)',
        'Un problème peut causer plusieurs incidents',
        'Nécessite analyse de cause racine'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce qu\'un problème ?→ R : Cause d\'un ou plusieurs incidents',
        'Q : Peut-il exister sans incident ?→ R : Oui (problème proactif)',
        'Q : Relation avec incidents ?→ R : 1 problème → plusieurs incidents'
      ],
      piege: 'PIÈGE: On peut identifier un problème AVANT qu\'il cause des incidents',
      examTip: 'Incident = symptôme visible, Problème = cause à investiguer'    },
    {
      id: 'erreur-connue',
      title: 'Erreur connue',
      category: 'definitions-cles',
      difficulty: 'hard',
      icon: Database,
      definition: 'Problème dont la cause racine et le workaround ont été documentés',
      keyPoints: [
        'Évolution d\'un problème avec cause identifiée',
        'Workaround documenté (solution temporaire)',
        'Stockée dans KEDB (Known Error Database)',
        'Permet résolution rapide d\'incidents similaires'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce qu\'une erreur connue ?→ R : Problème avec cause ET workaround documentés',
        'Q : Où est-elle stockée ?→ R : Dans la KEDB (Known Error Database)',
        'Q : Différence avec problème ?→ R : Cause + solution temporaire documentées'
      ],
      piege: 'PIÈGE: Erreur connue = problème + cause + workaround (les 3 requis)',
      examTip: 'Progression: Incident → Problème → Erreur connue (avec workaround)'    },
    {
      id: 'evenement-definition',
      title: 'Événement',
      category: 'definitions-cles',
      difficulty: 'easy',
      icon: Zap,
      definition: 'Tout changement d\'état significatif pour la gestion d\'un service',
      keyPoints: [
        'Peut être automatiquement détecté par outils de monitoring',
        'Peut être normal ou anormal',
        'Événement anormal peut devenir incident',
        'Base de la surveillance proactive'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce qu\'un événement ?→ R : Changement d\'état significatif',
        'Q : Comment sont-ils détectés ?→ R : Généralement par outils de monitoring',
        'Q : Tous les événements sont-ils des incidents ?→ R : Non, seulement les anormaux'
      ],
      piege: 'PIÈGE: Événement ≠ Incident automatiquement (peut être normal)',
      examTip: 'Événement = notification, Incident = interruption de service'    },
    {
      id: 'changement-definition',
      title: 'Changement',
      category: 'definitions-cles',
      difficulty: 'medium',
      icon: Settings,
      definition: 'Ajout, modification ou suppression de tout élément qui peut affecter les services',
      keyPoints: [
        'Inclut: ajout, modification, suppression',
        '3 types: Standard, Normal, Urgence',
        'Objectif: maximiser réussites, minimiser risques',
        'Nécessite autorisation selon le type'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce qu\'un changement ?→ R : Ajout, modification ou suppression',
        'Q : Combien de types ?→ R : 3 types (Standard, Normal, Urgence)',
        'Q : Objectif principal ?→ R : Maximiser réussites, minimiser risques'
      ],
      piege: 'PIÈGE: TOUT changement doit être autorisé (même les "petits")',
      examTip: 'Retenir: 3 types avec processus d\'autorisation différents'    },

    // ========== SYSTÈMES ET DONNÉES ==========
    {
      id: 'cms-definition',
      title: 'Configuration Management System (CMS)',
      category: 'systemes-donnees',
      difficulty: 'hard',
      icon: Database,
      definition: 'Ensemble d\'outils et bases de données pour gérer les informations de configuration',
      keyPoints: [
        'Contient tous les Configuration Items (CI)',
        'Supporte tous les processus de gestion des services',
        'Inclut la CMDB et autres sources de données',
        'Vue fédérée des informations de configuration'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce que le CMS ?→ R : Système de gestion des informations de configuration',
        'Q : Que contient-il ?→ R : Tous les Configuration Items (CI)',
        'Q : Inclut-il la CMDB ?→ R : Oui, et d\'autres sources de données'
      ],
      piege: 'PIÈGE: CMS ≠ CMDB (CMS est plus large, inclut CMDB + autres outils)',
      examTip: 'CMS = vision globale, CMDB = base de données spécifique'    },
    {
      id: 'kedb-definition',
      title: 'Known Error Database (KEDB)',
      category: 'systemes-donnees',
      difficulty: 'medium',
      icon: Database,
      definition: 'Base de données contenant les détails des erreurs connues et leurs workarounds',
      keyPoints: [
        'Stocke les erreurs connues avec workarounds',
        'Permet résolution rapide d\'incidents similaires',
        'Partagée entre équipes de support',
        'Mise à jour lors de la résolution de problèmes'
      ],
      questionsExamen: [
        'Q : Que contient la KEDB ?→ R : Erreurs connues et leurs workarounds',
        'Q : À quoi sert-elle ?→ R : Résoudre rapidement incidents similaires',
        'Q : Qui l\'utilise ?→ R : Équipes de support et gestion des incidents'
      ],
      piege: 'PIÈGE: KEDB contient des WORKAROUNDS, pas des corrections définitives',
      examTip: 'KEDB = bibliothèque de solutions temporaires documentées'    },
    {
      id: 'dml-definition',
      title: 'Definitive Media Library (DML)',
      category: 'systemes-donnees',
      difficulty: 'hard',
      icon: Database,
      definition: 'Référentiel sécurisé des versions autorisées de logiciels et documentation',
      keyPoints: [
        'Stockage sécurisé des médias autorisés',
        'Une seule source de vérité pour les logiciels',
        'Versions maîtresses et approuvées uniquement',
        'Accès contrôlé et auditable'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce que la DML ?→ R : Référentiel sécurisé des versions autorisées',
        'Q : Qu\'y stocke-t-on ?→ R : Logiciels et documentation approuvés',
        'Q : Caractéristique principale ?→ R : Une seule source de vérité'
      ],
      piege: 'PIÈGE: DML = versions AUTORISÉES seulement, pas de versions de test',
      examTip: 'DML = coffre-fort des logiciels officiels et approuvés'    },
    {
      id: 'service-catalogue',
      title: 'Catalogue de services',
      category: 'systemes-donnees',
      difficulty: 'medium',
      icon: BookOpen,
      definition: 'Liste structurée des services disponibles avec informations détaillées',
      keyPoints: [
        'Vue client des services disponibles',
        'Inclut descriptions, SLA, coûts, contacts',
        'Services actifs et approuvés uniquement',
        'Interface entre clients et fournisseur IT'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce que le catalogue de services ?→ R : Liste des services disponibles pour clients',
        'Q : Que contient-il ?→ R : Services actifs avec détails (SLA, coûts)',
        'Q : Qui l\'utilise ?→ R : Clients pour demander des services'
      ],
      piege: 'PIÈGE: Catalogue = services ACTIFS seulement (≠ portfolio = tous services)',
      examTip: 'Catalogue = vitrine client, Portfolio = vue complète interne'    },
    {
      id: 'service-portfolio',
      title: 'Portfolio de services',
      category: 'systemes-donnees',
      difficulty: 'hard',
      icon: FileText,
      definition: 'Vue complète de tous les services gérés par le fournisseur de services',
      keyPoints: [
        'Inclut TOUS les services (pipeline, catalogue, retraités)',
        'Vue interne de gestion des services',
        'Services en développement, actifs, retirés',
        'Outil de prise de décision stratégique'
      ],
      questionsExamen: [
        'Q : Différence catalogue/portfolio ?→ R : Portfolio = tous services, Catalogue = actifs seulement',
        'Q : Qui utilise le portfolio ?→ R : Management IT pour décisions stratégiques',
        'Q : Que contient-il ?→ R : Services pipeline + catalogue + retraités'
      ],
      piege: 'PIÈGE: Portfolio ≠ Catalogue (portfolio plus complet, vue interne)',
      examTip: 'Portfolio = vue 360° interne, Catalogue = vitrine externe'    },

    // ========== RÔLES ET RESPONSABILITÉS ==========
    {
      id: 'cab-definition',
      title: 'Change Advisory Board (CAB)',
      category: 'roles-responsabilites',
      difficulty: 'medium',
      icon: Users,
      definition: 'Groupe de personnes qui conseillent le change manager sur l\'évaluation des changements',
      keyPoints: [
        'Composition variable selon le changement',
        'Évalue les risques et impacts',
        'Donne des recommandations (ne décide pas toujours)',
        'CAB d\'urgence pour changements urgents'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce que le CAB ?→ R : Comité consultatif pour les changements',
        'Q : Que fait le CAB ?→ R : Évalue et conseille sur les changements',
        'Q : Le CAB autorise-t-il tous les changements ?→ R : Non, il conseille'
      ],
      piege: 'PIÈGE: CAB = CONSEILLE (advisory), l\'autorité de changement DÉCIDE',
      examTip: 'CAB = conseillers experts, Change Authority = décideurs'    },
    {
      id: 'change-authority',
      title: 'Autorité de changement',
      category: 'roles-responsabilites',
      difficulty: 'medium',
      icon: Shield,
      definition: 'Personne ou groupe autorisé à approuver un changement spécifique',
      keyPoints: [
        'Autorise formellement les changements',
        'Différente selon le type et impact du changement',
        'Peut être: change manager, CAB, direction',
        'Responsable de la décision finale'
      ],
      questionsExamen: [
        'Q : Qui autorise les changements ?→ R : L\'autorité de changement appropriée',
        'Q : Est-ce toujours la même personne ?→ R : Non, dépend du changement',
        'Q : Différence avec CAB ?→ R : CAB conseille, autorité décide'
      ],
      piege: 'PIÈGE: Autorité ≠ CAB (autorité décide, CAB conseille)',
      examTip: 'Autorité = qui signe, CAB = qui analyse'    },

    // ========== MÉTRIQUES ET MESURES ==========
    {
      id: 'sla-definition',
      title: 'Service Level Agreement (SLA)',
      category: 'metriques-mesures',
      difficulty: 'easy',
      icon: FileText,
      definition: 'Accord documenté entre fournisseur de services et client sur les niveaux de service',
      keyPoints: [
        'Accord FORMEL entre fournisseur et client',
        'Définit les niveaux de service attendus',
        'Inclut métriques, cibles, responsabilités',
        'Base légale en cas de non-respect'
      ],
      questionsExamen: [
        'Q : Qu\'est-ce qu\'un SLA ?→ R : Accord documenté fournisseur-client',
        'Q : Que contient-il ?→ R : Niveaux de service et métriques',
        'Q : Avec qui est-il signé ?→ R : Avec le client'
      ],
      piege: 'PIÈGE: SLA = EXTERNE (client), OLA = INTERNE (équipes)',
      examTip: 'SLA = contrat client, OLA = accord interne'    },
    {
      id: 'ola-uc',
      title: 'OLA et Underpinning Contract',
      category: 'metriques-mesures',
      difficulty: 'hard',
      icon: FileText,
      definition: 'OLA = accord interne, UC = contrat avec fournisseur externe',
      keyPoints: [
        'OLA: Operational Level Agreement (interne)',
        'UC: Underpinning Contract (fournisseur externe)',
        'Tous deux supportent les SLA',
        'Chaîne: UC → OLA → SLA'
      ],
      questionsExamen: [
        'Q : Différence OLA/UC ?→ R : OLA interne, UC avec fournisseur externe',
        'Q : Quel est leur rôle ?→ R : Supporter la livraison des SLA',
        'Q : Ordre logique ?→ R : UC → OLA → SLA'
      ],
      piege: 'PIÈGE: OLA ≠ UC (OLA = équipes internes, UC = fournisseurs externes)',
      examTip: 'Chaîne de support: Fournisseur externe (UC) → Équipe interne (OLA) → Client (SLA)'    }
  ]

  const filteredConcepts = concepts.filter(concept => {
    const matchesSearch = concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concept.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || concept.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || concept.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyBadge = (difficulty: string) => {
    const difficultyConfig = {
      easy: { label: '●', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
      medium: { label: '●●', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' },
      hard: { label: '●●●', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' }
    }
    const config = difficultyConfig[difficulty as keyof typeof difficultyConfig]
    return <span className={`badge ${config.color} w-12 text-center text-xs`}>{config.label}</span>
  }


  const toggleExpanded = (conceptId: string) => {
    setExpandedConcept(expandedConcept === conceptId ? null : conceptId)
  }

  // Autoscroll when expanding a concept
  useEffect(() => {
    if (expandedConcept) {
      scrollToElement(`concept-${expandedConcept}`)
    }
  }, [expandedConcept, scrollToElement])

  return (
    <div>
      <LearningNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Concepts ITIL v4 Foundation</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Maîtrisez tous les concepts essentiels testés dans l'examen ITIL v4 Foundation
          </p>
        </div>
      </div>

      {/* Info concise */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <div className="text-sm text-green-800 dark:text-green-200">
            <strong>Tous les concepts essentiels pour l'examen ITIL v4 Foundation</strong>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="card">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Recherche */}
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un concept..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Catégorie */}
          <select 
            className="input w-full lg:w-64"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label} ({category.count})
              </option>
            ))}
          </select>

          {/* Difficulté */}
          <select 
            className="input w-full lg:w-48"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            {difficulties.map(difficulty => (
              <option key={difficulty.id} value={difficulty.id}>
                {difficulty.label}
              </option>
            ))}
          </select>
        </div>
      </div>


      {/* Liste des concepts */}
      <div className="space-y-4">
        {filteredConcepts.map((concept) => {
          const isExpanded = expandedConcept === concept.id
          const IconComponent = concept.icon
          
          return (
            <div key={concept.id} id={`concept-${concept.id}`} className="learning-card">
              {/* En-tête du concept */}
              <div 
                className="cursor-pointer"
                onClick={() => toggleExpanded(concept.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="learning-card-header">
                      <h3 className="learning-card-title">{concept.title}</h3>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {getDifficultyBadge(concept.difficulty)}
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                    <p className="learning-card-content">{concept.definition}</p>
                  </div>
                </div>
              </div>

              {/* Contenu développé */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t dark:border-gray-700 space-y-6">
                  {/* Points clés */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      Points clés à retenir
                    </h4>
                    <ul className="space-y-2">
                      {concept.keyPoints.map((point, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Questions d'examen */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Target size={16} className="text-blue-500 mr-2" />
                      Questions typiques d'examen
                    </h4>
                    <div className="space-y-2">
                      {concept.questionsExamen.map((qa, index) => {
                        const [question, reponse] = qa.split('→ R : ')
                        return (
                          <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                            <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                              {question}
                            </p>
                            <p className="text-sm text-blue-900 dark:text-blue-100 font-medium mt-1">
                              → R : {reponse}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Piège à éviter */}
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle size={16} className="text-red-600 dark:text-red-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">
                          Piège à éviter
                        </h4>
                        <p className="text-sm text-red-800 dark:text-red-200">{concept.piege}</p>
                      </div>
                    </div>
                  </div>

                  {/* Conseil d'examen */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                    <div className="flex items-start">
                      <Lightbulb size={16} className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                          Conseil pour l'examen
                        </h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">{concept.examTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Empty state */}
      {filteredConcepts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Aucun concept trouvé</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Essayez de modifier vos critères de recherche ou de filtrage
          </p>
        </div>
      )}
      </div>
    </div>
  )
}

export default ConceptsPage