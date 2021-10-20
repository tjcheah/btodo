import logo from "./logo.svg";
import "./App.css";
import data_array from "./obj.js";
import Shuffle from "./Shuffle.js";

export default function Recommendation() {
  //fetch recommended activities//
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
