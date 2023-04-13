import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

export default function DetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const getData = async () => {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const { data } = response;
    if (data.name) {
      setCharacter(data);
    } else {
      window.alert("No hay personajes con ese ID");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <section className="contianer-img">
        <img src={character.image} alt={character.name} />
      </section>
      <section className="container-info">
        <h1>{character?.name}</h1>
        <h2>Status | {character?.status}</h2>
        <h2>Gender | {character?.gender}</h2>
        <h2>Specie | {character?.species}</h2>
        <h2>
          Cantidad de capitulos: {character.episode && character.episode.length}
        </h2>
      </section>
    </main>
  );
}
