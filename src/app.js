import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';

const App = () => {
  
  const store = configureStore();
  
  return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
  );
  
  
};

ReactDOM.render(<App/>, document.querySelector('#root'));