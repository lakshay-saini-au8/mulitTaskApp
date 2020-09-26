import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  loggedUser,

  component: Component,
  ...restProps
}) => {
  return !loggedUser ? (
    <Redirect to="/login" />
  ) : (
    <Route
      {...restProps}
      render={(routeProps) => <Component {...routeProps} />}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.authState.loggedUser,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
