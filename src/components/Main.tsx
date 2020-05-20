import React from "react";
import TaskList from "./List";
import TasksCounter from "./Counter";
import Header from "./Header";
import { useObserver } from "mobx-react";
import spinner from "../spinner.svg";
import { tasks } from "../firebase";

const Loading = () => (
  <img src={spinner} alt="Loading spinner" className="spinner" />
);

export default function Main(props) {
  return useObserver(() => {
    const { isLoading } = tasks;

    return isLoading ? (
      <Loading />
    ) : (
      <>
        <Header history={props.history} />
        <main>
          <TaskList />
          <TasksCounter />
        </main>
      </>
    );
  });
}
