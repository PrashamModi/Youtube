import React from "react";
import Categories from "./Categories";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_CATEGORY_LIST } from "../utils/constant";
import { useSelector } from "react-redux";
import CategoryContainer from "./CategoryContainer";

const MainContainer = () => {
  const activeTab = useSelector((store) => store.category.activeCategory);
  return (
    <div className="col-span-11 mx-14">
      <Categories categories={YOUTUBE_CATEGORY_LIST} />
      {activeTab === "" ? (
        <VideoContainer />
      ) : (
        <CategoryContainer tab={activeTab} />
      )}
    </div>
  );
};

export default MainContainer;
