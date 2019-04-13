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
		const cardTitle = resultData["title"];
		const cardDesc = resultData["description"];
		const cardTags = resultData["tags"];
		const cardCallsCount = resultData["calls"];

		console.log(cardTags);

		return (
			<Card className='infoCard' {...this.cardOptions} style={cardStyles}>
				<div style={cardCol1}>
					<H4>
						<a className='cardTitle' href='/overview'>
							{cardTitle}
						</a>
					</H4>
					<p>
						{cardDesc}
					</p>
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
					<button class='bp3-button bp3-minimal bp3-icon-trending-up'>{cardCallsCount}</button>
				</div>
			</Card>
		);
	}
}

class SearchResult extends Component {
	render() {
		const mockData = [
			{
					"title":"DeepSpeech",
					"description":"DeepSpeech is an open source Speech-To-Text engine, using a model trained by machine learning techniques based on Baidu's Deep Speech research paper. Project DeepSpeech uses Google's TensorFlow to make the implementation easier.",
					"updated":"a day ago",
					"tags":["audio", "speech", "text", "NLP"],
					"calls":"2.8M"
			},
			{
					"title":"video-classification-3d-cnn-pytorch",
					"description":"This is a pytorch code for video (action) classification using 3D ResNet trained by this code. The 3D ResNet is trained on the Kinetics dataset, which includes 400 action classes. This code uses videos as inputs and outputs class names and predicted class scores for each 16 frames in the score mode. In the feature mode, this code outputs features of 512 dims (after global average pooling) for each 16 frames.",
					"updated":"6 months ago",
					"tags":["video", "classification", "action"],
					"calls":"1.9M"
			},
	    {
	        "title":"ssd.pytorch",
	        "description":"A PyTorch implementation of Single Shot MultiBox Detector from the 2016 paper by Wei Liu, Dragomir Anguelov, Dumitru Erhan, Christian Szegedy, Scott Reed, Cheng-Yang, and Alexander C. Berg.",
	        "updated":"a month ago",
	        "tags":["classification", "images", "single-shot", "multibox"],
	        "calls":"2.1M"
	    },
	    {
	        "title":"faster-rcnn.pytorch",
	        "description":"This project is a faster pytorch implementation of faster R-CNN, aimed to accelerating the training of faster R-CNN object detection models.",
	        "updated":"18 days ago",
	        "tags":["classification", "images"],
	        "calls":"3.1M"
	    }

		];

		const resultsData = [];

		return (
			<React.Fragment>
				{mockData.map(e => (
					<SearchResultCard resultData={e}/>
				))}
			</React.Fragment>
		);
	}
}

export default SearchResult;
