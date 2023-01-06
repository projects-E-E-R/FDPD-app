import React from 'react';
import StyledBackgoundVideo from './BackgroundVideo.styles';

const BackgroundVideo = ({ videoSource, children }) => {
  return (
    <>
      <StyledBackgoundVideo className="container">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          id="video-id"
          className="video"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </StyledBackgoundVideo>
      {children}
    </>
  );
};

export default BackgroundVideo;

