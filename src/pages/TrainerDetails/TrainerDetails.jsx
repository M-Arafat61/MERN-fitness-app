import { Link, useLoaderData } from "react-router-dom";

import Container from "../../components/Shared/Container/Container";

const TrainerDetails = () => {
  const trainerData = useLoaderData();
  console.log(trainerData);

  return (
    <Container>
      <div className='container mx-auto px-4 py-6'>
        <h1 className='text-4xl font-bold mb-8 '>
          Available Slots of
          <span className='text-extended-teal ml-2'>
            Trainer {trainerData?.data.name}
          </span>
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <Link to='/trainer-application-form'>
          <button className='px-5 py-2 bg-extended-teal'>Be a Trainer</button>
        </Link>
      </div>
    </Container>
  );
};

export default TrainerDetails;
