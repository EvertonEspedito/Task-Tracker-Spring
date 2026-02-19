import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface Props {
  concluidas: number;
  pendentes: number;
}

export function StatusChart({ concluidas, pendentes }: Props) {
  const data = [
    { name: "Concluídas", value: concluidas },
    { name: "Pendentes", value: pendentes },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        label
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
