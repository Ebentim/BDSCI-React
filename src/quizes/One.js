import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";
export default function One() {
  const { updateScore } = useQuiz();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showDescription, setShowDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let score = 0;
  const [totalScore, setTotalScore] = useState(score);
  const QuizAnswers = {
    one: "Slowing down to look at collision scene",
    two: "Vehicle is in line with other parked vehicles",
    three: "In an unmarked crosswalk",
    four: "Turned to the right (away from the street)",
    five: "Stay out of the intersection until traffic clears",
    six: "Avoiding unnecessary lane changes",
    seven: "Drive to a safe place, stop and rest",
    eight: "It is illegal under all circumstances",
    nine: "Transformation of social interactions and the ability to live farther from city centers",
    ten: "By limiting job opportunities across various sectors",
  };

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
    await updateScore("chapterone", score);

    setShowDescription(true);
    setShowModal(true);
  };

  useEffect(() => {
    setShowDescription(true);
    setShowModal(true);
  }, [totalScore]);

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
        question="1. Which of the following blocks the smooth flow of traffic?"
        option1="Slowing down to look at collision scene"
        option2="Avoiding unnecessary lane changes"
        option3="Using public transportation instead of your vehicle"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Slowing down to look at accidents or unusual things causes traffic jams and should be avoided."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. Parallel parking is when the:"
        option1="Front wheels are turned toward the street."
        option2="Vehicle is in line with other parked vehicles"
        option3="Rear wheels are touching the curb."
        name="two"
        ptionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Parallel parking is a crucial skill for drivers, especially in urban areas with limited parking spaces. This maneuver requires aligning the vehicle parallel to the curb between two parked vehicles. "
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. It is illegal to park your vehicle:"
        option1="In an unmarked crosswalk"
        option2="Within three feet of a private driveway."
        option3="In a bicycle lane. "
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />

      <RadioButton
        classname="bold"
        question="4. When parking uphill on a two-way street with no curbs, your front wheels should be:"
        option1="Turned to the left (toward the street)"
        option2="Turned to the right (away from the street)"
        option3="Parallel to the pavement"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When parking uphill on a two-way street with no curbs, it is recommended to turn your front wheels to the right. This is a safety measure to prevent the vehicle from rolling into traffic if the brakes fail."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. If you have a green light, but traffic is blocking the intersection, you should:"
        option1="Stay out of the intersection until traffic clears"
        option2="Enter the intersection and wait until traffic clears"
        option3="Merge into another lane, and try to go around the traffic"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you have a green light but the intersection is blocked, it's important to wait until you can safely clear the intersection before proceeding. Blocking an intersection can impede the flow of traffic and create safety hazards."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. At intersections, crosswalks, and railroad crossings, you should always:"
        option1="Slowing down to look at collision scene"
        option2="Avoiding unnecessary lane changes"
        option3="Slowly pass vehicles that seem to be stopped for no reason"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "It is important to check the sides of your vehicle at intersections, crosswalks, and railroad crossings to be aware of any potential hazards."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. If you get sleepy while driving, you should:"
        option1="Drive to a safe place, stop and rest"
        option2="Play the audio loudly and roll down the windows"
        option3="Drink coffee to make you more alert"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If you get sleepy while driving, it's essential to pull over to a safe location and take a break to rest. This is a crucial safety measure to prevent accidents caused by drowsy driving."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. Which of the following is true about double parking?"
        option1="It is allowed if you are making a delivery"
        option2="It is illegal under all circumstances"
        option3="It is illegal unless you wait in the vehicle"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Double parking refers to parking a vehicle next to or near another parked vehicle on the roadway side of the parked vehicle. This practice is prohibited as it can impede traffic flow and create unsafe conditions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. What societal changes were brought about by the advent of the automobile?"
        option1="Increased reliance on public transportation"
        option2="Limited access to employment and services in city centers"
        option3="Transformation of social interactions and the ability to live farther from city centers"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The advent of the automobile indeed brought about significant societal changes. The ability to travel by car transformed social interactions by providing greater mobility and flexibility. Additionally, it allowed people to live farther from city centers, leading to suburbanization and changes in housing patterns."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. How has the automotive industry contributed to global economies?"
        option1="By limiting job opportunities across various sectors"
        option2="By fostering interdependence only within the automotive sector"
        option3="By generating employment opportunities, contributing to economic growth, and fostering interdependence with other sectors"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The automotive industry plays a crucial role in job creation, economic growth, and fostering interconnectedness with other sectors, such as manufacturing, technology, and transportation."
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
