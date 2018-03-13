import React, { Component } from 'react';
class Terminal extends Component {
  state = {
    text: 'welcome to my site'
  }
  componentWillMount() {

  }
  render() {
    return (
      <div className='terminal'>
        <div className='terminal__text'>
          <p className='terminal__text--input'>
            $ {this.state.text}
          </p>
        </div>
      </div>
    );
  }
}

export default Terminal;
