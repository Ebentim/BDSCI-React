import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";

const QuizAnswers = {
  one: "100 feet",
  two: "Headlights",
  three:
    "Not assume the other driver will make space for you to return to your lane",
  four: "Increase your chances of an accident",
  five: "To alert oncoming traffic where you cannot see at least 200 feet ahead",
  six: "Limited driving experience",
  seven: "Short-term thinking",
  eight: "Difficulty in responding to unexpected events",
  nine: "Reinforce a false sense of security",
  ten: "Reduced risk perception",
};

export default function Twelve() {
  const { accessToken, userId } = useAuth();
  const { updateScore } = useQuiz();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showDescription, setShowDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(null);
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
      setScore(data.scores.chaptertwelve || 0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (accessToken && userId) {
      fetchScore();
    }
  }, [accessToken, userId]);

  const handleOptionChange = (question, option) => {
    setSelectedOptions((prevState) => ({ ...prevState, [question]: option }));
  };

  const submitQuiz = async () => {
    let currentScore = 0;
    Object.keys(selectedOptions).forEach((question) => {
      if (selectedOptions[question] === QuizAnswers[question]) {
        currentScore++;
      }
    });
    if (currentScore >= 8) {
      await updateScore("chaptertwelve", currentScore);
      setScore(currentScore);
    }
    // Use the score variable directly in the updateScore function

    setShowDescription(true);
    setShowModal(true);
  };

  const handleModal = () => {
    setSelectedOptions({});
    setShowModal(false);
  };
  const SubmitButton = () => (
    <NavButtons classname={"nextButton"} onclick={submitQuiz} disable={false}>
      <a href="#quizHead">Submit</a>
    </NavButtons>
  );
  const CloseModal = () => {
    return (
      <div className="modal">
        <p className="modal-text">
          Impressive work! You've hit the mark with a{" "}
          {(score / 10) * 100 + " %"}{" "}
          {score >= 8
            ? "score, signaling the completion of this unit. Ready to tackle the next challenge? Let's keep the momentum going!"
            : "please review the course content and try again in 2 hours time"}{" "}
        </p>
        <NavButtons
          classname="closeModal"
          onclick={handleModal}
          disable={false}
        >
          Ok
        </NavButtons>
      </div>
    );
  };

  return (
    <div className="quizBody">
      <div className="course-quiz-buttons" id="quizHead">
        <h4 className="sectionHeading">Quiz</h4>
        <h4 className="sectionHeading">
          Total Score:{" "}
          {score !== null ? (
            (score / 10) * 100
          ) : (
            <span className="bold">0</span>
          )}{" "}
          %
        </h4>
      </div>
      <p className="sectionQuote">
        <span className="bold">Instructions: </span>Choose the Correct options
        from the questions below{" "}
        <span className="bold">
          Current Score is {score !== 0 ? (score / 10) * 100 : 0 + " %"}
        </span>
        . This will be updated after taking the test
      </p>
      <RadioButton
        classname="bold"
        question="1. You are about to make a left turn, you must signal continuously for how many feet before making the turn?"
        option1="100 feet"
        option2="50 feet"
        option3="75 feet"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you are about to make a left turn, you are required to signal continuously for at least 100 feet before making the turn. Signaling in advance helps notify other drivers and pedestrians about your intentions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. It is a very windy day. You are driving and a dust storm blows across the freeway reducing your visibility. You should drive slower and turn on your:"
        option1="Interior lights"
        option2="Parking lights"
        option3="Headlights"
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "In a dust storm that reduces visibility, you should drive slower and turn on your headlights to increase visibility for yourself and other drivers."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. If you plan to pass another vehicle, you should:"
        option1="Not assume the other driver will make space for you to return to your lane"
        option2="Assume the other driver will let you pass if you use your turn signal"
        option3="Assume the other driver will maintain a constant speed"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "You are responsible for your actions when passing another vehicle. Do not rely on assumptions about the behavior of the other driver."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. If you drive faster than other vehicles on a road with one lane in each direction and continually pass the other cars, you will:"
        option1="Get to your destination much faster and safer"
        option2="Increase your chances of an accident"
        option3="Help prevent traffic congestion"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Driving faster or continuously passing other vehicles on a road with one lane in each direction, can lead to unsafe driving conditions, and increase the risk of accidents"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. You may use your horn on narrow mountain roads:"
        option1="To alert oncoming traffic where you cannot see at least 200 feet ahead"
        option2="To let pedestrians know you are there"
        option3="To signal to other drivers that you are in a hurry"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Using your horn on narrow mountain roads in situations where visibility is limited is a safety measure to alert other drivers of your presence and prevent potential collisions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. Which factor contributes to young driver's limited ability to recognize and assess potential unsafe driving conditions?"
        option1="Lack of maturity"
        option2="Limited driving experience"
        option3="Emotional regulation"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Limited driving experience hinders the ability to encounter various road and weather conditions, making it challenging for young drivers to identify potential dangers."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. What contributes to the 'No One Got Hurt' attitude among drivers engaging in risky behaviors?"
        option1="Overconfidence"
        option2="Short-term thinking"
        option3="Lack of empathy"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The 'No One Got Hurt' attitude is fueled by a lack of understanding of consequences and short-term thinking, where drivers underestimate the risks associated with their actions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. What challenges do novice drivers with limited exposure face?"
        option1="Difficulty in responding to unexpected events"
        option2="Overestimation of driving skills"
        option3="Strict adherence to traffic laws"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Novice drivers with limited exposure may struggle to respond appropriately to unexpected events due to their lack of experience in various road conditions and challenging scenarios."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. How can attempting to impress passengers impact driving behavior?"
        option1="Enhance focus on the road"
        option2="Reinforce a false sense of security"
        option3="Encourage cautious driving "
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Trying to impress passengers may contribute to overconfidence, reinforcing a false sense of security and encouraging risky maneuvers without considering the potential consequences."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. How do distractions especially from smartphones and social media pose a significant threat to young drivers?"
        option1="Enhanced focus on the road"
        option2="Reduced risk perception"
        option3="Improved decision-making skills"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Distractions can reduce risk perception, making it difficult for young drivers to recognize and respond to potential hazards on the road. "
            : null
        }
      />
      <SubmitButton />
      {showModal ? (
        <Modal>
          <CloseModal />
        </Modal>
      ) : null}
    </div>
  );
}
