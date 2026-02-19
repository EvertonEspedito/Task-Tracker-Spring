import { useState } from "react";
import { criarTask } from "../api/tasks";
import "../index.css";

interface Props {
  onCreated: () => void;
}

export function TaskForm({ onCreated }: Props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tocou, setTocou] = useState(false);

  const tituloValido = titulo.trim().length >= 3;
  const descricaoValida = descricao.trim().length >= 10;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTocou(true);

    if (!titulo.trim() || !descricao.trim()) {
      window.alert("Título e descrição não podem estar vazios.");
      return;
    }

    if (!tituloValido) {
      window.alert("O título deve ter no mínimo 3 caracteres.");
      return;
    }

    if (!descricaoValida) {
      window.alert("A descrição deve ter no mínimo 15 caracteres.");
      return;
    }

    await criarTask({ titulo, descricao });

    setTitulo("");
    setDescricao("");
    setTocou(false);
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className={tocou && !tituloValido ? "inputError" : ""}
      />

      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className={tocou && !descricaoValida ? "inputError" : ""}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
