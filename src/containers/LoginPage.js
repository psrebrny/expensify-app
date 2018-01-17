import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { bindActionCreators } from 'redux';

export class LoginPageClass extends Component {
  
  render() {
    return (
        <div className="box-layout">
          <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expense under control.</p>
            <button className="button" onClick={() => {
              this.props.login();
            }}>Login with Google
            </button>
          </div>
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