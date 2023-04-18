import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import RootPage from "./page/root/index.jsx";
import About from "./page/about";
import DetailPage from "./page/detail";
import Error404 from "./page/404";
import Login from "./page/login";
import FavoritePage from "./page/favorite";
function App() {
  const [access, setAccess] = useState(true);
  const EMAIL = "admin@admin.com";
  const PASSWORD = "antony123";
  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/");
    }
  };
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  return (
    <div>
      {pathname === "/login" ? undefined : <Navigation />}
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
