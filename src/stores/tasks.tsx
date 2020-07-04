import { action, computed, observable, autorun } from "mobx";
import { tasks } from "../firebase";

export default class TasksStore {
  rootStore;

  @observable tasks: object[] = [];
  @observable IS_LOADING: boolean = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addTask(task: string, date: any) {
    tasks.add({
      user_uid: this.rootStore.userStore.currentUser().uid,
      title: task,
      created_at: new Date(),
      deadline: date,
    });
  }

  @action fetchTasks() {
    const userId = this.rootStore?.userStore.currentUser().uid;

    tasks.query = (ref) => {
      return userId ? ref.where("user_uid", "==", userId) : null;
    };

    autorun(() => {
      const { docs, isLoading } = tasks;
      this.tasks = docs;
      this.IS_LOADING = isLoading;
    });
  }

  @action removeTask(task) {
    task.delete();
  }

  @computed get tasksCount() {
    return tasks.docs.length;
  }
}
