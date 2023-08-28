import React from "react";
import { Link } from "react-router-dom";
import Desire from "../images/01.png";

export const Thanks = () => {
  return (
    <div className="thanks">
      <div className="line">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="screen-header">
        <img className="photoscreen" src={Desire} alt="" />
        <div className="fontdesire">bemydesire.bar</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-play-fill btn3"
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-volume-mute-fill
          btn3"
          viewBox="0 0 16 16"
        >
          <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
        </svg>
        <svg
          class="btn3"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>

        <div className="btn4">
          <Link className="btn2" to="/">
            Go back!
          </Link>
        </div>
      </div>

      <h1 className="thanks2">
        Thanks for visit, for more info. click the icons!!!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-90deg-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"
          />
        </svg>
      </h1>

      <div className="space2">
        <div className="space"></div>
        <svg
          class="h-4 w-4 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
        </svg>
        <svg
          class="h-4 w-4 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="10" y1="14" x2="21" y2="3" />
          <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
        </svg>
      </div>
    </div>
  );
};
