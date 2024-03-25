import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";
const QuizAnswers = {
  one: "Move toward the left side of your lane",
  two: "When waiting to make a left turn at a traffic light",
  three:
    "Drive slowly enough that you can stop within the area illuminated by your headlights",
  four: "To decrease centrifugal force",
  five: "Resisting motion, and providing traction for acceleration, deceleration and maneuvering",
  six: "To avoid engine strain and stalling",
  seven: "To hold you back and stop you from flying forward during a crash.",
  eight: "Kinetic energy quadruples",
  nine: "Inadequate friction can lead to loss of control, skidding, or hydroplaning",
  ten: "To reduce the risk of rollover accidents",
};
export default function Three() {
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
      setScore(data.scores.chapterthree || 0);
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
      await updateScore("chapterthree", currentScore);
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
        question="1. You want to make a right turn at an upcoming intersection, you should slow down and?"
        option1="Move toward the left side of your lane"
        option2="AAvoid driving in the bicycle lane"
        option3="Signal for 100 feet before turning"
        name="one"
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
        question="2. In which of the following scenarios should your wheels not be pointed straight ahead?"
        option1="When waiting to make a left turn at a traffic light"
        option2="When Parked on a hill or sloping driveway"
        option3="When parked on the side of a level roadway where there is no curb"
        ptionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When you're waiting to turn left, keep your wheels straight until it's safe to turn. If a car hits you from behind, this helps avoid going into oncoming traffic. When parked uphill or downhill, turn the wheels to prevent rolling into traffic in case the brakes fail."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. When driving at night on a dimly lit street, you should:"
        option1="Drive slowly enough that you can stop within the area illuminated by your headlights"
        option2="Turn on your high beam headlights to better see the vehicles ahead of you"
        option3="Keep the instrument panel lights bright to be more visible to other drivers"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Drive slower at night than during the day because you can't see as far ahead. Make sure you can stop within the area lit up by your headlights."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. You should reduce speed before entering a curve:"
        option1="To increase centripetal force"
        option2="To decrease centrifugal force"
        option3="To disrupt stability"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Reducing speed before entering a curve decreases the centripetal force required to negotiate the curve. This helps in decreasing the outward force (centrifugal force), making it easier to maintain control and stability during the turn."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. Friction influence the movement of a car on the road by"
        option1="Resisting motion, and providing traction for acceleration, deceleration and maneuvering"
        option2="Affecting the tires' appearance"
        option3="Increasing speed"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Friction allows the tires to grip the road, providing traction for various aspects of movement such as acceleration, deceleration, and maneuvering."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. Always consider the force of gravity when driving downhimm:"
        option1="To increase speed and thrill"
        option2="To avoid engine strain and stalling"
        option3="Gravity only affects uphill driving"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Gravity pulls objects toward the Earth, and when driving downhill, it requires proper braking techniques to prevent gravity from increasing the speed of the vehicle, which can lead to safety hazards."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. You should use your seat belt always"
        option1="To counteract the effects of potential energy"
        option2="To enhance the speed of the occupants"
        option3="To hold you back and stop you from flying forward during a crash."
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Seat belts apply restraining forces during a sudden stop or collisions, counteracting the effects of inertia which tends to keep objects in motion. Seat belts prevents the occupants of a vehicle from colliding with the vehice's interior or being ejected"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. What happens to kinetic energy when the speed of a vehicle doubles?"
        option1="kinetic energy remains the same"
        option2="Kinetic energy decreases"
        option3="Kinetic energy quadruples"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Kinetic energy increases exponentially with speed, and when the speed of a vehicle doubles, its kinetic energy quadruples."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. Why should you consider friction when driving in wet or slippery road conditions?"
        option1="Inadequate friction can lead to loss of control, skidding, or hydroplaning"
        option2="Friction only affects acceleration, not deceleration"
        option3="Wet road conditions improve friction."
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />

      <RadioButton
        classname="bold"
        question="10. Reduce speed before entering curves and follow posted speed limits:"
        option1="To peform suddenly lane changes"
        option2="To reduce the risk of rollover accidents"
        option3="TO ignore the vehicle's center of gravity"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "To reduce the risk of rollover accidents, drivers should adhere to posted speed limits, especially when entering high-speed curves."
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
