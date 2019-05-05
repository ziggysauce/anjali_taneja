import React, { Component } from 'react';
import { SocialLinks } from '../components';
import AnjaliTanejaContact from '../assets/at_contact.jpg';

class Contact extends Component {
  state = {
    submitMsg: false,
    errorMsg: false,
  }

  submitForm = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyxieKl8F0Hls0JfM9HtBM6NDFso2t8X4QJITy1rp3od1HGkFdM/exec';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const form = document.querySelector('.contact-form');
    const formData = {};
    formData.name = document.querySelector('#contact-name').value.length > 0
      ? document.querySelector('#contact-name').value
      : 'n/a';
    formData.email = document.querySelector('#contact-email').value.length > 0
      ? document.querySelector('#contact-email').value
      : 'n/a';
    formData.subject = document.querySelector('#contact-subject').value.length > 0
      ? document.querySelector('#contact-subject').value
      : 'n/a';
    formData.message = document.querySelector('#contact-message').value.length > 0
      ? document.querySelector('#contact-message').value
      : 'n/a';
    if(formData.email === 'n/a' || formData.message === 'n/a') {
      this.setState({ errorMsg: true });
    } else {
      this.setState({ errorMsg: false });
      fetch(`${proxyUrl}${scriptURL}?${formData.name},_==_,${formData.email},_==_,${formData.subject},_==_,${formData.message}`, {
        method: 'POST',
      }).then((res) => {
        console.log(res);
        this.setState({ submitMsg: !this.state.submitMsg });
        setTimeout(() => {
          this.setState({ submitMsg: !this.state.submitMsg });
          form.reset();
        }, 5000);
      }).catch((error) => {
        console.error('Error!', error.message);
        alert('Sorry, there was an error while trying to send your message.');
      });
    }
  }

  render() {
    return (
      <div id="contact-section" className="w-100 text-light d-flex flex-column justify-content-between align-items-center">
        <div className="w-100 d-flex flex-column flex-md-row justify-content-center align-items-center bg-salmon text-light">
          <div className="col-12 col-md-6 h-100 px-3 d-flex flex-column justify-content-center align-items-center py-5">
            <h2 className="text-uppercase font-weight-bold display-4 mb-5">Inquiries</h2>
            <form className="w-75 contact-form" name="submit-to-google-sheet">
              <div className="form-group">
                <input id="contact-name" name="name" className="form-control px-0" placeholder="Name" type="text" />
              </div>
              <div className="form-group">
                <input id="contact-email" name="email_address" className="form-control px-0" placeholder="Email" type="email" />
              </div>
              <div className="form-group">
                <input id="contact-subject" name="subject" className="form-control px-0" placeholder="Subject" type="text" />
              </div>
              <div className="form-group">
                <textarea id="contact-message" name="message" className="form-control px-0" placeholder="Message..." rows="2"></textarea>
              </div>
              <button onClick={this.submitForm} type="submit" className="btn btn-white btn-lg rounded-0 font-weight-bold text-uppercase">Submit</button>
            </form>
            <h4 className={this.state.submitMsg ? 'd-flex mt-3' : 'd-none'}>Thank you! Your message has been sent.</h4>
            <h5 className={this.state.errorMsg ? 'd-flex mt-3' : 'd-none'}>Please enter a valid email and message.</h5>
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
