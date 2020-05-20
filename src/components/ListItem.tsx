import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";

export default function ListItem({ task }) {
  const store = useContext(TaskStoreContext);
  const item = task.data;
  return useObserver(() => (
    <li>
      {item.title}
      <span onClick={() => store?.removeTask(task)}>DONE</span>
    </li>
  ));
}
