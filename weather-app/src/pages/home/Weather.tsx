import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { getWeatherByLocation, getWeatherByZipCode } from "../../api/api";
import { WeatherInfo, WeatherInfoProps } from "@molecules/WeatherInfo";
import { ZipCodeSearch } from "@components/molecules/ZipCodeSearch";

export function Weather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherInfoProps>({
    weather: { temp: "", description: "", iconUrl: "", main: "", city: "" },
  });

  const { coords } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    const getCurrentWeather = async () => {
      const weatherData = await getWeatherByLocation(coords?.latitude, coords?.longitude);
      setCurrentWeather({...weatherData});
    };
    getCurrentWeather();
  }, [coords]);

  const getWeatherByCity = async (zipCode: string) => {
    const weatherData = await getWeatherByZipCode(zipCode)
    setCurrentWeather({...weatherData});
  }

  const { weather } = currentWeather;

  if(!weather.temp) {
    return;
  }

  return (
    <div>
      <WeatherInfo weather={{ ...weather }} />
      <ZipCodeSearch onSearch={getWeatherByCity} />
    </div>
  );
}
