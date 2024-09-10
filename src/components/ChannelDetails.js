import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
import Like from "./Like";
import { formatCount } from "../utils/Helper";

const ChannelDetails = ({ item, id }) => {
  const [channelInfo, setChannelInfo] = useState([]);
  const [channelStats, setChannelStats] = useState([]);
  const [stats, setStats] = useState([]);
  const getData = async () => {
    const [channelDetails1, channelDetails2, likeCount] = await Promise.all([
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item?.snippet?.channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${YOUTUBE_API_KEY}`
      ),
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${item?.snippet?.channelId}&key=${YOUTUBE_API_KEY}`
      ),
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=statistics&id=${id}`
      ),
    ]);
    const data1 = await channelDetails1.json();
    const data2 = await channelDetails2.json();
    const data3 = await likeCount.json();

    setChannelInfo(data1.items);
    setChannelStats(data2.items);
    setStats(data3.items);
  };
  useEffect(() => {
    getData();
  }, []);
  if (channelStats.length === 0) return;
  return (
    <>
      <div className="mt-4">
        <h1 className="font-bold text-xl mt-2">
          {item?.snippet?.localized?.title}
        </h1>
        <div className="flex items-center mt-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              alt="channel IMG"
              src={channelInfo[0]?.snippet?.thumbnails?.default?.url}
            />
            <div className="mx-3">
              <h2 className="font-medium text-lg">
                {item?.snippet?.channelTitle}
              </h2>
              <h1 className="font-medium text-gray-500">
                {formatCount(channelStats[0].statistics.subscriberCount) +
                  " subscribers"}
              </h1>
            </div>
            <button className="p-2 w-16 bg-black text-white mx-2 rounded-l-full rounded-r-full">
              Join
            </button>
            <button className="p-2 w-24 mx-1 flex items-center justify-center mr-3 hover:bg-gray-300 rounded-full bg-gray-200">
              Subscribe
            </button>
          </div>
          <div className="flex items-center h-10 mx-2 divide-slate-300 divide-x">
            <div className="flex items-center rounded-l-3xl p-1 border h-10 bg-slate-200 w-24">
              <span className="ml-3 mr-1">
                <Like />
              </span>
              <h1 className="mr-2">
                {formatCount(stats[0].statistics.likeCount)}
              </h1>
            </div>
            <div className="rounded-r-3xl bg-slate-200 w-16 h-[40px] flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/013/463/original/dislike-icon-on-transparent-background-free-png.png"
                alt="dislike"
                className="w-8"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
    </>
  );
};

export default ChannelDetails;
