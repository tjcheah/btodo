import React from "react";
import logo from "./logo.svg";
import data_array from "./obj.js";
import Shuffle from "./Shuffle.js";
import "./App.css";
export default function Recommendation() {
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
        if (list.price > 0.0) {
          var harga = "$$";
        } else {
          var harga = "Free";
        }
        return (
          <div class="scale" id="box-button">
            <img src={logo} className="Logo" alt="logo" />
            <p>{list.activity}</p>
          </div>
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
