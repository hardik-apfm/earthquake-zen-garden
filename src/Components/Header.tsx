import React from 'react';
import { Link } from 'react-router-dom';
import zengardenData from '../Data/zengardern-data.json';
import classes from './earthquakeZengarden.scss';
import routes from './routes';

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to={routes.home}><img src={zengardenData?.site?.logoImage} /></Link>
      <h2>{zengardenData?.site?.title}</h2>
      <Link to={routes.profile}>{'Welcome Sally'}</Link>
    </div>
  )
}

export default Header;