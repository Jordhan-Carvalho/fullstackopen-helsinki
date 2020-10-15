import React from "react";

import SingleCountry from "./SingleCountry";
import { CountryData } from "../interfaces";
import Togglable from "./common/togglable";

type CountryNameProps = {
  country: CountryData;
};

export default function CountryName({ country }: CountryNameProps) {
  return (
    <>
      <div key={country.name}>{country.name}</div>
      <Togglable buttonLabel={"Show"}>
        <SingleCountry country={country} />
      </Togglable>
    </>
  );
}
