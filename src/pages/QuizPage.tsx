import React, { useState, useEffect } from 'react'
import QuizComponent from '../components/QuizComponent'
import ExamPracticeComponent from '../components/ExamPracticeComponent'
import CopyrightDisclaimer from '../components/CopyrightDisclaimer'
import { 
  Play, 
  Target, 
  BookOpen,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  GraduationCap
} from 'lucide-react'
import type { ExamPracticeSession } from '@/types'
import { useAutoScroll } from '../hooks/useAutoScroll'

const QuizPage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showExamPractice, setShowExamPractice] = useState(false)
  const [quizMode, setQuizMode] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const { scrollToTop } = useAutoScroll({ delay: 150 })

  // Autoscroll vers le haut lors de l'arrivée sur la page
  useEffect(() => {
    scrollToTop()
  }, [])

  const quizModes = [
    {
      id: 'exam-practice',
      title: 'Questions d\'examen blanc',
      description: '80 questions authentiques avec validation immédiate et explications',
      icon: GraduationCap,
      color: 'bg-green-500',
      action: 'exam-practice',
      badge: 'Nouveau',
      isNew: true
    },
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
    scrollToTop() // Autoscroll vers le haut lors du démarrage d'un quiz
    if (mode === 'exam-practice') {
      setShowExamPractice(true)
    } else {
      setQuizMode(mode)
      if (category) setSelectedCategory(category)
      setShowQuiz(true)
    }
  }

  const handleExamPracticeComplete = (session: ExamPracticeSession) => {
    // On pourrait ici ajouter une logique pour afficher les résultats
    // ou rediriger vers une page de résultats spécifique
    console.log('Session d\'examen pratique terminée:', session)
    scrollToTop() // Autoscroll vers le haut à la fin de la session
  }

  const handleExamPracticeExit = () => {
    setShowExamPractice(false)
    scrollToTop() // Autoscroll vers le haut lors de la sortie
  }

  // Affichage du mode examen pratique
  if (showExamPractice) {
    return (
      <div className="max-w-4xl mx-auto">
        <ExamPracticeComponent 
          onComplete={handleExamPracticeComplete}
          onExit={handleExamPracticeExit}
        />
      </div>
    )
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
            scrollToTop() // Autoscroll vers le haut à la fin du quiz
          }}
          onExit={() => {
            setShowQuiz(false)
            setSelectedCategory('')
            scrollToTop() // Autoscroll vers le haut lors de la sortie
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
            onClick={() => {
              setQuizMode('')
              scrollToTop() // Autoscroll vers le haut lors du retour
            }}
            className="text-primary-600 hover:text-primary-700 flex items-center mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
            Retour aux modes
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Choisissez un thème</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Sélectionnez le domaine à réviser</p>
        </div>

        <div className="grid gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => startQuiz('category', category.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{category.description}</p>
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Quiz ITIL® v4 Foundation</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Préparez-vous avec de vraies questions d'examen et des explications détaillées
        </p>
      </div>

      {/* Copyright Disclaimer */}
      <CopyrightDisclaimer className="mb-6" />

      {/* Mode alerte */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Important :</strong> Ces questions sont basées sur de vraies questions d'examen ITIL® v4 Foundation. 
            Visez 80% de réussite aux simulations pour être sûr de réussir l'examen réel (seuil : 65%).
          </div>
        </div>
      </div>

      {/* Modes de quiz */}
      <div className="grid gap-6">
        {quizModes.map((mode) => (
          <div 
            key={mode.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer relative"
            onClick={() => mode.action === 'exam-practice' ? startQuiz('exam-practice') : mode.action === 'start' ? startQuiz(mode.id) : setQuizMode(mode.id)}
          >
            {mode.recommended && !mode.badge && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Recommandé
              </div>
            )}
            {mode.badge && (
              <div className={`absolute -top-2 -right-2 text-white text-xs px-3 py-1 rounded-full font-medium ${
                mode.badge === 'Nouveau' ? 'bg-green-500' : 
                mode.badge === 'Challenge' ? 'bg-purple-500' : 'bg-gray-500'
              }`}>
                {mode.badge}
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${mode.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <mode.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{mode.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{mode.description}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Répartition des questions à l'examen */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          Répartition des questions à l'examen officiel
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium text-blue-900 dark:text-blue-200">Concepts clés :</span>
            <span className="text-blue-700 dark:text-blue-300"> 7 questions (18%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900 dark:text-blue-200">Principes :</span>
            <span className="text-blue-700 dark:text-blue-300"> 8 questions (20%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900 dark:text-blue-200">Dimensions :</span>
            <span className="text-blue-700 dark:text-blue-300"> 4 questions (10%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900 dark:text-blue-200">SVS :</span>
            <span className="text-blue-700 dark:text-blue-300"> 6 questions (15%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900 dark:text-blue-200">CVS :</span>
            <span className="text-blue-700 dark:text-blue-300"> 6 questions (15%)</span>
          </div>
          <div>
            <span className="font-medium text-blue-900 dark:text-blue-200">Pratiques :</span>
            <span className="text-blue-700 dark:text-blue-300"> 9 questions (22%)</span>
          </div>
        </div>
        <p className="text-sm text-blue-700 dark:text-blue-300 mt-4">
          Total : 40 questions • Durée : 60 minutes • Seuil de réussite : 26/40 (65%)
        </p>
      </div>

      {/* Conseils stratégiques */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
          Stratégies pour réussir
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-green-800 dark:text-green-200">
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              Lisez chaque question DEUX fois
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              Identifiez les mots-clés : TOUJOURS, JAMAIS, SAUF
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              Éliminez d'abord les réponses évidemment fausses
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              90 secondes max par question
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              Marquez les questions difficiles pour y revenir
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              Répondez à TOUTES les questions (pas de pénalité)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QuizPage