/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales pour chaque catégorie
        fondamentaux: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb', // Bleu principal
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        pratiques: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981', // Vert principal
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        svs: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#8b5cf6', // Violet principal
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        quiz: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Orange principal
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        revision: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Rouge principal
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        etudecas: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Gris principal
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Couleurs sémantiques générales
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    // Couleurs de base pour toutes les catégories
    ...['fondamentaux', 'svs', 'pratiques', 'quiz', 'revision', 'etudecas'].flatMap(
      (color) => [
        // Background colors
        `bg-${color}-50`,
        `bg-${color}-100`,
        `bg-${color}-200`,
        `bg-${color}-300`,
        `bg-${color}-400`,
        `bg-${color}-500`,
        `bg-${color}-600`,
        `bg-${color}-700`,
        `bg-${color}-800`,
        `bg-${color}-900`,
        // Text colors
        `text-${color}-50`,
        `text-${color}-100`,
        `text-${color}-200`,
        `text-${color}-300`,
        `text-${color}-400`,
        `text-${color}-500`,
        `text-${color}-600`,
        `text-${color}-700`,
        `text-${color}-800`,
        `text-${color}-900`,
        // Border colors
        `border-${color}-50`,
        `border-${color}-100`,
        `border-${color}-200`,
        `border-${color}-300`,
        `border-${color}-400`,
        `border-${color}-500`,
        `border-${color}-600`,
        `border-${color}-700`,
        `border-${color}-800`,
        `border-${color}-900`,
        // Hover states
        `hover:bg-${color}-50`,
        `hover:bg-${color}-100`,
        `hover:bg-${color}-200`,
        `hover:text-${color}-400`,
        `hover:text-${color}-700`,
        // Dark mode
        `dark:bg-${color}-900/10`,
        `dark:bg-${color}-900/20`,
        `dark:text-${color}-400`,
        `dark:text-${color}-500`,
        `dark:border-${color}-800`,
        // Dark hover states
        `dark:hover:bg-${color}-900/10`,
        `dark:hover:text-${color}-400`,
      ]
    ),
  ],
}