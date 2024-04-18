import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";

const QuizAnswers = {
  one: "To illuminate a broader area for better visibility",
  two: "Engine",
  three: "To convert harmful pollutants into less harmful compounds",
  four: "To warn of an emergency or hazardous situation",
  five: "Suspension System",
  six: "To promote even wear and extend tire life",
  seven: "Reduced emissions",
  eight: "Higher speeds lead to increased fuel consumption",
  nine: "Improved fuel efficiency",
  ten: "Tread wear indicators",
};

export default function Eight() {
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
      setScore(data.scores.chaptereight || 0);
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
      await updateScore("chaptereight", currentScore);
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
        question="1. What is the primary purpose of high beams when driving on dark, unlit roads?"
        option1="To conserve energy"
        option2="To illuminate a broader area for better visibility"
        option3="To signal emergency situations"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "High beams are used on dark, unlit roads to provide maximum visibility by illuminating a broader area, allowing drivers to see farther ahead."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. Which component of a vehicle is responsible for converting fuel into motion, generating the necessary force to propel the vehicle?"
        option1="Transmission"
        option2="Engine"
        option3="Steering System"
        optionDiv="option"
        name="two"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The engine is the mechanical power source of a vehicle that converts fuel (gasoline or diesel) into motion, generating the force needed to propel the vehicle."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. What is the purpose of the catalytic converter in the exhaust system of a car?"
        option1="To cool down exhaust gases"
        option2="To reduce noise levels"
        option3="To convert harmful pollutants into less harmful compounds"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The catalytic converter is an emissions control device that catalyzes chemical reactions to convert harmful pollutants like carbon monoxide, nitrogen oxides, and hydrocarbons into less harmful compounds."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. What is the purpose of emergency flashers (hazard lights) in a vehicle?"
        option1="To signal a turn"
        option2="To indicate a malfunction"
        option3="To warn of an emergency or hazardous situation"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Emergency flashers, also known as hazard lights, are used to signal an emergency, such as a breakdown, an accident, or when the vehicle is parked in a hazardous location. They alert other drivers to exercise caution."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. Which system is responsible for managing a vehicle's ride comfort, stability, and handling by absorbing shocks and maintaining consistent contact between the tires and the road?"
        option1="Braking System"
        option2="Suspension System"
        option3="Electrical System"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The suspension system is responsible for managing a vehicle's ride comfort, stability, and handling by absorbing shocks and maintaining consistent contact between the tires and the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. Why is it important to rotate tires regularly?"
        option1="To improve fuel efficiency"
        option2="To promote even wear and extend tire life"
        option3="To enhance cornering speeds"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Regularly rotating tires helps distribute wear more evenly, leading to better traction, a smoother ride, and extended tire life."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. Which of the following is a benefit of adopting smooth and gradual acceleration and deceleration techniques"
        option1="Increased fuel consumption"
        option2="Reduced emissions"
        option3="Shortened vehicle lifespan"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Smooth and gradual acceleration and deceleration help reduce harmful emissions from the vehicle, contributing to better air quality and a more sustainable environment."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. How does speed impact fuel consumption, according to the relationship discussed in the texts?"
        option1="Higher speeds result in lower fuel consumption"
        option2="Maintaining a steady speed has no effect on fuel efficiency"
        option3="Higher speeds lead to increased fuel consumption"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "As a vehicle's speed increases, its aerodynamic drag rises exponentially, requiring the engine to work harder and resulting in higher fuel consumption."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. What is the benefit of anticipating stops and braking smoothly, as mentioned in the texts?"
        option1="Improved fuel efficiency"
        option2="Increased brake wear"
        option3="Enhanced passenger discomfort"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Anticipating stops and braking smoothly can significantly improve fuel efficiency by avoiding sudden stops and starts, reducing the need for aggressive acceleration."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. What serves as a guide to assess tire wear?"
        option1="Tire pressure"
        option2="Tread wear indicators"
        option3="Tire rotation"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Tread wear indicators, small rubber bars located in tire grooves, serve as a guide to assess tire wear. When the tread depth reaches these indicators, it's time to replace the tires."
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
