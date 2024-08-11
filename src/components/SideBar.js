import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log("MenuCalled");
  
  //Early Return
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="col-span-1 shadow-lg w-48">
      <ul className="text-center">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <hr className="border-1 border-gray-400 m-3 w-auto" />
        <h1 className="font-bold">YOU &gt;</h1>
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <hr className="border-1 border-gray-400 m-3 w-auto" />
        <h1 className="font-bold">Subscriptions</h1>
        <li>Samay Raina</li>
        <li>Samay Raina</li>
        <li>Samay Raina</li>
        <hr className="border-1 border-gray-400 m-3 w-auto" />
        <h1 className="font-bold">Subscriptions</h1>
        <li>Samay Raina</li>
        <li>Samay Raina</li>
        <li>Samay Raina</li>
        <hr className="border-1 border-gray-400 m-3 w-auto" />
        <h1 className="font-bold">Subscriptions</h1>
        <li>Samay Raina</li>
        <li>Samay Raina</li>
        <li>Samay Raina</li>
      </ul>
    </div>
  );
};

export default SideBar;
