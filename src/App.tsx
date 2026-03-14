import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  BookOpen, 
  Trophy, 
  AlertCircle,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { QUESTIONS } from './questions';
import { Question, Difficulty, GrammarCategory } from './types';

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  '初级': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  '中级': 'bg-amber-100 text-amber-700 border-amber-200',
  '高级': 'bg-rose-100 text-rose-700 border-rose-200',
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const isCorrect = userAnswers[currentQuestion.id] === currentQuestion.correctAnswer;

  const score = useMemo(() => {
    return QUESTIONS.reduce((acc, q) => {
      return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);
  }, [userAnswers]);

  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsSubmitted(false);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsSubmitted(false);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
    setQuizFinished(false);
  };

  const renderSentence = (sentence: string, currentAnswer: string | undefined) => {
    const parts = sentence.split('____');
    return (
      <div className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800 mb-8">
        {parts[0]}
        <span className={`inline-block min-w-[120px] border-b-2 mx-2 px-4 py-1 text-center transition-all duration-300 ${
          isSubmitted 
            ? isCorrect 
              ? 'border-emerald-500 text-emerald-600 bg-emerald-50' 
              : 'border-rose-500 text-rose-600 bg-rose-50'
            : 'border-indigo-400 text-indigo-600 bg-indigo-50/30'
        }`}>
          {currentAnswer || '...'}
        </span>
        {parts[1]}
      </div>
    );
  };

  if (quizFinished) {
    const percentage = (score / QUESTIONS.length) * 100;
    let message = "";
    if (percentage === 100) message = "太棒了！你简直是语法大师！🌟";
    else if (percentage >= 80) message = "做得好！离满分只有一步之遥！🚀";
    else if (percentage >= 60) message = "不错哦！继续加油练习。📚";
    else message = "别灰心！每一次错误都是进步的机会。💪";

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">测试完成！</h2>
          <div className="text-5xl font-black text-indigo-600 mb-4">
            {score} <span className="text-2xl text-slate-400">/ {QUESTIONS.length}</span>
          </div>
          <p className="text-lg text-slate-600 mb-8">{message}</p>
          
          <div className="space-y-4">
            <button 
              onClick={resetQuiz}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
            >
              <RotateCcw className="w-5 h-5" />
              再试一次
            </button>
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">推荐复习</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-indigo-600 hover:underline flex items-center justify-center gap-1 text-sm">
                  精通定语从句 <ExternalLink className="w-3 h-3" />
                </a>
                <a href="#" className="text-indigo-600 hover:underline flex items-center justify-center gap-1 text-sm">
                  非谓语动词全指南 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">语法大师</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-500">
              <BookOpen className="w-3 h-3" />
              <span>第 {currentIndex + 1} 题 / 共 {QUESTIONS.length} 题</span>
            </div>
            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 transition-all duration-500" 
                style={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-8 md:pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Question Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 relative overflow-hidden">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${DIFFICULTY_COLORS[currentQuestion.difficulty]}`}>
                  {currentQuestion.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  {currentQuestion.category}
                </span>
              </div>

              {renderSentence(currentQuestion.sentence, userAnswers[currentQuestion.id])}

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    disabled={isSubmitted}
                    onClick={() => handleOptionSelect(option)}
                    className={`
                      p-4 rounded-2xl text-lg font-medium transition-all text-left flex items-center justify-between border-2
                      ${userAnswers[currentQuestion.id] === option 
                        ? isSubmitted
                          ? option === currentQuestion.correctAnswer
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : 'bg-rose-50 border-rose-500 text-rose-700'
                          : 'bg-indigo-50 border-indigo-500 text-indigo-700'
                        : 'bg-white border-slate-100 hover:border-indigo-200 text-slate-600 hover:bg-slate-50'
                      }
                      ${isSubmitted && option === currentQuestion.correctAnswer && userAnswers[currentQuestion.id] !== option
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : ''
                      }
                    `}
                  >
                    <span>{option}</span>
                    {isSubmitted && option === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    )}
                    {isSubmitted && userAnswers[currentQuestion.id] === option && option !== currentQuestion.correctAnswer && (
                      <XCircle className="w-6 h-6 text-rose-500" />
                    )}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="p-3 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all disabled:opacity-30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswers[currentQuestion.id]}
                    className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 disabled:shadow-none"
                  >
                    提交答案
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-10 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                  >
                    {currentIndex === QUESTIONS.length - 1 ? '完成测试' : '下一题'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                <div className="w-12" /> {/* Spacer for balance */}
              </div>
            </div>

            {/* Explanation Card */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-3xl p-6 md:p-8 border ${
                    isCorrect 
                      ? 'bg-emerald-50 border-emerald-100' 
                      : 'bg-amber-50 border-amber-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-xl ${isCorrect ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-amber-600" />
                      )}
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className={`text-lg font-bold mb-1 ${isCorrect ? 'text-emerald-800' : 'text-amber-800'}`}>
                          {isCorrect ? '太棒了！' : '继续努力！'}
                        </h3>
                        <p className={`text-sm ${isCorrect ? 'text-emerald-700' : 'text-amber-700'}`}>
                          正确答案是 <span className="font-bold underline">{currentQuestion.correctAnswer}</span>。
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">语法规则</h4>
                          <p className="text-slate-700 leading-relaxed">{currentQuestion.explanation.rule}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">例句</h4>
                          <p className="text-slate-700 italic">"{currentQuestion.explanation.example}"</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">常见错误辨析</h4>
                          <p className="text-slate-700">{currentQuestion.explanation.commonMistakes}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-slate-400 text-sm">
          专为初中生设计 • 聚焦复杂句法结构辨析
        </p>
      </footer>
    </div>
  );
}
