import React, { useState } from 'react'
import QuizComponent from '../components/QuizComponent'
import { 
  Play, 
  Target, 
  BookOpen,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const QuizPage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizMode, setQuizMode] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const quizModes = [
    {
      id: 'exam-simulation',
      title: 'Simulation d\'examen',
      description: '40 questions en 60 minutes comme le vrai examen',
      icon: Target,
      color: 'bg-red-500',
      recommended: true,
      action: 'start'
    },
    {
      id: 'exam-difficult',
      title: 'Examen difficile',
      description: '40 questions challengeantes (50% difficiles) en 60 minutes',
      icon: AlertTriangle,
      color: 'bg-purple-500',
      action: 'start',
      badge: 'Challenge'
    },
    {
      id: 'category',
      title: 'Quiz thématique',
      description: 'Révisez un domaine spécifique du syllabus',
      icon: BookOpen,
      color: 'bg-blue-500',
      action: 'choose-category'
    },
    {
      id: 'trap-questions',
      title: 'Questions pièges',
      description: 'Focus sur les difficultés et distinctions de l\'examen',
      icon: AlertTriangle,
      color: 'bg-orange-500',
      action: 'start'
    }
  ]

  const categories = [
    { 
      id: 'concepts-fondamentaux', 
      name: 'Concepts et Définitions', 
      count: 20,
      description: 'Valeur, Service, Produit, Output vs Outcome...'
    },
    { 
      id: 'principes-directeurs', 
      name: '7 Principes directeurs', 
      count: 25,
      description: 'Application et reconnaissance des principes'
    },
    { 
      id: 'dimensions', 
      name: '4 Dimensions + PESTLE', 
      count: 15,
      description: 'Organisations, Information, Partenaires, Flux'
    },
    { 
      id: 'systeme-valeur', 
      name: 'SVS et Chaîne de valeur', 
      count: 20,
      description: 'Composants du SVS, activités de la CVS'
    },
    { 
      id: 'pratiques', 
      name: '15 Pratiques Foundation', 
      count: 30,
      description: 'Incident, Problème, Changement, Service Desk...'
    }
  ]

  const startQuiz = (mode: string, category?: string) => {
    setQuizMode(mode)
    if (category) setSelectedCategory(category)
    setShowQuiz(true)
  }

  if (showQuiz) {
    return (
      <div className="max-w-4xl mx-auto">
        <QuizComponent 
          mode={quizMode}
          category={selectedCategory}
          onComplete={() => {
            setShowQuiz(false)
            setSelectedCategory('')
          }}
          onExit={() => {
            setShowQuiz(false)
            setSelectedCategory('')
          }}
        />
      </div>
    )
  }

  // Mode sélection de catégorie
  if (quizMode === 'category' && !selectedCategory) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => setQuizMode('')}
            className="text-primary-600 hover:text-primary-700 flex items-center mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
            Retour aux modes
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Choisissez un thème</h2>
          <p className="text-gray-600 mt-2">Sélectionnez le domaine à réviser</p>
        </div>

        <div className="grid gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => startQuiz('category', category.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  <p className="text-primary-600 font-medium text-sm mt-2">{category.count} questions</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz ITIL v4 Foundation</h1>
        <p className="text-lg text-gray-600">
          Préparez-vous avec de vraies questions d'examen et des explications détaillées
        </p>
      </div>

      {/* Mode alerte */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <strong>Important :</strong> Ces questions sont basées sur de vraies questions d'examen ITIL v4 Foundation. 
            Visez 80% de réussite aux simulations pour être sûr de réussir l'examen réel (seuil : 65%).
          </div>
        </div>
      </div>

      {/* Modes de quiz */}
      <div className="grid gap-6">
        {quizModes.map((mode) => (
          <div 
            key={mode.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer relative"
            onClick={() => mode.action === 'start' ? startQuiz(mode.id) : setQuizMode(mode.id)}
          >
            {mode.recommended && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Recommandé
              </div>
            )}
            {mode.badge && (
              <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                {mode.badge}
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${mode.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <mode.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{mode.title}</h3>
                  <p className="text-gray-600">{mode.description}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Répartition des questions à l'examen */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Répartition des questions à l'examen officiel
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-blue-900">Concepts clés :</span>
            <span className="text-blue-700"> 7 questions (18%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900">Principes :</span>
            <span className="text-blue-700"> 8 questions (20%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900">Dimensions :</span>
            <span className="text-blue-700"> 4 questions (10%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900">SVS :</span>
            <span className="text-blue-700"> 6 questions (15%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900">CVS :</span>
            <span className="text-blue-700"> 6 questions (15%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900">Pratiques :</span>
            <span className="text-blue-700"> 9 questions (22%)</span>
          </div>
        </div>
        <p className="text-sm text-blue-700 mt-4">
          Total : 40 questions • Durée : 60 minutes • Seuil de réussite : 26/40 (65%)
        </p>
      </div>

      {/* Conseils stratégiques */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-green-900 mb-3">
          Stratégies pour réussir
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              Lisez chaque question DEUX fois
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              Identifiez les mots-clés : TOUJOURS, JAMAIS, SAUF
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              Éliminez d'abord les réponses évidemment fausses
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              90 secondes max par question
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              Marquez les questions difficiles pour y revenir
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              Répondez à TOUTES les questions (pas de pénalité)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QuizPage