import { Link } from "react-router-dom";

const ClassesCard = ({ eachClass }) => {
  const { title, difficulty, instructor, _id } = eachClass || {};
  console.log(eachClass);
  return (
    // <div className='mx-auto bg-white shadow-md   rounded-lg overflow-hidden '>
    <div className='p-8 flex justify-between flex-col shadow-md rounded-lg mx-auto space-y-2  w-full'>
      <div className='uppercase tracking-wide text-sm text-extended-teal font-semibold'>
        {difficulty}
      </div>
      <h2 className='text-lg font-semibold'>Title-{title}</h2>
      <h2 className='text-lg font-semibold'>Instructor-{instructor}</h2>

      <Link to={`/class-details/${_id}`}>
        <button className='bg-extended-teal hover:bg-emerald-400 text-white font-semibold py-2 px-4 rounded'>
          Details
        </button>
      </Link>
    </div>
  );
};

export default ClassesCard;
