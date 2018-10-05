import React, { Component } from 'react';
import GifContainer from './components/GifContainer/GifContainer.js';
import Search from './components/Search/Search.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    trending: true,
    gifs: [],
  }


  componentDidMount() {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
      .then(res => {
        const gifs = res.data;
        this.setState({ gifs: res.data.data })
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <h2>Search for a Gif:</h2>
        <Search />
        <h2>Trending:</h2>
        <GifContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
