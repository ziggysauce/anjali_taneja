import React from 'react';

const Video = () => {
  return (
    <div className="bg-black">
      <h2 className="font-weight-bold text-uppercase text-white my-0 py-4 display-4">Videos</h2>
      <iframe src="https://www.youtube.com/embed/fTT4OK_OrnA"
        className="w-100 min-vh mb-5"
        title="Anjali Taneja x Pav Dharia YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      <iframe src="https://www.youtube.com/embed/iXSxrdQIHFU"
        className="w-100 min-vh mb-5"
        title="Anjali Taneja - Got It"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      <iframe src="https://www.youtube.com/embed/1hkS3pZYtks"
        className="w-100 min-vh mb-5"
        title="Anjali Taneja - Live"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default Video;
