import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = React.useState([]);
  const getData = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getData();
  }, []);

  //Early Return
  if (videos.length === 0) return;

  return (
    <div className="ml-2 flex flex-wrap justify-evenly">
      {videos.map((video) => (
        <div className="flex box basis-1/3 items-center justify-center">
          <Link to={"/watch?v=" + video.id} key={video.id} state={video}>
            <VideoCard item={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
