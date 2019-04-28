import React, { Component } from 'react';
import EventsAPI from '../api/Events';
import AnjaliTanejaEvents from '../assets/at_events.jpg';

class Events extends Component {
  state = { events: EventsAPI.events }

  componentWillMount() {
    this.setState({ events: EventsAPI.events });
  }

  render() {
    return (
      <div id="events-section" className="w-100 bg-salmon d-flex flex-wrap text-light">
        <div className="col-12 col-md-6 p-0">
          {/*<div className="img-hover z1"></div>
          <img src={AnjaliTanejaEvents} alt="anjali taneja" className="w-100 h-100" />*/}
          <div className="img-hover">
            <img src={AnjaliTanejaEvents} alt="anjali taneja" className="w-100" />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-around">
          {this.state.events.map(({date, location, details}, idx) => {
            return (
              <div key={idx} className="row">
                <p className="col-4 h4 text-right mb-0">{date}</p>
                <div className="col-8 text-left d-flex flex-column">
                  <p className="h4 text-left mb-0">{location}</p>
                  <p className="mb-0">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Events;
