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
      <div>
        {item.title} - {item.created_at}
      </div>
      <button type="button" onClick={() => store?.tasksStore.removeTask(task)}>
        DONE
      </button>
    </li>
  );
}

export default inject(({ store }) => ({ store }))(observer(ListItem));
