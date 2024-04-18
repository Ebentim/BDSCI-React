import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";
const QuizAnswers = {
  one: "In a secured seat and while using an approved safety belt",
  two: "You should never drive faster than is safe for current conditions.",
  three: "DMV",
  four: "500",
  five: "Move toward the right side of your lane.",
  six: "At all times.",
  seven:
    "Two sets of solid, double yellow lines are spaced two or more feet apart.",
  eight: "25 mph",
  nine: "Continue through the intersection then move to the right and stop",
  ten: "Tank trucks marked with hazardous materials placards",
};
export default function Five() {
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
      setScore(data.scores.chapterfive || 0);
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
      await updateScore("chapterfive", currentScore);
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
        question="1. A person may legally ride in the back of a pickup truck when?"
        option1="The sides of the pickup bed are at least 24 inches high"
        option2="The back of the pickup is covered with a camper shell"
        option3="In a secured seat and while using an approved safety belt"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Don't let anyone sit in the back of a pickup truck unless it has seats, and they must use both the seat and a seatbelt."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. California’s “Basic Speed Law” says:"
        option1="When waiting to make a left turn at a traffic light"
        option2="You should never drive faster than is safe for current conditions."
        option3="The maximum speed limit in California is 70 mph on certain freeways."
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "California Basic Speed Law. This law emphasizes that drivers must adjust their speed based on the current road and weather conditions, regardless of posted speed limits. "
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. You just sold your vehicle. You must notify ______ within 5 days."
        option1="CHP"
        option2="DMV"
        option3="Your insurance provider"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you sell your vehicle, it is important to notify the DMV within 5 days to update the vehicle's ownership records. This helps ensure that you are no longer held responsible for the vehicle and any associated liabilities, such as traffic violations or accidents, after the sale."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. Dim your high-beam headlights to low-beams within ______ feet when a vehicle is coming towards you."
        option1="200"
        option2="300"
        option3="500"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When a vehicle is approaching from the opposite direction, it is important to dim your high-beam headlights and switch to low-beams within 500 feet. This helps prevent blinding or distracting the oncoming driver, ensuring safer visibility for both parties on the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. You want to make a right turn at an upcoming intersection. You should slow down and:"
        option1="Move toward the right side of your lane."
        option2="Avoid driving in the bicycle lane."
        option3="Signal for 5 feet before turning."
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The correct action to take when preparing to make a right turn is to slow down and move toward the right side of your lane. This helps create a clear path for other vehicles and pedestrians, indicating your intention to turn."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. You must obey instructions from school safety patrols or crossing guards:"
        option1="At all times."
        option2="Only during school hours."
        option3="Unless you do not see any children present."
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "You must prioritize children's safety. You must obey instructions from school safety patrols or crossing guards whenever they are present, not just during school hours."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. Treat lines as a barrier, when:"
        option1="Two sets of solid, double white lines are spaced two feet apart."
        option2="Two sets of solid, double yellow lines are spaced two or more feet apart."
        option3="Two sets of broken yellow lines are spaced one foot apart."
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Solid, double yellow lines indicate a barrier, and crossing them is not allowed."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. Unless otherwise posted, the speed limit in a residential area is _______"
        option1="20 mph"
        option2="25 mph"
        option3="30 mph"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />

      <RadioButton
        classname="bold"
        question="9. If you are in the middle of an intersection when you hear the siren of an emergency vehicle, you should:"
        option1="Move to the right and stop at the intersection"
        option2="Continue through the intersection then move to the right and stop"
        option3="Continue through the intersection then move to the left and stop"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you are in the middle of an intersection and hear the siren of an emergency vehicle,  clear the intersection first for safety reasons and then move to the right to stop. This ensures that you are not blocking the path of the emergency vehicle."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. Which of these vehicles must always stop before crossing railroad tracks?"
        option1="Tank trucks marked with hazardous materials placards"
        option2="Motorhomes or pickup trucks towing a boat trailer"
        option3="Any vehicle with 3 or more axles or weighing more than 4,000 pounds"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Tank trucks marked with hazardous materials placards must always stop before crossing railroad tracks to ensure safety, especially considering the potential hazards associated with transporting hazardous materials."
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
