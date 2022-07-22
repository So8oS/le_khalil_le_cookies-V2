import React from "react";
import "./card.css";
export const Card = ({ id,name, pic, disc, price }) => {
  const handleClick = () => {
    const data = JSON.parse(localStorage.getItem("cart") )|| [];
    if(data.filter((item) => item?.id === id).length !== 0) return alert("This product has already been added");
    if(data){
      localStorage.setItem('cart', JSON.stringify([
        ...data,
        {
          id: id,
          name: name,
          pic: pic,
          disc: disc,
          price: price,
        }
      ]))
    } else localStorage.setItem('cart', JSON.stringify([
        {
          id: id,
          name: name,
          pic: pic,
          disc: disc,
          price: price,
        }
      ]))
  };
  return (
    <div>
      <div className="card-container">
        <div className="card-img-container">
          <img className="card-img" src={pic} alt="dessert pic" />
        </div>
        <div className="name">
          <h2 className="item-name">{name}</h2>
        </div>
          <p className="details">{disc}</p>
          <h3 className="paying">{price}</h3>
          <button className="add" onClick={handleClick}>Add to cart</button>
       
      </div>
    </div>
  );
};
