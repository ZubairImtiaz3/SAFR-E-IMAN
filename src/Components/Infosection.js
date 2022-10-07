// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import lineSvg from "../assets/umrahline.svg";
import arrow from "../assets/arrow.svg";
import umrah1 from "../assets/umrah1.jpg";
import umrah2 from "../assets/umrah2.jpg";
import umrah3 from "../assets/umrahmain.jpg";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import whyvector1 from "../assets/whyvector1.svg";
import whyvector2 from "../assets/whyvector2.svg";
import whyvector3 from "../assets/whyvector3.svg";
import whyvector4 from "../assets/whyvector4.svg";
import fourStar from "../assets/rating4.jpg";
import fiveStar from "../assets/rating5.png";

import { Link } from "react-router-dom";
import Visa from "./Visa";

function Infosection(props) {
  return (
    <>
      {/* UMRAH SECTION */}
      <AnimationOnScroll
        animateOnce={true}
        duration={2.2}
        animateIn="animate__fadeInUp"
      >
        <div className="umrahContainer max-w-[94.5%] mx-auto flex justify-center mt-[7.875rem]">
          <div className="contentUmrah space-y-5">
            <h2 className="font-Raleway font-semibold text-3xl sm:text-4xl">
              Umrah Pakages for you
            </h2>
            <img src={lineSvg} alt="line" />
            <p className="font-Poppins text-base max-w-[26.25rem]">
              We provide the best Umarah services from Pakistan. You can choose
              packages according to your needs and budget.
            </p>
            <div className="flex items-center space-x-2">
              <Link onClick={props.linkScroll} to="/umarah">
                <button className="umrahBtn font-Poppins text-xl sm:text-2xl">
                  Book Now
                </button>
              </Link>
              <img className=" relative top-3" src={arrow} alt="arrowsvg" />
            </div>
            <div className="umrahimg flex items-center pt-3 space-x-5">
              <img className="umrahimg1" src={umrah1} alt="pic" />
              <img
                className="umrahimg2 z-[2] rounded-lg hidden lg:block"
                src={umrah2}
                alt="pic"
              />
            </div>
          </div>
          <img
            className="-translate-x-8 hidden xl:block"
            src={umrah3}
            alt="pic"
          />
        </div>
      </AnimationOnScroll>
      {/* VISAS SECTION */}

      <Visa />

      {/* WHY US SECTION */}

      <div className="whyUsContainer h-auto xl:h-[34.75rem] ml-5 sm:ml-10">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className="contentWhyus pt-12 space-y-2 sm:space-y-1">
            <h2 className="font-Raleway text-3xl sm:text-[2.5rem] font-bold text-center">
              Why Book with
            </h2>
            <h2 className="font-Raleway text-3xl sm:text-[2.5rem] font-bold text-[#5E5E5E] text-center">
              Safina Al Madina Travels?
            </h2>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          delay={650}
          animateIn="animate__fadeInUp"
        >
          <div className="cardsContainerWhyUS flex space-x-8 justify-center flex-wrap">
            <div className="cardWhyUs space-y-[0.625rem] relative left-[4.8%] sm:static">
              <img src={whyvector1} alt="vector" />
              <h3 className="font-Poppins text-2xl font-semibold">
                Trust Worthy
              </h3>
              <p className="font-Poppins text-xs w-48">
                We are Register and Authorized from Travel and Tourism
                Department of Pakistan
              </p>
            </div>
            <div className="cardWhyUs space-y-[0.625rem]">
              <img src={whyvector2} alt="vector" />
              <h3 className="font-Poppins text-2xl font-semibold">
                Easy to Book
              </h3>
              <p className="font-Poppins text-xs w-48">
                You can send your queries on Whatsapp, Email or get in touch by
                making a call
              </p>
            </div>
            <div className="cardWhyUs space-y-[0.625rem]">
              <img src={whyvector3} alt="vector" />
              <h3 className="font-Poppins text-2xl font-semibold">
                Best Price
              </h3>
              <p className="font-Poppins text-xs w-48">
                We Gurantte you the best price in the Market, Discount on
                Airline Tickets and much more.
              </p>
            </div>
            <div className="cardWhyUs space-y-[0.625rem] mb-12 xl:mb-0">
              <img src={whyvector4} alt="vector" />
              <h3 className="font-Poppins text-2xl font-semibold">
                Customer Services
              </h3>
              <p className="font-Poppins text-xs w-48">
                Our team is Available 24/7. You can Get in touch at any day in
                week.
              </p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      {/* ReviewsSecions */}
      <h3 className="font-Raleway font-bold text-3xl mt-[8.125rem] sm:text-[2.5rem] text-center sm:ml-[3.25rem] sm:text-left mb-8">
        Reviews
      </h3>
      <div className="lineReview"></div>
      <AnimationOnScroll
        delay={90}
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
              spaceBetween: 0,
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
          <SwiperSlide>
            <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <img src={review1} alt="clientImg" />
                  <img src={fourStar} alt="rating" />
                </div>
                <h3 className="font-Raleway font-bold text-2xl">
                  Abdul Ghaffar
                </h3>
                <p className="font-Poppins text-xs w-[24.063rem]">
                  Fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus ringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <img src={review2} alt="clientImg" />
                  <img src={fiveStar} alt="rating" />
                </div>
                <h3 className="font-Raleway font-bold text-2xl">
                  Syed Khizer Abbas
                </h3>
                <p className="font-Poppins text-xs w-[24.063rem]">
                  Fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus ringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <img src={review1} alt="clientImg" />
                  <img src={fiveStar} alt="rating" />
                </div>
                <h3 className="font-Raleway font-bold text-2xl">Rehan Rana</h3>
                <p className="font-Poppins text-xs w-[24.063rem]">
                  Fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus ringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <img src={review2} alt="clientImg" />
                  <img src={fourStar} alt="rating" />
                </div>
                <h3 className="font-Raleway font-bold text-2xl">
                  Aqsa Mehmood
                </h3>
                <p className="font-Poppins text-xs w-[24.063rem]">
                  Fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus ringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <img src={review1} alt="clientImg" />
                  <img src={fourStar} alt="rating" />
                </div>
                <h3 className="font-Raleway font-bold text-2xl">
                  Rasheed Nonar
                </h3>
                <p className="font-Poppins text-xs w-[24.063rem]">
                  Fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus ringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewContainer w-[26.125rem] h-[12.875rem] flex justify-center items-center flex-col">
              <div className="reviewContent space-y-[0.688rem]">
                <div className="flex items-center space-x-3">
                  <img src={review1} alt="clientImg" />
                  <img src={fiveStar} alt="rating" />
                </div>
                <h3 className="font-Raleway font-bold text-2xl">Waheed Ali</h3>
                <p className="font-Poppins text-xs w-[24.063rem]">
                  Fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus ringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </AnimationOnScroll>

      {/* BANKDETAILSECTION */}

      <h2 className="font-Poppins font-bold text-3xl sm:text-[2.5rem] text-center sm:text-left pl-[4.5%] mt-[9.75rem]">
        Our Bank Accounts
      </h2>

      <div className="bankdetailContainer flex justify-center pt-10 mb-[11.25rem]">
        <div className="tableBank overflow-auto xsm:overflow-hidden">
          <table>
            <thead>
              <tr className="font-Poppins font-semibold text-base sm:text-xl">
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>Branch Number</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="font-poppins text-base sm:text-xl bg-black text-white">
              <tr>
                <td>HBL - HABIB BANK LTD</td>
                <td>PK66-HABB-0008527901124003</td>
                <td> &nbsp; &nbsp;0852</td>
                <td>JazzCash Microfinance Bank</td>
              </tr>
              <tr>
                <td>NBP - NATIONAL BANK PAKISTAN</td>
                <td>PK38-NBPA-2306004173552657</td>
                <td> &nbsp; &nbsp;2306</td>
                <td>HBL - HABIB BABK PVT LTD</td>
              </tr>
              <tr>
                <td>TELENOR MICROFINANCE BANK</td>
                <td>+923-446463437</td>
                <td>E-Wallet</td>
                <td>Easypaisa</td>
              </tr>
              <tr>
                <td>JAZZ MICROFINANCE BANK</td>
                <td>+923-446463437</td>
                <td>E-Wallet</td>
                <td>JazzCash</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Infosection;
