"use client";

import { Parallax } from "react-parallax";

import Image from "next/image";
import topRated from "@/public/assets/umarah/toprated.jpg";
import Animatedpage from "@/components/app/route/Animatedpage";

const parallexImg = "/assets/umarah/parallex.jpg";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

const packages = [
  {
    price: "Rs 1,80,000/-",
    description:
      "Don't worry if you afford less money, You can still perform Umrah. We have cheapest Umrah package for 21 Days. Book Now and Pack your Bags",
    items: [
      "Return Air Ticket",
      "Umrah Visa",
      "Transport (4 ways)",
      "Hotel (1000m)",
    ],
    whatsappLink:
      "https://api.whatsapp.com/send?phone=923446463437&text=Salam%20!%20Want%20to%20book%20your%20BUDGET%20Umrah%20Package",
  },
  {
    price: "Rs 1,95,000/-",
    description:
      "Perform the Religious Ritual with all the comfort at low price. You will definately experiance the best services related to the travelling, cuisine and accomodation",
    items: [
      "Return Air Ticket",
      "Umrah Visa",
      "Transport (4 ways)",
      "Makkah Hotel (500m)",
      "Madina Hotel (500m)",
    ],
    whatsappLink: "https://wa.me/923446463437",
    topRated: true,
  },
  {
    price: "Rs 2,10,000/-",
    description:
      "You will get star hotels that are closest to Khana Kaba and Masjid e Nabvi. Travel around Makkah and Madinah in our Special Air conditioned Transport",
    items: [
      "Return Air Ticket",
      "Umrah Visa",
      "Transport (4 ways)",
      "Hotel (250m)",
    ],
    whatsappLink: "https://wa.me/923446463437",
  },
];

function Umarah(props) {
  return (
    <>
      <ScrollTop
        text="^"
        distance={900}
        className="scroll-your-role"
        speed={500}
        target={0}
        breakpoint={2560}
      />

      <Animatedpage>
        <div className="heroUmarahi hidden mt-4 xl:block">
          <div className="flex">
            <div className="leftHeroUmarah bg-black w-[75%] h-[37.25rem] text-white pt-[9.438rem] text-center">
              <div className="contentLeftHeroUmarahi translate-x-44">
                <h2 className="font-raleway font-semibold text-7xl">UMRAH</h2>
                <h2 className="font-raleway font-semibold text-5xl pt-4">
                  PAKAGES
                </h2>
                <h2 className="font-poppins font-medium text-[5rem]">2023</h2>
              </div>
            </div>
            <div className="h-[37.25rem] w-[25%]">
              <Parallax
                bgImage={parallexImg}
                strength={300}
                bgImageStyle={{
                  height: "44.25rem",
                }}
              >
                <div className="h-[37.25rem]"></div>
              </Parallax>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="leftHeroUmarah bg-black h-[37.25rem] text-white pt-[9.438rem] text-center mt-4 xl:hidden">
          <div className="contentLeftHeroUmarah">
            <h2 className="font-raleway font-semibold text-6xl">UMRAH</h2>
            <h2 className="font-raleway font-semibold text-4xl pt-4">
              PAKAGES
            </h2>
            <h2 className="font-poppins font-medium text-[4rem]">2022</h2>
          </div>
        </div>

        <div className="containerUmarahPkg">
          <h2 className="text-center font-raleway font-bold text-5xl sm:text-7xl pt-28">
            Pricing
          </h2>

          <div className="containerPkg max-w-[94.5%] mx-auto flex items-center flex-wrap gap-32 xl:gap-0 justify-center pb-10 pt-20">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`contentPkg ${
                  index === 1
                    ? "w-[23.563rem] h-[35rem] xl:w-[25.563rem] xl:h-[41.063rem]"
                    : "w-[23.563rem] h-[35rem]"
                }`}
              >
                <div className="containerChild">
                  <div
                    className={`contentContainerChild bg-black flex justify-center rounded-xl h-[13.313rem] items-center relative ${
                      index === 1 ? "contentContainerChild2" : ""
                    }`}
                  >
                    {pkg.topRated && (
                      <Image
                        src={topRated}
                        alt="Top Rated"
                        className="absolute top-[-5%] left-[7%]"
                      />
                    )}
                    <h2 className="font-poppins text-4xl sm:text-[2.625rem] text-white font-medium">
                      {pkg.price}
                    </h2>
                  </div>
                </div>
                <div
                  className={`containerChild flex justify-center flex-col items-center space-y-12 bg-white ${
                    index === 1
                      ? "pb-4 xl:pb-0 xl:h-[27.7rem]"
                      : "h-[21.813rem]"
                  }`}
                >
                  <div className="containerChild font-poppins text-xs space-y-6">
                    <p className="pt-8 text-center max-w-[14rem] sm:max-w-[18rem]">
                      {pkg.description}
                    </p>
                    <ul className="space-y-3">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-8">
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a target="_blank" rel="noreferrer" href={pkg.whatsappLink}>
                    <button className="buyNowBtn font-poppins text-xl sm:text-2xl text-white">
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Animatedpage>
    </>
  );
}
export default Umarah;
