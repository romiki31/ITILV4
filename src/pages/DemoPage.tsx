import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Target,
  Brain,
  Code,
  CheckCircle,
  ArrowRight,
  Award,
  GraduationCap,
  Zap,
  Users,
  TrendingUp,
  Star,
  Clock,
  FileText,
  Lightbulb,
  Shield,
  Monitor,
  Smartphone,
  Gauge,
  BarChart3,
  DollarSign,
  Globe,
  Rocket,
  ChevronRight,
  Play,
  RefreshCw,
  Eye
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const DemoPage: React.FC = () => {
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([])
  const heroRef = useRef<HTMLElement>(null)

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 20
    }))
    setParticles(newParticles)
  }, [])

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Demo flashcard
  const demoFlashcard = {
    front: "Qu'est-ce que la VALEUR selon ITIL 4 ?",
    back: "La perception des bénéfices, utilité et importance par les parties prenantes. TOUJOURS co-créée entre fournisseur et consommateur."
  }

  // Demo quiz question
  const demoQuiz = {
    question: "Selon ITIL 4, qu'est-ce que la valeur ?",
    options: [
      "Un bénéfice quantifiable uniquement en termes financiers",
      "La perception des bénéfits, de l'utilité et de l'importance par les parties prenantes",
      "Le prix qu'un client est prêt à payer pour un service",
      "La différence entre les coûts et les revenus d'un service"
    ],
    correctAnswer: 1
  }

  const learningMetrics = [
    {
      number: "360",
      label: "Questions d'entraînement",
      description: "vs supports formation limités",
      icon: Target,
      color: "text-blue-600 dark:text-blue-400",
      benefit: "Couverture exhaustive"
    },
    {
      number: "66",
      label: "Flashcards interactives",
      description: "vs supports statiques PDF",
      icon: Brain,
      color: "text-purple-600 dark:text-purple-400",
      benefit: "Mémorisation active"
    },
    {
      number: "100%",
      label: "Conformité syllabus",
      description: "Alignement référentiel officiel",
      icon: Award,
      color: "text-green-600 dark:text-green-400",
      benefit: "Précision garantie"
    }
  ]

  const pedagogicalComparisons = [
    {
      aspect: "Méthode de révision",
      traditional: "Relecture manuelle des supports de formation",
      digital: "Révision adaptative avec tracking de progression",
      advantage: "Ciblage des lacunes",
      icon: Brain
    },
    {
      aspect: "Feedback d'apprentissage",
      traditional: "Correction différée par le formateur",
      digital: "Corrections instantanées avec explications détaillées",
      advantage: "Amélioration immédiate",
      icon: Zap
    },
    {
      aspect: "Identification des pièges",
      traditional: "Découverte lors de l'examen",
      digital: "Pièges signalés et expliqués en amont",
      advantage: "Préparation optimisée",
      icon: Shield
    },
    {
      aspect: "Suivi de progression",
      traditional: "Auto-évaluation subjective",
      digital: "Analytics détaillées par catégorie",
      advantage: "Visibilité objective",
      icon: BarChart3
    }
  ]

  const techSpecs = [
    {
      category: "Performance",
      specs: [
        "React 18 + TypeScript pour type safety",
        "Vite build system (3x plus rapide)",
        "Lighthouse Score: 98/100",
        "First Contentful Paint < 1.2s"
      ],
      icon: Gauge
    },
    {
      category: "Architecture",
      specs: [
        "Component-based modulaire",
        "State management contextualisé",
        "Progressive Web App (PWA)",
        "Responsive design mobile-first"
      ],
      icon: Code
    },
    {
      category: "Sécurité & Compliance",
      specs: [
        "HTTPS/TLS 1.3 encryption",
        "RGPD compliant",
        "CSP headers sécurisés",
        "Audit sécurité mensuel"
      ],
      icon: Shield
    }
  ]

  const extensibilityOptions = [
    {
      domain: "Certifications IT",
      examples: "PMP, PRINCE2, TOGAF, Agile/Scrum",
      adaptability: "Mêmes principes pédagogiques applicables",
      effort: "Architecture modulaire réutilisable",
      icon: Code
    },
    {
      domain: "Formations métiers",
      examples: "Comptabilité, RH, Marketing, Juridique",
      adaptability: "Système de quiz/flashcards universel",
      effort: "Personnalisation du contenu uniquement",
      icon: Users
    },
    {
      domain: "Formations internes",
      examples: "Procédures, compliance, sécurité",
      adaptability: "Template configurable pour tout domaine",
      effort: "Interface d'administration simple",
      icon: Shield
    }
  ]

  const flipCard = () => {
    setShowAnswer(!showAnswer)
  }

  const selectQuizAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  // Magnetic button effect
  const handleMagneticMove = (e: React.MouseEvent<HTMLElement>, element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
  }

  const handleMagneticLeave = (element: HTMLElement) => {
    element.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-16">
        {/* Hero Pédagogique */}
        <section ref={heroRef} className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 from-white to-gray-50 text-white dark:text-white text-gray-900 py-16 overflow-hidden min-h-[85vh] flex items-center">
          {/* Particle System */}
          <div className="particle-container">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: `${particle.x}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: `${particle.delay}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating geometric shapes - subtle */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl float-slow"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full blur-3xl float-medium"></div>
          </div>
          
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 glass opacity-5"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 dark:bg-blue-600/20 bg-blue-600/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 border border-blue-400/30 dark:border-blue-400/30 border-blue-400/20">
                    <GraduationCap size={24} className="text-blue-300 dark:text-blue-300 text-blue-600" />
                  </div>
                  <span className="text-xl font-semibold text-blue-300 dark:text-blue-300 text-blue-600">Consolidation Post-Formation</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-relaxed">
                  Optimisation
                  <span className="block text-blue-600 dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 dark:bg-clip-text mt-2 leading-normal">
                    Apprentissage ITIL
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 dark:text-gray-100 text-gray-800 mb-8 leading-relaxed opacity-95 dark:opacity-90">
                  Plateforme de consolidation pour collaborateurs ayant suivi la formation ITIL V4 Foundation. 
                  Conçue pour maximiser les chances de réussite à la certification grâce à des méthodes 
                  d'apprentissage numériques scientifiquement prouvées.
                </p>

                <div className="bg-white/20 dark:bg-white/10 bg-blue-50/80 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-white/20 border-blue-200">
                  <div className="text-sm font-medium text-blue-200 dark:text-blue-300 text-blue-700 mb-2">🎯 Public cible</div>
                  <div className="text-gray-100 dark:text-gray-200 text-gray-800">
                    Collaborateurs ayant déjà suivi la formation traditionnelle ITIL V4 et 
                    souhaitant consolider leurs connaissances pour l'examen de certification.
                  </div>
                </div>
              </div>

              {/* Learning Metrics */}
              <div className="space-y-4 reveal-scale">
                {learningMetrics.map((metric, index) => (
                  <div 
                    key={metric.label}
                    className="bg-white dark:bg-white/10 rounded-2xl p-6 border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color.includes('green') ? 'from-green-500 to-green-600' : metric.color.includes('blue') ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center mr-4`}>
                          <metric.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.number}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {metric.benefit}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 py-16 bg-gray-50 dark:bg-gray-900">
          {/* Supériorité Pédagogique */}
          <section>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-green-500 dark:to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb size={24} className="text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Supériorité des Méthodes Numériques
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comparaison objective entre approches traditionnelles et méthodes d'apprentissage numériques optimisées
              </p>
            </div>

            <div className="space-y-8">
              {pedagogicalComparisons.map((comparison, index) => (
                <div 
                  key={comparison.aspect}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 reveal-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <comparison.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {comparison.aspect}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                      <div className="text-sm font-medium text-orange-700 dark:text-orange-400 mb-1">Approche traditionnelle</div>
                      <div className="text-gray-800 dark:text-gray-300 text-sm">{comparison.traditional}</div>
                    </div>
                    
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-1">Approche numérique</div>
                      <div className="text-gray-800 dark:text-gray-300 text-sm">{comparison.digital}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-700 dark:text-green-400 mb-1">{comparison.advantage}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Bénéfice clé</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Démonstrations Interactives */}
          <section>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 dark:from-purple-500 dark:to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play size={24} className="text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Démonstrations Live des Fonctionnalités
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Interfaces interactives pour démontrer la qualité de l'expérience utilisateur
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Demo Flashcard */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                  <Brain className="mr-3 text-purple-600" size={24} />
                  Flashcard Interactive
                </h3>
                
                <div className="perspective-1000">
                  <div 
                    className={`relative w-full h-48 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${showAnswer ? 'rotate-y-180' : ''}`}
                    onClick={flipCard}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white p-6 backface-hidden">
                      <div className="text-center">
                        <div className="text-lg font-medium mb-2">{demoFlashcard.front}</div>
                        <div className="text-sm opacity-75">Cliquez pour révéler la réponse</div>
                      </div>
                    </div>
                    
                    {/* Back */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white p-6 backface-hidden rotate-y-180">
                      <div className="text-center">
                        <div className="text-sm font-medium leading-relaxed">{demoFlashcard.back}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center space-x-2">
                  <button 
                    onClick={flipCard}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 flex items-center"
                    onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
                  >
                    <RefreshCw size={16} className="mr-2" />
                    Retourner
                  </button>
                </div>
              </div>

              {/* Demo Quiz */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                  <Target className="mr-3 text-green-600" size={24} />
                  Quiz Interactif
                </h3>
                
                <div className="mb-6">
                  <div className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                    {demoQuiz.question}
                  </div>
                  
                  <div className="space-y-3">
                    {demoQuiz.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => selectQuizAnswer(index)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                          selectedAnswer === index
                            ? index === demoQuiz.correctAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                              : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full border mr-3 flex items-center justify-center text-sm font-medium">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {selectedAnswer !== null && (
                  <div className={`p-4 rounded-lg ${
                    selectedAnswer === demoQuiz.correctAnswer
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                  }`}>
                    <div className={`font-medium mb-2 ${
                      selectedAnswer === demoQuiz.correctAnswer ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                    }`}>
                      {selectedAnswer === demoQuiz.correctAnswer ? '✅ Correct !' : '❌ Incorrect'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      La valeur est toujours co-créée entre les parties prenantes, jamais déterminée unilatéralement.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Excellence Technique */}
          <section>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-500 dark:to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code size={24} className="text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Excellence Technique & Architecture
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Stack technologique moderne démontrant notre maîtrise des meilleures pratiques de développement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techSpecs.map((spec, index) => (
                <div 
                  key={spec.category}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <spec.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {spec.category}
                  </h3>
                  <ul className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Modularité & Extensibilité */}
          <section>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 dark:from-indigo-500 dark:to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe size={24} className="text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Modularité & Adaptabilité
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Architecture flexible permettant l'adaptation à différents domaines de formation et types de certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {extensibilityOptions.map((option, index) => (
                <div 
                  key={option.domain}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <option.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {option.domain}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Exemples d'application</div>
                      <div className="text-sm text-gray-800 dark:text-gray-300">{option.examples}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Adaptabilité</div>
                      <div className="text-sm text-gray-800 dark:text-gray-300">{option.adaptability}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Effort d'adaptation</div>
                      <div className="text-sm text-gray-800 dark:text-gray-300">{option.effort}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                      Potentiel d'extension
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action - Exploration */}
          <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 from-slate-800 to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-xl">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap size={32} className="text-white" />
                </div>
              </div>
            
              <h3 className="text-3xl font-bold mb-4 text-white">
                Explorez la plateforme en action
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-gray-200">
                Découvrez concrètement comment cette approche numérique optimise 
                la consolidation des connaissances post-formation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Link 
                  to="/learn"
                  className="btn bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-slate-900 text-lg px-6 py-4 transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-lg"
                >
                  <BookOpen className="mr-2" size={20} />
                  Modules d'apprentissage
                </Link>
                <Link 
                  to="/flashcards"
                  className="btn bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-slate-900 text-lg px-6 py-4 transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-lg"
                >
                  <Brain className="mr-2" size={20} />
                  Flashcards interactives
                </Link>
                <Link 
                  to="/quiz"
                  className="btn bg-white text-slate-900 hover:bg-gray-100 text-lg px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Target className="mr-2" size={20} />
                  Quiz d'entraînement
                </Link>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                Cette architecture modulaire peut être adaptée à d'autres domaines de certification : 
                PMP, PRINCE2, Agile, ou toute formation nécessitant une consolidation post-cours.
              </p>
            </div>
          </section>
        </div>

      </div>
      
      <Footer />
      <BackToTop />
    </div>
  )
}

export default DemoPage