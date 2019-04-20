import React, { Component } from 'react';
import EventsAPI from '../api/Events';

class Events extends Component {
  state = { events: EventsAPI.events }

  componentWillMount() {
    this.setState({ events: EventsAPI.events });
  }

  render() {
    return (
      <div id="events-section" className="min-vh-100 w-100 bg-dark text-light d-flex justify-content-around">
        <p>Events Section</p>
        {this.state.events.map(({date, location, time}, idx) => {
          return (
            <div key={idx} className="row">
              <div class="col-6 text-right d-flex flex-column">
                <p class="mb-0">{date}</p>
                <p class="mb-0">{time}</p>
              </div>
              <p class="col-6 text-left mb-0">{location}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Events;
