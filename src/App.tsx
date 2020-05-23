import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import PrivateRouter from "./components/PrivateRouter";
import { storesContext, useStores } from "./store/stores";
import { history } from "./utils/history";

import spinner from "./spinner.svg";

const Loading = () => (
  <img src={spinner} alt="Loading spinner" className="spinner" />
);

const Main = lazy(() => import("./components/Main"));
const Login = lazy(() => import("./components/Login"));

function App() {
  const stores = useStores();
  return (
    <Router {...history}>
      <storesContext.Provider value={stores}>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRouter exact path="/" component={Main} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </storesContext.Provider>
    </Router>
  );
}

export default App;
