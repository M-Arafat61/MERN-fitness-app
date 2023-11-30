import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const RecommendedClasses = () => {
  const [classes, setClasses] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get("/classes");
        setClasses(response.data);
      } catch (error) {
        // Handle error if necessary
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, [axiosSecure]);

  // Function to randomly select 3 classes
  const getRandomClasses = (classList, count) => {
    const shuffled = classList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get 3 random classes
  const randomClasses = getRandomClasses(classes, 3);

  return (
    <div className='mt-6 grid gap-6 grid-cols-1 '>
      {randomClasses.map(cls => (
        <div
          key={cls._id}
          className='border p-4 rounded flex flex-col justify-start'
        >
          <div className=''>
            <h3 className='text-lg font-semibold mb-2'>{cls.title}</h3>
            <p className='text-gray-500 mb-2'>{cls.description}</p>
          </div>
          <div className='flex items-center'>
            <img
              src={cls.photo}
              alt={cls.title}
              className='w-16 h-16 rounded-full mr-2'
            />
            <div>
              <p className='font-semibold'>{cls.instructor}</p>
              <p className='text-gray-500'>{cls.location}</p>
            </div>
          </div>
          <div className='mt-5'>
            <Link to='/trainer'>
              <button className='uppercase font-bold px-2 py-1 bg-extended-teal rounded-lg overflow-hidden text-white'>
                Join Class
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedClasses;
