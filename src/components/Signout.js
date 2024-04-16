import { NavButtons } from "../Assets/next";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    navigate("/");
  };
  const SignOut = () => {
    return (
      <NavButtons classname="sign-out" onclick={handleSignout}>
        Sign out
      </NavButtons>
    );
  };
  return <SignOut />;
};

export default Signout;
