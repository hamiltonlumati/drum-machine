import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import Screen from './layout/screen';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <Screen />
      </Provider>
  </React.StrictMode>,
)
