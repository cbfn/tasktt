import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/public/NotFound";
import PrivateRouter from "./components/PrivateRouter";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { history } from "./utils/history";
import { CircularProgress } from "@material-ui/core";
import { common } from "@material-ui/core/colors";

const Loading = () => (
  <CircularProgress style={{ color: common["white"] }} className="spinner" />
);

const Main = lazy(() => import("./pages/private/Main"));
const Login = lazy(() => import("./pages/public/Login"));

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
    </MuiPickersUtilsProvider>
  );
}

export default App;
