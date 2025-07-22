import React from 'react';
import { motion } from 'framer-motion';
import { ConceptCard } from '../components/ConceptCard';
import { principles } from '../data/concepts';

interface PrinciplesPageProps {
  onConceptStudied: (id: string) => void;
}

export function PrinciplesPage({ onConceptStudied }: PrinciplesPageProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🎯 Les 7 Principes Directeurs
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Les principes directeurs guident toutes les activités ITIL. Ils sont universels 
          et s'appliquent à tous les niveaux de l'organisation.
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
        {principles.map((principle) => (
          <motion.div
            key={principle.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <ConceptCard 
              concept={principle} 
              onStudied={onConceptStudied}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          ⚠️ Point critique pour l'examen
        </h3>
        <p className="text-gray-700">
          Le principe "Optimiser et automatiser" est souvent mal compris. Retenez bien : 
          <strong> OPTIMISER d'abord, AUTOMATISER ensuite</strong>. Ne jamais automatiser 
          un processus défaillant - c'est un piège classique de l'examen !
        </p>
      </motion.div>
    </div>
  );
}