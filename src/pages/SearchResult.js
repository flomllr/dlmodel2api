import React, { Component } from 'react';
import { Card, H4 } from '@blueprintjs/core';
import './SearchResult.css';

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

class SearchResultCard extends Component {
	cardOptions = {
		elevation: 1,
		interactive: true
	};

	render() {
		const { resultData } = this.props;
		const cardTitle = resultData['title'];
		const cardDesc = resultData['description'];
		const cardTags = resultData['tags'];
		const cardCallsCount = resultData['calls'];

		console.log(cardTags);

		return (
			<a className='cardLink' href='/overview'>
				<Card className='infoCard' {...this.cardOptions} style={cardStyles}>
					<div style={cardCol1}>
						<H4 className='cardTitle'>{cardTitle}</H4>
						<p>{cardDesc}</p>
						{/*<p style={finePrintStyle}>More sample sample sample sample text</p>*/}
						<div className='tagList'>
							<React.Fragment>
								{cardTags.map(tag => (
									<div className='tag'>{tag}</div>
								))}
							</React.Fragment>
						</div>
					</div>

					<div style={cardCol2}>Image</div>

					<div style={cardCol3}>
						<button class='bp3-button bp3-minimal bp3-icon-trending-up'>
							{cardCallsCount}
						</button>
					</div>
				</Card>
			</a>
		);
	}
}

class SearchResult extends Component {
	render() {
		const { mockData } = this.props;

		return (
			<React.Fragment>
				{mockData.map(e => (
					<SearchResultCard resultData={e} />
				))}
			</React.Fragment>
		);
	}
}

export default SearchResult;
