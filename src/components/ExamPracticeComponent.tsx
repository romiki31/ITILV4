import React, { useState, useEffect } from 'react'
import { 
  CheckCircle, 
  X, 
  Home, 
  RotateCcw, 
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Clock,
  Target,
  BookOpen
} from 'lucide-react'
import { useAutoScroll } from '../hooks/useAutoScroll'
import { useExamPracticeProgress } from '../hooks/useExamPracticeProgress'
import StatsDisplay from './StatsDisplay'
import ProgressDashboard from './ProgressDashboard'
import type { 
  ExamPracticeQuestion, 
  ExamPracticeSession,
  ExamPracticeAnswer 
} from '@/types'
import { 
  getRandomExamPracticeQuestions,
  EXAM_PRACTICE_STATS 
} from '@/data/examPracticeQuestions'

interface ExamPracticeComponentProps {
  onComplete: (session: ExamPracticeSession) => void
  onExit: () => void
}

// Configuration des options de nombre de questions
const QUESTION_COUNT_OPTIONS = [5, 10, 15, 20, 25, 30, 40]

const ExamPracticeComponent: React.FC<ExamPracticeComponentProps> = ({ 
  onComplete, 
  onExit 
}) => {
  const { scrollToTop } = useAutoScroll({ delay: 150 })
  const { calculateCurrentStats, ...examPracticeProgress } = useExamPracticeProgress()
  
  // États principaux
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number | null>(null)
  const [questions, setQuestions] = useState<ExamPracticeQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [sessionAnswers, setSessionAnswers] = useState<ExamPracticeAnswer[]>([])
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now())
  const [sessionStartTime] = useState<Date>(new Date())
  const [showFinalResults, setShowFinalResults] = useState(false)
  const [showQuitConfirm, setShowQuitConfirm] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  // Chargement des questions déjà vues depuis localStorage
  const getAnsweredQuestions = (): number[] => {
    const stored = localStorage.getItem('examPracticeAnswered')
    return stored ? JSON.parse(stored) : []
  }

  const addAnsweredQuestion = (questionId: number) => {
    const answered = getAnsweredQuestions()
    if (!answered.includes(questionId)) {
      answered.push(questionId)
      localStorage.setItem('examPracticeAnswered', JSON.stringify(answered))
    }
  }

  // Sélection du nombre de questions
  const handleQuestionCountSelect = (count: number) => {
    setSelectedQuestionCount(count)
    const answeredIds = getAnsweredQuestions()
    const selectedQuestions = getRandomExamPracticeQuestions(count, answeredIds)
    setQuestions(selectedQuestions)
    setCurrentQuestionIndex(0)
    setQuestionStartTime(Date.now())
    scrollToTop() // Autoscroll vers le haut lors du démarrage
  }

  // Gestion de la sélection de réponse
  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    if (showResult) return // Empêche de changer la réponse après validation
    setSelectedAnswer(answer)
  }

  // Validation de la réponse
  const handleValidateAnswer = () => {
    if (!selectedAnswer || !questions[currentQuestionIndex]) return

    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000)

    const answer: ExamPracticeAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent,
      viewedExplanation: false
    }

    setSessionAnswers(prev => [...prev, answer])
    addAnsweredQuestion(currentQuestion.id)
    setShowResult(true)
    
    // Auto-scroll vers le bloc résultat après validation (avec espace au-dessus)
    setTimeout(() => {
      const resultBlock = document.querySelector('.result-block')
      if (resultBlock) {
        const rect = resultBlock.getBoundingClientRect()
        const offset = 80 // Espace au-dessus pour l'esthétique
        window.scrollTo({
          top: window.pageYOffset + rect.top - offset,
          behavior: 'smooth'
        })
      }
    }, 200)
  }

  // Passer à la question suivante
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setQuestionStartTime(Date.now())
      
      // Marquer l'explication comme vue si on passe à la suivante
      if (sessionAnswers.length > 0) {
        const lastAnswerIndex = sessionAnswers.length - 1
        setSessionAnswers(prev => 
          prev.map((answer, index) => 
            index === lastAnswerIndex 
              ? { ...answer, viewedExplanation: true }
              : answer
          )
        )
      }
      
      // Auto-scroll vers le bloc de la nouvelle question (avec espace au-dessus)
      setTimeout(() => {
        const questionElement = document.querySelector('.question-block')
        if (questionElement) {
          const rect = questionElement.getBoundingClientRect()
          const offset = 60 // Espace au-dessus pour l'esthétique
          window.scrollTo({
            top: window.pageYOffset + rect.top - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      // Fin de session
      handleEndSession()
    }
  }

  // Fin de session
  const handleEndSession = () => {
    const correctAnswers = sessionAnswers.filter(a => a.isCorrect).length
    const score = Math.round((correctAnswers / sessionAnswers.length) * 100)

    const session: ExamPracticeSession = {
      id: `session_${Date.now()}`,
      startTime: sessionStartTime,
      endTime: new Date(),
      questionsRequested: selectedQuestionCount || 0,
      questionsAnswered: sessionAnswers.length,
      correctAnswers,
      answers: sessionAnswers,
      score
    }

    // Sauvegarder la session
    const sessions = JSON.parse(localStorage.getItem('examPracticeSessions') || '[]')
    sessions.push(session)
    localStorage.setItem('examPracticeSessions', JSON.stringify(sessions))

    setShowFinalResults(true)
    setTimeout(() => onComplete(session), 100)
  }

  // Recommencer avec de nouvelles questions  
  const handleRestart = () => {
    setSelectedQuestionCount(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setSessionAnswers([])
    setShowFinalResults(false)
  }

  // Reset direct avec feedback visuel
  const handleDirectReset = async () => {
    setIsResetting(true)
    examPracticeProgress.resetProgress()
    // Petit délai pour le feedback visuel
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsResetting(false)
    // Forcer la mise à jour des statistiques sans recharger la page
    setRefreshTrigger(prev => prev + 1)
  }

  // Gestion de la confirmation de quit (seulement pendant l'examen)
  const handleQuitConfirm = () => {
    setShowQuitConfirm(false)
    onExit()
  }

  // Quit direct depuis l'écran de sélection
  const handleDirectQuit = () => {
    onExit()
    scrollToTop()
  }

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = sessionAnswers[sessionAnswers.length - 1]
  
  // Calculer les statistiques temps réel
  const currentStats = calculateCurrentStats(sessionAnswers, questions.length)

  // Écran de sélection du nombre de questions
  if (!selectedQuestionCount) {
    // Recalculer les stats à chaque refreshTrigger (utile après reset)
    const answeredCount = getAnsweredQuestions().length
    const remainingQuestions = EXAM_PRACTICE_STATS.totalQuestions - answeredCount

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <button 
            onClick={handleDirectQuit}
            className="text-primary-600 hover:text-primary-700 flex items-center mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour au menu quiz
          </button>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Questions d'examen blanc
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Mode apprentissage avec validation immédiate et explications pédagogiques
          </p>
        </div>

        {/* Dashboard de progression ludique */}
        <ProgressDashboard
          answeredCount={answeredCount}
          remainingQuestions={remainingQuestions}
          progress={examPracticeProgress.progress}
          isResetting={isResetting}
          onReset={handleDirectReset}
        />

        {/* Sélection du nombre de questions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Combien de questions souhaitez-vous étudier ?
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {QUESTION_COUNT_OPTIONS.map(count => {
              const available = Math.min(count, remainingQuestions)
              const isDisabled = available === 0
              
              return (
                <button
                  key={count}
                  onClick={() => !isDisabled && handleQuestionCountSelect(available)}
                  disabled={isDisabled}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isDisabled
                      ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'border-primary-200 dark:border-primary-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:text-primary-900 dark:hover:text-gray-900 text-gray-900 dark:text-gray-50'
                  }`}
                >
                  <div className="text-2xl font-bold">{available}</div>
                  <div className="text-sm">{count === available ? 'questions' : `sur ${count}`}</div>
                </button>
              )
            })}
          </div>

          {remainingQuestions < QUESTION_COUNT_OPTIONS[QUESTION_COUNT_OPTIONS.length - 1] && (
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note :</strong> Vous avez déjà vu {answeredCount} questions. 
                Pour revoir toutes les questions, vous pouvez réinitialiser votre progression.
              </p>
              <button
                onClick={handleDirectReset}
                disabled={isResetting}
                className="mt-2 flex items-center space-x-2 text-sm text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 transition-colors disabled:opacity-50"
              >
                <RotateCcw size={14} className={isResetting ? 'animate-spin' : ''} />
                <span>{isResetting ? 'Réinitialisation...' : 'Réinitialiser ma progression'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Écran de résultats finaux (affiché brièvement)
  if (showFinalResults) {
    const finalStats = calculateCurrentStats(sessionAnswers, questions.length)
    const score = finalStats.currentScore

    return (
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <div className="card">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 ${
            score >= 80 ? 'bg-green-500' : score >= 65 ? 'bg-yellow-500' : 'bg-orange-500'
          }`}>
            {score}%
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Session terminée !
          </h2>
          
          {/* Statistiques détaillées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                <span className="text-xl font-bold text-green-600 dark:text-green-400">
                  {finalStats.correctAnswers}
                </span>
              </div>
              <div className="text-sm text-green-800 dark:text-green-200">Bonnes réponses</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                {Math.round((finalStats.correctAnswers / finalStats.totalAnswered) * 100)}% de réussite
              </div>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <X size={20} className="text-red-600 dark:text-red-400" />
                <span className="text-xl font-bold text-red-600 dark:text-red-400">
                  {finalStats.incorrectAnswers}
                </span>
              </div>
              <div className="text-sm text-red-800 dark:text-red-200">Mauvaises réponses</div>
              <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                {Math.round((finalStats.incorrectAnswers / finalStats.totalAnswered) * 100)}% d'erreurs
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Target size={20} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {finalStats.totalAnswered}
                </span>
              </div>
              <div className="text-sm text-blue-800 dark:text-blue-200">Questions traitées</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                sur {questions.length} demandées
              </div>
            </div>
          </div>

          {/* Évaluation de performance */}
          <div className={`p-4 rounded-lg mb-6 ${
            score >= 80 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700'
              : score >= 65
                ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700'
                : 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700'
          }`}>
            <div className="text-lg font-semibold mb-2">
              {score >= 80 ? '🎉 Excellent travail !' : score >= 65 ? '👍 Bien joué !' : '📚 Continuez vos efforts !'}
            </div>
            <p className={`text-sm ${
              score >= 80 
                ? 'text-green-700 dark:text-green-300'
                : score >= 65
                  ? 'text-yellow-700 dark:text-yellow-300'
                  : 'text-orange-700 dark:text-orange-300'
            }`}>
              {score >= 80 
                ? 'Vous maîtrisez très bien ces concepts ITIL v4. Continuez sur cette lancée !'
                : score >= 65
                  ? 'Bonne compréhension générale. Quelques révisions vous aideront à consolider.'
                  : 'Il serait bénéfique de revoir ces concepts avant de passer à de nouveaux sujets.'}
            </p>
          </div>

          <div className="flex gap-3">
            <button onClick={handleRestart} className="btn btn-primary flex-1">
              <RotateCcw size={16} className="mr-2" />
              Nouvelle session
            </button>
            <button onClick={handleDirectQuit} className="btn btn-secondary flex-1">
              <Home size={16} className="mr-2" />
              Menu principal
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Modal de confirmation (seulement pour quit pendant l'examen)

  if (showQuitConfirm) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
              <X className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Quitter la session ?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Votre progression actuelle sera sauvegardée. Vous pourrez reprendre plus tard.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowQuitConfirm(false)}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Continuer
              </button>
              <button
                onClick={handleQuitConfirm}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-md transition-colors"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Interface principale de question
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6">
      {/* Header avec progression */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-4 min-w-0">
            <button 
              onClick={() => {
                // Confirmation seulement si on est en cours d'examen
                if (currentQuestionIndex > 0 || selectedAnswer || sessionAnswers.length > 0) {
                  setShowQuitConfirm(true)
                } else {
                  handleDirectQuit()
                }
              }} 
              className="btn btn-secondary flex-shrink-0"
            >
              <X size={16} className="mr-2" />
              <span className="hidden sm:inline">Quitter</span>
              <span className="sm:hidden">Quit</span>
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
              Question {currentQuestionIndex + 1} sur {questions.length}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {sessionAnswers.length > 0 && (
              <StatsDisplay stats={currentStats} className="sm:order-1" />
            )}
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 sm:order-2">
              Mode : Apprentissage progressif
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="question-block card">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="badge badge-primary">
              Examen blanc {currentQuestion.examId === 'examen_1' ? '1' : '2'}
            </span>
            <span className="badge bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Question {currentQuestion.id}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="space-y-3">
          {Object.entries(currentQuestion.options).map(([letter, option]) => {
            const isSelected = selectedAnswer === letter
            const isCorrect = letter === currentQuestion.correctAnswer
            const showCorrectness = showResult
            
            return (
              <button
                key={letter}
                onClick={() => handleAnswerSelect(letter as 'A' | 'B' | 'C' | 'D')}
                disabled={showResult}
                className={`quiz-option w-full text-left ${
                  showCorrectness
                    ? isCorrect
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                      : isSelected && !isCorrect
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                        : 'bg-gray-50 dark:bg-gray-800'
                    : isSelected
                      ? 'selected'
                      : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                    showCorrectness
                      ? isCorrect
                        ? 'border-green-500 bg-green-500 text-white'
                        : isSelected && !isCorrect
                          ? 'border-red-500 bg-red-500 text-white'
                          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                      : isSelected
                        ? 'border-primary-500 bg-primary-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                  }`}>
                    {showCorrectness && isCorrect ? (
                      <CheckCircle size={16} />
                    ) : showCorrectness && isSelected && !isCorrect ? (
                      <X size={16} />
                    ) : (
                      letter
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Bouton de validation ou résultat */}
        <div className="results-container mt-6 pt-6 border-t dark:border-gray-700">
          {!showResult ? (
            <button
              onClick={handleValidateAnswer}
              disabled={!selectedAnswer}
              className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle size={16} className="mr-2" />
              Valider ma réponse
            </button>
          ) : (
            <div className="space-y-4">
              {/* Résultat immédiat */}
              <div className={`result-block p-4 rounded-lg border ${
                currentAnswer?.isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'  
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {currentAnswer?.isCorrect ? (
                    <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <X size={20} className="text-red-600 dark:text-red-400" />
                  )}
                  <span className={`font-semibold ${
                    currentAnswer?.isCorrect
                      ? 'text-green-800 dark:text-green-200'
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {currentAnswer?.isCorrect ? 'Correct !' : 'Incorrect'}
                  </span>
                </div>
                {!currentAnswer?.isCorrect && (
                  <p className="text-sm text-red-700 dark:text-red-300">
                    La bonne réponse était : <strong>{currentQuestion.correctAnswer}</strong>
                  </p>
                )}
              </div>

              {/* Explications */}
              <div className="explanation-section bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Lightbulb size={16} className="text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      Explication simplifiée
                    </div>
                    <div className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                      {currentQuestion.simplifiedExplanation}
                    </div>
                    
                    <details className="text-sm">
                      <summary className="cursor-pointer text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100">
                        Voir l'explication détaillée
                      </summary>
                      <div className="mt-2 text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded p-2">
                        {currentQuestion.explanation}
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              {/* Bouton suivant */}
              <button
                onClick={handleNextQuestion}
                className="btn btn-primary w-full"
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    Question suivante
                    <ArrowRight size={16} className="ml-2" />
                  </>
                ) : (
                  <>
                    Terminer la session
                    <Target size={16} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExamPracticeComponent