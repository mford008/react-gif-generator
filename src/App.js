import React, { Component } from 'react';
import Search from './components/Search/Search.js';
import TileContainer from './components/TileContainer/TileContainer.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    trending: true,
    gifs: [],
  }

  componentDidMount() {
      console.log('hello')
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
      .then(res => {
        let gifs = res.data
        this.setState({ gifs: gifs })
        console.log(gifs.data[0].url)
        gifs.data.map(gif =>
          console.log(gif.url))
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <Search />
      </div>
    );
  }
}

export default App;
