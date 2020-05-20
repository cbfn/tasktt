import React, { useContext } from "react";
import TaskList from "./List";
import TasksCounter from "./Counter";
import Header from "./Header";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";
import spinner from "../spinner.svg";
import { tasks } from "../firebase";

const Loading = () => (
  <img src={spinner} alt="Loading spinner" className="spinner" />
);

export default function Main(props) {
  const store = useContext(TaskStoreContext);

  return useObserver(() => {
    const { isLoading } = tasks;
    const hasTasks = store?.tasksCount && store?.tasksCount > 0;

    return isLoading ? (
      <Loading />
    ) : (
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
