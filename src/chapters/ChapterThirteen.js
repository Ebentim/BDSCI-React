export default function ChapterEight() {
  const sections = {
    sectionOne: "Illegal for Those Under 21 to Posess or use Alcohol",
    sectionTwo: "Statics",
    sectionThree: "Cycle of Abuse",
    sectionFour: "Drug Actions Within the Body",
    sectionFive: "Availability of Drugs",
    sectionSix: "Legalities",
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
          <div className="courseContents"></div>
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
