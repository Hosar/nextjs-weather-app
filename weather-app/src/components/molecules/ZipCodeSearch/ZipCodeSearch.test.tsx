import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { ZipCodeSearch } from './ZipCodeSearch';

describe('Zip Code Search', () => {
    it('should render the zip code input', () => {
        
        render(<ZipCodeSearch />)
    
        expect(screen.getByText(/ZipCode:/i)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    
    it('should get the introduced zip code', async () => {
        let zipCode;
        render(<ZipCodeSearch onSearch={(_zipCode) => zipCode = _zipCode} />)
        const input = screen.getByRole('textbox')
        
        userEvent.type(input, '90001')
        await userEvent.click(screen.getByRole('button'))

        expect(zipCode).toBe('90001');     
    });
});