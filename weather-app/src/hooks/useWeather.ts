import { request } from "graphql-request";
import { weatherByLocationQuery } from "@queries/Weather.query";
import useSWR from "swr";
import { constants } from "@constants/";

export const useWeather = (lat: number, lon: number) => {
  const { apiEndpoint } = constants;
  const { data: currentWeather, error } = useSWR(
    weatherByLocationQuery,
    (query) => request(apiEndpoint, query, { lat: lat, lon: lon })
  );

  return {
    currentWeather,
    isLoading: !error && !currentWeather,
    isError: error
  }
};
