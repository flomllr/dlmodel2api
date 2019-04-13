import React, { Component } from 'react';
import SearchResults from './SearchResult';
import { Button, Card, Elevation } from '@blueprintjs/core';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='front'>
				<h1>
					An efficient way to find pretrained Deep Learning models and access
					them directly via API
				</h1>
				<p>
					search for specific criteria - upload your own pretrained model -
					browse through the most popular selection
				</p>
				<hr className='hrSmall' />
				<h2>Trending</h2>
				<SearchResults />
			</div>
		);
	}
}

export default App;
