import React, { useEffect, useState } from "react";
import state from "../city.js";
import Codes from "../statecode.js";

const Weather = () => {
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleStateChange = (e) => {
    setCities(state[e.target.value]);
    setSelectedState(Codes[e.target.value]);
  };

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };

  useEffect(() => {
    console.log(selectedState);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${selectedState}&appid=a497affed95ab5458861828d628571ee&units=metric`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  return (
    <div className="Container">
      <label for="state">Choose a state:</label>
      <select name="states" onChange={handleStateChange}>
        <option value="none">None</option>
        {Object.keys(state).map((s) => {
          return (
            <option key={s} value={s}>
              {s.replace("_", " ")}
            </option>
          );
        })}
      </select>
      <label for="city">Choose a city:</label>
      <select name="city" onChange={handleCityChange}>
        <option value="none">None</option>
        {cities.map((c) => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Weather;
