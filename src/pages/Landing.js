import React, { Component } from 'react';
import { SocialLinks } from '../components';
import AnjaliTanejaLogo from '../assets/anjali_taneja_logo.png';
// import ATLanding from '../assets/at_landing.jpg';

class Landing extends Component {
  render() {
    return (
      <div id="landing-section" className="min-vh-100 w-100 d-flex">
        <div className="position-absolute w-100 d-flex justify-content-end">
          <SocialLinks></SocialLinks>
        </div>
        <div className="d-flex flex-column flex-md-row w-100">
          <div className="w-100 h-100 d-flex flex-column justify-content-end bg-landing-img">
            {/*<img src={ATLanding} alt="anjali taneja" className="w-100" />*/}
          </div>
          <div className="w-100 h-100 bg-gradient d-none d-md-flex flex-column justify-content-center align-items-center">
            <img src={AnjaliTanejaLogo} alt="anjali taneja logo" className="w-50" />
            <h1 className="pt-3 font-weight-bold text-uppercase text-light">Anjali Taneja</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
