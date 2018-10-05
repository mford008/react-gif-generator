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
    searched_gifs: [],
    search_term: ''
  }


  componentDidMount() {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
      .then(res => {
        const gifs = res.data.data;
        this.setState({ gifs: gifs })
      });
  }

  handleInputChange = (ev) => {
    let value = ev.target.value;
    this.setState({search_term: value});
    console.log(this.state.search_term);
  }

  onSubmit = () => {
    console.log(this.state.search_term);
    axios.get('https://api.giphy.com/v1/gifs/search?q=' +
              this.state.search_term + '&api_key=***REMOVED***')
              .then(res => {
                  const searched_gifs = res.data.data;
                  console.log(searched_gifs);
                  this.setState({ searched_gifs: searched_gifs });
                  });
  }
  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <h2>Search for a Gif:</h2>
        <Search handleInputChange={this.handleInputChange} onClickButton={this.onSubmit}/>
        <SearchGifContainer searched_gifs={this.state.searched_gifs} />
        <GifContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
