import React, { useState, useEffect, useRef } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  CheckCircle, 
  XCircle, 
  Home,
  RotateCcw
} from 'lucide-react'
import type { Flashcard } from '@/types'
import { useCardResults } from '@/hooks/useCardResults'

interface FlashcardViewerProps {
  cards: Flashcard[]
  mode: string
  onExit: () => void
  onResultChange?: () => void // Callback pour notifier les changements
}

interface SessionStats {
  cardsReviewed: number
  correctAnswers: number
  timeSpent: number
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({ 
  cards, 
  mode, 
  onExit,
  onResultChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [sessionStats, setSessionStats] = useState<SessionStats>({
    cardsReviewed: 0,
    correctAnswers: 0,
    timeSpent: 0
  })
  const [startTime] = useState(Date.now())
  const [showResults, setShowResults] = useState(false)
  const [sessionResults, setSessionResults] = useState<{cardId: string, wasCorrect: boolean}[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const { recordResult } = useCardResults()
  const currentCard = cards[currentIndex]

  const handleAnswer = (wasCorrect: boolean) => {
    if (!currentCard) return
    
    // Enregistrer le résultat dans le système global
    recordResult(currentCard.id, wasCorrect)
    
    // Notifier le parent du changement
    onResultChange?.()
    
    // Enregistrer pour les stats de session
    setSessionResults(prev => [...prev, { cardId: currentCard.id, wasCorrect }])
    setSessionStats(prev => ({
      ...prev,
      cardsReviewed: prev.cardsReviewed + 1,
      correctAnswers: prev.correctAnswers + (wasCorrect ? 1 : 0)
    }))
    
    // Passer à la carte suivante ou terminer
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    } else {
      finishSession()
    }
  }

  const finishSession = () => {
    const endTime = Date.now()
    setSessionStats(prev => ({
      ...prev,
      timeSpent: Math.round((endTime - startTime) / 1000)
    }))
    setShowResults(true)
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped)
    
    // Auto-scroll vers le haut quand on révèle la réponse
    if (!isFlipped && scrollContainerRef.current) {
      setTimeout(() => {
        scrollContainerRef.current?.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }, 300) // Délai pour laisser l'animation de retournement se faire
    }
  }

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
  }

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  if (showResults) {
    const accuracy = sessionStats.cardsReviewed > 0 
      ? Math.round((sessionStats.correctAnswers / sessionStats.cardsReviewed) * 100) 
      : 0

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card text-center">
          <div className="w-20 h-20 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-primary-600 dark:text-primary-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Session terminée !
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {sessionStats.cardsReviewed}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Cartes révisées
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">
                {sessionStats.correctAnswers}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Réponses correctes
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">
                {accuracy}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Taux de réussite
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button 
              onClick={() => window.location.reload()}
              className="btn btn-primary flex-1"
            >
              <RotateCcw size={16} className="mr-2" />
              Recommencer
            </button>
            <button 
              onClick={onExit} 
              className="btn btn-secondary flex-1"
            >
              <Home size={16} className="mr-2" />
              Retour au menu
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentCard) {
    return <div className="text-center">Aucune carte disponible</div>
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0">
      {/* Header */}
      <div className="card">
        {/* Mobile: Layout vertical */}
        <div className="sm:hidden">
          <div className="flex justify-between items-center mb-3">
            <button 
              onClick={onExit}
              className="btn btn-secondary text-sm px-3 py-2"
            >
              <X size={14} className="mr-1" />
              Quitter
            </button>
            <div className="flex items-center gap-2">
              <div className="badge badge-primary text-xs">
                {currentCard.category}
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Carte {currentIndex + 1} sur {cards.length}
            </div>
          </div>
        </div>

        {/* Desktop: Layout horizontal */}
        <div className="hidden sm:flex justify-between items-center">
          <button 
            onClick={onExit}
            className="btn btn-secondary"
          >
            <X size={16} className="mr-2" />
            Quitter
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Carte {currentIndex + 1} sur {cards.length}
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="badge badge-primary text-xs">
                {currentCard.category}
              </div>
            </div>
          </div>
          
          <div className="w-20"></div> {/* Spacer pour centrer */}
        </div>
        
        {/* Barre de progression */}
        <div className="mt-4">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <div className="relative h-[400px] sm:h-[500px] max-h-[600px]">
        <div className={`flip-card w-full h-full ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front card bg-white dark:bg-gray-800 border-2 border-primary-400 dark:border-primary-600 flex items-center justify-center p-4 sm:p-8 h-full">
              <div className="text-center w-full">
                <div className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium mb-3 sm:mb-4">
                  Question {currentIndex + 1}/{cards.length}
                </div>
                <div className="text-lg sm:text-xl font-medium leading-relaxed text-gray-900 dark:text-gray-100">
                  {currentCard.front}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-6">
                  Cliquez pour révéler la réponse
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="flip-card-back card bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex flex-col p-4 sm:p-8 h-full">
              <div className="flex justify-between items-center mb-3 sm:mb-4 flex-shrink-0">
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Réponse
                </div>
                <button 
                  onClick={flipCard}
                  className="text-xs bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors px-3 py-1.5 rounded-md border border-primary-300 dark:border-primary-600"
                  aria-label="Retourner à la question"
                >
                  ↻ Retourner
                </button>
              </div>
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto min-h-0 relative">
                <div className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-wrap pr-2">
                  {currentCard.back}
                </div>
                {/* Indicateur de scroll */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gray-50 dark:from-gray-700 to-transparent pointer-events-none opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de retournement - seulement sur la face avant */}
        {!isFlipped && (
          <button 
            onClick={flipCard}
            className="absolute inset-0 w-full h-full bg-transparent cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary-300 rounded-xl"
            aria-label="Révéler la réponse"
          />
        )}
      </div>

      {/* Contrôles */}
      <div className="space-y-4">
        {/* Évaluation (seulement si la carte est retournée) */}
        {isFlipped && (
          <div className="card bg-gray-50 dark:bg-gray-700">
            <div className="text-center mb-4">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Avez-vous trouvé la bonne réponse ?
              </div>
              {/* Mobile: Boutons empilés */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button 
                  onClick={() => handleAnswer(true)}
                  className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 flex items-center justify-center w-full sm:w-auto"
                >
                  <CheckCircle size={18} className="mr-2" />
                  Correct
                </button>
                <button 
                  onClick={() => handleAnswer(false)}
                  className="btn bg-red-500 text-white hover:bg-red-600 px-6 py-3 flex items-center justify-center w-full sm:w-auto"
                >
                  <XCircle size={18} className="mr-2" />
                  À revoir
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        {/* Mobile: Navigation empilée */}
        <div className="sm:hidden space-y-4">
          {!isFlipped && (
            <div className="text-center">
              <button onClick={flipCard} className="btn btn-primary w-full py-3">
                Révéler la réponse
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={previousCard}
              disabled={currentIndex === 0}
              className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center py-3 text-sm"
            >
              <ChevronLeft size={16} className="mr-1" />
              Précédente
            </button>

            {currentIndex === cards.length - 1 ? (
              <button onClick={finishSession} className="btn btn-primary py-3 text-sm">
                Terminer
              </button>
            ) : (
              <button 
                onClick={nextCard}
                className="btn btn-secondary flex items-center justify-center py-3 text-sm"
              >
                Suivante
                <ChevronRight size={16} className="ml-1" />
              </button>
            )}
          </div>
        </div>

        {/* Desktop: Navigation horizontale */}
        <div className="hidden sm:flex justify-between items-center">
          <button 
            onClick={previousCard}
            disabled={currentIndex === 0}
            className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <ChevronLeft size={16} className="mr-2" />
            Précédente
          </button>

          <div className="text-center">
            {!isFlipped && (
              <button onClick={flipCard} className="btn btn-primary">
                Révéler la réponse
              </button>
            )}
          </div>

          {currentIndex === cards.length - 1 ? (
            <button onClick={finishSession} className="btn btn-primary">
              Terminer
            </button>
          ) : (
            <button 
              onClick={nextCard}
              className="btn btn-secondary flex items-center"
            >
              Suivante
              <ChevronRight size={16} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FlashcardViewer