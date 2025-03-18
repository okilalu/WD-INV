import React from "react";
import { IoHome } from "react-icons/io5";
import { GrGallery, GrUser, GrContact } from "react-icons/gr";

const Menu = () => {
  return (
    <div className="flex justify-center fixed bottom-4 left-1/2 -translate-x-1/2 bg-transparent backdrop-blur-lg shadow-md rounded-full p-1">
      <div className="px-4 py-2 hover:bg-amber-100 rounded-full cursor-pointer">
        <a href="#Home">
          <IoHome size={30} />
        </a>
      </div>
      <div className="px-4 py-2 hover:bg-amber-100 rounded-full cursor-pointer">
        <a href="#Couple">
          <GrUser size={30} />
        </a>
      </div>
      <div className="px-4 py-2 hover:bg-amber-100 rounded-full cursor-pointer">
        <a href="#Date">
          <GrGallery size={30} />
        </a>
      </div>
      <div className="px-4 py-2 hover:bg-amber-100 rounded-full cursor-pointer">
        <a href="#Gallery">
          <GrGallery size={30} />
        </a>
      </div>
      <div className="px-4 py-2 hover:bg-amber-100 rounded-full cursor-pointer">
        <a href="#Gift">
          <GrContact size={30} />
        </a>
      </div>
    </div>
  );
};

export default Menu;
