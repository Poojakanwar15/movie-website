import React, { useState } from "react";
import "./Favorite.css";
import { useSelector } from "react-redux";

import FavMovieCard from "./FavMovieCard";
import PageNotFound from "./PageNotFound";

const Favorite = () => {
  const preList = useSelector((state) => state.movies.favmovie);
  const movieData = useSelector((state) => state.movies.movieData);
  console.log(movieData.id);

  console.log("fav moviess Page", preList);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Favorite Movies</h2>
        <div className="movie-container">
          {preList && preList.length > 0 ? (
            preList.map((preList) => (
              <FavMovieCard key={preList.id} data={preList} />
            ))
          ) : (
            <PageNotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
