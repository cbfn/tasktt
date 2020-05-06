import React, { createContext, ReactNode } from "react";
import { useLocalStore } from "mobx-react";

import Props from "prop-types";

interface TaskStoreContext {
  tasks: Array<string>;
  addTask: Function;
  removeTask: Function;
  tasksCount: number;
}

export const TaskStoreContext = createContext<TaskStoreContext | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const TasksStoreProvider = ({ children }: Props) => {
  const store = useLocalStore(() => ({
    tasks: new Array(),
    addTask: (task: never) => {
      store.tasks.push(task);
    },
    removeTask: (index: number) => {
      store.tasks.splice(index, 1);
    },
    get tasksCount() {
      return store.tasks.length;
    },
  }));

  return (
    <TaskStoreContext.Provider value={store}>
      {children}
    </TaskStoreContext.Provider>
  );
};
