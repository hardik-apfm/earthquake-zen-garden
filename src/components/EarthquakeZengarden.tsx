import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Profile from './Profile';
import Record from './Record';
import Home from './Home';

const EarthquakeZengarden = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/record/:id'>
          <Record />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default EarthquakeZengarden;