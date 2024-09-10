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
    console.log(json2);

    setChannelStats(json2?.items[0]?.statistics);
  };
  useEffect(() => {
    getData();
  }, []);
  if (channelInfo.length === 0 || channelStats.length === 0) return;
  return (
    <div className="shadow-2xl rounded-xl p-1 cursor-pointer m-3 transform transition-transform duration-75 hover:scale-110 w-96">
      <div className="flex p-1 items-center justify-center">
        <img
          className="w-full h-48 shadow-lg rounded-xl"
          src={
            item?.snippet?.thumbnails?.maxres
              ? item?.snippet?.thumbnails?.maxres?.url
              : item?.snippet?.thumbnails?.high?.url
          }
          alt=""
        />
      </div>
      <hr className="border-1 border-gray-400 m-3 w-auto" />
      <div className="ml-4">
        <div className="flex items-start">
          <img
            className="w-20 h-8 rounded-full"
            alt="channel IMG"
            src={channelInfo[0]?.snippet?.thumbnails?.default?.url}
          />
          <h1 className="font-semibold text-base mx-2">
            {item?.snippet?.localized
              ? item?.snippet?.localized?.title
              : item?.snippet?.title}
          </h1>
        </div>
        <div className="mx-12">
          <h1 className="font-medium text-sm text-gray-500">
            {item?.snippet?.channelTitle}
          </h1>
          <div className="flex ">
            <h3 className="inline font-medium text-sm text-gray-500">
              {formatCount(
                item?.statistics
                  ? item?.statistics?.viewCount
                  : channelStats?.viewCount
              )}{" "}
              views
            </h3>
            <span className="mx-2">•</span>
            <h4 className="font-medium text-sm text-gray-500">
              {timeAgo(item?.snippet?.publishedAt)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
