import { constants } from "../common/constants";

export const getWeatherResponse = (weatherData: any) => {
    const { weather, main, name: city } = weatherData; 
    const { icon } = weather[0];
    const iconUrl = `${constants.openWeatherImg}/${icon}@2x.png`;
    return {...weather[0], ...main, ...{iconUrl}, city };
};