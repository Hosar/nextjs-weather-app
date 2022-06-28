import React from 'react'
import { Text } from "@atoms/Text";
import { WeatherIcon } from "@atoms/WeatherIcon";
import styles from '../WeatherInfo.module.scss';

export interface WeatherInfoProps {
    temp: string;
    mainly: string;
    description: string;
    iconUrl: string;
}

export function WeatherDetails({ temp, mainly, description, iconUrl }: WeatherInfoProps) {
    return (
        <div className={styles.weatherInfoArea}>
            <div className={styles.weatherInfoMarginBottom}>
                <Text size="small" value="Temperature ..." />
                <Text className={styles.weatherInfoMarginLeft} size="small" value={temp} />
            </div>
            <div>
                <Text size="small" value="Mainly ..." />
                <Text className={styles.weatherInfoMarginLeft} size="small" value={mainly} />
            </div>
            <div className={styles.weatherInfoDescription}>
                <Text size="small" value="Description ..." />
                <Text className={styles.weatherInfoMarginLeft} size="small" value={description} />
                <div className={styles.weatherInfoIcon}>
                    <WeatherIcon
                        url={iconUrl}
                        description={description}
                    />
                </div>
            </div>
        </div>
    )
}
