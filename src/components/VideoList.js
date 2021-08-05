import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //   console.log(props.videos);
  const renderedListVideo = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.VideoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedListVideo}</div>;
};

export default VideoList;
