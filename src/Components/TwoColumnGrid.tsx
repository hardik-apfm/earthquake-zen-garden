import React from 'react';
import { TwoColumnGrid } from './Interface';
import { formattedDateAndTime } from 'Components/utils';
import classes from 'Components/TwoColumnGrid.scss';

const TwoColumnGrid = ({ columnMap, title, data }: TwoColumnGrid) => {
  return (
    <div className={classes.detailSection}>
      <h4 className={classes.sectionTitle}>{title}</h4>
      <div className={classes.detailGrid}>
        {Object.keys(columnMap).map((key: string, index) => (
          <React.Fragment key={`${key}-${index}`}>
            <div className={classes.column}>{columnMap?.[key]}</div>
            <div className={classes.data}>
              {key === 'time' ? formattedDateAndTime(data?.[key]) : data?.[key]}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnGrid;
