import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  BookOpen, 
  Brain, 
  CreditCard, 
  TrendingUp,
  X,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const location = useLocation()

  const navigation = [
    {
      name: 'Accueil',
      href: '/',
      icon: Home,
      description: 'Vue d\'ensemble et démarrage rapide'
    },
    {
      name: 'Concepts',
      href: '/concepts',
      icon: BookOpen,
      description: 'Concepts fondamentaux d\'ITIL v4',
      children: [
        { name: 'Concepts fondamentaux', href: '/concepts?category=fondamentaux' },
        { name: 'Principes directeurs', href: '/concepts?category=principes' },
        { name: '4 Dimensions', href: '/concepts?category=dimensions' },
        { name: 'Système de valeur', href: '/concepts?category=svs' },
        { name: 'Pratiques ITIL', href: '/concepts?category=pratiques' },
      ]
    },
    {
      name: 'Quiz',
      href: '/quiz',
      icon: Brain,
      description: 'Questions d\'entraînement et simulations',
      children: [
        { name: 'Quiz par catégorie', href: '/quiz?mode=category' },
        { name: 'Quiz par difficulté', href: '/quiz?mode=difficulty' },
        { name: 'Simulation d\'examen', href: '/quiz?mode=simulation' },
        { name: 'Quiz personnalisé', href: '/quiz?mode=custom' },
      ]
    },
    {
      name: 'Flashcards',
      href: '/flashcards',
      icon: CreditCard,
      description: 'Cartes de révision interactives',
      children: [
        { name: 'Révision libre', href: '/flashcards?mode=free' },
        { name: 'Mode challenge', href: '/flashcards?mode=challenge' },
        { name: 'Répétition espacée', href: '/flashcards?mode=spaced' },
      ]
    },
    {
      name: 'Progression',
      href: '/progress',
      icon: TrendingUp,
      description: 'Suivi de vos performances',
      children: [
        { name: 'Dashboard', href: '/progress' },
        { name: 'Statistiques', href: '/progress?view=stats' },
        { name: 'Achievements', href: '/progress?view=achievements' },
        { name: 'Plan d\'étude', href: '/progress?view=study-plan' },
      ]
    },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <div className="h-full flex flex-col">
      {/* Header sidebar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Navigation</h2>
        <button 
          onClick={onClose}
          className="lg:hidden p-1 text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              to={item.href}
              onClick={() => onClose()}
              className={`
                flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg
                transition-colors duration-200
                ${isActive(item.href) 
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                }
              `}
            >
              <item.icon 
                size={20} 
                className={`mr-3 ${isActive(item.href) ? 'text-primary-500 dark:text-primary-300' : 'text-gray-400 dark:text-gray-400'}`}
              />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-300 mt-0.5">{item.description}</div>
              </div>
              {item.children && (
                <ChevronRight size={16} className="text-gray-400 dark:text-gray-400" />
              )}
            </Link>

            {/* Sous-navigation */}
            {item.children && (
              <div className="ml-6 mt-2 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-4">
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.href}
                    onClick={() => onClose()}
                    className={`
                      block px-3 py-1.5 text-sm rounded-md transition-colors
                      ${isActive(child.href)
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Progress summary */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          Progression globale
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: '65%' }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mt-1">
          <span>65% complété</span>
          <span>26/40 concepts</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar