import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";

import { axiosPublic } from "../../../hooks/useAxiosPublic";
import Container from "../../Shared/Container/Container";
import SectionTitle from "../../Shared/SectionTitle";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      const response = await axiosPublic.get("/reviews");
      setReviews(response.data);
    };
    fetchReview();
  }, []);

  return (
    <Container>
      <div className='my-20'>
        <SectionTitle heading={"Testimonials"}></SectionTitle>
        <Swiper
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay]}
          className='mySwiper'
        >
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <div className='my-10 px-20 flex flex-col items-center space-y-5 text-center'>
                <Icon className='text-4xl' icon='carbon:review' />
                <p className='text-lg'>{review.quote}</p>
                <h3 className='text-extended-yellow text-2xl'>{review.name}</h3>
                <p>{review.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Reviews;
