import { useState } from "react";
import { NavButtons } from "../Assets/next";
export default function ChapterEight() {
  const [content, setContent] = useState(false);
  const sections = {
    sectionOne: "Illegal for Those Under 21 to Posess or use Alcohol",
    sectionTwo: "Statics",
    sectionThree: "Cycle of Abuse",
    sectionFour: "Drug Actions Within the Body",
    sectionFive: "Availability of Drugs",
    sectionSix: "Legalities",
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
      <h3 className="bold unitHeading">Unit Thirteen: Substance Abuse</h3>
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
