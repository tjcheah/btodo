import React from "react";
import Carousel from "react-elastic-carousel";
import {
  BrowserRouter as 
  Route,
  BrowserRouter,
} from "react-router-dom";
import Images from "./Images/Image";
import "./App.css";
import { useHistory } from "react-router-dom";
import Recreation from "./Recommendation/Recreation";
import Education from "./Recommendation/Education";
import Cooking from "./Recommendation/Cooking";
import Charity from "./Recommendation/Charity";
import Sport from "./Recommendation/Sport";
import Social from "./Recommendation/Social";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Categories() {
  const history = useHistory();
  return (
    <BrowserRouter>
    {/* Define route path */}
      <Route path="/recreation" component={Recreation} />
      <Route path="/education" component={Education} />
      <Route path="/cooking" component={Cooking} />
      <Route path="/charity" component={Charity} />
      <Route path="/sport" component={Sport} />
      <Route path="/social" component={Social} />

      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/recreation")}
          >
            <img src={Images.recreation} className="Logo" alt="" />
            <p>Recreational</p>
          </button>
          <button class="scale" id="box-button" onClick={() => history.push("/education")}>
            <img src={Images.education} className="Logo" alt="" />
            <p>Education</p>
          </button>
          <button class="scale" id="box-button" onClick={() => history.push("/cooking")}>
            <img src={Images.cooking} className="Logo" alt="" />
            <p>Cooking</p>
          </button>
          <button class="scale" id="box-button" onClick={() => history.push("/charity")}>
            <img src={Images.charity} className="Logo" alt="" />
            <p>Charity</p>
          </button>
          <button class="scale" id="box-button" onClick={() => history.push("/sport")}>
            <img src={Images.sport} className="Logo" alt="" />
            <p>Sport</p>
          </button>
          <button class="scale" id="box-button" onClick={() => history.push("/social")}>
            <img src={Images.social} className="Logo" alt="" />
            <p>Social</p>
          </button>
        </Carousel>
      </div>
    </BrowserRouter>
  );
}

export default Categories;
