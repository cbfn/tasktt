import { action, computed, observable, autorun } from "mobx";
import { tasks } from "../firebase";

export default class TasksStore {
  rootStore;

  @observable tasks: object[] = [];
  @observable IS_LOADING: boolean = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addTask(task: string, user: string) {
    tasks.add({
      user_uid: user,
      title: task,
      created_at: new Date().toLocaleString(),
    });
    this.fetchTasks();
  }

  @action fetchTasks() {
    const userId = this.rootStore?.userStore.currentUser().uid;

    tasks.query = (ref) => {
      return userId ? ref.where("user_uid", "==", userId) : null;
    };

    autorun(async () => {
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
