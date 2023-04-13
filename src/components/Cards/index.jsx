import Card from "../Card";
import "./cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="list">
      {characters.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          name={c.name}
          status={c.status}
          species={c.species}
          gender={c.gender}
          origin={c.origin.name}
          image={c.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
