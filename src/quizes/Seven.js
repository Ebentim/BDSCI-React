import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState } from "react";
const QuizAnswers = {
  one: "Wait until the truck or bus turns before you turn",
  two: "Make Speed and Directional changes more gradually than you would otherwise",
  three: "Passing on the left is permitted when the way ahead is clear",
  four: "Look over your right shoulder for a right lane change and your left shoulder for a left lane change",
  five: "Merging into another lane",
  six: "Look through the rear window",
  seven: "Maintain a constant speed",
  eight: "Move into the right lane when it is safe",
  nine: "At or near the same speed as the traffic on the freeway.",
  ten: "Under no circumstances. ",
};
export default function Seven() {
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
    await updateScore("chapterseven", score);

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
        <h4 className="sectionHeading">Quiz</h4>
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
        question="1. If a truck or bus is making a right turn where you also need to make a right turn, you should"
        option1="Quickly turn before the truck or bus is able to"
        option2="Wait until the truck or bus turns before you turn"
        option3="Squeeze between the truck or bus and the curb"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Don't try to squeeze your car between a turning truck or bus and the curb. Wait until the truck or bus finishes its turn before you make your turn to avoid a serious crash."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. When driving under snowy or icy conditions:"
        option1="It is safe to use your cruise control"
        option2="Make Speed and Directional changes more gradually than you would otherwise"
        option3="Drive as you would under normal conditions"
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When driving in snow or on ice, it's important to make speed and direction changes slowly. Don't use cruise control in these conditions, as your tires might not grip the road well, leading to a loss of control."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. A broken yellow centerline means that:"
        option1="Padding is not permitted"
        option2="Passing on the right is permitted when the way ahead is clear"
        option3="Passing on the left is permitted when the way ahead is clear"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If you see a broken yellow line in the middle of the road, you can pass a car in front of you by crossing over to the left side, but only if there are no cars coming from the opposite direction. However, it's not allowed to cross over a solid yellow line to pass another vehicle."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. Which of these statements is true about changing lanes?"
        option1="You only need to turn and look over your right shoulder for lane changes to the right or left"
        option2="Look over your right shoulder for a right lane change and your left shoulder for a left lane change"
        option3="Vehicles with two outside mirrors do not have blind spots"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Before you change lanes while driving, use your turn signal, check all your mirrors, and glance over your left or right shoulder to make sure there are no vehicles, motorcycles, or bicycles in the lane beside you. Looking over your shoulder helps you see any potential blind spots."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. When being followed by a tailgater, which of the following will help you avoid bring hit from behind?"
        option1="Merging into another lane"
        option2="Decreasing your following distance"
        option3="Changing lanes frequently"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If someone is driving too close behind you, it's a good idea to either slow down gradually or change lanes to avoid a possible crash with them."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. When backing up:"
        option1="Look through the rear window"
        option2="Press hard on gas pedal"
        option3="Rely only on your rearview mirror"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you're backing up, put your right arm on the back of the passenger seat and look through the rear window. Don't rely solely on your mirrors because they don't show directly behind your vehicle. Make sure to drive in reverse slowly."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. When being passed by another vehicle:"
        option1="Brake hard"
        option2="Maintain a constant speed"
        option3="Speed up"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If a vehicle is passing you, let it go ahead, and don't speed up. Give it space to safely come back into your lane."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. Two traffic lanes are moving in your direction. You are driving in the left lane and many vehicles are passing you on the right. If the driver behind you wishes to drive faster, you should:"
        option1="Stay in your lane so you don't impede the flow of traffic"
        option2="Drive onto the left shoulder to let the other vehicles pass"
        option3="Move into the right lane when it is safe"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Drive fast, pass, or turn left in the left lane. Use the right lane if you're going slower than other cars, getting on the road, or turning right."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. When you are merging onto the freeway, you should be driving:"
        option1="At or near the same speed as the traffic on the freeway."
        option2="5 to 10 MPH slower than the traffic on the freeway."
        option3="The posted speed limit for traffic on the freeway."
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When merging onto the freeway, it is essential to match your speed with the flow of traffic to ensure a smooth and safe transition."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. How has the automotive industry contributed to global economies?You may drive off the paved roadway to pass another vehicle:"
        option1="If the shoulder is wide enough to accommodate your vehicle."
        option2="If the vehicle ahead of you is turning left."
        option3="Under no circumstances."
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Driving off the paved roadway to pass another vehicle is not allowed under any circumstances."
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
