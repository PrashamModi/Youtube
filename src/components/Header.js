import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import {
  YOUTUBE_LOGO_IMG,
  MIC_IMAGE,
  NOTIFICATION_ICON,
  USER_PNG,
  YOUTUBE_SEARCH_SUGGESTION,
} from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { setCategory } from "../utils/categorySlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const dispath = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const getSearchQueryData = async () => {
    console.log("API call " + searchText);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchText);
    const json = await data.json();
    setSuggestions(json[1]);

    dispath(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };
  const handleSearchClick = async (e) => {
    e.preventDefault();
    navigate("/search", { state: { info: searchText } });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchQueryData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="grid grid-flow-col bg-white p-5 m-1 h-16 content-center sticky top-0 z-50">
      {/* This is the left portion */}
      <div className="flex items-center col-span-1">
        <Hamburger />
        <Link to={"/"}>
          <img
            className="h-14 cursor-pointer mx-2"
            src={YOUTUBE_LOGO_IMG}
            alt="logo"
            onClick={() => {
              setSearchText("");
              dispath(setCategory(""));
            }}
          />
        </Link>
      </div>
      <div className="col-span-10">
        {/* This is middle top */}
        <div className="flex items-center w-auto">
          <input
            className="w-1/2 ml-32 h-12 rounded-l-3xl border p-3 active:border-blue-900 focus:outline-none focus:border-blue-500 pl-6 font-sans"
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={(e) => {
              e.target.style.boxShadow = "10px 0 10px rgba(30, 144, 255, 0.5)";
              setShowSuggestions(true);
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = "none";
              setTimeout(() => setShowSuggestions(false), 200);
            }}
          />
          <button
            className="w-16 h-12 border rounded-r-3xl bg-slate-100 items-center justify-center"
            onClick={handleSearchClick}
          >
            <img
              src="https://www.svgrepo.com/show/7109/search.svg"
              alt=""
              className="h-8 w-6 items-center ml-5"
            />
          </button>
          <div className="relative group ml-5">
            <img
              className="h-12 p-3 rounded-full bg-gray-100 shadow-lg cursor-pointer"
              src={MIC_IMAGE}
              alt="mic"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-2 text-sm w-40 z-10  bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Search with your voice
            </span>
          </div>
        </div>
        {/* This is the suggestions portion */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="border rounded-lg py-2 border-gray-100 fixed z-10 bg-white ml-32 w-[33.4rem] my-1 shadow-lg">
            <ul>
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    className="py-2 px-4 text-black font-medium shadow-sm hover:bg-gray-200"
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchText(suggestion);
                      navigate("/search", { state: { info: suggestion } });
                    }}
                  >
                    <span>🔍 {suggestion}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* This is the right portion */}
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
