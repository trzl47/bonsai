// Libs
import React from 'react';
// import axios from 'axios';

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

		this.handleSubmit = (e) => {
			e.preventDefault();

			this.setState({ loading: true });

			// axios.get(`${PRTCL}://${HOST}/weather`, {...this.state})
			// .then((response) => {
			// 	this.setState({
			// 		data: response.data,
			// 	});
			// })
			// .catch(error => {
			// 	this.setState({
			// 		data: { message: 'Error fetching data', error: error },
			// 	});
			// })
			// .then(() => {
			// 	this.setState({
			// 		loading: false
			// 	});
			// });
		};

		this.getImage = (id) => {
			return `${PRTCL}://openweathermap.org/img/w/${id}.png`;
		};

		this.state = {
			searchField: '',
			topField: 'you say sum\'n?',
			botField: 'I\'m all ears',
			loading: false,
			data: {}
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
				handleSubmit: this.handleSubmit,
				getImage: this.getImage,
			}}>
				{ this.props.children }
			</StateContext.Provider>
		);
	}
}