import React, { Component } from 'react';
import Search from './components/Search/Search.js';
import TileContainer from './components/TileContainer/TileContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <Search />
        <TileContainer />
      </div>
    );
  }
}

export default App;
