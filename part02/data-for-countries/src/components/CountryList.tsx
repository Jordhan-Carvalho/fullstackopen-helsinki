import React from 'react'

type CountryListProps = {
  countries: string[];
}

export default function CountryList({countries}: CountryListProps) {
  return (
  <>
    {countries.map(country => <div key={country}>{country}</div>)}
  </>
  )
}
