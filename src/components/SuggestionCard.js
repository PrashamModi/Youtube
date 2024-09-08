import React from "react";
import { useNavigate } from "react-router-dom";

const SuggestionCard = ({ suggestion }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clickeddddd");
    navigate("search");
  };
  return (
    <li
      className="py-2 px-4 text-black font-medium shadow-sm hover:bg-gray-200"
      onClick={(e) => handleClick}
    >
      <span>🔍 {suggestion}</span>
    </li>
  );
};

export default SuggestionCard;
