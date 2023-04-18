import Card from "../Card";
import { useSelector } from "react-redux";
import { allCharaters } from "../../redux/slices/charactersSlice";
import "./cards.css";

export default function Cards() {
  const characters = useSelector(allCharaters)
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
          origin={c?.origin.name}
          image={c.image}
          isFav={c.isFav}
        />
      ))}
    </div>
  );
}
