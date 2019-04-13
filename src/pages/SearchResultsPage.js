import SearchResults from '../components/SearchResults';
import React, { Component } from 'react';

class SearchResultsPage extends Component {
	render() {
		const searchMockData = [
			{
				title: 'Facial-Expression-Recognition.Pytorch',
				description:
					'A CNN based pytorch implementation on facial expression recognition (FER2013 and CK+), achieving 73.112% (state-of-the-art) in FER2013 and 94.64% in CK+ dataset',
				updated: '7 months ago',
				pricing: '$0.10/1000 calls',
				tags: ['facial expression', 'emotion', 'face detection'],
				calls: '5123',
				upvotes: '1341'
			},
			{
				title: 'Facial-Expression-Recognition',
				description:
					'Facial-Expression-Recognition in TensorFlow. Detecting faces in video and recognize the expression(emotion).',
				updated: '9 months ago',
				pricing: '$0.30/1000 calls',
				tags: ['facial expression', 'emotion', 'video', 'face detection'],
				calls: '4211',
				upvotes: '941'
			},
			{
				title: 'Expression-Net',
				description:
					'Deep 3DMM facial expression parameter extraction. This contains a deep convolutional neural network (DCNN) model for robust estimation of the 29 degrees-of-freedom, 3DMM face expression coefficients, directly from an unconstrained face image and without the use of face landmark detectors.',
				updated: '6 months ago',
				pricing: '$2/1000 calls',
				tags: ['facial expression', 'emotion', 'face detection'],
				calls: '51041',
				upvotes: '2341'
			},
			{
				title: 'emojify',
				description: 'Turn your facial expression into an emoji',
				updated: '11 months ago',
				pricing: '$0.6/1000 calls',
				tags: ['facial expression', 'emotion', 'face detection', 'emoji'],
				calls: '5123',
				upvotes: '1341'
			}
		];

		console.log(searchMockData);
		return (
			<div>
				<br />
				<h2>Showing models related to facial recognition</h2>
				<SearchResults mockData={searchMockData} />
			</div>
		);
	}
}

export default SearchResultsPage;
