// import React, { useEffect } from "react";
// import "./NowPlaying.css";
// import { ENV_API_TOKEN, ENV_HTTPS, ENV_KEY } from "../hook/useAxios";
// import { useDispatch, useSelector } from "react-redux";
// import PlayingFilm from "../components/PlayingFilm";
// import { getNowPlayingFilms } from "../redux-toolkit/FilmSlice";
// import axios from "axios";

// const NowPlaying = () => {
//   const dispatch = useDispatch();
//   const nowPlayingList = useSelector((state) => state.nowPlatyingFilms);
//   useEffect(() => {
//     axios
//       .get(`${ENV_HTTPS}/movie/now_playing?api_key=${ENV_KEY}`, {
//         headers: {
//           Authorization: "Bearer " + ENV_API_TOKEN,
//         },
//       })
//       .then((res) => {
//         dispatch(getNowPlayingFilms(res.data.results));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   console.log(nowPlayingList);

//   return (
//     <div className="flex flex-wrap container gap-10 justify-center">
//       {nowPlayingList.map((film) => {
//         <div key={film.id}>
//           <p>{film.original_title}</p>
//         </div>;
//       })}
//       {/* <PlayingFilm />
//       {nowPlayingList.map((film) => (
//         <PlayingFilm key={film.id} film={film} />
//       ))} */}
//     </div>
//   );
// };

// export default NowPlaying;

import React, { useEffect } from "react";
import "./NowPlaying.css";
import { ENV_API_TOKEN, ENV_HTTPS, ENV_KEY } from "../hook/useAxios";
import { useDispatch, useSelector } from "react-redux";
import PlayingFilm from "../components/PlayingFilm";
import { getNowPlayingFilms } from "../redux-toolkit/FilmSlice";
import axios from "axios";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingList = useSelector((state) => state.nowPlatyingFilms);
  useEffect(() => {
    axios
      .get(`${ENV_HTTPS}/movie/now_playing?api_key=${ENV_KEY}`, {
        headers: {
          Authorization: "Bearer " + ENV_API_TOKEN,
        },
      })
      .then((res) => {
        dispatch(getNowPlayingFilms(res.data.results));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(nowPlayingList);

  return (
    <div className="flex flex-wrap container gap-10 justify-center">
      {nowPlayingList.map((film) => (
        <PlayingFilm
          image={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
          id={film.id}
          original_title={film.original_title}
          popularity={film.popularity}
          release_date={film.release_date}
        />
      ))}
    </div>
  );
};

export default NowPlaying;
