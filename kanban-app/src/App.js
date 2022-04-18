import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

// Gera novo id
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;

  return idAcc;
};

function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (title, state) => {
    console.log("Get from App");
    const newTask = {
      id: generateId(),
      title,
      state,
    };

    setTask((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    console.log("Função update task sendo chamada");
    setTask((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          className
          title="Agendada"
          onAddTask={addTask}
          taskState="Agendada"
          tasks={tasks.filter((tsk) => tsk.state === "Agendada")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="Atendida"
          onAddTask={addTask}
          taskState="Atendida"
          tasks={tasks.filter((tsk) => tsk.state === "Atendida")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="Adiada"
          onAddTask={addTask}
          taskState="Adiada"
          tasks={tasks.filter((tsk) => tsk.state === "Adiada")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="Cancelada"
          onAddTask={addTask}
          taskState="Cancelada"
          tasks={tasks.filter((tsk) => tsk.state === "Cancelada")}
          onTaskUpdate={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
