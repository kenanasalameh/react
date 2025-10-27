import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import imgc from "../../asset/imgc.jpg";
import facel from "../../asset/facel.jpg";
import instagram from "../../asset/instagram.jpg";
import twitterl from "../../asset/twitterl.jpg";
import youtubel from "../../asset/youtubel.jpg";
import "../../App.css";
import './Contact.css'

export default function Contact() {
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!hasBeenHovered) {
      setHasBeenHovered(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }
  };

  return (
    <div className="cont"    onMouseEnter={() => {
        handleMouseEnter();
        if (!hovered) setHovered(true);
      }}>
     {hovered && (
        <div className="bg">
          <div className="bg-left"></div>
          <div className="bg-right"></div>
        </div>
      )}
    
    <div
      className="container"
      id="contactus"
   
    >
 

      <div className="row justify-content-between align-items-center">
        <div className="col-md-8 col-12">
          <div className="contact-h">
            <span className="typewriter-wrapper">
              <Typewriter
                words={["CONTACT"]}
                loop={0}
                typeSpeed={150}
                deleteSpeed={150}
                cursor
                cursorStyle=""
              />
            </span>
          </div>
          <div className="contact-h1">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="row contact-section">
        <div className="col-md-7 col-12">
          <div className={`left-content ${isVisible ? "visible" : ""}`}>
              <div class="row">
                    <div class="col-4">
                      <div className="div-img-contact">
                        <img src={instagram} alt="insta" />
                        <img src={facel} alt="facebook" id="imgl" />
                        <img src={youtubel} alt="youtube" className="imgl" />
                        <img src={twitterl} alt="twitter" className="imgl" />
                      </div>
                    </div>
                    <div class="col-8">
                      <img src={imgc} alt="image" className="imgc" />
                    </div>
                  </div>
          </div>
        </div>

        <div className="col-md-5 col-12">
           <div className={`right-content ${isVisible ? "visible" : ""}`}>
                <p
                  className={`p1-cont animate-slide-up ${
                    hovered ? "visible" : ""
                  }`}
                >
                  Subscribe in our Newsletter
                </p>

                <span
                  className={`span2-cont animate-slide-up ${
                    hovered ? "visible" : ""
                  }`}
                ></span>

                <p
                  className={`p3-cont animate-slide-up ${
                    hovered ? "visible" : ""
                  }`}
                >
                  Nec sagittis aliquam malesuada bibendum arcu vitae elementum
                  curabiture vitea.
                  <br />
                  Nibhn sit amet commodo nulla facilisi.
                </p>

                <form className="form2">
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className={`form-label animate-slide-up ${
                        hovered ? "visible" : ""
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control animate-slide-up ${
                        hovered ? "visible" : ""
                      }`}
                      id="formGroupExampleInput"
                      placeholder="name"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className={`form-label animate-slide-up ${
                        hovered ? "visible" : ""
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className={`form-control animate-slide-up ${
                        hovered ? "visible" : ""
                      }`}
                      id="formGroupExampleInput2"
                      placeholder="email address"
                    />
                  </div>
                </form>

                <button
                  id="btn1-cont"
                  className={`btn animate-slide-up ${hovered ? "visible" : ""}`}
                >
                  Subscribe
                </button>
              </div>
        </div>
        </div>
      </div>
 </div>
  );
}
