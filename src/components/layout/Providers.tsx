"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

export default function DefaultLayout({ children }: any) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <div className="bg-white font-sans w-full min-h-screen">
          <Navbar />
          <div className="text-white pb-60">{children}</div>
          <Footer />
        </div>
      </SessionProvider>
    </NextUIProvider>
  );
}
