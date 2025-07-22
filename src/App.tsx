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
import { quizQuestions, examSimulationQuestions } from './data/quiz';
import { motion } from 'framer-motion';
import { Clock, Target, Award, BookOpen, Users, Lightbulb } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Testez vos connaissances avec ces questions d'entraînement.
              </p>
            </motion.div>

            <QuizComponent 
              questions={quizQuestions.slice(0, 10)}
              onComplete={handleQuizComplete}
              title="Quiz d'Entraînement"
            />
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
              
              <QuizComponent 
                questions={examSimulationQuestions}
                onComplete={handleQuizComplete}
                title="Simulation d'Examen ITIL v4 Foundation"
                timeLimit={3600} // 60 minutes
              />
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