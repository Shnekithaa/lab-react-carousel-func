import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

const Carousel = () => {
  const [count, setCount] = useState(0);

  const handleClick = (operation) => {
    if (operation === "left") {
      setCount((prevCount) => (prevCount !== 0 ? prevCount - 1 : images.length - 1));
    } else {
      setCount((prevCount) => (prevCount !== images.length - 1 ? prevCount + 1 : 0));
    }
  };

  return (
    <div id="carousel">
      <div id="inner-carousel" style={{ backgroundImage: `url(${images[count].img})` }}>
        <div id="left-button" onClick={() => handleClick("left")}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: "30px" }} />
        </div>
        <div id="center-text">
          <h1>{images[count].title}</h1>
          <p>{images[count].subtitle}</p>
        </div>
        <div id="right-button" onClick={() => handleClick("right")}>
          <ArrowForwardIosIcon style={{ color: "white", fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
