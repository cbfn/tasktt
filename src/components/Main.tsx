import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";
import BugList from "./List";
import Counter from "./Counter";

export default function Main() {
  const store = useContext(TaskStoreContext);

  return useObserver(() => {
    const hasBugs = store?.tasksCount && store?.tasksCount > 0;
    return (
      <main className={`${hasBugs ? "" : "full"}`}>
        <BugList />
        <Counter />
      </main>
    );
  });
}
