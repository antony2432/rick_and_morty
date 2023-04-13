import { useState } from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import RootPage from "./page/root/index.jsx";
import About from "./page/about";
import DetailPage from "./page/detail";
import Error404 from "./page/404";

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
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <RootPage
              characters={characters}
              onClose={onClose}
              onSearch={onSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
