import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import Container from "../../Shared/Container/Container";
import { Icon } from "@iconify/react";
import SectionTitle from "../../Shared/SectionTitle";

const Team = () => {
  const { data: trainerData = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  console.log(trainerData);
  return (
    <Container>
      <SectionTitle heading={"Our Team"}></SectionTitle>
      <div className='grid grid-cols-4'>
        {trainerData.map(trainer => (
          <div key={trainer._id}>
            <div className='container mx-auto p-4 '>
              <div className=''>
                <div className='mx-auto relative shadow-md rounded-lg cursor-pointer'>
                  <img
                    src={trainer.profileImage}
                    className='w-full h-[300px] object-cover rounded-lg'
                  />
                  <div className='absolute bottom-0 left-0 right-0  bg-black bg-opacity-20 backdrop-blur text-white p-4 rounded-b-lg space-y-1'>
                    <h1 className='text-xl font-semibold'>{trainer.name}</h1>
                    <p className=''>Gmail: {trainer.email}</p>
                    <p className=''>Age: {trainer.age}</p>
                    <div className='flex'>
                      <a href={trainer.social.twitter} className='mr-3 text-xl'>
                        <Icon icon='skill-icons:twitter'></Icon>
                      </a>
                      <a
                        href={trainer.social.linkedin}
                        className='mr-3 text-xl'
                      >
                        <Icon icon='et:linkedin'></Icon>
                      </a>
                      <a href={trainer.social.instagram} className='text-xl'>
                        <Icon icon='skill-icons:instagram'></Icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
