import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../containers/Header';

export class PrivateRouteClass extends Component {
  
  render() {
    
    const {isAuthenticated, component: Component, ...rest} = this.props;
    
    return (<Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
              <Header/>
              <Component {...props} />
            </div>
        ) : (
            <Redirect to="/"/>
        )
    )}/>);
  }
  
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.uid
  };
};

export default connect(mapStateToProps)(PrivateRouteClass);