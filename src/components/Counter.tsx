import React, { useContext } from "react";
import { storesContext } from "../store/stores";

export default function TasksCounter() {
  const { tasksStore: store } = useContext(storesContext);

  return (
    <div className="counter">
      <div className="task-counter">You have: {store.tasksCount} tasks!</div>
    </div>
  );
}
