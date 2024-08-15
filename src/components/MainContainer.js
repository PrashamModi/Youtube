import React from "react";
import Categories from "./Categories";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_CATEGORY_LIST } from "../utils/constant";

const MainContainer = () => {
  return (
    <div className="col-span-11 ml-28">
      <Categories categories={YOUTUBE_CATEGORY_LIST}/>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
