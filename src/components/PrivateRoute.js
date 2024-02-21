import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ element }) => {
  const { accessToken } = useAuth();

  return accessToken ? element : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
