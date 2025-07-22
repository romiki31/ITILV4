import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';
import { Concept } from '../types';

interface ConceptCardProps {
  concept: Concept;
  onStudied: (id: string) => void;
}

export function ConceptCard({ concept, onStudied }: ConceptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      onStudied(concept.id);
    }
  };

  return (
    <motion.div
      className={`concept-card ${isExpanded ? 'from-green-50 to-emerald-50 border-green-500' : ''}`}
      whileHover={{ scale: 1.01 }}
      layout
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {concept.title}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-white/70 rounded-lg">
            <p className="font-semibold text-gray-700 mb-2">Définition :</p>
            <p className="text-gray-700">{concept.definition}</p>
          </div>

          <div className="p-4 bg-white/70 rounded-lg">
            <p className="font-semibold text-gray-700 mb-2">Points clés :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {concept.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {concept.examTip && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-800 mb-1">Astuce Examen :</p>
                  <p className="text-yellow-700">{concept.examTip}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}