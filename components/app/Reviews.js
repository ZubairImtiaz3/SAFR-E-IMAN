"use client";
import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

//images
import review1 from "@/public/assets/review/review1.jpg";
import review2 from "@/public/assets/review/review2.jpg";
import clientReview from "@/public/assets/review/client-review2.png";
import clientReview1 from "@/public/assets/review/client-reivew3.jpeg";
import clientReview2 from "@/public/assets/review/client-review 4.jpeg";
import clientReview3 from "@/public/assets/review/client-review5.jpeg";
import fourStar from "@/public/assets/review/rating4.jpg";
import fiveStar from "@/public/assets/review/rating5.png";

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
      <h3 className="font-raleway font-bold text-3xl mt-[4.875rem] md:mt-24 lg:mt-28 xl:mt-[8.125rem] sm:text-[2.5rem] text-center sm:ml-[3.25rem] sm:text-left mb-8">
        Reviews
      </h3>

      <div className="lineReview"></div>

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
            <div className="reviewContainer max-w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col p-4 ml-2 md:p-0 md:ml-0">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <div className="w-[49px] h-[49px] rounded-[50%] object-cover overflow-hidden">
                    <Image
                      className="w-full h-full"
                      src={reviews.image}
                      alt="clientImg"
                    />
                  </div>
                  <Image src={reviews.rating} alt="rating" />
                </div>
                <h3 className="font-raleway font-bold text-2xl">
                  {reviews.title}
                </h3>
                <p className="font-poppins text-xs max-w-[24.063rem]">
                  {reviews.discription}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Reviews;
