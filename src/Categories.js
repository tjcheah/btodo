import React from "react";
import Carousel from "react-elastic-carousel";
import Images from "./images/Image";
import "./App.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Categories() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Recommendations</h1>
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
          <button class="scale" id="box-button">
            <img src={Images.recreation} className="Logo" alt="" />
            <p>Recreational</p>
          </button>
          <button class="scale" id="box-button">
            <img src={Images.education} className="Logo" alt="" />
            <p>Education</p>
          </button>
          <button class="scale" id="box-button">
            <img src={Images.cooking} className="Logo" alt="" />
            <p>Cooking</p>
          </button>
          <button class="scale" id="box-button">
            <img src={Images.charity} className="Logo" alt="" />
            <p>Charity</p>
          </button>
          <button class="scale" id="box-button">
            <img src={Images.sport} className="Logo" alt="" />
            <p>Sport</p>
          </button>
          <button class="scale" id="box-button">
            <img src={Images.social} className="Logo" alt="" />
            <p>Social</p>
          </button>
        </Carousel>
      </div>
    </>
  );
}

export default Categories;
