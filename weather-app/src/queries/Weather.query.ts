import { gql } from "graphql-request";

const weatherProps = `
      description
      humidity
      temp
      main
      iconUrl
      pressure
      city
`;

export const weatherByZipCodeQuery = gql`
  query($zipCode: String) {
    weather: weatherByZipCode(zipCode: $zipCode) {
      ${weatherProps}
    }
  }
`;

export const weatherByLocationQuery = gql`
  query($lat: Float, $lon: Float) {
    weather: weatherByLocation (lat: $lat, lon: $lon) {
      ${weatherProps}
    }
  }
`;
