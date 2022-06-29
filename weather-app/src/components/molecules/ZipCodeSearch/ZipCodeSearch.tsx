import React, { useState } from 'react'
import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';
import { ZipCodeSearchProps } from './ZipCodeSearch.types';

export function ZipCodeSearch({ onSearch = () => {} }: ZipCodeSearchProps) {
  const [zipCode, setZipCode] = useState('');
  const assignZipCode = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setZipCode(e?.currentTarget?.value)
  }
  return (
    <div className='flex flex-row items-center gap-4 justify-center mt-8'>
        <span className='text-blue-800 font-extrabold'>ZipCode:</span>
        <Input onChange={assignZipCode} />
        <Button text='Search' onClick={() => onSearch(zipCode)} />
    </div>
  )
}
