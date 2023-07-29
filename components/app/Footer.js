"use client";
import Image from "next/image";
import Link from "next/link";

import footerLogo from "@/public/assets/footer/footer.svg";
import footermail from "@/public/assets/footer/footermail.svg";
import footerphone from "@/public/assets/footer/footerphone.svg";
import footerlocation from "@/public/assets/footer/footerlocation.svg";
import ff from "@/public/assets/partials/ff.png";
import fw from "@/public/assets/partials/fw.png";
import fi from "@/public/assets/partials/fi.png";
import footerbg from "@/public/assets/footer/footerbg.svg";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const socialLinks = [
  {
    href: "#",
    imgSrc: ff,
    alt: "Facebook",
  },
  {
    href: "#",
    imgSrc: fw,
    alt: "Twitter",
  },
  {
    href: "#",
    imgSrc: fi,
    alt: "Instagram",
  },
];

const importantLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/umrah",
    label: "Umrah",
  },
  {
    to: "#visa",
    label: "Visa & Services",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "#about",
    label: "About",
  },
];

const contactInfo = [
  {
    src: footerphone,
    link: "tel:+923446463437",
    text: "+923446463437",
  },
  {
    src: footermail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=safinaalmadina@gmail.com",
    text: "Safinaalmadina@gmail.com",
  },
  {
    src: footerlocation,
    link: "https://goo.gl/maps/tTEhxaUZiVWLvC9N7",
    text: "Qila Ahmad Abad, Narowal",
  },
];

function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="footerContainer flex flex-wrap justify-around gap-12 p-12 max-w-[27rem] sm:max-w-full">
          <div className="footerContent space-y-5 sm:w-[21.313rem]">
            <Link href="/">
              <Image src={footerLogo} alt="logo" />
            </Link>
            <p className="font-poppins text-sm sm:text-xs text-white">
              Travel & Tourism Agency located in Qila Ahmad Abad, District
              Narowal, Punjab Pakistan. We Provide all Airline Tickets, Services
              of UMRAH, Visa processing of Saudia Arabia and visit Visas of
              multiple Countries. We provide freedom to our Clients to make
              thier own Travel plans.
            </p>
          </div>

          <div className="footerLinks flex flex-wrap gap-16 pt-4 sm:pt-0 mt-3">
            <div>
              <h3 className="text-white font-raleway font-semibold text-xl sm:text-lg">
                Important Links
              </h3>
              <ul className="text-white space-y-3 pt-5 font-raleway font-medium text-base sm:text-base">
                {importantLinks.map((link, index) => (
                  <li
                    key={index}
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
                    <Link
                      onClick={() => {
                        if (link.label.toLowerCase() === "home") scrollToTop();
                      }}
                      href={link.to}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-white flex space-y-4 flex-col">
              <h3 className="font-raleway font-semibold text-xl sm:text-lg">
                Get in touch with us
              </h3>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex space-x-2 font-poppins text-[15px] sm:text-base"
                >
                  <Image
                    className="w-auto h-auto"
                    src={info.src}
                    alt={info.src}
                  />
                  <a href={info.link} target="_blank" rel="noreferrer">
                    <p className="font-poppins text-base text-white">
                      {info.text}
                    </p>
                  </a>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-white font-raleway font-semibold text-xl sm:text-lg">
                Follow us
              </h3>
              <div className="footerSocial flex items-center space-x-5 pt-[1.625rem]">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href}>
                    <Image className="icon" src={link.imgSrc} alt={link.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image className="w-full" src={footerbg} alt="svg" />
      </footer>
    </>
  );
}

export default Footer;
