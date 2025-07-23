import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FondamentauxPage from './pages/FondamentauxPage'
import SVSPage from './pages/SVSPage'
import PratiquesPage from './pages/PratiquesPage'
import FlashcardsPage from './pages/FlashcardsPage'
import QuizPage from './pages/QuizPage'
import ExamenPage from './pages/ExamenPage'
import CaseStudiesPage from './pages/CaseStudiesPage'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="fondamentaux" element={<FondamentauxPage />} />
          <Route path="svs" element={<SVSPage />} />
          <Route path="pratiques" element={<PratiquesPage />} />
          <Route path="flashcards" element={<FlashcardsPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="examen" element={<ExamenPage />} />
          <Route path="etudes-cas" element={<CaseStudiesPage />} />
        </Route>
      </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App