import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { bindActionCreators } from 'redux';

export class LoginPageClass extends Component {
  
  render() {
    return (
        <div>
          <button onClick={() => {
            this.props.login();
          }}>Login
          </button>
        </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login
  }, dispatch);
};

export const LoginPage = connect(null, mapDispatchToProps)(LoginPageClass);