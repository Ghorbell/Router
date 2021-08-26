import React from "react";


const StarRating = ({ rating ,handleRate}) => {
  const stars = (n) => {
    const star = [];
    for (let i = 1; i <=5; i++) {
      if (i <= n) {
        star.push(
          <span
            key={i}
            style={{
              color: "gold",
              fontSize: "20px",
            }}
            onClick={() => handleRate(i)}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            key={i}
            style={{
              color: "black",
              fontSize: "20px",
            }}
            onClick={() => handleRate(i)}
          >
            ★
          </span>
        );
      }
    }
    return star;
  };
  return <div>{stars(rating)}</div>;
};

export default StarRating;
