"use client";
import React, { useEffect, useState } from "react";
import "./SearchInput.sass";
import { axiosApiClient } from "@/helpers/axiosApiClient";
import { ICity } from "@/interfaces/ICity";
import axios from "axios";
import { useWeather } from "@/context/WeatherContext";

const renameCountries = async (cities: ICity[]) => {
  const updatedCountryNames = await Promise.all(
    cities.map(async (city) => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/alpha/${city.country}`
      );
      const countryName = data?.[0]?.name?.common ?? city.country;
      return { ...city, country: countryName };
    })
  );
  return updatedCountryNames;
};

export default function SearchInput() {
  const [inputText, setInputText] = useState<string>("");
  const [cityData, setCityData] = useState<ICity[]>([]);
  const [isPopupVisible, setisPopupVisible] = useState<boolean>(true);
  const { setWeatherData } = useWeather();

  const handleBlur = () => {
    setTimeout(() => setisPopupVisible(false), 150);
  };
  const handleFocus = async () => {
    if (inputText.trim().length > 0 && cityData.length > 0) {
      setisPopupVisible(true);
    }
  };

  const handleRowClick = async (longitude: number, latitude: number) => {
    try {
      const { data } = await axiosApiClient.get(
        `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`
      );
      console.log(data);

      setWeatherData(data);
      setCityData([]);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    if (!inputText.trim()) return;

    const timeOut = setTimeout(async () => {
      try {
        const { data } = await axiosApiClient.get(
          `/geo/1.0/direct?q=${inputText}&limit=5&appid=${process.env.WEATHER_API_KEY}`
        );
        const cities: ICity[] = data;

        if (cities.length > 0) {
          const renamedCountries = await renameCountries(cities);
          setCityData(() => [...renamedCountries]);
        }
      } catch (err) {
        console.error("Error", err);
      }
    }, 1500);

    return () => clearTimeout(timeOut);
  }, [inputText]);

  return (
    <div className="search">
      <input
        type="text"
        id="geo-search"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onFocus={() => handleFocus()}
        onBlur={(e) => handleBlur()}
        autoComplete="off"
      />
      {cityData.length > 0 && isPopupVisible && (
        <div className="search__popup">
          <div className="search__info">
            <p className="search__name">Name</p>
            <p className="search__country">Country</p>
            <p className="search__state">State</p>
          </div>
          {cityData.map((city, index) => (
            <div
              className="search__row"
              key={crypto.randomUUID()}
              onClick={() => handleRowClick(city.lon, city.lat)}
            >
              <p className="search__name">{city.name}</p>
              <p className="search__country">{city.country}</p>
              <p className="search__state">{city?.state}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
