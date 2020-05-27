import React, { useContext, useState, FormEvent } from "react";
import { storesContext } from "../store";

export default function TaskForm() {
  const { tasksStore: store } = useContext(storesContext);
  const [task, setTask] = useState("");

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setTask(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task === "") {
      alert("Please provide a task name!");
      return false;
    }

    store.addTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
