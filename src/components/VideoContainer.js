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
    console.log(json);
  };
  useEffect(() => {
    getData();
  }, []);

  //Early Return
  if (videos.length === 0) return;

  return (
    <div className="ml-2 flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          {console.log(video)}
          <VideoCard item={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
