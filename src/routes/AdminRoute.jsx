import { CircleLoader } from "react-spinners";

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <CircleLoader color='#a85232' size={100} />;
      </div>
    );
  if (user && isAdmin) return children;
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
