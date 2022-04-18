import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "pendendte",
};

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

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={`Agendada`} onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
