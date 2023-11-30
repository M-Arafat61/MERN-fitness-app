import { Icon } from "@iconify/react";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container>
      <footer className=' text-white mt-16'>
        <div className='container mx-auto pt-5 pb-5 flex flex-col md:flex-row items-center justify-around gap-5'>
          <div className='flex flex-col items-center justify-between gap-5'>
            <a href='#' className='mx-auto '>
              <img
                src='https://i.ibb.co/vhKPqcJ/logo.jpg'
                alt='Syncfit Connect Logo'
                className='w-24 rounded-full'
              />
            </a>

            <p className='text-center text-2xl'>Syncfit Connect.</p>

            <div className='flex gap-5'>
              <Icon className='text-3xl' icon='akar-icons:facebook-fill'></Icon>
              <Icon className='text-3xl' icon='mingcute:youtube-fill'></Icon>
              <Icon className='text-3xl' icon='skill-icons:instagram'></Icon>
            </div>
          </div>

          <div className='text-lg md:mt-0'>
            <p>About Us</p>
            <p>Contact</p>
            <p>Jobs</p>
            <p>Press kit</p>
          </div>

          <div className='text-lg md:mt-0'>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Cookie policy</p>
          </div>
        </div>

        <p className='text-center text-xl pb-2'>
          Syncfit Connect, 123 Main Street, Dhaka, Bangladesh
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
