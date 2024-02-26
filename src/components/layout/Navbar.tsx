"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [scroll, setScroll] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeClass);
  }

  return (
    <div className="navbar">
      <div
        className={
          "navbar bg-white transform duration-300 ease " +
          (scroll ? "opacity-100 " : "lg:h-24 opacity-0 ")
        }
      ></div>
      <div
        className={
          "z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
          "justify-between transform duration-300 ease overflow-hidden " +
          (scroll ? "h-16" : "lg:h-24 h-16")
        }
      >
        <Link href={"/"}>
          <button className="flex flex-row justify-start items-center h-full">
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
        </Link>
        <div className="lg:flex flex-row hidden gap-6">
          <Button
            size="lg"
            className="text-green-dark font-semibold"
            variant="light"
          >
            Beranda
          </Button>
          <Button
            size="lg"
            className="text-green-dark font-semibold"
            variant="light"
          >
            Wisata
          </Button>
          {session ? (
            <Link href={"/api/auth/signout"}>
              <Button
                size="lg"
                className="text-green-dark font-semibold"
                variant="ghost"
              >
                Sign Out
              </Button>
            </Link>
          ) : (
            <Link href={"/admin"}>
              <Button
                size="lg"
                className="text-green-dark font-semibold"
                variant="ghost"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
