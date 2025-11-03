import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import UnitSelect from "./UnitSelect/UnitSelect";

export default function WheaterApp() {
  return (
    <>
      <h2>Weather app</h2>
      <UnitSelect />

      <p style={{ padding: "20px 0" }}>1) Enter the region name</p>

      <SearchInput />
      <WeatherDisplay />
    </>
  );
}
