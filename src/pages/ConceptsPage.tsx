import React, { useState } from 'react'
import { 
  Search, 
  Filter, 
  BookOpen, 
  Target, 
  Lightbulb,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react'

const ConceptsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const categories = [
    { id: 'all', label: 'Tous les concepts', count: 40 },
    { id: 'concepts-fondamentaux', label: 'Concepts fondamentaux', count: 8 },
    { id: 'principes-directeurs', label: '7 Principes directeurs', count: 7 },
    { id: 'dimensions', label: '4 Dimensions', count: 4 },
    { id: 'systeme-valeur', label: 'Système de valeur', count: 6 },
    { id: 'pratiques', label: 'Pratiques ITIL', count: 15 }
  ]

  const difficulties = [
    { id: 'all', label: 'Toutes difficultés' },
    { id: 'easy', label: 'Facile', color: 'bg-green-100 text-green-700' },
    { id: 'medium', label: 'Moyen', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'hard', label: 'Difficile', color: 'bg-red-100 text-red-700' }
  ]

  // Données d'exemple (seront remplacées par les vraies données)
  const concepts = [
    {
      id: '1',
      title: 'Valeur (Value)',
      category: 'concepts-fondamentaux',
      difficulty: 'easy',
      description: 'La perception des bénéfices, utilité et importance par les parties prenantes. TOUJOURS co-créée.',
      keyPoints: ['Co-création obligatoire', 'Subjective et contextuelle', 'Évolue dans le temps'],
      examTips: ['PIÈGE: La valeur n\'est JAMAIS créée unilatéralement'],
      progress: 100,
      isFavorite: true,
      timeToRead: 5
    },
    {
      id: '2',
      title: 'Service vs Produit',
      category: 'concepts-fondamentaux',
      difficulty: 'medium',
      description: 'SERVICE = MOYEN de faciliter des résultats | PRODUIT = CONFIGURATION de ressources',
      keyPoints: ['Service transfère risques', 'Produit = ressources configurées', 'Complémentaires'],
      examTips: ['Distinction cruciale pour l\'examen'],
      progress: 75,
      isFavorite: false,
      timeToRead: 7
    },
    {
      id: '3',
      title: 'Privilégier la Valeur',
      category: 'principes-directeurs',
      difficulty: 'medium',
      description: 'Tout doit être lié à la valeur pour les parties prenantes',
      keyPoints: ['Identifier qui valorise quoi', 'Éliminer sans valeur ajoutée', 'Mesurer continuellement'],
      examTips: ['Première étape = comprendre la valeur'],
      progress: 50,
      isFavorite: false,
      timeToRead: 8
    }
  ]

  const filteredConcepts = concepts.filter(concept => {
    const matchesSearch = concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concept.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || concept.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || concept.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyBadge = (difficulty: string) => {
    const difficultyConfig = {
      easy: { label: 'Facile', color: 'bg-green-100 text-green-700' },
      medium: { label: 'Moyen', color: 'bg-yellow-100 text-yellow-700' },
      hard: { label: 'Difficile', color: 'bg-red-100 text-red-700' }
    }
    const config = difficultyConfig[difficulty as keyof typeof difficultyConfig]
    return <span className={`badge ${config.color}`}>{config.label}</span>
  }

  const getCategoryLabel = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.label || categoryId
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Concepts ITIL v4</h1>
          <p className="text-gray-600">
            Maîtrisez tous les concepts essentiels pour réussir votre certification Foundation
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            {filteredConcepts.length} concept{filteredConcepts.length > 1 ? 's' : ''}
          </div>
          <div className="w-32">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: '68%' }} 
              />
            </div>
            <div className="text-xs text-gray-600 mt-1">68% maîtrisé</div>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="card">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Recherche */}
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un concept..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Catégorie */}
          <select 
            className="input w-full lg:w-64"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label} ({category.count})
              </option>
            ))}
          </select>

          {/* Difficulté */}
          <select 
            className="input w-full lg:w-48"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            {difficulties.map(difficulty => (
              <option key={difficulty.id} value={difficulty.id}>
                {difficulty.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <BookOpen size={20} className="text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">40</div>
          <div className="text-sm text-gray-600">Concepts totaux</div>
        </div>
        <div className="card text-center">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle size={20} className="text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">27</div>
          <div className="text-sm text-gray-600">Maîtrisés</div>
        </div>
        <div className="card text-center">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Target size={20} className="text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">8</div>
          <div className="text-sm text-gray-600">À réviser</div>
        </div>
        <div className="card text-center">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Star size={20} className="text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-600">Favoris</div>
        </div>
      </div>

      {/* Liste des concepts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredConcepts.map((concept) => (
          <div key={concept.id} className="card card-hover">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{concept.title}</h3>
                  <button className={`text-yellow-500 hover:text-yellow-600 ${concept.isFavorite ? 'fill-current' : ''}`}>
                    <Star size={18} />
                  </button>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  {getDifficultyBadge(concept.difficulty)}
                  <span className="badge badge-primary text-xs">
                    {getCategoryLabel(concept.category)}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock size={12} className="mr-1" />
                    {concept.timeToRead} min
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{concept.description}</p>

            {/* Points clés */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Points clés :</h4>
              <ul className="space-y-1">
                {concept.keyPoints.slice(0, 3).map((point, index) => (
                  <li key={index} className="text-xs text-gray-600 flex items-start">
                    <CheckCircle size={12} className="text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Conseil d'examen */}
            {concept.examTips.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center">
                  <Lightbulb size={14} className="text-yellow-500 mr-1" />
                  <span className="text-xs font-medium text-yellow-700">Conseil d'examen</span>
                </div>
                <p className="text-xs text-yellow-700 mt-1">{concept.examTips[0]}</p>
              </div>
            )}

            {/* Progression */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-600">Progression</span>
                <span className="text-xs text-gray-500">{concept.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${concept.progress}%` }} 
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="btn btn-primary text-sm flex-1">
                Étudier le concept
              </button>
              <button className="btn btn-secondary text-sm">
                Quiz
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredConcepts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun concept trouvé</h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche ou de filtrage
          </p>
        </div>
      )}
    </div>
  )
}

export default ConceptsPage