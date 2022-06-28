import React from "react";
import { useGeolocated } from 'react-geolocated';
import { request } from "graphql-request";
import useSWR from 'swr';
import { weatherByLocationQuery } from './Weather.query';
import { ContentArea } from '@components/atoms/ContentArea';

export function Weather() {
  const apiEndpoint = "http://localhost:4000/graphql";
  const { 
      coords, 
      isGeolocationAvailable,
      isGeolocationEnabled 
  } = useGeolocated({
        positionOptions: {
          enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
  });



  const { data: currentWeather, error } = useSWR(weatherByLocationQuery, (query) =>
    request(apiEndpoint, query, { lat: 20.6329313, lon: -103.4840859 })
  );
  
  console.log('weather --- ', currentWeather);
  console.log('error --- ', error);

  return (
    <div>
      <div>{coords?.latitude} {coords?.longitude}</div>
      <ContentArea bgColor="blue">
        hello!
      </ContentArea>
    </div>
  )
}


export async function getServerSideProps() {
  return {
    props: {
      weather: {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    },
  };
}
