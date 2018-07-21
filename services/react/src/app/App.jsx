import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.jsx';
// components
// routes
import router from '../routes/router';
// styles
import '../css/reset.css';
import '../css/index.css';

class App extends Component {
	render() {
		let routes = router.routes.map(({ path, component, exact }, i) =>
			<Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
		);
		let redirects = router.redirects.map(({ from, to, status }, i) =>
			<RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
		);
		return (
			<React.Fragment>
				<Switch>
					{routes}
					{redirects}
				</Switch>
			</React.Fragment>
		);
	}
}
export default App;