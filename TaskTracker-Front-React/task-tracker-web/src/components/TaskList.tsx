import { useEffect, useState } from "react";
import { deletarTask, listarTasks, atualizarTask } from "../api/tasks";
import "../index.css";

interface Task {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

export function TaskList({ reload }: { reload: boolean }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const [editId, setEditId] = useState<number | null>(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tocouTitulo, setTocouTitulo] = useState(false);
  const [tocouDescricao, setTocouDescricao] = useState(false);

  const tituloValido = titulo.trim().length >= 3;
  const descricaoValida = descricao.trim().length >= 15;

  async function carregar() {
    setLoading(true);
    const data = await listarTasks();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    carregar();
  }, [reload]);

  async function handleDelete(id: number) {
    await deletarTask(id);
    carregar();
  }

  function iniciarEdicao(task: Task) {
    setEditId(task.id);
    setTitulo(task.titulo);
    setDescricao(task.descricao);
    setTocouTitulo(false);
    setTocouDescricao(false);
  }

  async function salvarEdicao() {
    setTocouTitulo(true);
    setTocouDescricao(true);

    // 🔴 validação com alert
    if (!titulo.trim() && !descricao.trim()) {
      window.alert("Título e descrição não podem estar vazios.");
      return;
    }

    if (titulo.trim().length < 3) {
      window.alert("O título deve ter no mínimo 3 caracteres.");
      return;
    }

    if (descricao.trim().length < 15) {
      window.alert("A descrição deve ter no mínimo 15 caracteres.");
      return;
    }

    if (editId === null) return;

    await atualizarTask(editId, {
      titulo,
      descricao,
    });

    setEditId(null);
    setTocouTitulo(false);
    setTocouDescricao(false);
    carregar();
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="addTaskInputDiv">
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "250px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {editId === task.id ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "16px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <input
                value={titulo}
                onChange={(e) => {
                  setTitulo(e.target.value);
                  setTocouTitulo(true);
                }}
                placeholder="Título"
                className={tocouTitulo && !tituloValido ? "inputError" : ""}
              />

              <input
                value={descricao}
                onChange={(e) => {
                  setDescricao(e.target.value);
                  setTocouDescricao(true);
                }}
                placeholder="Descrição"
                className={tocouDescricao && !descricaoValida ? "inputError" : ""}
              />

              <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                <button onClick={salvarEdicao}>Salvar</button>
                <button
                  onClick={() => {
                    setEditId(null);
                    setTocouTitulo(false);
                    setTocouDescricao(false);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <>
              <span
                style={{
                  fontWeight: "bold",
                  color: task.concluida ? "green" : "red",
                }}
              >
                {task.concluida ? "Concluída" : "Pendente"}
              </span>

              <h3>{task.titulo}</h3>
              <p>{task.descricao}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <button onClick={() => handleDelete(task.id)}>Excluir</button>
                <button onClick={() => iniciarEdicao(task)}>Editar</button>
                <button
                  onClick={() =>
                    atualizarTask(task.id, {
                      ...task,
                      concluida: !task.concluida,
                    }).then(carregar)
                  }
                >
                  {task.concluida
                    ? "Marcar como Pendente"
                    : "Marcar como Concluída"}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
