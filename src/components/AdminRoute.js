import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminRoute = ({ element }) => {
  const { accessToken } = useAuth();

  return accessToken ? element : <Navigate to="/adminsignin" replace />;
};

export default AdminRoute;
