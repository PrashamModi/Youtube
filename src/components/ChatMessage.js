import React from "react";
import { USER_PNG } from "../utils/constant";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 space-x-2 shadow-md">
      {/* User Image */}
      <img
        className="h-8 w-8 rounded-full cursor-pointer"
        src="https://assets.mofoprod.net/network/images/discord.original.jpg"
        alt="user"
      />
      {/* User Name and Message */}
      <div className="flex flex-col">
        <span className="font-medium text-sm text-black">{name}</span>
        <span className="text-sm text-black">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
