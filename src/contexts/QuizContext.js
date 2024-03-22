// QuizContext.js
import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const QuizContext = createContext({
  quizScores: {},
  updateScore: () => {},
});

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
      console.log(
        `Your Score is ${(score / 10) * 100}%, Please review the course again`
      );
    }
  };

  const saveScoreToDatabase = async (userId, chapter, score) => {
    console.log(userId, chapter, score);
    try {
      await fetch(
        // `https://bakkers-driving-school.onrender.com/api/update-user-score/${userId}/${chapter}`,
        `http://localhost:5000/api/update-user-score/${userId}/${chapter}`,
        {
          method: "PUT",
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chapter, score }), // Include userId in the request body
        }
      );
    } catch (error) {
      console.error("Error saving score to the database:", error);
    }
  };

  return (
    <QuizContext.Provider value={{ quizScores, updateScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
