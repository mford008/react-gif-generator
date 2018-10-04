import React, { Component } from 'react';

class Button extends Component {
  //   if (this.state.isPurple) {
  //     this.setState({isPurple:false})
  //   }
  //   else (this.state.isPurple) {
  //     this.setState({isPurple:true})
  //   }

  render() {
    return(
      <div>
        <button onClick={this.props.onClick}>{this.props.children}</button>
      </div>
    )
  }
}

export default Button;
