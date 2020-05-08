import React, { useContext, useState } from "react";
import { StoreContext } from "../App";

export default function TaskForm() {
  const { TasksStore: store } = useContext(StoreContext);
  const [task, setTask] = useState("");

  function handleChange(e: any) {
    setTask(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (task === "") {
          alert("Please provide a task name!");
          return false;
        }
        store?.addTask(task);
        setTask("");
      }}
    >
      <input
        type="text"
        value={task}
        placeholder="Name of the task"
        onChange={handleChange}
      />
      <button type="submit">ADD TASK</button>
    </form>
  );
}
