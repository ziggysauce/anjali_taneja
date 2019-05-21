import React from 'react';

const Video = () => {
  return (
    <div class="bg-black">
      <h2 class="font-weight-bold text-uppercase text-white my-0 py-4 display-4">Videos</h2>
      <iframe src="https://www.youtube.com/embed/fTT4OK_OrnA"
        className="w-100 min-vh mb-5"
        title="Anjali Taneja x Pav Dharia YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      <iframe src="https://www.youtube.com/embed/fCnCZvr2S7s"
        className="w-100 min-vh mb-5"
        title="Anjali Taneja YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default Video;
