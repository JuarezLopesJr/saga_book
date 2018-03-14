import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UserRoute = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

const mapStateToProps = ({ user: { token } }) => ({ token });

export default connect(mapStateToProps)(UserRoute);
