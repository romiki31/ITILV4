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
  FileText,
  BookOpen,
  Users,
  TrendingUp,
  Star,
  Zap,
  Shield
} from 'lucide-react'
import ITILLogo from '../components/ITILLogo'

const HomePage: React.FC = () => {
  const statsCards = [
    {
      number: "100+",
      label: "Questions authentiques",
      description: "Vraies questions d'examen",
      icon: Target,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      number: "80%",
      label: "Objectif de réussite",
      description: "Plus élevé que les 65% officiels",
      icon: Award,
      color: "text-green-600 dark:text-green-400"
    },
    {
      number: "6",
      label: "Modules progressifs",
      description: "Parcours structuré complet",
      icon: BookOpen,
      color: "text-purple-600 dark:text-purple-400"
    }
  ]

  const learningPaths = [
    {
      id: 'beginner',
      title: 'Parcours Complet',
      description: 'Apprenez ITIL v4 étape par étape avec tous les fondamentaux',
      icon: ITILLogo,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      duration: '3-4 semaines',
      level: 'Débutant à Avancé',
      features: ['Concepts fondamentaux', '7 Principes directeurs', '4 Dimensions', 'SVS et Chaîne de valeur'],
      action: '/learn',
      recommended: true
    },
    {
      id: 'revision',
      title: 'Révision Rapide',
      description: 'Révisez efficacement avec flashcards et quiz thématiques',
      icon: Brain,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      duration: '1 semaine',
      level: 'Intermédiaire',
      features: ['Flashcards interactives', 'Quiz ciblés', 'Pièges d\'examen', 'Distinctions clés'],
      action: '/flashcards'
    },
    {
      id: 'exam',
      title: 'Mode Examen',
      description: 'Simulations en conditions réelles pour maximiser vos chances',
      icon: Target,
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      duration: '2-3 jours',
      level: 'Avancé',
      features: ['40 questions chrono', 'Questions pièges', 'Explications détaillées', 'Analyse de résultats'],
      action: '/quiz'
    }
  ]

  const features = [
    {
      title: 'Flashcards Interactives',
      description: 'Maîtrisez les concepts avec nos cartes flip animées et le système de répétition espacée',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      demo: 'flip'
    },
    {
      title: 'Quiz Authentiques',
      description: '100+ vraies questions d\'examen avec pièges identifiés et explications expertes',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-500',
      demo: 'quiz'
    },
    {
      title: 'Cas Pratiques Français',
      description: 'Scénarios réels adaptés au contexte français : banque, retail, santé publique',
      icon: Lightbulb,
      gradient: 'from-orange-500 to-red-500',
      demo: 'case'
    },
    {
      title: 'Suivi de Progression',
      description: 'Analytics détaillés par catégorie pour identifier vos points faibles',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      demo: 'progress'
    }
  ]


  return (
    <div className="smooth-page-gradient -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Floating Particles */}
        <div className="floating-particles" style={{zIndex: 1}}>
          <div className="particle" style={{left: '10%', width: '4px', height: '4px', animationDuration: '8s', animationDelay: '0s'}}></div>
          <div className="particle" style={{left: '20%', width: '6px', height: '6px', animationDuration: '12s', animationDelay: '2s'}}></div>
          <div className="particle" style={{left: '30%', width: '3px', height: '3px', animationDuration: '10s', animationDelay: '4s'}}></div>
          <div className="particle" style={{left: '50%', width: '5px', height: '5px', animationDuration: '9s', animationDelay: '1s'}}></div>
          <div className="particle" style={{left: '70%', width: '4px', height: '4px', animationDuration: '11s', animationDelay: '3s'}}></div>
          <div className="particle" style={{left: '80%', width: '7px', height: '7px', animationDuration: '13s', animationDelay: '5s'}}></div>
          <div className="particle" style={{left: '90%', width: '3px', height: '3px', animationDuration: '7s', animationDelay: '6s'}}></div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden" style={{zIndex: 1}}>
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-400/5 dark:bg-green-400/3 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-8" style={{zIndex: 10}}>
          <div className="text-center mb-12">
            {/* Logo animé */}
            <div className="flex justify-center mb-6">
              <div className="relative" style={{zIndex: 20}}>
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-gentle animate-glow relative" style={{zIndex: 23}}>
                  <ITILLogo size={32} className="text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur animate-pulse-slow" style={{zIndex: 22}}></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl blur-xl animate-shimmer" style={{zIndex: 21}}></div>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fadeInUp">
              Réussissez votre
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mt-1 animate-gradient">
                ITIL v4 Foundation
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-1 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                du premier coup
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              Site de révision complet avec <strong className="text-blue-600 dark:text-blue-400">100+ vraies questions d'examen</strong> et 
              focus sur les <strong className="text-purple-600 dark:text-purple-400">pièges fréquents</strong>
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scaleIn" style={{animationDelay: '0.9s'}}>
              <Link 
                to="/learn"
                className="btn btn-primary text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px] group"
              >
                <BookOpen className="mr-2 group-hover:animate-bounce-gentle" size={20} />
                Commencer l'apprentissage
              </Link>
              <Link 
                to="/quiz"
                className="btn btn-secondary text-lg px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 min-w-[200px] group"
              >
                <Target className="mr-2 group-hover:animate-bounce-gentle" size={20} />
                Tester gratuitement
              </Link>
            </div>
          </div>

          {/* Cards statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {statsCards.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp group"
                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color.includes('blue') ? 'from-blue-500 to-blue-600' : stat.color.includes('green') ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center group-hover:animate-bounce-gentle`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition gradient overlay - made more subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 space-y-16 py-16">
        {/* Parcours d'apprentissage */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fadeInUp">
              Choisissez votre parcours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Trois approches adaptées à votre niveau et objectifs pour maximiser vos chances de réussite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div 
                key={path.id}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${path.recommended ? 'ring-2 ring-blue-500 ring-opacity-50' : ''} ${index === 0 ? 'animate-fadeInLeft' : index === 1 ? 'animate-fadeInUp' : 'animate-fadeInRight'}`}
                style={{animationDelay: `${0.4 + index * 0.2}s`}}
              >
                {path.recommended && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg z-20 border-2 border-white dark:border-gray-800">
                    <Star size={14} className="inline mr-1" />
                    Recommandé
                  </div>
                )}

                {/* Header avec gradient */}
                <div className={`${path.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <path.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                    <p className="text-white/90 text-sm">{path.description}</p>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      {path.level}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Clock size={14} className="mr-1" />
                      {path.duration}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {path.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={path.action}
                    className="w-full btn btn-primary flex items-center justify-center py-3 hover:shadow-lg transition-all duration-300"
                  >
                    Commencer maintenant
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fadeInUp">
              Outils d'apprentissage avancés
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Technologies modernes et méthodes éprouvées pour optimiser votre préparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'}`}
                style={{animationDelay: `${0.4 + Math.floor(index / 2) * 0.3}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Smooth transition to CTA */}
      <div className="h-8 bg-gradient-to-b from-transparent to-gray-900/5 dark:to-gray-800/10"></div>

      {/* CTA Final - Full width */}
      <section className="bg-gradient-to-r from-gray-900/90 via-blue-900/85 to-gray-900/90 dark:from-gray-800/90 dark:via-blue-800/85 dark:to-gray-800/90 backdrop-blur-sm text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-16 text-center">
          <div className="flex justify-center mb-6 animate-scaleIn">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center animate-glow">
              <Zap size={32} className="text-yellow-400 animate-bounce-gentle" />
            </div>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Prêt à obtenir votre certification ?
          </h3>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto animate-scaleIn" style={{animationDelay: '0.6s'}}>
            <Link 
              to="/learn"
              className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[200px] group"
            >
              <BookOpen className="mr-2 group-hover:animate-bounce-gentle" size={20} />
              Commencer maintenant
            </Link>
            <Link 
              to="/quiz"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 transition-all duration-300 w-full sm:w-auto min-w-[200px] group"
            >
              <Target className="mr-2 group-hover:animate-bounce-gentle" size={20} />
              Essayer un quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
