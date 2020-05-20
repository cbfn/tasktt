import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { UserStoreContext } from "../store/users";
import Gravatar from "react-gravatar";

export default function Header({ history }) {
  const store = useContext(UserStoreContext);

  function handleClick() {
    store?.logout();
    history.push("/login");
  }

  return useObserver(() => (
    <header className="App-header">
      <h1>tasktt</h1>
      <div className="avatar">
        <Gravatar email={store?.currentUser.email} />
        <div onClick={handleClick} className="logout">
          Logout
        </div>
      </div>
    </header>
  ));
}
