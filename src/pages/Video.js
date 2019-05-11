import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Video extends Component {
  state = {
    index: 0,
    direction: null,
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        interval={null}
        onSelect={this.handleSelect}>
        <Carousel.Item className="bg-black">
          <iframe src="https://www.youtube.com/embed/fTT4OK_OrnA"
            className="w-100 min-vh mb-5"
            title="Anjali Taneja x Pav Dharia YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </Carousel.Item>
        <Carousel.Item className="bg-black">
          <iframe src="https://www.youtube.com/embed/fCnCZvr2S7s"
            className="w-100 min-vh mb-5"
            title="Anjali Taneja YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Video;
