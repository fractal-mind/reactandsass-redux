require('../css/master.sass');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import recipeApp from './reducers';

let store = createStore(recipeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
