import React from "react";
import TaskList from "../../components/List";
import TasksCounter from "../../components/Counter";
import Header from "../../components/Header";

function Main() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
        <TasksCounter />
      </main>
    </>
  );
}

export default Main;
