// import { decorate, observable, computed } from "mobx";

// export interface User {
//   name: string;
//   email: string;
//   avatar: string;
// }
// class Users {
//   user: User = {
//     name: "Christian Nascimento",
//     email: "cnascimentobr@gmail.com",
//     avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//   };

//   get currentUser() {
//     return this.user;
//   }
// }

// decorate(Users, {
//   user: observable,
//   currentUser: computed,
// });

// export const UserStore = new Users();

import React, { createContext, ReactNode } from "react";
import Props from "prop-types";
import { useObserver } from "mobx-react";
import { auth } from "../firebase";

interface UserStoreContext {
  user: {
    email: string;
    authenticated: boolean;
  };
  currentUser: any;
  isAuthenticated(): boolean;
  authenticateUser(data): any;
  login(email: string, password: string): any;
  logout(): any;
}

export const UserStoreContext = createContext<UserStoreContext | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const UserStoreProvider = ({ children }: Props) => {
  const store = useObserver(() => ({
    user: {
      email: "",
      authenticated: false,
    },

    get currentUser() {
      return this.isAuthenticated();
    },

    isAuthenticated() {
      const currentUser = JSON.parse(localStorage.getItem("user")!);
      return currentUser;
    },

    login(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
    },

    authenticateUser(data) {
      const { user } = data;
      this.user.authenticated = true;
      this.user.email = user.email;
      localStorage.setItem("user", JSON.stringify(this.user));
    },

    logout() {
      this.user = { ...this.user };
      auth.signOut();
      localStorage.clear();
    },
  }));

  return (
    <UserStoreContext.Provider value={store}>
      {children}
    </UserStoreContext.Provider>
  );
};
