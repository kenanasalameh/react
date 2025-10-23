import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Achiv.css";
import "../../App.css";


import vec1 from "../../asset/vec1.jpg";
import vec2 from "../../asset/vec2.jpg";
import vec3 from "../../asset/vec3.jpg";
import vec4 from "../../asset/vec4.jpg";
import vec5 from "../../asset/vec5.jpg";
import vec6 from "../../asset/vec6.jpg";
import vec7 from "../../asset/vec7.jpg";
import vec8 from "../../asset/vec8.jpg";
import vec9 from "../../asset/vec9.jpg";
import vec10 from "../../asset/vec10.jpg";
import vec11 from "../../asset/vec11.jpg";

const Achiv = () => {
  setTimeout(() => {
    const counters = document.querySelectorAll(".albateen-statistics");
    const speed = 300;

    counters.forEach((counter) => {
      const target = +counter.getAttribute("dataTarget");
      let count = 0;

      if (!target) return;

      const updateCount = () => {
        const inc = Math.max(1, Math.round(target / speed));
        count += inc;

        if (count >= target) {
          count = target;
          counter.innerHTML = `<span>${count}</span>`;
          const span = counter.querySelector("span");
          span.classList.add("animate-count");
          setTimeout(() => {
            span.classList.remove("animate-count");
          }, 100);
          return;
        }

        counter.innerHTML = `<span>${count}</span>`;
        const span = counter.querySelector("span");
        span.classList.add("animate-count");
        setTimeout(() => {
          span.classList.remove("animate-count");
        }, 100);

        setTimeout(updateCount, 10);
      };

      updateCount();
    });
  }, 500);
  const [showAchievements, setShowAchievements] = useState(false);

  const handleMouseEnter = () => {
    if (!showAchievements) {
      setShowAchievements(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8 col-12">
          <div className="achiv-h">
            <span style={{ display: "inline-block", minWidth: "100px" }}>
              <Typewriter
                words={["ACHIEVEMENTS"]}
                loop={0}
                typeSpeed={150}
                deleteSpeed={150}
                cursor
                cursorStyle=""
              />
            </span>
          </div>
          <div className="achiv-h1">
            <h1>Our Achievements</h1>
          </div>
        </div>
      </div>

      <div
        className={`achiv-sec col-12 ${
          showAchievements ? "fade-in" : "hidden-init"
        }`}
        onMouseEnter={handleMouseEnter}
      >
        <div className="container">
          <div className="row">
            <div
              className={`col ${
                showAchievements ? "fade-left fade-left-delay" : "hidden-left"
              }`}
            >
              <img src={vec1} className="vec1" alt="vec1" />
              <img src={vec9} className="vec9" alt="vec9" />
            </div>

            <div className="col">
              <img
                src={vec3}
                className={`vec3 fade-only-init ${
                  showAchievements ? "fade-only-active" : ""
                }`}
              />
              <img
                src={vec4}
                className={`vec4 fade-only-init ${
                  showAchievements ? "fade-only-active" : ""
                }`}
              />
            </div>

            <div
              className={`col ${
                showAchievements
                  ? "fade-right fade-right-delay"
                  : "hidden-right"
              }`}
            >
              <img src={vec10} className="vec10" alt="vec10" />
              <img src={vec11} className="vec11" alt="vec11" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className={`col-4 ${
                showAchievements ? "fade-left fade-left-delay" : "hidden-left"
              }`}
            >
              <img src={vec8} className="vec8" alt="vec8" />
              <img src={vec7} className="vec7" alt="vec7" />
              <img src={vec6} className="vec6" alt="vec6" />
            </div>
            <div
              className={`col-4 ${
                showAchievements
                  ? "fade-right fade-right-delay"
                  : "hidden-right"
              }`}
            >
              <img src={vec2} className="vec2" alt="vec2" />
              <img src={vec5} className="vec5" alt="vec5" />
            </div>
          </div>
        </div>

        <div class="container text-center" id="achiv-cont">
          <div class="row">
            <div
              class={`col ${
                showAchievements ? "fade-left fade-left-delay" : "hidden-left"
              }`}
              id="t1"
            >
              <h6>
                Total Number of
                <br />
                <span className="r">
                  Clients
                  <br />
                  <span>1532</span>
                </span>
              </h6>
            </div>
            <div class="col" id="t2">
              <h6>
                Total Number of
                <br />
                <span className="r">
                  Services Proviced
                  <br />
                  <span>283</span>
                </span>
              </h6>
            </div>
            <div
              class={`col-4 ${
                showAchievements
                  ? "fade-right fade-right-delay"
                  : "hidden-right"
              }`}
              id="t3"
            >
              <h6>
                Total Number of
                <br />
                <span className="r">
                  {" "}
                  Research and Studies
                  <br />
                  <span>46</span>
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="w">
          <div class="containertext-center">
            <div class="row">
              <div
                class={`col-4 ${
                  showAchievements ? "fade-left fade-left-delay" : "hidden-left"
                }`}
                id="w1"
              >
                <h6>
                  Total Number of
                  <br />
                  <span className="r">
                    {" "}
                    Services
                    <br />
                    <span>25</span>
                  </span>
                </h6>
              </div>
              <div
                class={`col-4 ${
                  showAchievements
                    ? "fade-right fade-right-delay"
                    : "hidden-right"
                }`}
                id="w2"
              >
                <h6>
                  Total Number of
                  <br />
                  <span className="r">
                    {" "}
                    Consultation Provided
                    <br />
                    <span>63</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achiv;
