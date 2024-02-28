export default function ChapterSix() {
  const sections = {
    sectionOne: "Faulty Driver Performance",
    sectionTwo: "Accident Avoidance and Prevention",
    sectionThree: "Prcedures when Involved in an Accident",
    sectionFour: "Financial Responsibility Requirements",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Six: Causes and Costs of Accidents
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
          <div className="courseContents"></div>
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
