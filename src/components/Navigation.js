import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);

class Navigation extends Component {
  state = {
    navExpanded: false,
  };

  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    return (
      <div className="position-fixed pl-4 pt-4 z-99">
        <div onClick={this.toggleNav} className="d-flex">
          <FontAwesomeIcon icon={this.state.navExpanded ? 'times' : 'bars'} className="h3 text-light m-0" />
          <p className="mb-0 ml-3 font-weight-bold text-uppercase text-light">Menu</p>
        </div>
        <div className={this.state.navExpanded ? 'dropdown-menu show' : 'd-none'}>
          <a onClick={this.toggleNav} className="dropdown-item font-weight-bold text-uppercase" href="#landing-section">Top</a>
          <a onClick={this.toggleNav} className="dropdown-item font-weight-bold text-uppercase" href="#music-section">Music</a>
          <a onClick={this.toggleNav} className="dropdown-item font-weight-bold text-uppercase" href="#video-section">Video</a>
          <a onClick={this.toggleNav} className="dropdown-item font-weight-bold text-uppercase" href="#events-section">Events</a>
          {
            /*
             * Hide merchandise section for now
             * <a onClick={this.toggleNav} className="dropdown-item font-weight-bold text-uppercase" href="#merch-section">Merch</a>
             */
          }
          <a onClick={this.toggleNav} className="dropdown-item font-weight-bold text-uppercase" href="#contact-section">Inquiries</a>
        </div>
      </div>
    );
  }
}

export default Navigation;
