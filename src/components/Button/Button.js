import React, { Component } from 'react';
import axios from 'axios';

class Button extends Component {
  onClickButton = event => {
    event.preventDefault();
    console.log('hello')
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=***REMOVED***')
    .then(res => {
      const gifs = res.data;
      console.log(gifs.data[0].title);
      console.log(gifs.data[0].rating);
      console.log(gifs.data[0].username);
      console.log('success');
    });
  //   if (this.state.isPurple) {
  //     this.setState({isPurple:false})
  //   }
  //   else (this.state.isPurple) {
  //     this.setState({isPurple:true})
  //   }
  }

  render() {
    return(
      <div>
        <button onClick={this.onClickButton}>{this.props.children}</button>
      </div>
    )
  }
}

export default Button;
