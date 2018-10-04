import React, { Component } from 'react';
import axios from 'axios';

class TileContainer extends Component {
  state = {
    trending: true,
  }

  componentDidMount() {
      console.log('hello')
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
      .then(res => {
        const gifs = res.data;
        console.log(gifs);
      });
  }
  render() {
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default TileContainer;
