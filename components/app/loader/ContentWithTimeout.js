"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/ui/loader/InitialLoader";
import AppContent from "@/components/app/AppContent";

export default function ContentWithTimeout({ children }) {
  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsTimeoutFinished(true), 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  return isTimeoutFinished ? <AppContent>{children}</AppContent> : <Loader />;
}
