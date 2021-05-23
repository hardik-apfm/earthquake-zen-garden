import React from 'react';
import { Link } from 'react-router-dom';
import classes from './earthquakeZengarden.scss';
import zengardenData from '../Data/zengardern-data.json';
import { Feature, FeatureCollection, Metadata } from './Interface';
import { formattedDateAndTime } from './utils';

const featureCollection: FeatureCollection = zengardenData?.data;
const metadata: Metadata = zengardenData?.data?.metadata;
const columns: string[] = ['Title', 'Magnitude', 'Time'];

const Home = () => {
  return (
    <div className={classes.recordSection}>
      <h4 className={classes.sectionTitle}>{metadata?.title}</h4>
      <div className={classes.recordGrid}>
        {columns.map((column: string, index: number) => (
          <div
            key={`column-${index}-${column}`}
            className={classes.centerText}
          >
            {column}
          </div>
        ))}
        {featureCollection?.features?.map(
          ({ properties, id }: Feature, index: number) => (
            <React.Fragment key={`${id}-record`}>
              <div>
                <Link to={`/record/${index}`}>{properties?.title}</Link>
              </div>
              <div className={classes.centerText}>{properties?.mag}</div>
              <div>{formattedDateAndTime(properties?.time)}</div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
