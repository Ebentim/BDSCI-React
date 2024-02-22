// QuizContext.js
import { createContext, useContext, useState } from 'react';

const QuizContext = createContext({
  quizScores: {},
  updateScore: () => {},
});

export const QuizScoreProvider = ({ children }) => {
  const [quizScores, setQuizScores] = useState({});

  const updateScore = async (chapter, score) => {
    if (score >= 8) {
      await saveScoreToDatabase(chapter, score);
      setQuizScores((prevScores) => ({
        ...prevScores,
        [chapter]: score,
      }));
    } else {
      alert(`Your Score is ${(score / 10) * 100}%, Please review the course again`);
    }
  };

  const saveScoreToDatabase = async (chapter, score) => {
    try {
      await fetch(`/api/scores/${chapter}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score }),
      });
    } catch (error) {
      console.error('Error saving score to the database:', error);
    }
  };

  return (
    <QuizContext.Provider value={{ quizScores, updateScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
