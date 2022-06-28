import React from 'react'
import { Text } from "@atoms/Text";
import styles from '../WeatherInfo.module.scss';

export function WeatherTitle({ title }: { title: string}) {
  return (
    <div className={styles.weatherInfoTitle}>
        <Text size="large" value="Weather Information" />
      </div>
  )
}
