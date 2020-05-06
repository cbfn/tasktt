import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";
import TaskList from "./List";
import TasksCounter from "./Counter";

export default function Main() {
  const store = useContext(TaskStoreContext);

  return useObserver(() => {
    const hasTasks = store?.tasksCount && store?.tasksCount > 0;
    return (
      <main className={`${hasTasks ? "" : "full"}`}>
        <TaskList />
        <TasksCounter />
      </main>
    );
  });
}
