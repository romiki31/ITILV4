import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
  title?: string;
  timeLimit?: number; // in seconds
}

export function QuizComponent({ questions, onComplete, title = 'Quiz', timeLimit }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [isStarted, setIsStarted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!isStarted || !timeLimit || showResults) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev && prev <= 1) {
          handleFinish();
          return 0;
        }
        return prev ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, timeLimit, showResults]);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    setShowResults(true);
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? (acc || 0) + 1 : (acc || 0);
    }, 0);
    onComplete(score || 0, questions.length);
  };

  const getScorePercentage = () => {
    const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? (acc || 0) + 1 : (acc || 0);
    }, 0);
    return Math.round(((correctAnswers || 0) / questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setTimeRemaining(timeLimit);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <motion.div 
        className="card text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">
          {questions.length} questions
          {timeLimit && ` • ${Math.floor(timeLimit / 60)} minutes`}
        </p>
        <motion.button
          onClick={() => setIsStarted(true)}
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Commencer le Quiz
        </motion.button>
      </motion.div>
    );
  }

  if (showResults) {
    const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? (acc || 0) + 1 : (acc || 0);
    }, 0);
    
    return (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="card text-center">
          <h2 className="text-2xl font-bold mb-4">Résultats du Quiz</h2>
          <div className="text-4xl font-bold mb-2">
            {correctAnswers}/{questions.length}
          </div>
          <div className="text-xl text-gray-600 mb-4">
            {getScorePercentage()}%
          </div>
          
          <div className="mb-6">
            {getScorePercentage() >= 85 && (
              <p className="text-green-600 font-semibold">🏆 Excellent ! Vous êtes prêt pour l'examen !</p>
            )}
            {getScorePercentage() >= 70 && getScorePercentage() < 85 && (
              <p className="text-blue-600 font-semibold">👍 Bon niveau ! Révisez quelques points faibles.</p>
            )}
            {getScorePercentage() >= 50 && getScorePercentage() < 70 && (
              <p className="text-yellow-600 font-semibold">📚 Continuez vos révisions, vous progressez !</p>
            )}
            {getScorePercentage() < 50 && (
              <p className="text-red-600 font-semibold">⚠️ Révision approfondie nécessaire.</p>
            )}
          </div>

          <motion.button
            onClick={handleRestart}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Recommencer
          </motion.button>
        </div>

        {/* Detailed Results */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Résultats détaillés :</h3>
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="card">
                <div className="flex items-start space-x-3">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  
                  <div className="flex-1">
                    <p className="font-medium mb-2">{question.question}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      Votre réponse : {userAnswer !== null ? question.options[userAnswer] : 'Non répondu'}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-600 mb-2">
                        Bonne réponse : {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">{question.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      key={currentQuestionIndex}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Question {currentQuestionIndex + 1} sur {questions.length}
        </div>
        {timeRemaining !== undefined && timeRemaining !== null && (
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className={`font-mono ${timeRemaining < 300 ? 'text-red-600' : ''}`}>
              {formatTime(timeRemaining || 0)}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`
                w-full p-4 text-left rounded-lg border-2 transition-all
                ${selectedAnswer === index 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'
                }
              `}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)})
              </span>
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <motion.button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: currentQuestionIndex === 0 ? 1 : 1.05 }}
          whileTap={{ scale: currentQuestionIndex === 0 ? 1 : 0.95 }}
        >
          Précédent
        </motion.button>

        <motion.button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: selectedAnswer === null ? 1 : 1.05 }}
          whileTap={{ scale: selectedAnswer === null ? 1 : 0.95 }}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Terminer' : 'Suivant'}
        </motion.button>
      </div>
    </motion.div>
  );
}