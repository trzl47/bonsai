// Libs
import React from 'react';
// styles
import '../../css/tool.css';

class Tool extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className='tool'>
				<fieldset className='field search'>
					<label>Image URL</label>
					<input
					className='textfield'
					type="text"
					onFocus={(e) => e.target.select()}
					value={this.props.searchField}
					onChange={(e) => this.props.updateSearch(e) } />
				</fieldset>
				<fieldset className='field top'>
					<label>Top Text</label>
					<input
					className='textfield'
					type="text"
					onFocus={(e) => e.target.select()}
					value={this.props.topField}
					onChange={(e) => this.props.updateTop(e) } />
				</fieldset>
				<fieldset className='field bottom'>
					<label>Bottom Text</label>
					<input
					className='textfield'
					type="text"
					onFocus={(e) => e.target.select()}
					value={this.props.botField}
					onChange={(e) => this.props.updateBot(e) } />
				</fieldset>
			</section>
		);
	}
}

export default Tool;