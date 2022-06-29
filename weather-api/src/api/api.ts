import { LocationInfo } from "../models/locationInfo.type";
import { constants } from "../common/constants";
import request from "superagent";

export const getCoordinatesByZipCode = (zipCode: string) => {
    return request.get(constants.openWeatherGeoApi)
    .query({
        zip: zipCode,
        APPID: constants.apiKey
    });
};

export const getWeatherByZipCode = async (zipCode: string) => {
    const locationInfoRes = await getCoordinatesByZipCode(zipCode);
    const locationInfo:LocationInfo  = locationInfoRes?.body;

    return request.get(constants.openWeatherApi)
    .query({
        lat: locationInfo?.lat,
        lon: locationInfo?.lon,
        APPID: constants.apiKey
    });
};

export const getWeatherByCoordinates = async (lat: number, lon: number) => {
    return request.get(constants.openWeatherApi)
    .query({
        lat: lat,
        lon: lon,
        APPID: constants.apiKey
    });
};
