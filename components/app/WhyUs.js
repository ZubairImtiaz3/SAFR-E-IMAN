import React from "react";
import Image from "next/image";

//Images
import whyvector1 from "@/public/assets/whyUs/whyvector1.svg";
import whyvector2 from "@/public/assets/whyUs/whyvector2.svg";
import whyvector3 from "@/public/assets/whyUs/whyvector3.svg";
import whyvector4 from "@/public/assets/whyUs/whyvector4.svg";

function WhyUs() {
  const whyUsContent = [
    {
      id: 0,
      image: whyvector1,
      title: "Trust Worthy",
      description:
        "We are Register and Authorized from Travel and Tourism Department of Pakistan",
    },
    {
      id: 1,
      image: whyvector2,
      title: "Easy to Book",
      description:
        "You can send your queries on Whatsapp, Email or get in touch by making a call",
    },
    {
      id: 2,
      image: whyvector3,
      title: "Best Price",
      description:
        "We Gurantte you the best price in the Market, Discount on Airline Tickets and much more.",
    },
    {
      id: 3,
      image: whyvector4,
      title: "Customer Services",
      description:
        "Our team is Available 24/7. You can Get in touch at any day in week",
    },
  ];

  return (
    <>
      <div className="whyUsContainer h-auto xl:h-[34.75rem] sm:rounded-[40px_0px_0px_40px] sm:ml-10 pb-12 xl:pb-0">
        <div className="contentWhyus pt-12 space-y-2 sm:space-y-1">
          <h2 className="font-raleway text-3xl sm:text-[2.5rem] font-bold text-center">
            Why Book with
          </h2>
          <h2 className="font-raleway text-3xl sm:text-[2.5rem] font-bold text-[#5E5E5E] text-center md:tracking-[0.02em]">
            Safr e Iman Travels?
          </h2>
        </div>

        <div className="cardsContainerWhyUS flex gap-4 md:gap-8 justify-center flex-wrap">
          {whyUsContent.map((whyUs, index) => (
            <div
              key={index}
              className="cardWhyUs space-y-[0.625rem] mt-16 md:mt-10 xl:mt-[6.5rem]"
            >
              <Image src={whyvector1} alt="vector" />
              <h3 className="font-poppins text-2xl font-semibold">
                {whyUs.title}
              </h3>
              <p className="font-poppins text-xs w-48">{whyUs.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyUs;
