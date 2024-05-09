import React from "react";

const PlayingFilm = ({ image, original_title, popularity, release_date }) => {
  return (
    <div>
      <div className="card text-white mt-[50px] text-center">
        <img src={image} alt="image" className="image w-full h-[160px]" />
        <h2 className="text-white font-semibold">Name: {original_title}</h2>
        <p className=" text-white">Data: {release_date}</p>
        <p className="">Rating: {popularity}</p>
      </div>
    </div>
  );
};

export default PlayingFilm;
