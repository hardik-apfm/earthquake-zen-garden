import React from 'react';
import { Link } from 'react-router-dom';
import zengardenData from '../zengardern-data.json';
import classes from './earthquakeZengarden.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to='/home'><img src={zengardenData?.site?.logoImage} /></Link>
      <h2>{zengardenData?.site?.title}</h2>
      <Link to='/profile'>{'Welcome Sally'}</Link>
    </div>
  )
}

export default Header;