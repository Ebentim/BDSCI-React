// import { useContext, useState } from "react";
// const Context = () => {
//     const QuizContext = useContext();
//     return QuizContext
// }

// export const QuizScoreProvider = ({children}) =>{
//     const [quizScores, setQuizScores] = useState({
//         chapterOne:  localStorage.getItem("quizScore")?.chapterOne || 0,
//         chapterTwo:  localStorage.getItem("quizScore")?.chapterTwo || 0,
//         chapterThree:  localStorage.getItem("quizScore")?.chapterThree || 0,
//         chapterFour:  localStorage.getItem("quizScore")?.chapterFour || 0,
//         chapterFive:  localStorage.getItem("quizScore")?.chapterFive || 0,
//         chapterSix:  localStorage.getItem("quizScore")?.chapterSix || 0,
//         chapterSeven: localStorage.getItem("quizScore")?.chapterSeven || 0,
//         chapterEight:  localStorage.getItem("quizScore")?.chapterEight || 0,
//         chapterNine:  localStorage.getItem("quizScore")?.chapterNine || 0,
//         chapterTen:  localStorage.getItem("quizScore")?.chapterTen || 0,
//         chapterEleven:  localStorage.getItem("quizScore")?.chapterEleven || 0,
//         chapterTwelve:  localStorage.getItem("quizScore")?.chapterTwelve || 0,
//         chapterThirteen:  localStorage.getItem("quizScore")?.chapterThirteen || 0,
//         chapterFourteen:  localStorage.getItem("quizScore")?.chapterFourteen || 0,
//         chapterFifteen:  localStorage.getItem("quizScore")?.chapterFifteen || 0,
//         finalQuiz: localStorage.getItem("quizScore")?.finalQuiz || 0
//     });

//     const updateScore = (chapter, score)=>{
//         if (score>=8){
//             setQuizScores(prevScores => (
//                 {
//                     ...prevScores,
//                     [chapter] : score
//                 }
//                 ))
//         } else{
//             alert(`Your Score is ${(score/10) * 100}%, Please review the course again`)
//         }
//     }

//     return(
//         <Context.Provider value={{quizScores, updateScore}}>
//             {children}
//         </Context.Provider>
//     )
// }
// export const useQuiz = () => useContext(Context)