import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMovie } from "../features/movies/movieSlice";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = props;

  const handleClick = () => {
    console.log("clicked");
    dispatch(sendMovie(data));
    console.log(data);
    navigate("/movie-detail");
  };

  return (
    <div
      className="card-item"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="card-inner">
        <div className="card-top">
          <img src={IMGPATH + data.poster_path} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
