import React from 'react'
import {render, screen} from '@testing-library/react'
import { WeatherInfo } from './WeatherInfo';
import { WeatherInfoProps } from './WeatherInfo.types';

describe('Weather Information', () => {
    it('Should show the weather information', () => {
        const weatherInfo:WeatherInfoProps = {
            weather: {
                city: 'Gdl',
                description: 'Cloudy',
                iconUrl: 'http://someAdrress',
                main: 'Mainly',
                temp: '245.2'
            }
        }
        render(<WeatherInfo weather={weatherInfo.weather} />)
        screen.getByText(/Weather Information/i);

        expect(screen.getByText(/Weather Information/i)).toBeInTheDocument();
        expect(screen.getByText(/Temperature .../g)).toBeInTheDocument();
        expect(screen.getByText(/245.2/i)).toBeInTheDocument();
        expect(screen.getByText(/City .../i)).toBeInTheDocument();
        expect(screen.getByText(/Gdl/i)).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});