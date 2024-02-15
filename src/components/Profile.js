import { useEffect, useState } from "react";
import ProfileSkeleton from "../Assets/Skeleton";
import { NavButtons } from "../Assets/next";
import "../styles/dashboard.css";

function Profile() {
  const initialTime = "30 : 00 : 00";
  // const [userProfile, setUserProfile] = useState([]); // where the user data is stored on the database
  const userProfile = {
    firstname: "Timilehin",
    lastname: "Olayuwa",
    email: "timilehin@gmail.com",
    address: "2, temidara Street new Ilula Quaters Akure",
    state: "Ondo",
    city: "Akure",
    zip: "123234",
    birthDay: "18/01/1999",
  };
  const spentTime =
    parseInt(localStorage.getItem("lastTime"), 10) || initialTime;
  /*  useEffect(() => {
    fetch("https:www.examples.com")
      .then((response) => response.json())
      .then((data) => setUserProfile(data))
      .catch((errors) => console.log(errors));
  }, []);
*/ // effect to fetch user data from the database
  const handleProceed = () => {
    window.location.replace("/instruction");
  };
  const Proceed = () => {
    return (
      <NavButtons onclick={handleProceed} classname="proceed">
        Proceed to Course
      </NavButtons>
    );
  };
  const hours = Math.floor(
    (spentTime % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((spentTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((spentTime % (1000 * 60)) / 1000);
    console.log(spentTime)
  return (
    <div className="Profile-details">
      <div className="timeLeft-Container">
        <h3 className="timer">
          {" "}
          <span>Final Quiz in : </span>
          {spentTime === initialTime ? initialTime : (<span>
            {hours < 10 ? "0" + hours : hours}:{" "}
            {minutes < 10 ? "0" + minutes : minutes}:{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </span>)}
        </h3>
      </div>
      {Object.keys(userProfile).length > 0 ? (
        <div>
          <div className="names">
            <div className="profileImage">
              {userProfile.firstname[0]}
              {userProfile.lastname[0]}
            </div>
            <div className="userName">
              <p>
                {userProfile.firstname}
                {userProfile.middlename ? (
                  <span>{userProfile.middlename}</span>
                ) : null}
                <span> {userProfile.lastname}</span>
              </p>
            </div>{" "}
            <Proceed />
          </div>
          <div className="contact-details">
            <p className="contact">Address: {userProfile.address}</p>
            <p className="contact">Email: {userProfile.email}</p>
            <p className="contact">Birthday: {userProfile.birthDay}</p>
            <p className="contact">City: {userProfile.city}</p>
            <p className="contact">State: {userProfile.state}</p>
            <p className="contact">Zip: {userProfile.zip}</p>
          </div>
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </div>
  );
}

export default Profile;
