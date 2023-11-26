import { Link, useLoaderData } from "react-router-dom";

import Container from "../../components/Shared/Container/Container";

const TrainerDetails = () => {
  const trainerData = useLoaderData();

  // const location = useLocation();
  // console.log(trainerData.data);
  const timeSlot = trainerData?.data?.timeSlotOfDays;

  console.log(timeSlot);

  return (
    <Container>
      <div className='container mx-auto py-6'>
        <h1 className='text-4xl font-bold mb-8 '>
          Available Slots of
          <span className='text-extended-teal ml-2'>
            Trainer {trainerData?.data.name}
          </span>
        </h1>
      </div>
      <div>
        {Object.keys(timeSlot).map(day => (
          <div className='w-3/4 mx-auto ' key={day}>
            <h3 className='font-bold'>{day.toUpperCase()}</h3>
            <ul className='flex border justify-between mb-5 p-4 items-center'>
              {timeSlot[day].map((time, index) => (
                <Link to={`/booking-slot/${day}/${index}`} key={index}>
                  <div className='p-3 hover:bg-extended-teal rounded-lg hover:text-white'>
                    <p className='font-medium underline'>Slot-{index + 1}</p>
                    <li className='hover:italic'>{`From ${time.start} - To ${time.end}`}</li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrainerDetails;
