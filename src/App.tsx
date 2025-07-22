import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ConceptsPage } from './pages/ConceptsPage';
import { PrinciplesPage } from './pages/PrinciplesPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { QuizComponent } from './components/QuizComponent';
import { ConceptCard } from './components/ConceptCard';
import { DashboardPage } from './pages/DashboardPage';
import { useProgress } from './hooks/useProgress';
import { dimensions, chainActivities, practices } from './data/concepts';
import { generateRandomQuiz, generateExamSimulation } from './data/comprehensive-quiz';
import { motion } from 'framer-motion';
import { Clock, Target, Award, BookOpen, Users, Lightbulb } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [quizQuestions, setQuizQuestions] = useState(generateRandomQuiz());
  const [examQuestions, setExamQuestions] = useState(generateExamSimulation());
  const [quizKey, setQuizKey] = useState(Date.now()); // Clé dynamique pour forcer la réinitialisation
  
  const { 
    progress, 
    updateConceptStudied, 
    updateQuizScore,
    getOverallProgress,
    getAverageQuizScore,
    updateStreak
  } = useProgress();

  const handleConceptStudied = (conceptId: string) => {
    updateConceptStudied(conceptId);
    updateStreak();
  };

  const handleQuizComplete = (score: number, total: number) => {
    updateQuizScore(activeSection, Math.round((score / total) * 100));
    updateStreak();
    
    // Générer un nouveau quiz aléatoire après completion
    if (activeSection === 'quiz') {
      setQuizQuestions(generateRandomQuiz());
      setQuizKey(Date.now()); // Forcer la réinitialisation du composant
    } else if (activeSection === 'exam') {
      setExamQuestions(generateExamSimulation());
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardPage />;
        
      case 'concepts':
        return <ConceptsPage onConceptStudied={handleConceptStudied} />;
      
      case 'principles':
        return <PrinciplesPage onConceptStudied={handleConceptStudied} />;
      
      case 'dimensions':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                🔄 Les 4 Dimensions
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ces dimensions doivent être considérées collectivement pour une gestion efficace des services.
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {dimensions.map((dimension) => (
                <ConceptCard 
                  key={dimension.id}
                  concept={dimension} 
                  onStudied={handleConceptStudied}
                />
              ))}
            </div>
          </div>
        );
      
      case 'chain':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ⚡ Chaîne de Valeur des Services
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Les 6 activités qui transforment la demande et l'opportunité en valeur.
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {chainActivities.map((activity) => (
                <ConceptCard 
                  key={activity.id}
                  concept={activity} 
                  onStudied={handleConceptStudied}
                />
              ))}
            </div>
          </div>
        );
      
      case 'practices':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                🛠 Pratiques Clés
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Focus sur les pratiques les plus importantes pour l'examen Foundation.
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {practices.map((practice) => (
                <ConceptCard 
                  key={practice.id}
                  concept={practice} 
                  onStudied={handleConceptStudied}
                />
              ))}
            </div>
          </div>
        );
      
      case 'flashcards':
        return <FlashcardsPage />;
      
      case 'quiz':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ❓ Quiz d'Entraînement
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
                Testez vos connaissances avec ces questions d'entraînement.
              </p>
              <p className="text-sm text-blue-600 font-medium">
                🎯 Plus de 100 questions disponibles • 10 nouvelles à chaque fois
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Quiz Options */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card bg-blue-50 border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Quiz Aléatoire</h3>
                  <p className="text-sm text-blue-700 mb-3">
                    10 questions variées sélectionnées parmi plus de 80 questions authentiques
                  </p>
                  <div className="text-xs text-blue-600">
                    3 faciles • 5 moyennes • 2 difficiles
                  </div>
                </div>
                <div className="card bg-green-50 border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">Questions Récentes</h3>
                  <p className="text-sm text-green-700 mb-3">
                    Basées sur l'examen officiel 2024 avec explications détaillées
                  </p>
                  <div className="text-xs text-green-600">
                    Difficulté progressive
                  </div>
                </div>
                <div className="card bg-purple-50 border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Nouveau Quiz</h3>
                  <p className="text-sm text-purple-700 mb-3">
                    Chaque quiz vous propose 10 nouvelles questions différentes
                  </p>
                  <button
                    onClick={() => {
                      setQuizQuestions(generateRandomQuiz());
                      setQuizKey(Date.now()); // Générer nouvelle clé pour forcer la réinitialisation
                    }}
                    className="text-sm bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm"
                  >
                    🎲 Générer nouveau quiz
                  </button>
                </div>
              </div>

              <QuizComponent 
                key={`quiz-${quizKey}`} // Utiliser la clé dynamique
                questions={quizQuestions}
                onComplete={handleQuizComplete}
                onRestart={() => {
                  setQuizQuestions(generateRandomQuiz());
                  setQuizKey(Date.now()); // Générer nouvelle clé pour forcer la réinitialisation
                }}
                title="Quiz d'Entraînement (10 questions)"
              />
            </div>
          </div>
        );
      
      case 'exam':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                🏆 Préparation à l'Examen
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tout ce qu'il faut savoir pour réussir l'examen ITIL v4 Foundation.
              </p>
            </motion.div>

            {/* Exam Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40</div>
                <div className="text-gray-600">Questions</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">60</div>
                <div className="text-gray-600">Minutes</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                <div className="text-gray-600">Score requis</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">26</div>
                <div className="text-gray-600">Bonnes réponses</div>
              </div>
            </div>

            {/* Exam Tips */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">Stratégie de Réponse</h3>
                </div>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1. Lire 2 fois :</strong> Le piège est souvent dans les nuances</li>
                  <li><strong>2. Éliminer 2 fausses :</strong> Il reste 2 plausibles</li>
                  <li><strong>3. Appliquer un principe :</strong> Lequel guide la réponse ?</li>
                  <li><strong>4. Si incertain :</strong> Choisir la plus simple et pratique</li>
                </ol>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-lg font-semibold">Pièges Fréquents</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Mots absolus :</strong> "Toujours/Jamais" → Méfiance</li>
                  <li><strong>Incident vs Problème :</strong> Restaurer vs Cause racine</li>
                  <li><strong>Ordre des principes :</strong> Optimiser AVANT automatiser</li>
                  <li><strong>Co-création :</strong> Valeur JAMAIS créée unilatéralement</li>
                </ul>
              </div>
            </div>

            {/* Simulation Exam */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-gold-500" />
                Simulation d'Examen
              </h3>
              <p className="text-gray-600 mb-6">
                Passez un examen blanc dans les conditions réelles : 40 questions en 60 minutes.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Conditions d'examen réelles</h4>
                    <p className="text-sm text-gray-600">
                      40 questions • Distribution officielle • 60 minutes chronométrées
                    </p>
                  </div>
                  <button
                    onClick={() => setExamQuestions(generateExamSimulation())}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
                  >
                    🎲 Nouvel examen
                  </button>
                </div>
                
                <QuizComponent 
                  key={`exam-${Date.now()}`} // Force complète réinitialisation avec timestamp unique
                  questions={examQuestions}
                  onComplete={handleQuizComplete}
                  onRestart={() => setExamQuestions(generateExamSimulation())}
                  title="Simulation d'Examen ITIL v4 Foundation"
                  timeLimit={3600} // 60 minutes
                />
              </div>
            </div>
          </div>
        );
      
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Layout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      progress={getOverallProgress()}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;