export type Difficulty = '初级' | '中级' | '高级';

export type GrammarCategory = 
  | '非谓语动词' 
  | '定语从句' 
  | '状语从句' 
  | '名词性从句' 
  | '连词' 
  | '介词'
  | '时态';

export interface Question {
  id: string;
  sentence: string; // Use "____" for blanks
  options: string[];
  correctAnswer: string;
  explanation: {
    rule: string;
    example: string;
    commonMistakes: string;
  };
  difficulty: Difficulty;
  category: GrammarCategory;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<string, string>; // questionId -> answer
  isSubmitted: boolean;
  score: number;
}
