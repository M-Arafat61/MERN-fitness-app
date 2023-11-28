import { Link, useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

const ClassDetails = () => {
  const classData = useLoaderData();
  const {
    daysArray,
    description,
    difficulty,
    email,
    equipmentArray,
    instructor,
    location,
    photo,
    title,
  } = classData?.data || {};
  console.log(classData.data);
  return (
    <Container>
      <div className='mx-auto px-2 space-y-2 mt-10'>
        <h2 className='text-3xl font-bold mb-2'>{title}</h2>
        <div className='uppercase tracking-wide text-sm text-extended-teal font-semibold bg-gray-200 px-2 py-1 inline'>
          {difficulty}
        </div>
        <p className='font-semibold'>{location}</p>
        <div className='mx-auto'>
          <img className='w-full object-cover h-[650px]' src={photo} alt='' />
        </div>
        <p className='text-lg py-5'>{description}</p>

        <div className='border border-extended-teal flex justify-between items-center gap-5 p-10 text-lg rounded-lg overflow-hidden'>
          <div>
            <p>
              <span className='font-bold '>Instructor</span> {instructor}
            </p>
            <p>
              <span className='font-bold '>Gmail</span> {email}
            </p>
          </div>
          <div>
            <p className='font-bold underline'>Class days in a week</p>
            {daysArray.map((day, idx) => (
              <div className='flex gap-2' key={idx}>
                <p>{idx + 1}.</p>
                <p>{day}</p>
              </div>
            ))}
          </div>
          <div>
            <p className='font-bold underline'> Equipments</p>
            {equipmentArray.map((each, idx) => (
              <div className='flex gap-2' key={idx}>
                <p>{idx + 1}.</p>
                <p key={idx}>{each}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <Link to='/trainer'>
            <button className='bg-extended-teal hover:bg-emerald-400 text-white font-semibold py-2 px-6 text-lg rounded uppercase'>
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ClassDetails;
