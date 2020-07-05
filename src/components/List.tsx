import React, { useEffect } from "react";
import { List, Divider, CircularProgress } from "@material-ui/core";
import ListItem from "./ListItem";
import RootStore from "../stores";
import { inject, observer } from "mobx-react";
import { common } from "@material-ui/core/colors";
interface TaskListProps {
  store?: RootStore;
}

function TaskList({ store }: TaskListProps) {
  useEffect(() => {
    store?.tasksStore.fetchTasks();
  }, [store]);

  if (store?.tasksStore.IS_LOADING)
    return (
      <CircularProgress
        style={{ color: common["black"] }}
        className="spinner"
      />
    );

  return (
    <List>
      {store?.tasksStore.tasks.map((task: any) => {
        return (
          <div key={`${task.data.title + task.id}`}>
            <ListItem task={task} />
            <Divider component="li" />
          </div>
        );
      })}
    </List>
  );
}

export default inject(({ store }) => ({ store }))(observer(TaskList));
