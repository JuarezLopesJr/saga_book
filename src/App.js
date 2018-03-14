import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => {
  return (
    <div>
      <Route location={location} exact path="/" component={HomePage} />

      <GuestRoute
        location={location}
        exact
        path="/signup"
        component={SignupPage}
      />

      <GuestRoute
        location={location}
        exact
        path="/login"
        component={LoginPage}
      />

      <UserRoute
        location={location}
        exact
        path="/dashboard"
        component={DashboardPage}
      />
    </div>
  );
};

export default App;
