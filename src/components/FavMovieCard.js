import "./FavMovieCard.css";

import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { favmovie } from "../features/movies/movieSlice";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const FavMovieCard = (props) => {
  const dispatch = useDispatch();

  const preList = useSelector((state) => state.movies.favmovie);

  const { data } = props;

  const handleClickToDelete = () => {
    const afterDeleteArray = preList.filter((item) => item.id !== data.id);

    dispatch(favmovie(afterDeleteArray));
  };

  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={IMGPATH + data.poster_path} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <MdDelete
              className="icon"
              onClick={() => {
                handleClickToDelete();
              }}
            />
            <p>{data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavMovieCard;
