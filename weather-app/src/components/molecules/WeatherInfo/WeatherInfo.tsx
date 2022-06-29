import React from "react";
import { WeatherTitle } from './WeatherTitle';
import { WeatherDetails } from './WeatherDetails';
import { MoreInfoLink } from '@atoms/MoreInfoLink';
import { WeatherInfoProps } from './WeatherInfo.types'; 
import styles from './WeatherInfo.module.scss';

export function WeatherInfo({ weather }: WeatherInfoProps): React.ReactElement {
  return (
    <div className={styles.weatherInfoMainContent}>
      <WeatherTitle title="Weather Information" />
      <WeatherDetails {...weather} />
      <MoreInfoLink className={styles.weatherInfoDetails} dataQuery={weather} />
    </div>
  );
}
