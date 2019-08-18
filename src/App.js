import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
      </Router>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
