import { useEffect, useState } from "react";
import { deletarTask, listarTasks, atualizarTask } from "../api/tasks";

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
  }

  async function salvarEdicao() {
    if (editId === null) return;

    await atualizarTask(editId, {
      titulo,
      descricao,
    });

    setEditId(null);
    carregar();
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="addTaskInputDiv" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
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
            < div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <input
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título"
              />
              <input
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição"
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={salvarEdicao}>Salvar</button>
                <button onClick={() => setEditId(null)}>Cancelar</button>
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
              <h3 style={{ margin: "0" }}>{task.titulo}</h3>
              <p style={{ margin: "0" }}>{task.descricao}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
                <button onClick={() => handleDelete(task.id)}>Excluir</button>
                <button onClick={() => iniciarEdicao(task)}>Editar</button>
                <button
                  onClick={() =>
                    atualizarTask(task.id, { ...task, concluida: !task.concluida }).then(carregar)
                  }
                >
                  {task.concluida ? "Marcar como Pendente" : "Marcar como Concluída"}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
