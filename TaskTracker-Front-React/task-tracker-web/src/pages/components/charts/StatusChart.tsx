import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

interface Props {
  concluidas: number;
  pendentes: number;
}

const COLORS = ["#22c55e", "#ef4444"];

export function StatusChart({ concluidas, pendentes }: Props) {
  const data = [
    { name: "Concluídas", value: concluidas },
    { name: "Pendentes", value: pendentes },
  ];

  return (
    <>
      <h3>Status das Tarefas</h3>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </>
  );
}
