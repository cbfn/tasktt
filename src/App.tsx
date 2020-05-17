import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import PrivateRouter from "./components/PrivateRouter";
import { TasksStoreProvider } from "./store/tasks";
import { UserStoreProvider } from "./store/users";
import { history } from "./utils/history";

import spinner from "./spinner.svg";

const Loading = () => (
  <img src={spinner} alt="Loading spinner" className="spinner" />
);

const Main = lazy(() => import("./components/Main"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <Router {...history}>
      <UserStoreProvider>
        <TasksStoreProvider>
          <div className="App">
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/login" component={Login} />
                <PrivateRouter exact path="/" component={Main} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </div>
        </TasksStoreProvider>
      </UserStoreProvider>
    </Router>
  );
}

export default App;
