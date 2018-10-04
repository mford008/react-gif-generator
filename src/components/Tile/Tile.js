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

// onClickButton = event => {
//   event.preventDefault();
//   console.log('hello')
//   axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
//   .then(res => {
//     const gifs = res.data;
//     console.log(gifs.data[0].title);
//     console.log(gifs.data[0].rating);
//     console.log(gifs.data[0].username);
//     console.log('success');
//   });

// <button onClick={this.onClickButton}>{this.props.children}</button>
//
