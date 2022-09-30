import React from "react";
import saudia from "../assets/saudia.jpg";
import dubai from "../assets/dubai.jpg";
import behrain from "../assets/behrain.jpg";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

function Visa(props) {
  const { ref, inView } = useInView();
  const useAnimationOnDiv = useAnimation();

  useEffect(() => {
    if (inView) {
      useAnimationOnDiv.start({
        x: 0,
        transition: {
          type: "string",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (window.innerWidth > 720 && !inView) {
      useAnimationOnDiv.start({
        x: "100vw",
      });
    }
    if (window.innerWidth < 720 && !inView) {
      useAnimationOnDiv.start({
        x: "0",
      });
    }
  }, [inView]);

  return (
    <>
      <div ref={ref}>
        {/* VISAS SECTION */}

        <motion.div
          id="visa"
          className="visaContainer flex flex-col justify-center items-center mt-48"
          animate={useAnimationOnDiv}
        >
          <h2 className="font-Raleway font-bold text-3xl sm:text-[2.5rem] text-center">
            Popular places we provide Visas
          </h2>
          <div className="visaCardContainer pt-[5.438rem] flex flex-wrap justify-center gap-12 sm:gap-16 mb-32">
            <a target="_blank" href="https://wa.me/923446463437">
              <div className="visaCard">
                <div className="content p-[0.813rem]">
                  <img src={saudia} alt="saudiPic" />
                  <h3 className="font-semibold font-Poppins text-xl sm:text-2xl mt-3">
                    Saudia Arabia
                  </h3>
                  <p className="text-xs font-Poppins max-w-[19.625rem] mt-1">
                    We provide quick Visa processing of saudia from Karachi and
                    Islamabad Embassy.
                  </p>
                </div>
                <button className="bookBtn relative top-[-8.5rem] left-[73%] sm:left-[76%] font-Poppins text-base text-[#EFEFEF]">
                  Book
                </button>
              </div>
            </a>

            <a target="_blank" href="https://wa.me/923446463437">
              <div className="visaCard">
                <div className="content p-[0.813rem]">
                  <img src={dubai} alt="saudiPic" />
                  <h3 className="font-semibold font-Poppins text-xl sm:text-2xl mt-3">
                    Dubai
                  </h3>
                  <p className="text-xs font-Poppins max-w-[19.625rem] mt-1">
                    We provide One Month, Three Month and Transit visit Visa of
                    Dubai.
                  </p>
                </div>
                <button className="bookBtn relative top-[-8.5rem] left-[73%] sm:left-[76%] font-Poppins text-base text-[#EFEFEF]">
                  Book
                </button>
              </div>
            </a>

            <a target="_blank" href="https://wa.me/923446463437">
              <div className="visaCard">
                <div className="content p-[0.813rem]">
                  <img src={behrain} alt="saudiPic" />
                  <h3 className="font-semibold font-Poppins text-xl sm:text-2xl mt-3">
                    Bahrain
                  </h3>
                  <p className="text-xs font-Poppins max-w-[19.625rem] mt-1">
                    You can choose One Month, Three Months and one Year Multiple
                    entry visit Visa of Behrain
                  </p>
                </div>
                <button className="bookBtn relative top-[-8.5rem] left-[73%] sm:left-[76%] font-Poppins text-base text-[#EFEFEF]">
                  Book
                </button>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Visa;
