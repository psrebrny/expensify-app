import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { AddExpensePage } from '../containers/AddExpensePage';
import { EditExpensePage } from '../containers/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { ExpenseDashboardPage } from '../components/DashboardPage';
import { NotFoundPage } from '../components/NotFoundPage';
import createBrowserHistory from 'history/createBrowserHistory';
import { bindActionCreators } from 'redux';
import { getExpenses } from '../actions/expenses';
import { connect } from 'react-redux';
import { LoginPage } from '../containers/LoginPage';
import { firebase } from '../firebase/firebase';
import { setStateOnLogin, setStateOnLogout } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

class AppRouterClass extends Component {
  
  constructor(props) {
    super(...arguments);
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setStateOnLogin({uid: user.uid});
        
        props.getExpenses();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
        
      } else {
        this.props.setStateOnLogout();
        history.push('/');
      }
      
    });
    
    
  }
  
  render() {
    return (
        <Router history={history}>
          <div>
            <Link to="/help">Help</Link>
            <Switch>
              <PrivateRoute path="/create" component={AddExpensePage}/>
              <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
              <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}/>
              <Route path='/help' component={HelpPage}/>
              <PublicRoute exact path="/" component={LoginPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        
        </Router>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getExpenses,
    setStateOnLogin,
    setStateOnLogout
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export const AppRouter = connect(mapStateToProps, mapDispatchToProps)(AppRouterClass);