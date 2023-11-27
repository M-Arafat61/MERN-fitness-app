const WeeklySchedule = ({ bookings }) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className='p-4 mt-10'>
      <div className='grid grid-cols-7 gap-4'>
        {daysOfWeek.map(day => {
          const matchedBookings = bookings.filter(
            booking =>
              booking.classTime &&
              booking.classTime.day &&
              booking.classTime.day.toLowerCase() === day.toLowerCase()
          );

          return (
            <div key={day} className='border border-t-0 rounded text-center '>
              <h3 className='text-lg font-semibold mb-2 bg-extended-teal text-white rounded-t-lg overflow-hidden p-4'>
                {day}
              </h3>
              <hr className='my-5' />
              <p className='font-semibold'>Class Time</p>
              <hr className='my-2 w-1/2 mx-auto' />
              {matchedBookings.length > 0 ? (
                matchedBookings.map((booking, index) => (
                  <div
                    key={index}
                    className='text-sm text-blue-600'
                  >{`${booking.classTime.classTime.start} - ${booking.classTime.classTime.end}`}</div>
                ))
              ) : (
                <p className='text-sm text-yellow-500'>No class scheduled</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySchedule;
