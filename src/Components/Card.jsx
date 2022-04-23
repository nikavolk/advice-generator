import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const [advice, setAdvice] = useState(0);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip));
  };

  useEffect(fetchAdvice, []);

  return (
    <div className="main">
      <h1>Advice #{advice.id}</h1>
      <h2>“{advice.advice}”</h2>
      <hr />
      <button
        onClick={() => {
          fetchAdvice();
        }}
      >
        More advice
      </button>
    </div>
  );
};

export default Card;
