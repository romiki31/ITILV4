import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et titre */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <BookOpen size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">ITIL v4</h1>
              <p className="text-xs text-gray-500 -mt-1">Foundation</p>
            </div>
          </Link>

          {/* Navigation principale */}
          <nav className="flex space-x-3 md:space-x-4">
            <Link 
              to="/fondamentaux" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Fondamentaux
            </Link>
            <Link 
              to="/svs" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              SVS
            </Link>
            <Link 
              to="/pratiques" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Pratiques
            </Link>
            <Link 
              to="/etudes-cas" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Cas
            </Link>
            <Link 
              to="/flashcards" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Révision
            </Link>
            <Link 
              to="/quiz" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Quiz
            </Link>
            <Link 
              to="/examen" 
              className="text-gray-700 hover:text-primary-500 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Examen
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header