import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/public/NotFound";
import PrivateRouter from "./components/PrivateRouter";
import { history } from "./utils/history";

import spinner from "./assets/images/spinner.svg";

const Loading = () => (
  <img src={spinner} alt="Loading spinner" className="spinner" />
);

const Main = lazy(() => import("./pages/private/Main"));
const Login = lazy(() => import("./pages/public/Login"));

function App() {
  return (
    <Router {...history}>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRouter exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
