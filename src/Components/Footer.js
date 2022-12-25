import React from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

import footerLogo from "../assets/footer.svg";
import footermail from "../assets/footermail.svg";
import footerphone from "../assets/footerphone.svg";
import footerlocation from "../assets/footerlocation.svg";
import ff from "../assets/ff.png";
import fw from "../assets/fw.png";
import fi from "../assets/fi.png";
import footerbg from "../assets/footerbg.svg";

function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="footerContainer flex flex-wrap justify-around gap-12 p-12 max-w-[27rem] sm:max-w-full">
          <div className="footerContent space-y-5 sm:w-[21.313rem]">
            <Link onClick={props.linkScroll} to="/">
              <img src={footerLogo} alt="logo" />
            </Link>
            <p className="font-Poppins text-sm sm:text-xs text-white">
              Travel & Tourism Agency located in Qila Ahmad Abad, District
              Narowal, Punjab Pakistan. We Provide all Airline Tickets, Services
              of UMRAH, Visa processing of Saudia Arabia and visit Visas of
              multiple Countries. We provide freedom to our Clients to make
              thier own Travel plans.
            </p>
          </div>
          <div className="footerLinks flex flex-wrap gap-16 pt-4 sm:pt-0 mt-3">
            <div>
              <h3 className="text-white font-Raleway font-semibold text-xl sm:text-lg">
                Important Links
              </h3>
              <ul className="text-white space-y-3 pt-5 font-Raleway font-medium text-base sm:text-base">
                <li
                  onClick={props.linkScroll}
                  className="flex items-center space-x-[0.375rem]"
                >
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 5.5L1 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={props.linkScroll}
                  className="flex items-center space-x-[0.375rem]"
                >
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 5.5L1 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link onClick={props.linkScroll} to="/umarah">
                    Umrah
                  </Link>
                </li>
                <li className="flex items-center space-x-[0.375rem] cursor-pointer">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 5.5L1 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link1
                    spy={true}
                    smooth={true}
                    offset={-115}
                    duration={800}
                    to="visa"
                  >
                    Visa & Services
                  </Link1>
                </li>
                <li className="flex items-center space-x-[0.375rem] cursor-pointer">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 5.5L1 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link onClick={props.linkScroll} to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="flex items-center space-x-[0.375rem]">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 5.5L1 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link to="#">About</Link>
                </li>
              </ul>
            </div>

            <div className="text-white flex space-y-4 flex-col">
              <h3 className="font-Raleway font-semibold text-xl sm:text-lg">
                Get in touch with us
              </h3>
              <div className="flex space-x-2 font-Poppins text-[15px] sm:text-base">
                <img src={footerphone} alt="svg" />
                <a href="tel:+923446463437">
                  <p className="font-Poppins text-base text-white">
                    +923446463437
                  </p>
                </a>
              </div>
              <div className="flex space-x-2 font-Poppins text-[15px] sm:text-base">
                <img src={footermail} alt="svg" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=safinaalmadina@gmail.com"
                  target="_blank"
                >
                  <p className="font-Poppins text-base text-white">
                    Safinaalmadina@gmail.com
                  </p>
                </a>
              </div>
              <div className="flex space-x-2 font-Poppins text-[15px] sm:text-base">
                <img
                  className="w-5 h-auto sm:w-auto"
                  src={footerlocation}
                  alt="svg"
                />
                <a target="_blank" href="https://goo.gl/maps/tTEhxaUZiVWLvC9N7">
                  <p>Qila Ahmad Abad, Narowal</p>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-Raleway font-semibold text-xl sm:text-lg">
                Follow us
              </h3>
              <div className="footerSocial flex items-center space-x-5 pt-[1.625rem]">
                <a href="#">
                  <img className="icon" src={ff} alt="img" />
                </a>
                <a href="#">
                  <img className="icon" src={fw} alt="img" />
                </a>
                <a href="#">
                  <img className="icon" src={fi} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full" src={footerbg} alt="svg" />
      </footer>
    </>
  );
}

export default Footer;
