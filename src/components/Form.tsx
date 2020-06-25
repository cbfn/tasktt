import React, { useState, FormEvent } from "react";
import { inject, observer } from "mobx-react";
import RootStore from "../stores";

interface TaskFormProps {
  store?: RootStore;
}

function TaskForm({ store }: TaskFormProps) {
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

    store?.tasksStore.addTask(task);
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

export default inject(({ store }) => ({ store }))(observer(TaskForm));
