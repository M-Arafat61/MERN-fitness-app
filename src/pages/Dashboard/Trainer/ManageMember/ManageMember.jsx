import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Container from "../../../../components/Shared/Container/Container";

const ManageMember = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: trainersMember = [] } = useQuery({
    queryKey: ["members"],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/trainer-bookings/trainer/${user.email}`
      );
      return response.data;
    },
  });

  return (
    <Container>
      <div className='flex flex-col gap-4 mt-10'>
        {trainersMember.map(member => (
          <div
            key={member._id}
            className='border border-gray-300 rounded-md p-4 shadow-md'
          >
            <div className='flex justify-between items-center mb-2'>
              <div>
                <h2 className='text-xl font-semibold'>{member.userName}</h2>
                <p className='text-gray-500'>{member.userEmail}</p>
              </div>
              <div>
                <p className='text-lg font-semibold'>{member.package.name}</p>
              </div>
            </div>
            <div className='text-right'>
              <button className='bg-extended-teal hover:bg-teal-300 text-white py-2 px-4 rounded-md'>
                Send Instruction
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ManageMember;
