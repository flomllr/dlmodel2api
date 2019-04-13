import React, { Component } from 'react';
import {
	Button,
	Card,
	Classes,
	Elevation,
	Icon,
	H4,
	H5,
	H6
} from '@blueprintjs/core';
import './SearchResult.css';

const finePrintStyle = {
	color: 'gray',
	fontSize: '0.9em'
};

const cardStyles = {
	margin: '30px 0',
	display: 'flex',
	alignItems: 'flex-start',
	flexWrap: 'nowrap'
};

const cardCol1 = {
	width: '60%'
};

const cardCol2 = {
	textAlign: 'right',
	fontSize: '1.1em',
	width: '20%'
};

const cardCol3 = {
	textAlign: 'right',
	width: '20%'
};

const mockSearchResults = {};

class SearchResultCard extends Component {
	cardOptions = {
		elevation: 1,
		interactive: true
	};

	render() {
		const { resultData } = this.props;

		return (
			<Card className='infoCard' {...this.cardOptions} style={cardStyles}>
				<div style={cardCol1}>
					<H4>
						<a className='cardTitle' href='/overview'>
							Analytical applications
						</a>
					</H4>
					<p>
						User interfaces that enable people to interact smoothly with data,
						ask better questions, and make better decisions. Long description
						ong description user interfaces that enable people to interact
						smoothly with data, ask better questions, and make better decisions.
					</p>
					{/*<p style={finePrintStyle}>More sample sample sample sample text</p>*/}
					<div className='tagList'>
						<div className='tag'>Speech-to-text</div>
						<div className='tag'>Natural language</div>
						<div className='tag'>API</div>
					</div>
				</div>

				<div style={cardCol2}>Image</div>

				<div style={cardCol3}>
					<button class='bp3-button bp3-minimal bp3-icon-star'>1999</button>
				</div>
			</Card>
		);
	}
}

class SearchResult extends Component {
	render() {
		const mockData = ['a', 'b', 'c'];
		const resultsData = [];

		return (
			<React.Fragment>
				{mockData.map(e => (
					<SearchResultCard />
				))}
			</React.Fragment>
		);
	}
}

export default SearchResult;
