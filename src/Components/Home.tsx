import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './earthquakeZengarden.scss';
import zengardenData from 'Data/zengardern-data.json';
import { Feature, FeatureCollection, Metadata } from './Interface';
import { formattedDateAndTime } from 'Components/utils';
import SortAsc from 'Images/sort-asc.svg';
import SortDsc from 'Images/sort-dsc.svg';
import routes from './routes';

const featureCollection: FeatureCollection = zengardenData?.data;
const metadata: Metadata = zengardenData?.data?.metadata;

const columnMap: Record<string, string> = {
  title: 'Title',
  mag: 'Magnitude',
  time: 'Time',
};

const enum Sort {
  asc = 'asc',
  dsc = 'dsc',
}

const Home = () => {
  const [data, setData] = useState<Feature[]>([]);
  const [sort, setSort] = useState<Sort | undefined>();
  const history = useHistory();

  useEffect(() => {
    setData(featureCollection?.features);
  }, []);

  const redirectToRecord = (index: number) => history.push(`${routes.record}/${index}`);

  const handleSort = (column: string) => {
    const sortPreference = sort === Sort.asc ? Sort.dsc : Sort.asc;
    const sortedData = data.sort((a, b) => {
      const valueA = a?.properties?.[column] || '';
      const valueB = b?.properties?.[column] || '';
      if (sortPreference === Sort.asc) {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueB > valueA ? 1 : valueB < valueA ? -1 : 0;
      }
    });
    setSort(sortPreference);
    setData(sortedData);
  };
  return (
    <div className={classes.recordSection}>
      <h4 className={classes.sectionTitle}>{metadata?.title}</h4>
      <div className={classes.recordGrid}>
        {Object.keys(columnMap).map((columnKey: string, index: number) => (
          <div
            key={`column-${index}-${columnKey}`}
            className={[classes.centerText, classes.cursorHand].join(' ')}
            onClick={() => handleSort(columnKey)}
          >
            {columnMap[columnKey]}
            {sort === Sort.asc && (
              <img className={classes.sortIcon} src={SortAsc} />
            )}
            {sort === Sort.dsc && (
              <img className={classes.sortIcon} src={SortDsc} />
            )}
          </div>
        ))}
        {data.map(({ properties, id }: Feature, index: number) => (
          <React.Fragment key={`${id}-record`}>
            <div>
              <Link to={`${routes.record}/${index}`}>{properties?.title}</Link>
            </div>
            <div onClick={() => redirectToRecord(index)} className={classes.centerText}>{properties?.mag}</div>
            <div onClick={() => redirectToRecord(index)}>{formattedDateAndTime(properties?.time)}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
