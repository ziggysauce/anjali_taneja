import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/index';
import { Landing, Music, Video, Events, Contact } from './pages'; // Include Merch when needed

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Landing></Landing>
        <Music></Music>
        <Video></Video>
        <Events></Events>
        {/*
          * Hide merchanidse section for now
          <Merch></Merch>
        */}
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
