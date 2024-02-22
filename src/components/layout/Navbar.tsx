"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCircleInfo, FaBars } from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeClass);
  return (
    <div className="navbar">
      <div
        className={
          "navbar bg-white transform duration-300 ease " +
          (scroll ? "opacity-100 " : "lg:h-24 opacity-0 ") +
          (!isOpen ? "shadow-md" : "opacity-100")
        }
      ></div>
      <div
        className={
          "z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
          "justify-between transform duration-300 ease overflow-hidden " +
          (scroll ? "h-16" : "lg:h-24 h-16")
        }
      >
        <button
          className="flex flex-row justify-start items-center h-full"
          // onClick={() => {
          //   scrollToTop();
          // }}
        >
          <Image
            alt=""
            src="/assets/logo.png"
            width={1000}
            height={1000}
            style={{ maxWidth: "100%", height: "auto" }}
            className={
              "m-2 transform duration-300 ease " +
              (scroll ? "w-8" : "w-0 mr-[-4px]")
            }
          />
          <p className="transform">Inspirasi Kalirejo</p>
        </button>
        <div className="lg:flex flex-row hidden gap-12">
          <button
            className="hover:underline"
            // onClick={() => {
            //   scrollToTop();
            // }}
          >
            Beranda
          </button>
          <button
            className="hover:underline"
            // onClick={() => {
            //   scrollToSection("wisata");
            // }}
          >
            Wisata
          </button>
          <button
            className="hover:underline"
            // onClick={() => {
            //   scrollToSection("umkm");
            // }}
          >
            UMKM
          </button>
          <button
            className="hover:underline"
            // onClick={() => {
            //   scrollToSection("galeri");
            // }}
          >
            Galeri
          </button>
          <button className="hover:underline">Kontak</button>
        </div>
      </div>
    </div>
  );
}
