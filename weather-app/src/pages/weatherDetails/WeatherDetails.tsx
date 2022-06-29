import React from "react";
import { useRouter } from "next/router";

export function WeatherDetails() {
  const router = useRouter();
  const { city, description, humidity, iconUrl, main, pressure, temp } =
    router.query;

  return (
    <div>
      <div className="flex flex-row justify-center text-8xl">
        Weather Details
      </div>
      <div className="flex flex-col items-center bg-yellow-200">
        <span className="justify-items-center">{city}</span>
        <span className="justify-items-center">{description}</span>
        <span className="justify-items-center">{humidity}</span>
        <span>{main}</span>
        <span>{pressure}</span>
        <span>{temp}</span>
      </div>
    </div>
  );
}
