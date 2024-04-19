import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";

const QuizAnswers = {
  one: "Low beams",
  two: "Only use your cell phone in hands-free mode when necessary.",
  three: "Often leads to high-risk decision-making",
  four: "Yes, but yield to any vehicle or person still in the intersection",
  five: "Under all circumstances",
  six: "Both of the above",
  seven: "If another driver makes a mistake, you have more time to react",
  eight: "Slowing down as you approach curves and intersections",
  nine: "Taking your foot off the gas pedal",
  ten: "Off the pavement",
};

export default function Fourteen() {
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
      setScore(data.scores.chapterfourteen || 0);
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
      await updateScore("chapterfourteen", currentScore);
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
        question="1. When driving in fog, rain or snow use:"
        option1="Low beams"
        option2="High beams"
        option3="Fog lights only"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Use low beam headlights in fog, rain, and snow. High beams reflect light back in these conditions, causing glare and making it hard to see ahead."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. The safest precaution you can take regarding the use of cell phones and driving is:"
        option1="Only use your cell phone in hands-free mode when necessary."
        option2="Keep your phone within easy reach so you will not need to take your eyes off the road."
        option3="Review the number before answering a call."
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Minimize distractions by using hands-free features, which can help maintain focus on the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. Excessive Speed:"
        option1="Does not increase the chance of a crash."
        option2="Increases your ability to react to a hazard"
        option3="Often leads to high-risk decision-making"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Excessive speed is a common contributing factor to vehicle crashes. Excessive speed does not save time, instead it often leads to high-risk decision-making"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. You are stopped at an intersection. The traffic light just turned green. Can you go immediately?"
        option1="Yes, other traffic or pedestrians must yield to you"
        option2="Yes, you now have the right of way"
        option3="Yes, but yield to any vehicle or person still in the intersection"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "It is very important to understand traffic rules at a green light. Even though the light is green, it's important to yield to any vehicles or pedestrians that are still in the intersection."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. When should a three-year-old weighing 45 lbs, be placed in a safety seat?"
        option1="Under all circumstances"
        option2="Only when driving on the freeway"
        option3="Only if the child is in the front seat"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A three-year-old weighing 45 lbs should be placed in a safety seat at all times while traveling in a vehicle."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. When driving you must turn on your headlights:"
        option1="Whenever you turn on your wipers due to adverse weather conditions"
        option2="30 minutes after sunset and 30 minutes before sunrise"
        option3="Both of the above"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "IYou should turn on your headlights not only 30 minutes after sunset and 30 minutes before sunrise but also whenever you turn on your wipers due to adverse weather conditions. Using headlights during adverse weather conditions enhances visibility for both the driver and other road users."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. What is the benefit of a space cushion around your vehicle?"
        option1="If another driver makes a mistake, you have more time to react"
        option2="There is none, other drivers just crowd in front of you"
        option3="You don't have to worry about the driver next to you"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Maintaining a safe distance from the vehicles around you creates a buffer zone, providing additional time and space to respond to unexpected situations, sudden stops, or other potential hazards on the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. You can avoid skidding on a slippery surface by:"
        option1="Shifting to a lower gear after you start down a steep hill"
        option2="Following in the tracks of the vehicle in front of you"
        option3="Slowing down as you approach curves and intersections"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Slowing down on slippery surfaces, especially when approaching curves and intersections, helps reduce the risk of skidding."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. A driver unexpectedly pulls in front of you, the handbook recommends:"
        option1="Swerving into the lane next to you"
        option2="Driving onto the shoulder of the road"
        option3="Taking your foot off the gas pedal"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When a driver unexpectedly pulls in front of you, the handbook recommends taking your foot off the gas pedal to create more space between your vehicle and the one in front. This allows for a safer following distance and reduces the risk of a collision."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. You are driving on a highway. Your tire suddenly goes flat and you need to pull over and get help. Where should you pull over?"
        option1="In the right hand lane"
        option2="Wherever your car will be visible 200 feet from the front"
        option3="Off the pavement"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When experiencing a flat tire on a highway, it is safer to pull over off the pavement to avoid obstructing traffic and ensure your safety."
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
