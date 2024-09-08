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
  if (videoStat?.length === 0 || channelInfo.length === 0) return;
  return (
    <div className="flex mx-5 my-4 shadow-lg rounded-xl p-2 cursor-pointer h-72">
      <img
        src={data?.snippet?.thumbnails?.high?.url}
        alt="tag"
        className="rounded-xl object-fill w-auto"
      />
      <div className="mx-7">
        <h1 className="font-medium text-2xl">{data?.snippet?.title}</h1>
        <span className="font-medium text-gray-600">
          {formatCount(videoStat?.viewCount)}
        </span>
        <span className="mx-2 font-bold text-2xl">&#183;</span>
        <span className="font-medium text-gray-600">
          {timeAgo(data?.snippet?.publishedAt)}
        </span>
        <div className="flex my-4 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={channelInfo.snippet.thumbnails.high.url}
            alt=""
          />
          <h1 className="mx-2 font-semibold">{data.snippet.channelTitle}</h1>
        </div>
        <p className="font-light my-2">{data.snippet?.description}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
