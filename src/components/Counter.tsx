import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";

export default function BugsCounter() {
  const store = useContext(TaskStoreContext);

  return useObserver(() => (
    <div className="counter">{store?.tasksCount} Tasks!</div>
  ));
}
