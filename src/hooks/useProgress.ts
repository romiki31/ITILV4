import { useLocalStorage } from './useLocalStorage';
import { UserProgress } from '../types';

const initialProgress: UserProgress = {
  conceptsStudied: new Set(),
  quizScores: {},
  totalTimeStudied: 0,
  streak: 0,
  lastStudyDate: new Date(),
  weakAreas: [],
  strengths: []
};

export function useProgress() {
  const [progress, setProgress] = useLocalStorage('itil-progress', initialProgress);

  const updateConceptStudied = (conceptId: string) => {
    setProgress(prev => ({
      ...prev,
      conceptsStudied: new Set([...prev.conceptsStudied, conceptId])
    }));
  };

  const updateQuizScore = (category: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [category]: [...(prev.quizScores[category] || []), score]
      }
    }));
  };

  const updateTimeStudied = (minutes: number) => {
    setProgress(prev => ({
      ...prev,
      totalTimeStudied: prev.totalTimeStudied + minutes
    }));
  };

  const updateStreak = () => {
    const today = new Date();
    const lastStudy = new Date(progress.lastStudyDate);
    const daysDiff = Math.floor((today.getTime() - lastStudy.getTime()) / (1000 * 60 * 60 * 24));
    
    let newStreak = progress.streak;
    if (daysDiff === 1) {
      newStreak += 1;
    } else if (daysDiff > 1) {
      newStreak = 1;
    }
    
    setProgress(prev => ({
      ...prev,
      streak: newStreak,
      lastStudyDate: today
    }));
  };

  const getOverallProgress = () => {
    const totalConcepts = 50; // Approximation du nombre total de concepts
    const studiedConcepts = progress.conceptsStudied.size;
    return Math.round((studiedConcepts / totalConcepts) * 100);
  };

  const getAverageQuizScore = () => {
    const allScores = Object.values(progress.quizScores).flat();
    if (allScores.length === 0) return 0;
    return Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length);
  };

  return {
    progress,
    updateConceptStudied,
    updateQuizScore,
    updateTimeStudied,
    updateStreak,
    getOverallProgress,
    getAverageQuizScore
  };
}