import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from 'Page/home';
import Blog from 'Page/blog';
import 'Sass/base.scss';

class App extends Component {
  fadeNavigation = () => {
    if (window.scrollY > 64)
      document.getElementById('navigation').style.opacity = 1;
    else
      document.getElementById('navigation').style.opacity = 0;
  }
  componentWillMount() {
    window.addEventListener('scroll', this.fadeNavigation);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <div>
        <nav className='navigation' id='navigation'>
          <h1 className='navigation__logo'>Nick Cramaro</h1>
          <Link className='navigation__link' to='/'>Home</Link>
          <Link className='navigation__link' to='/blog'>Blog</Link>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
