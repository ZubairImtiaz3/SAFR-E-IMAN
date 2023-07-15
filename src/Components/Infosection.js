//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import lineSvg from "../assets/umrahline.svg";
import arrow from "../assets/arrow.svg";
import umrah1 from "../assets/umrah1.jpg";
import umrah2 from "../assets/umrah2.jpg";
import umrah3 from "../assets/umrahmain.jpg";

import { Link } from "react-router-dom";
import Visa from "./Visa";
import WhyUs from "./WhyUs";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";
import Reviews from "./Reviews";

import LazyLoad from "react-lazyload";

function Infosection(props) {
  return (
    <>
      <ScrollTop
        distance={900}
        className="react-scrolltop-button"
        speed={500}
        target={0}
        breakpoint={2560}
      />

      {/* UMRAH SECTION */}
      <div className="umrahContainer max-w-[94.5%] mx-auto flex justify-center mt-[4.875rem] xl:mt-48">
        <div className="contentUmrah space-y-5">
          <AnimationOnScroll
            animateOnce={true}
            duration={0.5}
            animateIn="animate__fadeIn"
          >
            <h2 className="font-Raleway font-semibold text-3xl sm:text-4xl">
              Umrah Pakages for you
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            duration={0.8}
            animateIn="animate__fadeInLeft"
          >
            <img src={lineSvg} alt="line" />
          </AnimationOnScroll>

          <AnimationOnScroll
            animateOnce={true}
            delay={400}
            animateIn="animate__fadeIn"
          >
            <p className="font-Poppins text-base max-w-[26.25rem]">
              We provide the best Umarah services from Pakistan. You can choose
              packages according to your needs and budget.
            </p>
          </AnimationOnScroll>
          <div className="flex items-center space-x-2">
            <AnimationOnScroll
              animateOnce={true}
              delay={600}
              animateIn="animate__fadeInUp"
            >
              <Link onClick={props.linkScroll} to="/umarah">
                <button className="umrahBtn font-Poppins text-xl sm:text-2xl">
                  Book Now
                </button>
              </Link>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={true}
              delay={700}
              animateIn="animate__fadeIn"
            >
              <img className=" relative top-3" src={arrow} alt="arrowsvg" />
            </AnimationOnScroll>
          </div>

          <AnimationOnScroll
            animateOnce={true}
            delay={900}
            animateIn="animate__fadeIn"
          >
            <div className="umrahimg flex items-center pt-3 space-x-5">
              <LazyLoad height={168} offset={100}>
                <img className="umrahimg1" src={umrah1} alt="pic" />
              </LazyLoad>
              <LazyLoad height={168} offset={100}>
                <img
                  className="umrahimg2 z-[2] rounded-lg hidden lg:block"
                  src={umrah2}
                  alt="pic"
                />
              </LazyLoad>
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateOnce={true}
          delay={1000}
          animateIn="animate__fadeInRight"
        >
          <LazyLoad height={636} offset={100}>
            <img
              className="-translate-x-8 hidden xl:block"
              src={umrah3}
              alt="pic"
            />
          </LazyLoad>
        </AnimationOnScroll>
      </div>

      {/* VISAS SECTION */}
      <Visa />

      {/* WHY US SECTION */}
      <WhyUs />

      {/* ReviewsSecions */}
      <Reviews />

      {/* BANKDETAILSECTION */}
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <h2 className="font-Poppins font-bold text-3xl sm:text-[2.5rem] text-center sm:text-left pl-[4.5%] mt-[4.875rem] md:mt-24 lg:mt-28 xl:mt-[9.75rem]">
          Our Bank Accounts
        </h2>
      </AnimationOnScroll>

      <AnimationOnScroll
        delay={300}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
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
      </AnimationOnScroll>
    </>
  );
}

export default Infosection;
