import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const BookingSlot = () => {
  const axiosSecure = useAxiosSecure();
  const [packages, setPackages] = useState([]);
  const [classes, setClasses] = useState([]);
  const [trainer, setTrainer] = useState({});
  const { id, day, index } = useParams();

  const { user } = useAuth();

  useEffect(() => {
    const fetchPackages = async () => {
      const response = await axiosSecure.get("/packages");
      setPackages(response.data);
    };

    const fetchClasses = async () => {
      const response = await axiosSecure.get("/classes");
      setClasses(response.data);
    };

    const fetchTrainer = async () => {
      const response = await axiosSecure.get(`/trainer-details/${id}`);
      setTrainer(response.data);
    };
    fetchTrainer();
    fetchPackages();
    fetchClasses();
  }, [axiosSecure, id, day]);

  const getClassByPackage = packageName => {
    return classes.filter(
      classItem => classItem.selectedPackage === packageName
    );
  };
  const handleJoin = async eachPackage => {
    const filteredClass = classes.filter(
      cls => cls.selectedPackage === eachPackage.name
    );
    const timeSlot = trainer?.timeSlotOfDays;
    const classTime = timeSlot[day][index];

    const bookedPackage = {
      package: eachPackage,
      classes: filteredClass,
      trainer: trainer.name,
      userName: user?.displayName,
      userEmail: user?.email,
      trainerEmail: trainer.email,
      bookedSlot: { classTime, day },
    };

    try {
      const response = await axiosSecure.post(
        "/trainer-bookings",
        bookedPackage
      );
      if (response.data.insertedId) {
        toast.success(
          `Congratulations, ${eachPackage.name} package confirmed!💪🏻`
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
    console.log(bookedPackage);
  };

  return (
    <Container>
      <div className='grid grid-cols-3 gap-5 mt-10'>
        {packages.map(eachPackage => (
          <div
            key={eachPackage._id}
            className='rounded-md shadow-md flex flex-col justify-between overflow-hidden'
          >
            <div className='font-semibold text-center'>
              <h2 className='text-2xl font-bold mb-4'>{eachPackage.name}</h2>
              <p className='text-lg'>{eachPackage.fee}$/month</p>
            </div>
            <hr />
            <ul className='text-gray-700 px-5 py-2'>
              {eachPackage.facilities.map((facility, idx) => (
                <li key={idx} className='flex items-center mb-2 justify-start'>
                  <svg
                    className='w-4 h-4 fill-current text-teal-500 mr-2'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='10' cy='10' r='8' />
                  </svg>
                  <span className='ml-2'>{facility}</span>
                </li>
              ))}
            </ul>
            <div className='px-5'>
              <h3 className='font-bold py-2'>
                Some classes in {eachPackage.name}
              </h3>
              <ul className='flex'>
                {getClassByPackage(eachPackage.name).map((classItem, index) => (
                  <li key={classItem._id}>
                    <h4 className='italic mr-2'>
                      {index + 1}. {classItem.title}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleJoin(eachPackage)}
              className='mt-4 bg-extended-teal hover:bg-emerald-400 text-white font-semibold py-2 px-4 rounded-b-xl overflow-hidden uppercase'
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BookingSlot;
