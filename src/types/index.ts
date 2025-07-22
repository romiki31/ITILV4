export interface Concept {
  id: string;
  title: string;
  definition: string;
  keyPoints: string[];
  examTip?: string;
  category: 'fundamentals' | 'principles' | 'dimensions' | 'chain' | 'practices';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  isFlipped?: boolean;
}

export interface StudySession {
  id: string;
  startTime: Date;
  endTime?: Date;
  topicsStudied: string[];
  questionsAnswered: number;
  correctAnswers: number;
  timeSpent: number;
}

export interface UserProgress {
  conceptsStudied: Set<string>;
  quizScores: { [category: string]: number[] };
  totalTimeStudied: number;
  streak: number;
  lastStudyDate: Date;
  weakAreas: string[];
  strengths: string[];
}

export interface ExamSimulation {
  questions: QuizQuestion[];
  timeLimit: number; // in seconds
  passingScore: number;
  currentQuestion: number;
  answers: (number | null)[];
  startTime?: Date;
  endTime?: Date;
}