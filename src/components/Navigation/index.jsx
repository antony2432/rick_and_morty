import { urlPath } from "./logica";
// import SearchBar from "../SearchBar";
import "./style.css"

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {urlPath.map(({ name, color }) => (
          <li style={{"--hoverandborder": `${color}`}}><span>{name}</span></li>
        ))}
      </ul>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
    </nav>
  );
}
