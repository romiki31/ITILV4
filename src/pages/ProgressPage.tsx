import React, { useState } from 'react'
import { 
  TrendingUp, 
  Award, 
  Target, 
  Clock, 
  Calendar,
  BookOpen,
  Brain,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Star,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'

const ProgressPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7days')

  const overallStats = {
    conceptsMastered: 27,
    totalConcepts: 40,
    averageQuizScore: 78,
    totalQuizzes: 24,
    flashcardsReviewed: 156,
    studyStreak: 12,
    totalStudyTime: 18.5, // heures
    weeklyGoal: 5, // heures
    readinessScore: 85 // sur 100
  }

  const categoryProgress = [
    {
      category: 'Concepts fondamentaux',
      progress: 95,
      mastered: 8,
      total: 8,
      averageScore: 92,
      color: 'bg-green-500',
      status: 'excellent'
    },
    {
      category: 'Principes directeurs',
      progress: 100,
      mastered: 7,
      total: 7, 
      averageScore: 88,
      color: 'bg-green-500',
      status: 'excellent'
    },
    {
      category: '4 Dimensions',
      progress: 75,
      mastered: 3,
      total: 4,
      averageScore: 72,
      color: 'bg-yellow-500',
      status: 'good'
    },
    {
      category: 'Système de valeur',
      progress: 67,
      mastered: 4,
      total: 6,
      averageScore: 68,
      color: 'bg-orange-500',
      status: 'needs-work'
    },
    {
      category: 'Pratiques ITIL',
      progress: 53,
      mastered: 8,
      total: 15,
      averageScore: 65,
      color: 'bg-red-500',
      status: 'needs-work'
    }
  ]

  const achievements = [
    {
      id: '1',
      title: 'Premier Quiz',
      description: 'Complété votre premier quiz',
      icon: '🎯',
      unlocked: true,
      date: '2024-07-10'
    },
    {
      id: '2', 
      title: 'Série de 7',
      description: '7 jours d\'étude consécutifs',
      icon: '🔥',
      unlocked: true,
      date: '2024-07-15'
    },
    {
      id: '3',
      title: 'Expert Concepts',
      description: 'Maîtrisé tous les concepts fondamentaux',
      icon: '📚',
      unlocked: true,
      date: '2024-07-18'
    },
    {
      id: '4',
      title: 'Score Parfait',
      description: 'Obtenu 100% à un quiz',
      icon: '⭐',
      unlocked: false
    },
    {
      id: '5',
      title: 'Flashcard Master',
      description: 'Révisé 200 flashcards',
      icon: '🃏',
      unlocked: false
    },
    {
      id: '6',
      title: 'Prêt pour l\'examen',
      description: 'Atteint 90% de préparation',
      icon: '🏆',
      unlocked: false
    }
  ]

  const weeklyData = [
    { day: 'Lun', studyTime: 2.5, quizzes: 2, concepts: 3 },
    { day: 'Mar', studyTime: 1.8, quizzes: 1, concepts: 2 },
    { day: 'Mer', studyTime: 3.2, quizzes: 3, concepts: 4 },
    { day: 'Jeu', studyTime: 2.1, quizzes: 2, concepts: 2 },
    { day: 'Ven', studyTime: 1.9, quizzes: 1, concepts: 1 },
    { day: 'Sam', studyTime: 2.8, quizzes: 2, concepts: 3 },
    { day: 'Dim', studyTime: 2.2, quizzes: 1, concepts: 2 }
  ]

  const recentActivity = [
    {
      type: 'quiz',
      title: 'Quiz Simulation d\'examen',
      score: 85,
      time: '2h',
      date: 'Aujourd\'hui'
    },
    {
      type: 'concept',
      title: 'Gestion des Incidents',
      progress: 100,
      time: '45min',
      date: 'Hier'
    },
    {
      type: 'flashcard',
      title: 'Révision Principes directeurs',
      cards: 15,
      time: '20min', 
      date: 'Hier'
    },
    {
      type: 'quiz',
      title: 'Quiz Pratiques ITIL',
      score: 72,
      time: '30min',
      date: 'Il y a 2 jours'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50'
      case 'good': return 'text-yellow-600 bg-yellow-50'
      case 'needs-work': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'quiz': return Brain
      case 'concept': return BookOpen
      case 'flashcard': return CreditCard
      default: return Activity
    }
  }

  return (
    <div className="space-y-8">
      {/* Header avec stats principales */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Votre Progression</h1>
          <p className="text-gray-600">
            Suivez vos performances et identifiez les domaines à améliorer
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select 
            className="input w-32"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7days">7 jours</option>
            <option value="30days">30 jours</option>
            <option value="90days">90 jours</option>
            <option value="all">Tout</option>
          </select>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{overallStats.readinessScore}%</div>
            <div className="text-sm text-gray-600">Prêt pour l'examen</div>
          </div>
        </div>
      </div>

      {/* Métriques principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen size={24} className="text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {overallStats.conceptsMastered}/{overallStats.totalConcepts}
              </div>
              <div className="text-sm text-gray-600">Concepts maîtrisés</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(overallStats.conceptsMastered / overallStats.totalConcepts) * 100}%` }} 
              />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target size={24} className="text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{overallStats.averageQuizScore}%</div>
              <div className="text-sm text-gray-600">Score moyen quiz</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {overallStats.totalQuizzes} quiz complétés
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CreditCard size={24} className="text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{overallStats.flashcardsReviewed}</div>
              <div className="text-sm text-gray-600">Cartes révisées</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-600">
            +12 aujourd'hui
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <div className="text-xl">🔥</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{overallStats.studyStreak}</div>
              <div className="text-sm text-gray-600">Jours de suite</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {overallStats.totalStudyTime}h cette semaine
          </div>
        </div>
      </div>

      {/* Progression par catégorie */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Progression par domaine</h2>
        <div className="space-y-4">
          {categoryProgress.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{item.category}</h3>
                  <p className="text-sm text-gray-600">
                    {item.mastered}/{item.total} concepts • Score moyen: {item.averageScore}%
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status === 'excellent' && '🟢 Excellent'}
                  {item.status === 'good' && '🟡 Bon'}
                  {item.status === 'needs-work' && '🔴 À travailler'}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="progress-bar">
                    <div 
                      className={`h-full rounded-full ${item.color} transition-all duration-300`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600 min-w-0">
                  {item.progress}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graphiques d'activité */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Activité hebdomadaire */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité cette semaine</h3>
          <div className="space-y-3">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 text-sm text-gray-600">{day.day}</div>
                <div className="flex-1 flex items-center space-x-2">
                  <div className="flex-1 bg-gray-100 rounded-full h-6 flex items-center">
                    <div 
                      className="bg-primary-500 h-6 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(day.studyTime / 4) * 100}%` }}
                    >
                      <span className="text-xs text-white font-medium">
                        {day.studyTime > 0.5 ? `${day.studyTime}h` : ''}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 w-16">
                    {day.quizzes} quiz
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600">
              Objectif hebdomadaire: {overallStats.weeklyGoal}h
            </div>
            <div className="progress-bar mt-1">
              <div 
                className="progress-fill" 
                style={{ width: `${Math.min((overallStats.totalStudyTime / overallStats.weeklyGoal) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`flex items-center space-x-3 p-3 rounded-lg border ${
                  achievement.unlocked 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200 opacity-50'
                }`}
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
                {achievement.unlocked && achievement.date && (
                  <div className="text-xs text-gray-500">{achievement.date}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activité récente */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Activité récente</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => {
            const Icon = getActivityIcon(activity.type)
            return (
              <div key={index} className="card">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-gray-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      {'score' in activity && (
                        <span>Score: {activity.score}%</span>
                      )}
                      {'progress' in activity && (
                        <span>Progression: {activity.progress}%</span>
                      )}
                      {'cards' in activity && (
                        <span>{activity.cards} cartes</span>
                      )}
                      <span>Durée: {activity.time}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {activity.date}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recommandations */}
      <div className="card bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          💡 Recommandations pour améliorer vos résultats
        </h3>
        <div className="space-y-3 text-sm text-blue-800">
          <div className="flex items-start space-x-2">
            <AlertTriangle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Focus sur les Pratiques ITIL :</strong> Votre score le plus faible (65%). 
              Révisez les 7 pratiques détaillées avant de passer l'examen.
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Target size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Objectif 85% :</strong> Vous êtes à 78% de moyenne. 
              Quelques simulations d'examen supplémentaires devraient suffire.
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Clock size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Excellent rythme :</strong> Continuez vos 2h d'étude quotidienne. 
              Vous devriez être prêt dans 1-2 semaines.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressPage