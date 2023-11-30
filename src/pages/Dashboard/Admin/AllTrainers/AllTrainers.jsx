import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const AllTrainers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/trainers");
      return res.data;
    },
  });

  // console.log(trainers);
  const monthAndDayCalculation = acceptanceDate => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const acceptanceDateInMillis = new Date(acceptanceDate).getTime();
    const todayInMillis = new Date().getTime();
    const differenceInMilliseconds = todayInMillis - acceptanceDateInMillis;

    const months = Math.floor(
      differenceInMilliseconds / (oneDayInMilliseconds * 30)
    );
    const remainingDays = Math.floor(
      (differenceInMilliseconds % (oneDayInMilliseconds * 30)) /
        oneDayInMilliseconds
    );

    let result = "";

    if (months > 0) {
      result += `${months} month${months !== 1 ? "s" : ""}`;
    }

    if (months > 0 && remainingDays > 0) {
      result += ` and `;
    }

    if (remainingDays > 0) {
      result += `${remainingDays} day${remainingDays !== 1 ? "s" : ""}`;
    }

    return result || "Today";
  };

  return (
    <div className='mt-10 border border-extended-teal mr-2'>
      <table className='table'>
        <thead className='text-black '>
          <tr className='text-lg'>
            <th></th>
            <th>Trainer Name</th>
            <th>Trainer Email</th>
            <th>Joined for</th>
            <th>Salary Status</th>
            <th></th>
          </tr>
        </thead>

        {trainers.map((trainer, index) => (
          <tbody key={trainer._id}>
            <tr>
              <td>{index + 1}.</td>
              <td>{trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{monthAndDayCalculation(trainer.acceptanceDate)}</td>
              <td
                className={`${
                  trainer.payment === "pending"
                    ? "text-yellow-600 font-semibold"
                    : "text-green-500 font-semibold"
                }`}
              >
                {trainer.payment}
              </td>
              <td>
                {trainer.payment === "pending" &&
                monthAndDayCalculation(trainer.acceptanceDate).includes(
                  "month"
                ) ? (
                  <Link to={`/dashboard/trainer-payment/${trainer._id}`}>
                    <button className='flex items-center gap-2 bg-extended-teal px-2 py-1 rounded-md text-white font-bold uppercase hover:bg-gradient-to-t from-extended-teal to-fuchsia-500'>
                      <Icon
                        className='text-2xl'
                        icon='streamline:payment-10-solid'
                      ></Icon>
                      Pay
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllTrainers;
