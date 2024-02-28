export default function ChapterNine() {
  const sections = {
    sectionOne: "As a Pedestrian",
    sectionTwo: "As a Driver",
    sectionThree: "Avoidinng Collisions with Animals",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">Unit Nine: Pedestrian Safety</h3>
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
