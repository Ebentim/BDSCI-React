import { useEffect, useState } from "react";
import ProfileSkeleton from "../Assets/Skeleton";
import { NavButtons } from "../Assets/next";
import { useAuth } from "../contexts/AuthContext";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

function Profile() {
  const { accessToken } = useAuth();
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bakkers-driving-school.onrender.com/api/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: accessToken,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserProfile(data.user);
          console.log(data.user);
        } else {
          console.error("Failed to fetch user details");
          // Handle specific error cases if needed
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        // Handle other types of errors if needed
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]); // Only run the effect when accessToken changes

  const ProceedButton = () => {
    return (
      <Link to="/instruction">
        <NavButtons classname="proceed">Proceed to Course</NavButtons>
      </Link>
    );
  };

  const hours = Math.floor(
    (userProfile.startingtime % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (userProfile.startingtime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((userProfile.startingtime % (1000 * 60)) / 1000);

  return (
    <div className="Profile-details">
      {Object.keys(userProfile).length > 0 ? (
        <>
          <div className="timeLeft-Container">
            <h3 className="timer">
              {" "}
              <span>Final Quiz in : </span>
              <span>
                {hours < 10 ? "0" + hours : hours}:{" "}
                {minutes < 10 ? "0" + minutes : minutes}:{" "}
                {seconds < 10 ? "0" + seconds : seconds}
              </span>
            </h3>
          </div>
          <div className="details-container">
            <div className="names">
              <div className="profileImage">
                {userProfile.firstname[0]}
                {userProfile.lastname[0]}
              </div>
              <div className="userName">
                <p>
                  {userProfile.firstname} {userProfile.lastname}
                </p>
              </div>{" "}
              <ProceedButton />
            </div>
            <div className="contact-details">
              <p className="contact">Address: {userProfile.address}</p>
              <p className="contact">Email: {userProfile.email}</p>
              <p className="contact">Birthday: {userProfile.birthdate}</p>
              <p className="contact">State: California</p>
            </div>
          </div>
        </>
      ) : (
        <ProfileSkeleton />
      )}
    </div>
  );
}

export default Profile;
