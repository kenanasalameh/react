import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";

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

import "./Media.css";

export default function Media() {
  const [currentActive, setcurrentActive] = useState("videos");
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [currentActive, isRightVisible]);

  const allCards = {
    videos: [
      {
        id: "cardv1",
        img: imgv1,
        date: "11th Jun 2023",
        title: <i className="bi bi-play-btn"> 3 videos</i>,
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "cardv2",
        img: imgv2,
        date: "11th Jun 2023",
        title: <i className="bi bi-play-btn"> 3 videos</i>,
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: <i className="bi bi-arrow-right"></i>,
      },
      {
        id: "cardv3",
        img: imgv3,
        date: "11th Jun 2023",
        title: <i className="bi bi-play-btn"> 3 videos</i>,
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: <i className="bi bi-arrow-right"></i>,
      },
      {
        id: "cardv4",
        img: imgv4,
        date: "11th Jun 2023",
        title: <i className="bi bi-play-btn"> 3 videos</i>,
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: <i className="bi bi-arrow-right"></i>,
      },
    ],
    news: [
      {
        id: "n1",
        img: imgn1,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "n2",
        img: imgn2,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "n3",
        img: imgn3,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "n4",
        img: imgn4,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through th...",
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
    ],
    events: [
      {
        id: "e1",
        img: imgv1,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        faintText: (
          <>
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-slash-square"> Swehan Center</i>
          </>
        ),
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "e2",
        img: imgv2,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        faintText: (
          <>
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-slash-square"> Swehan Center</i>
          </>
        ),
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "e3",
        img: imgv3,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        faintText: (
          <>
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-slash-square"> Swehan Center</i>
          </>
        ),
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
      {
        id: "e4",
        img: imgv4,
        date: "11th JUN 2023",
        title1:
          "Name mattis felis id sodais rutrum. Nulla ornare tristique mauris , a loar through this servic you can benefit from culture,social,health and sports activities .eet erat ornar sit amet",
        description:
          "Apply to enrol in Balance between the Family & Work Workshop",
        faintText: (
          <>
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-calendar4"> 7/23/2024 11:00:00 AM</i>
            <br />
            <i className="bi bi-slash-square"> Swehan Center</i>
          </>
        ),
        linkText: (
          <>
            Read More <i className="bi bi-arrow-right"></i>
          </>
        ),
        linkUrl: "#",
      },
    ],
    gallery: [
      {
        id: "g1",
        img: imgg1,
        date: "11th JUN 2023",
        title: <i className="bi bi-card-image"> 10 Images</i>,
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),

        linkUrl: "#",
      },
      {
        id: "g2",
        img: imgg2,
        date: "11th JUN 2023",
        title: <i className="bi bi-card-image"> 10 Images</i>,
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),

        linkUrl: "#",
      },
      {
        id: "g3",
        img: imgg3,
        date: "11th JUN 2023",
        title: <i className="bi bi-card-image"> 10 Images</i>,
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),

        linkUrl: "#",
      },
      {
        id: "g4",
        img: imgg4,
        date: "11th JUN 2023",
        title: <i className="bi bi-card-image"> 10 Images</i>,
        description: "Apply to enrol in Balance between the Family & Work ...",
        linkText: (
          <>
            View Album &nbsp;<i className="bi bi-arrow-right"></i>
          </>
        ),

        linkUrl: "#",
      },
    ],
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 col-12">
            <div className="achiv-h">
              <span className="typewriter-wrapper">
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
            <div className="achiv-h1">
              <h1>Media Center</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-media" onMouseEnter={() => setIsRightVisible(true)}>
        <div className="left-sec ">
          <button
            onClick={() => setcurrentActive("videos")}
            className={currentActive === "videos" ? "active" : null}
          >
            videos
          </button>

          <button
            onClick={() => {
              setcurrentActive("news");
            }}
            className={currentActive === "news" ? "active" : null}
          >
            news
          </button>
          <button
            onClick={() => {
              setcurrentActive("events");
            }}
            className={currentActive === "events" ? "active" : null}
          >
            events
          </button>
          <button
            onClick={() => {
              setcurrentActive("gallery");
            }}
            className={currentActive === "gallery" ? "active" : null}
          >
            gallery
          </button>
        </div>
        <div className={`right-sectionm  ${isRightVisible ? "visible" : ""}`}>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            centerMode={false}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
          >
            {allCards[currentActive]?.map((card) => (
              <div key={card.id} className="cardi">
                <article className={`card ${animate ? "animate" : ""}`}>
                  {(currentActive === "videos" ||
                    currentActive === "gallery") && (
                    <>
                      <span className="watermark">{card.date}</span>
                      <img src={card.img} alt="" />
                      <div className="box">
                        <h5 className="title">{card.title}</h5>
                        <p className="dark-text">{card.description}</p>
                        <a href={card.linkUrl} className="gold-text">
                          {card.linkText}
                        </a>
                      </div>
                    </>
                  )}

                  {currentActive === "news" && (
                    <>
                      <span className="watermark">{card.date}</span>
                      <img src={card.img} alt="" />
                      <div className="box">
                        <p className="dark-text">{card.description}</p>
                        <h5 className="title">{card.title1}</h5>
                        <a href={card.linkUrl} className="gold-text">
                          {card.linkText}
                        </a>
                      </div>
                    </>
                  )}

                  {currentActive === "events" && (
                    <>
                      <span className="watermark">{card.date}</span>
                      <div className="box">
                        <p className="dark-text">{card.description}</p>
                        <p className="title1">{card.faintText}</p>
                        <h5 className="light-text1">{card.title1}</h5>
                        <a href={card.linkUrl} className="gold-text">
                          {card.linkText}
                        </a>
                      </div>
                    </>
                  )}
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
