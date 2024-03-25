import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
export const useTimer = (
  initialTime = Number,
  nextPhase = () => null,
  interval = 1000
) => {
  const { userId } = useAuth();
  const [duration, setDuration] = useState(initialTime); // Duration state
  const [isActive, setIsActive] = useState(true); // isActive state

  useEffect(() => {
    const getRequest = async () => {
      try {
        const response = await axios.get(
          `https://bakkers-driving-school.onrender.com/api/time/${userId}`
        );
        setDuration(response.data.currentTime.startingtime);
      } catch (error) {
        console.log(error);
      }
    };
    getRequest();
  }, [userId]);

  const putRequest = async () => {
    try {
      await axios.put(
        `https://bakkers-driving-school.onrender.com/api/time/${userId}`,
        { time: duration }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleVisibilityChange = () => {
    if (
      document.visibilityState === "visible" &&
      navigator.onLine &&
      duration > 0
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
      putRequest();
    }
  };

  useEffect(() => {
    const counting = setInterval(() => {
      if (duration > 0 && document.visibilityState === "visible" && isActive) {
        setDuration((prev) => prev - interval);
      } else {
        clearInterval(counting);
        nextPhase();
        putRequest();
      }
    }, interval);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(counting);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isActive, nextPhase, duration]);

  return duration;
};
