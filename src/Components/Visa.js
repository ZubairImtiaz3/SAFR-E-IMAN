import React from "react";
import saudia from "../assets/saudia.jpg";
import dubai from "../assets/dubai.jpg";
import behrain from "../assets/behrain.jpg";

//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Visa(props) {
  const visaContent = [
    {
      image: saudia,
      city: "Saudia Arabia",
      discription:
        "We provide quick Visa processing of saudia from Karachi and Islamabad Embassy.",
    },
    {
      image: dubai,
      city: "Dubai",
      discription:
        "We provide One Month, Three Month and Transit visit Visa of Dubai.",
    },
    {
      image: behrain,
      city: "Bahrain",
      discription:
        "You can choose One Month, Three Months and one Year Multiple entry visit Visa of Behrain.",
    },
  ];
  return (
    <>
      {/* VISAS SECTION */}

      <div
        id="visa"
        className="visaContainer flex flex-col justify-center items-center mt-48"
      >
        <AnimationOnScroll animateIn="animate__fadeIn">
          <h2 className="font-Raleway font-bold text-3xl sm:text-[2.5rem] text-center">
            Popular places we provide Visas
          </h2>
        </AnimationOnScroll>

        <AnimationOnScroll delay={300} animateIn="animate__fadeInRight">
          <div className="visaCardContainer pt-[5.438rem] flex flex-wrap justify-center gap-12 sm:gap-16 mb-32">
            {visaContent.map((visa) => (
              <a target="_blank" href="https://wa.me/923446463437">
                <div className="visaCard">
                  <div className="content p-[0.813rem]">
                    <img src={visa.image} alt="saudiPic" />
                    <h3 className="font-semibold font-Poppins text-xl sm:text-2xl mt-3">
                      {visa.city}
                    </h3>
                    <p className="text-xs font-Poppins max-w-[19.625rem] mt-1">
                      {visa.discription}
                    </p>
                  </div>
                  <button className="bookBtn relative top-[-8.5rem] left-[73%] sm:left-[76%] font-Poppins text-base text-[#EFEFEF]">
                    Book
                  </button>
                </div>
              </a>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default Visa;
