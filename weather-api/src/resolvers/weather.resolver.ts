import { Arg, Query, Resolver } from "type-graphql";
import { WeatherInfo } from "../models/weather.model";
import { api } from "../api";
import { getWeatherResponse } from "./weather.service";


@Resolver()
export class WeatherResolver {
    @Query(() => WeatherInfo)
    async weatherByZipCode(@Arg("zipCode", { defaultValue: "90001,us" }) zipCode:string) {
        const response = await api.getWeatherByZipCode(zipCode);
        const { body: weatherData } = response;

        return getWeatherResponse(weatherData);
    }

    @Query(() => WeatherInfo)
    async weatherByLocation(
            @Arg("lat", { defaultValue: 20.6329313 }) lat:number,
            @Arg("lon", { defaultValue: -103.4840859 }) lon:number,
        ) {
        const response = await api.getWeatherByCoordinates(lat, lon);   
        const { body: weatherData } = response;

        return getWeatherResponse(weatherData);
    }
}