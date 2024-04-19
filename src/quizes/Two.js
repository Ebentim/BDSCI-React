import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const QuizAnswers = {
  one: "Falling asleep behind the wheel and crashing",
  two: "3 Seconds",
  three: "Faster drivers want to pass you",
  four: "Yes, you need to signal when you pull away from the curb",
  five: "Special restrictions you must follow when driving",
  six: "It provides a wide-angle view, detecting hazards from the sides.",
  seven: "It aids in interpreting traffic signals and road signs.",
  eight: "Both of the above",
  nine: "By utilizing proper eye-scanning techniques, balancing central and peripheral vision.",
  ten: "Adjust the rearview mirror to its nighttime setting.",
};

export default function Two() {
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
      setScore(data.scores.chaptertwo || 0);
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
      await updateScore("chaptertwo", currentScore);
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
        question="1. Fatigue increases the risk of"
        option1="Missing an exit"
        option2="Being late for an appointment"
        option3="Falling asleep behind the wheel and crashing"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Feeling tired can make you make mistakes about how fast and far things are, make it more likely for you to have an accident, and slow down your ability to decide things. If you're really tired, you might even doze off while driving, leading to a crash that could hurt or even kill you or others."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. To avoid tailgating, how much space should you leave between your vehicle and the vehicle in front of you?"
        option1="5 Seconds"
        option2="3 Seconds"
        option3="4 Seconds"
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Tailgating reduces your visibility of the road ahead, as the vehicle in front blocks your view. It also limits your reaction time if that driver suddenly brakes. To ensure safety and prevent collisions, employ the three-second rule for a safe following distance. Maintaining a proper distance allows ample time to respond to mistakes made by other drivers."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. You should use a turnout lane when:"
        option1="You want to pass another driver"
        option2="You want to make a U turn"
        option3="Faster drivers want to pass you"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Using a turnout lane when faster drivers want to pass allows a smoother flow of traffic and helps prevent congestion. It is a safe practice to use a turnout lane when available to allow faster-moving vehicles to pass."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. Do you need to signal when you pull away from the curb?"
        option1="No, you only need to signal when you approach the curb"
        option2="Yes, you need to signal when you pull away from the curb"
        option3="Only if there are other vehicles around you"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Signaling when pulling away from the curb is important to communicate your intentions to other road users, indicating that you are re-entering traffic."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. If you have a conditional driver's license, there is (are):"
        option1="A special time limit to renew your license"
        option2="Special restrictions you must follow when driving"
        option3="Age limits improved on your driver license"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />

      <RadioButton
        classname="bold"
        question="6. Why is peripheral vision important for driver safety? "
        option1="It helps in reading road signs."
        option2="It provides a wide-angle view, detecting hazards from the sides."
        option3=" It enhances color perception."
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Peripheral vision allows drivers to detect and respond to potential hazards or dangers from the sides of the vehicle. While central vision focuses on the road ahead, peripheral vision helps to identify objects, pedestrians, or other vehicles approaching from the sides. This broader awareness is essential for making informed driving decisions and avoiding potential collisions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. Why is color vision important for safe driving?"
        option1="It aids in interpreting traffic signals and road signs."
        option2="It enhances taste perception."
        option3="It improves memory recall."
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Accurate color perception helps drivers distinguish between different traffic signals, signs, and roadway markings, which are crucial for making informed and safe decisions while driving."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. A driver with partial hearing loss compensates for impaired hearing by"
        option1="Turn off radios completely to minimize background noise."
        option2="Prioritize regular hearing check-ups."
        option3="Both of the above"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Turning off radios can reduce distractions and make it easier for the driver to focus on the sounds they need to hear, and regular hearing check-ups are important for managing and addressing hearing loss."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. What can drivers do to optimize depth perception while driving"
        option1="By not using peripheral vision."
        option2="By utilizing proper eye-scanning techniques, balancing central and peripheral vision."
        option3="By focusing solely on the central area of the road."
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Proper eye-scanning techniques involve regularly shifting your gaze between the central area of the road and your peripheral vision to optimize depth perception. This helps drivers assess the distance and speed of objects around them, enhancing overall awareness and safety."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. What should you do to minimize glare from headlights behind you or reflective surfaces at night?"
        option1="Adjust the rearview mirror to its nighttime setting."
        option2="Adjust the rearview mirror to its daytime setting."
        option3="Stare directly at oncoming headlights."
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This setting is designed to minimize glare from headlights behind you or reflective surfaces at night by dimming the reflection."
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
