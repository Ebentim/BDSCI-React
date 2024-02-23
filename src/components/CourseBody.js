import ChapterOne from "../chapters/ChapterOne";
import ChapterTwo from "../chapters/ChapterTwo";
import ChapterThree from "../chapters/ChapterThree";
import ChapterFour from "../chapters/ChapterFour";
import ChapterFive from "../chapters/ChapterFive";
import ChapterSix from "../chapters/ChapterSix";
import ChapterSeven from "../chapters/ChapterSeven";
import ChapterEight from "../chapters/ChapterEight";
import ChapterNine from "../chapters/ChapterNine";
import ChapterTen from "../chapters/ChapterTen";
import ChapterEleven from "../chapters/ChapterEleven";
import ChapterTwelve from "../chapters/ChapterTwelve";
import ChapterThirteen from "../chapters/ChapterThirteen";
import ChapterFourteen from "../chapters/ChapterFourteen";
import ChapterFifteen from "../chapters/ChapterFifteen";
import PrivateRoute from "./PrivateRoute";
import "../styles/general.css";
import Timer from "../components/Timer";
import { NavButtons } from "../Assets/next";
import { useReducer, useState } from "react";
const reducer = (value, action) => {
  switch (action.type) {
    case "plus":
      return ++value;
      break;
    case "minus":
      return --value;
  }
};
export default function CourseBod() {
  const startChapter = 1;
  const [chapter, setChapter] = useReducer(reducer, startChapter);
  const [disableNextButton, setDisableNextButton] = useState(true); // This is meant to disable the next chapter, if the student doesn't scale the current chapter's quiz by at least 80%

  const handleNext = () => {
    if (
      chapter < 15 ||
      (chapter === 15 && localStorage.getItem("lastTime") === 0 && chapter < 17)
    ) {
      setChapter({ type: "plus" });
    }
    console.log(chapter);
  };

  const handPrev = () => {
    if (chapter > 1) {
      setChapter({ type: "minus" });
    } // Activated Chapter only
    console.log(chapter);
  };

  const NextChapter = () => {
    return (
      <NavButtons
        onclick={handleNext}
        classname="nextButton"
        // disable={disableNextsButton}
      >
        To{" "}
        {chapter === 1
          ? "Unit Two"
          : chapter === 2
          ? "Unit Three"
          : chapter === 3
          ? "Unit Four"
          : chapter === 4
          ? "Unit Five"
          : chapter === 5
          ? "Unit Six"
          : chapter === 6
          ? "Unit Seven"
          : chapter === 7
          ? "Unit Eight"
          : chapter === 8
          ? "Unit Nine"
          : chapter === 9
          ? "Unit Ten"
          : chapter === 10
          ? "Unit Eleven"
          : chapter === 11
          ? "Unit Twelve"
          : chapter === 12
          ? "Unit Thirteen"
          : chapter === 13
          ? "Unit Fourteen"
          : chapter === 14
          ? "Unit Fifteen"
          : "Final Quiz"}
      </NavButtons>
    );
  };

  const PreviousChapter = () => {
    return (
      <NavButtons onclick={handPrev} classname="nextButton">
        Go back to{" "}
        {chapter === 16
          ? "Unit Fifteen"
          : chapter === 15
          ? "Unit Fourteen"
          : chapter === 14
          ? "Unit Thirteen"
          : chapter === 13
          ? "Unit Twelve"
          : chapter === 12
          ? "Unit Eleven"
          : chapter === 11
          ? "Unit Ten"
          : chapter === 10
          ? "Unit Nine"
          : chapter === 9
          ? "Unit Eight"
          : chapter === 8
          ? "Unit Seven"
          : chapter === 7
          ? "Unit Six"
          : chapter === 6
          ? "Unit Five"
          : chapter === 5
          ? "Unit Four"
          : chapter === 4
          ? "Unit Three"
          : chapter === 3
          ? "Unit Two"
          : chapter === 2
          ? "Unit 1"
          : "Hi"}
      </NavButtons>
    );
  };

  return (
    <div>
      <div className="TimerContainer">
        <Timer />
      </div>
      {chapter === 1 ? (
        <div className="NextButtonContainer">
          <NextChapter />
        </div>
      ) : (
        <div className="nextButtonContainer">
          <PreviousChapter /> <NextChapter />
        </div>
      )}
      {chapter === 1 ? (
        <ChapterOne />
      ) : chapter === 2 ? (
        <ChapterTwo />
      ) : chapter === 3 ? (
        <ChapterThree />
      ) : chapter === 4 ? (
        <ChapterFour />
      ) : chapter === 5 ? (
        <ChapterFive />
      ) : chapter === 6 ? (
        <ChapterSix />
      ) : chapter === 7 ? (
        <ChapterSeven />
      ) : chapter === 8 ? (
        <ChapterEight />
      ) : chapter === 9 ? (
        <ChapterNine />
      ) : chapter === 10 ? (
        <ChapterTen />
      ) : chapter === 11 ? (
        <ChapterEleven />
      ) : chapter === 12 ? (
        <ChapterTwelve />
      ) : chapter === 13 ? (
        <ChapterThirteen />
      ) : chapter === 14 ? (
        <ChapterFourteen />
      ) : chapter === 15 ? (
        <ChapterFifteen />
      ) : null}
    </div>
  );
}
