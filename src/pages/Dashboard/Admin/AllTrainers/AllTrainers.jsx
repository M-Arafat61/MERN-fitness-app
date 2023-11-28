import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Icon } from "@iconify/react";

const AllTrainers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/trainers");
      return res.data;
    },
  });

  // important
  const calculateDaysDifference = acceptanceDate => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // One day in milliseconds
    const acceptanceDateInMillis = new Date(acceptanceDate).getTime();
    const todayInMillis = new Date().getTime();
    const differenceInMilliseconds = todayInMillis - acceptanceDateInMillis;

    const differenceInDays = Math.floor(
      differenceInMilliseconds / oneDayInMilliseconds
    );
    return differenceInDays;
  };

  return (
    <div className='mt-10'>
      <table className='table '>
        <thead className=' '>
          <tr className='text-lg'>
            <th></th>
            <th>Trainer Name</th>
            <th>Trainer Email</th>
            <th>Pay</th>
          </tr>
        </thead>

        {trainers.map((trainer, index) => (
          <tbody key={trainer._id}>
            <tr>
              <td>{index + 1}.</td>
              <td>{trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{calculateDaysDifference(trainer.acceptanceDate)}</td>
              <td>
                <button className='flex items-center gap-2 bg-extended-teal px-2 py-1 rounded-md text-white font-bold uppercase hover:bg-gradient-to-t from-extended-teal to-fuchsia-500'>
                  <Icon
                    className='text-2xl'
                    icon='streamline:payment-10-solid'
                  ></Icon>
                  Pay
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllTrainers;
