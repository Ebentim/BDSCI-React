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
import FinalQuiz from "../quizes/FinalQuiz";
import { useTimer } from "../hooks/useTimer";
import "../styles/general.css";
import Timer from "../components/Timer";
import { NavButtons } from "../Assets/next";
import { useReducer, useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";
const reducer = (value, action) => {
  switch (action.type) {
    case "next":
      return ++value;
    case "prev":
      return --value;
    default:
      console.log(value);
  }
};
export default function CourseBod() {
  const duration = useTimer(108000000);
  const { scoreFromDb } = useQuiz();
  const [chapter, dispatch] = useReducer(reducer, 1);
  const [disableNextButton, setDisableNextButton] = useState(false); // This is meant to disable the next chapter, if the student doesn't scale the current chapter's quiz by at least 80%

  const handleNext = () => {
    if (chapter < 15 || (chapter === 15 && duration <= 0 && chapter < 17)) {
      dispatch({ type: "next" });
    } else if (chapter === 15 && duration > 0) {
      setDisableNextButton(true);
    }
  };

  const handPrev = () => {
    if (chapter > 1) {
      dispatch({ type: "prev" });
    }
  };

  useEffect(() => {
    const handleDisableButton = () => {
      switch (chapter) {
        case 1:
          if (scoreFromDb.chapterone < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 2:
          if (scoreFromDb.chaptertwo < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 3:
          if (scoreFromDb.chapterthree < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 4:
          if (scoreFromDb.chapterfour < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 5:
          if (scoreFromDb.chapterfive < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 6:
          if (scoreFromDb.chaptersix < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 7:
          if (scoreFromDb.chapterseven < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 8:
          if (scoreFromDb.chaptereight < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 9:
          if (scoreFromDb.chapternine < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 10:
          if (scoreFromDb.chapterten < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 11:
          if (scoreFromDb.chaptereleven < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 12:
          if (scoreFromDb.chaptertwelve < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 13:
          if (scoreFromDb.chapterthirteen < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 14:
          if (scoreFromDb.chapterfourteen < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        case 15:
          if (scoreFromDb.chapterfifteen < 8) {
            setDisableNextButton(true);
          } else {
            setDisableNextButton(false);
          }
          break;
        default:
          setDisableNextButton(false);
      }
    };
    handleDisableButton();
  }, [
    chapter,
    disableNextButton,
    scoreFromDb.chaptereight,
    scoreFromDb.chaptereleven,
    scoreFromDb.chapterfifteen,
    scoreFromDb.chapterfive,
    scoreFromDb.chapterfour,
    scoreFromDb.chapterfourteen,
    scoreFromDb.chapternine,
    scoreFromDb.chapterone,
    scoreFromDb.chapterseven,
    scoreFromDb.chaptersix,
    scoreFromDb.chapterten,
    scoreFromDb.chapterthirteen,
    scoreFromDb.chapterthree,
    scoreFromDb.chaptertwelve,
    scoreFromDb.chaptertwo,
  ]);

  const NextChapter = () => {
    return (
      <NavButtons
        onclick={handleNext}
        classname="nextButton"
        disable={disableNextButton}
      >
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
        Go back
        {/*to{" "}
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
          : chapter === 2 */}
      </NavButtons>
    );
  };

  return (
    <main>
      <div id="courseBody">
        <div className="TimerContainer">
          <Timer />
        </div>
        {chapter === 1 ? (
          <div className="ToChapterTwo">
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
        ) : (
          <FinalQuiz />
        )}
      </div>
    </main>
  );
}
