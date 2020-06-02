import { action, computed, decorate, observable } from "mobx";

import { tasks } from "../firebase";

import { UserStore } from "./users";
export class TasksStore {
  tasks: Array<any> = this.fetchTasks();

  async addTask(task: string, user: string) {
    await tasks.add({
      user_uid: user,
      title: task,
      created_at: new Date().toLocaleString(),
    });
  }

  fetchTasks() {
    const userStore = observable(new UserStore());
    const userId = userStore.currentUser?.uid;

    tasks.query = (ref) => {
      const uId = userId;
      return uId ? ref.where("user_uid", "==", uId) : null;
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
