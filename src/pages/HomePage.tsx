import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Target,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Clock,
  Award,
  Lightbulb,
  FileText
} from 'lucide-react'
import ITILLogo from '../components/ITILLogo'

const HomePage: React.FC = () => {
  const learningPaths = [
    {
      id: 'beginner',
      title: 'Parcours Débutant',
      description: 'Découvrez ITIL v4 étape par étape avec tous les fondamentaux',
      icon: ITILLogo,
      color: 'bg-blue-500',
      duration: '3-4 semaines',
      steps: [
        'Fondamentaux et définitions',
        '7 Principes directeurs',
        '4 Dimensions',
        'SVS et Chaîne de valeur',
        '15 Pratiques essentielles'
      ],
      action: '/fondamentaux'
    },
    {
      id: 'revision',
      title: 'Révision Rapide',
      description: 'Révisez les points clés avec flashcards et quiz thématiques',
      icon: Brain,
      color: 'bg-purple-500',
      duration: '1 semaine',
      steps: [
        'Flashcards par thème',
        'Quiz ciblés',
        'Focus pièges d\'examen',
        'Distinctions importantes'
      ],
      action: '/flashcards'
    },
    {
      id: 'exam',
      title: 'Mode Examen',
      description: 'Préparez-vous avec des simulations en conditions réelles',
      icon: Target,
      color: 'bg-red-500',
      duration: '2-3 jours',
      steps: [
        'Simulation 40 questions',
        '60 minutes chronométrées',
        'Questions pièges',
        'Explications détaillées'
      ],
      action: '/quiz',
      recommended: true
    }
  ]

  const examInfo = {
    questions: 40,
    duration: '60 minutes',
    passingScore: '65% (26/40)',
    format: 'QCM - 1 seule bonne réponse',
    language: 'Français ou Anglais'
  }

  const keyTopics = [
    { name: 'Concepts clés', questions: 7, percentage: 18 },
    { name: '7 Principes', questions: 8, percentage: 20 },
    { name: '4 Dimensions', questions: 4, percentage: 10 },
    { name: 'SVS', questions: 6, percentage: 15 },
    { name: 'Chaîne de valeur', questions: 6, percentage: 15 },
    { name: '15 Pratiques', questions: 9, percentage: 22 }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <section className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Révisez efficacement votre
          <span className="text-primary-500 block mt-2">ITIL v4 Foundation</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Site de révision complet pour réussir votre examen du premier coup
        </p>
      </section>

      {/* Alerte importante */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Avant de commencer</h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Ce site contient <strong>100+ vraies questions d'examen</strong> et se concentre sur les <strong>pièges fréquents</strong>. 
              L'objectif n'est pas de recracher le cours mais de vous faire <strong>réussir l'examen</strong>. 
              Visez 80% aux quiz pour être sûr de réussir (seuil officiel : 65%).
            </p>
          </div>
        </div>
      </div>

      {/* Parcours d'apprentissage */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Choisissez votre parcours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <div 
              key={path.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 relative hover:shadow-md transition-shadow h-full flex flex-col"
            >
              {path.recommended && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Pour ceux qui ont déjà étudié
                </div>
              )}
              
              <div className={`w-12 h-12 ${path.color} rounded-lg flex items-center justify-center mb-4`}>
                <path.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{path.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
              
              <div className="mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">Durée estimée :</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">{path.duration}</span>
              </div>
              
              <ul className="space-y-1 mb-6 flex-grow">
                {path.steps.map((step, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              
              <Link 
                to={path.action}
                className="btn btn-primary w-full flex items-center justify-center mt-auto"
              >
                Commencer
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info examen */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Format de l'examen */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Format de l'examen officiel
          </h3>
          <dl className="space-y-3">
            {Object.entries(examInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <dt className="text-blue-700 dark:text-blue-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()} :</dt>
                <dd className="font-medium text-blue-900 dark:text-blue-100">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Répartition des questions */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Répartition des questions
          </h3>
          <div className="space-y-3">
            {keyTopics.map((topic) => (
              <div key={topic.name} className="flex justify-between">
                <dt className="text-green-700 dark:text-green-300">{topic.name} :</dt>
                <dd className="font-medium text-green-900 dark:text-green-100 flex items-center space-x-2">
                  <span>{topic.percentage}%</span>
                  <span className="text-sm">({topic.questions}Q)</span>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections disponibles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Explorez les sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/fondamentaux" className="card card-hover flex items-center space-x-4">
            <ITILLogo size={32} className="text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Fondamentaux</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Concepts, principes et dimensions</p>
            </div>
          </Link>
          
          <Link to="/svs" className="card card-hover flex items-center space-x-4">
            <Target className="h-8 w-8 text-green-500" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">SVS & CVS</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Système et chaîne de valeur</p>
            </div>
          </Link>
          
          <Link to="/pratiques" className="card card-hover flex items-center space-x-4">
            <FileText className="h-8 w-8 text-purple-500" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">15 Pratiques</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pratiques du syllabus Foundation</p>
            </div>
          </Link>
          
          <Link to="/etudes-cas" className="card card-hover flex items-center space-x-4">
            <Lightbulb className="h-8 w-8 text-orange-500" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Études de cas</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cas pratiques détaillés</p>
            </div>
          </Link>
          
          <Link to="/quiz" className="card card-hover flex items-center space-x-4">
            <Brain className="h-8 w-8 text-red-500" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Quiz</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">100+ questions d'examen</p>
            </div>
          </Link>
          
          <Link to="/examen" className="card card-hover flex items-center space-x-4">
            <Clock className="h-8 w-8 text-indigo-500" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Conseils Examen</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Stratégies et pièges</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Conseils de réussite */}
      <section className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-primary-200 dark:border-primary-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          🎯 5 clés pour réussir l'examen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Maîtrisez les distinctions</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Incident vs Problème, SLA vs OLA, Output vs Outcome</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Attention aux absolus</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">TOUJOURS, JAMAIS, TOUS = souvent des pièges</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">La valeur est co-créée</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Jamais créée unilatéralement par le fournisseur</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">CVS flexible</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pas d'ordre fixe, sauf Améliorer toujours présente</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">CAB = Advisory</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Conseille mais n'approuve pas les changements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Prêt à réussir votre certification ?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Commencez par une simulation d'examen pour évaluer votre niveau actuel
        </p>
        <Link 
          to="/quiz"
          className="btn btn-primary text-lg px-8 py-3 inline-flex items-center"
        >
          <Target className="mr-2" size={20} />
          Lancer une simulation d'examen
        </Link>
      </section>
    </div>
  )
}

export default HomePage