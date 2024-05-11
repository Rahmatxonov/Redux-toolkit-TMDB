import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  NowPlaying,
  TopRated,
  Popular,
  UpComing,
  NotFound,
  SingleFilms,
} from "../pages";
const index = () => {
  return (
    <Routes>
      <Route path="/" element={<NowPlaying />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/up-coming" element={<UpComing />} />
      <Route path="/film/:id" element={<SingleFilms />} />
      <Route path="/film/:id/person/:personId" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default index;
