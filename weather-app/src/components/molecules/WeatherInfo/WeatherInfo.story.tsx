import { WeatherInfo } from "./WeatherInfo";

const definition = {
  title: "Molecules/WeatherInformation",
  component: Text,
};

export default definition;

export const WeatherInformation = () => 
  <WeatherInfo
    temp="24"
    description="broken clouds" 
    mainly="Clouds"
    iconUrl="http://openweathermap.org/img/wn/10d@2x.png" />;