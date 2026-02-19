import { useState } from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

// Cabeçalho e rodapé
import Header from "./appCab/Header";
import Footer from "./appCab/Footer";

// CSS
import "../index.css";

export function Home() {
  const [reload, setReload] = useState(false);

  function atualizar() {
    setReload((prev) => !prev);
  }

  return (
    <>
      <Header />

      <div className="appContainer">
        <TaskForm onCreated={atualizar} />
        <TaskList reload={reload} />
      </div>

      <Footer />
    </>
  );
}
