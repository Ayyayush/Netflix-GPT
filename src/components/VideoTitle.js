import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center">
      {/* Content */}
      <div
        className="
          px-4 sm:px-8 md:px-16 lg:px-24
          max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
          text-white
        "
      >
        {/* Title */}
        <h1
          className="
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold
            leading-tight
            drop-shadow-lg
          "
        >
          {title}
        </h1>

        {/* Overview */}
        <p
          className="
            mt-3 sm:mt-4 md:mt-6
            text-xs sm:text-sm md:text-base lg:text-lg
            text-gray-200
            leading-relaxed
            line-clamp-3 sm:line-clamp-4
          "
        >
          {overview}
        </p>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
          {/* Play Button */}
          <button
            className="
              flex items-center gap-2
              bg-white text-black
              px-4 sm:px-6
              py-1.5 sm:py-2
              rounded-md
              text-sm sm:text-base
              font-semibold
              hover:bg-gray-200
              transition
            "
          >
            ▶ Play
          </button>

          {/* More Info Button */}
          <button
            className="
              flex items-center gap-2
              bg-gray-600/70 text-white
              px-4 sm:px-6
              py-1.5 sm:py-2
              rounded-md
              text-sm sm:text-base
              font-semibold
              hover:bg-gray-600
              transition
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            More Info
          </button>
        </div>
      </div>

      {/* Netflix left fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />
    </div>
  );
};

export default VideoTitle;
