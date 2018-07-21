// Libs
import React from 'react';

export const StateContext = React.createContext();

export class StateProvider extends React.Component {
	constructor(props) {
		super(props);

		const DEVMODE = process.env.NODE_ENV == 'development' ? true : false;
		const HOST = DEVMODE ? 'localhost' : process.env.VHOST;
		const PRTCL = DEVMODE ? 'http' : 'https';

		this.updateSearch = (e) => {
			e.persist();
			this.setState({ searchField: e.target.value });
		};

		this.updateTop = (e) => {
			e.persist();
			this.setState({ topField: e.target.value });
		};
		this.updateBot = (e) => {
			e.persist();
			this.setState({ botField: e.target.value });
		};

		this.state = {
			searchField: require('../../img/cat.jpg'),
			topField: 'you say sum\'n?',
			botField: 'I\'m all ears',
		};
	}

	render()  {
		return (
			<StateContext.Provider
			value={{
				...this.state,
				updateSearch: this.updateSearch,
				updateTop: this.updateTop,
				updateBot: this.updateBot,
			}}>
				{ this.props.children }
			</StateContext.Provider>
		);
	}
}