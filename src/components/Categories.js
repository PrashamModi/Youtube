import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_CATEGORY_LIST_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/categorySlice";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const tabsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const dispatch = useDispatch();
  let isDragging = false;

  const getData = async () => {
    const data = await fetch(YOUTUBE_CATEGORY_LIST_API);
    const json = await data.json();
    setCategoryList(json.items);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    };

    const tabs = tabsRef.current;
    if (tabs) {
      tabs.addEventListener("scroll", handleScroll);
      return () => tabs.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollRight = () => {
    tabsRef.current.scrollLeft += 200;
  };

  const scrollLeft = () => {
    tabsRef.current.scrollLeft -= 200;
  };

  const startDrag = (e) => {
    isDragging = true;
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    tabsRef.current.scrollLeft -= e.movementX;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  if (categoryList.length === 0) return null;

  return (
    <div className="relative w-auto mx-auto py-3 text-black rounded-md overflow-hidden top-0">
      {/* Left Arrow */}
      {canScrollLeft && (
        <div className="absolute inset-y-0 left-0 flex items-center bg-gradient-to-r from-white to-transparent z-50 w-20 pointer-events-none">
          <button
            onClick={scrollLeft}
            className="pointer-events-auto p-2 rounded-full bg-white hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Category List */}
      <ul
        ref={tabsRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide px-4"
        onMouseDown={startDrag}
        onMouseMove={handleDragging}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {categoryList.map((category, index) => (
          <li key={index}>
            <button
              className={`${
                activeTab === category.snippet.title
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } py-2 px-4 font-medium rounded-md text-sm whitespace-nowrap`}
              onClick={() => {
                setActiveTab(category.snippet.title);
                dispatch(setCategory(category.snippet.title));
              }}
            >
              {category.snippet.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Right Arrow */}
      {canScrollRight && (
        <div className="absolute inset-y-0 right-2 flex items-center bg-gradient-to-r from-transparent to-white w-16 z-50 pointer-events-none">
          <button
            onClick={scrollRight}
            className="pointer-events-auto p-2 rounded-full bg-white hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
