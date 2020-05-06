import React, { useContext, useState } from "react";
import { TaskStoreContext } from "../store/tasks";

export default function BugForm() {
  const store = useContext(TaskStoreContext);
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
