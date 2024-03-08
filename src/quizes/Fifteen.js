import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState } from "react";

const QuizAnswers = {
  one: "Ignore it and continue driving",
  two: "An extreme expression of anger on the road.",
  three: "Males under the age of 19",
  four: "It reduces stress and anxiety.",
  five: "Remaining composed and giving aggressive drivers plenty of space.",
  six: "Acknowledging diverse driving experiences and maintaining a safe following distance.",
  seven: "Ignoring traffic rules.",
  eight: "It helps communicate intentions and ensures safe lane changes.",
  nine: "It demonstrates empathy, kindness, and a caring attitude.",
  ten: "66%",
};

export default function Fifteen() {
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
    await updateScore("chapterfifteen", score);

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
        question="1. What should you do if another driver honks at you?"
        option1="Ignore it and continue driving"
        option2="Honk back"
        option3="Make an obscene gesture"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "When another driver honks at you, make sure to stay calm, avoid confrontation, and continue driving safely without escalating the situation."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. What is road rage, and how does it manifest?"
        option1="A common reaction to poor driving skills."
        option2="An extreme expression of anger on the road."
        option3="A strategy for effective anger management."
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Road rage is described as an extreme expression of anger while driving. This behavior is dangerous and often stems from immaturity, poor impulse control, stress inability, and a lack of emotional regulation."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. Which demographic group tends to exhibit the highest prevalence of road rage?"
        option1="Females over the age of 30"
        option2="Individuals between the ages of 40-50"
        option3="Males under the age of 19"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Males under the age of 19 are particularly susceptible to engaging in aggressive driving behaviors."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. How does tailgating contribute to road hazards?"
        option1="It reduces stress and anxiety."
        option2="It encourages courteous driving."
        option3=" It increases stopping distance, raising the risk of collisions."
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Tailgating reduces the time available for a driver to react to sudden stops or emergencies, increasing the risk of rear-end collisions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. When encountering aggressive behavior from other drivers, what is essential for maintaining a safer driving environment?"
        option1="Remaining composed and giving aggressive drivers plenty of space."
        option2="Avoiding any space between vehicles."
        option3="Making eye contact."
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Staying calm, maintaining distance, and avoiding escalating situations are crucial for ensuring road safety when encountering aggressive behavior from other drivers."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. What is a patient and safety-focused response when encountering slow drivers on the road?"
        option1="Tailgating to encourage faster driving."
        option2="Acknowledging diverse driving experiences and maintaining a safe following distance."
        option3="Ignoring slow drivers completely."
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Patient and safety-focused responses involve acknowledging diverse driving experiences, maintaining a safe following distance, and avoiding risky behaviors like tailgating."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. How can a driver showcase adaptability in different driving conditions?"
        option1="Ignoring traffic rules."
        option2="Speeding up in response to faster vehicles."
        option3="Adapting to various driving conditions and handling different circumstances."
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Adapting to various driving conditions reflects adaptability and flexibility in handling different circumstances."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. Why is it important to use turn signals and check mirrors before changing lanes?"
        option1="It's a legal requirement."
        option2="It helps communicate intentions and ensures safe lane changes."
        option3="It causes unnecessary delays."
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Using turn signals and checking mirrors before changing lanes is crucial for communicating intentions and ensuring safe transitions on the road."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="How does responsible and respectful driving reflect on a driver's character?"
        option1="It demonstrates empathy, kindness, and a caring attitude."
        option2="It showcases values for disorder and disregard for others."
        option3="It highlights a preference for aggressive behavior."
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Responsible and respectful driving showcases values such as empathy, kindness, and a caring attitude toward fellow road users."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. What percentage of traffic fatalities is attributed to aggressive driving behaviors, according to reports from SafeMotorist?"
        option1="66%"
        option2="37%"
        option3="2%"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The text mentions that 66% of traffic fatalities result from aggressive driving behaviors, according to reports from SafeMotorist."
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
