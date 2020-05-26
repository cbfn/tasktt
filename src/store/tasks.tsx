import { decorate, observable, action, computed } from "mobx";
import { tasks } from "../firebase";

const { docs } = tasks;
export class TasksStore {
  tasks: Array<any> = docs;

  async addTask(task: string) {
    await tasks.add({
      title: task,
    });
  }

  async removeTask(task) {
    await task.delete();
  }

  get tasksCount() {
    return docs.length;
  }
}

decorate(TasksStore, {
  addTask: action,
  removeTask: action,
  tasks: observable,
  tasksCount: computed,
});
