import Container from "../../Shared/Container/Container";
import aboutImg from "../../../assets/Images/AboutUs/2150847945.jpg";

const AboutUs = () => {
  return (
    <Container>
      <section className='py-16'>
        <div className='container mx-auto '>
          <h2 className='text-5xl font-bold mb-8 '>About SyncFit</h2>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='md:w-1/2 md:pr-8 mb-6 md:mb-0'>
              <p className='text-lg leading-relaxed'>
                SyncFit was born from a shared passion for fitness and a desire
                to revolutionize the way people approach their health goals. Our
                mission is to provide a platform that fosters community,
                empowers individuals, and makes fitness accessible to everyone.
              </p>
              <p className='text-lg leading-relaxed mt-4'>
                At SyncFit, we believe in the power of collaboration. Whether
                you're a beginner or a seasoned fitness enthusiast, our platform
                offers personalized tools, expert guidance, and a supportive
                community to help you reach your fitness aspirations.
              </p>
            </div>
            <div className='md:w-1/2'>
              <img src={aboutImg} alt='Team' className='rounded-lg' />
            </div>
          </div>

          <div className='mt-12'>
            <h3 className='text-2xl font-bold mb-4'>Our Team</h3>
            <p className='text-lg leading-relaxed'>
              The SyncFit team is a diverse group of fitness enthusiasts,
              experts, and tech innovators dedicated to creating an inclusive
              and motivating fitness ecosystem. We're committed to continuously
              improving our platform and supporting our community in their
              fitness journeys.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
