import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlatyingFilms: [],
};

const getNowPlayingSlice = createSlice({
  name: "nowPlatingFilms",
  initialState,
  reducers: {
    getNowPlayingFilms: (state, action) => {
      return {
        nowPlatyingFilms: [...action.payload],
      };
    },
  },
});

export const { getNowPlayingFilms } = getNowPlayingSlice.actions;
export default getNowPlayingSlice.reducer;
