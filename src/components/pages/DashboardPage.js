import React from 'react';
import { connect } from 'react-redux';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ confirmed }) => {
  return <div>{!confirmed && <ConfirmEmailMessage />}</div>;
};

const mapStateToProps = ({ user: { confirmed } }) => ({ confirmed });

export default connect(mapStateToProps)(DashboardPage);
