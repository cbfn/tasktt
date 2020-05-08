import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../App";
import TaskList from "./List";
import TasksCounter from "./Counter";

export default function Main() {
  const { TasksStore: store } = useContext(StoreContext);

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
