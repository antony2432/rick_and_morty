import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteChararter,
  addFavorite,
  deleteFavorite,
} from "../../redux/slices/charactersSlice";
import "./card.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(deleteChararter({ id: props.id, isFav: props.isFav }));
  };
  const handleFavorite = () => {
    props.isFav
      ? dispatch(deleteFavorite(props))
      : dispatch(addFavorite(props));
  };
  return (
    <div className="card">
      {props.isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <img src={props.image} alt={props.name} />
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <div className="propCharacter">
        <p>Especie: {props.species}</p>
        <p>Genero: {props.gender}</p>
        <p>Estado: {props.status}</p>
        <p>Origen: {props.origin}</p>
      </div>
      <button onClick={onClose}>X</button>
    </div>
  );
}
