import React, { useEffect, useState } from "react";
import { YOUTUBE_CATEGORY_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const CategoryContainer = ({ tab }) => {
  const [videos, setVideos] = useState([]);
  const getData = async () => {
    const response = await fetch(YOUTUBE_CATEGORY_API + tab);
    const json = await response.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getData();
  }, [tab]);
  if (videos.length === 0) return;
  return (
    <div className="ml-2 flex flex-wrap">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.id.videoId}
          key={video.id.videoId}
          state={video}
        >
          <VideoCard item={video} />
        </Link>
      ))}
    </div>
  );
};

export default CategoryContainer;
