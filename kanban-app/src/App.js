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

  const deleteTask = (id) => {
    setTask((exitingTask) => {
      return exitingTask.filter((task) => task.id !== id);
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
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Atendida"
          onAddTask={addTask}
          taskState="Atendida"
          tasks={tasks.filter((tsk) => tsk.state === "Atendida")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Adiada"
          onAddTask={addTask}
          taskState="Adiada"
          tasks={tasks.filter((tsk) => tsk.state === "Adiada")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Cancelada"
          onAddTask={addTask}
          taskState="Cancelada"
          tasks={tasks.filter((tsk) => tsk.state === "Cancelada")}
          onTaskUpdate={updateTask}
          onDeleteTsak={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
