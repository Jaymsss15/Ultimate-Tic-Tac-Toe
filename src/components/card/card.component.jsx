import React from "react";
import "./card.css";
import { PLACEHOLDER_CARD_PATH } from "../../constants";

function Card({ value, onSquareClick, cena }) {
    let card_img = "";

    if (value === "X" || value === "O") {
        card_img = "card-image";
    }

    return (
        <div className={card_img}>
            <button className={cena} onClick={onSquareClick}>
                {value === "X" && (
                    <img
                        src={`${PLACEHOLDER_CARD_PATH}${"cruz"}.png`}
                        alt="X"
                        className="card-cruz"
                    />
                )}
                {value === "O" && (
                    <img
                        src={`${PLACEHOLDER_CARD_PATH}${"circulo"}.png`}
                        alt="O"
                        className="card-circulo"
                    />
                )}
            </button>
        </div>
    );
}

export default Card;
