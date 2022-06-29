import { WeatherInfo } from "./WeatherInfo";

const definition = {
  title: "Molecules/WeatherInformation",
  component: Text,
};


const weather = {
  main: 'Clouds',
  temp: "24",
  description:"broken clouds" ,
  mainly:"Clouds",
  iconUrl:"http://openweathermap.org/img/wn/10d@2x.png",
} 

export const WeatherInformation = () => <WeatherInfo weather={{...weather}} />;
    
    
export default definition;