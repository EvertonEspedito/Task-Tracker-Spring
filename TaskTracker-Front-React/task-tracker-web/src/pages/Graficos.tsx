import { useEffect, useState } from "react";
import { listarTasks } from "../api/tasks";
import { DashboardCard } from "../pages/components/DashboardCard";
import { StatusChart } from "../pages/components/charts/StatusChart";

// CSS
import "./graficos.css";

interface Task {
  concluida: boolean;
}

export function Graficos() {
  const [total, setTotal] = useState(0);
  const [concluidas, setConcluidas] = useState(0);
  const [pendentes, setPendentes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);

        const tasks: Task[] = await listarTasks();

        const concluidasCount = tasks.filter(
          (task) => task.concluida
        ).length;

        const pendentesCount = tasks.filter(
          (task) => !task.concluida
        ).length;

        setTotal(tasks.length);
        setConcluidas(concluidasCount);
        setPendentes(pendentesCount);
      } catch (error) {
        console.error("Erro ao carregar dashboard", error);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  if (loading) {
    return <p>Carregando dashboard...</p>;
  }

  return (
    <div className="dashboard">
      <h2>Dashboard de Tarefas</h2>

      <div className="cards">
        <DashboardCard titulo="Total" valor={total} />
        <DashboardCard titulo="Concluídas" valor={concluidas} />
        <DashboardCard titulo="Pendentes" valor={pendentes} />
      </div>

      <div className="grafico">
        <StatusChart
          concluidas={concluidas}
          pendentes={pendentes}
        />
      </div>
    </div>
  );
}