import React, { useState, useMemo, useEffect } from 'react'
import FlashcardViewer from '../components/FlashcardViewer'
import CardCountSelector from '../components/CardCountSelector'
import type { Flashcard } from '@/types'
import { flashcards } from '../data/flashcards'
import { useCardResults } from '../hooks/useCardResults'
import { 
  Brain,
  BookOpen,
  Target,
  Shield,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Lightbulb,
  Network,
  Building2,
  AlertTriangle
} from 'lucide-react'
import { useAutoScroll } from '../hooks/useAutoScroll'

const FlashcardsPage: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('') // Cours ou Complémentaire
  const [selectedCount, setSelectedCount] = useState<number>(0)
  const [showViewer, setShowViewer] = useState(false)
  const [filteredCards, setFilteredCards] = useState<Flashcard[]>([])
  const [updateTrigger, setUpdateTrigger] = useState(0) // Pour forcer la mise à jour
  
  // Debug: Tracer le cycle de vie du composant
  useEffect(() => {
    return () => {
    }
  }, [])
  
  // Écouter les changements de résultats pour forcer la mise à jour
  useEffect(() => {
    const handleCardResultsUpdate = () => {
      setUpdateTrigger(prev => prev + 1)
    }
    
    window.addEventListener('cardResultsUpdated', handleCardResultsUpdate)
    
    return () => {
      window.removeEventListener('cardResultsUpdated', handleCardResultsUpdate)
    }
  }, [])
  
  const { scrollToTop } = useAutoScroll({ delay: 150 })
  const { getIncorrectCards, getStats, resetAllResults } = useCardResults()
  
  const stats = useMemo(() => {
    const newStats = getStats()
    return newStats
  }, [getStats, updateTrigger])
  const availableCardIds = flashcards.map(card => card.id)
  const incorrectCards = useMemo(() => {
    const cards = getIncorrectCards(availableCardIds)
    return cards
  }, [getIncorrectCards, availableCardIds, updateTrigger])

  // Catégories complémentaires (enrichissement IA)
  const complementaryCategories = ['pratiques-avancees', 'synthese-relations', 'scenarios-sectoriels', 'pieges-examen']
  
  // Séparer les flashcards par type
  const courseFlashcards = useMemo(() => 
    flashcards.filter(card => !complementaryCategories.includes(card.category)), [])
  const complementaryFlashcards = useMemo(() => 
    flashcards.filter(card => complementaryCategories.includes(card.category)), [])
  
  // Calculer les catégories et leurs compteurs (seulement cours pour l'interface thématique)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    courseFlashcards.forEach(card => {
      counts[card.category] = (counts[card.category] || 0) + 1
    })
    return counts
  }, [courseFlashcards])

  const categories = [
    { 
      id: 'concepts-fondamentaux', 
      name: 'Concepts fondamentaux', 
      count: categoryCounts['concepts-fondamentaux'] || 0,
      icon: BookOpen,
      description: 'Valeur, Service, Produit, Outcome vs Output...',
      type: 'course'
    },
    { 
      id: 'principes-directeurs', 
      name: '7 Principes directeurs', 
      count: categoryCounts['principes-directeurs'] || 0,
      icon: Target,
      description: 'Application et reconnaissance des principes',
      type: 'course'
    },
    { 
      id: 'dimensions', 
      name: '4 Dimensions + PESTLE', 
      count: categoryCounts['dimensions'] || 0,
      icon: Shield,
      description: 'Identification et application des dimensions',
      type: 'course'
    },
    { 
      id: 'systeme-valeur', 
      name: 'SVS', 
      count: categoryCounts['systeme-valeur'] || 0,
      icon: Brain,
      description: 'Service Value System et composants',
      type: 'course'
    },
    { 
      id: 'chaine-valeur-services', 
      name: 'Chaîne de valeur des services', 
      count: categoryCounts['chaine-valeur-services'] || 0,
      icon: ArrowRight,
      description: '6 activités flexibles, flux de valeur, intégration CVS',
      type: 'course'
    },
    { 
      id: 'pratiques', 
      name: '15 Pratiques Foundation', 
      count: categoryCounts['pratiques'] || 0,
      icon: CheckCircle,
      description: 'Objectifs, distinctions, relations CVS',
      type: 'course'
    },
    { 
      id: 'complementaire', 
      name: 'Contenu Complémentaire', 
      count: complementaryFlashcards.length,
      icon: Lightbulb,
      description: 'Pratiques avancées, scénarios sectoriels et stratégies d\'examen',
      type: 'complementary',
      special: true
    }
  ]

  // Configuration du mode révision intelligente
  const smartModeConfig = useMemo(() => {
    if (stats.totalCards === 0) {
      return {
        description: "Commencez par réviser quelques cartes pour activer ce mode",
        disabled: true,
        icon: BookOpen,
        color: 'bg-gray-400'
      }
    }
    
    if (incorrectCards.length === 0) {
      return {
        description: "Excellent ! Aucune carte à revoir actuellement - Révisez d'autres cartes pour en débloquer",
        disabled: false, // Changé de true à false
        icon: CheckCircle,
        color: 'bg-green-400'
      }
    }
    
    return {
      description: `${incorrectCards.length} carte${incorrectCards.length > 1 ? 's' : ''} "À revoir" vous attendent`,
      disabled: false,
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  }, [stats.totalCards, incorrectCards.length])

  const modes = [
    {
      id: 'theme',
      title: 'Révision par thème',
      description: 'Choisissez un domaine spécifique à réviser',
      icon: BookOpen,
      color: 'bg-blue-500',
      action: 'choose-category'
    },
    {
      id: 'random',
      title: 'Mode aléatoire',
      description: 'Choisissez le nombre de cartes à réviser',
      icon: Brain,
      color: 'bg-green-500',
      action: 'choose-count',
      recommended: true
    },
    {
      id: 'intelligent',
      title: 'Révision intelligente',
      description: smartModeConfig.description,
      icon: smartModeConfig.icon,
      color: smartModeConfig.color,
      action: 'start',
      disabled: smartModeConfig.disabled
    }
  ]

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const startSession = (mode: string, category?: string, subCategory?: string, count?: number) => {
    let cardsToUse: Flashcard[] = []
    
    if (mode === 'theme' && subCategory) {
      const sourceCards = subCategory === 'cours' ? courseFlashcards : complementaryFlashcards
      if (subCategory === 'cours' && category) {
        cardsToUse = sourceCards.filter(card => card.category === category)
      } else if (subCategory === 'complementaire') {
        // Pour complémentaire, on prend toutes les cartes complémentaires
        cardsToUse = sourceCards
      }
    } else if (mode === 'random') {
      const shuffled = shuffleArray(flashcards)
      cardsToUse = shuffled.slice(0, count || flashcards.length)
    } else if (mode === 'intelligent') {
      cardsToUse = flashcards.filter(card => incorrectCards.includes(card.id))
      
      // Si aucune carte à revoir, prendre 10 cartes aléatoires
      if (cardsToUse.length === 0) {
        const shuffled = shuffleArray(flashcards)
        cardsToUse = shuffled.slice(0, 10)
      }
    }
    
    setFilteredCards(cardsToUse)
    setShowViewer(true)
    scrollToTop()
  }

  const handleModeSelect = (mode: any) => {
    if (mode.disabled) return
    
    setSelectedMode(mode.id)
    
    if (mode.action === 'start') {
      startSession(mode.id)
    } else if (mode.action === 'choose-category') {
      // Will show category selection
    } else if (mode.action === 'choose-count') {
      // Will show count selection
    }
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    if (categoryId === 'complementaire') {
      // Démarrer directement avec le contenu complémentaire
      startSession('theme', undefined, 'complementaire')
    }
    // Pour les autres catégories, ne pas démarrer immédiatement
  }
  
  const handleSubCategorySelect = (subCategory: string) => {
    setSelectedSubCategory(subCategory)
    startSession('theme', selectedCategory, subCategory)
  }

  const handleCountSelect = (count: number) => {
    setSelectedCount(count)
    startSession('random', undefined, undefined, count)
  }

  const resetState = () => {
    setSelectedMode('')
    setSelectedCategory('')
    setSelectedSubCategory('')
    setSelectedCount(0)
    setShowViewer(false)
    setFilteredCards([])
    scrollToTop()
  }

  const handleResultChange = () => {
    setUpdateTrigger(prev => prev + 1)
  }

  const handleReset = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes vos données de révision flashcards ? Cette action est irréversible.')) {
      resetAllResults()
      // Les statistiques se mettront à jour automatiquement grâce au hook
    }
  }

  // Vue principale du viewer
  if (showViewer) {
    return (
      <div className="max-w-4xl mx-auto">
        <FlashcardViewer 
          cards={filteredCards}
          mode={selectedMode}
          onExit={resetState}
          onResultChange={handleResultChange}
        />
      </div>
    )
  }

  // Sélection du nombre de cartes (mode aléatoire)
  if (selectedMode === 'random' && selectedCount === 0) {
    return (
      <CardCountSelector
        totalCards={flashcards.length}
        onSelect={handleCountSelect}
        onBack={resetState}
      />
    )
  }

  // Sélection de sous-catégorie (cours uniquement - pour les catégories non-complémentaires)
  if (selectedMode === 'theme' && selectedCategory && selectedCategory !== 'complementaire' && !selectedSubCategory) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => { setSelectedCategory(''); setSelectedSubCategory('') }}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
            Retour aux thèmes
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Prêt à commencer la révision de ce thème ?
          </p>
        </div>

        <div className="grid gap-4">
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleSubCategorySelect('cours')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Commencer la révision
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {categories.find(c => c.id === selectedCategory)?.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-2">
                    {courseFlashcards.filter(card => card.category === selectedCategory).length} cartes disponibles
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Sélection de catégorie (révision par thème)
  if (selectedMode === 'theme' && !selectedCategory) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={resetState}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
            Retour aux modes
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Choisissez un thème
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Choisissez entre le contenu principal du cours ou les pratiques complémentaires
          </p>
        </div>

        {/* Section Contenu Principal */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contenu Principal du Cours
            </h3>
            <div className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                {courseFlashcards.length} cartes
              </span>
            </div>
          </div>
          
          <div className="grid gap-3 sm:gap-4">
            {categories.filter(cat => cat.type === 'course').map((category) => (
              <div 
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer group"
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-2 sm:p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                      <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 line-clamp-1">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm">
                          {category.count} cartes
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section Contenu Complémentaire */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contenu Complémentaire
            </h3>
            <div className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
              <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                {complementaryFlashcards.length} cartes
              </span>
            </div>
          </div>
          
          <div className="grid gap-3 sm:gap-4">
            {categories.filter(cat => cat.type === 'complementary').map((category) => (
              <div 
                key={category.id}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg shadow-sm border border-purple-200 dark:border-purple-700 p-4 sm:p-6 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-600 transition-all cursor-pointer group relative overflow-hidden"
                onClick={() => handleCategorySelect(category.id)}
              >
                {/* Badge "Nouveau" */}
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Enrichi
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 sm:p-3 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/40 transition-colors">
                      <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 pr-16">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-purple-600 dark:text-purple-400 font-medium text-xs sm:text-sm">
                          {category.count} cartes
                        </span>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        </div>
                        <span className="text-purple-500 dark:text-purple-400 text-xs font-medium">
                          Pratiques avancées
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Page principale avec les modes
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Révision avec Flashcards
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Mémorisez efficacement les concepts clés de l'examen ITIL v4 Foundation
        </p>
        
        {/* Statistiques */}
        {stats.totalCards > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {stats.totalCards} cartes étudiées
                </span>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {stats.accuracy}% de réussite
                </span>
              </div>
              {incorrectCards.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    {incorrectCards.length} à revoir
                  </span>
                </div>
              )}
            </div>
            
            {/* Bouton de réinitialisation */}
            <div className="mt-3">
              <button
                onClick={handleReset}
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 flex items-center gap-1 transition-colors"
              >
                <RotateCcw size={12} />
                Réinitialiser les données
              </button>
            </div>
          </div>
        )}
      </div>


      <div className="grid gap-6">
        {modes.map((mode) => (
          <div 
            key={mode.id} 
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-shadow relative ${
              mode.disabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-md cursor-pointer'
            }`}
            onClick={() => handleModeSelect(mode)}
          >
            {mode.recommended && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Recommandé
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${mode.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <mode.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {mode.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {mode.description}
                  </p>
                </div>
              </div>
              <ArrowRight className={`h-5 w-5 ${mode.disabled ? 'text-gray-300' : 'text-gray-400'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlashcardsPage