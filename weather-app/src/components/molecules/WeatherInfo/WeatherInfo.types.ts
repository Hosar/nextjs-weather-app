export interface WeatherInfoDataProps {
    temp: string;
    main: string;
    description: string;
    iconUrl: string;
    city: string;
}

export interface WeatherInfoProps {
    weather: WeatherInfoDataProps
}