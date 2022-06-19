import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Fragment } from "react";
export const Footer = () => {
  return (
    
     <div className="footer-container">
      <div className="icons">

        <a href="https://github.com/So8oS/le_khalil_le_cookies-V2" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon1" />
        </a>   

        <a href="https://www.instagram.com/cookiemonster.ist/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="icon2" href="https://www.instagram.com/cookiemonster.ist/" />
        </a>   


      </div>


    </div>
      
  
  );
};
