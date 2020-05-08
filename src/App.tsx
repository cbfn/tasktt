import React, { createContext } from "react";
import { TasksStore } from "./store/tasks";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

export const StoreContext = createContext<any | undefined>(undefined);

const AppStore = {
  TasksStore,
};

function App() {
  return (
    <StoreContext.Provider value={AppStore}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
