import React from "react";

const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating">
      <span style={{ color: "#fac941" }}>
        {rating >= 1 ? (
          <i className="fa-solid fa-star"></i>
        ) : rating >= 0.5 ? (
          <i className="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span style={{ color: "#fac941" }}>
        {rating >= 2 ? (
          <i className="fa-solid fa-star"></i>
        ) : rating >= 1.5 ? (
          <i className="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span style={{ color: "#fac941" }}>
        {rating >= 3 ? (
          <i className="fa-solid fa-star"></i>
        ) : rating >= 2.5 ? (
          <i className="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span style={{ color: "#fac941" }}>
        {rating >= 4 ? (
          <i className="fa-solid fa-star"></i>
        ) : rating >= 3.5 ? (
          <i className="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span style={{ color: "#fac941" }}>
        {rating >= 5 ? (
          <i className="fa-solid fa-star"></i>
        ) : rating >= 4.5 ? (
          <i className="fa-solid fa-star-half-stroke"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>{" "}
      {reviews && reviews}
    </div>
  );
};

export default Rating;
