import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App';
import Overview from './pages/Overview';
import SearchResult from './pages/SearchResult';
import Upload from './pages/Upload';
import Header from './components/Header';

import './AppRouter.css';

const mockData = [
	{
		title: 'Facial-Expression-Recognition',
		description:
			'A CNN based implementation on facial expression recognition (FER2013 and CK+), achieving 73.112% (state-of-the-art) in FER2013 and 94.64% in CK+ dataset',
		updated: '7 months ago',
		tags: ['facial expression, emotion, face detection'],
		calls: '3.1M'
	},
	{
		title: 'Facial-Expression-Recognition',
		description:
			'Facial-Expression-Recognition in TensorFlow. Detecting faces in video and recognize the expression(emotion).',
		updated: '9 months ago',
		tags: ['facial expression, emotion, video analysis, face detection'],
		calls: '1.1M'
	},
	{
		title: 'Expression-Net',
		description:
			'Deep 3DMM facial expression parameter extraction. This contains a deep convolutional neural network (DCNN) model for robust estimation of the 29 degrees-of-freedom, 3DMM face expression coefficients, directly from an unconstrained face image and without the use of face landmark detectors.',
		updated: '6 months ago',
		tags: ['facial expression, emotion, face detection'],
		calls: '2.8M'
	},
	{
		title: 'emojify',
		description: 'Turn your facial expression into an emoji',
		updated: '11 months ago',
		tags: ['facial expression, emotion, face detection, emoji'],
		calls: '800k'
	}
];

function Search() {
	return <SearchResult mockData={mockData} />;
}

function AppRouter() {
	return (
		<Router>
			<div>
				<Header />

				<div className='main-container'>
					<Route path='/' exact component={App} />
					<Route path='/overview/' component={Overview} />
					<Route path='/search/' component={Search} />
					<Route path='/upload/' component={Upload} />
				</div>
			</div>
		</Router>
	);
}

export default AppRouter;
