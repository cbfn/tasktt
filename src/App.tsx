import React from "react";
import { TasksStoreProvider } from "./store/tasks";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <TasksStoreProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </TasksStoreProvider>
  );
}

export default App;
