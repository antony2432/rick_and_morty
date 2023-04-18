import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { allFavorite } from "../../redux/slices/charactersSlice";
export default function FavoritePage() {
  const favorites = useSelector(allFavorite);
  return (
    <main>
      {favorites.map((f) => (
        <Card
          key={f.id}
          id={f.id}
          name={f.name}
          status={f.status}
          species={f.species}
          gender={f.gender}
          origin={f.origin.name}
          image={f.image}
          isFav={f.isFav}
        />
      ))}
    </main>
  );
}
