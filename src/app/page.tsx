"use client";
import React, { useState } from "react";
import Wisata from "../components/Wisata";
import Umkm from "../components/Umkm";
import Galeri from "../components/Galeri";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-col items-center justify-center relative">
        <Image
          alt=""
          src="/assets/bg.jpg"
          width={1920}
          height={1080}
          className="pointer-events-none h-screen w-screen object-cover brightness-[0.7]"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-white">
          <div className="flex flex-col h-full items-center justify-between lg:justify-center pt-36 lg:pt-0 font-semibold lg:text-center leading-normal gap-8">
            <Image
              alt=""
              src="/assets/logo.png"
              width={1000}
              height={1000}
              style={{ maxWidth: "100%", height: "auto" }}
              className="w-24"
            />
            <div className="flex flex-col gap-8 lg:items-center text-green-dark">
              <p className="lg:text-4xl text-5xl font-bold">
                Telusuri
                <br />
                Desa Inspirasi Kalirejo
              </p>
              <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                Temukan destinasi wisata terbaik dan produk UMKM unggulan di
                Desa Kalirejo, Kecamatan Salaman, Kabupaten Magelang, Jawa
                Tengah
              </p>
              <button
                className="bg-green-dark text-white font-normal lg:text-xl text-lg py-2 px-6 rounded-lg transform duration-300 ease lg:hover:bg-black"
                // onClick={() => {
                //   scrollToSection("wisata");
                // }}
              >
                Telusuri Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col container mx-auto font-poppins items-center text-center h-screen">
        <div className="flex flex-col mt-10 lg:mt-0 lg:mx-10">
          {/* <Wisata />
        <Umkm />
        <Galeri /> */}
        </div>
      </div>
    </>
  );
}
