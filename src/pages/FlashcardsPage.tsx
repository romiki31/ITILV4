import React, { useState } from 'react'
import FlashcardComponent from '../components/FlashcardComponent'
import type { Flashcard } from '@/types'
import { 
  CreditCard, 
  Brain,
  AlertTriangle,
  BookOpen,
  Target,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const FlashcardsPage: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [showFlashcards, setShowFlashcards] = useState(false)

  const modes = [
    {
      id: 'theme',
      title: 'Révision par thème',
      description: 'Choisissez un domaine spécifique à réviser',
      icon: BookOpen,
      color: 'bg-blue-500',
      action: 'choose-category'
    },
    {
      id: 'random',
      title: 'Mode aléatoire',
      description: 'Mélange de toutes les questions pour une révision complète',
      icon: Brain,
      color: 'bg-green-500',
      action: 'start',
      recommended: true
    },
    {
      id: 'pieges',
      title: 'Focus pièges',
      description: 'Les questions pièges et distinctions importantes de l\'examen',
      icon: AlertTriangle,
      color: 'bg-red-500',
      action: 'start'
    }
  ]

  const categories = [
    { 
      id: 'definitions', 
      name: 'Définitions clés', 
      count: 25,
      icon: BookOpen,
      description: 'Valeur, Service, Produit, Outcome vs Output...'
    },
    { 
      id: 'principes', 
      name: '7 Principes directeurs', 
      count: 20,
      icon: Target,
      description: 'Application et reconnaissance des principes'
    },
    { 
      id: 'dimensions', 
      name: '4 Dimensions + PESTLE', 
      count: 15,
      icon: Shield,
      description: 'Identification et application des dimensions'
    },
    { 
      id: 'svs-cvs', 
      name: 'SVS et Chaîne de valeur', 
      count: 20,
      icon: Brain,
      description: 'Activités, flux de valeur, interactions'
    },
    { 
      id: 'pratiques', 
      name: '15 Pratiques Foundation', 
      count: 30,
      icon: CheckCircle,
      description: 'Objectifs, distinctions, relations CVS'
    }
  ]

  // Flashcards orientées examen ITIL v4
  const flashcards: Flashcard[] = [
    // Définitions clés
    {
      id: 'def-1',
      front: 'Quelle est la définition de la VALEUR selon ITIL 4 ?',
      back: 'La valeur est la perception des bénéfices, de l\'utilité et de l\'importance.\n\n⚠️ Point clé : La valeur est TOUJOURS co-créée entre le fournisseur et le consommateur.\n\n🎯 Piège d\'examen : Ne pas confondre avec "output" (ce qui est livré) - la valeur concerne le résultat perçu.',
      category: 'definitions',
      difficulty: 'easy',
      tags: ['valeur', 'concept-clé'],
      examTip: true
    },
    {
      id: 'def-2',
      front: 'Quelle est la différence entre un SERVICE et un PRODUIT ?',
      back: 'SERVICE : Moyen de co-créer de la valeur en facilitant les résultats que les clients veulent obtenir.\n\nPRODUIT : Configuration de ressources conçue pour offrir de la valeur.\n\n💡 Un service utilise un ou plusieurs produits.\n\n🎯 Exemple : Office 365 (produit) fait partie du service de productivité bureautique.',
      category: 'definitions',
      difficulty: 'medium',
      tags: ['service', 'produit', 'distinction']
    },
    {
      id: 'def-3',
      front: 'Qu\'est-ce que l\'UTILITÉ et la GARANTIE d\'un service ?',
      back: 'UTILITÉ : Adaptation à l\'usage (ce que fait le service)\nGARANTIE : Adaptation à l\'utilisation (comment il le fait)\n\n📧 Exemple email :\n- Utilité : Envoyer/recevoir des messages\n- Garantie : Disponible 99.9%, sécurisé, rapide\n\n⚠️ Les DEUX sont nécessaires pour créer de la valeur !',
      category: 'definitions',
      difficulty: 'medium',
      tags: ['utilité', 'garantie', 'valeur']
    },
    {
      id: 'def-4',
      front: 'Quelle est la différence entre OUTPUT et OUTCOME ?',
      back: 'OUTPUT : Ce qui est produit/livré (tangible)\nOUTCOME : Le résultat obtenu par le client (valeur)\n\n📊 Exemple :\n- Output : Rapport de 100 pages\n- Outcome : Décision stratégique éclairée\n\n🎯 ITIL 4 se concentre sur les OUTCOMES !',
      category: 'definitions',
      difficulty: 'hard',
      tags: ['output', 'outcome', 'piège']
    },

    // 7 Principes
    {
      id: 'prin-1',
      front: 'Quel principe directeur recommande de ne PAS repartir de zéro ?',
      back: 'COMMENCER LÀ OÙ ON SE TROUVE\n\n✅ Évaluer l\'existant avant de reconstruire\n✅ Observer directement la situation actuelle\n✅ Réutiliser ce qui fonctionne\n\n⚠️ Ne pas confondre avec "Opter pour la simplicité"',
      category: 'principes',
      difficulty: 'easy',
      tags: ['principes', 'commencer']
    },
    {
      id: 'prin-2',
      front: 'Dans quel ordre les 7 principes directeurs doivent-ils être appliqués ?',
      back: 'AUCUN ordre spécifique !\n\n🎯 Les 7 principes :\n1. Se concentrer sur la valeur\n2. Commencer là où on se trouve\n3. Progresser de manière itérative\n4. Collaborer et promouvoir la visibilité\n5. Penser et travailler de manière holistique\n6. Opter pour la simplicité\n7. Optimiser et automatiser\n\n⚠️ Piège : Ils s\'appliquent TOUS, TOUJOURS, mais adaptés au contexte',
      category: 'principes',
      difficulty: 'medium',
      tags: ['principes', 'ordre', 'piège']
    },
    {
      id: 'prin-3',
      front: 'Quel principe insiste sur la transparence et la communication ?',
      back: 'COLLABORER ET PROMOUVOIR LA VISIBILITÉ\n\n🔍 Points clés :\n- Impliquer les bonnes personnes\n- Communiquer ouvertement\n- Éviter les silos\n- Partager l\'information\n\n⚠️ Collaboration ≠ Consensus (décision par tous)',
      category: 'principes',
      difficulty: 'medium',
      tags: ['principes', 'collaboration']
    },

    // 4 Dimensions
    {
      id: 'dim-1',
      front: 'Quelles sont les 4 dimensions de la gestion des services ?',
      back: '1. ORGANISATIONS ET PERSONNES\n2. INFORMATION ET TECHNOLOGIE\n3. PARTENAIRES ET FOURNISSEURS\n4. FLUX DE VALEUR ET PROCESSUS\n\n🎯 Mnémotechnique : OIPF\n\n⚠️ N\'oubliez pas les facteurs externes PESTLE qui les entourent !',
      category: 'dimensions',
      difficulty: 'easy',
      tags: ['dimensions', 'PESTLE']
    },
    {
      id: 'dim-2',
      front: 'Que signifie PESTLE dans le contexte des 4 dimensions ?',
      back: 'Facteurs externes qui influencent les 4 dimensions :\n\nP - Politique\nE - Économique\nS - Social\nT - Technologique\nL - Légal\nE - Environnemental\n\n⚠️ Ces facteurs ENTOURENT les 4 dimensions, ils ne sont pas une 5ème dimension !',
      category: 'dimensions',
      difficulty: 'medium',
      tags: ['PESTLE', 'facteurs-externes']
    },

    // SVS et CVS
    {
      id: 'svs-1',
      front: 'Quels sont les composants du Système de Valeur des Services (SVS) ?',
      back: '1. Chaîne de Valeur des Services (6 activités)\n2. Pratiques ITIL (34 au total)\n3. Principes directeurs (7)\n4. Gouvernance\n5. Amélioration continue\n\n💡 Le SVS transforme la demande en valeur\n\n⚠️ Tous les composants interagissent !',
      category: 'svs-cvs',
      difficulty: 'medium',
      tags: ['SVS', 'composants']
    },
    {
      id: 'cvs-1',
      front: 'Les activités de la CVS doivent-elles être exécutées dans un ordre fixe ?',
      back: 'NON ! La CVS est FLEXIBLE et NON-SÉQUENTIELLE\n\n✅ Les activités peuvent être :\n- Combinées dans n\'importe quel ordre\n- Exécutées simultanément\n- Répétées selon les besoins\n\n⚠️ Piège fréquent à l\'examen !',
      category: 'svs-cvs',
      difficulty: 'hard',
      tags: ['CVS', 'flexibilité', 'piège']
    },
    {
      id: 'cvs-2',
      front: 'Quelle activité de la CVS est présente dans TOUS les flux de valeur ?',
      back: 'AMÉLIORER\n\n🔄 L\'amélioration continue est intégrée dans tous les flux de valeur\n\n📝 Elle gère aussi le Registre d\'Amélioration Continue (CIR)\n\n⚠️ Ce n\'est PAS seulement après les incidents !',
      category: 'svs-cvs',
      difficulty: 'medium',
      tags: ['améliorer', 'CVS']
    },
    {
      id: 'cvs-3',
      front: 'Quelle activité CVS est le point de contact principal avec les parties prenantes ?',
      back: 'ENGAGER\n\n🤝 Responsabilités :\n- Comprendre les besoins\n- Gérer les relations continues\n- Capturer la demande\n- Gérer les feedbacks\n\n💡 Le Service Desk opère principalement dans cette activité',
      category: 'svs-cvs',
      difficulty: 'easy',
      tags: ['engager', 'CVS', 'service-desk']
    },

    // Pratiques - Distinctions importantes
    {
      id: 'prat-1',
      front: 'Quelle est la différence entre un INCIDENT et un PROBLÈME ?',
      back: 'INCIDENT : Interruption non planifiée ou dégradation d\'un service (symptôme)\n\nPROBLÈME : Cause d\'un ou plusieurs incidents\n\n🚨 Exemple :\n- Incident : "Je ne peux pas imprimer"\n- Problème : "Le driver d\'impression est corrompu"\n\n⚠️ On peut avoir un problème SANS incident (proactif)',
      category: 'pratiques',
      difficulty: 'medium',
      tags: ['incident', 'problème', 'distinction']
    },
    {
      id: 'prat-2',
      front: 'Le CAB (Change Advisory Board) autorise-t-il les changements ?',
      back: 'NON ! Le CAB CONSEILLE mais n\'AUTORISE PAS\n\n✅ Qui autorise :\n- Changements normaux : Autorité de changement\n- Changements d\'urgence : Autorité de changement d\'urgence\n- Changements standard : Pré-autorisés\n\n🎯 Piège fréquent à l\'examen !',
      category: 'pratiques',
      difficulty: 'hard',
      tags: ['CAB', 'changement', 'piège']
    },
    {
      id: 'prat-3',
      front: 'Quelle est la différence entre SLA et OLA ?',
      back: 'SLA (Service Level Agreement) : Accord avec le CLIENT externe\n\nOLA (Operational Level Agreement) : Accord INTERNE entre équipes\n\n📄 Exemple :\n- SLA : 99.9% disponibilité pour le client\n- OLA : Équipe réseau garantit 99.95% à l\'équipe service\n\n⚠️ SLA = Externe, OLA = Interne',
      category: 'pratiques',
      difficulty: 'medium',
      tags: ['SLA', 'OLA', 'distinction']
    },
    {
      id: 'prat-4',
      front: 'Qu\'est-ce que le SPOC dans le contexte du service desk ?',
      back: 'Single Point Of Contact (Point de Contact Unique)\n\n☎️ Le service desk est le SPOC entre :\n- Fournisseur de services\n- Utilisateurs\n\n⚠️ Attention : Contact avec UTILISATEURS, pas forcément les clients\n\n💡 Gère incidents ET demandes de service',
      category: 'pratiques',
      difficulty: 'easy',
      tags: ['SPOC', 'service-desk']
    },
    {
      id: 'prat-5',
      front: 'Reset de mot de passe : incident ou demande de service ?',
      back: 'DEMANDE DE SERVICE !\n\n✅ Demande de service :\n- Planifiée/standard\n- Dans le catalogue\n- Reset mot de passe, accès, nouvelle installation\n\n❌ Ce n\'est PAS un incident car :\n- Pas d\'interruption de service\n- Demande standard prévue\n\n🎯 Piège classique d\'examen !',
      category: 'pratiques',
      difficulty: 'hard',
      tags: ['incident', 'demande-service', 'piège']
    },
    {
      id: 'prat-6',
      front: 'Que contient le catalogue de services vs le portefeuille ?',
      back: 'CATALOGUE : Services ACTIFS disponibles aux clients\n\nPORTEFEUILLE : TOUS les services\n- Pipeline (futurs)\n- Catalogue (actifs)\n- Retirés\n\n📚 Le catalogue est un SOUS-ENSEMBLE du portefeuille\n\n⚠️ Le catalogue ne contient QUE les services actifs !',
      category: 'pratiques',
      difficulty: 'medium',
      tags: ['catalogue', 'portefeuille', 'distinction']
    },
    {
      id: 'prat-7',
      front: 'Comment calcule-t-on la priorité d\'un incident ?',
      back: 'PRIORITÉ = IMPACT × URGENCE\n\n📊 Matrice typique :\n- Impact : Nombre d\'utilisateurs affectés\n- Urgence : Rapidité de résolution requise\n\n⚠️ C\'est une multiplication, pas une addition !\n\n💡 Permet d\'ordonner le traitement des incidents',
      category: 'pratiques',
      difficulty: 'easy',
      tags: ['priorité', 'incident', 'calcul']
    },

    // Pièges fréquents
    {
      id: 'piege-1',
      front: 'TOUS les changements doivent-ils passer par le CAB ?',
      back: 'NON ! Piège fréquent !\n\n✅ Changements STANDARD : Pré-autorisés, pas de CAB\n✅ Changements URGENCE : Autorité d\'urgence (ECAB possible)\n✅ Changements NORMAUX : CAB conseille\n\n⚠️ Le CAB n\'est consulté que pour certains changements',
      category: 'pieges',
      difficulty: 'hard',
      tags: ['CAB', 'changement', 'piège']
    },
    {
      id: 'piege-2',
      front: 'L\'amélioration continue se fait-elle uniquement après des incidents ?',
      back: 'NON ! Grosse erreur !\n\n✅ L\'amélioration continue est :\n- Permanente\n- Proactive\n- Dans TOUS les flux de valeur\n- Pour TOUS les services\n\n📈 Sources : métriques, feedback, idées, benchmarks...\n\n⚠️ Pas seulement réactive aux problèmes !',
      category: 'pieges',
      difficulty: 'medium',
      tags: ['amélioration', 'piège']
    },
    {
      id: 'piege-3',
      front: 'Peut-on fermer un problème sans le résoudre ?',
      back: 'OUI ! Si le risque est acceptable\n\n✅ Raisons possibles :\n- Coût de résolution trop élevé\n- Risque acceptable pour le business\n- Workaround efficace en place\n- Service en fin de vie\n\n⚠️ Documenter la décision et le risque résiduel',
      category: 'pieges',
      difficulty: 'hard',
      tags: ['problème', 'piège']
    },
    {
      id: 'piege-4',
      front: 'Les 4 dimensions doivent-elles TOUTES être considérées ?',
      back: 'OUI, ABSOLUMENT !\n\n⚠️ Les 4 dimensions sont TOUJOURS pertinentes :\n1. Organisations et Personnes\n2. Information et Technologie\n3. Partenaires et Fournisseurs\n4. Flux de Valeur et Processus\n\n❌ Négliger une dimension = échec assuré\n\n🎯 Question piège fréquente !',
      category: 'pieges',
      difficulty: 'medium',
      tags: ['dimensions', 'piège']
    }
  ]

  const startSession = (mode: string, category?: string) => {
    setSelectedMode(mode)
    if (category) setSelectedCategory(category)
    
    let cardsToUse = [...flashcards]
    
    if (mode === 'theme' && category) {
      cardsToUse = flashcards.filter(card => card.category === category)
    } else if (mode === 'pieges') {
      cardsToUse = flashcards.filter(card => 
        card.tags?.includes('piège') || card.category === 'pieges'
      )
    }
    
    // Mélanger les cartes
    cardsToUse.sort(() => Math.random() - 0.5)
    
    setShowFlashcards(true)
  }

  if (showFlashcards) {
    const cardsToShow = selectedCategory 
      ? flashcards.filter(card => card.category === selectedCategory)
      : selectedMode === 'pieges'
      ? flashcards.filter(card => card.tags?.includes('piège') || card.category === 'pieges')
      : flashcards

    return (
      <div className="max-w-4xl mx-auto">
        <FlashcardComponent 
          mode={selectedMode}
          cards={cardsToShow}
          onComplete={() => {
            setShowFlashcards(false)
            setSelectedCategory('')
          }}
          onExit={() => {
            setShowFlashcards(false)
            setSelectedCategory('')
          }}
        />
      </div>
    )
  }

  if (selectedMode === 'theme' && !selectedCategory) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => setSelectedMode('')}
            className="text-primary-600 hover:text-primary-700 flex items-center mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
            Retour aux modes
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Choisissez un thème</h2>
          <p className="text-gray-600 mt-2">Sélectionnez le domaine que vous souhaitez réviser</p>
        </div>

        <div className="grid gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => startSession('theme', category.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{category.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                    <p className="text-primary-600 font-medium text-sm mt-2">{category.count} cartes</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Révision avec Flashcards</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Mémorisez efficacement les concepts clés et pièges de l'examen ITIL v4 Foundation
        </p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Conseil :</strong> Concentrez-vous sur les distinctions (incident vs problème, SLA vs OLA) 
            et les pièges fréquents. Ce sont les questions les plus courantes à l'examen !
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {modes.map((mode) => (
          <div 
            key={mode.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer relative"
            onClick={() => mode.action === 'start' ? startSession(mode.id) : setSelectedMode(mode.id)}
          >
            {mode.recommended && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Recommandé
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${mode.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <mode.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{mode.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{mode.description}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          💡 Comment utiliser les flashcards efficacement
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              Lisez la question et formulez votre réponse AVANT de retourner
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              Marquez "À revoir" les cartes avec pièges importants
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              Faites le mode "Pièges" avant l'examen
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              Révisez 15-20 minutes par jour, pas 2h d'un coup
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <CreditCard className="h-5 w-5 inline mr-2" />
        {flashcards.length} flashcards disponibles couvrant tous les domaines de l'examen
      </div>
    </div>
  )
}

export default FlashcardsPage