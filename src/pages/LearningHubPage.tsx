import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Target, 
  Layers,
  Network,
  Settings,
  GitBranch,
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react'
import LearningNavigation from '../components/LearningNavigation'
import { useAutoScroll } from '../hooks/useAutoScroll'

const LearningHubPage: React.FC = () => {
  const { scrollToTop } = useAutoScroll({ delay: 150 })

  // Autoscroll vers le haut lors de l'arrivée sur la page
  useEffect(() => {
    scrollToTop()
  }, [])
  const learningModules = [
    {
      id: 'concepts',
      path: '/learn/concepts',
      title: 'Concepts clés ITIL 4',
      icon: BookOpen,
      color: 'bg-blue-500',
      description: '42 concepts fondamentaux avec définitions, exemples et questions d\'examen',
      duration: '45 min',
      difficulty: 'Débutant',
      topics: ['Valeur', 'Service vs Produit', 'Utilité & Garantie', 'CMS, KEDB, DML'],
      examWeight: '18%',
      isCore: true
    },
    {
      id: 'principles',
      path: '/learn/principles', 
      title: '7 Principes directeurs',
      icon: Target,
      color: 'bg-green-500',
      description: 'Principes universels à appliquer dans toute initiative ITIL',
      duration: '30 min',
      difficulty: 'Débutant',
      topics: ['Se concentrer sur la valeur', 'Commencer là où on se trouve', 'Progresser de manière itérative'],
      examWeight: '20%',
      isCore: true
    },
    {
      id: 'dimensions',
      path: '/learn/dimensions',
      title: '4 Dimensions des services',
      icon: Layers,
      color: 'bg-purple-500',
      description: 'Perspectives critiques et analyse PESTLE des facteurs externes',
      duration: '35 min',
      difficulty: 'Intermédiaire',
      topics: ['Organisations & Personnes', 'Information & Technologie', 'Partenaires & Fournisseurs', 'PESTLE'],
      examWeight: '10%',
      isCore: true
    },
    {
      id: 'svs',
      path: '/learn/svs',
      title: 'Système de valeur des services',
      icon: Network,
      color: 'bg-indigo-500',
      description: 'SVS, gouvernance et modèle d\'amélioration continue en 7 étapes',
      duration: '40 min',
      difficulty: 'Intermédiaire',
      topics: ['SVS', 'Gouvernance', 'Amélioration continue', 'Registre CIR'],
      examWeight: '15%',
      isCore: true
    },
    {
      id: 'practices',
      path: '/learn/practices',
      title: '15 Pratiques ITIL',
      icon: Settings,
      color: 'bg-orange-500',
      description: '7 pratiques détaillées + 8 pratiques niveau objectif',
      duration: '60 min',
      difficulty: 'Avancé',
      topics: ['Gestion incidents', 'Gestion problèmes', 'Service desk', 'Changements'],
      examWeight: '22%',
      isCore: true
    },
    {
      id: 'chain',
      path: '/learn/chain',
      title: 'Chaîne de valeur des services',
      icon: GitBranch,
      color: 'bg-red-500',
      description: '6 activités de la chaîne de valeur et leurs interactions',
      duration: '25 min',
      difficulty: 'Intermédiaire',
      topics: ['Planifier', 'Concevoir', 'Obtenir', 'Fournir', 'Engager', 'Améliorer'],
      examWeight: '15%',
      isCore: false
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20'
      case 'Intermédiaire': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20'
      case 'Avancé': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20'
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700'
    }
  }


  return (
    <div>
      <LearningNavigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Parcours d'apprentissage ITIL v4
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Apprenez ITIL v4 Foundation étape par étape avec un contenu optimisé pour l'examen
          </p>
          
          {/* Stats simplifiées */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <span>{learningModules.length} modules</span>
            <span className="hidden sm:inline">•</span>
            <span>Syllabus complet</span>
          </div>
        </div>

        {/* Conseil simplifié */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Suivez l'ordre recommandé</strong> - chaque module s'appuie sur le précédent
            </div>
          </div>
        </div>

        {/* Modules d'apprentissage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningModules.map((module, index) => {
            const IconComponent = module.icon
            
            return (
              <div key={module.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header du module */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {module.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                      {index + 1}
                    </span>
                  </div>

                  {/* Métadonnées simplifiées */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 rounded-full text-xs font-medium whitespace-nowrap">
                      {module.examWeight}
                    </span>
                  </div>

                  {/* Sujets simplifiés */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {module.topics.slice(0, 2).map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs whitespace-nowrap">
                          {topic}
                        </span>
                      ))}
                      {module.topics.length > 2 && (
                        <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap">
                          +{module.topics.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action */}
                  <Link
                    to={module.path}
                    className="w-full btn btn-primary flex items-center justify-center mt-auto"
                  >
                    Commencer le module
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Prochaines étapes */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg p-8 border border-green-200 dark:border-green-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            🎯 Après avoir terminé l'apprentissage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/flashcards" className="card card-hover text-center">
              <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Révision active</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Flashcards et révision rapide</p>
            </Link>
            <Link to="/quiz" className="card card-hover text-center">
              <Target className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Entraînement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Quiz thématiques et simulations</p>
            </Link>
            <Link to="/examen" className="card card-hover text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Examen blanc</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Conditions réelles, 40 questions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningHubPage