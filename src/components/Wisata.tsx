import React, { useState, useMemo } from "react";
import {
  FaCalendarDays,
  FaMapLocationDot,
  FaTicket,
  FaTents,
} from "react-icons/fa6";
import { Bg, GG1, GG2, GG3, GG4, GG5 } from "../../public/assets";
import Image from "next/image";
// import { useFetch } from "../helpers/useFetch";

const Wisata = () => {
  // const { data: wisataData } = useFetch("/wisata");

  // const [wisata, setWisata] = useState([]);
  // useMemo(() => {
  //   if (!wisataData?.data?.data) return;
  //   setWisata(wisataData.data.data.wisata);
  // }, [wisataData]);

  // function rupiahFormatter(num) {
  //   return "Rp" + num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // }

  return (
    <div className="flex flex-col text-4xl font-bold gap-4 w-full mx-auto text-green-dark">
      Bukit Grhadika Garden
      <div className="grid grid-cols-auto gap-4 ">
        <div className="relative h-[480px]">
          <Image
            alt=""
            src="/assets/bukitgg1.jpg"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
          />
        </div>
        <div className="relative h-[480px]">
          <Image
            alt=""
            src="/assets/bukitgg4.jpg"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between w-full gap-4">
        <div className="bg-green-dark flex flex-col text-lg font-normal text-white p-4 text-start lg:w-[30%] gap-4 rounded-lg">
          {/* {wisata.map((item) => (
            <div key={item._id} className="flex flex-col gap-4">
              <a className="font-bold text-2xl">{item.nama}</a>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <FaMapLocationDot /> Lokasi
                </div>
                {item.lokasi}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <FaTicket /> Harga Tiket Masuk
                </div>
                {rupiahFormatter(item.htm)}/orang
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <FaCalendarDays /> Jam Buka
                </div>
                {item.jam}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <FaTents /> Fasilitas
                </div>
                {item.fasilitas.split(", ").map(function (item, key) {
                  return (
                    <span key={key}>
                      - {item}
                      <br />
                    </span>
                  );
                })}
              </div>
            </div>
          ))} */}
        </div>
        <iframe
          className="lg:w-[70%] h-[50vh] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15818.456683504251!2d110.1320134!3d-7.6168929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a93f9e33f44e5%3A0xf886fa8199c6a60!2sBukit%20%22GG%22%20(Grhadika%20Garden)!5e0!3m2!1sen!2sid!4v1689642859651!5m2!1sen!2sid"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="umkm" className="h-16"></div>
    </div>
  );
};

export default Wisata;
