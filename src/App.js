import React from 'react';
import Home from './Component/Home'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Routes from './Component/routing/Routes'


import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Routes} />
        </Switch>
      </BrowserRouter>
    </Provider >

  );
}

export default App;
