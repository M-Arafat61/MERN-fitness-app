import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Container from "../../../../components/Shared/Container/Container";
import SectionTitle from "../../../../components/Shared/SectionTitle";

const ManageSlots = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  const { data: bookedSlot = [] } = useQuery({
    queryKey: ["slotBookings"],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/trainer-bookings/trainer/${user.email}`
      );

      return response.data;
    },
  });
  console.log(bookedSlot);
  return (
    <Container>
      <div className='pt-5 md:pt-10 mx-auto'>
        <div className='mb-5'>
          <SectionTitle heading='Booked Slots'></SectionTitle>
        </div>
        <div className='mr-2 mx-auto flex flex-col'>
          {bookedSlot.map(booking => (
            <div
              className='flex  border border-extended-teal p-5 gap-16 mb-5 items-center'
              key={booking._id}
            >
              <div>
                <p className='underline font-medium mb-2'>User info</p>
                <p className='text-xl'>
                  <span className='font-bold'>{booking?.userName}</span>
                </p>
                <p className='text-lg'>{booking?.userEmail}</p>
              </div>
              <div className=''>
                <p className='underline  font-medium mb-2'>Slot info</p>
                <p className='text-xl font-medium'>{booking.bookedSlot?.day}</p>
                <div className='flex gap-5'>
                  <p>from-{booking.bookedSlot?.classTime?.start}</p>
                  <p>to-{booking.bookedSlot?.classTime?.end}</p>
                </div>
              </div>
              <button className='bg-red-500 hover:bg-red-700 rounded-md btn-sm text-white font-bold uppercase px-2'>
                Reject
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ManageSlots;
