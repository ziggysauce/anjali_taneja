import React from 'react';

const Video = () => {
  return (
    <div id="video-section" className="min-vh w-100 bg-salmon text-light d-flex justify-content-around">
      <iframe src="https://www.youtube.com/embed/fCnCZvr2S7s"
        className="w-100"
        title="Anjali YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default Video;
