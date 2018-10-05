import React, { Component } from 'react';
import Button from '../Button/Button.js';
import axios from 'axios';

class Search extends React.Component {
  state = {
    term: '',
    input: '',
  }
  handleInputChange = (ev) => {
    let value = ev.target.value;
    this.setState({term: value});
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="Search">
        <input placeholder="Enter your Search Term here"
               onChange={this.handleInputChange} />
        <Button onClick={this.props.onClickButton}>Search</Button>
      </div>
    );
  }
}
export default Search
