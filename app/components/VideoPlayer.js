"use client";
import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ id }) => {
  const opts = {
    height: "200",
    width: "350",
    playerVars: {
      autoplay: 1,
    },
  };
  return <YouTube videoId={id} opts={opts} />;
};

export default VideoPlayer;
