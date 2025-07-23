import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import ITILLogo from './ITILLogo'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { path: '/learn', label: 'Apprentissage', color: 'fondamentaux' },
    { path: '/flashcards', label: 'Révision', color: 'revision' },
    { path: '/quiz', label: 'Entraînement', color: 'quiz' },
    { path: '/astuces-conseils', label: 'Astuces & Conseils', color: 'etudecas' }
  ]

  const getNavLinkClass = (path: string, color: string) => {
    const isActive = location.pathname === path
    const baseClass = 'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200'
    
    // Classes statiques pour que Tailwind puisse les détecter
    const colorClasses = {
      fondamentaux: {
        active: 'bg-fondamentaux-100 text-fondamentaux-700 dark:bg-fondamentaux-900/20 dark:text-fondamentaux-400',
        hover: 'hover:bg-fondamentaux-50 hover:text-fondamentaux-700 dark:hover:bg-fondamentaux-900/10 dark:hover:text-fondamentaux-400'
      },
      svs: {
        active: 'bg-svs-100 text-svs-700 dark:bg-svs-900/20 dark:text-svs-400',
        hover: 'hover:bg-svs-50 hover:text-svs-700 dark:hover:bg-svs-900/10 dark:hover:text-svs-400'
      },
      pratiques: {
        active: 'bg-pratiques-100 text-pratiques-700 dark:bg-pratiques-900/20 dark:text-pratiques-400',
        hover: 'hover:bg-pratiques-50 hover:text-pratiques-700 dark:hover:bg-pratiques-900/10 dark:hover:text-pratiques-400'
      },
      etudecas: {
        active: 'bg-etudecas-100 text-etudecas-700 dark:bg-etudecas-900/20 dark:text-etudecas-400',
        hover: 'hover:bg-etudecas-50 hover:text-etudecas-700 dark:hover:bg-etudecas-900/10 dark:hover:text-etudecas-400'
      },
      revision: {
        active: 'bg-revision-100 text-revision-700 dark:bg-revision-900/20 dark:text-revision-400',
        hover: 'hover:bg-revision-50 hover:text-revision-700 dark:hover:bg-revision-900/10 dark:hover:text-revision-400'
      },
      quiz: {
        active: 'bg-quiz-100 text-quiz-700 dark:bg-quiz-900/20 dark:text-quiz-400',
        hover: 'hover:bg-quiz-50 hover:text-quiz-700 dark:hover:bg-quiz-900/10 dark:hover:text-quiz-400'
      }
    }
    
    const colorConfig = colorClasses[color as keyof typeof colorClasses] || colorClasses.fondamentaux
    
    if (isActive) {
      return `${baseClass} ${colorConfig.active}`
    }
    
    return `${baseClass} text-gray-700 dark:text-gray-300 ${colorConfig.hover}`
  }
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et titre */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <ITILLogo size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">ITIL v4</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Foundation</p>
            </div>
          </Link>

          {/* Navigation desktop/tablette */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={getNavLinkClass(item.path, item.color)}
              >
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden text-xs">{item.label.split(' ')[0]}</span>
              </Link>
            ))}
            
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="ml-2 lg:ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile navigation */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Theme toggle button mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block ${getNavLinkClass(item.path, item.color)} min-h-[44px] flex items-center`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header