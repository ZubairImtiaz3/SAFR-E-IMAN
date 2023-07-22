"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/app/hero/Hero";
import Visa from "@/components/app/Visa";
import WhyUs from "@/components/app/WhyUs";
import Reviews from "@/components/app/Reviews";

import lineSvg from "@/public/assets/umarah/umrahline.svg";
import arrow from "@/public/assets/umarah/arrow.svg";
import umrah1 from "@/public/assets/umarah/umrah1.jpg";
import umrah2 from "@/public/assets/umarah/umrah2.jpg";
import umrah3 from "@/public/assets/umarah/umrahmain.jpg";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

export default function Home() {
  return (
    <>
      <ScrollTop
        text="^"
        distance={900}
        className="scroll-your-role"
        speed={500}
        target={0}
        breakpoint={2560}
      />

      <Hero />

      <div className="umrahContainer max-w-[94.5%] mx-auto flex justify-center mt-[4.875rem] xl:mt-48">
        <div className="contentUmrah space-y-5">
          <h2 className="font-raleway font-semibold text-3xl sm:text-4xl">
            Umrah Pakages for you
          </h2>

          <Image src={lineSvg} alt="line" />

          <p className="font-poppins text-base max-w-[26.25rem]">
            We provide the best Umarah services from Pakistan. You can choose
            packages according to your needs and budget.
          </p>

          <div className="flex items-center space-x-2">
            <Link href="/umarah">
              <button className="umrahBtn font-poppins text-xl sm:text-2xl">
                Book Now
              </button>
            </Link>

            <Image className=" relative top-3" src={arrow} alt="arrowsvg" />
          </div>

          <div className="umrahimg flex items-center pt-3 space-x-5">
            <Image className="umrahimg1" src={umrah1} alt="pic" />
            <Image
              className="umrahimg2 rounded-lg hidden lg:block"
              src={umrah2}
              alt="pic"
            />
          </div>
        </div>

        <Image
          className="-translate-x-8 hidden xl:block"
          src={umrah3}
          alt="pic"
        />
      </div>

      <Visa />
      <WhyUs />
      <Reviews />

      <h2 className="font-poppins font-bold text-3xl sm:text-[2.5rem] text-center sm:text-left pl-[4.5%] mt-[4.875rem] md:mt-24 lg:mt-28 xl:mt-[9.75rem]">
        Our Bank Accounts
      </h2>

      <div className="bankdetailContainer flex justify-center pt-10 mb-[11.25rem]">
        <div className="tableBank overflow-auto xsm:overflow-hidden">
          <table>
            <thead>
              <tr className="font-poppins font-semibold text-base sm:text-xl">
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>Branch Number</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="font-poppins text-base sm:text-xl bg-black text-white">
              <tr>
                <td>HBL - HABIB BANK LTD</td>
                <td>PK66-HABB-0008527901124003</td>
                <td> &nbsp; &nbsp;0852</td>
                <td>JazzCash Microfinance Bank</td>
              </tr>
              <tr>
                <td>NBP - NATIONAL BANK PAKISTAN</td>
                <td>PK38-NBPA-2306004173552657</td>
                <td> &nbsp; &nbsp;2306</td>
                <td>HBL - HABIB BABK PVT LTD</td>
              </tr>
              <tr>
                <td>TELENOR MICROFINANCE BANK</td>
                <td>+923-446463437</td>
                <td>E-Wallet</td>
                <td>Easypaisa</td>
              </tr>
              <tr>
                <td>JAZZ MICROFINANCE BANK</td>
                <td>+923-446463437</td>
                <td>E-Wallet</td>
                <td>JazzCash</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
