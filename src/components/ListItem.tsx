import React from "react";
import RootStore from "../stores";

interface ListItemProps {
  store?: RootStore;
  task: {
    data;
  };
}
export default function ListItem({ store, task }: ListItemProps) {
  const item = task.data;

  return (
    <li>
      <small>
        {item.title} - {item.created_at}
      </small>
      <span onClick={() => store?.tasksStore.removeTask(task)}>DONE</span>
    </li>
  );
}
