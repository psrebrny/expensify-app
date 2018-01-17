import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const HeaderClass = (props) => {
  return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Expensify</h1>
            </Link>
            <button className="button button--link" onClick={() => {
              props.logout();
            }}>Logout
            </button>
          </div>
        </div>
      </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch);
};

export const Header = connect(null, mapDispatchToProps)(HeaderClass);