import React, { Component } from 'react';
import GifContainer from './components/GifContainer/GifContainer.js';
import SearchGifContainer from './components/SearchGifContainer/SearchGifContainer.js';
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

  onSubmit = () => {
    console.log(this.state.term);
    axios.get('https://api.giphy.com/v1/gifs/search?q=' +
              this.state.term + '&api_key=***REMOVED***')
              .then(res => {
                  const gifs = res.data;
                  this.setState({ gifs: res.data.data });
                  });
  }
  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <h2>Search for a Gif:</h2>
        <Search onClickButton={this.onSubmit}/>
        <GifContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
