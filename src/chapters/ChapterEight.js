export default function ChapterEight() {
  const sections = {
    sectionOne: "Construction of the Automobile",
    sectionTwo: "Safety Equipment",
    sectionThree: "Maintenance of the Automobile",
    sectionFour: "Economic and Safe Use of Automobile",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Eight: Critical Vehicle Systems and Subsystems
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
