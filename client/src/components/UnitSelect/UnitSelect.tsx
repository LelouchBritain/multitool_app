"use client";
import { TUnit, useWeather } from "@/context/WeatherContext";
import { ChangeEvent } from "react";

export default function UnitSelect() {
  const { unit, setUnit } = useWeather();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value as TUnit)
  }
  return (
    <div className="unit-select">
      <label htmlFor="pet-select">Temperature unit:</label>

      <select
        id="degrees-select"
        value={unit}
        onChange={(e) => handleChange(e)}
      >
        <option value="celcius">Celcius</option>
        <option value="kelvin">Kelvin</option>
      </select>
    </div>
  );
}
