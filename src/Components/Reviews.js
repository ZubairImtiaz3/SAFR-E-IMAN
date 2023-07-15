import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

//images
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import clientReview from "../assets/client-review2.png";
import clientReview1 from "../assets/client-reivew3.jpeg";
import clientReview2 from "../assets/client-review 4.jpeg";
import clientReview3 from "../assets/client-review5.jpeg";
import fourStar from "../assets/rating4.jpg";
import fiveStar from "../assets/rating5.png";

function Reviews() {
  const reviewsContent = [
    {
      image: clientReview,
      rating: fourStar,
      title: "Aziz Ahmed",
      discription:
        "Purchasing air tickets from this agency was a breeze. Their team was responsive, and the prices were reasonable. I will definitely use their services again.",
    },
    {
      image: clientReview1,
      rating: fourStar,
      title: "Ammar Khawar",
      discription:
        "The Umrah package was well-organized and hassle-free. Excellent communication from the team and great value for money.",
    },
    {
      image: review2,
      rating: fourStar,
      title: "Aqsa Mehmood",
      discription:
        "The Umrah trip arranged by this agency was beyond expectations. The whole process was smooth, and they provided excellent service. Highly recommended.",
    },
    {
      image: clientReview2,
      rating: fiveStar,
      title: "Syed Khizer Abbas",
      discription:
        "Recently, I purchased air tickets for my family through this agency. Not only did they find the best prices, Great work and a big thumbs up!",
    },
    {
      image: review1,
      rating: fiveStar,
      title: "Rehan Rana",
      discription:
        "They arranged a custom trip for me and my family. All the arrangements were spot on. They really care about their clients and it shows in their service.",
    },
    {
      image: clientReview3,
      rating: fourStar,
      title: "Zubair Imtiaz",
      discription:
        "Booked a custom trip to Turkey, and it was fantastic. Everything from flight tickets to hotel reservations was taken care of. Kudos to the team for such professionalism.",
    },
  ];
  return (
    <>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <h3 className="font-Raleway font-bold text-3xl mt-[4.875rem] md:mt-24 lg:mt-28 xl:mt-[8.125rem] sm:text-[2.5rem] text-center sm:ml-[3.25rem] sm:text-left mb-8">
          Reviews
        </h3>
      </AnimationOnScroll>

      <AnimationOnScroll
        delay={500}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <div className="lineReview"></div>
      </AnimationOnScroll>

      <AnimationOnScroll
        delay={700}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={36}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            290: {
              slidesPerView: 1,
              spaceBetween: 110,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 36,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {reviewsContent.map((reviews, index) => (
            <SwiperSlide key={index}>
              <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
                <div className="reviewContent space-y-[0.688rem]">
                  <div className="flex items-center space-x-3">
                    <div className="w-[49px] h-[49px] rounded-[50%] object-cover overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={reviews.image}
                        alt="clientImg"
                      />
                    </div>
                    <img src={reviews.rating} alt="rating" />
                  </div>
                  <h3 className="font-Raleway font-bold text-2xl">
                    {reviews.title}
                  </h3>
                  <p className="font-Poppins text-xs w-[24.063rem]">
                    {reviews.discription}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimationOnScroll>
    </>
  );
}

export default Reviews;
