// import { useQuiz } from "../contexts/QuizContext"
import "../styles/general.css"
export default function One (){
    // const [quizScores, updateScore] = useQuiz()
    return(
        <>
            <div>
                <p htmlFor="question1" className="bold">1. Which of the following blocks the smooth flow of traffic?</p>
                <div className="option">
                    <input type="radio" value={"Slowing down to look at collision scene"} name="questionOne" id="a"/>
                    <label htmlFor="a">
                    Slowing down to look at collision scene</label>
                </div>
                <div className="option">
                    <input type="radio" value={"Avoiding unnecessary lane changes"} name="questionOne" id="b"/>
                    <label htmlFor="b">Avoiding unnecessary lane changes</label>
                </div>
                <div className="option">
                    <input type="radio" value={"Using public transportation instead of your vehicle"} name="questionOne" id="c"/>
                    <label htmlFor="c">Using public transportation instead of your vehicle</label>
                </div>
            </div>
        </>
    )
}