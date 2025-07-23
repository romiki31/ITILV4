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

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = sessionAnswers[sessionAnswers.length - 1]

  // Écran de sélection du nombre de questions
  if (!selectedQuestionCount) {
    const answeredCount = getAnsweredQuestions().length
    const remainingQuestions = EXAM_PRACTICE_STATS.totalQuestions - answeredCount

    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={onExit}
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

        {/* Statistiques */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {EXAM_PRACTICE_STATS.totalQuestions}
              </div>
              <div className="text-sm text-blue-800 dark:text-blue-200">Questions totales</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {answeredCount}
              </div>
              <div className="text-sm text-green-800 dark:text-green-200">Déjà vues</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {remainingQuestions}
              </div>
              <div className="text-sm text-orange-800 dark:text-orange-200">Restantes</div>
            </div>
          </div>
        </div>

        {/* Sélection du nombre de questions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Combien de questions souhaitez-vous étudier ?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                      : 'border-primary-200 dark:border-primary-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-900 dark:text-gray-100'
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
                onClick={() => {
                  localStorage.removeItem('examPracticeAnswered')
                  window.location.reload()
                }}
                className="mt-2 text-sm text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 underline"
              >
                Réinitialiser ma progression
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Écran de résultats finaux (affiché brièvement)
  if (showFinalResults) {
    const correctAnswers = sessionAnswers.filter(a => a.isCorrect).length
    const score = Math.round((correctAnswers / sessionAnswers.length) * 100)

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="card">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 ${
            score >= 80 ? 'bg-green-500' : score >= 65 ? 'bg-yellow-500' : 'bg-orange-500'
          }`}>
            {score}%
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Session terminée !
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {correctAnswers}/{sessionAnswers.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bonnes réponses</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {score >= 65 ? '✅' : '📚'}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {score >= 65 ? 'Bien compris' : 'À retravailler'}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={handleRestart} className="btn btn-primary flex-1">
              <RotateCcw size={16} className="mr-2" />
              Nouvelle session
            </button>
            <button onClick={onExit} className="btn btn-secondary flex-1">
              <Home size={16} className="mr-2" />
              Menu principal
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Interface principale de question
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header avec progression */}
      <div className="card">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={onExit} className="btn btn-secondary">
              <X size={16} className="mr-2" />
              Quitter
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestionIndex + 1} sur {questions.length}
            </div>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Mode : Apprentissage progressif
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
      <div className="card">
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
        <div className="mt-6 pt-6 border-t dark:border-gray-700">
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
              <div className={`p-4 rounded-lg border ${
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
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
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