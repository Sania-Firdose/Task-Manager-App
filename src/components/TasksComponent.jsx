import React, { useState,useEffect } from "react";
import TaskItem from "./TaskItem"; 

const TasksComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  
   useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); 
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  }, [tasks]);

  const addTask = () => {
    const newTask = { id: Date.now(), title: taskTitle };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tasks</h1>
      <div>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TasksComponent;
