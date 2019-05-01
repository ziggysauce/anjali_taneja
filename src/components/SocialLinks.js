import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope);

class SocialLinks extends Component {
  render() {
    return (
      <div className="py-3 px-1">
        <a className="btn-link mx-2 social-link-font" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC0YR1lAzR7urd2Tvvu6KDGQ">
          <FontAwesomeIcon icon={['fab', 'youtube']} />
        </a>
        <a className="btn-link mx-2 social-link-font" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/anjalixmusic">
          <FontAwesomeIcon icon={['fab', 'soundcloud']} />
        </a>
        <a className="btn-link mx-2 social-link-font" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/1A7CIDrLklSiVgGJjdhdDX">
          <FontAwesomeIcon icon={['fab', 'spotify']} />
        </a>
        <a className="btn-link mx-2 social-link-font" target="_blank" rel="noopener noreferrer" href="https://twitter.com/anjalixmusic?lang=en">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a className="btn-link mx-2 social-link-font" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anjalixmusic/">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a className="btn-link mx-2 social-link-font" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/anjalixmusic">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
        <a className="btn-link mx-2 social-link-font" href="mailto:anjalitaneja94@gmail.com">
          <FontAwesomeIcon icon="envelope" />
        </a>
      </div>
    );
  }
}

export default SocialLinks;
