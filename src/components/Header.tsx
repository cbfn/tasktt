import React, { useContext } from "react";
import { storesContext } from "../store/stores";
import Gravatar from "react-gravatar";

export default function Header({ history }) {
  const { userStore: store } = useContext(storesContext);

  function handleClick() {
    store.logout();
    history.push("/login");
  }

  return (
    <header className="App-header">
      <h1>tasktt</h1>
      <div className="avatar">
        <Gravatar email={store.currentUser.email} />
        <div onClick={handleClick} className="logout">
          Logout
        </div>
      </div>
    </header>
  );
}
