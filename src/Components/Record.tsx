import React from 'react';
import { useParams } from 'react-router';
import { Feature, FeatureProperty, Params } from './Interface';
import zengardenData from '../Data/zengardern-data.json';
import TwoColumnGrid from 'Components/TwoColumnGrid';

const features: Feature[] = zengardenData?.data?.features;
const columnMap: Record<string, string> = {
  title: 'Title',
  mag: 'Magnitude',
  time: 'Time',
  status: 'Status',
  tsunami: 'Tsunami',
  type: 'Type',
};
const Record = () => {
  const params = useParams<Params>();
  const properties: FeatureProperty =
    features?.[parseInt(params?.id)].properties;
  return (
    <TwoColumnGrid
      columnMap={columnMap}
      data={properties}
      title={properties.title}
    />
  );
};

export default Record;
