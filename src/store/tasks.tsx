import { action, computed, decorate, observable } from "mobx";
import { tasks } from "../firebase";

import { UserStore } from "./users";

export class TasksStore {
  tasks: Array<any>;
  user: any;

  constructor() {
    this.user = new UserStore();
    this.tasks = this.fetchTasks();
  }

  async addTask(task: string, user: string) {
    await tasks.add({
      user_uid: user,
      title: task,
      created_at: new Date().toLocaleString(),
    });
  }

  fetchTasks() {
    const userId = this.user.currentUser?.uid;

    tasks.query = (ref) => {
      return userId ? ref.where("user_uid", "==", userId) : null;
    };

    return tasks.docs;
  }

  async removeTask(task) {
    await task.delete();
  }

  get tasksCount() {
    return tasks.docs.length;
  }
}

decorate(TasksStore, {
  fetchTasks: action,
  addTask: action,
  removeTask: action,
  tasks: observable,
  tasksCount: computed,
});
