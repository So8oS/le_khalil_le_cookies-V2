import React from "react";
import "./card.css";
export const Card = ({ name, pic, disc, price }) => {
  return (
    <div>
      <div className="card-container">
        <div className="pic">
          <img src={pic} alt="" />
        </div>

        <div className="name">
          <h2 className="item-name">{name}</h2>
        </div>

        <div className="details">
          <p>{disc}</p>
        </div>

        <div className="paying">
          <h3>{price}</h3>
          <br />
          <button className="add">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
