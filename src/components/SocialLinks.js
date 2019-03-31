import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope);

class SocialLinks extends Component {
  render() {
    return (
      <div className="w-100 d-flex justify-content-around">
          <FontAwesomeIcon icon={['fab', 'youtube']} />
          <FontAwesomeIcon icon={['fab', 'soundcloud']} />
          <FontAwesomeIcon icon={['fab', 'spotify']} />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          <FontAwesomeIcon icon="envelope" />
      </div>
    );
  }
}

export default SocialLinks;
