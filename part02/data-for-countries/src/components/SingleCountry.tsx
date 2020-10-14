import React from 'react'

import { CountryData } from '../interfaces';

type SingleCountryProps = {
  country: CountryData
}

export default function SingleCountry({country: {name, capital, flag, languages, population}}: SingleCountryProps) {
  console.log(flag)
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
    </>
  )
}
