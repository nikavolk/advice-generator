import Dice from "../Assets/Images/icon-dice.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const [advice, setAdvice] = useState(0);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchAdvice, []);

  return (
    <div className="main">
      <h1>Advice #{advice.id}</h1>
      <h2>“{advice.advice}”</h2>
      <div className="divider"></div>
      <button
        onClick={() => {
          fetchAdvice();
        }}
      >
        <img src={Dice} alt="Roll the Doice. Noice!"></img>
      </button>
    </div>
  );
};

export default Card;
