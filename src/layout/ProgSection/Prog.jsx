import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Prog.css";
import "../../App.css";
import imagp from "../../asset/imagp.jpg";

export default function Prog() {
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [showProg, setShowProg] = useState(false);

  const handleMouseEnter = () => {
    if (!hasBeenHovered) {
      setHasBeenHovered(true);

      setTimeout(() => {
        setShowProg(true);
      }, 300);
    }
  };

  return (
    <div className="container" id="prog" onMouseEnter={handleMouseEnter}>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8 col-12">
          <div className="prog-h">
            <span style={{ display: "inline-block", minWidth: "100px" }}>
              <Typewriter
                words={["PROGRAM"]}
                loop={0}
                typeSpeed={150}
                deleteSpeed={150}
                cursor
                cursorStyle=""
              />
            </span>
          </div>

          <div className="prog-h1">
            <h1>Program and Initiatives</h1>
          </div>
        </div>
      </div>

      <div className="row prog-section">
        <div className="col-md-7 col-12">
          <div
            className={`prog-content ${
              showProg ? "fade-left fade-left-delay" : "hidden-left"
            }`}
          >
            <h6 id="progi">Program and Initiatives</h6>
            <h2 id="upg">
              Upbringing of Adolescents <br />
              (Positive Parenting)
            </h2>

            <div
              className={`prog-content ${
                showProg ? "fade-left fade-left-delay" : "hidden-left"
              }`}
            >
              <span className="span-prog"></span>
            </div>
          </div>

          <div
            className={`prog-content-p2 ${
              showProg ? "fade-left fade-left-delay" : "hidden-left"
            }`}
          >
            <p className="prog-p2">
              The platform is concerned with developing parental skills to be
              able to deal
              <br />
              with children in adolescence, and focuses on
              <br />
              the social, psychological, educational, religious, health,
              financial, and digital
              <br />
              world aspects, in addition to developmental characteristics and
              physical
              <br />
              changes and how to deal with them.
            </p>

            <button id="btn1-prog" className="btn">
              Subscribe
            </button>
          </div>
        </div>

        <div className="col-md-5 col-12">
          <div className="prog-img-wrapper">
            <img
              src={imagp}
              alt="prog-top"
              className={`prog-img top-half ${
                showProg ? "slide-in-right" : ""
              }`}
            />

            <img
              src={imagp}
              alt="prog-bottom"
              className={`prog-img bottom-half ${
                showProg ? "slide-in-left" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
