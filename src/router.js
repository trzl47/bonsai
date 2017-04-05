// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './Home.js';
import NotFound from './NotFound';

// Routes
const routes = (
  <Router>
		<div>
			<Switch>
				<Route exact={true} pattern="/" component={Home} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
  </Router>
);

export default routes;
