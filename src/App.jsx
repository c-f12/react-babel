import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Intro message={'To get started, edit <code>src/App.js</code> and save to reload.'} />
      </div>
    );
  }
}

export default App;
