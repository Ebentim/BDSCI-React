/* import { useEffect, useState } from "react";

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
*/
/*
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

export const useTimer = (
  initialTime = Number,
  nextPhase = () => null,
  interval = 1000
) => {
  const [duration, setDuration] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const { accessToken, userId } = useAuth();

  useEffect(() => {
    const fetchTimeFromDatabase = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/time/${userId}`,
          {
            headers: {
              Authorization: accessToken, // Include access token in the headers
            },
          }
        );
        const { time } = response.data;
        console.log(response, " from the useTimer Hook");
        if (time !== undefined) {
          // Update local storage with time from database if not present
          const localTime = parseInt(localStorage.getItem("lastTime"), 10);
          if (!localTime) {
            setDuration(time);
            localStorage.setItem("lastTime", time);
          } else {
            // Compare local storage time with database time
            if (localTime < time) {
              // Update database with local storage time
              await axios.put(
                `http://localhost:5000/api/time/${userId}`,
                {
                  time: localTime,
                },
                {
                  headers: {
                    Authorization: accessToken, // Include access token in the headers
                  },
                }
              );
              console.log(time, " from put request");
            } else {
              // Update local storage with database time
              setDuration(time);
              localStorage.setItem("lastTime", time);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTimeFromDatabase();

    const counting = setInterval(() => {
      if (duration > 0 && document.visibilityState === "visible" && isActive) {
        setDuration((prev) => prev - interval);
      } else {
        clearInterval(counting);
        nextPhase(); // Call the nextPhase function when the duration reaches zero
      }
    }, interval);

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
        console.log(duration);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(counting);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [userId, isActive]); // Make sure to include userId in dependency array

  return duration;
};
*/
/*
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const useTimer = (
  initialTime = Number,
  nextPhase = () => null,
  interval = 1000
) => {
  const [duration, setDuration] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const { accessToken, userId } = useAuth();

  useEffect(() => {
    const fetchTimeFromDatabase = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/time/${userId}`,
          {
            headers: {
              Authorization: accessToken, // Include access token in the headers
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch time");
        }

        const data = await response.json();
        const { time } = data;
        console.log(data, " from the useTimer Hook");

        if (time !== undefined) {
          // Update local storage with time from database if not present
          const localTime = parseInt(localStorage.getItem("lastTime"), 10);
          if (!localTime) {
            setDuration(time);
            localStorage.setItem("lastTime", time);
          } else {
            // Compare local storage time with database time
            if (localTime < time) {
              // Update database with local storage time
              await fetch(`http://localhost:5000/api/time/${userId}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: accessToken, // Include access token in the headers
                },
                body: JSON.stringify({ time: localTime }),
              });
              console.log(userId, "the user ID");
            } else {
              // Update local storage with database time
              setDuration(time);
              localStorage.setItem("lastTime", time);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTimeFromDatabase();

    const counting = setInterval(() => {
      if (duration > 0 && document.visibilityState === "visible" && isActive) {
        setDuration((prev) => prev - interval);
      } else {
        clearInterval(counting);
        nextPhase(); // Call the nextPhase function when the duration reaches zero
      }
    }, interval);

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
        console.log(duration);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(counting);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [userId, isActive]); // Make sure to include userId in dependency array

  return duration;
};
*/

import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
export const useTimer = (
  initialTimeFromServer = 108000000, // Set default starting time
  nextPhase = () => null,
  interval = 1000
) => {
  const { userId } = useAuth();
  const [initialTime, setInitialTime] = useState(initialTimeFromServer);
  const [duration, setDuration] = useState(initialTime);
  const [isActive, setIsActive] = useState(true); // Set initial isActive state to true
  // Function to fetch initial time from the API
  const fetchInitialTime = async (userId) => {
    try {
      const response = await fetch(`/api/time/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setInitialTime(data.initialTime);
        setDuration(data.initialTime);
        console.log(data);
      } else {
        console.error("Failed to fetch initial time:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching initial time:", error);
    }
  };

  useEffect(() => {
    // Fetch initial time when component mounts
    fetchInitialTime(userId); // Replace "USER_ID" with actual user ID

    const counting = setInterval(() => {
      if (duration > 0 && isActive) {
        setDuration((prev) => prev - interval);
      } else {
        clearInterval(counting);
        nextPhase(); // Call the nextPhase function when the duration reaches zero
      }
    }, interval);

    return () => clearInterval(counting);
  }, [isActive, userId]);

  // Function to save last time to the API
  const saveLastTime = async (lastTime) => {
    try {
      await fetch(`/api/time/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lastTime }),
      });
    } catch (error) {
      console.error("Error saving last time:", error);
    }
  };

  // Handle visibility change to save last time when the user switches screens
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && duration > 0) {
        setIsActive(false);
        saveLastTime(duration); // Save last time when visibility changes
      } else if (document.visibilityState === "visible" && duration <= 0) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isActive]);

  return duration;
};
