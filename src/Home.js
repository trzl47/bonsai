// Libs
import React, { Component } from 'react';
// Components

export default class Home extends Component {
	// var main = function() {
	// 	$('#image-url').keyup(function() {
	// 		var url = $(this).val();
	// 	$('.thumbnail img').attr('src', url);
	// 	});
	//
	// 	$('#top-text').keyup(function() {
	// 		var top = $(this).val();
	// 		$('.top-caption').text(top);
	// 	});
	//
	// 	$('#bottom-text').keyup(function() {
	// 		var bottom = $(this).val();
	// 		$('.bottom-caption').text(bottom);
	// 	});
	// };
	//
	// $(document).ready(main);
	render() {
		return(
			<div className='bonsai'>
				<div className='header'>
					<div className="container">
						<img alt='' role='presentation' src={require('./assets/logo.svg')} />
						<h1>Bonsai</h1>
					</div>
				</div>
				<div className='main'>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className={["meme","thumbnail"].join(' ')}>
									<img alt='' role='presentation' src={require('./assets/cat.jpg')} />
									<h1 className='top-caption'>U say something?</h1>
									<h1 className='bottom-caption'>I'm all ears</h1>
								</div>
							</div>
							<div className="col-md-6">
								<div className='tool'>
									<h2>Create a meme</h2>
									<form role="form">
										<div className="form-group">
											<label>Image URL</label>
											<input id="image-url" type="text" className="form-control" />
										</div>
										<div className="form-group">
											<label>Top text</label>
											<input id="top-text" type="text" className="form-control" />
										</div>
										<div className="form-group">
											<label>Bottom text</label>
											<input id="bottom-text" type="text" className="form-control" />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
