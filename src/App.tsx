import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FondamentauxPage from './pages/FondamentauxPage'
import LearningHubPage from './pages/LearningHubPage'
import SVSPage from './pages/SVSPage'
import PratiquesPage from './pages/PratiquesPage'
import FlashcardsPage from './pages/FlashcardsPage'
import QuizPage from './pages/QuizPage'
import AstucesConseilsPage from './pages/AstucesConseilsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ConceptsPage from './pages/ConceptsPage'
import DimensionsPage from './pages/DimensionsPage'
import PrincipesPage from './pages/PrincipesPage'
import ChaineValeurPage from './pages/ChaineValeurPage'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Hub d'apprentissage */}
          <Route path="learn">
            <Route index element={<LearningHubPage />} />
            <Route path="concepts" element={<ConceptsPage />} />
            <Route path="principles" element={<PrincipesPage />} />
            <Route path="dimensions" element={<DimensionsPage />} />
            <Route path="svs" element={<SVSPage />} />
            <Route path="practices" element={<PratiquesPage />} />
            <Route path="chain" element={<ChaineValeurPage />} />
          </Route>
          
          {/* Routes de compatibilité */}
          <Route path="fondamentaux" element={<FondamentauxPage />} />
          <Route path="concepts" element={<ConceptsPage />} />
          <Route path="dimensions" element={<DimensionsPage />} />
          <Route path="svs" element={<SVSPage />} />
          <Route path="pratiques" element={<PratiquesPage />} />
          
          {/* Autres sections */}
          <Route path="flashcards" element={<FlashcardsPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="astuces-conseils" element={<AstucesConseilsPage />} />
          
          {/* Routes de compatibilité anciennes */}
          <Route path="examen" element={<AstucesConseilsPage />} />
          <Route path="etudes-cas" element={<CaseStudiesPage />} />
          <Route path="cas-pratiques" element={<CaseStudiesPage />} />
        </Route>
      </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App