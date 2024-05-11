import React from "react";
import "./SingleCard.css";
const SingleCard = ({ image, title, overview, popularity, release_date }) => {
  return (
    <div className="container">
      <div className="single-card text-center m-auto mb-10">
        <img className="single-img" src={image} alt="image" />
        <div className="single-card__content">
          <h2 className="single-card__title text-white text-[30px] font-semibold">
            {title}
          </h2>
          <p className="pt-5 text-white">{popularity}</p>
          <p className="single-card__description text-white pt-5">{overview}</p>
          <p className="pt-5 text-white">Data: {release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
