export default function ChapterEight() {
  const sections = {
    sectionOne: "Sharing the Road with Motorcycles",
    sectionTwo: "Riding a Motorcycle",
    sectionThree: "Riding as a Passenger on a Motorbike",
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
          <div className="courseContents"></div>
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
