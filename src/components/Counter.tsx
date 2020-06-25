import React from "react";
import { inject, observer } from "mobx-react";
import RootStore from "../stores";
interface TasksCounterProps {
  store?: RootStore;
}
function TasksCounter({ store }: TasksCounterProps) {
  return (
    <div className="counter">
      <div className="task-counter">
        You have: {store?.tasksStore.tasksCount} tasks!
      </div>
    </div>
  );
}

export default inject(({ store }) => ({ store }))(observer(TasksCounter));
