import React from 'react';
import AnjaliTanejaMusic from '../assets/at_music.jpg';

const Music = () => {
  return (
    <div id="music-section" className="w-100 bg-black text-light d-flex flex-wrap justify-content-around">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h2>Listen Now</h2>
        <iframe title="Anjali Taneja Soundcloud Playlist"
          width="100%"
          height="300"
          scrolling="e"
          frameborder="no"
          allow="autoplay"
          src="https://open.spotify.com/embed/artist/1A7CIDrLklSiVgGJjdhdDX">
        </iframe>
      </div>
      <div className="col-12 col-md-6 p-0 bg-salmon">
        {/*<div className="img-hover z1"></div>
        <img src={AnjaliTanejaMusic} alt="anjali taneja" className="w-100 h-100" />*/}
        <div className="img-hover">
          <img src={AnjaliTanejaMusic} alt="anjali taneja" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default Music;
