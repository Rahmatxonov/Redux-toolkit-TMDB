import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import YouTube from "react-youtube";
import {
  ENV_API_TOKEN,
  ENV_HTTPS,
  ENV_IMG_URL,
  ENV_KEY,
} from "../hook/useAxios";

const SingleFilms = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [videos, setVideos] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENV_HTTPS}/movie/${id}?api_key=${ENV_KEY}`, {
        headers: {
          Authorization: `Bearer ${ENV_API_TOKEN}`,
        },
      })
      .then((res) => {
        setSingleData(res.data);
      });

    axios
      .get(
        `${ENV_HTTPS}/movie/${id}/videos?language=en-US&api_key=${ENV_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${ENV_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setVideos(res.data.results);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `${ENV_HTTPS}/movie/${id}/credits?language=en-US&api_key=${ENV_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${ENV_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setActors(res.data.cast);
      });
  }, [id]);
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center">
        <SingleCard
          id={singleData.id}
          image={`${ENV_IMG_URL}${singleData.poster_path}`}
          overview={singleData.overview}
          title={singleData.title}
          popularity={singleData.popularity}
          release_date={singleData.release_date}
        />
        {videos.map((item) => (
          <YouTube
            className="w-[500px] m-5"
            key={item.key}
            videoId={item.key}
          />
        ))}
      </div>

      <h3 className="text-center pt-10 text-[30px] font-semibold">
        Film actors:{" "}
      </h3>
      <div className="flex items-center flex-wrap mt-5 gap-3 justify-center">
        {actors.map((item) => (
          <div key={item.id} className="">
            <Link>
              <img
                className="rounded-[20px]"
                src={ENV_IMG_URL + item.profile_path}
                alt="actors"
                width={200}
                height={200}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleFilms;
