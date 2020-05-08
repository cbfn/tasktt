import { decorate, observable, computed } from "mobx";

export interface User {
  name: string;
  email: string;
  avatar: string;
}
class Store {
  user: User = {
    name: "Christian Nascimento",
    email: "cnascimentobr@gmail.com",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  };

  get currentUser() {
    return this.user;
  }
}

decorate(Store, {
  user: observable,
  currentUser: computed,
});

export const UserStore = new Store();
