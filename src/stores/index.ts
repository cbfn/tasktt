import TasksStore from "./tasks";
import UserStore from "./users";

export default class RootStore {
  tasksStore: TasksStore;
  userStore: UserStore;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.userStore = new UserStore(this);
  }
}
