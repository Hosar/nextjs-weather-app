import { WeatherIcon } from "./WeatherIcon";

const definition = {
  title: "Atoms/WeatherIcon",
  component: WeatherIcon,
};

export default definition;

const url = "http://openweathermap.org/img/wn/10d@2x.png";

export const WeatherIconSmall = () => {
    return (
        <div style={{ height: '3rem', width: '3rem', position: 'relative'}}>
            <WeatherIcon url={url} description="broken clouds" />
        </div>
    )
}

export const WeatherIconLarge = () => { 
    return (
        <div style={{ height: '6rem', width: '6rem', position: 'relative'}}>
            <WeatherIcon url={url} description="broken clouds" />
        </div>
    )
}

export const WeatherIconLarger = () => { 
    return (
        <div style={{ height: '12rem', width: '12rem', position: 'relative'}}>
            <WeatherIcon url={url} description="broken clouds" />
        </div>
    )
}