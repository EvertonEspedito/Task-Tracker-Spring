import { useState } from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

//css
import "../index.css";

export function Home() {
  const [reload, setReload] = useState(false);

  function atualizar() {
    setReload(!reload);
  }

  return (
    <>
      <h1>Task Tracker</h1>
      <TaskForm onCreated={atualizar} />
      <TaskList reload={reload} />
    </>
  );
}
