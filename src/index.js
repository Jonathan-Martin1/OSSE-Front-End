import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Redux/Reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <LandingPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
