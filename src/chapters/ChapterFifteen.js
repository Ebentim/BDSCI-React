export default function ChapterEight() {
  const sections = {
    sectionOne: "Anger Management",
    sectionTwo: "Statistics",
  };

  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">Unit Fifteen: Road Rage</h3>
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
