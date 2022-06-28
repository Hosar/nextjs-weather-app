import { constants } from "../common/constants";

export const getWeatherResponse = (weather: any, main: any) => {
    const { icon } = weather;
    const iconUrl = `${constants.openWeatherImg}/${icon}@2x.png`;
    return {...weather, ...main, ...{icon: iconUrl}};
};