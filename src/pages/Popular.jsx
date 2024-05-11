import React, { useEffect, useState } from "react";
import "./NowPlaying.css";
import {
  ENV_API_TOKEN,
  ENV_HTTPS,
  ENV_KEY,
  ENV_IMG_URL,
} from "../hook/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingFilms } from "../redux-toolkit/FilmSlice";
import axios from "axios";
import PlayingFilm from "../components/PlayingFilm";
import { Pagination } from "@mui/material";

const Popular = () => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((state) => state.nowPlatyingFilms);
  const [popular, setPopular] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`${ENV_HTTPS}/movie/popular?api_key=${ENV_KEY}&page=${count}`, {
        headers: {
          Authorization: "Bearer " + ENV_API_TOKEN,
        },
      })
      .then((res) => {
        setPopular(res.data.total_pages);
        dispatch(getNowPlayingFilms(res.data.results));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [count]);

  const handleChangePagination = (e, page) => {
    setCount(page);
  };

  return (
    <div className="flex flex-wrap container gap-10 justify-center">
      {popularFilms.map((film) => (
        <PlayingFilm
          key={film.id}
          image={`${ENV_IMG_URL}${film.poster_path}`}
          id={film.id}
          original_title={film.original_title}
          popularity={film.popularity}
          release_date={film.release_date}
        />
      ))}
      <Pagination
        onChange={handleChangePagination}
        count={popular}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default Popular;
