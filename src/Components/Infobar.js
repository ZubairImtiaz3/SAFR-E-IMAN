import React from "react";
import phoneSvg from "../assets/phone.svg";
import mailSvg from "../assets/mail.svg";
import fbSvg from "../assets/fb.svg";
import whatsappSvg from "../assets/whatsapp.svg";
import instaSvg from "../assets/insta.svg";

function Infobar(props) {
  return (
    <>
      <div className="infoBarContainer bg-[#373737] flex items-center h-[3.125rem] justify-center md:justify-between">
        <div className="infoContent flex space-x-10 md:pl-[4.25rem]">
          <div className="contentOne flex items-center space-x-[0.375rem]">
            <img src={phoneSvg} alt="callIcon" />
            <a href="tel:+923446463437">
              <p className="font-Poppins text-base text-white">+923446463437</p>
            </a>
          </div>
          <div className="contentTwo hidden sm:flex items-center space-x-[0.375rem]">
            <img src={mailSvg} alt="mailIcon" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=safinaalmadina@gmail.com"
              target="_blank"
            >
              <p className="font-Poppins text-base text-white">
                Safinaalmadina@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className="socialContent space-x-5 pr-[4.25rem] hidden md:flex">
          <a href="#">
            <img className="icon" src={fbSvg} alt="fbIcon" />
          </a>
          <a href="#">
            <img className="icon" src={whatsappSvg} alt="fbIcon" />
          </a>
          <a href="#">
            <img className="icon" src={instaSvg} alt="fbIcon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Infobar;
