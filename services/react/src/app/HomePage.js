// Libs
import React from 'react';
// Components

// Routes
const HomePage = () => {
	return (
				<div className='bonsai'>
				<div className='header'>
					<div className="container">
						<img alt='' role='presentation' src={require('../img/logo.svg')} />
						<h1>Bonsai</h1>
					</div>
				</div>
				<div className='main'>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className={["meme","thumbnail"].join(' ')}>
									<img alt='' role='presentation' src={require('../img/cat.jpg')} />
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
};

export default HomePage;
