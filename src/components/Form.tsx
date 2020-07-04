import React, { useState, FormEvent } from "react";
import { inject, observer } from "mobx-react";
import RootStore from "../stores";

interface TaskFormProps {
  store?: RootStore;
}

function TaskForm({ store }: TaskFormProps) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setTask(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task === "") {
      alert("Please provide a task name!");
      return false;
    }

    const dateCondition = date === "" ? new Date() : date;

    store?.tasksStore.addTask(task, dateCondition);
    setTask("");
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input
          type="text"
          value={task}
          placeholder="Name of the task"
          onChange={handleChange}
          className="task"
        />
      </fieldset>
      <fieldset>
        <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={handleDate}
          className="date"
        />
      </fieldset>
      <button type="submit">ADD TASK</button>
    </form>
  );
}

export default inject(({ store }) => ({ store }))(observer(TaskForm));
