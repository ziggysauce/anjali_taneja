import React, { Component } from 'react';
import { SocialLinks } from '../components';
import AnjaliTanejaContact from '../assets/at_contact.jpg';

class Contact extends Component {
  render() {
    return (
      <div id="contact-section" className="w-100 text-light d-flex flex-column justify-content-between align-items-center">
        <div className="w-100 d-flex flex-column flex-md-row justify-content-center align-items-center bg-salmon text-light">
          <div className="col-12 col-md-6 h-100 px-3 d-flex flex-column justify-content-center align-items-center py-5">
            <h2 className="text-uppercase font-weight-bold display-4 mb-5">Inquiries</h2>
            <form className="w-75">
              <div className="form-group">
                <input id="contact-name" className="form-control px-0" placeholder="Name" type="text" />
              </div>
              <div className="form-group">
                <input id="contact-email" className="form-control px-0" placeholder="Email" type="email" />
              </div>
              <div className="form-group">
                <input id="contact-subject" className="form-control px-0" placeholder="Subject" type="text" />
              </div>
              <div className="form-group">
                <textarea id="contact-message" className="form-control px-0" placeholder="Message..." rows="2"></textarea>
              </div>
              <button className="btn btn-white btn-lg rounded-0 font-weight-bold text-uppercase">Submit</button>
            </form>
          </div>
          <div className="col-12 col-md-6 h-100 p-0 bg-salmon d-none d-md-flex">
            <div className="img-hover">
              <img src={AnjaliTanejaContact} alt="anjali taneja" className="w-100" />
              <small className="photo-cred">Photo By: Justin Lamar</small>
            </div>
          </div>
        </div>
        <div className="w-100 bg-off-black d-flex justify-content-between align-items-center px-3">
          <p className="mb-0 text-light font-weight-bold text-uppercase pl-3">Anjali Taneja</p>
          <SocialLinks></SocialLinks>
        </div>
      </div>
    );
  }
}

export default Contact;
