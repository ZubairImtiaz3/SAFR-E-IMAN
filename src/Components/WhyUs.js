import React from "react";

//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

//Images
import whyvector1 from "../assets/whyvector1.svg";
import whyvector2 from "../assets/whyvector2.svg";
import whyvector3 from "../assets/whyvector3.svg";
import whyvector4 from "../assets/whyvector4.svg";

function WhyUs() {
  const whyUsContent = [
    {
      image: whyvector1,
      title: "Trust Worthy",
      discription:
        "We are Register and Authorized from Travel and Tourism Department of Pakistan",
      animateDelay: 300,
    },
    {
      image: whyvector2,
      title: "Easy to Book",
      discription:
        "You can send your queries on Whatsapp, Email or get in touch by making a call",
      animateDelay: 500,
    },
    {
      image: whyvector3,
      title: "Best Price",
      discription:
        "We Gurantte you the best price in the Market, Discount on Airline Tickets and much more.",
      animateDelay: 700,
    },
    {
      image: whyvector4,
      title: "Customer Services",
      discription:
        "Our team is Available 24/7. You can Get in touch at any day in week",
      animateDelay: 900,
    },
  ];

  return (
    <>
      <div className="whyUsContainer h-auto xl:h-[34.75rem] ml-5 sm:ml-10">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <div className="contentWhyus pt-12 space-y-2 sm:space-y-1">
            <h2 className="font-Raleway text-3xl sm:text-[2.5rem] font-bold text-center">
              Why Book with
            </h2>
            <h2 className="font-Raleway text-3xl sm:text-[2.5rem] font-bold text-[#5E5E5E] text-center">
              Safina Al Madina Travels?
            </h2>
          </div>
        </AnimationOnScroll>

        <div className="cardsContainerWhyUS flex space-x-8 justify-center flex-wrap">
          {whyUsContent.map((whyUs) => (
            <AnimationOnScroll
              animateOnce={true}
              delay={whyUs.animateDelay}
              animateIn="animate__fadeInUp"
            >
              <div className="cardWhyUs space-y-[0.625rem] relative left-[4.8%] sm:static">
                <img src={whyvector1} alt="vector" />
                <h3 className="font-Poppins text-2xl font-semibold">
                  {whyUs.title}
                </h3>
                <p className="font-Poppins text-xs w-48">{whyUs.discription}</p>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyUs;
