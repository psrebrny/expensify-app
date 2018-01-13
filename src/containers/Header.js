import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const HeaderClass = (props) => {
  return (
      <div>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={() => {
          props.logout();
        }}>Logout
        </button>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch);
};

export const Header = connect(null, mapDispatchToProps)(HeaderClass);