import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";

const QuizAnswers = {
  one: "Bicyclist",
  two: "When you have enough space to cross the intersection before the light turns red.",
  three: "A space set aside for pedestrians",
  four: "Stop, then proceed when safe",
  five: "It is a space set aside for pedestrians and marked by raised buttons or road marking",
  six: "At the crosswalk or limit line",
  seven: "Using hand and arm positions",
  eight: "To increase the chances of being noticed by drivers.",
  nine: "To prioritize pedestrian safety and prevent accidents",
  ten: " It maintains the visibility of other drivers and pedestrians, promoting safer interactions",
};

export default function Nine() {
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
      setScore(data.scores.chapternine || 0);
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
      await updateScore("chapternine", currentScore);
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
          you scored {(score / 10) * 100 + " %"}{" "}
          {score >= 8
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
        question="1. Which of these is not a pedestrian:"
        option1="Bicyclist"
        option2="Disabled person using a wheelchair"
        option3="Blind person with a cane."
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Bicyclists are considered operators of vehicles, and they have their own set of rules and regulations when it comes to sharing the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. When is it safe to enter an intersection on a solid green light?"
        option1="When you can go around the traffic already in the intersection."
        option2="When you have enough space to cross the intersection before the light turns red."
        option3="When you cannot completely cross the intersection."
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />

      <RadioButton
        classname="bold"
        question="3. What is a safety Zone?"
        option1="An empty lane next to the freeway dividers"
        option2="A space set aside for pedestrians"
        option3="The meridian strip on a divided highway"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A safety zone is an area on a roadway marked for the protection of pedestrians, typically near crosswalks. It provides a designated space for pedestrians to cross safely."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. The driver ahead of you stops at a crosswalk. What should you do?"
        option1="Drive to the right edge of the road and stop"
        option2="Stop, then proceed when safe"
        option3="Change lanes, look carefully, and pass"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When the driver ahead stops at a crosswalk, you should also come to a stop and wait until it is safe to proceed. It's important to yield to pedestrians in the crosswalk and ensure the intersection is clear before continuing. "
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. Which of these statements is true about safety zones?"
        option1="The road is probably being repaired by slow moving vehicles"
        option2="If a streetcar is stopped at the safety zone controlled by a traffic signal, you can pass at 25 mph"
        option3="It is a space set aside for pedestrians and marked by raised buttons or road marking"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Safety zones are areas designated for pedestrians and are typically marked with raised buttons, road markings, or other indicators. These zones provide a safe space for pedestrians to cross the road, especially in busy or traffic-prone areas."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. The intersection has a stop sign. Where should you first stop"
        option1="At the crosswalk or limit line"
        option2="After the crosswalk"
        option3="Out far enough to see the cross traffic"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When approaching an intersection with a stop sign, you should first stop at the crosswalk or limit line, if one is present. Stopping at the designated crosswalk or limit line helps ensure that you have a clear view of the intersection and can safely assess the traffic conditions before proceeding."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. How should bicyclists signal a turn?"
        option1="Using their vehicle's signal lights"
        option2="Using hand and arm positions"
        option3="Using their horn"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Using hand signals is the standard way for cyclists to communicate their intentions to other road users."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. Wear bright and reflective clothing in low-light conditions:"
        option1="To enhance fashion sense"
        option2="To increase the chances of being noticed by drivers."
        option3="To obstruct visibility for drivers"
        optionDiv="option"
        name="eight"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Wearing bright and reflective clothing significantly increases the chances of pedestrians being noticed by drivers, particularly in low-light conditions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. Why must you always yield the right of way to pedestrians within crosswalks, marked or unmarked?"
        option1="To avoid traffic violations and potential penalties"
        option2="To prioritize pedestrian safety and prevent accidents"
        option3="To speed up traffic flow"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Yielding the right of way to pedestrians within crosswalks is important to prioritize pedestrian safety and prevent accidents."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. What is the significance of stopping behind the limit line and avoiding blocking crosswalks?"
        option1="It speeds up traffic flow at intersections"
        option2=" It maintains the visibility of other drivers and pedestrians, promoting safer interactions"
        option3="It prevents pedestrians from crossing the road"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Stopping behind the limit line and avoiding blocking crosswalks maintains the visibility of other drivers and pedestrians."
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
