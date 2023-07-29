import React from "react";
import Image from "next/image";
import phoneSvg from "@/public/assets/partials/phone.svg";
import mailSvg from "@/public/assets/partials/mail.svg";
import fbSvg from "@/public/assets/partials/fb.svg";
import whatsappSvg from "@/public/assets/partials/whatsapp.svg";
import instaSvg from "@/public/assets/partials/insta.svg";

function Infobar(props) {
  return (
    <>
      <div className="infoBarContainer bg-[#373737] flex items-center h-[3.125rem] justify-center md:justify-between">
        <div className="infoContent flex space-x-10 md:pl-[4.25rem]">
          <div className="contentOne flex items-center space-x-[0.375rem]">
            <Image src={phoneSvg} alt="callIcon" />
            <a href="tel:+923446463437">
              <p className="font-poppins text-base text-white">+923446463437</p>
            </a>
          </div>
          <div className="contentTwo hidden sm:flex items-center space-x-[0.375rem]">
            <Image src={mailSvg} alt="mailIcon" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=safreimantravel@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="font-poppins text-base text-white">
                Safreimantravel@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className="socialContent space-x-5 pr-[4.25rem] hidden md:flex">
          <a href="/">
            <Image className="icon" src={fbSvg} alt="fbIcon" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://wa.me/923446463437?text="
          >
            <Image className="icon" src={whatsappSvg} alt="whatsappIcon" />
          </a>
          <a href="/">
            <Image className="icon" src={instaSvg} alt="instaIcon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Infobar;
