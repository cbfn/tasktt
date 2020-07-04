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
  return (
    <li>
      <div>
        {item.title} - {item.deadline}
      </div>
      <button type="button" onClick={() => store?.tasksStore.removeTask(task)}>
        DONE
      </button>
    </li>
  );
}

export default inject(({ store }) => ({ store }))(observer(ListItem));
