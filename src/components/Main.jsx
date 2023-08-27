import React, { useState, useEffect } from "react";
import Drinks from "./images/04.jpg";
import { Thanks } from "./Pages/Thanks";
import { Link } from "react-router-dom";

export const Main = () => {
  const [cocktails, setCocktails] = useState([]);
  const [openImageIndex, setOpenImageIndex] = useState(null);

  useEffect(() => {
    // Define las URLs de las API que deseas consultar
    const urls = [
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni",
    ];

    // Utiliza Promise.all() para realizar las solicitudes de API en paralelo
    Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    )
      .then((dataArray) => {
        // Combina los resultados de todas las solicitudes en una sola matriz
        const allCocktails = dataArray.reduce((acc, data) => {
          return acc.concat(data.drinks || []);
        }, []);

        // Asigna la matriz combinada al estado
        setCocktails(allCocktails);
      })
      .catch((error) => {
        console.error("Error al consultar las API: ", error);
      });
  }, []);

  const openImage = (index) => {
    setOpenImageIndex(index);
  };

  const closeImage = () => {
    setOpenImageIndex(null);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="">
      <div className="stories">
        <div className="center">
          <Link to="/thanks">
            <img src={Drinks} className="new" alt="" />
          </Link>
          <div className="post">Thanks for visit!</div>
        </div>
      </div>

      <div className="seccion">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-grid-3x3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-film"
          viewBox="0 0 16 16"
        >
          <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-person-rolodex"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
        </svg>
      </div>
      <main>
        {openImageIndex !== null && (
          <div
            className="box2"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              background: "red",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              opacity: 1,
            }}
            onClick={closeImage}
          >
            <div className="box4">
              <p className="cocktail-dates">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-cup-straw"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" />
                </svg>
                <p className="cocktail-info">bemydesire.bar</p>

                <svg
                  class=""
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
              </p>
              <img
                className="box3"
                style={{ width: "280px", height: "280px" }}
                src={cocktails[openImageIndex].strDrinkThumb}
                alt={cocktails[openImageIndex].strDrink}
              />
              <p className="cocktail-ingredients">
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
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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

                <svg
                  class="icons"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </p>
              <div className="cocktail-info">
                <p className="cocktail-name">
                  {cocktails[openImageIndex].strDrink}
                </p>
                <p className="cocktail-ingredients">
                  Ingredients: {cocktails[openImageIndex].strIngredients},
                  {cocktails[openImageIndex].strIngredient2},{" "}
                  {cocktails[openImageIndex].strIngredient3},{" "}
                  {cocktails[openImageIndex].strIngredient4}.
                </p>
                <p className="cocktail-instructions">
                  Instructions: {cocktails[openImageIndex].strInstructions}
                </p>
              </div>
            </div>
          </div>
        )}
        {cocktails.map((cocktail, index) => (
          <div className="box" key={index}>
            <div onClick={() => openImage(index)}>
              <img
                className="box"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
