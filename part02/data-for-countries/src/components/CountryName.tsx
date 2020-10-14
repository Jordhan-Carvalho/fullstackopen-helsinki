import React, { useState } from 'react'

import SingleCountry from './SingleCountry';
import { CountryData } from '../interfaces';

type CountryNameProps = {
  country: CountryData;
}

export default function CountryName({country}: CountryNameProps) {
  const [ show, setShow ] = useState(false);


  return (
    <>
    <div key={country.name}>{country.name}<button onClick={() => setShow(!show)} >Show</button></div>
    {show && <SingleCountry country={country} />}
    </>
  )
}
