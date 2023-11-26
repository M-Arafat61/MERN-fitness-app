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

  return (
    <div className='mt-16'>
      <table className='table '>
        <thead className=' '>
          <tr className='text-lg'>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        {subscribers.map((subscriber, index) => (
          <tbody key={subscriber._id}>
            <tr>
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
