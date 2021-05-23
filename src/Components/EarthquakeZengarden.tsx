import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import routes from './routes';
import Record from './Record';

const EarthquakeZengarden = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.profile}>
          <Profile />
        </Route>
        <Route path={`${routes.record}/:id`}>
          <Record />
        </Route>
        <Route path={`${routes.home}`}>
          <Home />
        </Route>
        <Route path={`${routes.root}`}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default EarthquakeZengarden;