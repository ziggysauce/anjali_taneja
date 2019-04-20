import React from 'react';

const Video = () => {
  return (
    <div id="video-section" className="min-vh-100 w-100 bg-dark text-light d-flex justify-content-around">
      <iframe src="https://www.youtube.com/embed/fCnCZvr2S7s"
        className="w-100"
        title="Anjali YouTube Video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default Video;
