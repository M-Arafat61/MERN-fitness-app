import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Container from "../../../../components/Shared/Container/Container";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import Clock from "../../../../components/Dashboard/Member/ActivityLog/Clock";

const getCurrentDayActivity = booking => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];

  if (booking.bookedSlot.day.toLowerCase() === currentDay) {
    return booking;
  } else {
    return null;
  }
};

const ActivityLog = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: bookings = [] } = useQuery({
    queryKey: ["allBookings"],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `all-bookings/member/${user.email}`
      );
      return response.data;
    },
  });

  // Filter today's activity
  const todayActivity = bookings.filter(getCurrentDayActivity);

  return (
    <Container>
      <div className='mt-10'>
        <Clock />
        <SectionTitle heading="Today's Activity" />
        <div className='mt-6'>
          {todayActivity.map((booking, idx) => (
            <div
              className='border border-gray-200 p-4 rounded mb-4'
              key={booking._id}
            >
              <div className='flex items-center justify-between mb-2'>
                <h2 className='text-2xl font-semibold'>{booking.trainer}</h2>
                <p className='text-gray-500'>{booking.bookedSlot.day}</p>
              </div>
              <div className='flex justify-between mb-2'>
                <div className='flex gap-2'>
                  <p className='font-semibold'>
                    From: {booking.bookedSlot.classTime.start}
                  </p>
                  <p className='font-semibold'>
                    To: {booking.bookedSlot.classTime.end}
                  </p>
                </div>
                {/* <p className='text-gray-500'>{idx + 1}.</p> */}
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {booking.classes.map(cls => {
                  if (
                    cls.daysArray
                      .map(day => day.toLowerCase())
                      .includes(booking.bookedSlot.day.toLowerCase())
                  ) {
                    return (
                      <div
                        key={cls._id}
                        className='border border-gray-200 p-4 rounded'
                      >
                        <h3 className='text-lg font-semibold'>{cls.title}</h3>
                        <p className='text-gray-500'>{cls.location}</p>
                        <img
                          src={cls.photo}
                          alt={cls.title}
                          className='mt-2 rounded'
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ActivityLog;
