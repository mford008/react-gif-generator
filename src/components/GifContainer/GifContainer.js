import React, { Component } from 'react';
import './GifContainer.css';

class GifContainer extends Component {
  render() {
    return(
      <div>
        <img className="gifContainer" src={this.props.children}/>
      </div>
    )
  }
}

export default GifContainer;
