import React from "react";
import RootStore from "../stores";
import { inject, observer } from "mobx-react";

interface ListItemProps {
  store?: RootStore;
  task: {
    data;
  };
}

function ListItem({ store, task }: ListItemProps) {
  const item = task.data;
  console.log(item);
  return (
    <li>
      <small>
        {item.title} - {item.created_at}
      </small>
      <span onClick={() => store?.tasksStore.removeTask(task)}>DONE</span>
    </li>
  );
}

export default inject(({ store }) => ({ store }))(observer(ListItem));
