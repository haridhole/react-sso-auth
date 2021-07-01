import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const UserProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const user = auth.getCurrentUser();
  return (
    <Route
      {...rest}
      render={props => {
        if (!user || (user && user.isAdmin))
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default UserProtectedRoute;
