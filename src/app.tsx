import './base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import EarthquakeZengarden from 'Components/EarthquakeZengarden';

ReactDOM.render(
  <EarthquakeZengarden />,
  document.getElementById('root') as HTMLElement
);