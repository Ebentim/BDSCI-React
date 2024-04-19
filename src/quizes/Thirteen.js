import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";

const QuizAnswers = {
  one: "Harmful and destructive behaviors may affect them.",
  two: "To address heightened stimulation of the nervous system.",
  three: "Comprehensive driver education programs",
  four: "Isolation from friends and family.",
  five: "Relative inexperience and higher likelihood of fatalities",
  six: "Listlessness and lethargy.",
  seven: "Zero tolerance is applied.",
  eight: "Inducing relaxation and calmness.",
  nine: "Teens' developing brains and limited driving experience",
  ten: "Consequences such as fines, license suspension, or jail time.",
};

export default function Thirteen() {
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
      setScore(data.scores.chapterthirteen || 0);
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
      await updateScore("chapterthirteen", currentScore);
      setScore(currentScore);
    }

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
          Impressive work! You've hit the mark with {(score / 10) * 100 + " %"}{" "}
          score{" "}
          {score >= 8
            ? "score, signaling the completion of this unit. Ready to tackle the next challenge? Let's keep the momentum going!"
            : ". Take a moment to review the course content, and with renewed focus. Success is within reach!"}
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
        question="1. Why might drug abuse impact not only the person involved but also their family and friends?"
        option1="It creates a sense of independence."
        option2="Harmful and destructive behaviors may affect them."
        option3="It promotes healthier relationships."
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Drug abuse can lead to harmful and destructive behaviors that impact not only the individual but also their family and friends who may witness or suffer from the consequences."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. Why is immediate medical attention necessary in extreme cases of upper use?"
        option1="To induce relaxation."
        option2="To address heightened stimulation of the nervous system."
        option3="To promote drowsiness."
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Extreme cases of upper use can lead to rapid heart rate, elevated blood pressure, and even convulsions or seizures, requiring immediate medical attention."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. What factor has contributed to the decline in teens drinking and driving over the past few decades?"
        option1="Increased peer pressure"
        option2="Comprehensive driver education programs"
        option3="Higher tolerance to alcohol in teens"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Comprehensive driver education programs, among other factors, have contributed to the decline in teens drinking and driving."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. What is necessary to break the cycle of drug misuse?"
        option1="Isolation from friends and family."
        option2="Ignoring the problem and hoping it goes away."
        option3="Professional help, intervention, and support."
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Breaking the cycle of drug misuse requires intervention, support, and professional help, such as therapies, counseling, and rehabilitation programs."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. Young drivers (ages 16-20) are at a significantly higher risk of being involved in alcohol-related accidents due to:"
        option1="Lack of parental involvement"
        option2="Lower blood alcohol concentration (BAC) levels"
        option3="Relative inexperience and higher likelihood of fatalities"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Young drivers (ages 16-20) are at a significantly higher risk of being involved in alcohol-related accidents, which are more likely to result in fatalities."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. What is one of the primary effects of downers on behavior?"
        option1="Increased alertness."
        option2="Listlessness and lethargy."
        option3="Heightened coordination."
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Downers, or depressants, can lead to listlessness, drowsiness, and lethargy, impacting alertness and coordination."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. What is California's stance on alcohol and drugs for drivers under 21 years old?"
        option1="They are allowed a small amount."
        option2="Zero tolerance is applied."
        option3="They can consume alcohol if accompanied by an adult."
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "California has a zero-tolerance policy for drivers under 21, meaning they cannot have any amount of alcohol or drugs in their system."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. What adverse effects can uppers, also known as stimulants, have on the central nervous system?"
        option1="Inducing relaxation and calmness."
        option2="Slowing down the heart rate."
        option3="Stimulation of the central nervous system."
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Uppers, or stimulants, stimulate the central nervous system, leading to increased alertness, energy, and euphoria."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. Why are teens more likely to exhibit impaired driving skills even at lower blood alcohol levels compared to adults?"
        option1="Teens' developing brains and limited driving experience"
        option2="Teens generally have a higher tolerance to alcohol"
        option3="Lack of public awareness campaigns"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Teens have developing brains, limited decision-making skills, and less driving experience, making them more vulnerable to impaired driving even at lower blood alcohol levels."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. What are the consequences of violating DUI laws?"
        option1="No consequences for the first offense."
        option2="Only a warning is issued."
        option3="Consequences such as fines, license suspension, or jail time."
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Violation of DUI laws can lead to various consequences, including fines, license suspension, or jail time."
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
