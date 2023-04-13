import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>
        Esta pagina no existe ve a la pagina principal: <Link to="/">Home</Link>
      </p>
    </div>
  );
}
