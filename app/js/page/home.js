import React, { Component } from 'react';
import Terminal from 'Shared/terminal';
class Home extends Component {

  render() {
    return (
      <div>
        <Terminal />
        <div className='container'>
          <h1 className='container__heading1'>Home</h1>
        </div>
      </div>
    );
  }
}

export default Home;
