import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from 'Page/home';
import Blog from 'Page/blog';

import 'Sass/base.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
