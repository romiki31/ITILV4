import type { ExamPracticeQuestion } from '@/types'

// Questions d'examen blanc ITIL v4 Foundation - Échantillons 1 et 2
export const examPracticeQuestions: ExamPracticeQuestion[] = [
  // ÉCHANTILLON D'EXAMEN 1
  {
    id: 1,
    examId: 'examen_1',
    question: "Quelle pratique est responsable du déplacement des composants vers les environnements de production ?",
    options: {
      A: "L'habilitation des changements",
      B: "La gestion des mises en production",
      C: "La gestion des actifs informatiques",
      D: "La gestion des déploiements"
    },
    correctAnswer: 'D',
    explanation: "Le but de la pratique de gestion des déploiements est de déplacer du matériel, des logiciels, de la documentation, des processus ou tout autre composant nouveaux ou modifiés vers des environnements de production.",
    simplifiedExplanation: "La gestion des déploiements s'occupe de déplacer les nouveaux composants vers la production. C'est comme livrer un colis à sa destination finale.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 2,
    examId: 'examen_1',
    question: "Quelle pratique inclue la classification et la propriété des questions et des demandes des utilisateurs ?",
    options: {
      A: "Le centre de services",
      B: "La gestion des incidents",
      C: "L'habilitation des changements",
      D: "La gestion des niveaux de service"
    },
    correctAnswer: 'A',
    explanation: "Les centres de services fournissent aux utilisateurs un moyen clair de signaler des difficultés, des questions ou des demandes, ainsi que d'obtenir confirmation de leur réception, de les classer, d'en être propriétaires et d'y donner suite.",
    simplifiedExplanation: "Le centre de services est le point d'entrée unique pour toutes les demandes des utilisateurs. Il classe et traite les questions comme un standard téléphonique intelligent.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 3,
    examId: 'examen_1',
    question: "Quelle pratique identifie les métriques qui reflètent l'expérience d'un service pour le client ?",
    options: {
      A: "L'amélioration continue",
      B: "Le centre de services",
      C: "La gestion des niveaux de service",
      D: "La gestion des problèmes"
    },
    correctAnswer: 'C',
    explanation: "La gestion des niveaux de service identifie les métriques et les mesures qui reflètent fidèlement l'expérience et le niveau de satisfaction réels du client par rapport à l'ensemble du service.",
    simplifiedExplanation: "La gestion des niveaux de service mesure la satisfaction client, comme les notes de satisfaction dans un restaurant.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 4,
    examId: 'examen_1',
    question: "Quelle est l'utilisation PRINCIPALE d'un calendrier des changements ?",
    options: {
      A: "Pour supporter la « gestion des incidents » et la planification d'améliorations",
      B: "Pour gérer les changements urgents",
      C: "Pour planifier les changements et éviter les conflits",
      D: "Pour gérer les changements standard"
    },
    correctAnswer: 'C',
    explanation: "Le calendrier des changements est utilisé pour aider à planifier des changements, soutenir la communication, éviter les conflits et assigner des ressources.",
    simplifiedExplanation: "Le calendrier des changements organise les modifications pour éviter qu'elles se marchent sur les pieds, comme un planning d'opérations dans un hôpital.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 5,
    examId: 'examen_1',
    question: "Quelle dimension de la gestion des services est axée sur les activités et la façon dont elles sont coordonnées ?",
    options: {
      A: "Organisations et personnes",
      B: "Information et technologie",
      C: "Partenaires et fournisseurs",
      D: "Flux de valeur et processus"
    },
    correctAnswer: 'D',
    explanation: "La dimension « flux de valeur et processus » est axée sur les activités que l'organisation entreprend et sur la façon dont elles sont organisées, mais aussi sur la façon dont l'organisation favorise la création de valeur pour toutes les parties prenantes de manière efficace et efficiente.",
    simplifiedExplanation: "Les flux de valeur et processus décrivent comment les activités s'enchaînent pour créer de la valeur, comme une chaîne de montage bien orchestrée.",
    relatedCourseSection: "dimensions"
  },
  {
    id: 6,
    examId: 'examen_1',
    question: "De quelle façon la catégorisation des incidents assiste-t-elle la pratique de « gestion des incidents » ?",
    options: {
      A: "Elle permet de diriger l'incident vers la zone de support appropriée",
      B: "Elle détermine la priorité assignée à l'incident",
      C: "Elle s'assure que les incidents sont résolus dans les délais convenus avec le client",
      D: "Elle détermine la façon dont le fournisseur de services est perçu"
    },
    correctAnswer: 'A',
    explanation: "Les incidents plus complexes sont généralement escaladés à une équipe de support pour une résolution. Généralement, l'acheminement dépend de la catégorie de l'incident, laquelle devrait permettre en principe d'identifier l'équipe appropriée.",
    simplifiedExplanation: "Catégoriser un incident, c'est comme mettre une étiquette d'adresse sur un colis pour qu'il arrive au bon service.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 7,
    examId: 'examen_1',
    question: "Identifiez le ou les mots manquants dans la phrase suivante.\nUn service est un moyen qui permet la co-création de valeur en facilitant [?] que les clients veulent atteindre.",
    options: {
      A: "...la garantie",
      B: "...les résultats",
      C: "...l'utilité",
      D: "...les livrables"
    },
    correctAnswer: 'B',
    explanation: "Un service est un moyen de permettre la co-création de valeur en facilitant des résultats que les clients veulent atteindre, sans qu'ils n'aient à gérer les coûts et les risques spécifiques.",
    simplifiedExplanation: "Un service aide le client à obtenir les résultats qu'il souhaite, comme un taxi qui vous amène à destination sans que vous ayez à conduire.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 8,
    examId: 'examen_1',
    question: "Laquelle des options suivantes est une recommandation de la pratique d'« amélioration continue » ?",
    options: {
      A: "Il devrait y avoir au moins une petite équipe qui se consacre à la conduite des efforts d'« amélioration continue »",
      B: "Toutes les améliorations doivent être gérées comme des projets à phases multiples",
      C: "L'« amélioration continue » doit être isolée des autres pratiques",
      D: "Les fournisseurs externes doivent être exclus des initiatives d'amélioration"
    },
    correctAnswer: 'A',
    explanation: "Chacun devrait contribuer d'une manière ou d'une autre, mais il devrait y avoir au moins une petite équipe dédiée à temps plein à la conduite d'efforts d'amélioration continue et à la promotion de la pratique à travers l'organisation.",
    simplifiedExplanation: "L'amélioration continue a besoin d'une équipe dédiée qui s'en occupe à plein temps, comme avoir des jardiniers professionnels pour entretenir un parc.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 9,
    examId: 'examen_1',
    question: "Laquelle des options suivantes est un bénéfice potentiel de l'utilisation d'un outil de gestion des services informatiques pour supporter la pratique de « gestion des incidents » ?",
    options: {
      A: "Il peut s'assurer que la cause des incidents est identifiée dans les délais convenus",
      B: "Il peut fournir un appariement automatisé des incidents aux problèmes ou aux erreurs connues",
      C: "Il peut s'assurer que les contrats des fournisseurs sont alignés sur les besoins du fournisseur de services",
      D: "Il peut permettre la résolution et la clôture automatisées d'incidents complexes"
    },
    correctAnswer: 'B',
    explanation: "Les outils modernes de la gestion des services informatiques peuvent fournir une correspondance automatisée des incidents avec d'autres incidents, problèmes ou erreurs connues.",
    simplifiedExplanation: "Un bon outil peut automatiquement faire le lien entre un nouvel incident et des problèmes déjà connus, comme un moteur de recherche qui trouve des articles similaires.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 10,
    examId: 'examen_1',
    question: "Quel rôle soumet des demandes de services ?",
    options: {
      A: "L'utilisateur ou son représentant autorisé",
      B: "Le client ou son représentant autorisé",
      C: "Le sponsor ou son représentant autorisé",
      D: "Le fournisseur ou son représentant autorisé"
    },
    correctAnswer: 'A',
    explanation: "Le but de la pratique de gestion des demandes de service est de soutenir la qualité convenue d'un service en gérant l'ensemble des demandes de service prédéfinies et initiées par l'utilisateur... et une demande de service est définie comme la demande d'un utilisateur ou du représentant autorisé d'un utilisateur qui déclenche une action de service.",
    simplifiedExplanation: "Les demandes de service viennent des utilisateurs, ceux qui utilisent réellement le service au quotidien.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 11,
    examId: 'examen_1',
    question: "Quelle pratique propose un point de contact unique pour les utilisateurs ?",
    options: {
      A: "La gestion des incidents",
      B: "L'habilitation des changements",
      C: "Le centre de services",
      D: "La gestion des demandes de service"
    },
    correctAnswer: 'C',
    explanation: "Le but de la pratique du centre de services est de capturer la demande de résolution des incidents et les demandes de services. Elle doit également être le point d'entrée et le point de contact unique pour le fournisseur de services avec tous ses utilisateurs.",
    simplifiedExplanation: "Le centre de services est comme la réception d'un hôtel : c'est le point d'entrée unique pour toutes les demandes.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 12,
    examId: 'examen_1',
    question: "Quel principe directeur recommande de prendre en considération les quatre dimensions de la gestion des services ?",
    options: {
      A: "Penser et travailler de façon holistique",
      B: "Avancer par itération avec des retours",
      C: "Privilégier la valeur",
      D: "Opter pour la simplicité et rester pratique"
    },
    correctAnswer: 'A',
    explanation: "Le principe directeur « penser et travailler de façon holistique » recommande de tenir compte de tous les aspects d'une organisation lorsqu'il s'agit de fournir de la valeur sous forme de services. Cela inclut les quatre dimensions de la gestion des services.",
    simplifiedExplanation: "Penser holistique signifie voir la big picture et considérer tous les aspects ensemble, pas juste une partie isolée.",
    relatedCourseSection: "principes"
  },
  {
    id: 13,
    examId: 'examen_1',
    question: "Laquelle des options suivantes est supportée par la pratique de « gestion des demandes de services » ?",
    options: {
      A: "Une demande d'autorisation d'un changement qui pourrait avoir un impact sur un service",
      B: "Une demande d'un utilisateur concernant quelque chose qui fait partie intégrante de la fourniture normale des services",
      C: "Une demande de restauration du service après une interruption de service",
      D: "Une demande d'investigation sur la cause de plusieurs incidents connexes"
    },
    correctAnswer: 'B',
    explanation: "Une demande de service est une demande d'un utilisateur ou du représentant autorisé d'un utilisateur qui déclenche une action de service convenue dans le cadre de la fourniture normale des services.",
    simplifiedExplanation: "Les demandes de service concernent les services normaux et prévus, comme demander un nouveau téléphone ou un accès à une application.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 14,
    examId: 'examen_1',
    question: "Quelle pratique relève de la responsabilité de chacun au sein de l'organisation ?",
    options: {
      A: "La gestion des niveaux de service",
      B: "L'habilitation des changements",
      C: "La gestion des problèmes",
      D: "L'amélioration continue"
    },
    correctAnswer: 'D',
    explanation: "L'amélioration continue est la responsabilité de tous et l'engagement envers l'amélioration continue et sa pratique doivent être ancrés dans chaque rouage de l'organisation.",
    simplifiedExplanation: "L'amélioration continue, c'est l'affaire de tous dans l'organisation, comme le recyclage ou la sécurité au travail.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 15,
    examId: 'examen_1',
    question: "Identifiez les mots manquants dans la phrase suivante.\nLe but de la pratique de « gestion de la sécurité de l'information » est de [?] les informations de l'organisation.",
    options: {
      A: "...stocker",
      B: "...fournir",
      C: "...vérifier",
      D: "...protéger"
    },
    correctAnswer: 'D',
    explanation: "Le but de la pratique de gestion de la sécurité de l'information est de protéger les informations dont l'organisation a besoin pour mener ses activités. Cela inclut la compréhension et la gestion des risques liés à la confidentialité, à l'intégrité et à la disponibilité des informations.",
    simplifiedExplanation: "La sécurité de l'information protège les données importantes, comme un coffre-fort protège les objets de valeur.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 16,
    examId: 'examen_1',
    question: "Quel principe directeur recommande de collecter les données avant de déterminer ce qui peut être réutilisé ?",
    options: {
      A: "Privilégier la valeur",
      B: "Commencer là où vous êtes",
      C: "Opter pour la simplicité et rester pratique",
      D: "Avancer par itération avec des retours"
    },
    correctAnswer: 'B',
    explanation: "Le principe directeur de « commencer là où vous êtes » recommande que les services et méthodes déjà en place doivent être mesurés et/ou observés directement pour bien comprendre leur état actuel et ce qui peut en être réutilisé. Obtenir des données à la source permet d'éviter les hypothèses.",
    simplifiedExplanation: "Avant de tout changer, il faut d'abord comprendre ce qu'on a déjà et ce qui fonctionne bien.",
    relatedCourseSection: "principes"
  },
  {
    id: 17,
    examId: 'examen_1',
    question: "Laquelle des options suivantes N'EST PAS habituellement incluse dans la gestion des incidents ?",
    options: {
      A: "Des scripts pour recueillir des informations initiales sur les incidents",
      B: "Des procédures formalisées pour enregistrer les incidents",
      C: "Des procédures détaillées pour diagnostiquer les incidents",
      D: "Le recours à des connaissances spécialisées pour les incidents compliqués"
    },
    correctAnswer: 'C',
    explanation: "Ce processus n'inclut habituellement PAS de procédures détaillées indiquant comment diagnostiquer, investiguer et résoudre les incidents.",
    simplifiedExplanation: "La gestion des incidents se concentre sur la restauration rapide du service, pas sur le diagnostic détaillé qui est plutôt du ressort de la gestion des problèmes.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 18,
    examId: 'examen_1',
    question: "Laquelle des options suivantes décrit le mieux la nature des principes directeurs ?",
    options: {
      A: "Les principes directeurs peuvent guider une organisation en toutes circonstances",
      B: "Chaque principe directeur impose des actions et des décisions spécifiques",
      C: "Une organisation choisit et adopte un seul des sept principes directeurs",
      D: "Les principes directeurs décrivent les processus que toutes les organisations doivent adopter"
    },
    correctAnswer: 'A',
    explanation: "Un principe directeur est défini comme une recommandation pouvant guider une organisation en toutes circonstances et guidera les organisations lors de l'adoption de la gestion des services.",
    simplifiedExplanation: "Les principes directeurs sont comme une boussole : ils donnent la direction générale dans toutes les situations.",
    relatedCourseSection: "principes"
  },
  {
    id: 19,
    examId: 'examen_1',
    question: "Quel énoncé sur l'autorité de changement est CORRECT ?",
    options: {
      A: "Une seule autorité de changement doit être assignée pour autoriser tous les types et les modèles de changements",
      B: "Une autorité de changement doit être assignée pour chaque type et chaque modèle de changement",
      C: "Les changements normaux sont pré-autorisés et ne requièrent pas l'intervention d'une autorité de changement",
      D: "Les changements urgents peuvent être implémentés sans l'autorisation d'une autorité de changement"
    },
    correctAnswer: 'B',
    explanation: "Il est essentiel d'assigner l'autorité de changement appropriée à chaque type de changement afin d'assurer l'efficacité et l'efficience de l'habilitation de changements. Pour les changements normaux, les modèles de changement fondés sur le type de changement déterminent les rôles chargés de l'évaluation et de l'autorisation.",
    simplifiedExplanation: "Chaque type de changement a son propre niveau d'autorité, comme différents niveaux de signature selon le montant d'un achat.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 20,
    examId: 'examen_1',
    question: "Quelle pratique a pour but de mettre à disposition des services et des fonctionnalités nouveaux ou modifiés ?",
    options: {
      A: "L'habilitation des changements",
      B: "La gestion des demandes de service",
      C: "La gestion des mises en production",
      D: "La gestion des déploiements"
    },
    correctAnswer: 'C',
    explanation: "Le but de la pratique de gestion des mises en production est de mettre à disposition des services et des fonctionnalités nouveaux ou modifiés.",
    simplifiedExplanation: "La gestion des mises en production fait le lien entre le développement et la mise en service, comme un chef d'orchestre qui coordonne tous les musiciens.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 21,
    examId: 'examen_1',
    question: "Quelle activité de la chaîne de valeur permet de s'assurer que les personnes comprennent la vision de l'organisation ?",
    options: {
      A: "Améliorer",
      B: "Planifier",
      C: "Fournir et soutenir",
      D: "Obtenir/Construire"
    },
    correctAnswer: 'B',
    explanation: "Le but de l'activité de la chaîne de valeur « planifier » est d'assurer une compréhension commune de la vision, de l'état actuel et une direction des améliorations pour les quatre dimensions et tous les produits et services de l'organisation.",
    simplifiedExplanation: "Planifier, c'est s'assurer que tout le monde comprend où on va et comment on y arrive, comme un GPS qui montre la destination et le chemin.",
    relatedCourseSection: "chaine-valeur"
  },
  {
    id: 22,
    examId: 'examen_1',
    question: "Quel énoncé sur les activités de la chaîne de valeur est CORRECT ?",
    options: {
      A: "Chaque pratique appartient à une activité spécifique de la chaîne de valeur",
      B: "Une combinaison spécifique d'activités de la chaîne de valeur et de pratiques constitue une relation de service",
      C: "Les activités de la chaîne de valeur constituent un flux de travail unique qui permet de créer de la valeur",
      D: "Chaque activité de la chaîne de valeur contribue à la chaîne de valeur en transformant des entrées spécifiques en livrables"
    },
    correctAnswer: 'D',
    explanation: "Ces activités représentent les étapes qu'une organisation entreprend pour créer de la valeur. Chaque activité transforme des entrées en livrables. Ces entrées peuvent être des demandes provenant de l'extérieur de la chaîne de valeur ou à des livrables issus d'autres activités.",
    simplifiedExplanation: "Chaque activité de la chaîne de valeur transforme quelque chose en quelque chose d'autre, comme une usine qui transforme des matières premières en produits finis.",
    relatedCourseSection: "chaine-valeur"
  },
  {
    id: 23,
    examId: 'examen_1',
    question: "Quel est le but de la pratique de « gestion des fournisseurs » ?",
    options: {
      A: "S'assurer que les fournisseurs de l'organisation et leurs performances sont gérés de manière appropriée afin de soutenir l'approvisionnement continu de produits et services de qualité",
      B: "Aligner les pratiques et services de l'organisation sur les besoins business évolutifs via l'identification et l'amélioration continues des services",
      C: "S'assurer que les fournisseurs de l'organisation et leurs performances sont gérés de manière appropriée et aux niveaux stratégiques et tactiques au moyen d'activités coordonnées de marketing, de vente et de fourniture",
      D: "S'assurer que des informations exactes et fiables sur la configuration des services des fournisseurs sont disponibles quand et où elles sont nécessaires"
    },
    correctAnswer: 'A',
    explanation: "Le but de la pratique de gestion des fournisseurs est de s'assurer que les fournisseurs de l'organisation et leurs niveaux de performance sont gérés de manière appropriée, afin de soutenir l'approvisionnement en produits et services de qualité, parfaitement intégrés.",
    simplifiedExplanation: "La gestion des fournisseurs s'assure que les partenaires externes livrent bien ce qu'ils promettent, comme un chef qui vérifie la qualité de ses ingrédients.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 24,
    examId: 'examen_1',
    question: "Quels sont les deux types de coûts que le consommateur d'un service doit évaluer ?",
    options: {
      A: "Le prix du service et le coût de la création du service",
      B: "Les coûts supprimés par le service et les coûts imposés par le service",
      C: "Le coût de la fourniture du service et le coût de l'amélioration du service",
      D: "Le coût du logiciel et le coût du matériel"
    },
    correctAnswer: 'B',
    explanation: "Du point de vue du consommateur du service, deux types de coûts sont impliqués : 1. Les coûts supprimés pour le consommateur de service (une partie de la proposition de valeur). 2. Les coûts imposés au consommateur par le service (les coûts de la consommation du service).",
    simplifiedExplanation: "Un service coûte quelque chose mais fait aussi économiser quelque chose. Il faut peser le pour et le contre, comme prendre un taxi versus conduire sa voiture.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 25,
    examId: 'examen_1',
    question: "Laquelle des options suivantes est un but de la pratique du « centre de services » ?",
    options: {
      A: "Réduire la probabilité et l'impact des incidents en identifiant leurs causes réelles ou potentielles",
      B: "Maximiser le nombre de changements informatiques réussis en vérifiant que les risques sont correctement évalués",
      C: "Capturer la demande de résolution d'incidents et les demandes de services",
      D: "Définir des objectifs de performances des services, précis et basés sur le business"
    },
    correctAnswer: 'C',
    explanation: "Le but de la pratique du centre de services est de capturer la demande de résolution des incidents et les demandes de services. Elle doit également être le point d'entrée et le point de contact unique pour le fournisseur de services avec tous ses utilisateurs.",
    simplifiedExplanation: "Le centre de services capture et traite toutes les demandes des utilisateurs, comme un centre d'appels qui reçoit et traite les appels.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 26,
    examId: 'examen_1',
    question: "De quelle façon une organisation doit-elle adopter des méthodes d'amélioration continue ?",
    options: {
      A: "En utilisant une nouvelle méthode pour chaque amélioration gérée par l'organisation",
      B: "En choisissant quelques méthodes clés pour les types d'améliorations gérées par l'organisation",
      C: "En renforçant l'aptitude à utiliser autant de méthodes d'amélioration que possible",
      D: "En choisissant une seule méthode pour toutes les améliorations gérées par l'organisation"
    },
    correctAnswer: 'B',
    explanation: "Le guide décrit les différentes méthodes qui peuvent être utilisées pour des initiatives d'amélioration et met en garde contre l'utilisation de trop de méthodes. Le guide stipule : Il est judicieux de sélectionner quelques méthodes clés appropriées pour les types d'améliorations que l'organisation gère habituellement.",
    simplifiedExplanation: "Il vaut mieux maîtriser quelques bonnes méthodes d'amélioration plutôt que d'en essayer trop à la fois. C'est comme apprendre quelques langues bien plutôt que d'en baragouiner dix.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 27,
    examId: 'examen_1',
    question: "Quel concept ITIL décrit la gouvernance ?",
    options: {
      A: "Les sept principes directeurs",
      B: "Les quatre dimensions de la gestion des services",
      C: "La chaîne de valeur des services",
      D: "Le système de valeur des services"
    },
    correctAnswer: 'D',
    explanation: "Les composants du système de valeur des services sont « principes directeurs », « gouvernance », « chaîne de valeur des services », « pratiques » et « amélioration continue ».",
    simplifiedExplanation: "La gouvernance fait partie du système de valeur des services, comme le conseil d'administration fait partie de la structure d'une entreprise.",
    relatedCourseSection: "svs"
  },
  {
    id: 28,
    examId: 'examen_1',
    question: "Laquelle des options suivantes est une recommandation de la pratique du « centre de services » ?",
    options: {
      A: "Les centres de services doivent éviter de recourir à l'automatisation",
      B: "Les centres de services doivent être très techniques",
      C: "Les centres de services doivent comprendre l'organisation dans son ensemble",
      D: "Les centres de services doivent être constitués d'une équipe physique basée dans un même endroit fixe"
    },
    correctAnswer: 'C',
    explanation: "Une autre caractéristique clé d'un bon centre de services est sa compréhension pratique du contexte business plus large, des processus business et des utilisateurs.",
    simplifiedExplanation: "Un bon centre de services doit comprendre le business dans son ensemble, pas seulement la technique. C'est comme un bon vendeur qui comprend les besoins de ses clients.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 29,
    examId: 'examen_1',
    question: "Quel principe directeur recommande d'organiser le travail en parties plus petites et gérables qui peuvent être exécutées et effectuées dans un délai convenable ?",
    options: {
      A: "Privilégier la valeur",
      B: "Commencer là où vous êtes",
      C: "Avancer par itération avec des retours",
      D: "Collaborer et promouvoir la visibilité"
    },
    correctAnswer: 'C',
    explanation: "La description du principe directeur « avancer par itération avec des retours » indique qu'en organisant le travail en parties plus petites et gérables qui peuvent être exécutées et effectuées dans un délai convenable, l'accent mis sur chaque effort sera plus précis et plus facile à maintenir.",
    simplifiedExplanation: "Diviser pour mieux régner : il vaut mieux faire de petits pas réguliers qu'un grand saut risqué.",
    relatedCourseSection: "principes"
  },
  {
    id: 30,
    examId: 'examen_1',
    question: "Qu'est-ce qu'un changement standard ?",
    options: {
      A: "Un changement préautorisé qui est bien compris et intégralement documenté",
      B: "Un changement qui doit être évalué, autorisé et planifié par une autorité de changement",
      C: "Un changement qui ne requiert pas d'évaluation des risques étant donné qu'il est nécessaire à la résolution d'un incident",
      D: "Un changement évalué, autorisé et planifié dans le cadre d'une « amélioration continue »"
    },
    correctAnswer: 'A',
    explanation: "Il s'agit de changements préautorisés, à faible risque, qui sont bien compris et intégralement documentés, et qui peuvent être implémentés sans nécessiter d'autorisation supplémentaire. Ceux-ci sont souvent initiés en tant que demandes de service.",
    simplifiedExplanation: "Un changement standard est comme une procédure de routine bien rodée, déjà approuvée et documentée.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 31,
    examId: 'examen_1',
    question: "Que se passe-t-il lorsqu'une solution de contournement devient la façon permanente de traiter un problème ne pouvant pas être résolu de façon rentable ?",
    options: {
      A: "Une demande de changement est soumise au contrôle des changements",
      B: "La gestion des problèmes restaure le service dès que possible",
      C: "Le problème conserve l'état d'erreur connue",
      D: "L'enregistrement du problème est supprimé"
    },
    correctAnswer: 'C',
    explanation: "Une solution de contournement efficace pour un incident peut devenir un moyen permanent de traiter certains problèmes lorsque la résolution du problème ne s'avère ni viable, ni rentable. Dans ce cas de figure, le problème conserve le statut d'erreur connue et la solution de contournement documentée s'applique en cas d'incidents successifs.",
    simplifiedExplanation: "Quand une solution temporaire devient permanente car la vraie solution coûte trop cher, on garde le problème en 'erreur connue' avec sa solution de contournement.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 32,
    examId: 'examen_1',
    question: "Quelle est la définition d'un changement ?",
    options: {
      A: "Ajouter, modifier ou supprimer tout ce qui pourrait avoir un effet direct ou indirect sur les services",
      B: "S'assurer que des informations exactes et fiables sur la configuration des services sont disponibles",
      C: "Mettre à disposition des fonctionnalités ou des services nouveaux ou modifiés",
      D: "Déplacer du matériel, logiciels nouveaux ou modifiés ou tout autre composant vers des environnements de production"
    },
    correctAnswer: 'A',
    explanation: "Un changement correspond à l'ajout, la modification ou la suppression de tout ce qui pourrait avoir un effet direct ou indirect sur les services.",
    simplifiedExplanation: "Un changement, c'est toute modification qui peut affecter un service, même indirectement.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 33,
    examId: 'examen_1',
    question: "Quelle est la définition d'un événement ?",
    options: {
      A: "Tout changement d'état significatif pour la gestion d'un service ou de tout autre élément de configuration",
      B: "Tout composant qui doit être géré afin de fournir un service informatique",
      C: "L'interruption non planifiée d'un service ou réduction de la qualité d'un service",
      D: "Tout composant présentant une certaine valeur financière, qui est susceptible de contribuer à la fourniture de services ou produits informatiques"
    },
    correctAnswer: 'A',
    explanation: "Un événement peut être défini comme un changement d'état significatif pour la gestion d'un service ou de tout autre élément de configuration.",
    simplifiedExplanation: "Un événement, c'est quand quelque chose change d'état de manière importante, comme un feu qui passe au rouge.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 34,
    examId: 'examen_1',
    question: "Quelle option décrit des résultats ?",
    options: {
      A: "Éléments livrables tangibles ou intangibles",
      B: "Fonctionnalité offerte par un produit ou un service",
      C: "Résultats souhaités par une partie prenante",
      D: "Configuration des ressources d'une organisation"
    },
    correctAnswer: 'C',
    explanation: "Un résultat est résultat pour une partie prenante, rendu possible par un ou plusieurs livrables. La définition d'un service décrit la façon dont la valeur d'un service permet la cocréation de valeur en facilitant les résultats que les clients veulent atteindre.",
    simplifiedExplanation: "Les résultats sont ce que les parties prenantes veulent obtenir grâce au service, leurs objectifs finaux.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 35,
    examId: 'examen_1',
    question: "Laquelle des options suivantes NE constitue PAS un élément clé de la dimension « information et technologie » ?",
    options: {
      A: "Sécurité et conformité",
      B: "Systèmes de communication et bases de connaissances",
      C: "Systèmes de gestion du flux de travaux et systèmes d'inventaire",
      D: "Rôles et responsabilités"
    },
    correctAnswer: 'D',
    explanation: "La dimension des organisations et personnes d'un service couvre les rôles et responsabilités, les structures organisationnelles formelles, la culture, ainsi que les compétences et le personnel requis, qui sont tous liés à la création, à la fourniture et à l'amélioration d'un service.",
    simplifiedExplanation: "Les rôles et responsabilités appartiennent à la dimension 'Organisations et personnes', pas à 'Information et technologie'.",
    relatedCourseSection: "dimensions"
  },
  {
    id: 36,
    examId: 'examen_1',
    question: "Quelles pratiques sont généralement impliquées dans l'implémentation de la résolution d'un problème ?\n1. L'amélioration continue\n2. La gestion des demandes de service\n3. La gestion des niveaux de service\n4. L'habilitation des changements",
    options: {
      A: "1 et 2",
      B: "2 et 3",
      C: "3 et 4",
      D: "1 et 4"
    },
    correctAnswer: 'D',
    explanation: "(1) Les activités de gestion des problèmes permettent d'identifier les opportunités d'amélioration dans les quatre dimensions de la gestion des services. Dans certains cas, des solutions peuvent être traitées comme des opportunités d'amélioration afin qu'elles soient incluses dans un registre d'amélioration continue. (4) Le contrôle des erreurs comprend également l'identification des solutions permanentes potentielles pouvant entraîner une demande de changement pour l'implémentation d'une solution.",
    simplifiedExplanation: "Pour résoudre un problème, on a souvent besoin d'amélioration continue (pour identifier les opportunités) et d'habilitation des changements (pour implémenter la solution).",
    relatedCourseSection: "pratiques"
  },
  {
    id: 37,
    examId: 'examen_1',
    question: "Laquelle des options suivantes constitue un élément clé du principe directeur « opter pour la simplicité et rester pratique » ?",
    options: {
      A: "Essayer de créer une solution pour chaque exception",
      B: "Comprendre comment chaque élément contribue à la création de valeur",
      C: "Ignorer les objectifs contradictoires des différentes parties prenantes",
      D: "Commencer par une solution complexe, puis simplifier"
    },
    correctAnswer: 'B',
    explanation: "Le principe directeur « Opter pour la simplicité et rester pratique » stipule : Lorsque vous analysez une pratique, un processus, un service, une métrique ou une autre cible d'amélioration, demandez-vous toujours si elle contribue à la création de valeur.",
    simplifiedExplanation: "Chaque élément doit apporter de la valeur, sinon il faut s'en débarrasser. C'est le principe du 'moins c'est plus'.",
    relatedCourseSection: "principes"
  },
  {
    id: 38,
    examId: 'examen_1',
    question: "Que faut-il faire en premier lieu lorsque l'on applique le principe directeur « privilégier la valeur » ?",
    options: {
      A: "Identifier les résultats facilités par le service",
      B: "Identifier tous les fournisseurs et les partenaires impliqués dans le service",
      C: "Déterminer qui est le consommateur du service dans chaque situation",
      D: "Déterminer le coût de la fourniture du service"
    },
    correctAnswer: 'C',
    explanation: "Pour privilégier la valeur, la première étape est de savoir qui est servi. Dans chaque situation, le fournisseur de services doit, par conséquent, déterminer qui est le consommateur de services.",
    simplifiedExplanation: "Avant de créer de la valeur, il faut savoir pour qui on la crée. C'est comme demander 'pour qui est-ce que je cuisine ?' avant de préparer un repas.",
    relatedCourseSection: "principes"
  },
  {
    id: 39,
    examId: 'examen_1',
    question: "Un fournisseur de services décrit un package qui comprend un ordinateur portable fourni avec des logiciels, des licences et un support.\nDe quelle option ce package est-il un exemple ?",
    options: {
      A: "Valeur",
      B: "Résultat",
      C: "Garantie",
      D: "Offre de service"
    },
    correctAnswer: 'D',
    explanation: "Les fournisseurs de services définissent des combinaisons de biens, d'accès à des ressources et d'actions de service afin de répondre aux besoins des différents groupes de consommateurs. Ces combinaisons s'appellent des offres de services.",
    simplifiedExplanation: "Une offre de service combine plusieurs éléments (matériel, logiciel, support) en un package cohérent, comme un menu complet au restaurant.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 40,
    examId: 'examen_1',
    question: "Quelle est la définition d'une garantie ?",
    options: {
      A: "Élément livrable tangible ou intangible issu d'une activité",
      B: "Assurance qu'un produit ou service répondra aux exigences convenues",
      C: "Événement potentiel susceptible d'entraîner un préjudice ou une perte, ou d'entraver l'atteinte des objectifs",
      D: "La fonctionnalité offerte par un produit ou un service pour satisfaire un besoin particulier"
    },
    correctAnswer: 'B',
    explanation: "La garantie est l'assurance qu'un produit ou un service répondra aux exigences convenues.",
    simplifiedExplanation: "La garantie, c'est la promesse que le service fonctionnera comme convenu, comme une garantie sur un appareil électroménager.",
    relatedCourseSection: "fondamentaux"
  },

  // ÉCHANTILLON D'EXAMEN 2
  {
    id: 41,
    examId: 'examen_2',
    question: "Quel est l'effet de l'automatisation accrue sur la pratique « centre de services » ?",
    options: {
      A: "Meilleure capacité à se concentrer sur l'expérience client lorsqu'un contact personnel est nécessaire",
      B: "Diminution des enregistrements et des résolutions d'incidents en libre-service",
      C: "Capacité accrue de se concentrer sur la réparation des technologies au lieu de supporter les personnes",
      D: "Élimination du besoin d'escalader les incidents aux équipes de support"
    },
    correctAnswer: 'A',
    explanation: "Avec l'automatisation accrue... L'impact sur les centres de services se traduit par une réduction des contacts téléphoniques, moins de tâches de bas niveau, et une plus grande capacité à se concentrer sur une excellente expérience client lorsqu'un contact personnel est nécessaire.",
    simplifiedExplanation: "L'automatisation libère le centre de services des tâches répétitives pour se concentrer sur le contact humain quand c'est vraiment nécessaire.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 42,
    examId: 'examen_2',
    question: "Quel terme décrit la fonctionnalité offerte par un service ?",
    options: {
      A: "Coût",
      B: "Utilité",
      C: "Garantie",
      D: "Risque"
    },
    correctAnswer: 'B',
    explanation: "L'utilité est la fonctionnalité offerte par un produit ou un service.",
    simplifiedExplanation: "L'utilité, c'est ce que fait le service, sa fonction principale, comme la capacité d'une voiture à transporter des personnes.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 43,
    examId: 'examen_2',
    question: "Quel est le but de la pratique « surveillance et gestion des événements » ?",
    options: {
      A: "S'assurer que des informations exactes et fiables sur la configuration des services sont disponibles quand et où elles sont requises",
      B: "Observer systématiquement des services et des composants de service, et enregistrer et signaler certains changements d'état identifiés",
      C: "Protéger les informations dont l'organisation a besoin pour mener ses activités",
      D: "Réduire l'impact négatif des incidents, en restaurant l'exploitation normale des services aussi rapidement que possible"
    },
    correctAnswer: 'B',
    explanation: "Le but de la pratique de surveillance et de gestion des événements est d'observer systématiquement des services et composants de service, et d'enregistrer et de signaler certains changements d'états identifiés en tant qu'événements.",
    simplifiedExplanation: "Cette pratique surveille en permanence les services et signale les changements importants, comme un système d'alarme qui surveille une maison.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 44,
    examId: 'examen_2',
    question: "Sur quoi doivent être basées toutes les décisions d'amélioration continue ?",
    options: {
      A: "Détails sur la façon dont les services sont mesurés",
      B: "Données exactes, soigneusement analysées",
      C: "Tableau de bord équilibré et mis à jour",
      D: "Évaluation de maturité récente"
    },
    correctAnswer: 'B',
    explanation: "Des données exactes, soigneusement analysées et comprises, constituent le fondement d'une prise de décision fondée sur les faits en vue d'une amélioration. La pratique d'amélioration continue doit être soutenue par des sources d'information pertinentes et des analyses de données.",
    simplifiedExplanation: "Les décisions d'amélioration doivent s'appuyer sur des faits réels et des données fiables, pas sur des suppositions.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 45,
    examId: 'examen_2',
    question: "Comment les activités de la chaîne de valeur transforment-elles les intrants en livrables ?",
    options: {
      A: "En déterminant la demande de services",
      B: "En utilisant une combinaison de pratiques",
      C: "En utilisant une seule équipe fonctionnelle",
      D: "En implémentant l'automatisation des processus"
    },
    correctAnswer: 'B',
    explanation: "Pour convertir les entrées en livrables, les activités de la chaîne de valeur utilisent différentes combinaisons de pratiques ITIL.",
    simplifiedExplanation: "Chaque activité utilise un mix de pratiques ITIL pour transformer les entrées en sorties utiles, comme un chef qui combine différentes techniques pour créer un plat.",
    relatedCourseSection: "chaine-valeur"
  },
  {
    id: 46,
    examId: 'examen_2',
    question: "Comment l'implication des clients contribue-t-elle à la pratique de « gestion des niveaux de service » ?\n1. Elle permet de capturer les informations servant de base aux mesures.\n2. Elle s'assure que l'organisation atteint les niveaux de service définis.\n3. Elle définit les flux de travail pour les demandes de service.\n4. Elle supporte les discussions sur les progrès.",
    options: {
      A: "1 et 2",
      B: "2 et 3",
      C: "3 et 4",
      D: "1 et 4"
    },
    correctAnswer: 'D',
    explanation: "(1), (4) Implication du client : cela implique l'écoute initiale, la découverte et la saisie d'informations sur lesquelles baser les métriques, les mesures et les discussions régulières sur les progrès.",
    simplifiedExplanation: "Les clients aident à définir ce qu'il faut mesurer et participent aux discussions sur les progrès, comme des partenaires dans l'amélioration du service.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 47,
    examId: 'examen_2',
    question: "Quel est le point de départ de l'optimisation ?",
    options: {
      A: "Obtenir l'implication des parties prenantes",
      B: "Comprendre la vision et les objectifs de l'organisation",
      C: "Déterminer où l'impact le plus positif se produirait",
      D: "Standardiser les pratiques et les services"
    },
    correctAnswer: 'B',
    explanation: "La première étape du principe « optimiser et automatiser » est : comprendre et convenir du contexte dans lequel l'optimisation proposée existe. Cela inclut de convenir de la vision globale et des objectifs de l'organisation.",
    simplifiedExplanation: "Avant d'optimiser, il faut comprendre où on veut aller et pourquoi, comme définir sa destination avant de choisir son itinéraire.",
    relatedCourseSection: "principes"
  },
  {
    id: 48,
    examId: 'examen_2',
    question: "Identifier les mots manquants dans la phrase suivante.\n[?] a pour but de s'assurer que l'organisation co-crée continuellement de la valeur avec toutes les parties prenantes, conformément aux objectifs de l'organisation.",
    options: {
      A: "Le principe directeur « privilégier la valeur »",
      B: "Les quatre dimensions de la gestion des services",
      C: "Le système de valeur des services",
      D: "La pratique « gestion des demandes de service »"
    },
    correctAnswer: 'C',
    explanation: "Le but du système de valeur des services est de s'assurer que l'organisation et toutes les parties prenantes créent continuellement de la valeur en collaboration, par le biais de l'utilisation et la gestion des produits et des services.",
    simplifiedExplanation: "Le système de valeur des services orchestre tout pour créer de la valeur en continu avec toutes les parties prenantes.",
    relatedCourseSection: "svs"
  },
  {
    id: 49,
    examId: 'examen_2',
    question: "Quelle pratique supporte la gestion des retours, des compliments et des plaintes des utilisateurs ?",
    options: {
      A: "L'habilitation des changements",
      B: "La gestion des demandes de service",
      C: "La gestion des problèmes",
      D: "La gestion des incidents"
    },
    correctAnswer: 'B',
    explanation: "Le but de la pratique de gestion des demandes de service est de soutenir la qualité convenue d'un service en gérant l'ensemble des demandes de service prédéfinies et initiées par l'utilisateur... Chaque demande de service peut inclure un ou plusieurs des éléments suivants : retours, compliments et plaintes.",
    simplifiedExplanation: "La gestion des demandes de service traite tous les retours des utilisateurs, qu'ils soient positifs ou négatifs.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 50,
    examId: 'examen_2',
    question: "Quelle activité effectuée conjointement par le fournisseur de services et le consommateur de service s'assure d'une co-création continue de valeur ?",
    options: {
      A: "La fourniture de service",
      B: "La consommation de service",
      C: "L'offre de service",
      D: "La gestion des relations de service"
    },
    correctAnswer: 'D',
    explanation: "La gestion des relations de service désigne les activités effectuées conjointement par un fournisseur de services et un consommateur de services pour assurer la cocréation continue de valeur, basée sur des offres de service disponibles et convenues.",
    simplifiedExplanation: "La gestion des relations de service est le travail en commun entre fournisseur et client pour créer de la valeur ensemble.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 51,
    examId: 'examen_2',
    question: "Quelle pratique peut comporter le déclenchement d'une reprise après une catastrophe ?",
    options: {
      A: "La gestion des incidents",
      B: "La gestion des demandes de service",
      C: "La gestion des niveaux de service",
      D: "La gestion des actifs informatiques"
    },
    correctAnswer: 'A',
    explanation: "Dans certaines situations extrêmes, la résolution d'un incident requiert le déclenchement de plans de reprise après une catastrophe.",
    simplifiedExplanation: "Dans les cas les plus graves, la gestion des incidents peut déclencher le plan de reprise après catastrophe pour restaurer le service.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 52,
    examId: 'examen_2',
    question: "Quel type de changement est le PLUS susceptible d'être géré par la pratique « gestion des demandes de service » ?",
    options: {
      A: "Un changement normal",
      B: "Un changement urgent",
      C: "Un changement standard",
      D: "Un changement applicatif"
    },
    correctAnswer: 'C',
    explanation: "L'exécution des demandes de service peut inclure des changements au niveau des services ou à leurs composants ; il s'agit généralement de changements standards... Il s'agit de changements préautorisés, à faible risque, qui sont bien compris et intégralement documentés. Ceux-ci sont souvent initiés en tant que demandes de service.",
    simplifiedExplanation: "Les changements standard sont souvent gérés comme des demandes de service car ils sont routiniers et pré-approuvés.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 53,
    examId: 'examen_2',
    question: "Quel principe directeur met l'accent sur la nécessité de comprendre le flux de travail en cours, d'identifier les goulots d'étranglement et de découvrir les gaspillages ?",
    options: {
      A: "Privilégier la valeur",
      B: "Collaborer et promouvoir la visibilité",
      C: "Penser et travailler de façon holistique",
      D: "Opter pour la simplicité et rester pratique"
    },
    correctAnswer: 'B',
    explanation: "Le principe « collaborer et promouvoir la visibilité » affirme qu'une visibilité insuffisante du travail entraîne une mauvaise prise de décisions. Pour éviter cela, l'organisation doit effectuer des activités critiques telles que : comprendre le flux des travaux en cours ; identifier les goulots d'étranglement ainsi que la capacité excédentaire ; détecter les gaspillages.",
    simplifiedExplanation: "Pour bien collaborer, il faut voir ce qui se passe vraiment : où ça coince, où on gaspille, comment le travail circule.",
    relatedCourseSection: "principes"
  },
  {
    id: 54,
    examId: 'examen_2',
    question: "Laquelle des options suivantes est un moyen de permettre la co-création de valeur en facilitant des résultats que les clients veulent atteindre ?",
    options: {
      A: "Un service",
      B: "Un livrable",
      C: "Une pratique",
      D: "L'amélioration continue"
    },
    correctAnswer: 'A',
    explanation: "Un service est un moyen de permettre la cocréation de valeur en facilitant des résultats que les clients veulent atteindre, sans qu'ils n'aient à gérer les coûts et les risques spécifiques.",
    simplifiedExplanation: "Un service aide les clients à atteindre leurs objectifs sans qu'ils aient à s'occuper des détails techniques et des risques.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 55,
    examId: 'examen_2',
    question: "Quel énoncé sur l'autorisation des changements est CORRECT ?",
    options: {
      A: "Une autorité de changement doit être affectée à chaque type et à chaque modèle de changement",
      B: "Centraliser les autorisations de changement auprès d'une seule personne est le mode d'autorisation le plus efficace",
      C: "L'autorisation des changements normaux doit être accélérée pour s'assurer qu'ils soient implémentés rapidement",
      D: "Les changements standards présentent un risque élevé et doivent être autorisés au plus haut niveau de l'autorité de changement"
    },
    correctAnswer: 'A',
    explanation: "Il est essentiel d'assigner l'autorité de changement appropriée à chaque type de changement afin d'assurer l'efficacité et l'efficience de l'habilitation de changements.",
    simplifiedExplanation: "Chaque type de changement a besoin de son niveau d'autorisation approprié, comme différents niveaux de signature selon l'importance de la décision.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 56,
    examId: 'examen_2',
    question: "Quelle dimension de la gestion des services prend en compte la gouvernance, la gestion et la communication ?",
    options: {
      A: "Organisations et personnes",
      B: "Information et technologie",
      C: "Partenaires et fournisseurs",
      D: "Flux de valeur et processus"
    },
    correctAnswer: 'A',
    explanation: "Il est important de s'assurer que la structure et le mode de gestion d'une organisation, ainsi que ses rôles, responsabilités et systèmes d'autorisation et de communication, sont correctement définis et soutiennent correctement sa stratégie globale et son modèle opérationnel.",
    simplifiedExplanation: "La dimension 'Organisations et personnes' couvre tout ce qui concerne la structure, les rôles et la communication dans l'organisation.",
    relatedCourseSection: "dimensions"
  },
  {
    id: 57,
    examId: 'examen_2',
    question: "Identifiez les mots manquants dans la phrase suivante.\nUne erreur connue est un problème qui a été [?] et n'a pas été résolu.",
    options: {
      A: "...enregistré",
      B: "...analysé",
      C: "...escaladé",
      D: "...clos"
    },
    correctAnswer: 'B',
    explanation: "Une erreur connue est un problème ayant été analysé, mais non résolu.",
    simplifiedExplanation: "Une erreur connue est un problème qu'on a étudié et compris, mais qu'on n'a pas encore corrigé.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 58,
    examId: 'examen_2',
    question: "Quel énoncé sur les erreurs connues et les problèmes est CORRECT ?",
    options: {
      A: "Une erreur connue est l'état attribué à un problème une fois ce dernier analysé",
      B: "Une erreur connue est la cause d'un ou de plusieurs problèmes",
      C: "Les erreurs connues entraînent des vulnérabilités, les problèmes entraînent des incidents",
      D: "Les erreurs connues sont gérées par le personnel technique, les problèmes sont gérés par les équipes de gestion des services"
    },
    correctAnswer: 'A',
    explanation: "Les erreurs connues sont des problèmes pour lesquels une analyse initiale a été effectuée. Cela signifie généralement que des composants défectueux ont été identifiés, le problème reste à l'état d'erreur connue.",
    simplifiedExplanation: "Une erreur connue, c'est le statut qu'on donne à un problème une fois qu'on l'a analysé et compris.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 59,
    examId: 'examen_2',
    question: "De quoi dépend la pratique de « gestion des demandes de service » pour une efficience maximale ?",
    options: {
      A: "Des compliments et des réclamations",
      B: "Des outils en libre-service",
      C: "Des processus et des procédures",
      D: "De la gestion des incidents"
    },
    correctAnswer: 'C',
    explanation: "La gestion des demandes de service dépend de processus et de procédures bien conçus, qui sont rendus opérationnels à l'aide d'outils de suivi et d'automatisation pour maximiser l'efficience de la pratique.",
    simplifiedExplanation: "Pour être efficace, la gestion des demandes de service a besoin de processus clairs et bien organisés.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 60,
    examId: 'examen_2',
    question: "Quel énoncé sur la pratique « centre de services » est CORRECT ?",
    options: {
      A: "Il fournit un lien entre les parties prenantes aux niveaux stratégiques et tactiques",
      B: "Il procède à l'évaluation et à l'autorisation des changements",
      C: "Il enquête sur l'origine des incidents",
      D: "Il requiert une compréhension pratique des processus business"
    },
    correctAnswer: 'D',
    explanation: "Une autre caractéristique clé d'un bon centre de services est sa compréhension pratique du contexte business plus large, des processus business et des utilisateurs.",
    simplifiedExplanation: "Un bon centre de services doit comprendre le business dans son ensemble, pas seulement les aspects techniques.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 61,
    examId: 'examen_2',
    question: "Quelle pratique s'assure de la disponibilité d'informations fiables et précises sur les éléments de configuration et les relations entre ces derniers ?",
    options: {
      A: "La gestion de la configuration des services",
      B: "Le centre de services",
      C: "La gestion des actifs informatiques",
      D: "La surveillance et gestion des événements"
    },
    correctAnswer: 'A',
    explanation: "Le but de la pratique de gestion de la configuration des services est de s'assurer que des informations exactes et fiables sur la configuration des services des fournisseurs, et sur les éléments de configuration qui les supportent, sont disponibles au moment et à l'endroit requis. Cela inclut les informations sur la manière dont les CI sont configurés et les relations entre eux.",
    simplifiedExplanation: "La gestion de la configuration maintient un inventaire précis de tous les composants et leurs relations, comme un plan détaillé d'une machine complexe.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 62,
    examId: 'examen_2',
    question: "Quelle pratique a pour but de rétablir aussi rapidement que possible le fonctionnement normal des services ?",
    options: {
      A: "La gestion des fournisseurs",
      B: "La gestion des déploiements",
      C: "La gestion des problèmes",
      D: "La gestion des incidents"
    },
    correctAnswer: 'D',
    explanation: "Le but de la pratique de gestion des incidents est de réduire l'impact négatif des incidents en restaurant le fonctionnement normal des services aussi rapidement que possible.",
    simplifiedExplanation: "La gestion des incidents se concentre sur la restauration rapide du service, comme les urgences médicales qui visent d'abord à stabiliser le patient.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 63,
    examId: 'examen_2',
    question: "Identifiez les mots manquants dans la phrase suivante.\nUn client est une personne qui définit les exigences relatives à un service et assume la responsabilité [?] de la consommation du service.",
    options: {
      A: "...des livrables",
      B: "...des résultats",
      C: "...des coûts",
      D: "...des risques"
    },
    correctAnswer: 'B',
    explanation: "Client : le rôle qui définit les exigences relatives à un service et qui assume la responsabilité des résultats de la consommation du service.",
    simplifiedExplanation: "Le client est responsable des résultats obtenus grâce au service, pas seulement de le payer.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 64,
    examId: 'examen_2',
    question: "Quel principe directeur décrit l'importance d'agir plutôt que de consacrer beaucoup de temps à l'analyse des différentes options ?",
    options: {
      A: "Optimiser et automatiser",
      B: "Commencer là où vous êtes",
      C: "Privilégier la valeur",
      D: "Avancer par itération avec des retours"
    },
    correctAnswer: 'D',
    explanation: "« Avancer par itération avec des retours » recommande de comprendre la situation globale, mais de faire quelque chose : parfois, le pire ennemi de la progression par itérations est la volonté de tout comprendre et de tout justifier. Cela peut entraîner ce que l'on appelle parfois la « paralyse par analyse ».",
    simplifiedExplanation: "Il vaut mieux agir avec des informations partielles et s'ajuster en cours de route plutôt que d'analyser indéfiniment.",
    relatedCourseSection: "principes"
  },
  {
    id: 65,
    examId: 'examen_2',
    question: "Que faut-il faire pour chaque problème ?",
    options: {
      A: "Il doit faire l'objet d'un diagnostic pour identifier les solutions possibles",
      B: "Sa priorité doit être établie en fonction de son impact potentiel et de sa probabilité",
      C: "Il doit être résolu pour pouvoir être clos",
      D: "Une solution de contournement doit être trouvée pour réduire son impact"
    },
    correctAnswer: 'B',
    explanation: "Les problèmes sont classés par ordre de priorité à des fins d'analyse selon le risque qu'ils posent, puis gérés en tant que risque selon leur impact potentiel et leur probabilité.",
    simplifiedExplanation: "Chaque problème doit être priorisé selon son risque : quelle est la gravité s'il se produit et quelle est la probabilité qu'il arrive.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 66,
    examId: 'examen_2',
    question: "Comment une organisation doit-elle inclure des fournisseurs tiers dans l'amélioration continue de ses services ?",
    options: {
      A: "En s'assurant que les fournisseurs expliquent en détail leur approche d'amélioration des services dans leurs contrats",
      B: "En exigeant la preuve que les fournisseurs utilisent des méthodes de développement agiles",
      C: "En exigeant la preuve que les fournisseurs implémentent toutes les améliorations à l'aide de pratiques de gestion des projets",
      D: "En s'assurant que toutes les activités de gestion des problèmes des fournisseurs entraînent des améliorations"
    },
    correctAnswer: 'A',
    explanation: "Lorsqu'un contrat est mis en place pour les services d'un fournisseur, le contrat doit stipuler les méthodes de mesure, de création de rapports et d'amélioration de leurs services sur toute la durée du contrat.",
    simplifiedExplanation: "Il faut que les fournisseurs expliquent dans leurs contrats comment ils vont améliorer leurs services de manière continue.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 67,
    examId: 'examen_2',
    question: "Quelles considérations influencent la stratégie fournisseurs d'une organisation ?",
    options: {
      A: "Les contrats et les accords",
      B: "Le type de coopération avec les fournisseurs",
      C: "La culture d'entreprise de l'organisation",
      D: "Le niveau de formalité"
    },
    correctAnswer: 'C',
    explanation: "Culture d'entreprise : certaines organisations ont une préférence historique pour une approche plutôt qu'une autre. Il est difficile de changer les préjugés culturels de longue date sans motif impérieux.",
    simplifiedExplanation: "La culture de l'entreprise influence fortement la façon dont elle travaille avec ses fournisseurs, car les habitudes culturelles sont difficiles à changer.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 68,
    examId: 'examen_2',
    question: "Qu'est-ce qu'un problème ?",
    options: {
      A: "L'ajout ou la modification de tout ce qui pourrait avoir un effet sur les services",
      B: "Tout changement d'état significatif pour la gestion d'un élément de configuration",
      C: "La cause réelle ou potentielle d'un ou de plusieurs incidents",
      D: "La réduction imprévue de la qualité d'un service"
    },
    correctAnswer: 'C',
    explanation: "Un problème est une cause réelle ou potentielle d'un ou de plusieurs incidents.",
    simplifiedExplanation: "Un problème est la cause sous-jacente qui peut provoquer un ou plusieurs incidents, comme une fuite qui peut causer plusieurs pannes.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 69,
    examId: 'examen_2',
    question: "Quel est le but de la pratique de « gestion des relations » ?",
    options: {
      A: "Aligner les pratiques et services de l'organisation sur les besoins business évolutifs",
      B: "Établir et entretenir des liens entre une organisation et ses parties prenantes aux niveaux stratégiques et tactiques",
      C: "Réduire la probabilité et l'impact des incidents, en identifiant leur cause réelle ou potentielle et en gérant les solutions de contournement et les erreurs connues",
      D: "Réduire l'impact négatif des incidents, en restaurant l'exploitation normale des services aussi rapidement que possible"
    },
    correctAnswer: 'B',
    explanation: "Le but de la pratique de gestion des relations est d'établir et d'entretenir des liens entre une organisation et ses parties prenantes aux niveaux stratégiques et tactiques. Elle inclut l'identification, l'analyse, la surveillance et l'amélioration continue des relations avec et entre les parties prenantes.",
    simplifiedExplanation: "La gestion des relations maintient de bonnes relations avec toutes les parties prenantes importantes, comme un diplomate qui entretient les relations internationales.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 70,
    examId: 'examen_2',
    question: "Laquelle des options suivantes vise à aider les organisations à adopter et adapter les conseils ITIL ?",
    options: {
      A: "Les quatre dimensions de la gestion des services",
      B: "Les principes directeurs",
      C: "La chaîne de valeur des services",
      D: "Les pratiques"
    },
    correctAnswer: 'B',
    explanation: "Les principes directeurs peuvent guider les organisations dans leur travail lorsqu'elles adoptent une approche de gestion des services, et adaptent les conseils ITIL à leurs besoins et circonstances spécifiques.",
    simplifiedExplanation: "Les principes directeurs aident les organisations à adapter ITIL à leur situation particulière, comme un guide qui s'adapte à différents terrains.",
    relatedCourseSection: "principes"
  },
  {
    id: 71,
    examId: 'examen_2',
    question: "Qu'est-ce qu'un livrable ?",
    options: {
      A: "Un changement d'état qui est significatif pour la gestion d'un élément de configuration",
      B: "Un événement possible susceptible d'entraîner un préjudice ou une perte",
      C: "Un résultat pour une partie prenante",
      D: "Quelque chose qui est créé à la suite d'une activité"
    },
    correctAnswer: 'D',
    explanation: "Un livrable est un élément livrable d'une activité, qu'il soit tangible ou intangible.",
    simplifiedExplanation: "Un livrable est le produit concret d'une activité, ce qu'elle produit ou crée.",
    relatedCourseSection: "fondamentaux"
  },
  {
    id: 72,
    examId: 'examen_2',
    question: "Quelle est la raison pour laquelle un ensemble équilibré de métriques de service est utilisé ?",
    options: {
      A: "Pour réduire le nombre de métriques à collecter",
      B: "Pour rapporter chaque élément de service séparément",
      C: "Pour fournir une perspective des services en fonction des résultats",
      D: "Pour faciliter la collectation automatique de métriques"
    },
    correctAnswer: 'C',
    explanation: "Elles [les métriques] doivent être liées à des résultats définis, et pas simplement à des métriques opérationnelles. Ils peuvent être accomplis avec des ensembles équilibrés de métriques.",
    simplifiedExplanation: "Un ensemble équilibré de métriques donne une vue complète du service du point de vue des résultats pour le client.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 73,
    examId: 'examen_2',
    question: "Pourquoi les incidents doivent-il être priorisés ?",
    options: {
      A: "Pour permettre l'appariement automatisé des incidents aux problèmes ou aux erreurs connues",
      B: "Pour identifier l'équipe de support vers laquelle l'incident doit être escaladé",
      C: "Pour s'assurer que les incidents ayant le plus fort impact business sont résolus en premier",
      D: "Pour encourager un haut niveau de collaboration au sein des équipes et entre ces dernières"
    },
    correctAnswer: 'C',
    explanation: "Les incidents sont priorisés selon une classification convenue qui permet de s'assurer que les incidents ayant le plus d'impact business sont résolus en premier.",
    simplifiedExplanation: "On priorise les incidents pour traiter d'abord ceux qui ont le plus d'impact sur le business, comme les urgences médicales.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 74,
    examId: 'examen_2',
    question: "Quelle pratique a pour but d'aider l'organisation à optimiser la valeur, maîtriser les coûts et gérer les risques ?",
    options: {
      A: "La gestion des relations",
      B: "La gestion des actifs informatiques",
      C: "La gestion des mises en production",
      D: "Le centre de services"
    },
    correctAnswer: 'B',
    explanation: "Le but de la pratique de gestion des actifs informatiques est de planifier et de gérer le cycle de vie complet de tous les actifs informatiques afin d'aider l'organisation à : maximiser la valeur, contrôler les coûts, gérer les risques.",
    simplifiedExplanation: "La gestion des actifs informatiques optimise la valeur des équipements IT tout en contrôlant les coûts et les risques, comme un gestionnaire de patrimoine.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 75,
    examId: 'examen_2',
    question: "Pourquoi le personnel du centre de services doit-il détecter les difficultés récurrentes ?",
    options: {
      A: "Pour mieux identifier les problèmes",
      B: "Pour escalader les incidents à la bonne équipe de support",
      C: "Pour assurer une gestion efficace des demandes de service",
      D: "Pour impliquer la bonne autorité de changement"
    },
    correctAnswer: 'A',
    explanation: "Les activités d'identification des problèmes permettent d'identifier et d'enregistrer les problèmes. Il s'agit notamment : ...détecter des difficultés dupliquées ou récurrentes par les utilisateurs, le centre de services et le personnel de support technique.",
    simplifiedExplanation: "Détecter les difficultés récurrentes aide à identifier les problèmes sous-jacents, comme un médecin qui reconnaît des symptômes répétitifs.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 76,
    examId: 'examen_2',
    question: "Quelle activité de la chaîne de valeur communique l'état actuel des quatre dimensions de la gestion des services ?",
    options: {
      A: "Améliorer",
      B: "Impliquer",
      C: "Obtenir/construire",
      D: "Planifier"
    },
    correctAnswer: 'D',
    explanation: "Le but de l'activité de la chaîne de valeur « planifier » est d'assurer une compréhension commune de la vision, de l'état actuel et une direction des améliorations pour les quatre dimensions et tous les produits et services de l'organisation.",
    simplifiedExplanation: "L'activité 'Planifier' fait le point sur la situation actuelle des quatre dimensions, comme un bilan de santé général.",
    relatedCourseSection: "chaine-valeur"
  },
  {
    id: 77,
    examId: 'examen_2',
    question: "Quel principe directeur se préoccupe PRINCIPALEMENT des recettes et de la croissance du consommateur ?",
    options: {
      A: "Opter pour la simplicité et rester pratique",
      B: "Optimiser et automatiser",
      C: "Avancer par itération avec des retours",
      D: "Privilégier la valeur"
    },
    correctAnswer: 'D',
    explanation: "Cette section est principalement axée sur la création de valeur pour les consommateurs de services... Cette valeur peut prendre plusieurs formes, comme les revenus, la fidélité du client, la réduction des coûts ou les possibilités de croissance.",
    simplifiedExplanation: "Le principe 'Privilégier la valeur' se concentre sur ce qui apporte vraiment de la valeur au consommateur, notamment en termes de revenus et de croissance.",
    relatedCourseSection: "principes"
  },
  {
    id: 78,
    examId: 'examen_2',
    question: "Quelle pratique fournit une visibilité sur les services de l'organisation en recueillant des données et en produisant des rapports sur la fourniture de services ?",
    options: {
      A: "Le centre de services",
      B: "La gestion des niveaux de service",
      C: "La gestion des demandes de service",
      D: "La gestion de la configuration des services"
    },
    correctAnswer: 'B',
    explanation: "La gestion des niveaux de service fournit une visibilité de bout en bout sur les services de l'organisation. Pour y parvenir, la gestion des niveaux de service... capture et crée des rapports sur les difficultés de service, en comparant notamment la performance aux niveaux de service définis.",
    simplifiedExplanation: "La gestion des niveaux de service donne une vue d'ensemble sur les performances des services grâce à la collecte de données et aux rapports.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 79,
    examId: 'examen_2',
    question: "Quel est le MEILLEUR exemple d'un changement urgent ?",
    options: {
      A: "L'implémentation d'une nouvelle mise en production planifiée d'application logicielle",
      B: "Une mise à niveau informatique à faible risque, implémentée en tant que demande de service",
      C: "L'implémentation d'un correctif de sécurité sur une application logicielle critique",
      D: "Une implémentation matérielle et logicielle majeure et planifiée"
    },
    correctAnswer: 'C',
    explanation: "Les changements urgents sont des changements qui doivent être implémentés dès que possible ; par exemple, pour résoudre un incident ou appliquer un correctif de sécurité.",
    simplifiedExplanation: "Un correctif de sécurité critique est un parfait exemple de changement urgent car il faut l'appliquer rapidement pour protéger les systèmes.",
    relatedCourseSection: "pratiques"
  },
  {
    id: 80,
    examId: 'examen_2',
    question: "Quel principe directeur recommande d'évaluer l'état actuel et de décider ce qui peut être réutilisé ?",
    options: {
      A: "Privilégier la valeur",
      B: "Commencer là où vous êtes",
      C: "Collaborer et promouvoir la visibilité",
      D: "Avancer par itération avec des retours"
    },
    correctAnswer: 'B',
    explanation: "Le principe directeur « commencer là où vous êtes » stipule qu'avoir une bonne compréhension de l'état actuel des services et méthodes est important afin de sélectionner les éléments à réutiliser, à modifier ou exploiter.",
    simplifiedExplanation: "Avant de tout changer, il faut d'abord évaluer ce qu'on a déjà et voir ce qui peut être gardé et réutilisé.",
    relatedCourseSection: "principes"
  }
]

// Fonction utilitaire pour obtenir des questions aléatoires sans répétition
export const getRandomExamPracticeQuestions = (
  count: number, 
  excludeIds: number[] = []
): ExamPracticeQuestion[] => {
  const availableQuestions = examPracticeQuestions.filter(
    q => !excludeIds.includes(q.id)
  )
  
  if (availableQuestions.length < count) {
    // Si pas assez de questions nouvelles, inclure toutes les disponibles
    return [...availableQuestions]
  }
  
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Fonction pour obtenir toutes les questions d'un examen spécifique
export const getQuestionsByExam = (examId: string): ExamPracticeQuestion[] => {
  return examPracticeQuestions.filter(q => q.examId === examId)
}

// Stats générales
export const EXAM_PRACTICE_STATS = {
  totalQuestions: examPracticeQuestions.length,
  exam1Questions: examPracticeQuestions.filter(q => q.examId === 'examen_1').length,
  exam2Questions: examPracticeQuestions.filter(q => q.examId === 'examen_2').length,
  questionCounts: [5, 10, 15, 20, 25, 30, 40] // Options de nombre de questions
}