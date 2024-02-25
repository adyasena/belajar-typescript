"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextUIProvider } from "@nextui-org/react";

export default function DefaultLayout({ children }: any) {
  return (
    <NextUIProvider>
      <div className="bg-white font-sans w-full min-h-screen">
        <Navbar />
        <div className="text-white mb-36">{children}</div>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
