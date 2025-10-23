import React, { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Media.css";

import imgv1 from "../../asset/imgv1.jpg";
import imgv2 from "../../asset/imgv2.jpg";
import imgv3 from "../../asset/imgv3.jpg";
import imgv4 from "../../asset/imgv4.jpg";
import imgn1 from "../../asset/imgn1.jpg";
import imgn2 from "../../asset/imgn2.jpg";
import imgn3 from "../../asset/imgn3.jpg";
import imgn4 from "../../asset/imgn4.jpg";
import imgg1 from "../../asset/imgg1.jpg";
import imgg2 from "../../asset/imgg2.jpg";
import imgg3 from "../../asset/imgg3.jpg";
import imgg4 from "../../asset/imgg4.jpg";

const contentData = {
  Videos: [
    {
      watermark: "11th JUN 2023",
      image: imgv1,
      faintText: <i className="bi bi-play-btn"> 3 videos</i>,
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgv2,
      faintText: <i className="bi bi-play-btn"> 3 videos</i>,
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgv3,
      faintText: <i className="bi bi-play-btn"> 3 videos</i>,
      darkText: "Apply to enrol in Balance between the Family & Work Workshop ",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgv4,
      faintText: <i className="bi bi-play-btn"> 3 videos</i>,
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
  ],

  News: [
    {
      watermark: "11th JUN 2023",
      image: imgn1,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      faintText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgn2,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      faintText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgn3,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      faintText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgn4,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      faintText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
  ],

  Events: [
    {
      watermark: "11th JUN 2023",
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      faintText: (
        <>
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-slash-square"> Swehan Center</i>
        </>
      ),
      lightText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      faintText: (
        <>
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-slash-square"> Swehan Center</i>
        </>
      ),
      lightText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      faintText: (
        <>
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-slash-square"> Swehan Center</i>
        </>
      ),
      lightText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      darkText: "Apply to enrol in Balance between the Family & Work Workshop",
      faintText: (
        <>
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
          <br />
          <i className="bi bi-slash-square"> Swehan Center</i>
        </>
      ),
      lightText:
        "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
      goldText: (
        <>
          Read More &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
  ],

  Gallery: [
    {
      watermark: "11th JUN 2023",
      image: imgg1,
      faintText: <i className="bi bi-card-image"> 10 Images</i>,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgg2,
      faintText: <i className="bi bi-card-image"> 10 Images</i>,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgg3,
      faintText: <i className="bi bi-card-image"> 10 Images</i>,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
    {
      watermark: "11th JUN 2023",
      image: imgg4,
      faintText: <i className="bi bi-card-image"> 10 Images</i>,
      darkText: "Apply to enrol in Balance between the Family & Work ...",
      goldText: (
        <>
          View Album &nbsp;<i className="bi bi-arrow-right"></i>
        </>
      ),
    },
  ],
};

const items = [
  { id: 0, title: "Videos" },
  { id: 1, title: "News" },
  { id: 2, title: "Events" },
  { id: 3, title: "Gallery" },
];

export default function Media() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleSelect = (index) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedItem(index);
      setIsVisible(true);
    }, 300);
  };

  const selectedTitle = items[selectedItem].title;
  const data = contentData[selectedTitle];

  return (
    <div>
      <div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 col-12">
            <div className="media-h">
              <span style={{ display: "inline-block", minWidth: "100px" }}>
                <Typewriter
                  words={["MEDIA CENTER"]}
                  loop={0}
                  typeSpeed={150}
                  deleteSpeed={150}
                  cursor
                  cursorStyle=""
                />
              </span>
            </div>
            <div className="media-h1">
              <h1>Media Center</h1>
            </div>
          </div>
          <div
            className="col-md-4 col-12 text-md-end text-center"
            id="media-btn"
          >
            <button className="view-all-btn">
              View All <i className="bi bi-chevron-compact-right"></i>
            </button>
          </div>
        </div>

        <div className="sec-media">
          <div className="hover-section">
            <div className="left-section">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`left-item ${
                    selectedItem === index ? "active" : ""
                  }`}
                  onClick={() => handleSelect(index)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className={`right-section ${isVisible ? "show" : ""}`}>
              <div
                className={`grid-container ${
                  isVisible ? "fade-in" : "fade-out"
                }`}
                key={selectedTitle}
              >
                {selectedTitle === "Events" &&
                  data.map((d, i) => (
                    <div key={i} className="grid-item">
                      <div className="watermark">{d.watermark}</div>
                      <p className="dark-text1">{d.darkText}</p>
                      <p className="faint-text1">{d.faintText}</p>
                      <p className="light-text1">{d.lightText}</p>
                      <p className="gold-text1">{d.goldText}</p>
                    </div>
                  ))}

                {selectedTitle === "News" &&
                  data.map((d, i) => (
                    <div key={i} className="grid-item">
                      <div className="watermark">{d.watermark}</div>
                      <img src={d.image} alt={d.watermark} />
                      <p className="dark-text">{d.darkText}</p>
                      <p className="faint-text">{d.faintText}</p>
                      <p className="gold-text">{d.goldText}</p>
                    </div>
                  ))}

                {selectedTitle !== "News" &&
                  selectedTitle !== "Events" &&
                  data.map((d, i) => (
                    <div key={i} className="grid-item">
                      <div className="watermark">{d.watermark}</div>
                      <img src={d.image} alt={d.watermark} />
                      <p className="faint-text">{d.faintText}</p>
                      <p className="dark-text">{d.darkText}</p>
                      <p className="gold-text">{d.goldText}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
