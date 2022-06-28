
const openWeatherHost = "openweathermap.org";

export const constants = {
    apiKey: process.env.API_KEY,
    openWeatherApi: `http://api.${openWeatherHost}/data/2.5/weather`,
    openWeatherGeoApi: `http://api.${openWeatherHost}/geo/1.0/zip`,
    openWeatherImg: `http://${openWeatherHost}/img/wn`,
};
