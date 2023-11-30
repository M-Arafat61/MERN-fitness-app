import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen'>
        {/* <img src={errorImage} alt='' /> */}
      </div>
    </div>
  );
};

export default ErrorPage;
