"use client";

import VideoModal from "@/components/VideoModal";
import { createContext, useContext, useState } from "react";

const VideoPlayerContext = createContext();

export const VideoPlayerProvider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const showVideo = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const hideVideo = () => {
    setVideoUrl("");
    setIsOpen(false);
  };

  return (
    <VideoPlayerContext.Provider value={{ showVideo, hideVideo }}>
      {children}
      <VideoModal isOpen={isOpen} videoUrl={videoUrl} onClose={hideVideo} />
    </VideoPlayerContext.Provider>
  );
};

export const useVideo = () => useContext(VideoPlayerContext);
