import { observable, computed, action } from "mobx";
import { auth } from "../firebase";

interface IUser {
  uid: string;
  email: string;
}
export default class UserStore {
  @observable user: IUser = {
    uid: "",
    email: "",
  };

  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable currentUser() {
    const currentUser = JSON.parse(localStorage.getItem("user")!);
    return currentUser;
  }

  @computed public get isLoggedIn() {
    return localStorage.getItem("user");
  }

  @action login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  @action authenticateUser(data) {
    const { user } = data;

    this.user.email = user.email;
    this.user.uid = user.uid;

    localStorage.setItem("user", JSON.stringify(this.user));
  }

  @action logout() {
    this.user.email = "";
    this.user.uid = "";
    auth.signOut();
    localStorage.clear();
  }
}
