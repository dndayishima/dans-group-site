// import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";

import SliderContent from "../SliderContent";

import styles from "./Slider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className={styles.container}>
      <Carousel showThumbs={false}>
        <div>
          <SliderContent />
        </div>
        <div>
          <SliderContent />
        </div>
        <div>
          <SliderContent />
        </div>
        <div>
          <SliderContent />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
