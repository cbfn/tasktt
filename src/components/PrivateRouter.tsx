import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useObserver } from "mobx-react";
import { UserStoreContext } from "../store/users";

function PrivateRouter({ component: Component, ...rest }) {
  const store = useContext(UserStoreContext);
  return useObserver(() => (
    <Route
      {...rest}
      render={(props) => {
        const isAuthenticated = store?.isAuthenticated();

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
