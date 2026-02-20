import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Graficos } from "./pages/Graficos";
import  About  from "./pages/About";

// Cabeçalho e rodapé
import Header from "./pages/appCab/Header";
import Footer from "./pages/appCab/Footer";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
      <Footer />     
    </BrowserRouter>

  );
}

export default App;
