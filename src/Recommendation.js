import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import data_array from "./obj.js";
import Shuffle from "./Shuffle.js";
import "./App.css";
export default function Recommendation() {
  const [ActivityDet, setADetails] = useState("");

  // fetch api //
  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setADetails(data));
  }, []);

  //fetch recommended activitiesy//
  var filter = data_array.filter(
    (data) =>
      data.price === 0.0 && data.accessibility === "Few to no challenges"
  );
  //randomize recommended
  var recommends = Shuffle(filter);

  const mappingRecs = (
    <div className="recommended">
      {recommends.slice(0, 5).map((list) => {
        return (
          <button class="scale" id="box-button">
            <img src={logo} className="Logo" alt="logo" />
            <p>Type: {list.type}</p>
          </button>
        );
      })}
    </div>
  );

  return (
    <div id="bored-container">
      <h1>Bored?</h1>
      <div id="box-container">{mappingRecs}</div>
    </div>
  );
}
