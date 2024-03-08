import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState } from "react";

const QuizAnswers = {
  one: "Weight",
  two: "Even over-the-counter drugs can impair your driving",
  three: "Eight hundredths (0.08) of one percent",
  four: "It ensures full control over the vehicle and rational decision-making.",
  five: "Appoint a designated driver who remains sober.",
  six: "To prevent accidents due to impairment.",
  seven: "Antihistamines",
  eight: "Impaired coordination",
  nine: "It impairs perception, coordination, and attention",
  ten: "Erratic speed control",
};

export default function Ten() {
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
    await updateScore("chapterten", score);

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
        question="1. Which of the following factors affect an individual's absorption of alcohol?"
        option1="Weight"
        option2="Height"
        option3="intelligence"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Various things can influence how a person's body takes in alcohol, like their weight, gender, the food in their stomach, and how much alcohol they've had. The only way to get alcohol out of someone's system is to be patient and wait."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="2. Which of these statements is true about drugs and driving?"
        option1="Any prescription drug is safe to use if you don't feel droway"
        option2="Even over-the-counter drugs can impair your driving"
        option3="Only illegal drugs can impair your driving"
        name="two"
        optionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Taking certain medications, whether prescribed by a doctor or bought over the counter, can make it unsafe for you to drive. This includes medications for things like colds, and allergies, or to relax your nerves and muscles. It's against the law to drive if these drugs affect your ability to drive safely. The law treats all drugs the same, whether they are illegal, prescribed by a doctor, or bought without a prescription."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="3. It is illegal for a person, 21 years of age or older to drive with a blood concentration that is ______ or more"
        option1="One tenth (0.01) of one percent"
        option2="Eight hundredths (0.08) of one percent"
        option3="Five hundredths (0.05) of one percent"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "The blood alcohol concentration (BAC) limit for drivers aged 21 or older in California is 0.08. Exceeding this limit is considered illegal and will result in penalties such as fines, license suspension, or other consequences."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="4. Why is choosing abstinence from alcohol and drugs while driving considered the most effective and responsible choice?"
        option1="It is a legal requirement."
        option2="It ensures full control over the vehicle and rational decision-making."
        option3="It is a common social norm."
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Abstinence from alcohol and drugs while driving allows the driver to maintain full control over the vehicle and make rational decisions."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="5. What is a responsible approach to attending social events involving alcohol?"
        option1="Appoint a designated driver who remains sober."
        option2="Encourage everyone to drink as much as they want."
        option3="Call a taxi for others if they seem intoxicated."
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Appointing a designated driver is a responsible choice at social events involving alcohol."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="6. Why is it advised to stay where you are and wait until sober enough to drive if unsure about your ability to drive safely after consuming alcohol or drugs?"
        option1="To avoid traffic congestion."
        option2="To save money on transportation."
        option3="To prevent accidents due to impairment."
        name="six"
        optionDiv="option"
        ida="sixA"
        idb="sixB"
        idc="sixC"
        check={selectedOptions.six}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Staying where you are and waiting until sober to drive is important to prevent accidents due to impaired judgment, reaction time, and coordination associated with alcohol or drug consumption."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="7. Which over-the-counter (OTC) medication ingredient can potentially cause drowsiness and affect a driver's alertness and reaction time?"
        option1="Antihistamines"
        option2="Decongestants"
        option3="Pain relievers"
        name="seven"
        optionDiv="option"
        ida="sevenA"
        idb="sevenB"
        idc="sevenC"
        check={selectedOptions.seven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Antihistamines, commonly found in some OTC cold and allergy medicines, can cause drowsiness as a side effect, negatively impacting a driver's alertness and reaction time."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="8. What is a concerning side effect of narcotics like codeine and Demerol in terms of driving ability?"
        option1="Enhanced coordination"
        option2="Increased concentration"
        option3="Impaired coordination"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Narcotics, including codeine and Demerol, are central nervous system depressants that can induce a state of drowsiness, stupor, and impaired coordination, hindering a driver's ability to control the vehicle effectively."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="9. Why is driving under the influence of medical marijuana illegal in California?"
        option1="It causes extreme sedation"
        option2="It impairs perception, coordination, and attention"
        option3="It induces a false sense of well-being"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Driving under the influence of medical marijuana is illegal due to its impairing effects."
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="10. During peak DUI hours between 10:00 P.M. and 2:00 A.M., what is a common behavior exhibited by impaired drivers that increases the risk of accidents?"
        option1="Consistent speed control"
        option2="Predictable lane changes"
        option3="Erratic speed control"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Impaired drivers during peak DUI hours may display unpredictable behavior, including fluctuating between unreasonably fast and slow speeds, which increases the risk of accidents and endangers other road users."
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
