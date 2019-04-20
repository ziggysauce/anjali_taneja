import React from 'react';
import AnjaliTanejaMusic from '../assets/at_music.jpg';

const Music = () => {
  return (
    <div id="music-section" className="min-vh-100 w-100 bg-dark text-light d-flex justify-content-around">
      <div class="border border-primary col-6">
        <p>STUFF 1</p>
        </div>
      <div class="border border-warning col-6 p-0">
        <img src={AnjaliTanejaMusic} alt="anjali taneja" className="w-100 h-100" />
      </div>
    </div>
  );
}

export default Music;
