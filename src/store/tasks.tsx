import { decorate, observable, action } from "mobx";
class Store {
  tasks = [];

  addTask(task: never) {
    this.tasks.push(task);
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  get tasksCount() {
    return this.tasks.length;
  }
}

decorate(Store, {
  addTask: action,
  removeTask: action,
  tasks: observable,
});

export const TasksStore = new Store();
