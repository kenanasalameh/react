import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import logo1 from "../../asset/logo1.jpg";
import chrabout from "../../asset/chrabout.jpg";
import "./About.css";
import "../../App.css";

export default function About() {
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    if (!hasBeenHovered) {
      setHasBeenHovered(true);

      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }
  };

  return (
    <div className="container" id="aboutus" onMouseEnter={handleMouseEnter}>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8 col-12">
          <div className="about-h">
            <span style={{ display: "inline-block", minWidth: "100px" }}>
              <Typewriter
                words={["ABOUT US"]}
                loop={0}
                typeSpeed={150}
                deleteSpeed={150}
                cursor
                cursorStyle=""
              />
            </span>
          </div>
          <div className="about-h1">
            <h1>Who We Are</h1>
          </div>
        </div>
      </div>

      <div className="row about-section">
        <div className="col-md-7 col-12">
          <div className={`about-content ${isVisible ? "visible" : ""}`}>
            <p className="about-p">
              Since its establishment in May 2006, the Family Development
              Foundation has been seeking to develop its programs, services, and
              technical and media channels to present to you everything new that
              contributes to building a healthy family based on the bonds of
              love and respect, believing in the importance of preserving
              values, preserving principles, and transmitting them with complete
              sincerity and honesty to the new generation to be their stronghold
              and their protective shield from the dangers that may hinder their
              future.
            </p>
          </div>
          <div className={`about-content-p1 ${isVisible ? "visible" : ""}`}>
            <p className="about-p1">
              <span className="span-p1"></span> &nbsp;<b>Our Vision</b>
              <div>
                <p>Social and collective social development</p>
              </div>
            </p>
          </div>
          <div className={`about-content-p2 ${isVisible ? "visible" : ""}`}>
            <p className="about-p2">
              <span className="span-p2"></span> &nbsp;<b>Our Message</b>
              <div>
                <p>
                  Civilized contribution to developing areas of sustainable
                  social <br />
                  development and achieving family and community well-being
                  <br />
                  with high efficiency in participatory institutional
                  performance{" "}
                </p>
              </div>
            </p>
          </div>
        </div>

        <div className="col-md-5 col-12">
          <div
            className={`about-image ${isVisible ? "visible" : ""}`}
            style={{ position: "relative" }}
          >
            <img src={chrabout} alt="About" className="img-fluid rounded" />
            <div className="about-image-text">
              <img src={logo1} alt="Overlay" className="imgr" />
            </div>
          </div>
   
  

        </div>
      </div>
    </div>
  );
}
