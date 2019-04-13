import React, { Component } from 'react';
import { Card, H4 } from '@blueprintjs/core';
import './SearchResults.css';
import img1 from '../assets/usage.png';
import img2 from '../assets/usage2.png';
import img3 from '../assets/usage3.png';
import img4 from '../assets/usage4.png';

const images = [img1, img2, img3, img4];

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
	paddingTop: '4px',
	textAlign: 'right',
	fontSize: '1.1em',
	width: '20%'
};

const cardCol3 = {
	textAlign: 'right',
	width: '20%'
};

const imgStyle = {
	width: '50%'
};

class SearchResultCard extends Component {
	cardOptions = {
		elevation: 1,
		interactive: true
	};

	render() {
		const { resultData, index } = this.props;
		const cardTitle = resultData['title'];
		const cardDesc = resultData['description'];
		const cardTags = resultData['tags'];
		const cardCallsCount = resultData['calls'];
		const cardPricing = resultData['pricing'];

		console.log(cardTags);

		return (
			<a className='cardLink' href='/overview'>
				<Card className='infoCard' {...this.cardOptions} style={cardStyles}>
					<div style={cardCol1}>
						<H4 className='cardTitle'>{cardTitle}</H4>
						<p>{cardDesc}</p>
						<div className='tagList'>
							<React.Fragment>
								{cardTags.map(tag => (
									<div className='tag'>{tag}</div>
								))}
							</React.Fragment>
						</div>
					</div>

					<div style={cardCol2}>
						{cardPricing}
						<div className="lightText">
							/1000 calls
						</div>
					</div>

					<div style={cardCol3}>
						<button class='bp3-button bp3-minimal bp3-icon-trending-up'>
							{cardCallsCount}
						</button>
						<img
							style={imgStyle}
							className='max100'
							src={images[index]}
							alt={'usage' + index}
						/>
					</div>
				</Card>
			</a>
		);
	}
}

class SearchResults extends Component {
	render() {
		const { mockData } = this.props;

		return (
			<React.Fragment>
				{mockData.map((e, index) => (
					<SearchResultCard resultData={e} index={index} />
				))}
			</React.Fragment>
		);
	}
}

export default SearchResults;
