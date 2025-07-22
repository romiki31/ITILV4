import React, { useState } from 'react'
import { Clock, Target, BookOpen, Brain, CheckCircle, AlertTriangle, TrendingUp, Award, ArrowRight, Calculator } from 'lucide-react'

const ExamenPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'format' | 'strategie' | 'pieges' | 'simulation'>('format')

  const formatExamen = {
    duree: "60 minutes",
    questions: "40 questions à choix multiple",
    scoreMin: "26/40 (65%)",
    langue: "Français ou Anglais",
    format: "Livre fermé - aucune documentation",
    type: "Une seule réponse correcte par question"
  }

  const repartitionQuestions = [
    { domaine: "Concepts clés et définitions", nombre: 7, pourcentage: 18, conseil: "Mémoriser les définitions officielles" },
    { domaine: "Les 7 principes directeurs", nombre: 8, pourcentage: 20, conseil: "Comprendre l'application pratique" },
    { domaine: "Les 4 dimensions", nombre: 4, pourcentage: 10, conseil: "Savoir les identifier dans un contexte" },
    { domaine: "Système de Valeur (SVS)", nombre: 6, pourcentage: 15, conseil: "Focus sur les interactions" },
    { domaine: "Chaîne de valeur (CVS)", nombre: 6, pourcentage: 15, conseil: "Comprendre la flexibilité du modèle" },
    { domaine: "15 pratiques ITIL", nombre: 9, pourcentage: 22, conseil: "Objectif et distinctions clés" }
  ]

  const strategiesReponse = [
    {
      titre: "Lecture attentive",
      techniques: [
        "Lisez la question DEUX fois",
        "Identifiez les mots-clés : TOUJOURS, JAMAIS, SAUF, MEILLEUR",
        "Attention aux négations : 'Lequel n'est PAS...'"
      ]
    },
    {
      titre: "Process d'élimination",
      techniques: [
        "Éliminez d'abord les réponses évidemment fausses",
        "Si deux réponses semblent correctes, cherchez la MEILLEURE",
        "Méfiez-vous des réponses trop longues ou complexes"
      ]
    },
    {
      titre: "Gestion du temps",
      techniques: [
        "90 secondes max par question",
        "Marquez les questions difficiles pour y revenir",
        "Gardez 10 minutes pour réviser à la fin"
      ]
    }
  ]

  const piegesFrequents = [
    {
      type: "Confusion de termes",
      exemples: [
        { piege: "Incident vs Problème", rappel: "Incident = symptôme, Problème = cause racine" },
        { piege: "Output vs Outcome", rappel: "Output = livrable, Outcome = résultat business" },
        { piege: "Client vs Utilisateur", rappel: "Client paie/définit, Utilisateur utilise au quotidien" },
        { piege: "SLA vs OLA", rappel: "SLA = externe (client), OLA = interne (équipes)" }
      ]
    },
    {
      type: "Absolutismes trompeurs",
      exemples: [
        { piege: "TOUJOURS appliquer tous les principes", rappel: "Oui, mais adaptés au contexte" },
        { piege: "JAMAIS fermer un problème non résolu", rappel: "Faux, on peut si risque acceptable" },
        { piege: "TOUS les changements passent par le CAB", rappel: "Faux, les standards sont pré-autorisés" }
      ]
    },
    {
      type: "Rôles et responsabilités",
      exemples: [
        { piege: "Le CAB autorise les changements", rappel: "Non, il conseille. L'autorité de changement autorise" },
        { piege: "Seul le service desk peut enregistrer des incidents", rappel: "Non, n'importe qui peut" },
        { piege: "L'amélioration continue après incidents seulement", rappel: "Non, c'est permanent" }
      ]
    }
  ]

  const questionsTypes = [
    {
      question: "Quel principe directeur recommande d'évaluer ce qui existe déjà avant de créer quelque chose de nouveau ?",
      options: [
        "Se concentrer sur la valeur",
        "Commencer là où on se trouve",
        "Progresser de manière itérative",
        "Penser et travailler de manière holistique"
      ],
      reponse: 1,
      explication: "Le principe 'Commencer là où on se trouve' évite de repartir de zéro"
    },
    {
      question: "Laquelle de ces affirmations concernant la chaîne de valeur des services est CORRECTE ?",
      options: [
        "Les activités doivent être exécutées dans un ordre fixe",
        "L'activité 'Améliorer' est optionnelle dans certains flux",
        "Les activités peuvent être combinées de manière flexible",
        "Chaque flux de valeur utilise toutes les 6 activités"
      ],
      reponse: 2,
      explication: "La CVS est flexible et non-séquentielle, adaptée à chaque situation"
    },
    {
      question: "Quelle pratique ITIL a pour objectif principal d'être le point de contact unique ?",
      options: [
        "Gestion des incidents",
        "Service desk",
        "Gestion des relations",
        "Gestion des niveaux de service"
      ],
      reponse: 1,
      explication: "Le service desk est le SPOC (Single Point of Contact)"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Préparer l'Examen ITIL 4 Foundation</h1>
        <p className="text-gray-600">
          Tout ce qu'il faut savoir pour réussir l'examen du premier coup.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex space-x-1 border-b border-gray-200">
          {(['format', 'strategie', 'pieges', 'simulation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-primary-600 border-primary-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab === 'format' && 'Format & Structure'}
              {tab === 'strategie' && 'Stratégies'}
              {tab === 'pieges' && 'Pièges fréquents'}
              {tab === 'simulation' && 'Questions types'}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'format' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-6 w-6 text-primary-600 mr-2" />
              Format de l'examen
            </h2>
            <dl className="grid md:grid-cols-2 gap-4">
              {Object.entries(formatExamen).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-lg p-4">
                  <dt className="text-sm font-medium text-gray-600 capitalize mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calculator className="h-5 w-5 text-primary-600 mr-2" />
              Répartition des questions
            </h3>
            <div className="space-y-3">
              {repartitionQuestions.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.domaine}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.conseil}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-2xl font-bold text-primary-600">{item.nombre}</p>
                    <p className="text-sm text-gray-500">questions</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note importante :</strong> Cette répartition est indicative. 
                L'examen réel peut varier légèrement mais reste dans ces proportions.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'strategie' && (
        <div className="space-y-6">
          {strategiesReponse.map((strategie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-green-600 mr-2" />
                {strategie.titre}
              </h3>
              <ul className="space-y-2">
                {strategie.techniques.map((technique, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Stratégie globale recommandée</h3>
            <ol className="space-y-2">
              <li className="flex items-start">
                <span className="font-bold text-primary-600 mr-2">1.</span>
                <span className="text-gray-700">Premier passage rapide : répondez aux questions faciles (30 min)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary-600 mr-2">2.</span>
                <span className="text-gray-700">Deuxième passage : questions marquées (20 min)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary-600 mr-2">3.</span>
                <span className="text-gray-700">Révision finale : vérifiez toutes les réponses (10 min)</span>
              </li>
            </ol>
          </div>
        </div>
      )}

      {activeTab === 'pieges' && (
        <div className="space-y-6">
          {piegesFrequents.map((categorie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                {categorie.type}
              </h3>
              <div className="space-y-3">
                {categorie.exemples.map((exemple, idx) => (
                  <div key={idx} className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="font-medium text-red-900 mb-1">{exemple.piege}</p>
                    <p className="text-sm text-red-700">
                      <CheckCircle className="inline h-4 w-4 mr-1" />
                      {exemple.rappel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Conseil anti-piège</h3>
            <p className="text-yellow-800">
              Quand vous voyez des mots absolus (TOUJOURS, JAMAIS, TOUS, AUCUN), 
              soyez très vigilant. ITIL 4 est flexible et contextuel, donc ces affirmations 
              sont souvent fausses.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'simulation' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <Brain className="inline h-4 w-4 mr-1" />
              Entraînez-vous avec ces questions types. Essayez de répondre en moins de 90 secondes !
            </p>
          </div>

          {questionsTypes.map((q, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <span className="text-sm text-gray-500">Question {index + 1}</span>
                <h3 className="text-lg font-medium text-gray-900 mt-1">{q.question}</h3>
              </div>
              
              <div className="space-y-2 mb-6">
                {q.options.map((option, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      idx === q.reponse 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 mr-2">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span className="text-gray-800">{option}</span>
                      {idx === q.reponse && (
                        <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Explication :</strong> {q.explication}
                </p>
              </div>
            </div>
          ))}

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Pour aller plus loin</h3>
            <p className="text-green-800">
              Utilisez la section Quiz pour vous entraîner avec 100+ questions. 
              Le mode "Simulation d'examen" reproduit les conditions réelles avec 
              40 questions en 60 minutes.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg p-6 border border-primary-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <TrendingUp className="h-6 w-6 text-primary-600 mr-2" />
          Checklist pré-examen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Maîtriser les 7 principes directeurs</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Comprendre les 4 dimensions + PESTLE</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Connaître le SVS et ses composants</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Distinguer les 6 activités de la CVS</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Objectif des 15 pratiques Foundation</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Différencier concepts similaires</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">S'entraîner avec 40+ questions</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Réviser les pièges fréquents</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExamenPage