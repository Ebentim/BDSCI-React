import { useState } from "react";
import { NavButtons } from "../Assets/next";
export default function ChapterEight() {
  const [content, setContent] = useState(false);
  const sections = {
    sectionOne: "Sharing the Road with Motorcycles",
    sectionTwo: "Riding a Motorcycle",
    sectionThree: "Riding as a Passenger on a Motorbike",
  };

  const handleClick = () => (content ? setContent(false) : setContent(true));

  const NextButton = () => {
    return (
      <NavButtons onclick={handleClick} classname="nextButton">
        {!content ? "continue to Lesson" : "Understand Purpose"}
      </NavButtons>
    );
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">Unit Eleven: Motorcycle Safety</h3>
      <div className="courseContentContainer">
        <div className="courseOutline">
          <ul className="sectionList">
            {Object.entries(sections).map(([key, value]) => (
              <li key={key}>
                <a href={`#${key}`}>{value}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {!content ? (
            <p className="purpose">
              <span className="bold">Purpose:</span> Replace with the purpose of
              the section
            </p>
          ) : (
            <div className="courseContents"></div>
          )}
          <NextButton />
        </div>
      </div>
    </div>
  );
}
