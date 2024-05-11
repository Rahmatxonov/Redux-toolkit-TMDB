import React, { useEffect, useState } from "react";
import "./NowPlaying.css";
import {
  ENV_API_TOKEN,
  ENV_HTTPS,
  ENV_IMG_URL,
  ENV_KEY,
} from "../hook/useAxios";
import { useDispatch, useSelector } from "react-redux";
import PlayingFilm from "../components/PlayingFilm";
import { getNowPlayingFilms } from "../redux-toolkit/FilmSlice";
import axios from "axios";
import { Pagination } from "@mui/material";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingList = useSelector((state) => state.nowPlatyingFilms);
  const [nowPlaying, setNowPlaying] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(`${ENV_HTTPS}/movie/now_playing?api_key=${ENV_KEY}&page=${count}`, {
        headers: {
          Authorization: "Bearer " + ENV_API_TOKEN,
        },
      })
      .then((res) => {
        setNowPlaying(res.data.total_pages);
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
      {nowPlayingList.map((film) => (
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
        count={nowPlaying}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default NowPlaying;
