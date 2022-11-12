import topRated from "../assets/toprated.jpg";
import Animatedpage from "./Animatedpage";

//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

function Umarah(props) {
  return (
    <>
      <ScrollTop
        text="^"
        distance={900}
        className="scroll-your-role"
        speed={500}
        target={10}
        breakpoint={2560}
      />

      <Animatedpage>
        <div className="heroUmarah hidden mt-4 xl:block">
          <div className="leftHeroUmarah bg-black w-[75%] h-[37.25rem] text-white pt-[9.438rem] text-center">
            <div className="contentLeftHeroUmarah translate-x-44">
              <h2 className="font-Raleway font-semibold text-7xl">UMRAH</h2>
              <h2 className="font-Raleway font-semibold text-5xl pt-4">
                PAKAGES
              </h2>
              <h2 className="font-Poppins font-medium text-[5rem]">2022</h2>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="leftHeroUmarah bg-black h-[37.25rem] text-white pt-[9.438rem] text-center mt-4 xl:hidden">
          <div className="contentLeftHeroUmarah">
            <h2 className="font-Raleway font-semibold text-6xl">UMRAH</h2>
            <h2 className="font-Raleway font-semibold text-4xl pt-4">
              PAKAGES
            </h2>
            <h2 className="font-Poppins font-medium text-[4rem]">2022</h2>
          </div>
        </div>

        <div className="containerUmarahPkg">
          <h2 className="text-center font-Raleway font-bold text-5xl sm:text-7xl pt-28">
            Pricing
          </h2>

          <div className="containerPkg max-w-[94.5%] mx-auto flex items-center flex-wrap gap-32 xl:gap-0 justify-center pb-10 pt-20">
            <div className="contentPkg w-[23.563rem] h-[35rem]">
              <AnimationOnScroll
                animateOnce={true}
                duration={2}
                animateIn="animate__fadeInLeft"
              >
                <div className="containerChild">
                  <div className="contentContainerChild bg-black flex justify-center rounded-xl h-[13.313rem] items-center">
                    <h2 className="font-Poppins text-4xl sm:text-[2.625rem] text-white font-medium">
                      Rs 1,80,000/-
                    </h2>
                  </div>
                </div>

                <div className="containerChild flex justify-center flex-col items-center space-y-12 bg-white h-[21.813rem]">
                  <div className="containerChild font-Poppins text-xs space-y-6">
                    <p className="pt-8 text-center max-w-[14rem] sm:max-w-[18rem]">
                      Don't worry if you afford less money, You can still
                      perform Umrah. We have cheapest Umrah package for 21 Days.
                      Book Now and Pack your Bags
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Return Air Ticket
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Umrah Visa
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Transport (4 ways)
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Hotel (1000m)
                      </li>
                    </ul>
                  </div>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=923446463437&text=Salam%20!%20Want%20to%20book%20your%20BUDGET%20Umrah%20Package"
                  >
                    <button className="buyNowBtn font-Poppins text-xl sm:text-2xl text-white">
                      Buy Now
                    </button>
                  </a>
                </div>
              </AnimationOnScroll>
            </div>

            <div className="contentPkg w-[23.563rem] h-[35rem] xl:w-[25.563rem] xl:h-[41.063rem]">
              <AnimationOnScroll
                animateOnce={true}
                duration={1}
                animateIn="animate__fadeInUp"
              >
                <div className="containerChild">
                  <div className="contentContainerChild2 flex justify-center rounded-xl h-[13.313rem] xl:h-[15.563rem] items-center">
                    <h2 className="font-Poppins text-4xl sm:text-[2.625rem] text-white font-medium">
                      Rs 1,95,000/-
                    </h2>
                  </div>
                </div>

                <div className="containerChild flex justify-center flex-col items-center space-y-12 bg-white h-[21.813rem] xl:h-[25.438rem]">
                  <div className="containerChild font-Poppins text-xs space-y-6">
                    <p className="pt-8 text-center max-w-[14rem] sm:max-w-[18rem]">
                      Perform the Religious Ritual with all the comfort at low
                      price. You will definately experiance the best services
                      related to the travelling, cuisine and accomodation
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Return Air Ticket
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Umrah Visa
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Transport (4 ways)
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Makkah Hotel (500m)
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Madina Hotel (500m)
                      </li>
                    </ul>
                  </div>
                  <a target="_blank" href="https://wa.me/923446463437">
                    <button className="buyNowBtn font-Poppins text-xl sm:text-2xl text-white">
                      Buy Now
                    </button>
                  </a>
                </div>
                <img
                  className="absolute top-[-5%] left-[7%]"
                  src={topRated}
                  alt="svg"
                />
              </AnimationOnScroll>
            </div>

            <div className="contentPkg w-[23.563rem] h-[35rem]">
              <AnimationOnScroll
                animateOnce={true}
                duration={2}
                animateIn="animate__fadeInRight"
              >
                <div className="containerChild">
                  <div className="contentContainerChild bg-black flex justify-center rounded-xl h-[13.313rem] items-center">
                    <h2 className="font-Poppins text-4xl sm:text-[2.625rem] text-white font-medium">
                      Rs 2,10,000/-
                    </h2>
                  </div>
                </div>

                <div className="containerChild flex justify-center flex-col items-center space-y-12 bg-white h-[21.813rem]">
                  <div className="containerChild font-Poppins text-xs space-y-6">
                    <p className="pt-8 text-center max-w-[14rem] sm:max-w-[18rem]">
                      You will get star hotels that are closest to Khana Kaba
                      and Masjid e Nabvi. Travel around Makkah and Madinah in
                      our Special Air conditioned Transport
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Return Air Ticket
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Umrah Visa
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Transport (4 ways)
                      </li>
                      <li className="flex items-center gap-8">
                        <svg
                          width="19"
                          height="12"
                          viewBox="0 0 19 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5.36842L5.67452 9.33949C6.02199 9.715 6.59685 9.76768 7.00679 9.46159L17 2"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Hotel (250m)
                      </li>
                    </ul>
                  </div>
                  <a target="_blank" href="https://wa.me/923446463437">
                    <button className="buyNowBtn font-Poppins text-xl sm:text-2xl text-white">
                      Buy Now
                    </button>
                  </a>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </Animatedpage>
    </>
  );
}
export default Umarah;
