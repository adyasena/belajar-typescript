"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Wisata from "../components/Wisata";

export default function Homepage() {
  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-col items-center justify-center relative">
        <Image
          alt=""
          src="/assets/bg.jpg"
          width={1920}
          height={1080}
          className="pointer-events-none h-screen w-screen object-cover brightness-[0.9]"
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
              <Button size="lg" className="bg-green-dark text-white">
                Telusuri Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col container mx-auto lg:px-8 items-center text-center h-screen w-full">
        <Wisata />
      </div>
    </>
  );
}
