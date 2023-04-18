import axios from "axios";

const APISINGLECHARACTER = "https://rickandmortyapi.com/api/character";

const fetchCharacterById = async (id) => {
  try {
    const { data } = await axios(`${APISINGLECHARACTER}/${id}`);
    return data;
  } catch (error) {
    throw new Error("¡No hay personajes con este ID!")
  }
};

export { fetchCharacterById };
