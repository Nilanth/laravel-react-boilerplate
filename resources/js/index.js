import React from 'react';
import ReactDOM from 'react-dom';
import App from './ReactApp';
import {Provider} from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  /*Redux Provider is included access the store values from anywhere inside the child components.*/
  <Provider store={store()}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);
