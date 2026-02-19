const API_URL = "http://localhost:8080/api/tasks";

export async function listarTasks() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Erro ao buscar tarefas");
  return response.json();
}

export async function criarTask(task: {
  titulo: string;
  descricao: string;
}) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) throw new Error("Erro ao criar tarefa");
  return response.json();
}

export async function deletarTask(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Erro ao deletar tarefa");
}

export async function atualizarTask(id: number, task: any) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
}

