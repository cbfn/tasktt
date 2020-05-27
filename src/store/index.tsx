import { createContext, useContext } from "react";
import { TasksStore } from "./tasks";
import { UserStore } from "./users";

export const tasksStore = new TasksStore();
export const userStore = new UserStore();

export const storesContext = createContext({ tasksStore, userStore });

export const useStores = () => useContext(storesContext);
