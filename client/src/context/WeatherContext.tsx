"use client";
import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export type TUnit = "celcius" | "kelvin";

interface IWeatherContext {
  weatherData: any;
  setWeatherData: (data: any) => void;
  unit: TUnit;
  setUnit: (unit: TUnit)=> void;
}

const WeatherContext = createContext<IWeatherContext | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [unit, setUnit] = useState<TUnit>("celcius");

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather только внутри провайдера");
  }
  return context;
};
