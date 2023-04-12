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
import fourStar from "../assets/rating4.jpg";
import fiveStar from "../assets/rating5.png";

function Reviews() {
  const reviewsContent = [
    {
      image: review1,
      rating: fourStar,
      title: "Abdul Ghaffar",
      discription:
        "Fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus ringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
    {
      image: review2,
      rating: fourStar,
      title: "Aqsa Mehmood",
      discription:
        "Fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus ringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
    {
      image: review1,
      rating: fiveStar,
      title: "Rehan Rana",
      discription:
        "Fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus ringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
    {
      image: review1,
      rating: fourStar,
      title: "Ammar Khawar",
      discription:
        "Fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus ringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
    {
      image: review1,
      rating: fourStar,
      title: "Abdullah",
      discription:
        "Fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus ringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
    {
      image: review1,
      rating: fiveStar,
      title: "Syed Khizer Abbas",
      discription:
        "Fringilla accumsan, risus sem sollicitudin lacus, ut interdum  tellus elit sed risus ringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    },
  ];
  return (
    <>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <h3 className="font-Raleway font-bold text-3xl mt-[8.125rem] sm:text-[2.5rem] text-center sm:ml-[3.25rem] sm:text-left mb-8">
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
          {reviewsContent.map((reviews) => (
            <SwiperSlide>
              <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
                <div className="reviewContent space-y-[0.688rem]">
                  <div className="flex items-center space-x-3">
                    <img src={reviews.image} alt="clientImg" />
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
