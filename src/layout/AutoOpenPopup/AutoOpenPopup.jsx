import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "../../App.css";
import "reactjs-popup/dist/index.css";

import "../AutoOpenPopup/AutoOpenPopup.css";

function FullModalPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (open) {
      document.body.style.overflow = "hidden";
      if (hero) hero.classList.add("disable-hero");
    } else {
      document.body.style.overflow = "auto";
      if (hero) hero.classList.remove("disable-hero");
    }
  }, [open]);

  return (
    <Popup
      open={open}
      modal
      closeOnDocumentClick={false}
      onClose={() => setOpen(false)}
      contentStyleClassName="constyle"

    overlayClassName="popup-overlay"
    >
      <div className="full-modal-content">
        <button
          type="button"
          class="btnm"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <i class="bi bi-x-lg"></i>
        </button>

        <h5 className="h2">Welcome to Family Development<br/> Foundation</h5>
        <p>
          This quick tour will guid you throught the key features <br />
          of our platform, helping you navigate with ease and <br />
          make the modt of your experience.
        </p>
        <div className="btt">
          <button className="bt1">Start Tour</button>
          <button className="bt" onClick={() => setOpen(false)}>
            Skip For Now
          </button>
        </div>
      </div>
    </Popup>
  );
}

export default FullModalPopup;
