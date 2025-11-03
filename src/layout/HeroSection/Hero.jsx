import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../asset/img1.jpg";
import imgg from "../../asset/imgg.jpg";
import imgmain from "../../asset/imgmain.jpg";
import "./Hero.css";

const images = [
  {
    img: img1,
    topText: (
      <h5>
        Building a<br /> Foundation of
        <br /> love and <span className="spanh">Support</span>
      </h5>
    ),
    bottomText: (
      <div className="secbottom">
        <p className="p-over">A campaign of affection and mercy </p>
        <button id="btnh">Join Us</button>
      </div>
    ),
  },
  {
    img: imgg,
    topText: (
      <h5>
        Seeking Family
        <br />
        <span className="spanh">Solutions</span>
      </h5>
    ),
    bottomText: (
      <div className="secbottom">
        <p className="p-over">Discover Solution and Support</p>
        <button id="btnh">Join Us</button>
      </div>
    ),
  },
  {
    img: imgmain,
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    setShowControls(false); 
    const timer = setTimeout(() => {
      setShowControls(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Carousel
      showArrows={currentIndex !== 2 && showControls}
      showIndicators={currentIndex !== 2 && showControls}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      interval={4000}
      stopOnHover={false}
      transitionTime={1000}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`prog1-img-wrapper ${index === 2 ? "is-third-slide" : ""}`}
        >
          <img
            src={img.img}
            alt={`Image ${index}-top`}
            className={`prog-img top-half ${
              currentIndex === index ? "slide-in-right" : ""
            }`}
          />
          <img
            src={img.img}
            alt={`Image ${index}-bottom`}
            className={`prog-img bottom-half ${
              currentIndex === index ? "slide-in-left" : ""
            }`}
          />

          {index !== 2 && (
            <div
              className={`overlay-wrapper ${
                currentIndex === index ? "overlay-merge" : ""
              }`}
            >
              <div className="overlay-half top-half">
                <div className="overlay-text">{img.topText}</div>
              </div>
              <div className="overlay-half bottom-half">
                <div className="overlay-text">{img.bottomText}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
