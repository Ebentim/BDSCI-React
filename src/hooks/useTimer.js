import { useEffect, useState } from "react";

export const useTimer = (
  initialTime = Number,
  nextPhase = () => null,
  interval = 1000
) => {
  const presentDuration =
    parseInt(localStorage.getItem("lastTime"), 10) || initialTime;
  const activity = localStorage.getItem("isActive") ?? false;
  const [duration, setDuration] = useState(presentDuration);
  const [isActive, setIsActive] = useState(activity);

  const handleVisibilityChange = () => {
    if (
      document.visibilityState === "visible" &&
      navigator.onLine &&
      duration > 0
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
      localStorage.setItem("lastTime", duration);
      localStorage.setItem("isActive", isActive);
      console.log(duration);
    }
  };

  useEffect(() => {
    const counting = setInterval(() => {
      if (duration > 0 && document.visibilityState === "visible" && isActive) {
        setDuration((prev) => prev - interval);
      } else {
        clearInterval(counting);
        nextPhase(); // Call the nextPhase function when the duration reaches zero
      }
    }, interval);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(counting);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isActive, duration, interval, nextPhase]);

  return duration;
};
