import React, { Component } from 'react';
import SearchResults from './SearchResult';
import './App.css';

class App extends Component {
	render() {
		const mockData = [
			{
				title: 'DeepSpeech',
				description:
					"DeepSpeech is an open source Speech-To-Text engine, using a model trained by machine learning techniques based on Baidu's Deep Speech research paper. Project DeepSpeech uses Google's TensorFlow to make the implementation easier.",
				updated: 'a day ago',
				tags: ['audio', 'speech', 'text', 'NLP'],
				calls: '2.8M'
			},
			{
				title: 'video-classification-3d-cnn-pytorch',
				description:
					'This is a pytorch code for video (action) classification using 3D ResNet trained by this code. The 3D ResNet is trained on the Kinetics dataset, which includes 400 action classes. This code uses videos as inputs and outputs class names and predicted class scores for each 16 frames in the score mode. In the feature mode, this code outputs features of 512 dims (after global average pooling) for each 16 frames.',
				updated: '6 months ago',
				tags: ['video', 'classification', 'action'],
				calls: '1.9M'
			},
			{
				title: 'ssd.pytorch',
				description:
					'A PyTorch implementation of Single Shot MultiBox Detector from the 2016 paper by Wei Liu, Dragomir Anguelov, Dumitru Erhan, Christian Szegedy, Scott Reed, Cheng-Yang, and Alexander C. Berg.',
				updated: 'a month ago',
				tags: ['classification', 'images', 'single-shot', 'multibox'],
				calls: '2.1M'
			},
			{
				title: 'faster-rcnn.pytorch',
				description:
					'This project is a faster pytorch implementation of faster R-CNN, aimed to accelerating the training of faster R-CNN object detection models.',
				updated: '18 days ago',
				tags: ['classification', 'images'],
				calls: '3.1M'
			}
		];
		return (
			<div className='front'>
				<h1>
					An efficient way to find pre-trained Deep Learning models and access
					them directly via API
				</h1>
				<p>
					search for specific criteria - upload your own pretrained model -
					browse through the most popular selection
				</p>
				<hr className='hrSmall' />
				<h2>Trending</h2>
				<SearchResults mockData={mockData} />
			</div>
		);
	}
}

export default App;
