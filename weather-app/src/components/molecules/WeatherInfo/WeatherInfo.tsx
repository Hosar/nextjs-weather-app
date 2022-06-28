import React from "react";
import { Text } from "@atoms/Text";
import { WeatherIcon } from "@atoms/WeatherIcon";
import { WeatherTitle } from './WeatherTitle';
import { WeatherDetails, WeatherInfoProps } from './WeatherDetails';
import styles from './WeatherInfo.module.scss';



export function WeatherInfo(props: WeatherInfoProps) {
  return (
    <div className={styles.weatherInfoMainContent}>
      <WeatherTitle title="Weather Information" />
      <WeatherDetails {...props} /> 
    </div>
  );
}
