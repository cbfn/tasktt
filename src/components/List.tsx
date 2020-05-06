import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";

export default function BugList() {
  const store = useContext(TaskStoreContext);
  return useObserver(() => (
    <ul>
      {store?.tasks.map((task, index) => (
        <li key={task + index}>
          {task} <span onClick={() => store.removeTask(index)}>DONE</span>
        </li>
      ))}
    </ul>
  ));
}
