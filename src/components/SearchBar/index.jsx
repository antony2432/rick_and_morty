import { useState } from "react";
import "./searchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const randonCharacter = () => {
    const randon = Math.floor(Math.random() * 826);
    onSearch(randon);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setId(Number(value));
  };
  return (
    <div className="buscador">
      <input type="search" onChange={handleChange} value={id} />
      <button onClick={() => onSearch(id)}>Agregar</button>
      <button onClick={randonCharacter}>Randon</button>
    </div>
  );
}
