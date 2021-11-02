import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { AppProviders } from './Providers';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import routes from './routes';

const App = () => (
  <AppProviders>
      <Router>
        <Switch>
          {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
  </AppProviders>
);

export default App;
