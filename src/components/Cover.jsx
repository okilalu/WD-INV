import React, { useState } from "react";
import "../App.css";
import PersonImage from "../assets/img/person1.jpg";
import BgImage from "../assets/img/bgnat.jpg";
import Bgcover from "../assets/img/handCover.png";
import { IoIosMail } from "react-icons/io";

export default function Cover({ closeModal }) {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };
  return (
    <div
      className={`${
        isClosing ? "translate-y-full" : "translate-y-0"
      } text-black text-center p-2 h-full w-full flex justify-center items-center bg-center bg-cover transition-all fixed z-50 `}
      style={{
        backgroundImage: `url(${Bgcover})`,
      }}
    >
      <div className="border-4 rounded-4xl p-1 w-full">
        <div className="border-4 rounded-3xl p-9">
          <div className="text-2xl font-semibold uppercase p-2">
            <h1 className="text-lg md:text-xl lg:text-2xl font-[Alta]">
              you are invited
            </h1>
            <h1 className="text-lg md:text-xl lg:text-2xl font-[Alta]">
              to the wedding of
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-full p-2">
            <img src={PersonImage} alt="" className="w-[150px] rounded-2xl" />
          </div>
          <div className="p-2 m-2 flex-1">
            <h1 className="font-semibold font-[Amsterdam] text-3xl flex">
              Doni
            </h1>
            <h1 className="font-semibold font-[Amsterdam] text-3xl">&</h1>
            <h1 className="font-semibold font-[Amsterdam] text-3xl flex justify-end">
              Dira
            </h1>
          </div>
          <div className="p-1 m-1 text-sm font-semibold font-[Alta]">
            <h3>
              Tanpa Mengurangi rasa hormat, kami mengundang bapak/ibu/saudara/i
              untuk hadir di acara kami.
            </h3>
          </div>
          <div className="p-2 flex flex-col gap-1 text-sm">
            <h2 className="font-semibold font-[Alta]">Kepada</h2>
            <h2 className="font-semibold font-[Alta]">Dika</h2>
            <button
              type="button"
              onClick={handleClose}
              className="bg-green-600 capitalize p-2 rounded-md flex self-center mt-3 cursor-pointer"
            >
              <IoIosMail size={28} />
              <h1 className="font-bold p-2 pt-1.5 text-xs">buka undangan</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
