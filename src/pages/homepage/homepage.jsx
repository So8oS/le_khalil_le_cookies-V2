import React from "react";
import { Cardlist } from "../../componants/cardlist/cardlist";
import './homepage.css'
import { Outlet } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Cardlist />
      
    </div>
  );
};
