import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Zap, Settings, Brain, HelpCircle, Trophy, BarChart3 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
  progress: number;
}

const navigationItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3, color: 'text-gray-600' },
  { id: 'concepts', label: 'Concepts', icon: BookOpen, color: 'text-blue-600' },
  { id: 'principles', label: 'Principes', icon: Target, color: 'text-green-600' },
  { id: 'dimensions', label: '4 Dimensions', icon: Users, color: 'text-purple-600' },
  { id: 'chain', label: 'Chaîne Valeur', icon: Zap, color: 'text-yellow-600' },
  { id: 'practices', label: 'Pratiques', icon: Settings, color: 'text-red-600' },
  { id: 'flashcards', label: 'Flashcards', icon: Brain, color: 'text-indigo-600' },
  { id: 'quiz', label: 'Quiz', icon: HelpCircle, color: 'text-pink-600' },
  { id: 'exam', label: 'Examen', icon: Trophy, color: 'text-orange-600' }
];

export function Layout({ children, activeSection, onSectionChange, progress }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                🎯 ITIL v4 Foundation
              </h1>
              <p className="text-gray-600 mt-1">Guide de Révision Interactif</p>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">Progression</div>
              <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">{Math.round(progress)}%</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 min-w-max
                    ${isActive 
                      ? 'bg-primary-100 text-primary-700 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? item.color : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Site de révision ITIL v4 Foundation - Bonne chance pour votre examen ! 🍀
          </p>
        </div>
      </footer>
    </div>
  );
}