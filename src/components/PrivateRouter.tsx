import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useObserver } from "mobx-react";
import { storesContext } from "../store/stores";

function PrivateRouter({ component: Component, ...rest }) {
  const { userStore: store } = useContext(storesContext);

  return useObserver(() => (
    <Route
      {...rest}
      render={(props) => {
        const isAuthenticated = store.isAuthenticated();

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
  ));
}

export default PrivateRouter;
