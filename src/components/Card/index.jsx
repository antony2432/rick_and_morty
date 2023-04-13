import "./card.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="propCharacter">
        <p>Especie: {species}</p>
        <p>Genero: {gender}</p>
        <p>Estado: {status}</p>
        <p>Origen: {origin}</p>
      </div>
      <button onClick={() => onClose(id)}>X</button>
    </div>
  );
}
