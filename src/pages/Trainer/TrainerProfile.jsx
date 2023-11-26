import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Shared/Container/Container";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const TrainerProfile = () => {
  const { data: trainerData = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  // console.log(trainerData);

  return (
    <Container>
      <div className='container mx-auto py-6'>
        <div>
          <SectionTitle heading={"Trainer Profiles"}></SectionTitle>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {trainerData.map(trainer => (
            <div key={trainer._id} className='bg-white shadow rounded-lg p-6'>
              <img
                src={trainer.profileImage}
                alt={trainer.name}
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h2 className='text-xl font-semibold mb-2'>{trainer.name}</h2>
              <p className='text-gray-600 mb-2'>
                Years of Experience: {trainer.experience}
              </p>
              <div className='flex mb-4'>
                <a href={trainer.social.twitter} className='mr-3 text-xl'>
                  <Icon icon='skill-icons:twitter'></Icon>
                </a>
                <a href={trainer.social.linkedin} className='mr-3 text-xl'>
                  <Icon icon='et:linkedin'></Icon>
                </a>
                <a href={trainer.social.instagram} className='text-xl'>
                  <Icon icon='skill-icons:instagram'></Icon>
                </a>
              </div>
              <p className='text-gray-600 mb-2'>
                Available Slots: {trainer.availableSlots}
              </p>
              <Link to={`/trainer-details/${trainer._id}`}>
                <button className='bg-extended-teal text-white py-2 px-4 rounded hover:bg-gradient-to-r from-orange-600 to-teal-500 font-bold uppercase'>
                  Know More
                </button>
              </Link>
              <p>{trainerData?.timeSlots}</p>
            </div>
          ))}
        </div>
        <div className='flex mt-10  items-start p-6'>
          <Link to='/trainer-application-form'>
            <button className='px-16 uppercase hover:text-white font-bold  py-2 bg-extended-teal hover:bg-gradient-to-r from-fuchsia-700 to-violet-700 rounded-r-full overflow-hidden'>
              Be a Trainer{" "}
              <Icon
                className='inline-flex text-2xl ml-2'
                icon={"ant-design:form-outlined"}
              ></Icon>
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default TrainerProfile;
