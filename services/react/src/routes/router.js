// Components
import NotFound from '../app/NotFound.js';
import HomePage from '../app/HomePage.js';

export default {
	routes: [
		{
			path: '/',
			component: HomePage,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};