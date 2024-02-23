// QuizContext.js
import { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const QuizContext = createContext({
  quizScores: {},
  updateScore: () => {},
});

// export const QuizScoreProvider = ({ children }) => {
//   const {accessToken} = useAuth()
//   const [quizScores, setQuizScores] = useState({});

//   const updateScore = async (chapter, score) => {
//     if (score >= 8) {
//       await saveScoreToDatabase(userId, chapter, score);
//       setQuizScores((prevScores) => ({
//         ...prevScores,
//         [chapter]: score,
//       }));
//     } else {
//       alert(`Your Score is ${(score / 10) * 100}%, Please review the course again`);
//     }
//   };

//   const saveScoreToDatabase = async (chapter, score) => {
//     try {
//       await fetch(`/api/submit-quiz${chapter}`, {
//         method: 'POST',
//         headers: {
//           Authorization: accessToken,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ score: Number(score), userId }),
//       });
//     } catch (error) {
//       console.error('Error saving score to the database:', error);
//     }
//   };

//   return (
//     <QuizContext.Provider value={{ quizScores, updateScore }}>
//       {children}
//     </QuizContext.Provider>
//   );
// };

export const QuizScoreProvider = ({ children }) => {
  const { accessToken, userId } = useAuth();
  const [quizScores, setQuizScores] = useState({});

  const updateScore = async (chapter, score) => {
    if (score >= 8) {
      await saveScoreToDatabase(userId, chapter, score);
      setQuizScores((prevScores) => ({
        ...prevScores,
        [chapter]: score,
      }));
    } else {
      alert(`Your Score is ${(score / 10) * 100}%, Please review the course again`);
    }
  };

  const saveScoreToDatabase = async (userId, chapter, score) => {
    try {
      await fetch(`/api/submit-quiz/${chapter}`, {
        method: 'POST',
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score, userId }), // Include userId in the request body
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
