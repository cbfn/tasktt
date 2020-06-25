import React from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import RootStore from "../stores";

interface PrivateRouterProps {
  component;
  store?: RootStore;
  [x: string]: any;
}

function PrivateRouter({
  component: Component,
  store,
  ...rest
}: PrivateRouterProps) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const isAuthenticated = store?.userStore.isLoggedIn;

        if (!isAuthenticated) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
}

export default inject(({ store }) => ({ store }))(observer(PrivateRouter));
