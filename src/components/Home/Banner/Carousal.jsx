import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../../assets/Images/Banner/man-training-gym.jpg";
// import slide2 from "../../../assets/Images/Banner/girl-stats2.jpg";
// import slide3 from "../../../assets/Images/Banner/group-workout.jpg";
// import slide4 from "../../../assets/Images/Banner/young-woman-spinning-class.jpg";
import Container from "../../Shared/Container/Container";
import CarousalContent from "./CarousalContent";
import CarousalSpinner from "./CarousalSpinner";

const Carousal = () => {
  return (
    <Container>
      <div className='mt-10'>
        <Swiper
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
              <img
                className='md:h-[700px] w-full rounded-b-2xl overflow-hidden object-cover'
                src={slide1}
                alt=''
              />
              <CarousalSpinner />
              <CarousalContent
                title={" Unite for Fitness Success!"}
                description={
                  " Experience the power of synchronized fitness for a healthier lifestyle."
                }
                moreDescription={
                  "SyncFit fosters a community-driven approach to fitness. Connect, collaborate, and conquer goals together."
                }
              ></CarousalContent>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <img
              className='md:h-[600px] w-full rounded-b-2xl overflow-hidden object-cover'
              src={slide2}
              alt=''
            />
            <CarousalSpinner />
            <CarousalContent
              title={" Elevate Your Fitness with SyncFit!"}
              description={
                "SyncFit empowers you to elevate your fitness journey. "
              }
              moreDescription={
                "Sync workouts, inspire one another, and achieve milestones as a cohesive fitness community. Your ultimate path to success starts here."
              }
            ></CarousalContent>
          </SwiperSlide>

          <SwiperSlide>
            <img
              className='md:h-[600px] w-full rounded-b-2xl overflow-hidden object-cover'
              src={slide3}
              alt=''
            />
            <CarousalSpinner />
            <CarousalContent
              title={"SyncFit: Sync, Sweat, Succeed!"}
              description={
                "Synchronize efforts, sweat together, and achieve success. "
              }
              moreDescription={
                "With SyncFit. Seamlessly sync workouts, support peers, and unlock a world of fitness triumphs. Together, unstoppable."
              }
            ></CarousalContent>
          </SwiperSlide>

          <SwiperSlide>
            <img
              className='md:h-[600px] w-full rounded-b-2xl overflow-hidden object-cover'
              src={slide4}
              alt=''
            />
            <CarousalSpinner />
            <CarousalContent
              title={"Forge Fitness Bonds with SyncFit!"}
              description={"Forge unbreakable fitness bonds with SyncFit."}
              moreDescription={
                "Join forces, share achievements, and embark on a collaborative fitness adventure. Transform aspirations into accomplishments, united."
              }
            ></CarousalContent>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </Container>
  );
};

export default Carousal;
