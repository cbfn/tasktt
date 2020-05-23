import { decorate, observable, computed } from "mobx";
import { auth } from "../firebase";

interface IUser {
  email: string;
  authenticated: boolean;
}
export class UserStore {
  user: IUser = {
    email: "",
    authenticated: false,
  };

  get currentUser() {
    return this.isAuthenticated();
  }

  isAuthenticated() {
    const currentUser = JSON.parse(localStorage.getItem("user")!);
    return currentUser;
  }

  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  authenticateUser(data) {
    const { user } = data;
    this.user.authenticated = true;
    this.user.email = user.email;
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  logout() {
    this.user = { ...this.user };
    auth.signOut();
    localStorage.clear();
  }
}

decorate(UserStore, {
  user: observable,
  currentUser: computed,
});
