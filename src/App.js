import React, { Component } from 'react';
import Button from './components/Button/Button.js';
import Tile from './components/Tile/Tile.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <Button>Hello</Button>
        <Tile />
      </div>
    );
  }
}

export default App;
