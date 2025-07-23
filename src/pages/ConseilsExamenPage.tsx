import React from 'react'
import { Clock, Target, BookOpen, Brain, CheckCircle, AlertTriangle, TrendingUp, Award } from 'lucide-react'

const ConseilsExamenPage: React.FC = () => {
  const informationsExamen = {
    duree: "60 minutes",
    questions: "40 questions",
    scoreMin: "65% (26/40)",
    format: "QCM - Une seule réponse correcte",
    langue: "Français ou Anglais",
    documentation: "Aucune - Livre fermé"
  }

  const strategiesRevision = [
    {
      titre: "Maîtriser les concepts fondamentaux",
      points: [
        "Les 4 dimensions de la gestion des services",
        "Les 7 principes directeurs",
        "Le système de valeur des services (SVS)",
        "La chaîne de valeur des services"
      ]
    },
    {
      titre: "Connaître les pratiques clés",
      points: [
        "Focus sur les 15 pratiques au programme Foundation",
        "Comprendre l'objectif de chaque pratique",
        "Identifier les entrées et sorties principales",
        "Savoir quand utiliser chaque pratique"
      ]
    },
    {
      titre: "Comprendre les relations",
      points: [
        "Comment les pratiques interagissent",
        "Le flux de valeur à travers la CVS",
        "L'application des principes directeurs",
        "L'intégration des 4 dimensions"
      ]
    }
  ]

  const conseilsJourJ = [
    {
      icon: Clock,
      titre: "Gestion du temps",
      conseil: "1.5 minute par question en moyenne. Ne restez pas bloqué, marquez et revenez plus tard."
    },
    {
      icon: Target,
      titre: "Lecture attentive",
      conseil: "Lisez chaque question deux fois. Attention aux mots clés : TOUJOURS, JAMAIS, SAUF, MEILLEUR."
    },
    {
      icon: Brain,
      titre: "Élimination",
      conseil: "Éliminez d'abord les réponses évidemment fausses pour augmenter vos chances."
    },
    {
      icon: CheckCircle,
      titre: "Révision finale",
      conseil: "Gardez 5-10 minutes pour réviser vos réponses et vérifier que vous avez répondu à toutes les questions."
    }
  ]

  const typesQuestions = [
    {
      type: "Définition",
      exemple: "Qu'est-ce qu'un service selon ITIL 4 ?",
      approche: "Mémorisez les définitions officielles mot pour mot"
    },
    {
      type: "Application",
      exemple: "Quel principe directeur recommande de ne pas repartir de zéro ?",
      approche: "Comprenez comment appliquer les concepts dans des situations"
    },
    {
      type: "Scenario",
      exemple: "Une entreprise veut améliorer son service desk. Quelle pratique...",
      approche: "Analysez le contexte et identifiez la meilleure solution"
    },
    {
      type: "Négative",
      exemple: "Laquelle de ces affirmations N'EST PAS vraie ?",
      approche: "Lisez très attentivement et cherchez l'exception"
    }
  ]

  const erreursCourantes = [
    "Confondre incident et problème",
    "Mélanger les activités de la chaîne de valeur",
    "Oublier que ITIL 4 est flexible et non prescriptif",
    "Ne pas distinguer efficacité et efficience",
    "Confondre les rôles service desk et support technique"
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Conseils pour l'Examen ITIL 4 Foundation</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Préparez-vous efficacement pour réussir votre certification ITIL 4 Foundation 
          avec ces conseils pratiques et stratégies éprouvées.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <Award className="h-6 w-6 text-primary-600 mr-2" />
            Informations sur l'examen
          </h2>
          <dl className="space-y-3">
            {Object.entries(informationsExamen).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <dt className="text-gray-600 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()} :</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Erreurs courantes à éviter
          </h3>
          <ul className="space-y-2">
            {erreursCourantes.map((erreur, index) => (
              <li key={index} className="text-yellow-800 dark:text-yellow-200 flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                {erreur}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Stratégies de révision</h2>
        <div className="grid gap-4">
          {strategiesRevision.map((strategie, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{strategie.titre}</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {strategie.points.map((point, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Conseils pour le jour J</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {conseilsJourJ.map((conseil, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-3">
                <conseil.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">{conseil.titre}</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">{conseil.conseil}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
          <BookOpen className="h-6 w-6 text-primary-600 mr-2" />
          Types de questions à l'examen
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Exemple</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Approche recommandée</th>
              </tr>
            </thead>
            <tbody>
              {typesQuestions.map((question, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">{question.type}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm italic">{question.exemple}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm">{question.approche}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Conseil final
        </h3>
        <p className="text-green-800 dark:text-green-200">
          La clé du succès est la compréhension, pas la mémorisation pure. 
          ITIL 4 est conçu pour être pratique et flexible. Pensez toujours en termes 
          de création de valeur et d'amélioration continue. Si vous comprenez vraiment 
          les concepts, les bonnes réponses deviendront évidentes.
        </p>
      </div>
    </div>
  )
}

export default ConseilsExamenPage