import { action, computed, decorate, observable } from "mobx";
import { tasks } from "../firebase";

import { UserStore } from "./users";

const userStore = new UserStore();

tasks.query = (ref) => ref.where("user_uid", "==", userStore?.currentUser.uid);

const userTasks = tasks.docs;
export class TasksStore {
  tasks: Array<any> = userTasks;

  async addTask(task: string, user: string) {
    await tasks.add({
      user_uid: user,
      title: task,
      created_at: new Date().toLocaleString(),
    });
  }

  async removeTask(task) {
    await task.delete();
  }

  get tasksCount() {
    return tasks.docs.length;
  }
}

decorate(TasksStore, {
  addTask: action,
  removeTask: action,
  tasks: observable,
  tasksCount: computed,
});
