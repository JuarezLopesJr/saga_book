import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import { connect } from 'react-redux';

import { loginUser } from '../../actions';

class LoginPage extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    // const { token } = this.props;
    this.setState({ errors });
    if (_isEmpty(errors)) {
      this.setState({ loading: true });
      this.props.loginUser(this.state.data);

      // this.props.history.push('/');
    }
  };

  validate = data => {
    const errors = {};

    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Provide a password';
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    const errorList = [];
    if (errors.username) errorList.push(errors.username);
    if (errors.email) errorList.push(errors.email);
    if (errors.password) errorList.push(errors.password);

    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header
              as="h2"
              color="teal"
              textAlign="center"
              style={{ marginTop: 25 }}
            >
              BookWorm App
            </Header>
            <Form size="large" onSubmit={this.onSubmit} loading={loading}>
              <Segment>
                <Form.Input
                  name="email"
                  value={data.email}
                  onChange={this.onChange}
                  error={!!errors.email}
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="user@example.com"
                />

                <Form.Input
                  name="password"
                  value={data.password}
                  onChange={this.onChange}
                  error={!!errors.password}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account ? <Link to="/signup">Sign Up</Link>
            </Message>
            {errorList.length ? (
              <Message
                error
                header="There was some errors with your submission"
                list={errorList}
              />
            ) : null}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// const mapStateToProps = ({ user: { token } }) => ({ token });

export default connect(null, { loginUser })(LoginPage);
