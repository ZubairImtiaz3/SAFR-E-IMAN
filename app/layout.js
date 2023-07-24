"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/app/Navbar";
import Infobar from "@/components/app/Infobar";
import Footer from "@/components/app/Footer";
import "./globals.css";
import { Raleway, Poppins } from "next/font/google";
import logoLoader from "@/public/assets/partials/logo2.svg";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

// Dynamic import of PropagateLoader to avoid server-side rendering
const PropagateLoader = dynamic(
  () => import("react-spinners/PropagateLoader"),
  { ssr: false }
);

export const metadata = {
  title: {
    default: "SAFR-E-IMAN",
    template: "%s",
  },
  description:
    "Travel & Tourism Agency located in Qila Ahmad Abad, District Narowal, Punjab Pakistan. We Provide all Airline Tickets, Services of UMRAH, Visa processing of Saudia Arabia and visit Visas of multiple Countries. We provide freedom to our Clients to make thier own Travel plans.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <html>
        <body lang="en" className={`${raleway.variable} ${poppins.variable}`}>
          {loading ? (
            <div className="loader">
              <div className="loaderContent relative -top-16 sm:static">
                <Image
                  className="w-[290px] sm:w-auto sm:relative sm:left-[-7%]"
                  src={logoLoader}
                  alt="loader"
                />
                <PropagateLoader color="#ceb041" />
              </div>
            </div>
          ) : (
            <>
              <Infobar />
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </body>
      </html>
    </>
  );
}
