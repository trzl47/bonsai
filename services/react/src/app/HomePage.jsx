// Libs
import React from 'react';
// Components
import Header from './components/Header';
import Meme from './components/Meme';
// styles
import '../css/homepage.css';
// context
import { StateProvider, StateContext } from './context/state-context.js';

const HomePage = () => {
	return (
		<section className='bonsai'>
			<StateProvider>
				<Header />
				<StateContext.Consumer>
				{
					({searchField, topField, botField}) => {
						return (
							<Meme
							searchField={searchField}
							topField={topField}
							botField={botField} />
						);
					}
				}
				</StateContext.Consumer>
			</StateProvider>
		</section>
	);
};

export default HomePage;