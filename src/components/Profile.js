import { useEffect, useState } from "react";
import ProfileSkeleton from "../Assets/Skeleton";
function Profile() {
    const [userProfile, setUserProfile] = useState([])
    // const userProfile = {
    //   firstname: "Timilehin",
    //   lastname: "Olayuwa",
    //   email: "timilehin@gmail.com",
    //   address: "2, temidara Street new Ilula Quaters Akure",
    //   state: "Ondo",
    //   city: "Akure",
    //   zip: "123234",
    //   birthDay: "18/01/1999",
    // };
       
    useEffect(() => {
        fetch("https:www.examples.com").then(response => response.json()).then(data => setUserProfile(data)).catch(errors => console.log(errors))
    }, [])
    return (
        <div className="Profile-details">
            {Object.keys(userProfile).length > 0 ? (
                <div>
                    <div className="profileImage">{userProfile.firstname[0]}{userProfile.lastname[0]}</div>
                    <p>First name: {userProfile.firstname}</p>
                    {userProfile.middlename ? (<p>Middle name: {userProfile.middlename}</p>): null}
                    <p>Last name: {userProfile.lastname}</p>
                    <p>Address: {userProfile.address}</p>
                    <p>Email: {userProfile.email}</p>
                    <p>Birthday: {userProfile.birthDay}</p>
                    <p>City: {userProfile.city}</p>
                    <p>State: {userProfile.state}</p>
                    <p>Zip: {userProfile.zip}</p>
                </div>
            ) : (<ProfileSkeleton/>)}
        </div>
    )
}

export default Profile