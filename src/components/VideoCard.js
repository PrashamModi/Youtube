import React, { useEffect, useState } from "react";
import { timeAgo, formatCount } from "../utils/Helper";
import { YOUTUBE_API_KEY } from "../utils/constant";

const VideoCard = ({ item }) => {
  const [channelInfo, setChannelInfo] = useState([]);
  const [channelStats, setChannelStats] = useState([]);

  const getData = async () => {
    const [data, data2] = await Promise.all([
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item?.snippet?.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${YOUTUBE_API_KEY}`
      ),
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=statistics&id=${
          item.id.videoId ? item.id.videoId : item.id
        }`
      ),
    ]);
    const json = await data.json();
    const json2 = await data2.json();
    setChannelInfo(json.items);
    setChannelStats(json2?.items[0]?.statistics);
  };

  useEffect(() => {
    getData();
  }, []);

  if (channelInfo.length === 0 || channelStats.length === 0) return null;

  return (
    <div className="w-[20rem] cursor-pointer p-2 m-2 hover:bg-gray-100 rounded-lg transition-transform duration-200 hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-[11.25rem] object-cover rounded-lg"
          src={
            item?.snippet?.thumbnails?.maxres
              ? item?.snippet?.thumbnails?.maxres?.url
              : item?.snippet?.thumbnails?.high?.url
          }
          alt=""
        />
      </div>
      <div className="flex mt-3">
        <img
          className="w-9 h-9 rounded-full mr-3"
          alt="channel IMG"
          src={channelInfo[0]?.snippet?.thumbnails?.default?.url}
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold text-black line-clamp-2">
            {item?.snippet?.localized
              ? item?.snippet?.localized?.title
              : item?.snippet?.title}
          </h1>
          <h2 className="text-xs text-gray-500 mt-1">
            {item?.snippet?.channelTitle}
          </h2>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <span>
              {formatCount(
                item?.statistics
                  ? item?.statistics?.viewCount
                  : channelStats?.viewCount
              )}{" "}
              views
            </span>
            <span className="mx-1">•</span>
            <span>{timeAgo(item?.snippet?.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
