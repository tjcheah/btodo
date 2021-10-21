import data_array from "./obj.js";
import React, { useState } from "react";
function Filter() {
  const [filtered, setFilter] = useState(
    data_array.filter((data) => data.type === "recreational")
  );
  function filterBy(e) {
    var list = data_array.filter((data) => data.type === "recreational");
    if (e === "All") {
      setFilter(list);
    } else if (e === "Solo") {
      setFilter(list.filter((data) => data.participants === 1));
    } else if (e === "Group") {
      setFilter(list.filter((data) => data.participants > 1));
    } else if (e === "Free") {
      setFilter(list.filter((data) => data.price === 0.0));
    } else if (e === "Priced") {
      setFilter(list.filter((data) => data.price > 0.0));
    }
  }

  const mappingAct = (
    <div className="card-container">
      {filtered.map((list) => {
        if (list.price > 0.0) {
          var harga = "$$";
        } else {
          var harga = "Free";
        }
        return (
          <div className="card">
            <p>Activity: {list.activity}</p>
            <p>No. of participants: {list.participants}</p>
            <p>Type: {list.type}</p>
            <p>Price: {harga}</p>
          </div>
        );
      })}
    </div>
  );
  return (
    <div className="page-container">
      <div className="dropdown">
        <strong className="dropbtn">Filter by:</strong>
        <div className="dropmenu">
          <ul>
            <li
              onClick={() => {
                filterBy("All");
              }}
            >
              All
            </li>
            <li
              onClick={() => {
                filterBy("Solo");
              }}
            >
              Solo
            </li>
            <li
              onClick={() => {
                filterBy("Group");
              }}
            >
              Group
            </li>
            <li
              onClick={() => {
                filterBy("Free");
              }}
            >
              Free
            </li>
            <li
              onClick={() => {
                filterBy("Priced");
              }}
            >
              Priced
            </li>
          </ul>
        </div>
      </div>
      {mappingAct}
    </div>
  );
}

export default Filter;
