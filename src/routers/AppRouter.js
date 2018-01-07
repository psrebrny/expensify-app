import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header';
import { AddExpensePage } from '../containers/AddExpensePage';
import { EditExpensePage } from '../containers/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { ExpenseDashboardPage } from '../components/DashboardPage';
import { NotFoundPage } from '../components/NotFoundPage';
import createBrowserHistory from 'history/createBrowserHistory';
import { bindActionCreators } from 'redux';
import { getExpenses } from '../actions/expenses';
import { connect } from 'react-redux';

const history = createBrowserHistory();

class AppRouterClass extends Component {
  
  constructor(props) {
    super(...arguments);
    props.getExpenses();
  }
  
  render() {
    return (
        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              <Route path="/create" component={AddExpensePage}/>
              <Route path='/edit/:id' component={EditExpensePage}/>
              <Route path='/help' component={HelpPage}/>
              <Route exact path="/" component={ExpenseDashboardPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        
        </Router>
    );
  }
  
  
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getExpenses,
  }, dispatch);
};

export const AppRouter = connect(null, mapDispatchToProps)(AppRouterClass);