import toast from "react-hot-toast";
import subscribeImg from "../../../assets/Images/Subscribe/trans-man-exercising-gym.jpg";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import Container from "../../Shared/Container/Container";
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
    <Container>
      <section className='py-10 md:py-20'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='md:w-1/2 md:pr-8 mb-6 md:mb-0'>
              <img src={subscribeImg} alt='Subscribe' className='rounded-lg' />
            </div>
            <div className='w-full md:w-1/2'>
              <div className='bg-extended-gray py-5 mb-5'>
                <h2 className='text2xl md:text-3xl lg:text-5xl font-bold px-3'>
                  Subscribe Our Newsletter!
                </h2>
              </div>
              <div>
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
        </div>
      </section>
    </Container>
  );
};

export default SubscribeUser;
