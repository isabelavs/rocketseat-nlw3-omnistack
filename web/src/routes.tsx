import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Map from './pages/LocalsMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/locals-map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
