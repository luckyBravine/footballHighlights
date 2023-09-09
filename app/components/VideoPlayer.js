import { useState } from 'react';

const VideoPlayer = ({ videoSrc, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {isPlaying ? (
        <video
          controls
          autoPlay
          src={videoSrc}
          width="640"
          height="360"
          onClick={togglePlay}
        />
      ) : (
        <img
          src={thumbnailSrc}
          alt="Video Thumbnail"
          onClick={togglePlay}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
