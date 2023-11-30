import { Link } from "react-router-dom";

const ButtonOutline = ({ buttonText }) => {
  return (
    <div>
      <Link to='/classes'>
        <button className='relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-cyan-500 group-hover:from-teal-500 group-hover:to-extended-teal hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-teal-800'>
          <span className='relative md:px-10 md:py-3 md:text-lg  uppercase font-bold tracking-wide transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md bg-transparent group-hover:bg-opacity-0'>
            {buttonText}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ButtonOutline;
