import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

import logo from "../assets/logo.svg";

function Navbar(props) {
  //MOBILE NAV STATES

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // FUNCTION FOR HAMBURGER

  function MenuItem({ children, href }) {
    const hideHam = () => {
      setOpen(false);
    };
    return (
      <div className="p-2">
        <Link onClick={hideHam} to={href} className={style.item}>
          {children}
        </Link>
      </div>
    );
  }

  function MenuItem1({ children, href }) {
    const hideHam = () => {
      setOpen(false);
      return (
        <div className="p-2">
          <Link1 onClick={hideHam} to={href} className={style.item}>
            {children}
          </Link1>
        </div>
      );
    };

    return (
      <div className="p-2">
        <Link1
          spy={true}
          smooth={true}
          offset={-40}
          duration={1200}
          onClick={hideHam}
          to={href}
          className={style.item}
        >
          {children}
        </Link1>
      </div>
    );
  }

  return (
    <>
      <nav className="bg-black h-28 flex items-center justify-between pl-4 sm:pl-[5.438rem] xl:pr-[12.5rem]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="mobileMenu mt-2 xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-[0.39rem] pr-4 sm:pr-7"
            onClick={toggle}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
          </div>
          <Menu open={open}>
            <button
              aria-label="Close"
              className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
              onClick={toggle}
            >
              &times;
            </button>
            <MenuContainer>
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/umarah">Umrah</MenuItem>
              <MenuItem1 href="visa">Visa & Services</MenuItem1>
              <MenuItem href="/contact">Contact</MenuItem>
              <MenuItem1 href="footer">About</MenuItem1>
            </MenuContainer>
          </Menu>
        </div>

        <ul className="mainLinks font-Raleway text-white text-base space-x-[3.75rem] hidden xl:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/umarah">Umrah</Link>
          </li>
          <li className="cursor-pointer">
            <Link1
              spy={true}
              smooth={true}
              offset={-40}
              duration={800}
              to="visa"
            >
              Visa & Services
            </Link1>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer">
            <Link1 spy={true} smooth={true} duration={1600} to="footer">
              About
            </Link1>
          </li>
        </ul>
      </nav>
    </>
  );
}

// Logic
const style = {
  container: `relative top-[8rem] w-full text-center mt-8 space-y-6`,
  item: `text-2xl text-gray-400 cursor-pointer hover:text-white`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Navbar;
