import React, { useState, useEffect } from 'react'
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  X,
  Flag,
  Lightbulb,
  RotateCcw,
  Home,
  AlertTriangle
} from 'lucide-react'
import type { QuizQuestion, ExamWhiteSession, ExamWhiteAnswer } from '@/types'
import { 
  examQuestions, 
  getQuestionsByCategory, 
  getTrapQuestions,
  getExamSimulationQuestions,
  getDifficultExamQuestions,
  getRandomQuestions 
} from '@/data/examQuestions'
import { useExamWhiteProgress } from '../hooks/useExamWhiteProgress'

interface QuizComponentProps {
  mode: string
  category?: string
  onComplete: (results: QuizResults) => void
  onExit: () => void
}

interface QuizResults {
  score: number
  totalQuestions: number
  correctAnswers: number
  timeSpent: number
  answers: QuestionAnswer[]
  categoryScores?: Record<string, { correct: number; total: number }>
}

interface QuestionAnswer {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
}

const QuizComponent: React.FC<QuizComponentProps> = ({ mode, category, onComplete, onExit }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set())
  const [timeRemaining, setTimeRemaining] = useState<number>(3600) // 60 minutes par défaut
  const [startTime] = useState<number>(Date.now())
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<QuizResults | null>(null)
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now())
  const [showWarning, setShowWarning] = useState(false)
  const [showQuitConfirm, setShowQuitConfirm] = useState(false)
  
  // Hook pour le suivi des examens blancs
  const examWhiteProgress = useExamWhiteProgress()
  const isExamWhiteMode = mode === 'exam-simulation' || mode === 'exam-difficult'

  useEffect(() => {
    // Charger les questions selon le mode
    let loadedQuestions: QuizQuestion[] = []
    
    switch (mode) {
      case 'exam-simulation':
        loadedQuestions = getExamSimulationQuestions()
        setTimeRemaining(3600) // 60 minutes
        break
      case 'exam-difficult':
        loadedQuestions = getDifficultExamQuestions()
        setTimeRemaining(3600) // 60 minutes
        break
      case 'category':
        loadedQuestions = category ? getQuestionsByCategory(category) : []
        setTimeRemaining(1800) // 30 minutes
        break
      case 'trap-questions':
        loadedQuestions = getTrapQuestions()
        setTimeRemaining(1200) // 20 minutes
        break
      default:
        loadedQuestions = getRandomQuestions(20)
        setTimeRemaining(1200) // 20 minutes
    }
    
    // Pour les examens blancs, prioriser les questions non vues
    if (isExamWhiteMode && examWhiteProgress.progress && !examWhiteProgress.isLoading) {
      const unseenQuestions = examWhiteProgress.getUnseenQuestions(loadedQuestions)
      // Si on a assez de questions non vues, les utiliser, sinon prendre toutes les questions
      if (unseenQuestions.length >= 40) {
        loadedQuestions = unseenQuestions.slice(0, 40)
      }
      // Mélanger pour éviter les patterns
      loadedQuestions = loadedQuestions.sort(() => Math.random() - 0.5)
    }
    
    setQuestions(loadedQuestions)
  }, [mode, category, examWhiteProgress.progress, examWhiteProgress.isLoading, isExamWhiteMode])

  useEffect(() => {
    // Timer avec alerte à 10 minutes
    if (timeRemaining > 0 && !showResults) {
      if (timeRemaining === 600 && mode === 'exam-simulation') {
        setShowWarning(true)
        setTimeout(() => setShowWarning(false), 5000)
      }
      
      const timer = setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0) {
      handleSubmit()
    }
  }, [timeRemaining, showResults, mode])

  const currentQuestion = questions[currentQuestionIndex]
  
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answerIndex
    })
  }

  const toggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions)
    if (newFlagged.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex)
    } else {
      newFlagged.add(currentQuestionIndex)
    }
    setFlaggedQuestions(newFlagged)
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    setQuestionStartTime(Date.now())
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      goToQuestion(currentQuestionIndex + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      goToQuestion(currentQuestionIndex - 1)
    }
  }

  const calculateResults = (): QuizResults => {
    const answers: QuestionAnswer[] = questions.map((question, index) => ({
      questionId: question.id,
      selectedAnswer: selectedAnswers[index] ?? -1,
      isCorrect: selectedAnswers[index] === question.correctAnswer,
      timeSpent: 30 // Placeholder
    }))

    const correctAnswers = answers.filter(a => a.isCorrect).length
    const score = Math.round((correctAnswers / questions.length) * 100)
    const timeSpent = Math.round((Date.now() - startTime) / 1000)

    // Calculer les scores par catégorie
    const categoryScores: Record<string, { correct: number; total: number }> = {}
    questions.forEach((question, index) => {
      const cat = question.category
      if (!categoryScores[cat]) {
        categoryScores[cat] = { correct: 0, total: 0 }
      }
      categoryScores[cat].total++
      if (answers[index].isCorrect) {
        categoryScores[cat].correct++
      }
    })

    return {
      score,
      totalQuestions: questions.length,
      correctAnswers,
      timeSpent,
      answers,
      categoryScores
    }
  }

  const handleSubmit = () => {
    const quizResults = calculateResults()
    setResults(quizResults)
    setShowResults(true)
    
    // Sauvegarder la session pour les examens blancs
    if (isExamWhiteMode && examWhiteProgress.progress) {
      const examWhiteAnswers: ExamWhiteAnswer[] = questions.map((question, index) => ({
        questionId: question.id,
        selectedAnswer: selectedAnswers[index] ?? -1,
        isCorrect: selectedAnswers[index] === question.correctAnswer,
        timeSpent: 30 // Placeholder pour le temps par question
      }))
      
      const session: ExamWhiteSession = {
        id: Date.now().toString(),
        startTime: new Date(startTime),
        endTime: new Date(),
        mode: mode as 'exam-simulation' | 'exam-difficult',
        questionsTotal: questions.length,
        questionsAnswered: Object.keys(selectedAnswers).length,
        correctAnswers: quizResults.correctAnswers,
        score: quizResults.score,
        timeSpent: quizResults.timeSpent,
        answers: examWhiteAnswers
      }
      
      examWhiteProgress.saveSession(session)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setFlaggedQuestions(new Set())
    setTimeRemaining(mode === 'exam-simulation' ? 3600 : 1800)
    setShowResults(false)
    setResults(null)
    setQuestionStartTime(Date.now())
  }

  // Gestion de la confirmation de quit
  const handleQuitConfirm = () => {
    setShowQuitConfirm(false)
    onExit()
  }

  if (showResults && results) {
    const passed = results.score >= 65

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Résultats */}
        <div className="card text-center">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 ${
            results.score >= 80 ? 'bg-green-500' : results.score >= 65 ? 'bg-yellow-500' : 'bg-red-500'
          }`}>
            {results.score}%
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {results.score >= 80 ? 'Excellent !' : results.score >= 65 ? 'Réussi !' : 'À retravailler'}
          </h2>

          {mode === 'exam-simulation' && (
            <p className={`text-lg mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed ? '✅ Vous auriez réussi l\'examen réel !' : '❌ Score insuffisant pour l\'examen réel (65% requis)'}
            </p>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{results.correctAnswers}/{results.totalQuestions}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Bonnes réponses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formatTime(results.timeSpent)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Temps passé</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {Math.round(results.timeSpent / results.totalQuestions)}s
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Temps moyen/question</div>
            </div>
          </div>

          {/* Scores par catégorie */}
          {results.categoryScores && (
            <div className="mt-6 border-t dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance par domaine</h3>
              <div className="space-y-2">
                {Object.entries(results.categoryScores).map(([cat, scores]) => {
                  const percentage = Math.round((scores.correct / scores.total) * 100)
                  return (
                    <div key={cat} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{cat}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              percentage >= 80 ? 'bg-green-500' : 
                              percentage >= 65 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 w-12 text-right">{percentage}%</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button onClick={restartQuiz} className="btn btn-primary flex-1">
              <RotateCcw size={16} className="mr-2" />
              Recommencer
            </button>
            <button onClick={onExit} className="btn btn-secondary flex-1">
              <Home size={16} className="mr-2" />
              Retour au menu
            </button>
          </div>
        </div>

        {/* Révision des réponses */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Révision détaillée</h3>
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index]
            const isCorrect = userAnswer === question.correctAnswer
            
            return (
              <div key={question.id} className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">{question.question}</h4>
                    
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => {
                        const isUserAnswer = userAnswer === optionIndex
                        const isCorrectAnswer = optionIndex === question.correctAnswer
                        
                        return (
                          <div 
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              isCorrectAnswer 
                                ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200' 
                                : isUserAnswer 
                                  ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200'
                                  : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {isCorrectAnswer && <CheckCircle size={16} className="text-green-600 dark:text-green-400" />}
                              {isUserAnswer && !isCorrectAnswer && <X size={16} className="text-red-600 dark:text-red-400" />}
                              <span>{option}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Explication */}
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Lightbulb size={16} className="text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-blue-900 dark:text-blue-100 mb-1">Explication</div>
                          <div className="text-blue-800 dark:text-blue-200 text-sm">{question.explanation}</div>
                          {question.examTip && (
                            <div className="text-orange-700 dark:text-orange-300 text-sm mt-2 font-medium bg-orange-50 dark:bg-orange-900/20 rounded p-2 border border-orange-200 dark:border-orange-700">
                              {question.examTip}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Modal de confirmation (seulement pour quit pendant le quiz)

  if (showQuitConfirm) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
              <X className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Quitter le quiz ?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Votre progression sera perdue. Voulez-vous vraiment quitter ?
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

  if (!currentQuestion) {
    return <div className="text-center text-gray-900 dark:text-gray-100">Chargement des questions...</div>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Alerte 10 minutes */}
      {showWarning && (
        <div className="fixed top-4 right-4 bg-orange-500 dark:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
          <AlertTriangle size={20} />
          <span className="font-medium">Attention : plus que 10 minutes !</span>
        </div>
      )}

      {/* Header avec timer et progression */}
      <div className="card">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                // Confirmation seulement si on a des réponses
                if (Object.keys(selectedAnswers).length > 0) {
                  setShowQuitConfirm(true)
                } else {
                  onExit()
                }
              }} 
              className="btn btn-secondary"
            >
              <X size={16} className="mr-2" />
              Quitter
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestionIndex + 1} sur {questions.length}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className={`flex items-center space-x-2 ${
              timeRemaining < 600 ? 'text-red-600 font-bold' : 
              timeRemaining < 1200 ? 'text-orange-600' : 'text-gray-600'
            }`}>
              <Clock size={16} />
              <span className="font-mono font-medium">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <button 
              onClick={toggleFlag}
              className={`p-2 rounded-lg transition-colors ${
                flaggedQuestions.has(currentQuestionIndex) 
                  ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
              title={flaggedQuestions.has(currentQuestionIndex) ? "Question marquée" : "Marquer la question"}
            >
              <Flag size={16} />
            </button>
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
              {currentQuestion.category.replace('-', ' ')}
            </span>
            <span className={`badge ${
              currentQuestion.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' :
              currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300' :
              'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
            }`}>
              {currentQuestion.difficulty === 'easy' ? 'Facile' : 
               currentQuestion.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`quiz-option w-full text-left ${
                selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestionIndex] === index 
                    ? 'border-primary-500 bg-primary-500' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  {selectedAnswers[currentQuestionIndex] === index && (
                    <CheckCircle size={16} className="text-white" />
                  )}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation améliorée */}
      <div className="space-y-4">
        {/* Navigation par question */}
        <div className="card">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Navigation rapide</h4>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`h-10 sm:h-12 rounded text-xs sm:text-sm font-medium transition-colors min-h-[44px] flex items-center justify-center ${
                  index === currentQuestionIndex 
                    ? 'bg-primary-500 text-white'
                    : selectedAnswers[index] !== undefined
                      ? flaggedQuestions.has(index)
                        ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 border-2 border-yellow-300 dark:border-yellow-700'
                        : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                      : flaggedQuestions.has(index)
                        ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-2 border-yellow-200 dark:border-yellow-800'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                title={
                  flaggedQuestions.has(index) ? 'Question marquée' :
                  selectedAnswers[index] !== undefined ? 'Question répondue' :
                  'Question non répondue'
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <div className="w-3 h-3 bg-green-100 dark:bg-green-900/50 rounded mr-1"></div>
              Répondue
            </span>
            <span className="flex items-center">
              <div className="w-3 h-3 bg-yellow-100 dark:bg-yellow-900/50 border border-yellow-300 dark:border-yellow-700 rounded mr-1"></div>
              Marquée
            </span>
            <span className="flex items-center">
              <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded mr-1"></div>
              Non répondue
            </span>
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-between items-center">
          <button 
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} className="mr-2" />
            Précédent
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {Object.keys(selectedAnswers).length} / {questions.length} répondues
            </p>
          </div>

          {currentQuestionIndex === questions.length - 1 ? (
            <button 
              onClick={handleSubmit} 
              className="btn btn-primary"
              disabled={Object.keys(selectedAnswers).length < questions.length}
            >
              Terminer le quiz
            </button>
          ) : (
            <button onClick={nextQuestion} className="btn btn-secondary">
              Suivant
              <ChevronRight size={16} className="ml-2" />
            </button>
          )}
        </div>
      </div>

      {/* Informations contextuelles */}
      {mode === 'trap-questions' && (
        <div className="card bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700">
          <div className="text-sm text-orange-800 dark:text-orange-200">
            <strong>⚠️ Mode Pièges :</strong> Attention aux mots absolus (TOUJOURS, JAMAIS, TOUS, AUCUN) 
            et aux distinctions subtiles. Lisez très attentivement !
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizComponent