import './base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import EarthquakeZengarden from './components/EarthquakeZengarden';

ReactDOM.render(
  <EarthquakeZengarden />,
  document.getElementById('root') as HTMLElement
);