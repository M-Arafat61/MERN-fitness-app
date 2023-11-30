import Container from "../../Shared/Container/Container";
import aboutImg from "../../../assets/Images/AboutUs/2150847945.jpg";

const AboutUs = () => {
  return (
    <Container>
      <section className='my-16'>
        <div className='container mx-auto '>
          <div className=''>
            <h2 className='text-2xl md:text-5xl font-bold mb-8  py-5'>
              <span className=''>About</span> SyncFit
            </h2>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2 md:pr-8 mb-6 md:mb-0'>
              <p className='text-lg leading-relaxed'>
                SyncFit was born from a shared passion for fitness and a desire
                to revolutionize the way people approach their health goals. Our
                mission is to provide a platform that fosters community,
                empowers individuals, and makes fitness accessible to everyone.
              </p>
              <p className='text-lg leading-relaxed mt-4'>
                At SyncFit, we believe in the power of collaboration. Whether
                you are a beginner or a seasoned fitness enthusiast, our
                platform offers personalized tools, expert guidance, and a
                supportive community to help you reach your fitness aspirations.
              </p>
            </div>
            <div className=' md:w-1/2'>
              <img
                src={aboutImg}
                alt='Team'
                className='rounded-lg w-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
