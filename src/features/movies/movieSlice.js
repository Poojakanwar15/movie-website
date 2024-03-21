import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieData: {},
  favmovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    sendMovie: (state, action) => {
      state.movieData = action.payload;
    },
    favmovie: (state, action) => {
      state.favmovie = action.payload;
    },
  },
});

export const { addMovies, sendMovie, favmovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
