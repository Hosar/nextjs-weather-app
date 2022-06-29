import { request } from "graphql-request";
import { weatherByLocationQuery, weatherByZipCodeQuery } from "@queries/Weather.query";
import { constants } from "../common/constants";

export const getWeatherByLocation = (lat?: number, lon?: number) => {
    const { apiEndpoint } = constants;
    return request(apiEndpoint, weatherByLocationQuery, { lat: lat, lon: lon })
}

export const getWeatherByZipCode = (zipCode: string) => {
    const { apiEndpoint } = constants;
    return request(apiEndpoint, weatherByZipCodeQuery, { zipCode })
}