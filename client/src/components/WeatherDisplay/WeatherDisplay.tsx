"use client";
import { useWeather } from "@/context/WeatherContext";

const kelToCel = (numKel: number) => {
  return (numKel - 273.15).toFixed(2);
};

export default function WeatherDisplay() {
  const { weatherData, unit } = useWeather();
  const symbol = unit === "celcius" ? "C" : "K";

  if (!weatherData) return <p>Choose the region to see the forecast</p>;

  const tempK = weatherData.main.temp;
  const temp = unit === "kelvin" ? tempK : kelToCel(tempK);

  const feelsK = weatherData.main.feels_like;
  const feels = unit === "kelvin" ? feelsK : kelToCel(feelsK);

  return (
    <div>
      <p>Temperature: {temp}° {symbol}</p>
      <p>Feels like: {feels}° {symbol}</p>
    </div>
  );
}
