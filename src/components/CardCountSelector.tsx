import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface CardCountSelectorProps {
  totalCards: number
  onSelect: (count: number) => void
  onBack: () => void
}

const CardCountSelector: React.FC<CardCountSelectorProps> = ({ 
  totalCards, 
  onSelect, 
  onBack 
}) => {
  const [customCount, setCustomCount] = useState('')
  
  const presetCounts = [5, 10, 15, 20]
  const validPresets = presetCounts.filter(count => count <= totalCards)
  
  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const count = parseInt(customCount)
    if (count > 0 && count <= totalCards) {
      onSelect(count)
    }
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <button 
          onClick={onBack}
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center mb-4"
        >
          <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
          Retour aux modes
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Mode aléatoire
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Combien de cartes souhaitez-vous réviser ? (Total disponible: {totalCards})
        </p>
      </div>

      <div className="space-y-4">
        {/* Sélections prédéfinies */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {validPresets.map(count => (
            <button
              key={count}
              onClick={() => onSelect(count)}
              className="p-4 text-center border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-400 hover:shadow-md dark:hover:border-primary-500 transition-all"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                cartes
              </div>
            </button>
          ))}
        </div>

        {/* Option "Toutes les cartes" */}
        <button
          onClick={() => onSelect(totalCards)}
          className="w-full p-4 text-center border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-400 hover:shadow-md dark:hover:border-primary-500 transition-all"
        >
          <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Toutes les cartes ({totalCards})
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Révision complète
          </div>
        </button>

        {/* Nombre personnalisé */}
        <div className="border-t pt-4">
          <form onSubmit={handleCustomSubmit} className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="custom-count" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre personnalisé
              </label>
              <input
                id="custom-count"
                type="number"
                min="1"
                max={totalCards}
                value={customCount}
                onChange={(e) => setCustomCount(e.target.value)}
                placeholder={`Entre 1 et ${totalCards}`}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={!customCount || parseInt(customCount) < 1 || parseInt(customCount) > totalCards}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CardCountSelector