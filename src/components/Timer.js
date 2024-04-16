import "../App.css";
import { useTimer } from "../hooks/useTimer";

export default function TimerHandler() {
  const duration = useTimer(108000000);

  const hours = Math.floor(
    (duration % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);
  return (
    <>
      <h3 className="timer">
        {hours < 10 ? "0" + hours : hours}:{" "}
        {minutes < 10 ? "0" + minutes : minutes}:{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h3>
    </>
  );
}
