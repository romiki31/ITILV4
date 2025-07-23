import React, { useState } from 'react'
import { 
  Users, 
  Settings, 
  Info, 
  Workflow, 
  Target,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Globe,
  DollarSign,
  Shield,
  Building,
  Zap,
  Scale
} from 'lucide-react'

const DimensionsPage: React.FC = () => {
  const [expandedDimension, setExpandedDimension] = useState<number | null>(null)
  const [expandedPestle, setExpandedPestle] = useState<string | null>(null)

  const dimensions = [
    {
      id: 1,
      titre: "Organisations et Personnes",
      icon: Users,
      color: "bg-blue-500",
      description: "Les structures organisationnelles, les rôles, les responsabilités et les systèmes d'autorité.",
      elements: [
        "Structure organisationnelle formelle avec rôles définis",
        "Culture, compétences et compétences du personnel", 
        "Styles de gestion et de leadership",
        "Communication et méthodes de collaboration"
      ],
      considerations: [
        "Comment le travail est divisé entre les équipes",
        "Les compétences nécessaires pour délivrer les services",
        "La culture organisationnelle et ses valeurs",
        "Les relations avec les parties prenantes externes"
      ],
      questionsExamen: [
        "Q: Que couvre la dimension 'Organisations et Personnes' ? → R: Structures, rôles, culture, compétences",
        "Q: Que comprend cette dimension ? → R: Rôles, responsabilités, autorité, culture, compétences",
        "Q: Focus principal de cette dimension ? → R: Comment les personnes travaillent ensemble"
      ],
      piege: "PIÈGE: Cette dimension ne couvre pas QUE les RH - inclut structure, autorité et culture",
      examTip: "Retenir: RÔLES + CULTURE + COMPÉTENCES + STRUCTURE ORGANISATIONNELLE"
    },
    {
      id: 2,
      titre: "Information et Technologie",
      icon: Info,
      color: "bg-green-500",
      description: "Les informations et connaissances, ainsi que les technologies nécessaires à la gestion des services.",
      elements: [
        "Systèmes d'information et bases de données",
        "Technologies de communication et collaboration",
        "Intelligence artificielle et automatisation",
        "Gestion des connaissances et architecture"
      ],
      considerations: [
        "Quelles informations sont nécessaires pour les services",
        "Comment l'information est gérée et protégée",
        "Technologies compatibles avec la stratégie",
        "Innovations technologiques disponibles"
      ],
      questionsExamen: [
        "Q: Que couvre 'Information et Technologie' ? → R: Informations nécessaires + technologies requises",
        "Q: Inclut-elle la gestion des connaissances ? → R: Oui, informations ET connaissances",
        "Q: Uniquement la technologie ? → R: Non, aussi les INFORMATIONS et CONNAISSANCES"
      ],
      piege: "PIÈGE: Ce n'est pas QUE la technologie - inclut aussi INFORMATIONS et CONNAISSANCES",
      examTip: "Retenir: INFORMATIONS + CONNAISSANCES + TECHNOLOGIES (les 3 ensemble)"
    },
    {
      id: 3,
      titre: "Partenaires et Fournisseurs",
      icon: Settings,
      color: "bg-purple-500",
      description: "Les relations avec d'autres organisations impliquées dans la conception, le déploiement et la fourniture de services.",
      elements: [
        "Contrats et accords de niveau de service",
        "Gestion des relations avec les fournisseurs",
        "Intégration et collaboration externe",
        "Partage des risques et des bénéfices"
      ],
      considerations: [
        "Stratégie de sourcing (interne vs externe)",
        "Dépendances envers les fournisseurs",
        "Coûts et risques associés au sourcing",
        "Culture et façons de travailler compatibles"
      ],
      questionsExamen: [
        "Q: Que couvre 'Partenaires et Fournisseurs' ? → R: Relations avec autres organisations",
        "Q: Inclut-elle les fournisseurs internes ? → R: Non, uniquement organisations EXTERNES",
        "Q: Que gère cette dimension ? → R: Relations, contrats, intégration avec externes"
      ],
      piege: "PIÈGE: Uniquement organisations EXTERNES - les équipes internes sont dans 'Organisations et Personnes'",
      examTip: "Retenir: EXTERNE seulement - autres organisations impliquées dans les services"
    },
    {
      id: 4,
      titre: "Flux de Valeur et Processus",
      icon: Workflow,
      color: "bg-orange-500",
      description: "La façon dont les différentes parties de l'organisation travaillent ensemble pour créer de la valeur.",
      elements: [
        "Activités de la chaîne de valeur des services",
        "Processus et procédures documentés",
        "Flux de travail intégrés et orchestrés",
        "Optimisation et amélioration continue"
      ],
      considerations: [
        "Comment la valeur est créée et livrée",
        "Transformation des demandes en services",
        "Efficacité et efficience des processus",
        "Points d'intégration et de transfert"
      ],
      questionsExamen: [
        "Q: Que couvre 'Flux de Valeur et Processus' ? → R: Comment les activités travaillent ensemble",
        "Q: Focus de cette dimension ? → R: Coordination des activités pour créer de la valeur",
        "Q: Inclut-elle la chaîne de valeur ? → R: Oui, activités CVS et leur coordination"
      ],
      piege: "PIÈGE: Pas seulement les processus - aussi les FLUX DE VALEUR et coordination",
      examTip: "Retenir: COMMENT les composants travaillent ENSEMBLE pour créer valeur"
    }
  ]

  // Analyse PESTLE détaillée - cruciale pour l'examen ITIL v4
  const pestleFactors = [
    {
      id: 'political',
      titre: 'Politiques (Political)',
      icon: Building,
      color: 'bg-red-500',
      definition: 'Facteurs gouvernementaux et politiques qui influencent les services',
      exemples: [
        'Réglementations gouvernementales et lois',
        'Politiques fiscales et économiques',
        'Stabilité politique et changements de gouvernement',
        'Relations internationales et traités commerciaux',
        'Politiques environnementales et de durabilité'
      ],
      impactServices: [
        'Conformité réglementaire obligatoire (RGPD, SOX)',
        'Modifications des processus selon nouvelles lois',
        'Audit et reporting gouvernemental requis',
        'Restrictions géographiques sur les données'
      ],
      questionsExamen: [
        'Q: Exemple de facteur politique ? → R: Réglementations, lois, politiques gouvernementales',
        'Q: Impact sur services IT ? → R: Conformité, audit, restrictions géographiques',
        'Q: RGPD est quel type de facteur ? → R: Politique (réglementation)'
      ],
      examTip: 'Politique = tout ce qui vient du GOUVERNEMENT (lois, règlements, politiques)'
    },
    {
      id: 'economic',
      titre: 'Économiques (Economic)', 
      icon: DollarSign,
      color: 'bg-green-500',
      definition: 'Conditions économiques qui affectent les coûts et investissements',
      exemples: [
        'Taux d\'intérêt et inflation',
        'Croissance économique et récession',
        'Taux de change et volatilité monétaire',
        'Coût de la main-d\'œuvre et disponibilité',
        'Conditions de financement et investissement'
      ],
      impactServices: [
        'Budget IT et ressources disponibles',
        'Coûts des fournisseurs et sous-traitants',
        'Décisions d\'investissement technologique',
        'Sourcing géographique basé sur coûts'
      ],
      questionsExamen: [
        'Q: Exemple de facteur économique ? → R: Taux d\'intérêt, inflation, récession',
        'Q: Impact sur services ? → R: Budgets, coûts fournisseurs, investissements',
        'Q: Budget IT réduit = quel facteur ? → R: Économique'
      ],
      examTip: 'Économique = tout ce qui concerne l\'ARGENT et les CONDITIONS FINANCIÈRES'
    },
    {
      id: 'social',
      titre: 'Sociaux (Social)',
      icon: Users,
      color: 'bg-blue-500', 
      definition: 'Tendances sociales et démographiques qui influencent les besoins',
      exemples: [
        'Démographie et structure d\'âge',
        'Attitudes culturelles et valeurs sociales',
        'Modes de vie et habitudes de consommation',
        'Éducation et niveaux de compétences',
        'Mobilité géographique et télétravail'
      ],
      impactServices: [
        'Attentes utilisateurs pour mobilité et flexibilité',
        'Préférences pour self-service et automation',
        'Besoins d\'accessibilité et inclusion',
        'Demande pour services de collaboration'
      ],
      questionsExamen: [
        'Q: Exemple de facteur social ? → R: Démographie, culture, modes de vie',
        'Q: Télétravail est quel facteur ? → R: Social (changement mode de vie)',
        'Q: Impact sur services IT ? → R: Attentes mobilité, self-service, collaboration'
      ],
      examTip: 'Social = COMPORTEMENTS et ATTENTES des PERSONNES dans la société'
    },
    {
      id: 'technological',
      titre: 'Technologiques (Technological)',
      icon: Zap,
      color: 'bg-yellow-500',
      definition: 'Innovations et évolutions technologiques disponibles',
      exemples: [
        'Nouvelles technologies et innovations',
        'Automatisation et intelligence artificielle',
        'Cloud computing et virtualisation',
        'Sécurité et cybersécurité',
        'Vitesse du changement technologique'
      ],
      impactServices: [
        'Opportunités d\'amélioration et modernisation',
        'Obsolescence des technologies actuelles',
        'Nouveaux risques de sécurité à gérer',
        'Pression concurrentielle technologique'
      ],
      questionsExamen: [
        'Q: Exemple de facteur technologique ? → R: IA, cloud, automation, nouvelles technologies',
        'Q: Cloud computing = quel facteur ? → R: Technologique',
        'Q: Impact sur services ? → R: Modernisation, obsolescence, nouveaux risques'
      ],
      examTip: 'Technologique = INNOVATIONS et ÉVOLUTIONS de la technologie disponible'
    },
    {
      id: 'legal',
      titre: 'Légaux (Legal)',
      icon: Scale,
      color: 'bg-purple-500',
      definition: 'Cadre juridique et obligations légales spécifiques',
      exemples: [
        'Lois sur la protection des données',
        'Droits de propriété intellectuelle',
        'Obligations contractuelles et SLA',
        'Réglementations sectorielles spécifiques',
        'Responsabilité légale et assurance'
      ],
      impactServices: [
        'Conformité RGPD et protection données',
        'Respect des licences et propriété intellectuelle',
        'Obligations contractuelles envers clients',
        'Audit et documentation légale requise'
      ],
      questionsExamen: [
        'Q: Différence facteur politique vs légal ? → R: Politique = gouvernement, Légal = lois spécifiques',
        'Q: RGPD est-il politique ou légal ? → R: Peut être les deux selon contexte',
        'Q: Licences logiciels = quel facteur ? → R: Légal (propriété intellectuelle)'
      ],
      examTip: 'Légal = LOIS SPÉCIFIQUES et OBLIGATIONS JURIDIQUES (plus précis que politique)'
    },
    {
      id: 'environmental', 
      titre: 'Environnementaux (Environmental)',
      icon: Globe,
      color: 'bg-teal-500',
      definition: 'Considérations environnementales et durabilité',
      exemples: [
        'Changement climatique et conditions météo',
        'Réglementations environnementales',
        'Consommation énergétique et empreinte carbone',
        'Gestion des déchets électroniques',
        'Durabilité et responsabilité sociale'
      ],
      impactServices: [
        'Efficacité énergétique des data centers',
        'Choix de technologies vertes',
        'Politique de recyclage du matériel',
        'Reporting environnemental et RSE'
      ],
      questionsExamen: [
        'Q: Exemple de facteur environnemental ? → R: Énergie, climat, durabilité, déchets',
        'Q: Efficacité énergétique data center = quel facteur ? → R: Environnemental',
        'Q: Impact sur services IT ? → R: Choix technologiques verts, recyclage'
      ],
      examTip: 'Environnemental = DURABILITÉ, ÉNERGIE, CLIMAT et impact écologique'
    }
  ]

  const toggleDimension = (id: number) => {
    setExpandedDimension(expandedDimension === id ? null : id)
  }

  const togglePestle = (id: string) => {
    setExpandedPestle(expandedPestle === id ? null : id)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Les 4 Dimensions de la Gestion des Services
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Les quatre dimensions représentent des perspectives critiques pertinentes pour l'ensemble 
          du système de valeur des services. Elles doivent toutes être prises en compte pour une 
          gestion efficace des services.
        </p>
      </div>

      {/* Alerte important examen */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <strong>📝 Important pour l'examen :</strong> Les 4 dimensions sont testées en détail. 
            Connaître leurs définitions exactes, ce qu'elles couvrent, et les distinguer les unes des autres. 
            L'analyse PESTLE des facteurs externes est également cruciale.
          </div>
        </div>
      </div>

      {/* Les 4 Dimensions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Les 4 Dimensions</h2>
        
        {dimensions.map((dimension) => {
          const isExpanded = expandedDimension === dimension.id
          const IconComponent = dimension.icon
          
          return (
            <div key={dimension.id} className="card card-hover">
              {/* En-tête de dimension */}
              <div 
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleDimension(dimension.id)}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-12 h-12 ${dimension.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {dimension.titre}
                      </h3>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{dimension.description}</p>
                  </div>
                </div>
              </div>

              {/* Contenu développé */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t dark:border-gray-700 space-y-6">
                  {/* Éléments et considérations */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        Éléments clés
                      </h4>
                      <ul className="space-y-2">
                        {dimension.elements.map((element, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                        <Target size={16} className="text-blue-500 mr-2" />
                        Considérations importantes
                      </h4>
                      <ul className="space-y-2">
                        {dimension.considerations.map((consideration, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Questions d'examen */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Target size={16} className="text-blue-500 mr-2" />
                      Questions typiques d'examen
                    </h4>
                    <div className="space-y-2">
                      {dimension.questionsExamen.map((qa, index) => (
                        <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                          <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                            {qa}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Piège d'examen */}
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle size={16} className="text-red-600 dark:text-red-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">
                          Piège d'examen à éviter
                        </h4>
                        <p className="text-sm text-red-800 dark:text-red-200">{dimension.piege}</p>
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
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">{dimension.examTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Approche holistique */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          ⚖️ Approche Holistique et Équilibrée
        </h3>
        <div className="space-y-3 text-blue-800 dark:text-blue-200">
          <p>
            <strong>Les quatre dimensions ne fonctionnent pas isolément.</strong> Elles sont interconnectées et 
            doivent être équilibrées. Se concentrer sur une seule dimension tout en négligeant 
            les autres peut conduire à l'échec du service.
          </p>
          <p>
            <strong>Interdépendance :</strong> Un changement dans une dimension affectera probablement les autres. 
            Par exemple, l'introduction d'une nouvelle technologie (Information et Technologie) 
            nécessitera probablement de nouvelles compétences (Organisations et Personnes).
          </p>
          <div className="bg-blue-100 dark:bg-blue-800/30 rounded-lg p-3 mt-4">
            <p className="font-medium">📝 Question d'examen fréquente :</p>
            <p className="text-sm italic">
              "Que se passe-t-il si on se concentre sur une seule dimension ?" 
              → Réponse : Risque d'échec car elles sont interdépendantes
            </p>
          </div>
        </div>
      </div>

      {/* Analyse PESTLE */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Facteurs Externes - Analyse PESTLE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Les facteurs externes peuvent affecter les quatre dimensions. L'analyse PESTLE 
            (Political, Economic, Social, Technological, Legal, Environmental) aide à les identifier et évaluer.
          </p>
          
          {/* Alerte PESTLE */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5" />
              <div className="text-sm text-orange-800 dark:text-orange-200">
                <strong>🎯 Crucial pour l'examen :</strong> PESTLE est très souvent testé. 
                Savoir distinguer chaque facteur avec des exemples concrets et comprendre 
                leur impact sur les services IT.
              </div>
            </div>
          </div>
        </div>

        {pestleFactors.map((factor) => {
          const isExpanded = expandedPestle === factor.id
          const IconComponent = factor.icon
          
          return (
            <div key={factor.id} className="card card-hover">
              {/* En-tête facteur PESTLE */}
              <div 
                className="flex justify-between items-start cursor-pointer"
                onClick={() => togglePestle(factor.id)}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-12 h-12 ${factor.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {factor.titre}
                      </h3>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{factor.definition}</p>
                  </div>
                </div>
              </div>

              {/* Contenu développé PESTLE */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t dark:border-gray-700 space-y-6">
                  {/* Exemples et impacts */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        Exemples concrets
                      </h4>
                      <ul className="space-y-2">
                        {factor.exemples.map((exemple, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {exemple}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                        <Target size={16} className="text-blue-500 mr-2" />
                        Impact sur les services IT
                      </h4>
                      <ul className="space-y-2">
                        {factor.impactServices.map((impact, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Questions d'examen PESTLE */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Target size={16} className="text-blue-500 mr-2" />
                      Questions typiques d'examen
                    </h4>
                    <div className="space-y-2">
                      {factor.questionsExamen.map((qa, index) => (
                        <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                          <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                            {qa}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conseil PESTLE */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                    <div className="flex items-start">
                      <Lightbulb size={16} className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                          Conseil pour retenir
                        </h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">{factor.examTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Résumé final */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          📚 Résumé pour l'examen
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">4 Dimensions à retenir :</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>🔵 <strong>Organisations et Personnes</strong> : Rôles, culture, compétences</li>
              <li>🟢 <strong>Information et Technologie</strong> : Infos + connaissances + tech</li>
              <li>🟣 <strong>Partenaires et Fournisseurs</strong> : Relations externes</li>
              <li>🟠 <strong>Flux de Valeur et Processus</strong> : Coordination pour valeur</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">PESTLE à retenir :</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>🏛️ <strong>Political</strong> : Gouvernement, réglementations</li>
              <li>💰 <strong>Economic</strong> : Conditions financières</li>
              <li>👥 <strong>Social</strong> : Comportements, attentes</li>
              <li>⚡ <strong>Technological</strong> : Innovations disponibles</li>
              <li>⚖️ <strong>Legal</strong> : Lois spécifiques</li>
              <li>🌍 <strong>Environmental</strong> : Durabilité, écologie</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>💡 Astuce d'examen :</strong> Les 4 dimensions sont INTERDÉPENDANTES. 
            PESTLE aide à identifier les facteurs EXTERNES qui les influencent. 
            Toujours penser ÉQUILIBRE et HOLISME.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DimensionsPage