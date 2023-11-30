import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { CircleLoader } from "react-spinners";
import useTrainer from "../hooks/useTrainer";

const TrainerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isTrainer, isTrainerLoading] = useTrainer();
  const location = useLocation();

  if (loading || isTrainerLoading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <CircleLoader color='#818FB4' size={30} />;
      </div>
    );
  if (user && isTrainer) return children;
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default TrainerRoute;
