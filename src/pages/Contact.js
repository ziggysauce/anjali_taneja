import React, { Component } from 'react';
import { SocialLinks } from '../components';

class Contact extends Component {
  render() {
    return (
      <div id="contact-section" className="min-vh-100 w-100 bg-salmon text-light d-flex flex-column justify-content-between align-items-center">
        <div className="w-100 vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center bg-salmon text-light">
          <div className="col-12 col-md-6 h-100 d-flex flex-column">ABOUT</div>
          <div className="col-12 col-md-6 h-100 bg-aqua px-3 d-flex flex-column justify-content-center">
            <h2>Inquiries</h2>
            <form>
              <div className="form-group">
                <label className="text-light w-100 text-left" htmlFor="contact-name">Name</label>
                <input id="contact-name" className="form-control" placeholder="name" type="text" />
              </div>
              <div className="form-group">
                <label className="text-light w-100 text-left" htmlFor="contact-email">Email</label>
                <input id="contact-email" className="form-control" placeholder="name" type="email" />
              </div>
              <div className="form-group">
                <label className="text-light w-100 text-left" htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" className="form-control" placeholder="name" type="text" />
              </div>
              <div className="form-group">
                <label className="text-light w-100 text-left" htmlFor="contact-message">Message...</label>
                <textarea id="contact-message" className="form-control" rows="3"></textarea>
              </div>
              <button className="btn font-weight-bold text-uppercase">Submit</button>
            </form>
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
