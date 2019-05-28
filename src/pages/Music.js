import React from 'react';
import AnjaliTanejaMusic from '../assets/at_music.jpg';

const Music = () => {
  return (
    <div id="music-section" className="w-100 bg-black text-light d-flex flex-wrap justify-content-around">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center py-2">
        <h2 className="font-weight-bold text-uppercase my-4 display-4">Music</h2>
        <iframe title="Anjali Taneja Soundcloud Playlist"
          width="100%"
          height="300"
          scrolling="e"
          frameBorder="no"
          allow="autoplay"
          src="https://open.spotify.com/embed/artist/1A7CIDrLklSiVgGJjdhdDX">
        </iframe>
      </div>
      <div className="col-12 col-md-6 p-0 bg-salmon d-none d-md-flex">
        <div className="img-hover">
          <img src={AnjaliTanejaMusic} alt="anjali taneja" className="w-100" />
          <small className="photo-cred">Photo By: Jordann Smith</small>
        </div>
      </div>
    </div>
  );
}

export default Music;
