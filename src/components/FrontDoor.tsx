import React from "react";
import homeImage from "../../public/home.png";
import "../../public/styles.css";

const FrontDoor = () => {
  return (
    <div className="page-text">
      <p className="fade-in-text">welcome! i'm janabel :)</p>
      <img src={homeImage} width={"50%"} className="fade-in-text-delay"></img>
      <p style={{ left: "80%" }} className="fade-in-text-delay-2">
        please feel free to click on any links that look interesting to you~
      </p>
    </div>
  );
};

export default FrontDoor;
