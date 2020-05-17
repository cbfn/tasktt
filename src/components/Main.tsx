import React, { useContext } from "react";
import TaskList from "./List";
import TasksCounter from "./Counter";
import Header from "./Header";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";

export default function Main(props) {
  const store = useContext(TaskStoreContext);

  return useObserver(() => {
    const hasTasks = store?.tasksCount && store?.tasksCount > 0;
    return (
      <>
        <Header history={props.history} />
        <main className={`${hasTasks ? "" : "full"}`}>
          <TaskList />
          <TasksCounter />
        </main>
      </>
    );
  });
}
