import React from "react";
import "./tasklist.css";

import PropTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
}) {
  const addTask = () => {
    console.log("Get from TaskList");
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
            />
          );
        })}
      </div>
      <button onClick={addTask}>Add visit</button>
    </div>
  );
}

// Define o tipo de dado(string) e preenchimento obrigtório
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
