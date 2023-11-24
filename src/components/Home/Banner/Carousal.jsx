import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../../assets/Images/Banner/man-training-gym.jpg";
import slide2 from "../../../assets/Images/Banner/girl-stats2.jpg";
import slide3 from "../../../assets/Images/Banner/group-workout.jpg";
import slide4 from "../../../assets/Images/Banner/girl-stats.jpg";
import slide5 from "../../../assets/Images/Banner/young-woman-spinning-class.jpg";
import Container from "../../Shared/Container/Container";
import { Icon } from "@iconify/react";

const Carousal = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='relative'>
            <img src={slide1} alt='' />
            <div className='bg-white '>
              <div className='absolute top-48 left-14 bg-white rounded-md p-4'>
                <Icon
                  className='text-4xl text-black animate-spin'
                  icon='fontisto:spinner-cog'
                ></Icon>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide5} alt='' />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousal;
