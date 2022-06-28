import { gql } from "graphql-request";

const weatherProps = `
      description
      humidity
      temp
      main
      pressure
`;

export const weatherByZipCodeQuery = gql`
  query($zipCode: String) {
    weather: weatherByZipCodeQuery(zipCode: $zipCode) {
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
