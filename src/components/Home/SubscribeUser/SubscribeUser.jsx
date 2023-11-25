import toast from "react-hot-toast";
import subscribeImg from "../../../assets/Images/Subscribe/trans-man-exercising-gym.jpg";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
const SubscribeUser = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subscriber = {
      name,
      email,
    };
    axiosPublic
      .post("/subscriptions", subscriber)
      .then(res => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Thank You for subscription! 💕");
        }
      })
      .catch(err => {
        console.log(err.message);
        toast.error("Please try later!😥");
      });
  };

  return (
    <section className=' py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 md:pr-8 mb-6 md:mb-0'>
            <img src={subscribeImg} alt='Subscribe' className='rounded-lg' />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-5xl font-bold mb-4'>
              Subscribe Our Newsletter!
            </h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='bg-white border border-gray-300 rounded-lg mb-4 px-4 py-2'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='bg-white border border-gray-300 rounded-lg mb-4 px-4 py-2'
                required
              />
              <button
                type='submit'
                className='bg-extended-teal text-lg uppercase text-white rounded-lg px-6 py-3 font-semibold hover:bg-opacity-90 transition duration-300'
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeUser;
