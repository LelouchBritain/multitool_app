import React from "react";
import SearchInput from "../Search/SearchInput";

export default function WheaterApp() {
  return <>
    <h2>Weather app</h2>
    <p style={{padding: "20px 0"}}>1) Enter the region name</p>
    <SearchInput />
  </>;
}
