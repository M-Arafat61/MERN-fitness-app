import { Navigate, useLocation } from "react-router-dom";

import GridLoader from "react-spinners/GridLoader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <GridLoader color='#96EFFF' size={30} />;
      </div>
    );
  if (user) return children;
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
