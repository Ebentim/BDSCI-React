export default function ChapterTen() {
  const sections = {
    sectionOne: "Drugs",
    sectionThree: "Avoiding Driving while Intoxicated",
    sectionFour: "Avoiding the Intoxicated Driver",
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
          <div className="courseContents"></div>
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
