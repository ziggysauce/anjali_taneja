import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/index';
import { Landing, Music, Video, Events, Merch, Contact } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Landing></Landing>
        <Music></Music>
        <Video></Video>
        <Events></Events>
        <Merch></Merch>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
