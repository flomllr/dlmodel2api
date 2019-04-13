import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Deploy your DL model to an API</h1>
				<p>Join the waiting list</p>
				<form name='contact' method='POST' data-netlify='true'>
					<p>
						<label>
							<input type='email' name='email' placeholder='email' />
						</label>
					</p>
					<p>
						<button type='submit'>Sign up</button>
					</p>
				</form>
			</React.Fragment>
		);
	}
}

export default App;
