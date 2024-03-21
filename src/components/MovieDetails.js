import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeart } from "react-icons/io";
import {
  addMovies,
  favmovie,
  getAllMovies,
  sendMovie,
} from "../features/movies/movieSlice";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const [allMovies, setAllmovies] = useState([]);
  const [movie, setMovie] = useState({});

  const movieData = useSelector((state) => state.movies.movieData);
  const preList = useSelector((state) => state.movies.favmovie);
  const allMoviesList = useSelector((state) => state.movies.movies);

  useEffect(() => {
    if (allMoviesList) {
      setAllmovies(allMoviesList);
    }
    if (movieData) {
      setMovie(movieData);
    }
  }, [allMoviesList, movieData]);

  const handleIconClick = () => {
    setMovie();
    dispatch(
      sendMovie({
        ...movie,
        isFav: true,
      })
    );
    const isMoviePresent = preList?.find((item) => item.id === movieData.id);
    if (!isMoviePresent) {
      const allMoviesWithFav = allMovies?.map((item) => {
        if (item.id === movieData.id) {
          return {
            ...item,
            isFav: true,
          };
        } else {
          return {
            ...item,
            isFav: false,
          };
        }
      });
      dispatch(addMovies(allMoviesWithFav));
      let temp = [...preList, movieData];
      dispatch(favmovie(temp));
    }
  };

  return (
    <div className="movie-datail-wrapper">
      <div className="Movie">
        <h2>MovieDetails</h2>
      </div>
      <div className="Movie-Conatiner">
        <img src={IMGPATH + movieData.poster_path} alt={movie?.title} />
      </div>
      <div className="movie-detail">
        <h1>
          {movie?.title}
          <IoIosHeart
            onClick={() => {
              handleIconClick();
            }}
            color={movie?.isFav ? "red" : "white"}
          />
        </h1>

        <h5>Popularity : {movie?.popularity}</h5>
        <p>Release Date: {movie?.release_date}</p>
        <h2>{movie?.overview}</h2>
      </div>
    </div>
  );
};

export default MovieDetails;
