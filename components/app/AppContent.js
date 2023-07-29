import React from "react";
import Infobar from "@/components/app/Infobar";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

export default function AppContent({ children }) {
  return (
    <>
      <Infobar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
