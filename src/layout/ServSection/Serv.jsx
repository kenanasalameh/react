import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Serv.css";
import "../../App.css";

import ba2 from "../../asset/ba2.jpg";
import ba1 from "../../asset/ba1.jpg";
import ba3 from "../../asset/ba3.jpg";
import ba4 from "../../asset/ba4.jpg";
import ba5 from "../../asset/ba5.jpg";
import ba6 from "../../asset/ba6.jpg";
import ba7 from "../../asset/ba7.jpg";

export default function Serv() {
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const boxes = [
    {
      id: 1,
      title: "Senior Citizen's",
      description: "Services",
      borderColor: "var(--box1--color)",
      backgroundColor: "rgba(181, 162, 105, 0.1)",
      backgroundImage: `url(${ba1})`,
    },
    {
      id: 2,
      title: "Kids",
      description: "Services",
      borderColor: "var(--box2--color)",
      backgroundColor: "rgba(254, 197, 45, 0.1)",
      backgroundImage: `url(${ba2})`,
    },
    {
      id: 3,
      title: "Youth",
      description: "Services",
      borderColor: "var(--box3--color)",
      backgroundColor: "rgba(194, 220, 118, 0.1) ",
      backgroundImage: `url(${ba3})`,
    },
    {
      id: 4,
      title: "Women's",
      description: "Services",
      borderColor: "var(--box4--color)",
      backgroundColor: "rgba(127, 37, 41, 0.1) ",
      backgroundImage: `url(${ba4})`,
    },
    {
      id: 5,
      title: "Parent",
      description: "Services",
      borderColor: "var(--box5--color)",
      backgroundColor: "rgba(174, 183, 191, 0.1)",
      backgroundImage: `url(${ba5})`,
    },
    {
      id: 6,
      title: "Spouse",
      description: "Services",
      borderColor: "var(--box6--color)",
      backgroundColor: "rgba(100, 40, 111, 0.1) ",
      backgroundImage: `url(${ba6})`,
    },
    {
      id: 7,
      title: "Men's",
      description: "Services",
      borderColor: "var(--box7--color)",
      backgroundColor: "rgba(72, 159, 153, 0.1) ",
      backgroundImage: `url(${ba7})`,
    },
    {
      id: 8,
      title: "Family",
      description: "Services",
      borderColor: "var(--box8--color)",
      backgroundColor: "rgba(120, 83, 55, 0.1)",
      backgroundImage: `url(${ba1})`,
    },
  ];

  const handleMouseEnter = () => {
    if (!hasBeenHovered) setHasBeenHovered(true);

    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="serv">
      <div className="container" onMouseEnter={handleMouseEnter}>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 col-12">
            <div className="serv-h">
              <span style={{ display: "inline-block", minWidth: "100px" }}>
                <Typewriter
                  words={["SERVICES"]}
                  loop={0}
                  typeSpeed={150}
                  deleteSpeed={150}
                  cursor
                  cursorStyle=""
                />
              </span>
            </div>
            <div className="serv-h1">
              <h1>Electronic Services</h1>
            </div>
          </div>

          <div
            className="col-md-4 col-12 text-md-end text-center"
            id="serv-btn"
          >
            <button className="view-all-btn">
              View All <i className="bi bi-chevron-compact-right"></i>
            </button>
          </div>
        </div>

        <div className={`sec-serv ${isVisible ? "visible" : ""}`}>
          <div className="hover-section">
            <div className="box-grid show">
              {boxes.map((box) => (
                <div
                  key={box.id}
                  className="animated-box"
                  style={{
                    border: `2px solid ${box.borderColor}`,
                    backgroundColor: box.backgroundColor,
                    backgroundImage: box.backgroundImage,
                    backgroundPosition: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  <span
                    className="box-bar"
                    style={{ backgroundColor: box.borderColor }}
                  ></span>
                  <div className="box-content">
                    <h4>{box.title}</h4>
                    <p>{box.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
