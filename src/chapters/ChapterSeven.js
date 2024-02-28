export default function ChapterSeven() {
  const sections = {
    sectionOne: "Urban Driving",
    sectionTwo: "Freeway Driving",
    sectionThree: "Driving on Open Highway",
    sectionFour: "Passing",
    sectionFive: "Hazardous Conditions",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Seven: Differences in Urban and Rural Driving
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
