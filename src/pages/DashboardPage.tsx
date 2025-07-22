import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Download, Calendar, Target } from 'lucide-react';
import { StatsPanel } from '../components/StatsPanel';
import { ExportDialog } from '../components/ExportDialog';
import { useProgress } from '../hooks/useProgress';

export function DashboardPage() {
  const { progress, getOverallProgress, getAverageQuizScore } = useProgress();
  const [showExportDialog, setShowExportDialog] = useState(false);
  
  const overallProgress = getOverallProgress();
  const averageScore = getAverageQuizScore();

  // Calculate study recommendation
  const getStudyRecommendation = () => {
    if (overallProgress < 25) {
      return {
        title: "🎯 Commencez par les fondamentaux",
        description: "Explorez les concepts de base et les principes directeurs d'ITIL v4.",
        priority: "high"
      };
    } else if (overallProgress < 50) {
      return {
        title: "📚 Approfondissez vos connaissances",
        description: "Étudiez les 4 dimensions et la chaîne de valeur des services.",
        priority: "medium"
      };
    } else if (overallProgress < 75) {
      return {
        title: "🛠 Maîtrisez les pratiques",
        description: "Concentrez-vous sur les pratiques ITIL essentielles pour l'examen.",
        priority: "medium"
      };
    } else if (averageScore < 70) {
      return {
        title: "💪 Renforcez par la pratique",
        description: "Faites plus de quiz pour améliorer votre score moyen.",
        priority: "high"
      };
    } else {
      return {
        title: "🏆 Prêt pour l'examen !",
        description: "Passez des simulations d'examen pour vous familiariser avec le format.",
        priority: "low"
      };
    }
  };

  const recommendation = getStudyRecommendation();

  // Calculate days until typical exam (assuming 2 weeks preparation)
  const examDate = new Date();
  examDate.setDate(examDate.getDate() + 14);
  const daysUntilExam = Math.ceil((examDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          📊 Tableau de Bord
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Suivez votre progression et analysez vos performances d'apprentissage.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.button
          onClick={() => setShowExportDialog(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-4 h-4" />
          <span>Exporter les données</span>
        </motion.button>
      </div>

      {/* Study Recommendation */}
      <motion.div
        className={`card border-l-4 ${
          recommendation.priority === 'high' ? 'border-red-500 bg-red-50' :
          recommendation.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
          'border-green-500 bg-green-50'
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-start space-x-3">
          <Target className={`w-6 h-6 mt-1 ${
            recommendation.priority === 'high' ? 'text-red-600' :
            recommendation.priority === 'medium' ? 'text-yellow-600' :
            'text-green-600'
          }`} />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              {recommendation.title}
            </h3>
            <p className="text-gray-700">
              {recommendation.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Exam Countdown */}
      <motion.div
        className="card text-center bg-gradient-to-r from-purple-100 to-pink-100"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Objectif d'Examen
        </h3>
        <div className="text-3xl font-bold text-purple-600 mb-2">
          {daysUntilExam} jours
        </div>
        <p className="text-gray-600">
          Temps recommandé pour une préparation complète
        </p>
      </motion.div>

      {/* Stats Panel */}
      <StatsPanel 
        progress={progress}
        overallProgress={overallProgress}
        averageScore={averageScore}
      />

      {/* Export Dialog */}
      <ExportDialog
        isOpen={showExportDialog}
        onClose={() => setShowExportDialog(false)}
        progress={progress}
        overallProgress={overallProgress}
        averageScore={averageScore}
      />
    </div>
  );
}