import { decorate, observable } from "mobx";
class Store {
  user = {
    name: "Christian Nascimento",
    email: "cnascimentobr@gmail.com",
  };

  get currentUser() {
    return this.user;
  }
}

decorate(Store, {
  user: observable,
});

export const UserStore = new Store();
