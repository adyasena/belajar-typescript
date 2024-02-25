"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaYoutube, FaHouse } from "react-icons/fa6";

export default function Navbar() {
  const openInNewTab = ({ url } : any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative bg-green-dark pt-8 pb-6 text-white">
      <div className="container mx-auto lg:px-10">
        <div className="flex lg:flex-row flex-col justify-between gap-4 lg:gap-0">
          <div className="flex flex-col gap-2 lg:w-6/12 px-4 text-center lg:text-start">
            <h4 className="text-xl font-bold">Desa Inspirasi Kalirejo</h4>
            <h5 className="text-lg mb-2">
              Alamat : Jl. Kyai Sampir No. 5 Kalirejo Salaman Magelang
              <br />
              Kode Pos : 56162
              <br />
              Telp : 081391021310
              <br />
              Email : kalirejo03salaman@gmail.com
              <br />
            </h5>
          </div>
          <div className="lg:w-1/2 flex flex-row justify-center lg:justify-end px-4 gap-4">
            <button
              className="h-10 w-10 bg-blue rounded-full text-white"
              onClick={() =>
                openInNewTab("https://www.facebook.com/desainspirasixrejo")
              }
            >
              <FaFacebookF className="w-full h-1/2" />
            </button>
            <button
              className="h-10 w-10 bg-red rounded-full text-white"
              onClick={() =>
                openInNewTab(
                  "https://www.youtube.com/channel/UCFkrk-5iIpSFVQ8tDXz97zA"
                )
              }
            >
              <FaYoutube className="w-full h-1/2" />
            </button>
            <button
              className="h-10 w-10 bg-green rounded-full text-white"
              onClick={() =>
                openInNewTab("https://www.kalirejo-magelang.desa.id/First/")
              }
            >
              <FaHouse className="w-full h-1/2" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold pt-6 lg:py-1">
              KKN-PPM UGM Periode II 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
