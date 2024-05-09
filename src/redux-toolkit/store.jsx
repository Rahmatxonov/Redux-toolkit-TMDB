import { configureStore } from "@reduxjs/toolkit";
import getNowPlayingSlice from "./FilmSlice";

export const store = configureStore({
  reducer: getNowPlayingSlice,
});
