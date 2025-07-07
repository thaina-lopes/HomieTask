import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar.jsx";
import Login from "./paginas/Login/Login.jsx";
import Cadastro from "./paginas/Cadastro/Cadastro.jsx";
import Home from "./paginas/Home/Home.jsx";
import Ranking from "./paginas/Ranking/Ranking.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}
