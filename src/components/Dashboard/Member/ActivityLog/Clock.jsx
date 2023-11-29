// import { useEffect, useState } from "react";

// const Clock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(intervalID);
//   }, []);

//   return (
//     <div>
//       <p>{time.toLocaleTimeString()}</p>
//     </div>
//   );
// };

// export default Clock;
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const Clock = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = time.format("hh:mm:ss A");
  const currentDay = time.format("dddd");
  const currentMonth = time.format("MMMM");
  const currentDate = time.format("Do");

  return (
    <div className='flex flex-col gap-1 items-end justify-end'>
      <p>{formattedTime}</p>
      <div className='flex '>
        <p>{currentDay},</p>
        <p>
          {currentMonth} {currentDate}
        </p>
      </div>
    </div>
  );
};

export default Clock;
