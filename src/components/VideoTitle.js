import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 pt-36 px-12 text-white">
      <h1 className="text-6xl font-bold">{title}</h1>

      <p className="py-6 text-lg w-1/2">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="bg-gray-500 text-black px-6 py-2 rounded-lg font-semibold">
          ▶ Play
        </button>

        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
