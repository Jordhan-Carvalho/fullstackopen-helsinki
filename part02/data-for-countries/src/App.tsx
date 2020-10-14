import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import CountryList from './components/CountryList'
import SingleCountry from './components/SingleCountry'
import { CountryData } from './interfaces';



function App() {
  const [ countries, setCountries ] = useState<CountryData[]>([]);
  const [ filteredCountries, setFilteredCountries ] = useState<CountryData[]>([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  
  useEffect(() => {
    fetchCountries();
  }, [])

  useEffect(() => {
    filterCountries(searchTerm, countries);
  }, [searchTerm, countries] )


  const filterCountries = (searchTerm: string, countries: CountryData[]) => {
    const newCountryList = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCountries([...newCountryList]);
  }

  const fetchCountries = async () => {
    console.log("fetching")
    const resp = await axios.get("https://restcountries.eu/rest/v2/all");
    const { data }: AxiosResponse<any[]> = resp;
    const countriesArray: CountryData[] = data
    .map(country => {
       return {name:country.name, capital: country.capital, population: country.population, flag: country.flag, languages: [country.languages.map((lang: any) => lang.name)]}
    });

    setCountries([...countriesArray]);
  }


  const whatToRender = (): string | JSX.Element => {
    if (filteredCountries.length > 10) {
       return "Too many matches, specify another filter";
    } else if  (filteredCountries.length <= 10 && filteredCountries.length > 1) {
       return <CountryList countries={filteredCountries.map(country => country.name)} />;
    } else if ( filteredCountries.length === 1) {
       return <SingleCountry country={filteredCountries[0]}  />;
    } else {
      return "No countries found"
    }
  }

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  }

  console.log("rerender")
  

  return (
    <>
    <div> find countries <input name="search" onChange={handleSearchTerm} value={searchTerm} /></div>
    <div>Results</div>
    {whatToRender()}
    </>
  );
}

export default App;
