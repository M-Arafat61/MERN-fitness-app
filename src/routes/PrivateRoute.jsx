import { Navigate, useLocation } from "react-router-dom";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <ClimbingBoxLoader color='#a85232' size={100} />;
      </div>
    );
  if (user) return children;
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
