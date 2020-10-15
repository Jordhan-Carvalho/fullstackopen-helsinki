import React from "react";
import { render } from "@testing-library/react";
import CountryList from "./CountryList";

import { CountryData } from "../interfaces";

test("renders content", () => {
  const countries: CountryData[] = [
    {
      capital: "teste capital",
      flag: "teste flag",
      name: "testename",
      population: 12,
      languages: ["pt"],
    },
  ];

  const component = render(<CountryList countries={countries} />);

  expect(component.container).toHaveTextContent("teste capital");
});
