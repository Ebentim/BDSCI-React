import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";
import railcrossing from "../Assets/images/railwaySign.jpg";
import slowerTraffic from "../Assets/images/slowerTraffic.png";
import slow from "../Assets/images/slow.jpg";
import yields from "../Assets/images/yield.jpg";
import pedestrian from "../Assets/images/pede.jpg";
const QuizAnswers = {
  one: "Warning about potential hazards or road conditions",
  two: "Are approaching a railroad crossing and should prepare to stop",
  three:
    "Stay in the right lane if you are driving more slowly than other traffic",
  four: "Go through the intersection without stopping.",
  five: "Slow-moving vehicle",
  six: "Let cross traffic pass before proceeding",
  seven: "Stop before entering the intersection, if you can do so safely",
  eight: "Pedestrian crossing ahead",
  nine: "Don't enter the intersection until you can get completely across",
  ten: "Traffic moving in opposite directions on two-way roads",
};
export default function Four() {
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
      setScore(data.scores.chapterfour || 0);
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
      await updateScore("chapterfour", currentScore);
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
        question="1. What does a yellow traffic sign signify?"
        option1="Permitted movements or directional guidance"
        option2="No passing zones"
        option3="Warning about potential hazards or road conditions"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />
      <img
        src={railcrossing}
        alt="rail crossing sign"
        style={{
          height: "auto",
          maxHeight: "150px",
          width: "auto",
          maxWidth: "100px",
        }}
      />
      <RadioButton
        classname="bold"
        question="2. When you see this sign, you:"
        option1="Are approaching a railroad crossing and should prepare to stop"
        option2="Will always stop at the upcoming railroad crossing"
        option3="Should stop and wait for a signal before crossing the railroad tracks"
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This sign means a train crossing is ahead. You should check and listen carefully, reduce your speed, and be ready to stop. Wait for any trains to go by before you continue."
            : null
        }
      />
      <img
        src={slowerTraffic}
        alt="rail crossing sign"
        style={{
          height: "auto",
          maxHeight: "150px",
          width: "auto",
          maxWidth: "100px",
        }}
      />
      <RadioButton
        classname="bold"
        question="3. This White Sign mean?"
        option1="You should slow down and move to the right lane."
        option2="Stay in the right lane if you are driving more slowly than other traffic"
        option3="Slower traffic must exit on the right"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A white rectangular sign tells you to follow important rules. It means drivers should keep the left lane open, if they can, for passing and faster traffic."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. If you approach a traffic light with a red signal and a police officer directs you to go through the intersection without stopping, you should?"
        option1="Stop until the light turns green"
        option2="Go through the intersection without stopping."
        option3="Come to a complete stop before proceeding"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If a police officer tells you what to do with traffic, listen to them instead of the regular road signs and lights."
            : null
        }
      />
      <img
        src={slow}
        alt="rail crossing sign"
        style={{
          height: "auto",
          maxHeight: "150px",
          width: "auto",
          maxWidth: "100px",
        }}
      />
      <RadioButton
        classname="bold"
        question="5.   An orange and red triangular sign on a vehicle always means?"
        option1="The vehicle has the right-of-way"
        option2="Slow-moving vehicle"
        option3="Shoulder work ahead"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Farm tractors, road maintenance vehicles, animal-drawn carts, and other slow-moving vehicles have a bright orange and red triangle on their back."
            : null
        }
      />
      <img
        src={yields}
        alt="rail crossing sign"
        style={{
          height: "auto",
          maxHeight: "150px",
          width: "auto",
          maxWidth: "100px",
        }}
      />
      <RadioButton
        classname="bold"
        question="6. This sign means:"
        option1="Cars on the right move first"
        option2="You have the right-of-way"
        option3="Let cross traffic pass before proceeding"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you see this sign, you should let others go first. Drive slowly, and if needed, stop before continuing to allow vehicles and pedestrians to cross in front of you."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. You are approaching an intersection at the posted speed limit when the signal turns yellow, you should:"
        option1="Slow down and proceed through the intersection without caution"
        option2="Speed up to cross the intersection before the light turns red"
        option3="Stop before entering the intersection, if you can do so safely"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A yellow traffic light means 'be careful.' It tells you that the light will turn red soon. If you can stop safely, you should. If not, you should carefully go through the intersection."
            : null
        }
      />
      <img
        src={pedestrian}
        alt="pedestrian crossing sign"
        style={{
          height: "auto",
          maxHeight: "150px",
          width: "auto",
          maxWidth: "100px",
        }}
      />
      <RadioButton
        classname="bold"
        question="8.This sign means"
        option1="Pedestrians walking along the road ahead"
        option2="Pedestrian crossing ahead"
        option3="Pedestrians must not cross here"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This sign tells drivers that people might be crossing the road. If a person is crossing in the marked area, drivers must stop and wait until the person is completely across."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. You are approaching a green traffic light and traffic is blocking the intersection. What is the best thing to do?"
        option1="Partially enter the intersection to establish your right-of-way"
        option2="Don't enter the intersection until you can get completely across"
        option3="Continue into the intersection and wait for traffic to clear"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If your traffic light is green, only go into the intersection if you can clear it before the light turns red. If you get stuck in the intersection, you may get a ticket."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. Yellow lines separate:"
        option1="Traffic lanes on one-way streets"
        option2="Traffic moving in opposite directions on two-way roads"
        option3="All carpool lanes from regular traffic lanes"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Yellow lines in the middle of the road show where cars can drive in both directions. If the line is solid, it means you can't cross it to pass other cars. If the line is broken, you can cross it to pass, but only if it's safe and won't disrupt traffic."
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
