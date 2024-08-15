import React from "react";

const WatchVideo = ({ id }) => {
  return (
    <div className="shadow-2xl">
      <iframe
        width="1200"
        height="500"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default WatchVideo;
