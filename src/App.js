import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navigation, SocialLinks } from './components/index';
import { Landing, Music, Video, Events, Merch, Contact } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialLinks></SocialLinks>
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
