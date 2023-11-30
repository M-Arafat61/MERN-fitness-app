import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchSubscribers = async () => {
      const res = await axiosSecure.get("/subscribers");
      setSubscribers(res.data);
    };
    fetchSubscribers();
  }, [axiosSecure]);
  console.log(subscribers);
  return (
    <div className='mt-16 border border-extended-teal mr-2'>
      <table className='table '>
        <thead className='text-black '>
          <tr className='text-lg'>
            <th></th>
            <th>Subscribers Name</th>
            <th>Subscribers Email</th>
          </tr>
        </thead>

        {subscribers.map((subscriber, index) => (
          <tbody key={subscriber._id}>
            <tr className='text-black'>
              <td>{index + 1}.</td>
              <td>{subscriber.name}</td>

              <td>{subscriber.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllSubscribers;
