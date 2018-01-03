import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
      <div>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="is-active">Home</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </div>
  );
};