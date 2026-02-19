import { useEffect, useState } from "react";
import { listarTasks } from "../api/tasks";
import { StatusChart } from "./components/charts/StatusChart";

export function Graficos() {
  const [concluidas, setConcluidas] = useState(0);
  const [pendentes, setPendentes] = useState(0);

  useEffect(() => {
    async function carregar() {
      const tasks = await listarTasks();

      setConcluidas(tasks.filter(t => t.concluida).length);
      setPendentes(tasks.filter(t => !t.concluida).length);
    }

    carregar();
  }, []);

  return (
    <div>
      <h2>Visão Geral das Tarefas</h2>
      <StatusChart concluidas={concluidas} pendentes={pendentes} />
    </div>
  );
}
