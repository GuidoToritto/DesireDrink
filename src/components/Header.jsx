import React from "react";
import Desire from "./images/01.png";


export const Header = () => {

  
  
  return (
    <div>
      <header>
        <img className="photo" src={Desire} alt="" />

        <div className="total-info">
          <div className="top">
            <img className="photo2" src={Desire} alt="" />
            <div className="">
              <div className="name2">bemydesire.bar</div>
              <div className="top2">
                <div className="name">bemydesire.bar</div>
                <div className="btn">
                  Following <i class="bi bi-chevron-down"></i>
                </div>
                <div className="btn">Message</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="dates">
            <div className="">123 post</div>
            <div className="">456 followers</div>
            <div className="">789 following</div>
          </div>

          <div className="info">
            <div className="desire-bar">Desire Bar</div>
            <div>-We work for your more deep desires</div>
            <div>-Sunday to Sunday 00:00 am - 00:00 pm</div>
            <div>-Location: Fake St 123</div>
          </div>
          <div className="followed">
            Followed by yourbestfriend, needknow, thisproject + 8 more
          </div>
        </div>
      </header>

      
    </div>
  );
};
