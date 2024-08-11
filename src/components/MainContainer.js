import React from "react";
import Categories from "./Categories";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_CATEGORY_LIST } from "../utils/constant";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <div className="flex">
        {YOUTUBE_CATEGORY_LIST.map((category, index) => (
          <Categories name={category} key={index}/>
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
