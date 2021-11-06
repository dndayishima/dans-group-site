// import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";

import styles from "./Slider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className={styles.container}>
      <Carousel className={styles.test}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    </div>
  );
};

export default Slider;
