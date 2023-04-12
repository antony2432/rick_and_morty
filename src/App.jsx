import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import characters from "./data.js";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Cards characters={characters} />
    </div>
  );
}

export default App;
