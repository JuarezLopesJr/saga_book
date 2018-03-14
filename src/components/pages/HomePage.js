import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { logUserOut } from '../../actions';

const HomePage = ({ token, logUserOut }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {token ? (
        <Button negative onClick={logUserOut}>
          Log Out
        </Button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

const mapStateToProps = ({ user: { token } }) => ({ token });

export default connect(mapStateToProps, { logUserOut })(HomePage);
