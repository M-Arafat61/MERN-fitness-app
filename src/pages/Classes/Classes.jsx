import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import WeeklySchedule from "../../components/Classes/WeeklySchedule";
import ClassesCard from "../../components/Classes/ClassesCard";

const Classes = () => {
  // const [bookings, setBookings] = useState([]);
  const [classes, setClasses] = useState([]);
  // const [trainers, setTrainers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // const fetchTrainers = async () => {
    //   const res = await axiosPublic.get(`/trainers`);
    //   setTrainers(res.data);
    // };

    const fetchClasses = async () => {
      const res = await axiosPublic.get(`/classes`);
      setClasses(res.data);
    };

    fetchClasses();
  }, [user?.email]);
  // console.log(trainers);

  return (
    <Container>
      <div className='text-3xl font-bold'>Weekly Schedule</div>

      <div className=''>
        <WeeklySchedule classes={classes} />
      </div>

      <div className='text-3xl font-bold mt-16'>Classes With Best Trainers</div>
      <div className='grid grid-cols-3 gap-5 mt-10'>
        {classes.map(eachClass => (
          <ClassesCard key={eachClass._id} eachClass={eachClass}></ClassesCard>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
