import React, { Component } from 'react';
import EventsAPI from '../api/Events';

class Events extends Component {
  state = { events: EventsAPI.events }

  componentWillMount() {
    this.setState({ events: EventsAPI.events });
  }

  render() {
    return (
      <div id="events-section" className="min-vh-100 w-100 bg-dark text-light d-flex justify-content-around border border-primary">
        <p class="mb-0 w-50 border border-danger">Events Section</p>
        <div className="w-50 d-flex flex-column justify-content-around border border-success">
          {this.state.events.map(({date, location, details}, idx) => {
            return (
              <div key={idx} className="row">
                <p class="col-4 h4 text-right mb-0">{date}</p>
                <div class="col-8 text-left d-flex flex-column">
                  <p class="h4 text-left mb-0">{location}</p>
                  <p class="mb-0">{details}</p>
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
