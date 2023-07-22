"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/partials/logo.svg";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [navFix, setnavFix] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  function MenuItem({ children, href }) {
    const hideHam = () => {
      setOpen(false);
    };

    const scrollTopSmaller = () => {
      hideHam();
      props.linkScroll();
    };

    return (
      <div className="p-2">
        <Link href={href} onClick={scrollTopSmaller} className={style.item}>
          {children}
        </Link>
      </div>
    );
  }

  const navStyle =
    "bg-black flex items-center justify-between pl-4 sm:pl-[5.438rem] xl:pr-[12.5rem]";

  const spacerNavFix = <div className="h-[90px]"></div>;

  useEffect(() => {
    const navCheckToFix = () => {
      if (window.scrollY >= 50) {
        setnavFix(true);
      } else {
        setnavFix(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navCheckToFix);

      return () => {
        window.removeEventListener("scroll", navCheckToFix);
      };
    }
  }, []);

  return (
    <>
      {navFix && spacerNavFix}
      <nav
        className={
          navFix
            ? `fixed h-20 top-0 z-50 w-full ${navStyle}`
            : `h-28 ${navStyle}`
        }
      >
        <Link href="/" aria-label="Travels & Tour Agency">
          <Image src={logo} alt="Safina Al Madina" />
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
              <MenuItem href="#visa">Visa & Services</MenuItem>
              <MenuItem href="/contact">Contact</MenuItem>
              <MenuItem href="#footer">About</MenuItem>
            </MenuContainer>
          </Menu>
        </div>

        <ul className="mainLinks font-raleway text-white text-base space-x-[3.75rem] hidden xl:flex">
          <li>
            <Link href="/" onClick={props.linkScroll}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/umarah" onClick={props.linkScroll}>
              Umrah
            </Link>
          </li>
          <li>
            <Link href="#visa">Visa & Services</Link>
          </li>
          <li>
            <Link href="/contact" onClick={props.linkScroll}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="#footer">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

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
      className={`${style.menu.default} ${
        open ? style.menu.open : style.menu.close
      }`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Navbar;
