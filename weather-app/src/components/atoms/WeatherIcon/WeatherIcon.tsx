import React from 'react'
import Image from 'next/image';

export function WeatherIcon({ url, description }: {url: string, description: string}) {
  return (
    <Image src={url} unoptimized alt={description} layout="fill" objectFit="contain" />
  )
}
