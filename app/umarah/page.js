import React from "react";
import Umarah from "@/components/app/Umarah";
import Visa from "@/components/app/Visa";

export const metadata = {
  title: "Umarah",
  description:
    "Book your spiritual journey with our affordable and comprehensive Umrah packages. We ensure a seamless and memorable experience. Contact with us today!",
  keywords: [
    "Umrah Packages",
    "Affordable Umrah Packages",
    "Book Umrah",
    "Spiritual Tour",
    "Umrah Travel Agency",
    "Religious Tours",
    "Umrah Booking",
    "Umrah Tour Packages",
    "Custom Umrah Packages",
    "Umrah Travel Services",
  ],
};

function page() {
  return (
    <>
      <Umarah />
      <Visa />
    </>
  );
}

export default page;
