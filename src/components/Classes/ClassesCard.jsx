import { Link } from "react-router-dom";

const ClassesCard = ({ eachClass }) => {
  const { title, location, description, difficulty, instructor, email } =
    eachClass || {};

  return (
    <div className='mx-auto bg-white shadow-md   rounded-lg overflow-hidden'>
      <div className='md:flex'>
        <div className='p-8 space-y-2'>
          <div className='uppercase tracking-wide text-sm text-extended-teal font-semibold'>
            {difficulty}
          </div>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <p className='text-gray-500'>{description}</p>
          <p className='text-black font-semibold'>
            <span className=''>Trainer</span>-{instructor}
          </p>
          <p className='text-gray-500'>{location}</p>
          <p className='text-gray-500'>{email}</p>
          <div className='mt-4'>
            <Link to='/trainer'>
              <button className='bg-extended-teal hover:bg-emerald-400 text-white font-semibold py-2 px-4 rounded'>
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
