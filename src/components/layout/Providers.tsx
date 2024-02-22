"use client";
import React from "react";
import Navbar from "./Navbar";
import { NextUIProvider } from "@nextui-org/react";

export default function DefaultLayout({ children }: any) {
  return (
    <NextUIProvider>
      <div className="bg-leaf-950 font-sans w-full min-h-screen">
        <Navbar />
        <div className="text-white">{children}</div>
      </div>
    </NextUIProvider>
  );
}
