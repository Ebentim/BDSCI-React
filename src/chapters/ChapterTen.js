import { useState } from "react";
import { NavButtons } from "../Assets/next";
export default function ChapterTen() {
  const [content, setContent] = useState(false);
  const sections = {
    sectionOne: "Drugs",
    sectionThree: "Avoiding Driving while Intoxicated",
    sectionFour: "Avoiding the Intoxicated Driver",
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
      <h3 className="bold unitHeading">
        Unit Ten: Effects of Alcohol and Drugs
      </h3>
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
