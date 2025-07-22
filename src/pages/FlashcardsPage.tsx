import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, RotateCcw } from 'lucide-react';
import { FlashcardComponent } from '../components/FlashcardComponent';
import { flashcards } from '../data/quiz';
import { Flashcard } from '../types';

export function FlashcardsPage() {
  const [cards, setCards] = useState<Flashcard[]>(flashcards);
  const [studiedCards, setStudiedCards] = useState(new Set<string>());

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const resetCards = () => {
    setCards(flashcards.map(card => ({ ...card, isFlipped: false })));
    setStudiedCards(new Set());
  };

  const handleCardFlip = (id: string) => {
    setStudiedCards(prev => new Set(prev).add(id));
  };

  const progressPercentage = Math.round((studiedCards.size / cards.length) * 100);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🃏 Flashcards de Révision
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Cliquez sur les cartes pour révéler les réponses. Parfait pour la mémorisation !
        </p>
      </motion.div>

      {/* Progress and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Progression : {studiedCards.size}/{cards.length} cartes étudiées
          </div>
          <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="text-sm font-semibold text-gray-700">{progressPercentage}%</div>
        </div>

        <div className="flex space-x-3">
          <motion.button
            onClick={shuffleCards}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shuffle className="w-4 h-4" />
            <span>Mélanger</span>
          </motion.button>
          
          <motion.button
            onClick={resetCards}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Remettre à zéro</span>
          </motion.button>
        </div>
      </div>

      {/* Flashcards Grid */}
      <motion.div 
        className="flex flex-wrap justify-center"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {cards.map((flashcard, index) => (
          <motion.div
            key={`${flashcard.id}-${index}`}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 }
            }}
          >
            <FlashcardComponent 
              flashcard={flashcard} 
              onFlip={handleCardFlip}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          🧠 Technique d'étude
        </h3>
        <p className="text-gray-700">
          Pour maximiser la mémorisation, utilisez la répétition espacée : 
          révisez les cartes que vous connaissez moins souvent, et celles que vous maîtrisez moins bien plus fréquemment.
          Mélangez régulièrement l'ordre pour éviter de mémoriser les séquences.
        </p>
      </motion.div>
    </div>
  );
}