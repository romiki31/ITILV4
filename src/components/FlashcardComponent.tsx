import React, { useState, useEffect } from 'react'
import { 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  X,
  CheckCircle,
  XCircle,
  Clock,
  Shuffle,
  Home,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import type { Flashcard } from '@/types'

interface FlashcardComponentProps {
  mode: string
  cards: Flashcard[]
  onComplete: (results: FlashcardResults) => void
  onExit: () => void
}

interface FlashcardResults {
  cardsReviewed: number
  correctAnswers: number
  timeSpent: number
  cardResults: CardResult[]
}

interface CardResult {
  cardId: string
  wasCorrect: boolean
  timeSpent: number
  difficulty: 'easy' | 'medium' | 'hard'
}

const FlashcardComponent: React.FC<FlashcardComponentProps> = ({ 
  mode, 
  cards: initialCards, 
  onComplete, 
  onExit 
}) => {
  const [cards, setCards] = useState<Flashcard[]>(initialCards)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [startTime] = useState(Date.now())
  const [cardStartTime, setCardStartTime] = useState(Date.now())
  const [sessionResults, setSessionResults] = useState<CardResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null)

  useEffect(() => {
    // Configuration selon le mode
    if (mode === 'challenge') {
      setTimeRemaining(600) // 10 minutes
    }
    
    // Mélanger les cartes si nécessaire
    if (mode === 'challenge' || mode.includes('random')) {
      setCards([...initialCards].sort(() => Math.random() - 0.5))
    }
    
    setCardStartTime(Date.now())
  }, [mode, initialCards])

  useEffect(() => {
    // Timer pour mode challenge
    if (timeRemaining !== null && timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTimeRemaining(time => time! - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0) {
      finishSession()
    }
  }, [timeRemaining, showResults])

  const currentCard = cards[currentCardIndex]
  
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  const recordCardResult = (wasCorrect: boolean, difficulty: 'easy' | 'medium' | 'hard' = 'medium') => {
    const timeSpent = Math.round((Date.now() - cardStartTime) / 1000)
    
    const result: CardResult = {
      cardId: currentCard.id,
      wasCorrect,
      timeSpent,
      difficulty
    }

    setSessionResults(prev => [...prev, result])
  }

  const nextCard = (wasCorrect?: boolean, difficulty?: 'easy' | 'medium' | 'hard') => {
    if (wasCorrect !== undefined) {
      recordCardResult(wasCorrect, difficulty)
    }

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
      setCardStartTime(Date.now())
    } else {
      finishSession()
    }
  }

  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
      setCardStartTime(Date.now())
    }
  }

  const skipCard = () => {
    nextCard() // Sans enregistrer de résultat
  }

  const markAsCorrect = () => {
    nextCard(true, 'medium')
  }

  const markAsIncorrect = () => {
    nextCard(false, 'hard')
  }

  const finishSession = () => {
    const totalTime = Math.round((Date.now() - startTime) / 1000)
    const correctAnswers = sessionResults.filter(r => r.wasCorrect).length
    
    const results: FlashcardResults = {
      cardsReviewed: sessionResults.length,
      correctAnswers,
      timeSpent: totalTime,
      cardResults: sessionResults
    }

    setShowResults(true)
    onComplete(results)
  }

  const restartSession = () => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setSessionResults([])
    setShowResults(false)
    setCardStartTime(Date.now())
    if (mode === 'challenge') {
      setTimeRemaining(600)
    }
  }

  if (showResults) {
    const totalTime = Math.round((Date.now() - startTime) / 1000)
    const correctAnswers = sessionResults.filter(r => r.wasCorrect).length
    const averageTime = sessionResults.length > 0 ? Math.round(totalTime / sessionResults.length) : 0

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card text-center">
          <div className="w-20 h-20 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-primary-600 dark:text-primary-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Session terminée !</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{sessionResults.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cartes révisées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Réponses correctes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">{formatTime(totalTime)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Temps total</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button onClick={restartSession} className="btn btn-primary flex-1">
              <RotateCcw size={16} className="mr-2" />
              Recommencer
            </button>
            <button onClick={onExit} className="btn btn-secondary flex-1">
              <Home size={16} className="mr-2" />
              Retour au menu
            </button>
          </div>
        </div>

        {/* Détail des résultats */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Statistiques détaillées</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600 dark:text-gray-400">Taux de réussite</div>
              <div className="font-bold text-lg">
                {sessionResults.length > 0 
                  ? Math.round((correctAnswers / sessionResults.length) * 100) 
                  : 0}%
              </div>
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400">Temps moyen par carte</div>
              <div className="font-bold text-lg">{averageTime}s</div>
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400">Cartes correctes</div>
              <div className="font-bold text-lg text-green-600">
                {sessionResults.filter(r => r.wasCorrect).length}
              </div>
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400">À revoir</div>
              <div className="font-bold text-lg text-red-600">
                {sessionResults.filter(r => !r.wasCorrect).length}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentCard) {
    return <div className="text-center">Aucune carte disponible</div>
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={onExit} className="btn btn-secondary">
              <X size={16} className="mr-2" />
              Quitter
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Carte {currentCardIndex + 1} sur {cards.length}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {timeRemaining !== null && (
              <div className={`flex items-center space-x-2 ${
                timeRemaining < 60 ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'
              }`}>
                <Clock size={16} />
                <span className="font-mono font-medium">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            )}
            <div className="badge badge-primary">
              {currentCard.category}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentCardIndex + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Flashcard responsive */}
      <div className="relative min-h-[320px] sm:min-h-[360px] md:min-h-[400px] max-h-[600px]">
        <div className={`flip-card w-full h-full ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front card bg-white dark:bg-gray-800 border-2 border-primary-400 dark:border-primary-600 flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
              <div className="text-center w-full">
                <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-4">Question {currentCardIndex + 1}/{cards.length}</div>
                <div className="text-lg sm:text-xl font-medium leading-relaxed text-gray-900 dark:text-gray-100 break-words">
                  {currentCard.front}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-6">
                  Cliquez pour révéler la réponse
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="flip-card-back card bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex flex-col p-4 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] max-h-[600px]">
              <div className="flex-1 overflow-y-auto">
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4 text-center">Réponse</div>
                <div className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-wrap text-left break-words">
                  {currentCard.back}
                </div>
                {currentCard.examTip && (
                  <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">💡 Conseil examen</p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">{currentCard.examTip}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de retournement */}
        <button 
          onClick={flipCard}
          className="absolute inset-0 w-full h-full bg-transparent cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary-300 rounded-xl"
          aria-label={isFlipped ? "Retourner à la question" : "Révéler la réponse"}
        />
      </div>

      {/* Contrôles */}
      <div className="space-y-4">
        {/* Évaluation responsive (seulement si la carte est retournée) */}
        {isFlipped && (
          <div className="card bg-gray-50 dark:bg-gray-700">
            <div className="text-center mb-4">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Avez-vous trouvé la bonne réponse ?
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-3">
                <button 
                  onClick={markAsCorrect}
                  className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 sm:py-2 min-h-[44px] flex items-center justify-center"
                >
                  <CheckCircle size={18} className="mr-2" />
                  Correct
                </button>
                <button 
                  onClick={markAsIncorrect}
                  className="btn bg-red-500 text-white hover:bg-red-600 px-6 py-3 sm:py-2 min-h-[44px] flex items-center justify-center"
                >
                  <XCircle size={18} className="mr-2" />
                  À revoir
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation responsive */}
        <div className="space-y-3">
          {/* Contrôles centraux sur mobile */}
          <div className="flex justify-center space-x-2 sm:hidden">
            <button onClick={skipCard} className="btn btn-secondary text-sm px-4 py-2 min-h-[44px]">
              Passer
            </button>
            {!isFlipped && (
              <button onClick={flipCard} className="btn btn-primary px-4 py-2 min-h-[44px]">
                Révéler
              </button>
            )}
          </div>

          {/* Navigation précédent/suivant */}
          <div className="flex justify-between items-center">
            <button 
              onClick={previousCard}
              disabled={currentCardIndex === 0}
              className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 min-h-[44px] flex items-center"
            >
              <ChevronLeft size={16} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Précédente</span>
              <span className="sm:hidden">Préc.</span>
            </button>

            {/* Contrôles centraux sur desktop */}
            <div className="hidden sm:flex space-x-2">
              <button onClick={skipCard} className="btn btn-secondary text-sm px-4 py-2 min-h-[44px]">
                Passer
              </button>
              {!isFlipped && (
                <button onClick={flipCard} className="btn btn-primary px-4 py-2 min-h-[44px]">
                  Révéler la réponse
                </button>
              )}
            </div>

            {currentCardIndex === cards.length - 1 ? (
              <button onClick={finishSession} className="btn btn-primary px-4 py-2 min-h-[44px] flex items-center">
                Terminer
              </button>
            ) : (
              <button 
                onClick={() => nextCard()}
                className="btn btn-secondary px-4 py-2 min-h-[44px] flex items-center"
              >
                <span className="hidden sm:inline">Suivante</span>
                <span className="sm:hidden">Suiv.</span>
                <ChevronRight size={16} className="ml-1 sm:ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Indicateurs visuels */}
      <div className="flex justify-center space-x-1">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentCardIndex 
                ? 'bg-primary-500'
                : index < currentCardIndex
                  ? 'bg-green-400'
                  : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Aide */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <strong>💡 Astuce :</strong> Formulez votre réponse mentalement AVANT de retourner la carte. 
          {mode === 'pieges' && ' Attention aux mots-clés comme TOUJOURS, JAMAIS, TOUS !'}
          {mode === 'theme' && ' Concentrez-vous sur les distinctions clés de ce domaine.'}
        </div>
      </div>
    </div>
  )
}

export default FlashcardComponent