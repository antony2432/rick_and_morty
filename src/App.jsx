import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    const verification = characters.filter((c) => c.id === id);
    if (verification.length !== 0) {
      return window.alert("Ya se encuentra el personaje");
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((data) => {
          setCharacters((oldChars) => [...oldChars, data.data]);
        })
        .catch((err) => {
          console.log(err);
          window.alert("¡No hay personajes con este ID!");
        });
    }
  }
  const onClose = (id) => {
    const newArray = characters.filter((c) => c.id !== id);
    setCharacters(newArray);
  };
  return (
    <div className="App">
      <Navigation />
      <SearchBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
