import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import decode from 'jwt-decode';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { loginUser } from './actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

if (localStorage.loginAuth) {
  const payload = decode(localStorage.loginAuth);
  const user = {
    token: localStorage.loginAuth,
    email: payload.email,
    confirmed: payload.confirmed
  };
  store.dispatch(loginUser(user));
}

ReactDOM.render(
  <div className="ui container">
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
