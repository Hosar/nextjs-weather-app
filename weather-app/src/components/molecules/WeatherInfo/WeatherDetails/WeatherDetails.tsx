import React from "react";
import { Text } from "@atoms/Text";
import { WeatherIcon } from "@atoms/WeatherIcon";
import { WeatherInfoDataProps } from "../WeatherInfo.types";
import styles from "../WeatherInfo.module.scss";

export function WeatherDetails({
  temp,
  main,
  description,
  iconUrl,
  city,
}: WeatherInfoDataProps) {
  return (
    <div className={styles.weatherInfoArea}>
      <div className={styles.weatherInfoMarginBottom}>
        <Text size="small" value="Temperature ..." />
        <Text
          className={styles.weatherInfoMarginLeft}
          size="small"
          value={temp}
        />
      </div>
      <div className={styles.weatherInfoMarginBottom}>
        <Text size="small" value="City ..." />
        <Text
          className={styles.weatherInfoMarginLeft}
          size="small"
          value={city}
        />
      </div>
      <div>
        <Text size="small" value="Mainly ..." />
        <Text
          className={styles.weatherInfoMarginLeft}
          size="small"
          value={main}
        />
      </div>
      <div className={styles.weatherInfoDescription}>
        <Text size="small" value="Description ..." />
        <Text
          className={styles.weatherInfoMarginLeft}
          size="small"
          value={description}
        />
        <div className={styles.weatherInfoIcon}>
          <WeatherIcon url={iconUrl} description={description} />
        </div>
      </div>
    </div>
  );
}
