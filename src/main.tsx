import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import Screen from './layout/screen';
import Author from './components/author';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <Screen />
        <Author />
      </Provider>
  </React.StrictMode>,
)
