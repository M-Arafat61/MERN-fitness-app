import { useRouteError } from "react-router-dom";
import errorImage from "../../assets/Images/error.jpg";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen'>
        <img src={errorImage} alt='' />
      </div>
    </div>
  );
};

export default ErrorPage;
