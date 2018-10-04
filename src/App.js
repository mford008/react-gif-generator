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

  handleTermChange = this.handleTermChange.bind(this);

  handleTermChange(term) {
    console.log(term);
    axios.get('https://api.giphy.com/v1/gifs/search?q=' +
              term + '&api_key=***REMOVED***')
              .then(res => {
                  const gifs = res.data;
                  console.log(gifs);
                  this.setState({ gifs: res.data.data })
                  });
  }
  // componentDidMount() {
  //     axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
  //     .then(res => {
  //       // let gifs = res.data
  //       const gifs = res.data;
  //       this.setState({ gifs })
  //       console.log(gifs.data[0].url)
  //       gifs.data.map(gif =>
  //         console.log(gif, gif.title))
  //     });
  // }

  render() {
    return (
      <div className="App">
        <h1>Shift Gif Generator</h1>
        <Search onTermChange={this.handleTermChange}/>
        <TileContainer gifs={this.state.gifs} />
        {/*<ul>
        { this.gifs.data.map(gif => <li>{gif.title}</li>) }
        </ul>*/}
      </div>
    );
  }
}

export default App;
