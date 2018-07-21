// Libs
import React from 'react';
// styles
import '../../css/meme.css';

class Meme extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className='meme'>
				<img alt='image' role='presentation' src={this.props.searchField} />
				<h1 className='top-caption'> {this.props.topField} </h1>
				<h1 className='bottom-caption'> {this.props.botField} </h1>
			</section>
		);
	}
}

export default Meme;