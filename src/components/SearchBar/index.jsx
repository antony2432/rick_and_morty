import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allCharaters,
  setChararters,
} from "../../redux/slices/charactersSlice";
import { fetchCharacterById } from "../../services/fetchR&M";
import "./searchBar.css";

export default function SearchBar() {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const characters = useSelector(allCharaters);

  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const onSearch = async (id) => {
    try {
      const verification = characters.filter((c) => c.id === id);
      if (verification.length !== 0) {
        return window.alert("Ya se encuentra el personaje");
      } else {
        const data = await fetchCharacterById(id);
        dispatch(setChararters({...data, isFav: false}));
        setId("");
      }
    } catch (err) {
      window.alert(err.message);
    }
  };
  const randomCharacter = () => {
    const randon = Math.floor(Math.random() * 826);
    onSearch(randon);
  };
  return (
    <div className="buscador">
      <input type="search" onChange={handleChange} value={id} />
      <button onClick={() => onSearch(id)}>Agregar</button>
      <button onClick={randomCharacter}>Random</button>
    </div>
  );
}
