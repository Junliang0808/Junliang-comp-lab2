import React from 'react';
import About from '../About';
import Home from '../Home';

import {
  BrowserRouter as Router,
  Switch, Link, Route
} from 'react-router-dom';

import Styles from './styles';



const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to ="/" >Home</Link>
          </li>
          <li>
            <Link to="/About" >About</Link> 
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route exact path="/">
          This is Roy, welcome to my home page.
          <Home/>
        </Route>
        <Route exact path= "/About">
          There is something about me.
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;