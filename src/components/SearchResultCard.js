import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
import { formatCount, timeAgo } from "../utils/Helper";

const SearchResultCard = ({ data }) => {
  const [videoStat, setVideoStat] = useState([]);
  const [channelInfo, setChannelInfo] = useState([]);

  const getData = async () => {
    const [res, channelinfo] = await Promise.all([
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=statistics&id=${
          data?.id?.videoId || data?.id?.playlistId
        }`
      ),
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${data?.snippet?.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${YOUTUBE_API_KEY}`
      ),
    ]);
    const json = await res.json();
    const json2 = await channelinfo.json();
    setVideoStat(json?.items[0]?.statistics);
    setChannelInfo(json2.items[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  if (videoStat?.length === 0 || channelInfo.length === 0) return null;

  return (
    <div className="flex mx-5 my-4 rounded-xl p-4 cursor-pointer w-full h-60 hover:bg-gray-100 transition-all duration-200 ease-in-out">
      {/* Larger Thumbnail */}
      <div className="w-[30rem] relative">
        <img
          src={data?.snippet?.thumbnails?.high?.url}
          alt="video thumbnail"
          className="rounded-lg object-cover w-full h-48"
        />
        {/* Optional Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300">
          <div className="h-1 bg-red-600" style={{ width: "40%" }}></div>
        </div> */}
      </div>

      {/* Video Information */}
      <div className="ml-6 flex flex-col justify-start w-full">
        {/* Title */}
        <h1 className="font-bold text-xl leading-6 line-clamp-2">
          {data?.snippet?.title
            .replace(/&#39;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")}
        </h1>

        {/* View Count and Time */}
        <div className="text-gray-500 text-sm my-2">
          <span>{formatCount(videoStat?.viewCount)} views</span>
          <span className="mx-1">&#183;</span>
          <span>{timeAgo(data?.snippet?.publishedAt)}</span>
        </div>

        {/* Channel Info */}
        <div className="flex items-center my-3">
          <img
            className="w-10 h-10 rounded-full"
            src={channelInfo.snippet.thumbnails.high.url}
            alt="channel thumbnail"
          />
          <h1 className="ml-3 text-base text-gray-700 font-semibold">
            {data.snippet.channelTitle}
          </h1>
        </div>

        {/* Video Description */}
        <p className="text-gray-600 text-base leading-snug line-clamp-2">
          {data.snippet?.description}
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
