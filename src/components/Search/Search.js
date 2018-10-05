import React, { Component } from 'react';
import Button from '../Button/Button.js';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input placeholder="Enter your Search Term here"
               onChange={this.props.handleInputChange} />
        <Button onClick={this.props.onClickButton}>Search</Button>
      </div>
    );
  }
}
export default Search;
