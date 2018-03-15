import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { confirmUser } from '../../actions';

class ConfirmationPage extends Component {
  state = {
    loading: true,
    success: false
  };

  async componentDidMount() {
    try {
      const { token } = await this.props.match.params;
      console.log(token);
      this.props.confirmUser(token);
      this.setState({ loading: false, success: true });
    } catch (e) {
      e => this.setState({ loading: false, success: false });
    }
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && (
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Header>Validating Email</Message.Header>
          </Message>
        )}

        {!loading &&
          success && (
            <Message icon>
              <Icon name="checkmark" />
              <Message.Content>
                <Message.Header>Email Validated!</Message.Header>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Message.Content>
            </Message>
          )}
      </div>
    );
  }
}

export default connect(null, { confirmUser })(ConfirmationPage);
