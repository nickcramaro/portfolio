import React, { Component } from 'react';
class Terminal extends Component {

  render() {
    return (
      <div className='terminal'>
        <div className='terminal__text'>
          <p className='terminal__text--input'>
            $ welcome to my site
          </p>
        </div>
      </div>
    );
  }
}

export default Terminal;
