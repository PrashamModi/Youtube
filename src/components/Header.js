import React from "react";
import Hamburger from "./Hamburger";
import {
  YOUTUBE_LOGO_IMG,
  MIC_IMAGE,
  NOTIFICATION_ICON,
  USER_PNG,
} from "../utils/constant";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 m-1 shadow-lg h-20 content-center">
      <div className="flex items-center col-span-1">
        <Hamburger />
        <img
          className="h-14 cursor-pointer mx-2"
          src={YOUTUBE_LOGO_IMG}
          alt="logo"
        />
      </div>
      <div className="flex items-center col-span-10">
        <input
          className="w-1/2 ml-32 rounded-l-3xl border p-3 active:border-blue-900 focus:outline-none focus:border-blue-500"
          placeholder="Search"
          type="text"
          onFocus={(e) => {
            e.target.style.boxShadow = "10px 0 10px rgba(30, 144, 255, 0.5)";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = "none";
          }}
        />
        <button className="p-3 w-14 border rounded-r-3xl bg-slate-400">
          🔍
        </button>
        <div className="relative group ml-5">
          <img
            className="h-12 p-3 rounded-full bg-gray-400 shadow-lg cursor-pointer"
            src={MIC_IMAGE}
            alt="mic"
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-2 text-sm w-40 z-10  bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Search with your voice
          </span>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-around">
        <img
          className="h-10 cursor-pointer "
          src={NOTIFICATION_ICON}
          alt="notifcation"
        />
        <img className="h-10 cursor-pointer" src={USER_PNG} alt="user" />
      </div>
    </div>
  );
};

export default Header;
