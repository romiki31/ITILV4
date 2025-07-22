import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flashcard } from '../types';

interface FlashcardComponentProps {
  flashcard: Flashcard;
  onFlip?: (id: string) => void;
}

export function FlashcardComponent({ flashcard, onFlip }: FlashcardComponentProps) {
  const [isFlipped, setIsFlipped] = useState(flashcard.isFlipped || false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onFlip?.(flashcard.id);
  };

  return (
    <div className="flashcard-container perspective-1000 w-80 h-52 mx-4 my-6">
      <motion.div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center',
        }}
        animate={{ 
          rotateY: isFlipped ? 180 : 0 
        }}
        transition={{ 
          duration: 0.6, 
          ease: 'easeInOut' 
        }}
      >
        {/* Front Face */}
        <div className="flashcard-face flashcard-front">
          <div className="text-center">
            <p className="text-lg font-semibold">
              {flashcard.front}
            </p>
          </div>
        </div>

        {/* Back Face */}
        <div className="flashcard-face flashcard-back">
          <div 
            className="text-center"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div 
              className="text-base font-medium"
              dangerouslySetInnerHTML={{ __html: flashcard.back }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}