import { useState } from "react";
import { criarTask } from "../api/tasks";

interface Props {
  onCreated: () => void;
}

export function TaskForm({ onCreated }: Props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo) return;

    await criarTask({ titulo, descricao });

    setTitulo("");
    setDescricao("");
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
