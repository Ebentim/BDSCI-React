import { useQuiz } from "../contexts/QuizContext";
import { useAuth } from "../contexts/AuthContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState, useEffect } from "react";

const QuizAnswers = {
  one: "Allow a larger following distance",
  two: "Large trucks have bigger blind spots than most passenger vehicles.",
  three: "Keep your eyes moving to look for possible hazards",
  four: "When you are within 200 feet of a cross street where you plan to turn right",
  five: "To increase centrifugal force",
  six: "To mitigate blind spots and improve visibility.",
  seven:
    "Motorcycles are harder to see due to their smaller size and can fall into blind spots",
  eight: "To protect against abrasions and road rash.",
  nine: "To protect your head in the event of an accident.",
  ten: "To maintain stability and minimize potential imbalance.",
};

export default function Eleven() {
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
      console.log(data.scores.chaptereleven, "from db");
      setScore(data.scores.chaptereleven || 0);
      console.log(data.scores.chaptereleven, "after updated");
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
      await updateScore("chaptereleven", currentScore);
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
        question="1. When you are behind a motorcycle, you should:"
        option1="be ready to use your horn"
        option2="Drive more slowly"
        option3="Allow a larger following distance"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Allow for at least a three to four-second following distance when behind a motorcyclist. Following too closely can be dangerous as motorcycles can stop quickly. If the motorcyclist makes a mistake, having extra distance gives you more time to avoid a collision. This is especially crucial on wet or icy roads, gravel roads, and metal surfaces like bridges, gratings, and tracks."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. Which of the following statements about blind spots is true?"
        option1="They are eliminated if you have one outside mirror on each side of the vehicle."
        option2="Large trucks have bigger blind spots than most passenger vehicles."
        option3="Blind spots can be checked by looking in your rear-view mirrors."
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Understanding the size and location of blind spots is crucial for safe driving, especially when sharing the road with larger vehicles. Drivers need to be aware of these blind spots and take precautions to avoid potential accidents."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. You drive defensively when you"
        option1="Always put one car length between you and the car ahead"
        option2="Look only at the car in front of you while driving"
        option3="Keep your eyes moving to look for possible hazards"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Defensive driving involves being aware of your surroundings and anticipating potential hazards to prevent accidents. Keeping your eyes moving helps you stay alert and identify potential dangers on the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. When can you drive in a bike lane?"
        option1="During rush hour traffic, if there are no bicyclists in the bike lane"
        option2="When you are within 200 feet of a cross street where you plan to turn right"
        option3="When you want to pass a driver ahead of you who is turning right"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "You are allowed to enter a bike lane within 200 feet of a cross street when preparing to make a right turn. It's important to be cautious and yield to any bicyclists in the lane."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. What is the purpose of leaning a bicycle or motorcycle toward the inside when cornering?"
        option1="To increase centrifugal force"
        option2="To disrupt the balance between forces"
        option3="To counterbalance the outward force and maintain stability"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Leaning a bicycle or motorcycle toward the inside while cornering helps counterbalance the outward force and maintain stability during the turn."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. You should adjust side mirrors correctly and practice shoulder checks especially when sharing the road with motorcycles"
        option1="To mitigate blind spots and improve visibility."
        option2="To minimize fuel consumption"
        option3="To reduce the risk of punctures"
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Adjusting side mirrors correctly and practicing shoulder checks help mitigate blind spots and improve the visibility of motorcycles."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. You should be concious of motorcycle especially in congested traffic because"
        option1="Motorcycles can travel at higher speeds than cars"
        option2="Motorcycles are harder to see due to their smaller size and can fall into blind spots"
        option3="Motorcycles require less space on the road"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Motorcycles' reduced visibility, especially in blind spots, makes it crucial for drivers to be aware of them when sharing the road. Adjusting mirrors, performing shoulder checks, and maintaining a safe following distance help mitigate this risk."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. Wear a heavy jacket made of textile or durable textile material when riding a motorcycle"
        option1="To stay warm in cold weather."
        option2="To protect against abrasions and road rash."
        option3="To make a fashion statement."
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Wearing a heavy jacket made of leather or durable textile material is crucial for protecting the rider against abrasions and road rash in the event of a fall or slide. It provides a layer of protection for the skin, reducing the risk of injuries during accidents."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. What is the primary purpose of insisting on a properly fitting helmet?"
        option1="To enhance your appearance during the ride."
        option2="To meet fashion standards."
        option3="To protect your head in the event of an accident."
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Wearing a properly fitting helmet is crucial for the safety of a motorcycle passenger, as it provides the best protection and reduces the risk of head injuries during an accident."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="Why is it important for a motorcycle passenger to lean with the driver during turns?"
        option1="To show synchronization with the rider."
        option2="To maintain stability and minimize potential imbalance."
        option3="To perform stunts and tricks during the ride."
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Leaning with the driver during turns helps in maintaining the motorcycle's balance, allowing for smoother navigation through curves. It is a safety measure to prevent any imbalance that may occur if the passenger does not lean in the same direction as the driver."
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
