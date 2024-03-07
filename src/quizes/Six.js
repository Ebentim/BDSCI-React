import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState } from "react";
const QuizAnswers = {
  one: "Under no circumstances",
  two: "Are being tailgated by another driver",
  three: "Reduce your speed and be prepared to stop suddenly",
  four: "Avoid last-minute moves",
  five: "All the above.",
  six: "The lane closest to the left curb.",
  seven: "DMV.",
};
export default function Six() {
  const { updateScore } = useQuiz();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showDescription, setShowDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let score = 0;
  const [totalScore, setTotalScore] = useState(score);

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

    score = currentScore;
    setTotalScore((score / 10) * 100);

    // Use the score variable directly in the updateScore function
    await updateScore("chaptersix", score);

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
          you scored {totalScore}%{" "}
          {totalScore >= 80
            ? "you have now completed this unit, process to the next unit"
            : "please review the course content and try again in 2 hours time"}{" "}
        </p>
        <NavButtons
          classname="nextButton"
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
        <h4 className="sectionHeading">Unit One Quiz </h4>
        <h4 className="sectionHeading">Total Score: {totalScore}%</h4>
      </div>
      <p className="sectionQuote">
        <span className="bold">Instructions: </span>Choose the Correct options
        from the questions below{" "}
        <span className="bold">
          Current Score is {totalScore === 0 ? "0" : totalScore + "%"}
        </span>
        . This will be updated after taking the test
      </p>
      <RadioButton
        classname="bold"
        question="1. You may drive off of the paved roadway to pass another vehicle:"
        option1="If the shoulder is wide enough to accommodate your vehicle"
        option2="If the vehicle ahead of you is turning left"
        option3="Under no circumstances"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />

      <RadioButton
        classname="bold"
        question="2. You should increase the distance between your vehicle and the vehicle ahead when you:"
        option1="Are following a small passenger vehicle"
        option2="Are being tailgated by another driver"
        option3="Are driving more slowly than the posted speed limit"
        ptionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If someone is driving too close behind you, increase the space in front of your car. Don't brake suddenly. Instead, slow down slowly or change lanes to avoid a crash with the tailgater."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. When driving in work zones, you should:"
        option1="Increase your speed to get through the zone as quickly as possible"
        option2="Reduce your speed and be prepared to stop suddenly"
        option3="Maintain your normal speed the whole way through the zone"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you see a work zone while driving, go slower and be ready to stop if needed. Follow the speed limits shown on signs and stay aware because workers might be there."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. Looking down the road to where your vehicle will be in about 10 seconds helps you to ______________."
        option1="Enjoy the scenery"
        option2="Avoid last-minute moves"
        option3="See hazards inside your car"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Looking down the road to where your vehicle will be in about 10 seconds helps you anticipate traffic conditions and potential hazards, allowing you to make gradual adjustments and avoid sudden or last-minute maneuvers."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. Which of these is considered a common cause of collision:"
        option1="Unsafe speed"
        option2="Not following stop signs, signals, and signs."
        option3="All the above."
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Drivers who exceed safe speeds or disregard traffic regulations increase the risk of accidents on the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. To turn left from a one-way street onto a one-way street, you should start your turn from:"
        option1="Any lane."
        option2="The lane closest to the left curb."
        option3="The lane in the center of the road."
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When turning left from a one-way street onto another one-way street, it is recommended to start the turn from the lane closest to the left curb."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. If you are involved in a traffic collision with property damage of $1000 or more, you are required to complete and submit a written report (SR1) to:"
        option1="CHP."
        option2="DMV."
        option3="EDD"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Submitting a written report to the DMV ensures that accurate records are maintained, and it helps authorities track and manage traffic incidents. Reporting collisions to the DMV is an essential step in the post-accident process."
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
