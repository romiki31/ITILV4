import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, Target, Brain, Award } from 'lucide-react';
import { UserProgress } from '../types';

interface StatsPanelProps {
  progress: UserProgress;
  overallProgress: number;
  averageScore: number;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export function StatsPanel({ progress, overallProgress, averageScore }: StatsPanelProps) {
  // Process quiz scores for chart
  const categoryScores = Object.entries(progress.quizScores).map(([category, scores]) => ({
    category: category.charAt(0).toUpperCase() + category.slice(1),
    average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
    attempts: scores.length
  }));

  const pieData = [
    { name: 'Étudié', value: progress.conceptsStudied.size },
    { name: 'Restant', value: Math.max(0, 50 - progress.conceptsStudied.size) }
  ];

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div 
          className="card text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{overallProgress}%</div>
          <div className="text-sm text-gray-600">Progression</div>
        </motion.div>

        <motion.div 
          className="card text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Brain className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{progress.conceptsStudied.size}</div>
          <div className="text-sm text-gray-600">Concepts étudiés</div>
        </motion.div>

        <motion.div 
          className="card text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{averageScore}%</div>
          <div className="text-sm text-gray-600">Score moyen</div>
        </motion.div>

        <motion.div 
          className="card text-center"
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">{progress.streak}</div>
          <div className="text-sm text-gray-600">Jours consécutifs</div>
        </motion.div>
      </div>

      {/* Progress Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Progression par catégorie</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [value, name === 'Étudié' ? 'Concepts étudiés' : 'Concepts restants']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quiz Performance */}
      {categoryScores.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Performance aux quiz</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'average' ? `${value}%` : value, 
                    name === 'average' ? 'Score moyen' : 'Tentatives'
                  ]}
                />
                <Bar dataKey="average" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Study Time */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="w-6 h-6 text-gray-600" />
          <h3 className="text-lg font-semibold">Temps d'étude</h3>
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-2">
          {formatTime(progress.totalTimeStudied)}
        </div>
        <div className="text-gray-600">Temps total passé à étudier</div>
      </div>

      {/* Recommendations */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Recommandations</h3>
        <div className="space-y-3">
          {averageScore < 70 && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                📚 Votre score moyen est de {averageScore}%. Concentrez-vous sur la révision des concepts fondamentaux.
              </p>
            </div>
          )}
          
          {progress.conceptsStudied.size < 25 && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                🎯 Vous avez étudié {progress.conceptsStudied.size} concepts. Continuez à explorer les différentes sections !
              </p>
            </div>
          )}
          
          {progress.streak === 0 && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                🔥 Commencez une série d'étude quotidienne pour améliorer votre rétention !
              </p>
            </div>
          )}
          
          {averageScore >= 85 && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                🏆 Excellent ! Vous êtes prêt pour l'examen. Continuez avec des simulations !
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}