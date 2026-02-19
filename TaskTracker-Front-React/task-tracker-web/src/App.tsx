import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Graficos } from "./pages/Graficos";

// Cabeçalho e rodapé
import Header from "./pages/appCab/Header";
import Footer from "./pages/appCab/Footer";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />     // sempre visível
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graficos" element={<Graficos />} />
      </Routes>
      <Footer />     // sempre visível
    </BrowserRouter>

  );
}

export default App;
