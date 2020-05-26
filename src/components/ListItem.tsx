import React, { useContext } from "react";
import { storesContext } from "../store/stores";

export default function ListItem({ task, fowardRef }) {
  const { tasksStore: store } = useContext(storesContext);
  const item = task.data;

  return (
    <li ref={fowardRef}>
      {item.title}
      <span onClick={() => store.removeTask(task)}>DONE</span>
    </li>
  );
}
