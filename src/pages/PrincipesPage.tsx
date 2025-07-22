import React from 'react'
import { ArrowRight, Target, Users, TrendingUp, Lightbulb, Repeat, GitBranch, CheckCircle } from 'lucide-react'

const PrincipesPage: React.FC = () => {
  const principes = [
    {
      id: 1,
      titre: "Se concentrer sur la valeur",
      icon: Target,
      description: "Tout ce qu'entreprend l'organisation doit être lié, directement ou indirectement, à la valeur pour les parties prenantes.",
      points: [
        "Identifier ce qui constitue la valeur pour chaque partie prenante",
        "Comprendre l'expérience du consommateur et de l'utilisateur",
        "Savoir comment les consommateurs utilisent les services"
      ]
    },
    {
      id: 2,
      titre: "Commencer là où on se trouve",
      icon: CheckCircle,
      description: "Ne pas partir de zéro et bâtir quelque chose de nouveau sans tenir compte de ce qui existe déjà.",
      points: [
        "Observer directement pour comprendre l'état actuel",
        "Évaluer ce qui peut être réutilisé",
        "Déterminer si des pratiques réussies existent ailleurs"
      ]
    },
    {
      id: 3,
      titre: "Progresser de manière itérative avec des retours",
      icon: Repeat,
      description: "Ne pas essayer de tout faire en même temps. Diviser le travail en sections plus petites et gérables.",
      points: [
        "Comprendre le contexte global tout en progressant par petites étapes",
        "Rechercher activement et utiliser les retours à chaque itération",
        "Minimiser les risques et augmenter les chances de succès"
      ]
    },
    {
      id: 4,
      titre: "Collaborer et promouvoir la visibilité",
      icon: Users,
      description: "Impliquer les bonnes personnes dans les bonnes activités. La collaboration ne signifie pas consensus.",
      points: [
        "Augmenter la visibilité du travail et des décisions",
        "Éviter les hypothèses et clarifier les décisions",
        "Créer des canaux de communication appropriés"
      ]
    },
    {
      id: 5,
      titre: "Penser et travailler de manière holistique",
      icon: GitBranch,
      description: "Reconnaître que les services font partie d'un système complexe avec de nombreuses interactions.",
      points: [
        "Reconnaître la complexité des systèmes",
        "La collaboration est essentielle pour penser de manière holistique",
        "Rechercher des modèles dans les besoins et interactions"
      ]
    },
    {
      id: 6,
      titre: "Opter pour la simplicité et être pratique",
      icon: Lightbulb,
      description: "Utiliser le nombre minimum d'étapes pour atteindre un objectif. Éliminer ce qui n'apporte pas de valeur.",
      points: [
        "Vérifier qu'une approche produit de la valeur",
        "La simplicité est l'approche la plus efficace",
        "Faire moins de choses, mais les faire mieux"
      ]
    },
    {
      id: 7,
      titre: "Optimiser et automatiser",
      icon: TrendingUp,
      description: "Maximiser la valeur du travail effectué par les ressources humaines et techniques.",
      points: [
        "Automatiser les tâches fréquentes et répétitives",
        "Libérer les ressources humaines pour des activités plus complexes",
        "Utiliser la technologie pour accomplir des tâches plus efficacement"
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Les 7 Principes Directeurs</h1>
        <p className="text-gray-600">
          Les principes directeurs d'ITIL 4 sont des recommandations qui guident les organisations 
          dans toutes les circonstances, indépendamment des changements dans leurs objectifs, 
          stratégies, type de travail ou structure de gestion.
        </p>
      </div>

      <div className="grid gap-6">
        {principes.map((principe) => (
          <div key={principe.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <principe.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {principe.id}. {principe.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">{principe.description}</p>
                  
                  <div className="space-y-2">
                    {principe.points.map((point, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Application des principes</h3>
        <p className="text-blue-800">
          Ces principes sont universels et s'appliquent à toutes les initiatives. 
          Ils doivent être considérés à chaque étape de toute amélioration, 
          qu'il s'agisse d'un projet, d'un programme ou d'un changement organisationnel.
        </p>
      </div>
    </div>
  )
}

export default PrincipesPage