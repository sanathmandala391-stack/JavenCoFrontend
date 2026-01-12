import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = true; // replace with real auth logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
