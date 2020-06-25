import React, { useEffect } from "react";
import TaskForm from "./Form";
import ListItem from "./ListItem";
import RootStore from "../stores";
import { inject, observer } from "mobx-react";
interface TaskListProps {
  store?: RootStore;
}

function TaskList({ store }: TaskListProps) {
  useEffect(() => {
    store?.tasksStore.fetchTasks();
  }, [store]);

  if (store?.tasksStore.IS_LOADING) {
    return (
      <ul>
        <li>
          <TaskForm />
        </li>
        <div>Loading...</div>
      </ul>
    );
  }

  return (
    <ul>
      <li>
        <TaskForm />
      </li>
      {store?.tasksStore.tasks.map((task: any) => {
        return <ListItem task={task} key={task.id} />;
      })}
    </ul>
  );
}

export default inject(({ store }) => ({ store }))(observer(TaskList));
