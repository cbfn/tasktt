// import { decorate, observable, action, computed } from "mobx";
// class Tasks {
//   tasks = [];

//   addTask(task: never) {
//     this.tasks.push(task);
//   }
//   removeTask(index: number) {
//     this.tasks.splice(index, 1);
//   }
//   get tasksCount() {
//     return this.tasks.length;
//   }
// }

// decorate(Tasks, {
//   addTask: action,
//   removeTask: action,
//   tasks: observable,
//   tasksCount: computed,
// });

// export const TasksStore = new Tasks();

import React, { createContext, ReactNode } from "react";
import Props from "prop-types";
import { useLocalStore } from "mobx-react";
import { tasks } from "../firebase";

interface TaskStoreContext {
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
  const { docs } = tasks;
  const store = useLocalStore(() => ({
    addTask: async (task: string) => {
      await tasks.add({
        title: task,
      });
    },
    removeTask: async (task) => {
      await task.delete();
    },
    get tasksCount() {
      return docs.length;
    },
  }));

  return (
    <TaskStoreContext.Provider value={store}>
      {children}
    </TaskStoreContext.Provider>
  );
};
