import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../App";
import TaskForm from "./Form";

export default function Header() {
  const { UserStore: store } = useContext(StoreContext);

  return useObserver(() => (
    <header className="App-header">
      <h1>POMODX</h1>
      <TaskForm />
      <div className="avatar">
        <img src={store?.currentUser.avatar} alt={store.currentUser.name} />
      </div>
    </header>
  ));
}
