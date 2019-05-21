import React from 'react';
import { SocialLinks } from '../components';
import AnjaliTanejaLanding from '../assets/at_landing.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

const Landing = () => {
  return (
    <div id="landing-section" className="w-100 d-flex">
      <div className="position-absolute z1 w-100 d-flex justify-content-end px-2">
        <SocialLinks></SocialLinks>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="col-12 col-md-6 p-0 h-100 d-flex flex-column justify-content-end bg-salmon">
          <div className="img-hover">
            <img src={AnjaliTanejaLanding} alt="anjali taneja" className="w-100" />
            <small className="photo-cred">Photo By: Jordann Smith</small>
          </div>
          <h1 className="position-absolute pt-3 font-weight-bold text-uppercase text-light display-4 d-flex d-md-none landing-name">Anjali Taneja</h1>
        </div>
        <div className="col-12 col-md-6 h-100 bg-gradient d-none d-md-flex flex-column justify-content-center align-items-center">
          <h1 className="pt-3 font-weight-bold text-uppercase text-light display-4">Anjali Taneja</h1>
          <a href="/" class="btn btn-link">
            <span class="h2 pr-3">Listen Now</span>
            <span class="h4"><FontAwesomeIcon icon="arrow-right" /></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
