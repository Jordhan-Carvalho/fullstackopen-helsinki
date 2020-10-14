import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CountryData, WeatherData } from '../interfaces';

type SingleCountryProps = {
  country: CountryData
}

export default function SingleCountry({country: {name, capital, flag, languages, population}}: SingleCountryProps) {

  const [ weather, setWeather  ] = useState<WeatherData | null>();

  useEffect(() => {
    fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWeather = async () => {
    const resp = await  axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${capital}`)
    const { data: { current } } = resp;
    setWeather(current as WeatherData);
  }


  return (
    <>
    <h1>{name}</h1>
    <p>capital {capital}</p>
    <p>population {population}</p>
    <h2>languages</h2>
    <ul>
      {languages.map(lang => <li key={lang}>{lang}</li>)}
    </ul>
    <img src={flag} alt=""/>
  <h2>Weather in {capital}</h2>
  <p>temperature: {weather?.temperature} Celcius</p>
  <img src={weather?.weather_icons[0]} alt=""/>
  <p>wind: {weather?.wind_speed} mph direction {weather?.wind_dir }</p>
    </>
  )
}
