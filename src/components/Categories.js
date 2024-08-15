import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Categories = ({ categories }) => {
  const tabsBoxRef = useRef(null);
  const [activeTab, setActiveTab] = useState("JavaScript");
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const tabsBox = tabsBoxRef.current;
    const handleIcons = () => {
      const maxScrollLeft = tabsBox.scrollWidth - tabsBox.clientWidth;
      setShowLeftIcon(tabsBox.scrollLeft > 0);
      setShowRightIcon(tabsBox.scrollLeft < maxScrollLeft - 1);
    };

    tabsBox.addEventListener("scroll", handleIcons);
    handleIcons();

    return () => {
      tabsBox.removeEventListener("scroll", handleIcons);
    };
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - tabsBoxRef.current.offsetLeft;
    scrollLeft.current = tabsBoxRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - tabsBoxRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast
    tabsBoxRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const scroll = (direction) => {
    const { current } = tabsBoxRef;
    const scrollAmount = 340;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="relative overflow-hidden max-w-[78rem] bg-white rounded-lg p-5 left-0 mr-auto">
      {showLeftIcon && (
        <div className="absolute top-0 left-0 h-full flex items-center bg-gradient-to-r from-white via-white to-transparent">
          <button
            className="w-12 h-12 flex items-center justify-center ml-3 hover:bg-gray-200 rounded-full mr-16"
            onClick={() => scroll("left")}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          </button>
        </div>
      )}
      <ul
        className="flex gap-3 overflow-x-auto scrollbar-hide"
        ref={tabsBoxRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {categories.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer whitespace-nowrap px-5 py-2 rounded-full border ${
              activeTab === tab
                ? "bg-red-600 text-white border-transparent"
                : "bg-gray-100 border-gray-300 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      {showRightIcon && (
        <div className="absolute top-0 right-0 h-full flex items-center bg-gradient-to-l from-white via-white to-transparent">
          <button
            className="w-12 h-12 flex items-center justify-center mr-3 hover:bg-gray-200 rounded-full ml-16"
            onClick={() => scroll("right")}
          >
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;