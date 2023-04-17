import { useState } from "react";
import "./style.css";

export default function FormLogin({ login }) {
  const defaultValue = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultValue);
  const [error, setError] = useState({});
  const expressionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const expressionValidarNumero = /[0-9]{1,}/;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 0) {
      setError({ ...error, [name]: "no tiene que estar vacio" });
    } else {
      setError({});
    }
    if (name === "email") {
      if (!expressionRegular.test(value)) {
        setError({ ...error, [name]: "debe incluir un @ y un ." });
      }
      if (value.length > 35) {
        setError({ ...error, [name]: "no debe exceder mas de 35 caracteres" });
        console.log(error);
      }
    }
    if (name === "password") {
      if (!expressionValidarNumero.test(value)) {
        setError({ ...error, [name]: "Debe contar con un almenos un numero" });
      }
      if (!(value.length >= 6 && value.length <= 10)) {
        setError({ ...error, [name]: "Debe tener entre 6 a 10 caracteres" });
      }
    }
    setUserData({ ...userData, [name]: value });
  };
  const sendForm = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={sendForm} className="formulario-container">
      <img src="https://rickandmortyapi.com/api/character/avatar/265.jpeg" alt="Rick and morty" />
      <label>
        <span>Email:</span>
        <input
          type="text"
          name="email"
          onChange={handleOnChange}
          value={userData.email}
        />
        {error.email && <p>{error.email}</p>}
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={userData.password}
        />
        {error.password && <p>{error.password}</p>}
      </label>
      <button>Enviar</button>
    </form>
  );
}
