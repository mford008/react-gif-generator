import React, { Component } from 'react';
import Button from './components/Button/Button.js';
import Tile from './components/Tile/Tile.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    term: ''
  }
  handleInputChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      name: value,
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <input placeholder="Enter your Search Term here"
               onChange={this.handleInputChange} />
        <Button>Hello</Button>
        <Tile />
      </div>
    );
  }
}

export default App;
