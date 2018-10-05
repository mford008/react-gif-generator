import React, { Component } from 'react';
import GifContainer from './components/GifContainer/GifContainer.js';
import SearchGifContainer from './components/SearchGifContainer/SearchGifContainer.js';
import GifModal from './components/GifModal/GifModal.js';
import Search from './components/Search/Search.js';
import './App.css';
import axios from 'axios';
import SlackWebhookClient from 'messaging-api-slack';

class App extends Component {
  state = {
    gifs: [],
    searched_gifs: [],
    search_term: '',
    selection: null,
    modalIsOpen: false,
  }

  shareToSlack(gif) {
    this.setState({
      selection: gif,
    });
    const client = SlackWebhookClient.connect(
      'https://hooks.slack.com/services/***REMOVED***'
    );
    client.sendAttachment({
      fields: [
    {
      title: gif.title,
      url: gif.images.downsized.url,
    },
  ],
    })
    console.log(gif.title);

  }
  openModal(gif) {
    this.setState({
      selection: gif,
      modalIsOpen: true,
    });
  }
  closeModal(gif) {
    this.setState({
      selection: null,
      modalIsOpen: false,
    });
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
  }

  onSubmit = () => {
    axios.get('https://api.giphy.com/v1/gifs/search?q=' +
              this.state.search_term + '&api_key=***REMOVED***')
              .then(res => {
                  const searched_gifs = res.data.data;
                  this.setState({ searched_gifs: searched_gifs });
                  });
  }
  render() {
    return (
      <div className="App">
        <h1>Gif Generator</h1>
        <h2>Search for a Gif:</h2>
        <Search handleInputChange={this.handleInputChange} onClickButton={this.onSubmit}/>
        <SearchGifContainer searched_gifs={this.state.searched_gifs}
                            onGifSelect={selection => this.openModal(selection)}
                            onSlackButtonClick={selection => this.shareToSlack(selection)}/>
        <h2>Trending:</h2>
        <GifContainer gifs={this.state.gifs}
                      onGifSelect={selection => this.openModal(selection)}
                      onSlackButtonClick={selection => this.shareToSlack(selection)}/>
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selection={this.state.selection}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

export default App;
