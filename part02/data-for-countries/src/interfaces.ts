export interface CountryData {
  name: string;
  capital: string;
  population: number;
  languages: string[],
  flag: string;
}

export interface WeatherData {
  temperature: number;
  wind_degree: number;
  wind_dir: string;
  wind_speed: number;
  weather_icons: string[]
}