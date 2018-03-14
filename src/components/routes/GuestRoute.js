import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !token ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

const mapStateToProps = ({ user: { token } }) => ({ token });

export default connect(mapStateToProps)(GuestRoute);
