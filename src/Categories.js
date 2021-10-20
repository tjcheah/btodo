import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function Categories() {
  const [ActivityDet, setADetails] = useState("");
  const [Activity, setActivity] = useState("");
  const [Type, setType] = useState("");
  const [Participant, setParticipant] = useState("");

  // fetch api //
  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setADetails(data));
  }, []);

  return (
    <div id="bored-container">
      <h1>Bored?</h1>
      <div id="box-container">
        <button class="scale" id="box-button">
          <img src={logo} className="Logo" alt="logo" />
          <p>Type: {ActivityDet.type}</p>
        </button>
        <button class="scale" id="box-button">
          <img src={logo} className="Logo" alt="logo" />
          <p>Type: {ActivityDet.type}</p>
        </button>
        <button class="scale" id="box-button">
          <img src={logo} className="Logo" alt="logo" />
          <p>Type: {ActivityDet.type}</p>
        </button>
        <button class="scale" id="box-button">
          <img src={logo} className="Logo" alt="logo" />
          <p>Type: {ActivityDet.type}</p>
        </button>
      </div>
    </div>
  );
}
