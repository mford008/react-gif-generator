import React, { Component } from 'react';
import Button from '../Button/Button.js';
import GifContainer from '../GifContainer/GifContainer.js';
import './Tile.css';

class Tile extends Component {
  render() {
    return(
      <div>
        <GifContainer />
        <Button>Hi</Button>
        <Button>Hello</Button>
      </div>
    )
  }
}

export default Tile;
