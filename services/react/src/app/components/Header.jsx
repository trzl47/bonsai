// Libs
import React from 'react';
// components
import Tool from './Tool';
// styles
import '../../css/header.css';
// context
import { StateContext } from '../context/state-context.js';

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<img alt='Bonsai logo' role='presentation' src={require('../../img/logo.svg')} />
				<h1 className='title'>Bonsai</h1>
			</div>
			<StateContext.Consumer>
			{
				({
					searchField,updateSearch,
					topField,updateTop,
					botField,updateBot
				}) => {
					return (
						<Tool
						searchField={searchField} updateSearch={updateSearch}
						topField={topField} updateTop={updateTop}
						botField={botField} updateBot={updateBot} />
					);
				}
			}
			</StateContext.Consumer>
		</header>
	);
};

export default Header;