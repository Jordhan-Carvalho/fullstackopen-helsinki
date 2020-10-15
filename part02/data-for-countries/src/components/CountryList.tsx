import React from "react";

import CountryName from "./CountryName";
import { CountryData } from "../interfaces";

type CountryListProps = {
  countries: CountryData[];
};

export default function CountryList({ countries }: CountryListProps) {
  return (
    <>
      {countries.map((country) => (
        <CountryName country={country} key={country.name} />
      ))}
    </>
  );
}
