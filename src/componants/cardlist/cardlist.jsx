import React from "react";
import { Card } from "../card/card";
import { cookies } from "./cookies";
import './cardlist.css'
export const Cardlist = () => {
  return (
     <div className="card-list">
        {cookies.map((cookie) => {
          return <Card key={cookie.id} id={cookie.id} pic={cookie.pic} name={cookie.name} disc={cookie.disc} price={cookie.price} />;
        })}
      </div>
  );
};
