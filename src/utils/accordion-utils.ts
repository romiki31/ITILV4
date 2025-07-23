// Utilitaire pour standardiser les icônes d'accordéon à travers toute l'application

export const getAccordionIcon = (isOpen: boolean) => {
  return isOpen ? 'rotate-90' : ''
}

export const accordionTransition = 'transition-transform duration-200'

// Classes pour les accordéons selon les catégories
export const accordionColors = {
  fondamentaux: 'text-fondamentaux-500',
  pratiques: 'text-pratiques-500',
  svs: 'text-svs-500',
  quiz: 'text-quiz-500',
  revision: 'text-revision-500',
  etudecas: 'text-etudecas-500',
  default: 'text-gray-500'
}