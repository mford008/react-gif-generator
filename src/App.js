import React, { Component } from 'react';
import GifContainer from './components/GifContainer/GifContainer.js';
import SearchGifContainer from './components/SearchGifContainer/SearchGifContainer.js';
import GifModal from './components/GifModal/GifModal.js';
import Search from './components/Search/Search.js';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`
const WEBHOOK_URL = `${process.env.REACT_APP_WEBHOOK_URL}`

class App extends Component {
  state = {
    gifs: [],
    searched_gifs: [],
    search_term: '',
    selection: null,
    modalIsOpen: false,
  }
  // TODO: research and implement further solutions for
  // "Access-Control-Allow-Origin is not allowed by
  // Access-Control-Allow-Headers in preflight response."
  shareToSlack(gif) {
    this.setState({
      selection: gif,
    });
    let data = this.state.selection;
    axios.post('https://hooks.slack.com/services/' + WEBHOOK_URL,
                JSON.stringify(data),
                {headers: {
                            'Access-Control-Allow-Origin': '*'}
                          }
                        )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
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
  // Load trending gifs
  componentDidMount() {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY)
        .then(res => {
          const gifs = res.data.data;
          this.setState({ gifs: gifs });
      })
      .catch(err => {
        return('error', err);
      })
  }

  handleInputChange = (ev) => {
    let value = ev.target.value;
    this.setState({search_term: value});
  }
  // Load gifs for search term
  onSubmit = () => {
    axios.get('https://api.giphy.com/v1/gifs/search?q=' +
            this.state.search_term + '&api_key=' + API_KEY)
            .then(res => {
                const searched_gifs = res.data.data;
                this.setState({ searched_gifs: searched_gifs });
              })
              .catch(err => {
                return('error', err);
              })
            }
  render() {
    return (
      <div className="App">
        <Grid>
        <Row>
          <Col>
            <h1>Gif Generator</h1>
          </Col>
          </Row>
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
        </Grid>
      </div>
    );
  }
}

export default App;
