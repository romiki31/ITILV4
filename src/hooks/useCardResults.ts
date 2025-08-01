import { useState, useEffect, useCallback } from 'react'

export interface CardResult {
  cardId: string
  wasCorrect: boolean
  timestamp: number
}

const STORAGE_KEY = 'itilv4_card_results'

export const useCardResults = () => {
  const [cardResults, setCardResults] = useState<Map<string, CardResult>>(new Map())
  
  // Fonction de chargement des résultats depuis localStorage
  const loadFromStorage = useCallback(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data = JSON.parse(saved) as CardResult[]
        const resultsMap = new Map(data.map(result => [result.cardId, result]))
        setCardResults(resultsMap)
      } else {
        setCardResults(new Map())
      }
    } catch (error) {
      console.error('Erreur lors du chargement des résultats:', error)
      setCardResults(new Map())
    }
  }, [])
  
  // Charger les résultats au montage du hook et écouter les changements
  useEffect(() => {
    loadFromStorage()
    
    // Listener pour les changements localStorage (même onglet via custom event)
    const handleStorageChange = () => {
      loadFromStorage()
    }
    
    // Écouter les changements localStorage entre onglets
    window.addEventListener('storage', handleStorageChange)
    
    // Écouter les changements internes (même onglet)
    window.addEventListener('cardResultsUpdated', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cardResultsUpdated', handleStorageChange)
    }
  }, [loadFromStorage])

  // Sauvegarder les résultats dans localStorage
  const saveToStorage = useCallback((results: Map<string, CardResult>) => {
    try {
      const data = Array.from(results.values())
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
    }
  }, [])

  // Enregistrer le résultat d'une carte
  const recordResult = useCallback((cardId: string, wasCorrect: boolean) => {
    const newResult: CardResult = {
      cardId,
      wasCorrect,
      timestamp: Date.now()
    }
    
    setCardResults(prev => {
      const newMap = new Map(prev)
      newMap.set(cardId, newResult)
      saveToStorage(newMap)
      
      // Notifier tous les hooks useCardResults du changement
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('cardResultsUpdated'))
      }, 10) // Petit délai pour s'assurer que localStorage est mis à jour
      
      return newMap
    })
  }, [saveToStorage])

  // Obtenir les cartes "à revoir" (dernière réponse incorrecte)
  const getIncorrectCards = useCallback((availableCardIds: string[]): string[] => {
    return availableCardIds.filter(cardId => {
      const result = cardResults.get(cardId)
      return result && !result.wasCorrect
    })
  }, [cardResults])

  // Obtenir les statistiques
  const getStats = useCallback(() => {
    const totalCards = cardResults.size
    const correctCards = Array.from(cardResults.values()).filter(r => r.wasCorrect).length
    const incorrectCards = totalCards - correctCards
    
    return {
      totalCards,
      correctCards,
      incorrectCards,
      accuracy: totalCards > 0 ? Math.round((correctCards / totalCards) * 100) : 0
    }
  }, [cardResults])

  // Réinitialiser tous les résultats
  const resetAllResults = useCallback(() => {
    setCardResults(new Map())
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return {
    recordResult,
    getIncorrectCards,
    getStats,
    resetAllResults,
    cardResults
  }
}