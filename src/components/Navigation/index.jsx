import { urlPath } from "./logica";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {urlPath.map(({ name, color, path }, i) => (
          <li key={i} style={{ "--hoverandborder": `${color}` }}>
            <Link to={path} className="links">{name}</Link>
          </li>
        ))}
      </ul>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
    </nav>
  );
}
