import React from 'react';
import AnjaliTanejaMusic from '../assets/at_music.jpg';

const Music = () => {
  return (
    <div id="music-section" className="w-100 bg-off-black text-light d-flex flex-wrap justify-content-around">
      <div className="col-12 col-md-6">
        <p>STUFF 1</p>
        </div>
      <div className="col-12 col-md-6 p-0">
        <div className="img-hover z1"></div>
        <img src={AnjaliTanejaMusic} alt="anjali taneja" className="w-100 h-100" />
      </div>
    </div>
  );
}

export default Music;
