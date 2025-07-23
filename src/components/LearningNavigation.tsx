import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, BookOpen, Target, Layers, Network, Settings, GitBranch } from 'lucide-react'

interface LearningStep {
  id: string
  path: string
  label: string
  icon: React.ElementType
  description: string
  estimated: string
  completed?: boolean
}

const LearningNavigation: React.FC = () => {
  const location = useLocation()

  const learningSteps: LearningStep[] = [
    {
      id: 'overview',
      path: '/learn',
      label: 'Vue d\'ensemble',
      icon: BookOpen,
      description: 'Introduction aux fondamentaux ITIL v4',
      estimated: '10 min'
    },
    {
      id: 'concepts',
      path: '/learn/concepts',
      label: 'Concepts clés',
      icon: Target,
      description: '42 concepts fondamentaux avec questions d\'examen',
      estimated: '45 min'
    },
    {
      id: 'principles',
      path: '/learn/principles',
      label: '7 Principes',
      icon: Target,
      description: 'Principes directeurs universels d\'ITIL v4',
      estimated: '30 min'
    },
    {
      id: 'dimensions',
      path: '/learn/dimensions',
      label: '4 Dimensions',
      icon: Layers,
      description: 'Dimensions des services et analyse PESTLE',
      estimated: '35 min'
    },
    {
      id: 'svs',
      path: '/learn/svs',
      label: 'SVS',
      icon: Network,
      description: 'Système de valeur des services et gouvernance',
      estimated: '40 min'
    },
    {
      id: 'practices',
      path: '/learn/practices',
      label: '15 Pratiques',
      icon: Settings,
      description: 'Pratiques du syllabus Foundation',
      estimated: '60 min'
    },
    {
      id: 'chain',
      path: '/learn/chain',
      label: 'Chaîne de valeur',
      icon: GitBranch,
      description: '6 activités de la chaîne de valeur des services',
      estimated: '25 min'
    }
  ]

  const getCurrentStepIndex = () => {
    const currentPath = location.pathname
    return learningSteps.findIndex(step => step.path === currentPath)
  }

  const currentIndex = getCurrentStepIndex()
  const currentStep = learningSteps[currentIndex]
  const prevStep = currentIndex > 0 ? learningSteps[currentIndex - 1] : null
  const nextStep = currentIndex < learningSteps.length - 1 ? learningSteps[currentIndex + 1] : null

  const isStepActive = (step: LearningStep) => location.pathname === step.path
  const isStepCompleted = (step: LearningStep) => {
    // TODO: Intégrer avec le système de progression
    return false
  }

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/learn" className="hover:text-gray-700 dark:hover:text-gray-300">Apprentissage</Link>
          {currentStep && currentStep.path !== '/learn' && (
            <>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gray-900 dark:text-gray-100 font-medium">{currentStep.label}</span>
            </>
          )}
        </nav>
      </div>

      {/* Navigation responsive des étapes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Version desktop/tablette - navigation horizontale */}
        <div className="hidden md:flex items-center space-x-1 pb-2 overflow-x-auto">
          {learningSteps.map((step, index) => {
            const isActive = isStepActive(step)
            const isCompleted = isStepCompleted(step)
            const IconComponent = step.icon

            return (
              <Link
                key={step.id}
                to={step.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap transition-colors min-w-0 ${
                  isActive
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                    : isCompleted
                    ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <IconComponent size={16} />
                <span className="text-sm font-medium truncate">{step.label}</span>
                {index < learningSteps.length - 1 && (
                  <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Version mobile - navigation verticale compacte */}
        <div className="md:hidden pb-2">
          <div className="grid grid-cols-2 gap-2">
            {learningSteps.map((step, index) => {
              const isActive = isStepActive(step)
              const isCompleted = isStepCompleted(step)
              const IconComponent = step.icon

              return (
                <Link
                  key={step.id}
                  to={step.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                      : isCompleted
                      ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent size={16} className="flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{step.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Progression responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        {/* Version desktop/tablette */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-32 sm:w-48 lg:w-64">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / learningSteps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
              {currentIndex + 1}/{learningSteps.length}
            </span>
          </div>

          {/* Navigation précédent/suivant */}
          <div className="flex items-center space-x-2">
            {prevStep && (
              <Link
                to={prevStep.path}
                className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
              >
                <span className="hidden lg:inline">← {prevStep.label}</span>
                <span className="lg:hidden">←</span>
              </Link>
            )}
            {nextStep && (
              <Link
                to={nextStep.path}
                className="px-3 py-1.5 text-sm bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors whitespace-nowrap"
              >
                <span className="hidden lg:inline">{nextStep.label} →</span>
                <span className="lg:hidden">→</span>
              </Link>
            )}
          </div>
        </div>

        {/* Version mobile - empilée */}
        <div className="sm:hidden space-y-3">
          {/* Barre de progression */}
          <div className="flex items-center space-x-3">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 flex-1">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / learningSteps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
              {currentIndex + 1}/{learningSteps.length}
            </span>
          </div>

          {/* Navigation précédent/suivant mobile */}
          <div className="flex justify-between space-x-2">
            {prevStep ? (
              <Link
                to={prevStep.path}
                className="flex-1 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                ← Précédent
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
            {nextStep && (
              <Link
                to={nextStep.path}
                className="flex-1 px-4 py-2 text-sm bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Suivant →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningNavigation