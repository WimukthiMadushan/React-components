import React from "react";
import "./Card.css";
import test from "./../assets/test.jpg";

function Card() {
  return (
    <div className="card-container">
      <div className="image">
        <img src={test} alt="" />
      </div>
      <div className="content">
        <h3>This is the Content</h3>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <button>Button</button>
      </div>
    </div>
  );
}

export default Card;
