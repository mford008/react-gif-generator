import React, { Component } from 'react';
import Button from '../Button/Button.js';
import axios from 'axios';

class Search extends Component {
  state = {
    term: ''
  }
  handleInputChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      term: value,
    });
    console.log(this.state.value);
    console.log(this.state.term);
  }
  handleSubmit = () => {
    console.log('hello', this.state.term);
    axios.get('https://api.giphy.com/v1/gifs/search?q=' +
              this.state.term + '&api_key=***REMOVED***')
              .then(res => {
                  const gifs = res.data;
                  console.log(gifs);
                  });
  }
  render() {
    return (
      <div className="Search">
        <input placeholder="Enter your Search Term here"
               onChange={this.handleInputChange} />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}

export default Search
