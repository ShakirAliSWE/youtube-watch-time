"use client";
import React, { useState } from "react";
import Image from "next/image";
import VideoPlayer from "@/app/components/VideoPlayer";

const YoutTubeWatchTime = () => {
  const [url, setURL] = useState(null);
  const [views, setViews] = useState(0);
  const [videos, setVideos] = useState([]);

  const handlerInputURL = (e) => {
    setURL(e.target.value);
  };

  const handlerInputViews = (e) => {
    setViews(parseInt(e.target.value));
  };

  const handlerSubmit = () => {
    if (!url) {
      window.alert("Please enter a URL");
      return false;
    }

    if (!views || views === 0) {
      window.alert("Please enter valid views");
      return false;
    }

    let videosPush = [];
    let videoId = url.split("?v=")[1];
    [...Array(views)].map(() => videosPush.push(videoId));
    setVideos(videosPush);
  };

  return (
    <div className="d-flex mb-2 flex-column gap-2">
      <div className="d-flex justify-content-center flex-wrap mb-2 gap-2">
        <div className="flex-grow-1">
          <label htmlFor="url" className="form-label fw-bold">
            Enter Youtube URL
          </label>
          <input
            id="url"
            type="url"
            className="form-control"
            placeholder="https://youtube.com/"
            value={url ?? ""}
            onChange={handlerInputURL}
          />
        </div>
        <div className="">
          <label htmlFor="watches" className="form-label fw-bold">
            Enter No# of Watches
          </label>
          <input
            id="watches"
            type="number"
            className="form-control"
            placeholder="2"
            min={1}
            value={views ?? ""}
            onChange={handlerInputViews}
          />
        </div>
        <div className="d-flex align-items-end">
          <input
            id="submit"
            type="button"
            className="btn btn-primary"
            value="Click to Proceed"
            onClick={handlerSubmit}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap mb-2 gap-2">
        {videos.map((videoId, i) => (
          <div key={i}>
            <VideoPlayer id={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutTubeWatchTime;
