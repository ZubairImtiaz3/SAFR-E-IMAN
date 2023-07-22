import React from "react";
import Image from "next/image";
import saudia from "@/public/assets/visa/saudia.jpg";
import dubai from "@/public/assets/visa/dubai.jpg";
import behrain from "@/public/assets/visa/behrain.jpg";

function Visa(props) {
  const visaContent = [
    {
      id: 0,
      image: saudia,
      city: "Saudia Arabia",
      discription:
        "We provide quick Visa processing of saudia from Karachi and Islamabad Embassy.",
    },
    {
      id: 1,
      image: dubai,
      city: "Dubai",
      discription:
        "We provide One Month, Three Month and Transit visit Visa of Dubai.",
    },
    {
      id: 2,
      image: behrain,
      city: "Bahrain",
      discription:
        "You can choose One Month, Three Months and one Year Multiple entry visit Visa of Behrain.",
    },
  ];
  return (
    <>
      <div
        id="visa"
        className="visaContainer flex flex-col justify-center items-center mt-[4.875rem] xl:mt-[7.875rem]"
      >
        <h2 className="font-raleway font-bold text-3xl sm:text-[2.5rem] text-center">
          Popular places we provide Visas
        </h2>

        <div className="visaCardContainer pt-[5.438rem] flex flex-wrap justify-center gap-12 sm:gap-16 mb-32">
          {visaContent.map((visa, index) => (
            <a
              key={index}
              rel="noreferrer"
              target="_blank"
              href="https://wa.me/923446463437"
            >
              <div className="visaCard">
                <div className="content p-[0.813rem]">
                  <Image src={visa.image} alt={visa.city} />

                  <h3 className="font-semibold font-poppins text-xl sm:text-2xl mt-3">
                    {visa.city}
                  </h3>
                  <p className="text-xs font-poppins max-w-[19.625rem] mt-1">
                    {visa.discription}
                  </p>
                </div>
                <button className="bookBtn relative top-[-8.5rem] left-[73%] sm:left-[76%] font-poppins text-base text-[#EFEFEF]">
                  Book
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Visa;
