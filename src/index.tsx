import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Rotas from './rota';
import store from './store/index';
import { Provider} from 'react-redux';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
