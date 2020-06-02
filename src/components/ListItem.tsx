import React, { useContext } from "react";
import { storesContext } from "../store";

export default function ListItem({ task, fowardRef }) {
  const { tasksStore: store } = useContext(storesContext);
  const item = task.data;

  return (
    <li ref={fowardRef}>
      <small>
        {item.title} - {item.created_at}
      </small>
      <span onClick={() => store.removeTask(task)}>DONE</span>
    </li>
  );
}
