import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="Iniciada" />
        <TaskList title="Executando" />
        <TaskList title="Pendente" />
        <TaskList title="Finalizada" />
      </div>
    </div>
  );
}

export default App;
