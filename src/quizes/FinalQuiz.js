import { useQuiz } from "../contexts/QuizContext";
import { RadioButton } from "../Assets/radio";
import { NavButtons } from "../Assets/next";
import { Modal } from "../Assets/modal";
import "../styles/general.css";
import { useState } from "react";
import yields from "../Assets/images/yield.jpg";
import windingRoad from "../Assets/images/winding-road.jpg";
import flashingYellow from "../Assets/images/flashing-yellow.gif";
import stopAhead from "../Assets/images/stop-ahead.png";
import endDividedHighway from "../Assets/images/end-divided-highway.jpg";
import twoWayTraffic from "../Assets/images/two-way-traffic.jpg";
const QuizAnswers = {
  one: "Yield",
  two: "Winding road",
  three:
    "A solid white line between lanes, of traffic means that you should stay in your lane unless a special situation requires you to change lanes",
  four: "Yield then proceed with caution",
  five: "ride in the front seat if properly secured in a federally approved child passenger restraint system",
  six: "follow directions from the person in charge of the animals",
  seven: "braking too hard at a high speed",
  eight: "yield to traffic and pedestrians on the through road",
  nine: "slow down gradually",
  ten: "Stop",
  eleven: "There is a stop sign ahead",
  twelve: "No U-turn",
  thirteen: "yield the right-of-way to pedestrians",
  fourteen: "potentially Dangerous",
  fifteen: "yield to the bicycle",
  sixteen: "enter the freeway at or near the speed of freeway traffic",
  seventeen: "the end of a divided highway",
  eighteen: "1 year of imprisonment in a county jail",
  nineteen: "allow vehicles to pass",
  twenty: "low-beam headlights.",
  twentyOne: "passing is allowed if done safely",
  twentyTwo: "report the incident to the police",
  twentyThree:
    "continue through the intersection, then move to the right and stop",
  twentyFour: "three-second-rule",
  twentyFive: "you must stop and you cannot turn in the direction of the arrow",
  twentySix:
    "Safely pull over to the right shoulder and stay away from the traffic",
  twentySeven: "a counterclockwise direction",
  twentyEight: "10 days",
  twentyNine: "A two way road",
  thirty: "only from a one-way street onto another one-way street",
  thirtyOne: "Turn on your right turn signal",
  thirtyTwo: "300",
  thirtyThree: "turn right",
  thirtyFour: "a barrier",
  thirtyFive: "30 minutes",
  thirtySix:
    "separates two lanes traveling in the same direction, but crossing the line is prohibited",
  thirtySeven: "55 mph",
  thirtyEight: "a school zone",
  thirtyNine: "blue",
  fourty: "The vehicle traveling uphill",
};

export default function FinalQuiz() {
  const { updateScore } = useQuiz();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showDescription, setShowDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let score = 0;
  const [totalScore, setTotalScore] = useState(score);

  const styles = {
    height: "auto",
    maxHeight: "150px",
    width: "auto",
    maxWidth: "150px",
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
    await updateScore("finalquiz", score);

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
      <img src={yields} alt="question Image" style={styles} />
      <RadioButton
        classname="bold"
        question="1. What type of sign is this?"
        option1="stop"
        option2="Yield"
        option3="Slow-moving vehicle"
        name="one"
        optionDiv="option"
        ida="oneA"
        idb="oneB"
        idc="oneC"
        check={selectedOptions.one}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A yield sign is a red-and-white downward-pointing triangle. It signals that drivers should reduce speed and be prepared to stop, if needed, to allow other vehicles or pedestrians to pass."
            : null
        }
      />
      <img src={windingRoad} alt="question Image" style={styles} />
      <RadioButton
        classname="bold"
        question="2. This sign warns you about"
        option1="Winding road"
        option2="Slippery road"
        option3="Windy road"
        name="two"
        ptionDiv="option"
        ida="twoA"
        idb="twoB"
        idc="twoC"
        check={selectedOptions.two}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This warning sign warns you about a winding road"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="3. Which of the following statements about lane markings is true?"
        option1="A broken yellow line between opposing lanes of traffic means that you may not cross the line"
        option2="A double solid line between opposing lanes of traffic means that vehicles on either side can pass"
        option3="A solid white line between lanes, of traffic means that you should stay in your lane unless a special situation requires you to change lanes"
        name="three"
        optionDiv="option"
        ida="threeA"
        idb="threeB"
        idc="threeC"
        check={selectedOptions.three}
        onchange={handleOptionChange}
        description={showDescription ? "" : null}
      />
      <img src={flashingYellow} alt="question Image" style={styles} />
      <RadioButton
        classname="bold"
        question="4. A traffic signal with a flashing yellow arrow means that you should"
        option1="Yield then proceed with caution"
        option2="stop and be prepared to obey the next signal"
        option3="turn left"
        name="four"
        optionDiv="option"
        ida="fourA"
        idb="fourB"
        idc="fourC"
        check={selectedOptions.four}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A flashing yellow arrow indicates that you can turn left after yielding to pedestrian and oncoming traffic and proceeding with caution."
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="5. If all the rear seats are already occupied by children under 7 years of age, a child under 8 years of age may"
        option1="ride in front seat without a seat belt"
        option2="ride in the front seat if properly secured in a federally approved child passenger restraint system"
        option3="sit on the lap of an elder child, with a seat belt fastened to both"
        name="five"
        optionDiv="option"
        ida="fiveA"
        idb="fiveB"
        idc="fiveC"
        check={selectedOptions.five}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If drivers see animals or livestock, they should slow down and follow directions from the person in charge of the animals. [Near Animals; Laws and Rules of the Road; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="6. Locked wheel skids are usually caused by"
        option1="braking too hard at a high speed"
        option2="turning the ignition to the lock position while the vehicle is still in motion"
        option3="pressing the gas and brake pedals at the same time"
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
            ? "If you brake hard at a high speed, the force of the brakes may exceed the tires' grip of the road. The wheels will lock and the vehicle will skid, no matter which way the steering wheel is turned. To recover from the skid, take your foot off the pedal to unlock the wheels. Then straighten the front wheels as the vehicle begins to straighten out. Slow the vehicle gradually until you are at a safe speed to continue driving. [Locked Wheel skids;  Handling Emmergencies California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="8. When you approach an intersection with a through road but without stop or yield signs, you must"
        option1="accelerate to merge with traffic"
        option2="make a sharp turn to match the speed of the traffic on the through road"
        option3="yield to traffic and pedestrians on the through road"
        name="eight"
        optionDiv="option"
        ida="eightA"
        idb="eightB"
        idc="eightC"
        check={selectedOptions.eight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "At intersections without a stop or yield sign, yield to pedestrians, vehicles, and bicycles on the through-read, They have the right of way. [Intersections; Laws and Rules of the Road; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="9. If your vehicle starts to hydroplane, you should"
        option1="apply the brakes"
        option2="slow down gradually"
        option3="press your gas pedal"
        name="nine"
        optionDiv="option"
        ida="nineA"
        idb="nineB"
        idc="nineC"
        check={selectedOptions.nine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If your vehicle starts to hydroplane, slow down gradually, but do not apply the brakes. [Driving Hazards, Special Driving Situations; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="10. What should you do at a flashing red signal light?"
        option1="Proceed with caution"
        option2="Go without stopping"
        option3="Stop"
        name="ten"
        optionDiv="option"
        ida="TenA"
        idb="TenB"
        idc="TenC"
        check={selectedOptions.ten}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A flashing red signal light means 'STOP,' and you may proceed when it is safe after stopping."
            : null
        }
      />
      <img src={stopAhead} alt="questionImage" style={styles} />
      <RadioButton
        classname="bold"
        question="11. what does this warning sign mean"
        option1="Slow-moving vehicles should move as directed"
        option2="Slow-moving vehicles should not move as directed"
        option3="There is a stop sign ahead"
        name="eleven"
        optionDiv="option"
        ida="ElevenA"
        idb="ElevenB"
        idc="ElevenC"
        check={selectedOptions.eleven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This warning sign indicates a stop sign ahad. You should come to a complete stop near the stop sign before proceeding farther [Traffi Signs; Traffic Controls; California Driver Handbook]"
            : null
        }
      />
      <img
        src="https://www.dmv.ca.gov/portal/uploads/2020/02/nouturn.png"
        alt="anotherQuestionImage"
        style={styles}
      />
      <RadioButton
        classname="bold"
        question="12. what does this regulatory sign mean"
        option1="Road ends"
        option2="No U-turn"
        option3="Left turn"
        name="twelve"
        optionDiv="option"
        ida="TwelveA"
        idb="TwelveB"
        idc="TwelveC"
        check={selectedOptions.twelve}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This sign means you cannot take a U-turn [Traffi Signs; Traffic Controls; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="13. At an unmarked crosswalk, you must"
        option1="stop and ask the pedestrians to cross quikly"
        option2="yield the right-of-way to pedestrians"
        option3="increase your speed and cross before the pedestrians"
        name="thirteen"
        optionDiv="option"
        ida="ThirteenA"
        idb="ThirteenB"
        idc="ThirteenC"
        check={selectedOptions.thirteen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "As a driver, you are required to yield the right-of-way to pedestrians within any crosswalk, whether marked or unmarked.[Pedestrians Responsibilities; Miscellaneous Licensing Information; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="14. A diamond shaped sign on a truck mean that the truck's load is ________"
        option1="military"
        option2="safe"
        option3="potentially Dangerous"
        name="fourteen"
        optionDiv="option"
        ida="fourteenA"
        idb="fourteenB"
        idc="fourteenC"
        check={selectedOptions.fourteen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A diamond-shaped sign on a truck means that the truck’s load may be  dangerous (gas, explosives etc.). [Vehicles with Hazardous Loards; Sharing the Road; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="15. If a bicycle on your right reaches an intersection at the same time as you do, you should"
        option1="move slowly along with the bicycle"
        option2="yield to the bicycle"
        option3="move because you have the right-of-way"
        name="fifteen"
        optionDiv="option"
        ida="fifteenA"
        idb="fifteenB"
        idc="fifteenC"
        check={selectedOptions.fifteen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "At intersections, yield to the vehicle or bicycles that arrives first, or to the bicycle on your right if it reaches the intersection at the same time as you do[Bicycles in travel Lanes; Sharing the Road; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="16. When you want to enter a freeway, you should"
        option1="enter the freeway at or near the speed of freeway traffic"
        option2="stop and yield to the traffic on the freeway"
        option3="stop before merging into the freeway traffic"
        name="sixteen"
        optionDiv="option"
        ida="sixteenA"
        idb="sixteenB"
        idc="sixteenC"
        check={selectedOptions.sixteen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Enter the freeway at or near the speed of the traffic. The speed limit is 65mph on most freeway, do not stop before merging into gfreeway traffic unless absolutely necessary. [Space to Merge; Merging in/out of traffic; California Driver Handbook]"
            : null
        }
      />
      <img src={endDividedHighway} alt="anotherQuestionImage" style={styles} />
      <RadioButton
        classname="bold"
        question="17. This warning sign represents"
        option1="the end of a divided highway"
        option2="the start of a two way road"
        option3="the start of a divided highway"
        name="seventeen"
        optionDiv="option"
        ida="seventeenA"
        idb="seventeenB"
        idc="seventeenC"
        check={selectedOptions.seventeen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This sign indicates the endd of a divided highway. [Traffic Signs; Traffic controls; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="18. Any person who willfully fless or attempts to evade lae enforcement performing their duties is guilty of a misdemeanor punishable by"
        option1="a maximun fine of upto $1000"
        option2="1 year of imprisonment in a county jail"
        option3="neither of the above"
        name="eighteen"
        optionDiv="option"
        ida="eighteenA"
        idb="eighteenB"
        idc="eighteenC"
        check={selectedOptions.eighteen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Any person while operatig a motor vehicle, who willfully flees or attempts to evade law enforcement performing their duties is guilty of a misdemeanor punishable by impprisonment in a county jail for not more than 1 year. [Evading Law Enforcement; Critical Roadway information; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="19. Special 'turnout' areas marked on a two-lane road ________"
        option1="allow vehicles to pass"
        option2="allow vehicles to make left turns"
        option3="allow vehicles to make U-turns"
        name="nineteen"
        optionDiv="option"
        ida="NineteenA"
        idb="NineteenB"
        idc="NineteenC"
        check={selectedOptions.nineteen}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Special 'turnout' areas are sometimes marked on two-lanes roads. Drive into these areas to allow cars behind you to pass. If you are driving slowly on a two-lane highway or road where passing is unsafe, and five or more vehicles are following you, you must drive into a turnout area to let the vehicles pass [Turnout Areas and Lanes; Lane Controls; California Driver Handbook]"
            : null
        }
      />
      <RadioButton
        classname="bold"
        question="20. While driving in fog, you should use your"
        option1="low-beam headlights."
        option2="emergency flashers"
        option3="high-beam headlights"
        name="twenty"
        optionDiv="option"
        ida="twentyA"
        idb="twentyB"
        idc="twentyC"
        check={selectedOptions.twenty}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "It is best not to drive in fog. However, if you must drive in fog, drively slowly and use your low-beam headlights. The light from high beans will tend to reflect back and cause a glare[Use your headlights; Safe Driving Practices; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="21. The broken white lines on the pavement mean that"
        option1="no passing is allowed."
        option2="passing is allowed if done safely"
        option3="traffic moves in opposite direction"
        name="twentyOne"
        optionDiv="option"
        ida="twentyOneA"
        idb="twentyOneB"
        idc="twentyOneC"
        check={selectedOptions.twentyOne}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Borken white lines indicate that passing is allowed but only when it can be done safely. [Line colors; Lane controls; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="22. if your packed car rolls away and hit another unattended vehicle, you should"
        option1="remove your car and go on your way"
        option2="sound your horn to attract attention."
        option3="report the incident to the police"
        name="twentyTwo"
        optionDiv="option"
        ida="twentyTwoA"
        idb="twentyTwoB"
        idc="twentyTwoC"
        check={selectedOptions.twentyTwo}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Try to find the owner if your vehicle hits or rolls into a parked car or other property. If you cannot find the owner, leave a note with your name, phone number, and address. Securely attach the note to the vehicle or property. Report the collision to law enforcement. [What to do if you are in a Collision; Collision; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="23. If you are in an intersection when you hear the siren of an emmergency vehicle, you should"
        option1="continue through the intersection, then move to the right and stop"
        option2="move to the right and stop in the intersection"
        option3="continue through the intersection, then move to the left and stop"
        name="twentyThree"
        optionDiv="option"
        ida="twentyThreeA"
        idb="twentyThreeB"
        idc="twentyThreeC"
        check={selectedOptions.twentyThree}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Never block an intersection even if an emmergency vehicle is approaching. If you are in an intersection when you see or hear an emmergency vehicle, continue through the intersection, them move to the right and stop[Use your headlights; Safe Driving Practices; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="24. To avoid tailgating, you should follow the"
        option1="four-second rule"
        option2="two-second-rule"
        option3="three-second-rule"
        name="twentyFour"
        optionDiv="option"
        ida="twentyFourA"
        idb="twentyFourB"
        idc="twentyFourC"
        check={selectedOptions.twentyFour}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Tailgating makes it harder for you to see the road ahead because the vehicle in front of you blocks your view. You will not have enough time to  react if the driver in front of you brakes suddenly. Use the three-second rule to ensure a safe following distance and avoid a collision [Tailgating (following too closely); Be Aware of Your Surrondings; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="25. A steady red arrow signal means"
        option1="you must stop then proceed when it is safe to do so"
        option2="you must stop and you cannot turn in the direction of the arrow"
        option3="you should prepare to stop and yield to the oncoming traffic before turning"
        name="twentyFive"
        optionDiv="option"
        ida="twentyFiveA"
        idb="twentyFiveB"
        idc="twentyFiveC"
        check={selectedOptions.twentyFive}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A red arrow means STOP. Do not turn at a red arrow. Remain stopped until a green traffic signal light or green arrow appears [Traffic Controls; Laws and Rules of the Road; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="26. If you are having Vehicle trouble and you need to stop, what is the first thing you should do?"
        option1="Safely pull over to the right shoulder and stay away from the traffic"
        option2="lift the hood to signal an emmergency"
        option3="stop your vehicle over a hill or just around a curve for visibility"
        name="twentySix"
        optionDiv="option"
        ida="twentySixA"
        idb="twentySixB"
        idc="twentySixC"
        check={selectedOptions.twentySix}
        onchange={handleOptionChange}
        description={
          showDescription
            ? " Safely pull over to the right shoulder. Exit on the right side so you are away from traffic if you must get out of the vehicle. [IF your Vehicle Becomes Disabled on the Freeway; Kown How to Handle Emmergency; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="27. In a roundabout, you must drive in"
        option1="a clockwise direction"
        option2="the direction of the oncoming vehicles"
        option3="a counterclockwise direction"
        name="twentySeven"
        optionDiv="option"
        ida="twentySevenA"
        idb="twentySevenB"
        idc="twentySevenC"
        check={selectedOptions.twentySeven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "In a roundabout, traffic travels in one direction around a central island. You must travel in a counter-clockwise direction. Do not stop or pass [Roundabouts; Right-of-Way Rules: Who Goes First?; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="28. A driver who is involved in a significant collision must report it to the DMV within"
        option1="10 days"
        option2="15 days"
        option3="20 days"
        name="twentyEight"
        optionDiv="option"
        ida="twentyEightA"
        idb="twentyEightB"
        idc="twentyEightC"
        check={selectedOptions.twentyEight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "f you are in a collision, you must report it to DMV within 10 days if the collision caused more than $1,000 in damage to property or Anyone was injured or killed. This applies even if the injuries were minor [Reporting a Collision; Collision; California Driver Handbook]"
            : null
        }
      />
      <img src={twoWayTraffic} alt="two way traffic sign" style={styles} />
      <RadioButton
        classname="bold"
        question="29. This sign means?"
        option1="A two way road"
        option2="narrow bridge ahead"
        option3="road closed"
        name="twentyNine"
        optionDiv="option"
        ida="twentyNineA"
        idb="twentyNineB"
        idc="twentyNineC"
        check={selectedOptions.twentyNine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "This is a warning sign that indicates a two way road [Traffic Signs; Traffic control; Safe Driving Practices; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="30. you can make a left turn on a red light"
        option1="only from a one-way street onto a two-way street"
        option2="only from a one-way street onto another one-way street"
        option3="only from a two-way street unto another two-way street"
        name="thirty"
        optionDiv="option"
        ida="thirtyA"
        idb="thirtyB"
        idc="thirtyC"
        check={selectedOptions.thirty}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "You may turn left against a red light when you are turning from a one-way street onto a one-way street. Make sure there is no sign prohibiting the turn. Yield to other vehicles, pedestrians, or bicyclists who have a green light. Look both ways and turn when it is safe. [Left Turns; Turns; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="31. What is the first thing you should do during an enforcement stop?"
        option1="Stop on the center median"
        option2="Turn on your right turn signal"
        option3="stop on the left shoulder"
        name="thirtyOne"
        optionDiv="option"
        ida="thirtyOneA"
        idb="thirtyOneB"
        idc="thirtyOneC"
        check={selectedOptions.thirtyOne}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Turningg on your right turn signals lets the officer know that you recognize his or her presence. Do not stop on the center meridian [What a Driver Should Do During Enforcement Stop; Special Driving Situations; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="32. At 55mph, under good conditions, your vehicle will travel about ____ feet in the time it takes you react to an object in your path and bring your vehicle to a complete stop."
        option1="200"
        option2="300"
        option3="400"
        name="thirtyTwo"
        optionDiv="option"
        ida="thirtyTwoA"
        idb="thirtyTwoB"
        idc="thirtyTwoC"
        check={selectedOptions.thirtyTwo}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "At 55mph, the average passenger can stop within 300 feet. A large vehicle traveling at the same speed can take up to 400 feet to stop. The heavier the vehicle and the faster it is moving, the longer it takes to safely stop, so a loaded truck will take longer to stop than an empty truck.[Garking; Sharing the Road; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="33. A driver in front of you is signaling with his or her hand and arm pointing upward. The driver wants to "
        option1="stop"
        option2="turn right"
        option3="turn left"
        name="thirtyThree"
        optionDiv="option"
        ida="thirtyThreeA"
        idb="thirtyThreeB"
        idc="thirtyThreeC"
        check={selectedOptions.thirtyThree}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "A driver in front of you who signals with his or her hand and arm pointing upward is about to turn right. You may use your vehicle signal lights or hand signals if the signal lights are not working or bright sunlight makes them hard to see. [Signaling; Safe Driving Practices; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="34. Two sets of solid double yellow lines spaced two or more feet apart indicate"
        option1="a barrier"
        option2="a parking lot"
        option3="two-way traffic"
        name="thirtyFour"
        optionDiv="option"
        ida="thirtyFourA"
        idb="thirtyFourB"
        idc="thirtyFourC"
        check={selectedOptions.thirtyFour}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Two sets of solid double yellow lines spaced two or more feet apart are considered a barrier. Do not drive on or over this barrier or make a left turn or U-turn across it, except at designated openings.[Lane Markings; Traffic Lanes; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="35. You must turn on your headlights _______ after sunset."
        option1="30 minutes"
        option2="20 minutes"
        option3="immediately"
        name="thirtyFive"
        optionDiv="option"
        ida="thirtyFiveA"
        idb="thirtyFiveB"
        idc="thirtyFiveC"
        check={selectedOptions.thirtyFive}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "You must turn on your headlights When it is too dark to see from 1,000 feet away, beginning 30 minutes after sunset and until 30 minutes before sunrise [Using Your Headlights; Signals, Horns and Headlights; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="36. A double solid white line"
        option1="separates two lanes traveling in the same direction, but crossing the line is prohibited"
        option2="separates two lanes traveling in the same direction, but crossing the line is permitted"
        option3="separates opposing lanes traveling in the same direction, but crossing the line is permitted"
        name="thirtySix"
        optionDiv="option"
        ida="thirtySixA"
        idb="thirtySixB"
        idc="thirtySixC"
        check={selectedOptions.thirtySix}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Double solid white lines indicate a lane barrier between a regular use and a preferential use lane, such as a carpool (HOV) lane. You may also see double solid white lines in or near freeway on and off ramps. Never change lanes over double solid white lines. Wait until you see a single broken white line. [Lane Markings; Traffic Lanes; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="37. On a two-lane undivided highway, the maximum speed limit for vehicles towing trailers is _____"
        option1="55 mph"
        option2="60 mph"
        option3="65 mph"
        name="thirtySeven"
        optionDiv="option"
        ida="thirtySevenA"
        idb="thirtySevenB"
        idc="thirtySevenC"
        check={selectedOptions.thirtySeven}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "On two-lane undivided highways, the maximum speed limit for vehicles towing trailers is 55mph unless otherwise posted. [Manage your Speed; California Driver Handbook]"
            : null
        }
      />

      <img
        src="https://www.dmv.ca.gov/portal/uploads/2020/02/schoolzone.png"
        alt="schoolzone"
        style={styles}
      />
      <RadioButton
        classname="bold"
        question="38. This sign represent"
        option1="a play ground"
        option2="a pedestrian cross walk"
        option3="a school zone"
        name="thirtyEight"
        optionDiv="option"
        ida="thirtyEightA"
        idb="thirtyEightB"
        idc="thirtyEightC"
        check={selectedOptions.thirtyEight}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "5-sided Sign represent you are near a school drive slowly and stop for children in the crosswalk. [Signs; Pedestran Signs or Signals; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="39. A ___ painted curb is designated for disabled persons who display their placards"
        option1="green"
        option2="blue"
        option3="white"
        name="thirtyNine"
        optionDiv="option"
        ida="thirtyNineA"
        idb="thirtyNineB"
        idc="thirtyNineC"
        check={selectedOptions.thirtyNine}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "Blue painted curb indicates that Parking is permitted only for a disabled person or someone driving a disabled person with a special placard or special license plate [Parking at Colored Pubs; California Driver Handbook]"
            : null
        }
      />

      <RadioButton
        classname="bold"
        question="40. When two vehicles meet on a steep mountain road where neither can pass, which vehicle has the right-of-way?"
        option1="The vehicle traveling uphill"
        option2="The vehicle traveling downhill"
        option3="both vehicles"
        name="fourty"
        optionDiv="option"
        ida="fourtyA"
        idb="fourtyB"
        idc="fourtyC"
        check={selectedOptions.fourty}
        onchange={handleOptionChange}
        description={
          showDescription
            ? "If two vehicles meet on a steep narrow road and neither vehicle can pass, the vehicle facing uphill has the right-of-way. The vehicle facing downhill has more control when backing up the hill. The vehicle facing downhill should back up until the vehicle going uphill can pass.[Mountain Roads; California Driver Handbook]"
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
