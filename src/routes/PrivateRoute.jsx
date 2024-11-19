import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log("User in private route:", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoute;
