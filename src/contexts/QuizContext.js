// QuizContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const QuizContext = createContext({
  quizScores: {},
  updateScore: () => {},
});

export const QuizScoreProvider = ({ children }) => {
  const { accessToken, userId } = useAuth();
  const [quizScores, setQuizScores] = useState({});
  const [scoreFromDb, setScoreFromDb] = useState({});

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
        `https://bakkers-driving-school.onrender.com/api/update-user-score/${userId}/${chapter}`,
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

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch(
          `https://bakkers-driving-school.onrender.com/api/get-user-scores/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: accessToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch score");
        }

        const data = await response.json();
        setScoreFromDb(data.scores);
      } catch (error) {
        console.error(error);
      }
    };
    if (accessToken && userId) {
      fetchScore();
    }
  }, [accessToken, userId, quizScores]);
  return (
    <QuizContext.Provider value={{ scoreFromDb, quizScores, updateScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
