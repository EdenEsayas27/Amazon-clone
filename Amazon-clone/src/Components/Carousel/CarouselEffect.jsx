import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import classes from "./carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true} // Ensure correct casing
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        interval={3000} // Set the interval in milliseconds
        stopOnHover={true}
      >
        {img.map((imageLink,index) => {
          return <img  key={index} src={imageLink} />;
        })}
      </Carousel>
       <div className={classes.hero__img}></div> 
    </div>
  );
 
}
 export default CarouselEffect;