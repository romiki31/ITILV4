# CLAUDE.md - Guide de Développement du Site ITIL v4 Foundation

## 📋 Vue d'ensemble du projet

Ce projet est un **guide de révision interactif** pour l'examen ITIL v4 Foundation, développé en React avec TypeScript et Vite. Le site vise à offrir une expérience d'apprentissage moderne et efficace pour préparer la certification ITIL v4.

## 🏗️ Architecture technique

### Stack technologique
- **Framework:** React 18 avec TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Déploiement:** Vercel
- **Gestion d'état:** React Context + localStorage pour la persistance

### Structure des dossiers
```
src/
├── components/          # Composants réutilisables
│   ├── QuizComponent.tsx
│   ├── FlashcardComponent.tsx
│   └── ...
├── pages/              # Pages principales
│   ├── HomePage.tsx
│   ├── ConceptsPage.tsx
│   ├── QuizPage.tsx
│   └── FlashcardsPage.tsx
├── data/               # Données statiques (JSON/TS)
│   ├── concepts.ts
│   ├── quiz.ts
│   ├── flashcards.ts
│   └── ...
├── types/              # Définitions TypeScript
│   └── index.ts
├── utils/              # Utilitaires
│   └── ...
└── styles/             # Styles globaux
```

## 🎯 Fonctionnalités principales

### 1. Navigation et Structure
- **Header avec navigation** : Accès rapide aux sections principales
- **Menu responsive** : Adaptation mobile/desktop
- **Breadcrumb** : Navigation contextuelle
- **Footer informatif** : Liens et informations complémentaires

### 2. Section Concepts
- **Affichage par catégories** : Concepts fondamentaux, principes, dimensions, etc.
- **Cards interactives** : Présentation visuelle attrayante
- **Système de filtrage** : Par catégorie, difficulté
- **Recherche** : Recherche textuelle dans les concepts
- **Favoris** : Système de bookmarking des concepts importants

### 3. Système de Quiz
- **Modes de quiz multiples** :
  - Quiz par catégorie (concepts, principes, dimensions, etc.)
  - Quiz par difficulté (facile, moyen, difficile)
  - Simulation d'examen (40 questions chronométrées)
  - Quiz personnalisés
- **Interface utilisateur** :
  - Questions à choix multiples (4 options)
  - Timer configurable
  - Barre de progression
  - Navigation entre questions
- **Système de scoring** :
  - Score en temps réel
  - Analyse des résultats
  - Historique des performances
  - Recommandations personnalisées
- **Explications détaillées** : Après chaque réponse avec conseils d'examen

### 4. Flashcards interactives
- **Animation 3D** : Effet de retournement au clic/hover
- **Modes d'étude** :
  - Révision libre
  - Mode challenge (chronométré)
  - Répétition espacée
- **Progression tracking** : Cartes maîtrisées vs. à revoir
- **Filtres** : Par catégorie, niveau de maîtrise

### 5. Système de progression
- **Dashboard personnel** :
  - Statistiques globales
  - Progression par catégorie
  - Points faibles identifiés
  - Objectifs de révision
- **Badges et achievements** : Gamification de l'apprentissage
- **Historique des sessions** : Suivi des séances d'étude

### 6. Fonctionnalités avancées
- **Mode sombre/clair** : Thème adaptatif
- **Responsive design** : Optimisation mobile/tablette/desktop
- **Offline capabilities** : Fonctionnement hors-ligne partiel
- **Import/Export** : Sauvegarde des données utilisateur
- **Sharing** : Partage de résultats sur réseaux sociaux

## 📊 Structure des données

### Types principaux

```typescript
interface Concept {
  id: string;
  title: string;
  definition: string;
  keyPoints: string[];
  examTip: string;
  category: 'fundamentals' | 'principles' | 'dimensions' | 'chain' | 'practices';
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
}

interface UserProgress {
  completedQuizzes: string[];
  scores: { [quizId: string]: number };
  masteredConcepts: string[];
  studyStreak: number;
  totalStudyTime: number;
}
```

### Organisation du contenu pédagogique

Le contenu sera organisé selon la structure officielle ITIL v4 :

1. **Concepts fondamentaux**
   - Valeur, Service, Produit
   - Utilité vs Garantie
   - Résultats vs Sorties
   - Rôles de consommation

2. **7 Principes directeurs**
   - Privilégier la valeur
   - Commencer là où vous êtes
   - Avancer par itération avec feedback
   - Collaborer et promouvoir la visibilité
   - Penser et travailler de manière holistique
   - Rester simple et pratique
   - Optimiser et automatiser

3. **4 Dimensions**
   - Organisations et personnes
   - Information et technologie
   - Partenaires et fournisseurs
   - Flux de valeur et processus

4. **Système de valeur des services (SVS)**
   - Vue d'ensemble du SVS
   - Chaîne de valeur (6 activités)
   - Amélioration continue

5. **Pratiques ITIL**
   - Pratiques de gestion de service
   - Pratiques de gestion générale
   - Pratiques de gestion technique

## 🎨 Design et UX

### Principes de design
- **Clarté** : Information facilement accessible et compréhensible
- **Progressivité** : Apprentissage par étapes logiques
- **Interactivité** : Engagement actif de l'utilisateur
- **Feedback immédiat** : Réponses et corrections instantanées
- **Personnalisation** : Adaptation au niveau de l'utilisateur

### Palette de couleurs
- **Primaire** : Bleu professionnel (#2563eb)
- **Secondaire** : Vert succès (#10b981), Rouge erreur (#ef4444)
- **Neutres** : Grays modernes pour le texte et arrière-plans
- **Accents** : Couleurs vives pour les éléments interactifs

### Typographie
- **Font principale** : Inter (lisibilité optimale)
- **Hiérarchie claire** : H1-H6 bien définies
- **Contraste élevé** : Accessibilité WCAG

## 🔧 Configuration et déploiement

### Environnement de développement
```bash
npm install
npm run dev
```

### Build de production
```bash
npm run build
npm run preview
```

### Déploiement Vercel
- **Auto-déploiement** : Sur push vers main
- **Preview deployments** : Sur pull requests
- **Variables d'environnement** : Configuration via dashboard Vercel

## 📈 Métriques et analytics

### Métriques utilisateur
- Temps passé par section
- Taux de réussite aux quiz
- Concepts les plus consultés
- Parcours utilisateur typique

### KPIs de performance
- Temps de chargement des pages
- Taux de rebond
- Engagement par session
- Conversion vers l'examen réel

## 🧪 Testing

### Types de tests
- **Unit tests** : Composants isolés
- **Integration tests** : Flux utilisateur
- **E2E tests** : Parcours complets
- **Accessibility tests** : Conformité WCAG

### Outils recommandés
- **Jest + React Testing Library** : Tests unitaires
- **Playwright** : Tests E2E
- **Axe** : Tests d'accessibilité

## 🔒 Sécurité et performance

### Bonnes pratiques
- **Code splitting** : Chargement lazy des sections
- **Image optimization** : Formats modernes, lazy loading
- **Bundle analysis** : Optimisation de la taille
- **CSP headers** : Sécurisation du contenu
- **Data validation** : Validation côté client et serveur

## 📱 Responsive design

### Breakpoints
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

### Adaptations mobiles
- Navigation hamburger
- Cards empilées verticalement
- Quiz adapté au touch
- Flashcards optimisées pour le swipe

## 🚀 Roadmap et évolutions futures

### Version 2.0 (À venir)
- **Mode collaboratif** : Étude en groupe
- **AI-powered recommendations** : Suggestions personnalisées
- **Advanced analytics** : Analyses prédictives
- **Intégration LMS** : Connexion avec systèmes d'apprentissage
- **API publique** : Partage de contenu avec d'autres plateformes

---

## 📚 Section Pédagogique - Contenu à ajouter

*Cette section sera complétée avec le contenu pédagogique révisé et validé.*

### Structure attendue :
1. **Concepts fondamentaux révisés**
2. **Principes directeurs avec exemples pratiques**
3. **4 Dimensions avec cas d'usage**
4. **Chaîne de valeur détaillée**
5. **Pratiques critiques pour l'examen**
6. **Questions d'entraînement actualisées**
7. **Flashcards optimisées pour la mémorisation**

---

*Ce document servira de guide de référence pour la reconstruction complète du site ITIL v4 Foundation v2.0*