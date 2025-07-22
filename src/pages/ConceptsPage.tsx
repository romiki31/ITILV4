import React from 'react';
import { motion } from 'framer-motion';
import { ConceptCard } from '../components/ConceptCard';
import { concepts } from '../data/concepts';

interface ConceptsPageProps {
  onConceptStudied: (id: string) => void;
}

export function ConceptsPage({ onConceptStudied }: ConceptsPageProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          📚 Concepts Fondamentaux
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Maîtrisez les concepts de base d'ITIL v4. Cliquez sur chaque carte pour révéler 
          les définitions, points clés et astuces d'examen.
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-6"
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
        {concepts.map((concept) => (
          <motion.div
            key={concept.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <ConceptCard 
              concept={concept} 
              onStudied={onConceptStudied}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          💡 Conseil d'étude
        </h3>
        <p className="text-gray-700">
          Ces concepts fondamentaux sont la base de tout ITIL v4. Assurez-vous de bien 
          comprendre la différence entre valeur/service/produit et utilité/garantie - 
          ces distinctions sont fréquemment testées à l'examen.
        </p>
      </motion.div>
    </div>
  );
}